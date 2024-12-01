<template>
  <v-card class="flex-row d-flex pa-0 rounded-lg elevation-0 h-100">
    <template v-if="!isMobileBreakpoint">
      <CustomTransition
        :style="{order: isImageFirst ? 1 : 0}"
        :animation-type="transitions?.[0] ?? TransitionTypes.SLIDE_LEFT"
      >
        <v-col
          v-for="(title, index) in titles"
          class="d-flex flex-column align-start pa-8"
        >
          <span class="text-h4 pb-2">{{ title }}</span>
          <span class="text-body-1">{{ descriptions?.[index] }}</span>
        </v-col>
      </CustomTransition>
      <CustomTransition
        :style="{order: isImageFirst ? 0 : 1}"
        :animation-type="transitions?.[1] ??TransitionTypes.SLIDE_LEFT"
      >
        <v-col class="flex-grow-0 d-flex justify-end pa-0 h-100">
          <v-img :src="image" width="40vw" height="100%" cover class="rounded-lg"/>
        </v-col>
      </CustomTransition>
    </template>
    <template v-else>
      <v-img :src="image" width="100%" height="100%" cover class="rounded-lg">
        <CustomTransition
          :style="{order: isImageFirst ? 1 : 0}"
          :animation-type="transitions?.[0] ?? TransitionTypes.SLIDE_LEFT"
        >
          <v-container
            class="d-flex align-start w-100 h-100 align-center justify-lg-start"
          >
            <v-card
              class="pa-8 d-flex flex-column rounded-lg text-white"
              style="background-color: rgba(27,94,32,0.9); backdrop-filter: blur(3px)"
            >
              <div    v-for="(title, index) in titles">
                <span :class="isMobileXSBreakpoint ? 'text-h5' : 'text-h4'" class="pb-2">{{ title }}</span>
                <br>
                <span :class="isMobileXSBreakpoint ? 'text-body-2' : 'text-body-1'">{{ descriptions?.[index] }}</span>
                <br>
                <br>
              </div>
            </v-card>
          </v-container>
        </CustomTransition>
      </v-img>
    </template>
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
