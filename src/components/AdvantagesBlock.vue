<template>
  <v-container
    class="d-flex flex-column align-center justify-center py-8 w-100"
  >
    <span class="text-h4 text-center pb-4 w-100">Почему выбирают нас?</span>
    <v-container
      class="d-flex flex-row flex-wrap align-center justify-center ma-0"
    >
      <v-row
        v-for="(plus, index) in pluses"
        :style="{width: isWidthLgAndUp  ? '40% !important' : '90% !important' }"
        class="flex-row ma-0"
      >
        <v-row class="justify-space-between flex-column mx-auto">
          <v-col class="d-flex align-center justify-start pb-0 mt-4">
            <v-icon
              icon="mdi-check"
              size="60"
              color="green-darken-4"
            />
            <span class="text-h5 mx-4">{{ plus.title }}</span>
          </v-col>
          <v-col>
            <span class="text-medium-emphasis">{{ plus.description }}</span>
          </v-col>
        </v-row>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup lang="ts">
import { TransitionTypes } from '@/enums';
import { storeToRefs } from 'pinia';
import { useDisplayState } from '@/stores/displayState';
import CustomTransition from '@/components/ui/CustomTransition.vue';

const { isWidthLgAndUp } = storeToRefs(useDisplayState());
const pluses = [
  {
    title: 'Профессионализм и опыт сотрудников',
    description: 'Наша команда состоит из высококвалифицированных специалистов, которые постоянно совершенствуют свои навыки и знания, чтобы предоставлять клиентам качественные услуги или продукты',
  },
  {
    title: 'Индивидуальный подход',
    description: 'Мы учитываем потребности и особенности каждого клиента, разрабатывая индивидуальные решения, которые максимально соответствуют их требованиям',
  },
  {
    title: 'Использование современных технологий',
    description: 'Мы следим за последними тенденциями в отрасли и внедряем передовые технологии, что позволяет нам повышать эффективность работы и предлагать клиентам инновационные продукты и услуги',
  },
  {
    title: 'Гибкая система сотрудничества',
    description: 'Мы предлагаем гибкие условия сотрудничества, которые позволяют нашим партнёрам выбирать наиболее удобный формат взаимодействия и оптимизировать свою работу',
  },
  {
    title: 'Ответственность и надёжность',
    description: 'Мы всегда выполняем свои обязательства перед клиентами и партнёрами, обеспечивая высокое качество продукции или услуг и соблюдая установленные сроки',
  },
  {
    title: 'Стремление к развитию',
    description: 'Мы постоянно работаем над улучшением наших продуктов и услуг, учитывая отзывы и предложения клиентов, а также развиваем новые направления деятельности, чтобы предлагать нашим клиентам ещё больше возможностей',
  },
];
</script>
