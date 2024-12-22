<template>
  <v-parallax
    :src="parallaxImage"
    style="width: 100vw; height: 102vh;"
  >
    <CustomTransition :animation-type="transitionType">
      <v-row
        :style="{width: isMobileXSBreakpoint ? '95vw' : '70vw'}"
        :class="[textColor ?? 'text-white']"
        class="flex-column fill-height justify-center align-center mx-auto"
        no-gutters
      >
        <v-col v-if="logoImage" class="flex-grow-0 d-flex justify-center">
          <v-img
            :src="logoImage"
            width="100"
            height="100"
            max-height="100"
          />
        </v-col>
        <v-col
          :class="bluredBg ? 'blured-bg pa-8' : ''"
          class="flex-grow-0 d-flex flex-column"
          style="text-shadow: black 2px 2px 10px"
        >
          <span class="text-h3 font-weight-bold mb-4 text-center py-4">
            {{ title }}
          </span>
          <span class="text-center py-8 text-h5">
            {{ subTitle }}
          </span>
        </v-col>
      </v-row>
    </CustomTransition>
  </v-parallax>
</template>
<script setup lang="ts">

import CustomTransition from '@/components/ui/CustomTransition.vue';
import { defineProps } from 'vue';
import { TransitionTypes } from '@/enums';
import { storeToRefs } from 'pinia';
import { useDisplayState } from '@/stores/displayState';

const props = defineProps<{
  parallaxImage: string;
  transitionType?: TransitionTypes;
  logoImage?: string;
  title?: string;
  subTitle?: string;
  textColor?: string
  bluredBg?: boolean
}>();

const { isMobileXSBreakpoint } = storeToRefs(useDisplayState());
</script>

<style scoped>
.blured-bg {
  backdrop-filter: blur(2px);
  border-radius: 25%;
}
</style>
