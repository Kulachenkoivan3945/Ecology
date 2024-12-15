<template>
  <v-row class="flex-column w-100 w-100 py-8 bg-gradient__gray ma-0" style="min-height: 400px" no-gutters>
    <span class="text-h4 text-center pb-4">Наши контргагенты</span>
    <span class="text-h6 text-center pb-4">
      Наши контрагенты знают: Мы гарантируем надёжность, прозрачность и взаимное уважение в каждом аспекте сотрудничества.
    </span>
    <v-row class="flex-row w-100 justify-space-around ga-5" no-gutters>
      <v-col
        v-for="agent in contragents"
        class="bg-white flex-grow-0 d-flex flex-column align-center justify-center pa-4 rounded-xl"
        style="backdrop-filter: blur(2px); min-width: 250px; max-height: 180px"
      >
        <span>{{ agent.title }}</span>
        <v-img
          :src="agent.logo"
          width="200"
          height="80"
        />
      </v-col>
    </v-row>
  </v-row>
</template>

<script setup lang="ts">
import bg from '@/assets/img/contragents-4.jpg';
import rosneft from '@/assets/img/contragents-logo/rosneft.jpg';
import rzd from '@/assets/img/contragents-logo/rzd.jpg';
import rosseti from '@/assets/img/contragents-logo/rosseti.jpg';

const contragents = [
  {
    logo: rosneft,
    title: 'ПАО «НК «Роснефть»',
  },
  {
    logo: rzd,
    title: 'филиалы ОАО «РЖД»',
  },
  {
    logo: rosseti,
    title: 'филиалы ПАО «Россети»',
  },
];
</script>

<style scoped>

.bg-gradient__gray {
  background: radial-gradient(at 13.814868431089122% 36.55432836575234%, hsla(33.33333333333323, 100%, 98.23529411764707%, 1) 0%, hsla(33.33333333333323, 100%, 98.23529411764707%, 0) 100%), radial-gradient(at 26.757512289394448% 14.55716430928402%, hsla(201.99999999999997, 100%, 94.11764705882352%, 1) 0%, hsla(201.99999999999997, 100%, 94.11764705882352%, 0) 100%), radial-gradient(at 71.81123062379334% 73.35997062171711%, hsla(201.99999999999997, 100%, 94.11764705882352%, 1) 0%, hsla(201.99999999999997, 100%, 94.11764705882352%, 0) 100%), radial-gradient(at 80.67571417506147% 77.36934613667599%, hsla(33.33333333333323, 100%, 98.23529411764707%, 1) 0%, hsla(33.33333333333323, 100%, 98.23529411764707%, 0) 100%);
}
</style>
