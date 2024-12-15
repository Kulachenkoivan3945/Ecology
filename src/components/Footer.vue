<template>
  <v-footer id="contactsContainer" class="w-100 pa-4 bg-gradient" style="min-height: max-content">
    <v-row class="flex-row w-100 w-100 ma-0 justify-space-around" no-gutters>

      <v-col :cols="cols" class="d-flex flex-column">
        <v-col class="d-flex align-center pa-0">
          <v-img
            :src="logo"
            class="flex-grow-0"
            width="40"
            height="40"
          />
          <span class="px-3 text-no-wrap text-h5">
              ИП Лихачев А.А.
            </span>
        </v-col>
        <span class="text-h5 py-4">
          Контакты
        </span>
        <v-row class="flex-row  align-center">
          <v-col class="flex-grow-0">
            <v-icon
              icon="mdi-phone"
              color="green-darken-4"
            />
          </v-col>
          <v-col class="flex-grow-0 d-flex flex-column">
            <a
              href="tel:+79889653575"
              style="color: unset"
              class="text-green-darken-4"
            > +7-988-965-35-75</a>
            <span class="text-no-wrap">
              С 8:00 до 20-00 24/7
            </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="flex-grow-0">
            <v-icon
              icon="mdi-email"
              color="green-darken-4"
            />
          </v-col>
          <v-col class="flex-grow-0">
            <a
              href="mailto:Lihaceco@yandex.ru"
              style="color: unset"
              class="text-green-darken-4"
            >Lihaceco@yandex.ru</a>
          </v-col>
        </v-row>
        <v-row class="flex-column pb-8">
          <v-col class="py-1">
            <span>Адрес: Волгоград  Краснознаменская улица, 5А, </span>
          </v-col>
          <v-col class="py-1">
            <span>ИП Лихачев А.А.</span>
          </v-col>
          <v-col class="py-1">
            <span>ОГРН 324344300087113</span>
          </v-col>
          <v-col class="py-1">
            <span>ИНН 345402282140</span>
          </v-col>
        </v-row>
      </v-col>

      <v-col :cols="cols" class="d-flex flex-column">
        <span class="text-h5">
          Услуги
        </span>
        <v-list class="bg-transparent">
          <router-link
            v-for="link in linksList"
            :to="link.link"
            style="color: unset;"
            class="text-decoration-none text-green-darken-4 font-weight-bold"
          >
            <v-list-item :title="link.name" class="px-0" density="compact"/>
          </router-link>
        </v-list>
      </v-col>
    </v-row>
  </v-footer>
</template>
<script setup lang="ts">
import logo from '@/assets/img/logo.png';
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useDisplayState } from '@/stores/displayState';
import { PageLinks } from '@/enums';

const { isMobileBreakpoint } = storeToRefs(useDisplayState());
const cols = computed(() => {
  return isMobileBreakpoint.value ? 10 : 4;
});

const linksList = [
  {
    name: 'Воздух',
    link: PageLinks.AIR,
  },
  {
    name: 'Отходы',
    link: PageLinks.WASTES,
  },
  {
    name: 'Иное',
    link: PageLinks.OTHER,
  },
  {
    name: 'Отчетность',
    link: PageLinks.REPORT,
  },
];
</script>

<style scoped>

.bg-gradient {
  background: radial-gradient(at 46.818714028860356% 23.04760625881672%, hsla(0, 0%, 100%, 1) 0%, hsla(0, 0%, 100%, 0) 100%), radial-gradient(at 5.710285968386941% 50.38061089955435%, hsla(140, 47.05882352941176%, 80%, 1) 0%, hsla(140, 47.05882352941176%, 80%, 0) 100%), radial-gradient(at 56.79298969227218% 74.06939123203769%, hsla(0, 0%, 100%, 1) 0%, hsla(0, 0%, 100%, 0) 100%);
  font-size: 1.15rem;
}

:deep(.v-list-item-title){
  font-size: unset;
}
</style>
