<template>
  <ParallaxInfoBlock
    :parallax-image="air"
    :transition-type="TransitionTypes.SLIDE_RIGHT"
    :blured-bg="true"
    title="ПЭК"
    sub-title="Подготовка и согласование программы производственного экологического контроля"
  />
  <v-row class="flex-column w-100 w-100">
    <v-parallax
      height="min-content"
      width="100vw"
      :src="aboutBg"
    >
      <v-tabs
        v-model="currentTab"
        align-tabs="center"
        slider-color="#1B5E20"
        selected-class="selected-tab-green"
        class="rounded-lg w-100 px-4"
        center-active
        mandatory
        show-arrows
      >
        <v-tab
          v-for="tab in tabs"
          :value="tab.id"
          style="background-color: rgba(255,255,255,0.8); backdrop-filter: blur(5px)"
        >
          {{ tab.title }}
        </v-tab>
      </v-tabs>

      <v-tabs-window v-model="currentTab">
        <v-tabs-window-item
          v-for="tab in tabs"
          :value="tab.id"
        >
          <AboutItemTab
            :content-info="tabsContent[tab.id]"
          />
        </v-tabs-window-item>
      </v-tabs-window>
    </v-parallax>
  </v-row>
</template>

<script setup lang="ts">
import air from '@/assets/img/other-1.jpg';
import aboutBg from '@/assets/img/aboutBg2.jpg';

import { storeToRefs } from 'pinia';
import { TransitionTypes, WorkProcessTypes } from '@/enums';
import { useDisplayState } from '@/stores/displayState';
import { onMounted, ref } from 'vue';
import AboutItemTab from '@/components/AboutItemTab.vue';
import ParallaxInfoBlock from '@/components/ui/ParallaxInfoBlock.vue';
import { useCardsStore } from '@/stores/cardsStore';

const { isWidthLgAndUp, isMobileXSBreakpoint, isMobileBreakpoint, isMobileSMBreakpoint } = storeToRefs(useDisplayState());
const { currentWorkCard } = storeToRefs(useCardsStore());

const enum TabsNames {
  CONTROL = 'control',
}

const currentTab = ref(TabsNames.CONTROL);
const tabs = [
  {
    title: 'ПЭК',
    id: TabsNames.CONTROL,
  },
];

const tabsContent = {
  [TabsNames.CONTROL]: {
    name: 'Программа производственного экологического контроля (ПЭК)',
    purpose: `Производственный экологический контроль (ПЭК) — один из ключевых видов контроля, поскольку предприятия могут серьёзно влиять на окружающую среду. Чтобы отслеживать и фиксировать негативное воздействие объекта на природу, нужно контролировать деятельность предприятия. ПЭК проводят сами природопользователи.

Природоохранное законодательство требует наличия программы ПЭК и результатов проведения ПЭК. Это проверяют надзорные органы во время инспекций.

Программу ПЭК должны разрабатывать и утверждать хозяйствующие субъекты, работающие на объектах I, II и III категорий. При этом необходимо учитывать категорию объекта, особенности производственного процесса и технологий, а также характер оказываемого негативного воздействия на окружающую среду (НВОС).
`,

    regulated: `Юридические лица и индивидуальные предприниматели, осуществляющие деятельность на объектах I, II и III категорий негативного воздействия на окружающую среду (п.2 ст.67 Федерального закона от 10.01.2002 N 7-ФЗ):

разрабатывают и утверждают программу ПЭК;
осуществляют ПЭК в соответствии с установленными требованиями;
документируют информацию и хранят данные, полученные по результатам осуществления ПЭК.
`,
    punishment: `За нарушение требований природоохранного законодательства при осуществлении ПЭК предусмотрена административная ответственность. в соответствии со ст.8.1 КоАП РФ:


на должностных лиц - предупреждение или от 2 000 до 5 000 рублей;
на юридических лиц - предупреждение или от 20 000 до 100 000 рублей.

В соответствии с ч. 1 ст.8.2 КоАП РФ не осуществляется ПЭК за соблюдением требований законодательства РФ в области обращения с отходами:


на должностных лиц - от 10 000 до 30 000 рублей;
на индивидуальных предпринимателей - от 30 000 до 50 000 рублей или административное приостановление деятельности на срок до 90 суток;
на юридических лиц - от 100 000 до 250 000 рублей или административное приостановление деятельности на срок до 90 суток.
`,
    timeCost: `Срок разработки от 10 дней. Стоимость от 22 000 ₽`,
  },
};

onMounted(() => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
  currentWorkCard.value = WorkProcessTypes.PEK;
});
</script>

<style scoped>

.bg-gradient-green {

  background: radial-gradient(at 46.818714028860356% 23.04760625881672%, hsla(0, 0%, 100%, 1) 0%, hsla(0, 0%, 100%, 0) 100%), radial-gradient(at 5.710285968386941% 50.38061089955435%, hsla(140, 47.05882352941176%, 80%, 1) 0%, hsla(140, 47.05882352941176%, 80%, 0) 100%), radial-gradient(at 56.79298969227218% 74.06939123203769%, hsla(0, 0%, 100%, 1) 0%, hsla(0, 0%, 100%, 0) 100%);
}

.selected-tab-green {
  background-color: rgba(27, 94, 32, 0.1);
}

</style>


