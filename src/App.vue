<template>

  <v-app class="d-flex flex-column">
    <Header/>
    <v-main>
      <router-view/>
      <OurClients/>
      <SendRequestForm/>
    </v-main>
    <Footer/>
  </v-app>

</template>
<script setup lang="ts">

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import OurClients from '@/components/OurClients.vue';
import SendRequestForm from '@/components/SendRequestForm.vue';

</script>

<style>
html {
  font-size: calc(12px + 0.2vw) !important;
}

* {
  box-sizing: border-box;
}
</style>
