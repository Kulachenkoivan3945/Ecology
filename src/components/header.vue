<template>

  <v-app-bar
    v-if="isMobileBreakpoint"
    style="background-color: rgba(27,94,32,0.8); backdrop-filter: blur(5px)"
    prominent
    density="compact"
  >
    <v-app-bar-nav-icon variant="text" color="white"  @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
  </v-app-bar>
  <v-row
    v-else
    class="w-100 px-4 justify-space-between position-sticky"
    style="left: 0; top: 0; z-index: 2000; height: 80px; background-color: rgba(255,255,255,0.9); backdrop-filter: blur(5px)"
  >
    <v-col class="d-flex flex-row align-center flex-grow-0 pa-0 cursor-pointer" @click="router.push('/')">
      <v-img
        :src="logo"
        width="40"
        height="40"
      />
      <span class="px-6 text-h6 text-green-darken-4 font-weight-bold"> Ecology</span>
    </v-col>
    <v-col class="flex-grow-0 d-flex align-center">
      <v-menu
        class="px-4"
        width="200px"
        open-on-hover
        open-on-click
      >
        <template v-slot:activator="{ props }">
          <div class="d-flex flex-row align-center">
            <span
              v-bind="props"
              class="cursor-pointer text-h6 text-green-darken-4 font-weight-bold"
            >
            Услуги
          </span>
            <v-icon
              icon=" mdi-chevron-down"
            />
          </div>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in linksList"
            :key="index"
            :value="index"
            class="pa-0"
          >
            <RouterLink :to="item.link" class=" d-block text-decoration-none text-black w-100 h-100 pa-4">
              {{ item.name }}
            </RouterLink>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-col>
    <v-col class="d-flex flex-row align-center justify-end ga-3 flex-grow-0">
      <v-btn
        icon="mdi-phone"
        color="green-darken-4"
        size="40"
      />
      <v-btn
        icon="mdi-email"
        color="green-darken-4"
        size="40"
      />
      <span class="text-h5 text-green-darken-4 font-weight-bold text-no-wrap">8(800)555-35-35</span>
    </v-col>
  </v-row>

  <v-navigation-drawer
    v-model="drawer"
    location="left"
    temporary
  >
    <v-list>
      <v-list-item
        :value="-1"
        class="pa-0"
      >
        <RouterLink to="/" class=" d-block text-decoration-none text-black w-100 h-100 pa-4">
          Главная
        </RouterLink>
      </v-list-item>
      <v-list-item
        v-for="(item, index) in linksList"
        :key="index"
        :value="index"
        class="pa-0"
      >
        <RouterLink :to="item.link" class=" d-block text-decoration-none text-black w-100 h-100 pa-4">
          {{ item.name }}
        </RouterLink>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import logo from '@/assets/img/logo.png';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useDisplayState } from '@/stores/displayState';

const router = useRouter();

const linksList = [
  {
    name: 'Воздух',
    link: '/air',
  },
  {
    name: 'Отходы',
    link: '/air',
  },
  {
    name: 'Иное',
    link: '/air',
  },
];

const chosenPage = ref('')
const drawer = ref(false)

const { isMobileBreakpoint } = storeToRefs(useDisplayState());
</script>

<style scoped>

</style>
