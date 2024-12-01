<template>
  <v-row
    :class="isMobileSMBreakpoint ? 'px-2' : 'px-10'"
    class="flex-column w-100 w-100 py-10 bg-gradient-green"
  >
    <span class="text-h4 text-center pb-4">Процесс работы</span>
    <v-col>
      <ImageWithTextCard
        :image="analyze"
        :transitions="[TransitionTypes.SLIDE_RIGHT, TransitionTypes.SLIDE_LEFT]"
        :titles="howWeWorkCards[HowWeWorkTypes.ANALYSIS]?.map(card=> card.title)"
        :descriptions="howWeWorkCards[HowWeWorkTypes.ANALYSIS]?.map(card=> card.description)"
        is-image-first
      />
    </v-col>
    <v-col>
      <ParallaxImageWithTextCard
        :image="process"
        :titles="howWeWorkCards[HowWeWorkTypes.INVENTORY]?.map(card=> card.title)"
        :descriptions="howWeWorkCards[HowWeWorkTypes.INVENTORY]?.map(card=> card.description)"
      />
    </v-col>
    <v-col>
      <ImageWithTextCard
        :image="coordination"
        :transitions="[TransitionTypes.SLIDE_LEFT, TransitionTypes.SLIDE_RIGHT]"
        :titles="howWeWorkCards[HowWeWorkTypes.CONCLUSION]?.map(card=> card.title)"
        :descriptions="howWeWorkCards[HowWeWorkTypes.CONCLUSION]?.map(card=> card.description)"
      />
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
import analyze from '@/assets/img/analyze.jfif';
import process from '@/assets/img/process.jfif';
import coordination from '@/assets/img/coordination.jfif';
import ImageWithTextCard from '@/components/ui/ImageWithTextCard.vue';
import ParallaxImageWithTextCard from '@/components/ui/ParallaxImageWithTextCard.vue';
import { TransitionTypes } from '@/enums';
import { storeToRefs } from 'pinia';
import { useDisplayState } from '@/stores/displayState';

const { isMobileSMBreakpoint } = storeToRefs(useDisplayState());

const enum HowWeWorkTypes {
  ANALYSIS = 'analysis',
  INVENTORY = 'inventory',
  CONCLUSION = 'conclusion'
}

const howWeWorkCards = {
  [HowWeWorkTypes.ANALYSIS]: [
    {
      title: '1. Получение исходных данных',
      description: 'Предыдущую инвентаризацию, проект ПДВ, информацию об источниках выбросов и изменениях технологического процесса. Реквизиты, учредительные документы, копию ИНН, ОГРН, документы на землю, договоры на водоотведение, водоснабжение, отопление',
    },
  ],
  [HowWeWorkTypes.INVENTORY]:
    [
      {
        type: HowWeWorkTypes.INVENTORY,
        title: '2. Инвентаризация источников выбросов',
        description: 'Инвентаризация всех источников выбросов загрязняющих веществ имеющихся на территории предприятия с помощью выезда на Вашу площадку или получением исходных данных и предыдущих проектов. ',
      },
      {
        type: HowWeWorkTypes.INVENTORY,
        title: '3. Разработка проекта ПДВ ',
        description: 'Разработка инвентаризации источников выбросов и тома ПДВ, расчет рассеивания загрязняющих веществ расчетным методом или инструментальным, с привлечением аккредитованной лаборатории',
      },
      {
        type: HowWeWorkTypes.INVENTORY,
        title: '4. Получение данных',
        description: 'Получение фоновых концентрации и климатических характеристик',
      },
    ],
  [HowWeWorkTypes.CONCLUSION]: [
    {
      type: HowWeWorkTypes.CONCLUSION,
      title: '5. Экспертное заключение ',
      description: 'Экспертное заключение проекта в аккредитованной организации по данному виду деятельности (на соответствие санитарным правилам СанПиН 2.1.6.1032-01 «Гигиенические требования к обеспечению качества атмосферного воздуха населенных мест») и получение экспертного заключения ',
    },
    {
      type: HowWeWorkTypes.CONCLUSION,
      title: '6. Санитарно-эпидемиологическое заключение',
      description: 'Санитарно-эпидемиологическое заключение на согласование в Управлении Роспотребнадзора для получения санитарно-эпидемиологического заключения.',
    },
  ],
};

</script>

<style scoped>

.bg-gradient-green {

  background: radial-gradient(at 46.818714028860356% 23.04760625881672%, hsla(0, 0%, 100%, 1) 0%, hsla(0, 0%, 100%, 0) 100%), radial-gradient(at 5.710285968386941% 50.38061089955435%, hsla(140, 47.05882352941176%, 80%, 1) 0%, hsla(140, 47.05882352941176%, 80%, 0) 100%), radial-gradient(at 56.79298969227218% 74.06939123203769%, hsla(0, 0%, 100%, 1) 0%, hsla(0, 0%, 100%, 0) 100%);

  /*background:radial-gradient(at 69.15532025790753% 36.41550007427477%, hsla(131.66666666666669, 100%, 92.94117647058823%, 1) 0%, hsla(131.66666666666669, 100%, 92.94117647058823%, 0) 100%), radial-gradient(at 94.0764618849782% 55.11658568527875%, hsla(221.31147540983608, 100%, 88.0392156862745%, 1) 0%, hsla(221.31147540983608, 100%, 88.0392156862745%, 0) 100%), radial-gradient(at 44.26054764814447% 15.32559530653057%, hsla(40.67796610169492, 83.09859154929579%, 86.07843137254902%, 1) 0%, hsla(40.67796610169492, 83.09859154929579%, 86.07843137254902%, 0) 100%), radial-gradient(at 63.40410496647628% 54.78047818181293%, hsla(131.66666666666669, 100%, 92.94117647058823%, 1) 0%, hsla(131.66666666666669, 100%, 92.94117647058823%, 0) 100%), radial-gradient(at 17.31968358330116% 6.007814459050276%, hsla(221.31147540983608, 100%, 88.0392156862745%, 1) 0%, hsla(221.31147540983608, 100%, 88.0392156862745%, 0) 100%), radial-gradient(at 45.211359986419694% 5.395186206843672%, hsla(40.67796610169492, 83.09859154929579%, 86.07843137254902%, 1) 0%, hsla(40.67796610169492, 83.09859154929579%, 86.07843137254902%, 0) 100%), radial-gradient(at 7.762721610145018% 77.65073886063318%, hsla(131.66666666666669, 100%, 92.94117647058823%, 1) 0%, hsla(131.66666666666669, 100%, 92.94117647058823%, 0) 100%);
  */
}
</style>
