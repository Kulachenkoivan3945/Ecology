<template>
  <v-container class="fill-height d-flex flex-column pa-0 position-relative" fluid>
    <v-parallax
      style="width: 100vw; height: 100vh;"
      :src="bg"
    >
      <CustomTransition :animation-type="TransitionTypes.SLIDE_RIGHT">
        <v-row
          class="flex-column fill-height justify-center align-center text-white mx-auto"
          :style="{width: isMobileXSBreakpoint ? '95vw' : '70vw'}"
          no-gutters
        >
          <v-col class="flex-grow-0 d-flex justify-center">
            <v-img
              :src="logo"
              width="100"
              height="100"
              max-height="100"
            />
          </v-col>
          <v-col class="flex-grow-0 d-flex flex-column">
          <span class="text-h3 font-weight-bold mb-4 text-center py-4">
            Экологический аудит
          </span>
            <span class="text-center py-8 text-h5">
            Аудит ради здоровой экологии: оцениваем, улучшаем, сохраняем
          </span>
          </v-col>
        </v-row>
      </CustomTransition>
    </v-parallax>
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
            <v-hover v-slot="{ isHovering, props }">
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
                  <span>{{ card.description }}</span>
                </v-card-text>

                <v-overlay
                  :model-value="!!isHovering"
                  class="align-center justify-center"
                  scrim="#036358"
                  contained
                >
                  <v-btn variant="flat" @click="goToPage(card.link)">Узнать больше</v-btn>
                </v-overlay>
              </v-card>
            </v-hover>
          </CustomTransition>

        </v-col>
      </v-row>
    </v-row>
    <v-row
      :class="isMobileSMBreakpoint ? 'px-2' : 'px-10'"
      class="flex-column w-100 w-100 py-10 bg-gradient-green"
    >
      <span class="text-h4 text-center pb-4">Процесс работы</span>
      <v-col>
        <ImageWithTextCard
          :image="analyze"
          :transitions="[TransitionTypes.SLIDE_RIGHT, TransitionTypes.SLIDE_LEFT]"
          is-image-first
          title="Анализ"
          description="Мы тщательно анализируем всю имеющуюся у вас документацию, формируем план действий и согласовываем его с вами, после чего запускаем в работу."
        />
      </v-col>
      <v-col>
        <v-card class="flex-row d-flex elevation-0 rounded-lg">
          <CustomTransition :animation-type="TransitionTypes.SLIDE_LEFT">
            <v-parallax
              style="width: 100%; max-height: 70vh;"
              class="py-4"
              :src="process"
            >
              <CustomTransition :animation-type="TransitionTypes.SLIDE_RIGHT" :duration="2">
                <div class="w-100 h-100 d-flex justify-end align-center">
                  <v-card
                    :class="isMobileBreakpoint ? 'mx-4' : 'w-50 h-75 mr-8'"
                    class=" elevation-0 pa-8 rounded-lg"
                    style="background-color: rgba(255,255,255,0.7); backdrop-filter: blur(5px);max-width: 500px "
                  >
                    <v-col class="d-flex flex-column align-start pa-0">
                      <span
                        :class="isMobileXSBreakpoint ? 'text-h5' : 'text-h4'"
                        class="pb-8"
                        style="hyphens: auto"
                      >
                        Проектирование
                      </span>
                      <span :class="isMobileXSBreakpoint ? 'text-body-2' : 'text-body-1'">Мы тщательно анализируем всю имеющуюся у вас документацию, формируем план действий и согласовываем его с вами, после чего запускаем в работу.</span>
                    </v-col>
                  </v-card>
                </div>
              </CustomTransition>
            </v-parallax>
          </CustomTransition>
        </v-card>
      </v-col>
      <v-col>
        <ImageWithTextCard
          :image="coordination"
          :transitions="[TransitionTypes.SLIDE_LEFT, TransitionTypes.SLIDE_RIGHT]"
          title="Согласование"
          description="Мы тщательно анализируем всю имеющуюся у вас документацию, формируем план действий и согласовываем его с вами, после чего запускаем в работу."
        />
      </v-col>
    </v-row>

    <v-row
      :class="isWidthLgAndUp ? 'flex-row' : 'flex-column'"
      class="d-flex flex-row align-center justify-center py-8 w-100"
    >
      <span class="text-h4 text-center pb-4 w-100">Почему выбирают нас?</span>
      <AdvantagesBlock/>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">

import logo from '@/assets/img/logo-white.png';
import bg from '@/assets/img/bg-2.jpg';

import analyze from '@/assets/img/analyze.jfif';
import process from '@/assets/img/process.jfif';
import coordination from '@/assets/img/coordination.jfif';

import CustomTransition from '@/components/ui/CustomTransition.vue';
import { storeToRefs } from 'pinia';
import { useCardsStore } from '@/stores/cards';
import { TransitionTypes } from '@/enums';
import ImageWithTextCard from '@/components/ui/ImageWithTextCard.vue';

import { useDisplayState } from '@/stores/displayState';
import AdvantagesBlock from '@/components/AdvantagesBlock.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const { cards } = storeToRefs(useCardsStore());
const { isWidthLgAndUp, isMobileXSBreakpoint, isMobileBreakpoint, isMobileSMBreakpoint } = storeToRefs(useDisplayState());

const goToPage = (link: string): void => {
  router.push(link);
};
</script>

<style scoped>

.bg-gradient-green {

  background: radial-gradient(at 46.818714028860356% 23.04760625881672%, hsla(0, 0%, 100%, 1) 0%, hsla(0, 0%, 100%, 0) 100%), radial-gradient(at 5.710285968386941% 50.38061089955435%, hsla(140, 47.05882352941176%, 80%, 1) 0%, hsla(140, 47.05882352941176%, 80%, 0) 100%), radial-gradient(at 56.79298969227218% 74.06939123203769%, hsla(0, 0%, 100%, 1) 0%, hsla(0, 0%, 100%, 0) 100%);

  /*background:radial-gradient(at 69.15532025790753% 36.41550007427477%, hsla(131.66666666666669, 100%, 92.94117647058823%, 1) 0%, hsla(131.66666666666669, 100%, 92.94117647058823%, 0) 100%), radial-gradient(at 94.0764618849782% 55.11658568527875%, hsla(221.31147540983608, 100%, 88.0392156862745%, 1) 0%, hsla(221.31147540983608, 100%, 88.0392156862745%, 0) 100%), radial-gradient(at 44.26054764814447% 15.32559530653057%, hsla(40.67796610169492, 83.09859154929579%, 86.07843137254902%, 1) 0%, hsla(40.67796610169492, 83.09859154929579%, 86.07843137254902%, 0) 100%), radial-gradient(at 63.40410496647628% 54.78047818181293%, hsla(131.66666666666669, 100%, 92.94117647058823%, 1) 0%, hsla(131.66666666666669, 100%, 92.94117647058823%, 0) 100%), radial-gradient(at 17.31968358330116% 6.007814459050276%, hsla(221.31147540983608, 100%, 88.0392156862745%, 1) 0%, hsla(221.31147540983608, 100%, 88.0392156862745%, 0) 100%), radial-gradient(at 45.211359986419694% 5.395186206843672%, hsla(40.67796610169492, 83.09859154929579%, 86.07843137254902%, 1) 0%, hsla(40.67796610169492, 83.09859154929579%, 86.07843137254902%, 0) 100%), radial-gradient(at 7.762721610145018% 77.65073886063318%, hsla(131.66666666666669, 100%, 92.94117647058823%, 1) 0%, hsla(131.66666666666669, 100%, 92.94117647058823%, 0) 100%);
  */
}
</style>


