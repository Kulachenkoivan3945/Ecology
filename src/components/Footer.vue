<template>
  <v-footer class="bg-green-darken-4 w-100 pa-4" style="min-height: max-content">
    <v-row class="justify-space-between">
      <v-col class="d-flex align-center">
        <v-img
          :src="logo"
          class="flex-grow-0"
          width="40"
          height="40"
        />
        <span class="px-3 text-no-wrap">
          ИП Лихачев А.А.
        </span>
      </v-col>
      <v-col class="flex-grow-0">
        <span class="text-h6 text-no-wrap">8-988-965-35-75</span>
      </v-col>
    </v-row>
  </v-footer>
</template>
<script setup lang="ts">
import logo from '@/assets/img/logo-white.png';
</script>

<style scoped>

</style>
