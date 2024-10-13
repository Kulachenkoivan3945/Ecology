<template>
  <v-row class="w-100 px-4 justify-space-between position-sticky bg-white" style="left: 0; top: 0; z-index: 2000; height: 80px; opacity: 0.9">
    <v-col class="d-flex flex-row align-center flex-grow-0 pa-0">
      <v-img
        :src="logo"
        width="40"
        height="40"
      />
      <span class="px-6 text-h6 text-green-darken-4 font-weight-bold"> Ecology</span>
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
</template>

<script setup lang="ts">
import logo from '@/assets/img/logo.png';

</script>

<style scoped>

</style>
