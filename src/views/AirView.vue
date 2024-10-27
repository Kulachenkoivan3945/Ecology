<template>
  <v-container class="fill-height d-flex flex-column pa-0 position-relative" fluid>
    <v-parallax
      style="width: 100vw; height: 100vh;"
      :src="air"
    >
      <CustomTransition :animation-type="TransitionTypes.SLIDE_RIGHT">
        <v-row
          class="flex-column fill-height justify-center align-center text-white mx-auto"
          :style="{width: isMobileXSBreakpoint ? '95vw' : '70vw'}"
          no-gutters
        >
          <v-col class="flex-grow-0 d-flex flex-column">
          <span class="text-h3 font-weight-bold mb-4 text-center py-4">
            Воздух
          </span>
            <span class="text-center py-8 text-h5">
            Разработка и согласование проектов по охране атмосферного воздуха
          </span>
          </v-col>
        </v-row>
      </CustomTransition>
    </v-parallax>
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
          <v-tabs-window-item :value="TabsNames.SANITARY">
            <AbotItemTab
              :content-info="tabsContent[TabsNames.SANITARY]"
            />
          </v-tabs-window-item>
          <v-tabs-window-item :value="TabsNames.EJECTION">
            <AbotItemTab
              :content-info="tabsContent[TabsNames.EJECTION]"
            />
          </v-tabs-window-item>
          <v-tabs-window-item :value="TabsNames.METEOROLOGICAL">
            <AbotItemTab
              :content-info="tabsContent[TabsNames.METEOROLOGICAL]"
            />
          </v-tabs-window-item>
          <v-tabs-window-item :value="TabsNames.INVENTORY">
            <AbotItemTab
              :content-info="tabsContent[TabsNames.INVENTORY]"
            />
          </v-tabs-window-item>
        </v-tabs-window>
      </v-parallax>
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
              style="width: 100%; height: 70vh;"
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
import air from '@/assets/img/air2.jpg';
import aboutBg from '@/assets/img/aboutBg2.jpg';

import analyze from '@/assets/img/analyze.jfif';
import process from '@/assets/img/process.jfif';
import coordination from '@/assets/img/coordination.jfif';

import CustomTransition from '@/components/ui/CustomTransition.vue';
import { storeToRefs } from 'pinia';
import { TransitionTypes } from '@/enums';

import ImageWithTextCard from '@/components/ui/ImageWithTextCard.vue';
import AdvantagesBlock from '@/components/AdvantagesBlock.vue';
import { useDisplayState } from '@/stores/displayState';
import { onMounted, ref } from 'vue';
import AbotItemTab from '@/components/AboutItemTab.vue';

const { isWidthLgAndUp, isMobileXSBreakpoint, isMobileBreakpoint, isMobileSMBreakpoint } = storeToRefs(useDisplayState());

const enum TabsNames {
  SANITARY = 'sanitary',
  EJECTION = 'ejection',
  INVENTORY = 'inventory',
  METEOROLOGICAL = 'meteorological',
}

const currentTab = ref(TabsNames.SANITARY);
const tabs = [
  {
    title: 'СЗЗ',
    id: TabsNames.SANITARY,
  },
  {
    title: 'НДВ, ПДВ',
    id: TabsNames.EJECTION,
  },
  {
    title: 'НМУ',
    id: TabsNames.METEOROLOGICAL,
  },
  {
    title: 'Инвентаризация выбросов',
    id: TabsNames.INVENTORY,
  },
];

const tabsContent = {
  [TabsNames.SANITARY]: {
    name: 'Проект санитарно-защитной зоны и санитарного разрыва',
    description: 'Проект санитарно-защитной зоны (СЗЗ) и санитарного разрыва — это комплекс мероприятий, направленных на обеспечение безопасности населения и окружающей среды от негативного воздействия промышленных объектов, транспортных магистралей, коммунальных сооружений и других источников загрязнения.',
    purpose: 'Основная цель проекта — снижение уровня воздействия вредных факторов на здоровье человека и окружающую среду до допустимых значений. Проект позволяет определить границы санитарно-защитной зоны, в пределах которой действуют ограничения на использование территории, а также рассчитать размеры санитарного разрыва, который может быть установлен между источниками загрязнения и жилыми зонами или другими объектами.',
    regulated: 'В России требования к санитарно-защитным зонам и санитарным разрывам регулируются следующими нормативными актами:\n' +
      '\n' +
      'Федеральный закон «О санитарно-эпидемиологическом благополучии населения»;\n' +
      '\n' +
      'СанПиН (санитарные правила и нормы), устанавливающие требования к размерам и границам санитарно-защитных зон;\n' + '\n' +
      'Градостроительный кодекс Российской Федерации, регулирующий вопросы использования территорий в границах санитарно-защитных зон.',
    punishment: 'Отсутствие проекта санитарно-защитной зоны может привести к следующим негативным последствиям:\n' + '\n' +
      'Нарушение требований законодательства в области санитарно-эпидемиологического благополучия населения;\n' + '\n' +
      'Негативное воздействие на здоровье людей, проживающих или работающих вблизи источников загрязнения;\n' + '\n' +
      'Ухудшение качества окружающей среды и природных ресурсов;\n' + '\n' +
      'Ограничения в использовании территорий, находящихся в границах санитарно-защитных зон, что может повлиять на развитие инфраструктуры и экономики региона.',
  },
  [TabsNames.EJECTION]: {
    name: 'Проект нормативов допустимых выбросов',
    description: 'Проект санитарно-защитной зоны (СЗЗ) и санитарного разрыва — это комплекс мероприятий, направленных на обеспечение безопасности населения и окружающей среды от негативного воздействия промышленных объектов, транспортных магистралей, коммунальных сооружений и других источников загрязнения.',
    purpose: 'Основная цель проекта — снижение уровня воздействия вредных факторов на здоровье человека и окружающую среду до допустимых значений. Проект позволяет определить границы санитарно-защитной зоны, в пределах которой действуют ограничения на использование территории, а также рассчитать размеры санитарного разрыва, который может быть установлен между источниками загрязнения и жилыми зонами или другими объектами.',
    regulated: 'В России требования к санитарно-защитным зонам и санитарным разрывам регулируются следующими нормативными актами:\n' +
      '\n' +
      'Федеральный закон «О санитарно-эпидемиологическом благополучии населения»;\n' + '\n' +
      'СанПиН (санитарные правила и нормы), устанавливающие требования к размерам и границам санитарно-защитных зон;\n' + '\n' +
      'Градостроительный кодекс Российской Федерации, регулирующий вопросы использования территорий в границах санитарно-защитных зон.',
    punishment: 'Отсутствие проекта санитарно-защитной зоны может привести к следующим негативным последствиям:\n' + '\n' +
      'Нарушение требований законодательства в области санитарно-эпидемиологического благополучия населения;\n' + '\n' +
      'Негативное воздействие на здоровье людей, проживающих или работающих вблизи источников загрязнения;\n' + '\n' +
      'Ухудшение качества окружающей среды и природных ресурсов;\n' + '\n' +
      'Ограничения в использовании территорий, находящихся в границах санитарно-защитных зон, что может повлиять на развитие инфраструктуры и экономики региона.',
  },
  [TabsNames.INVENTORY]: {
    name: 'Проект санитароно-защитной зоны и санитарного разрыва',
    description: 'Проект санитарно-защитной зоны (СЗЗ) и санитарного разрыва — это комплекс мероприятий, направленных на обеспечение безопасности населения и окружающей среды от негативного воздействия промышленных объектов, транспортных магистралей, коммунальных сооружений и других источников загрязнения.',
    purpose: 'Основная цель проекта — снижение уровня воздействия вредных факторов на здоровье человека и окружающую среду до допустимых значений. Проект позволяет определить границы санитарно-защитной зоны, в пределах которой действуют ограничения на использование территории, а также рассчитать размеры санитарного разрыва, который может быть установлен между источниками загрязнения и жилыми зонами или другими объектами.',
    regulated: 'В России требования к санитарно-защитным зонам и санитарным разрывам регулируются следующими нормативными актами:\n' +
      '\n' +
      'Федеральный закон «О санитарно-эпидемиологическом благополучии населения»;\n' + '\n' +
      'СанПиН (санитарные правила и нормы), устанавливающие требования к размерам и границам санитарно-защитных зон;\n' + '\n' +
      'Градостроительный кодекс Российской Федерации, регулирующий вопросы использования территорий в границах санитарно-защитных зон.',
    punishment: 'Отсутствие проекта санитарно-защитной зоны может привести к следующим негативным последствиям:\n' + '\n' +
      'Нарушение требований законодательства в области санитарно-эпидемиологического благополучия населения;\n' + '\n' +
      'Негативное воздействие на здоровье людей, проживающих или работающих вблизи источников загрязнения;\n' + '\n' +
      'Ухудшение качества окружающей среды и природных ресурсов;\n' + '\n' +
      'Ограничения в использовании территорий, находящихся в границах санитарно-защитных зон, что может повлиять на развитие инфраструктуры и экономики региона.',
  },
  [TabsNames.METEOROLOGICAL]: {
    name: 'Проект санитароно-защитной зоны и санитарного разрыва',
    description: 'Проект санитарно-защитной зоны (СЗЗ) и санитарного разрыва — это комплекс мероприятий, направленных на обеспечение безопасности населения и окружающей среды от негативного воздействия промышленных объектов, транспортных магистралей, коммунальных сооружений и других источников загрязнения.',
    purpose: 'Основная цель проекта — снижение уровня воздействия вредных факторов на здоровье человека и окружающую среду до допустимых значений. Проект позволяет определить границы санитарно-защитной зоны, в пределах которой действуют ограничения на использование территории, а также рассчитать размеры санитарного разрыва, который может быть установлен между источниками загрязнения и жилыми зонами или другими объектами.',
    regulated: 'В России требования к санитарно-защитным зонам и санитарным разрывам регулируются следующими нормативными актами:\n' +
      '\n' +
      'Федеральный закон «О санитарно-эпидемиологическом благополучии населения»;\n' + '\n' +
      'СанПиН (санитарные правила и нормы), устанавливающие требования к размерам и границам санитарно-защитных зон;\n' + '\n' +
      'Градостроительный кодекс Российской Федерации, регулирующий вопросы использования территорий в границах санитарно-защитных зон.',
    punishment: 'Отсутствие проекта санитарно-защитной зоны может привести к следующим негативным последствиям:\n' + '\n' +
      'Нарушение требований законодательства в области санитарно-эпидемиологического благополучия населения;\n' + '\n' +
      'Негативное воздействие на здоровье людей, проживающих или работающих вблизи источников загрязнения;\n' + '\n' +
      'Ухудшение качества окружающей среды и природных ресурсов;\n' + '\n' +
      'Ограничения в использовании территорий, находящихся в границах санитарно-защитных зон, что может повлиять на развитие инфраструктуры и экономики региона.',
  },
};

onMounted(() => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
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


