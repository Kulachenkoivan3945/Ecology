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
          <v-text-field class="pt-2" variant="outlined" label="Ведите ваш телефон или email для связи"/>
          <v-text-field class="pt-2" variant="outlined" label="Оставьте комментарий"/>
          <v-file-input class="pt-2" variant="outlined" label="Загрузите файл"/>
          <v-btn class="w-100 bg-green-darken-4">
            Отправить
          </v-btn>
        </v-card-item>
      </v-card>
    </v-row>
  </v-parallax>
</template>

<script setup lang="ts">
import bg from '@/assets/img/request-bg-3.jpg';
</script>

<style scoped>
.bg-opacity{
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
}
</style>
