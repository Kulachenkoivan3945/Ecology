<template>
  <v-card class="flex-row d-flex elevation-0 rounded-lg" style="min-height: max-content">
    <CustomTransition :animation-type="TransitionTypes.SLIDE_LEFT">
      <v-parallax
        :style="{maxHeight: isMobileBreakpoint ? '' : '70vh'}"
        style="width: 100%"
        class="py-4"
        :src="image"
      >
        <CustomTransition :animation-type="TransitionTypes.SLIDE_RIGHT" :duration="2">
          <div class="w-100 h-100 d-flex justify-end align-center">
            <v-card
              :class="isMobileBreakpoint ? 'mx-4 w-100' : 'w-50 h-100 mr-8'"
              :style="{maxWidth: isMobileBreakpoint ? '' : 'calc(500px + 10vw)'}"
              class=" elevation-0 pa-8 rounded-lg overflow-y-auto"
              style="background-color: rgba(255,255,255,0.7); backdrop-filter: blur(5px);"
            >
              <v-col
                v-for="(title, index) in titles"
                class="d-flex flex-column align-start pa-0 mb-4"
              >
                <span
                  :class="isMobileXSBreakpoint ? 'text-h5' : 'text-h4'"
                  class="pb-2"
                  style="hyphens: auto"
                >
                  {{ title }}
                </span>
                <span :class="isMobileXSBreakpoint ? 'text-body-2' : 'text-body-1'">
                 {{ descriptions?.[index] }}
                </span>
              </v-col>
            </v-card>
          </div>
        </CustomTransition>
      </v-parallax>
    </CustomTransition>
  </v-card>
</template>

<script setup lang="ts">

import { onMounted, ref, defineProps, computed } from 'vue';
import { DisplayBreakpoints, TransitionTypes } from '@/enums';
import CustomTransition from '@/components/ui/CustomTransition.vue';
import { useDisplay } from 'vuetify';

const { width } = useDisplay();

const isMobileBreakpoint = computed(() => width.value <= DisplayBreakpoints.SM_900);
const isMobileXSBreakpoint = computed(() => width.value <= DisplayBreakpoints.XS_450);

const props = defineProps<{
  titles?: string[];
  descriptions?: string[];
  image: string
  transitions?: TransitionTypes[]
  isImageFirst?: boolean
}>();

</script>
<style scoped>

</style>
