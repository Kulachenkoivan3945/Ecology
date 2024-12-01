<template>
  <v-container class="fill-height d-flex flex-column pa-0 position-relative" fluid>
    <slot>

    </slot>
    <HowWeWorksBlock/>
    <AdvantagesBlock/>
  </v-container>
</template>
<script setup lang="ts">
import HowWeWorksBlock from '@/components/HowWeWorksBlock.vue';
import AdvantagesBlock from '@/components/AdvantagesBlock.vue';
</script>
