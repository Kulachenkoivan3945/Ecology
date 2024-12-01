<template>

  <v-card
    :style="{width: isMobileSMBreakpoint ? '95vw' : '75vw'}"
    class="mx-auto my-6 pa-6 elevation-0 rounded-lg"
    style="background-color: rgba(255,255,255,0.8)"
  >

    <span class="text-h4 font-weight-bold " style="color: #004240">{{ contentInfo.name }}</span>
    <br><br>
    <span class="text-h5 font-weight-bold " style="color: #004240">{{ contentInfo.subtitle }}</span>


    <CustomTransition :animation-type="TransitionTypes.SLIDE_RIGHT">
      <v-row
        class="d-flex flex-column elevation-3 pa-4 my-6 rounded-lg"
        style="background-color: rgba(0,101,53,0.8); backdrop-filter: blur(3px); color: #cfffed"
        no-gutters
      >
        <span class="text-h5 mb-4">Для чего нужно?</span>
        <span class="text-pre-line">
      {{ contentInfo.purpose }}
      </span>
      </v-row>
    </CustomTransition>

    <CustomTransition :animation-type="TransitionTypes.SLIDE_LEFT">
      <v-row
        class="d-flex flex-column elevation-3 pa-4 my-6 rounded-lg"
        style="background-color: rgba(0,101,53,0.8); backdrop-filter: blur(3px); color: #cfffed"
        no-gutters
      >
        <span class="text-h5 mb-4">Чем регулируется?</span>
        <span class="text-pre-line">
      {{ contentInfo.regulated }}
      </span>
      </v-row>
    </CustomTransition>

    <CustomTransition :animation-type="TransitionTypes.SLIDE_RIGHT">
      <v-row
        class="d-flex flex-column elevation-3 pa-4 my-6 rounded-lg"
        style="background-color: rgba(0,101,53,0.8); backdrop-filter: blur(3px); color: #cfffed"
        no-gutters
      >
        <span class="text-h5 mb-4">Почему нужно делать?</span>
        <span class="text-pre-line">
      {{ contentInfo.punishment }}
      </span>
      </v-row>
    </CustomTransition>

    <v-row class=" w-100 justify-center px-3 py-4">
      <v-col class="d-flex justify-center bg-green-darken-4 rounded-lg">
        <span class="text-h5">
          {{ contentInfo.timeCost }}
      </span>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup lang="ts">

import { defineProps } from 'vue';
import aboutBg from '@/assets/img/aboutBg2.jpg';
import { TransitionTypes } from '@/enums';
import CustomTransition from '@/components/ui/CustomTransition.vue';
import { storeToRefs } from 'pinia';
import { useDisplayState } from '@/stores/displayState';

const props = defineProps<{
  contentInfo: {
    name: string,
    subtitle: string,
    description: string,
    purpose: string,
    regulated: string,
    punishment: string,
    timeCost: string,
  }
}>();

const { isMobileSMBreakpoint } = storeToRefs(useDisplayState());
</script>
<style scoped>

.bg-gradient-green {
  background: radial-gradient(at 46.818714028860356% 23.04760625881672%, hsla(0, 0%, 100%, 1) 0%, hsla(0, 0%, 100%, 0) 100%), radial-gradient(at 5.710285968386941% 50.38061089955435%, hsla(140, 47.05882352941176%, 80%, 1) 0%, hsla(140, 47.05882352941176%, 80%, 0) 100%), radial-gradient(at 56.79298969227218% 74.06939123203769%, hsla(0, 0%, 100%, 1) 0%, hsla(0, 0%, 100%, 0) 100%);
}

</style>
