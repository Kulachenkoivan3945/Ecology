<template>
  <ParallaxInfoBlock
    :parallax-image="bg"
    :logo-image="logo"
    :transition-type="TransitionTypes.SLIDE_RIGHT"
    title="Разработка экологической документации"
    sub-title="Помогаем в соблюдения законодательства в области охраны окружающей среды и обеспечения экологической безопасности."
  />
  <v-row class="flex-column w-100 w-100 py-8 px-4">
    <span class="text-h4 text-center pb-4">Природоохранное проектирование</span>
    <v-row
      :class="isWidthLgAndUp ? 'flex-row' : 'flex-column'"
      class="align-stretch"
    >
      <v-col v-for="(card, index) in cards" style="min-height: max-content">
        <CustomTransition
          :animation-type="TransitionTypes.SLIDE_LEFT"
          :duration="isWidthLgAndUp ? (cards.length - index)/2 : 1"
        >
          <v-hover v-slot="{ isHovering, props }" >
            <v-card
              v-bind="props"
              class="d-flex flex-column rounded-lg"
              style="height: max-content!important; min-height: 100%"
            >
              <v-img :src="card.image" width="100%" height="40vh" cover/>
              <v-card-text>
                <span>{{ card.titles }}</span>
              </v-card-text>
              <v-card-title>
                <span>{{ card.title }}</span>
              </v-card-title>
              <v-card-text>
                <span class="text-body-1">{{ card.description }}</span>
              </v-card-text>

              <v-overlay
                :model-value="!!isHovering"
                class="align-center justify-center cursor-pointer"
                scrim="#036358"
                contained
                @click="goToPage(card.link)"
              >
                <v-btn variant="flat">Узнать больше</v-btn>
              </v-overlay>
            </v-card>
          </v-hover>
        </CustomTransition>

      </v-col>
    </v-row>
  </v-row>
</template>

<script setup lang="ts">

import logo from '@/assets/img/logo-white.png';
import bg from '@/assets/img/bg-2.jpg';

import CustomTransition from '@/components/ui/CustomTransition.vue';
import { storeToRefs } from 'pinia';
import { useCardsStore } from '@/stores/cardsStore';
import { TransitionTypes, WorkProcessTypes } from '@/enums';

import { useDisplayState } from '@/stores/displayState';
import { useRouter } from 'vue-router';
import ParallaxInfoBlock from '@/components/ui/ParallaxInfoBlock.vue';
import { onMounted } from 'vue';

const router = useRouter();
const { cards } = storeToRefs(useCardsStore());
const { isWidthLgAndUp, isMobileXSBreakpoint, isMobileBreakpoint, isMobileSMBreakpoint } = storeToRefs(useDisplayState());
const { currentWorkCard } = storeToRefs(useCardsStore());
const goToPage = (link: string): void => {
  router.push(link);
};

onMounted(() => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
  currentWorkCard.value = WorkProcessTypes.AIR;
});
</script>

<style scoped>

</style>


