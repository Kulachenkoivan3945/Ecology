<template>

  <v-layout class="d-flex flex-column">
    <Header style="height: 80px; margin-bottom: 10px"/>
    <router-view/>
    <Footer/>
  </v-layout>

</template>
<script setup lang="ts">

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

</script>

<style>
 html{
   font-size: calc(14px + 0.25vw) !important;
 }
</style>
