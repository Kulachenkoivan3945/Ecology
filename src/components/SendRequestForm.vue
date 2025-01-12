<template>
  <v-parallax :src="bg" style="max-height: min-content" id="requestContainer">
    <v-row class="flex-column w-100 h-100 py-8 justify-center align-center bg-opacity" no-gutters>
      <span class="text-h4 text-center text-white" style="max-width: 600px;">
      Получить коммерческое предложение или отправить запрос
    </span>
      <v-card class="pa-4 ma-4 rounded-lg" style="max-width: 600px">
        <v-card-title class="text-center">
        <span class="text-pre-wrap text-center">
          Отправьте старые документы и пропишите какие необходимы изменения, либо просто оставьте заявку и мы с Вами свяжемся
        </span>
        </v-card-title>
        <v-card-item>
          <v-text-field
            v-model="name"
            class="pt-2"
            variant="outlined"
            label="Введите ваш телефон или email для связи"
          />
          <v-textarea
            v-model="comment"
            rows="3"
            class="pt-2"
            variant="outlined"
            label="Оставьте комментарий"
          />
          <v-file-input
            v-model="files"
            class="pt-2"
            variant="outlined"
            label="Загрузите файл(ы)"
            multiple
          />
          <v-btn
            :loading="isLoading"
            :disabled="isTimerActive"
            class="w-100 bg-green-darken-4 mb-3"
            @click="sendForm"
          >
            Отправить
            <span v-if="isTimerActive" class="text-body-1">( недоступно еще {{ timerValue }} секунд )</span>
          </v-btn>
          <span v-if="isError" class="text-red my-3">{{ errorText }}</span>
          <v-snackbar
            v-model="snackbar"
            color="success"
            multi-line
          >
            Сообщение успешно отправлено

            <template v-slot:actions>
              <v-btn
                class="text-body-1"
                variant="text"
                icon
                @click="snackbar = false"
              >
                <v-icon
                  icon="mdi-close"
                />
              </v-btn>
            </template>
          </v-snackbar>
        </v-card-item>
      </v-card>
    </v-row>
  </v-parallax>
</template>

<script setup lang="ts">
import bg from '@/assets/img/request-bg-3.jpg';
import { ref } from 'vue';
import api from '@/api/api';

const name = ref('');
const comment = ref('');
const files = ref();

const snackbar = ref(false);
const isLoading = ref(false);
const isError = ref(false);
const errorText = ref('');

const isTimerActive = ref(false);
const timerValue = ref(false);

const startTimer = () => {
  isTimerActive.value = true;
  timerValue.value = 60;
  const interval = setInterval(() => {
    timerValue.value--;
    if (timerValue.value <= 0) {
      isTimerActive.value = false;
      clearInterval(interval);
    }
  }, 1000);
};

const checkValidation = () => {
  if (!name.value || !comment.value) {
    isError.value = true;
    errorText.value = 'Контакт для связи и комментарий обязательны для заполнения';
  }
  if (files.value?.length > 10) {
    isError.value = true;
    errorText.value = 'Доступно не более 10 файлов для загрузки';
  }
};

const sendForm = async () => {
  const result = {
    name: name.value,
    comment: comment.value,
    files: files.value,
  };
  isLoading.value = true;
  isError.value = false;
  errorText.value = '';

  try {

    checkValidation();
    if (isError.value) {
      throw new Error();
    }

    let formData = new FormData();
    formData.set('name', result.name);
    formData.set('comment', result.comment);
    result.files?.forEach((file, fileIndex) => {
      formData.append(`file_${fileIndex}`, file);
    });
    const res = await api.uploadForm(formData);
    console.log(res.data);
    if (res.data?.includes('Message could not be sent')) {
      isError.value = true;
      errorText.value = 'Произошла ошибка при отправке сообщения';
    } else {
      startTimer();
      snackbar.value = true;
    }
    isLoading.value = false;
  } catch (e) {
    console.error(e);
    isLoading.value = false;
    isError.value = true;
  }
};
</script>

<style scoped>
.bg-opacity {
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
}
</style>
