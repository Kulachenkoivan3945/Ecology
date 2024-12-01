<template>
  <v-parallax
    :src="parallaxImage"
    style="width: 100vw; height: 100vh;"
  >
    <CustomTransition :animation-type="transitionType">
      <v-row
        :style="{width: isMobileXSBreakpoint ? '95vw' : '70vw'}"
        class="flex-column fill-height justify-center align-center text-white mx-auto"
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
        <v-col class="flex-grow-0 d-flex flex-column">
          <span class="text-h3 font-weight-bold mb-4 text-center py-4">
            {{ title }}
          </span>
          <span class="text-center py-8 text-h5">
            {{subTitle}}
          </span>
        </v-col>
      </v-row>
    </CustomTransition>
  </v-parallax>
</template>
<script setup lang="ts">

import CustomTransition from '@/components/ui/CustomTransition.vue'
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
}>()

const {isMobileXSBreakpoint} = storeToRefs(useDisplayState())
</script>
