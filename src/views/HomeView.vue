<template>
  <v-container class="fill-height d-flex flex-column pa-0 position-relative" fluid>
    <Header style="height: 80px; margin-bottom: 10px"/>
    <v-parallax
      style="width: 100vw; height: 100vh;"
      :src="bg"
    >
      <CustomTransition animation-type="transitionRight">
        <v-row
          class="flex-column fill-height justify-center align-center text-white mx-auto"
          style="width: 70vw"
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
          <span class="text-h3 font-weight-thin mb-4 text-center py-4">
            Экологический аудит
          </span>
            <span class="text-center py-8 text-h5">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium
          </span>
          </v-col>
        </v-row>
      </CustomTransition>
    </v-parallax>
    <v-row class="flex-column w-100 w-100 py-8 px-4">
      <span class="text-h4 text-center pb-4">Природоохранное проектирование</span>
      <v-row class="align-stretch">
        <v-col v-for="card in cards" style="min-height: max-content">
          <CustomTransition animation-type="transitionLeft">
            <v-hover v-slot="{ isHovering, props }">
              <v-card
                v-bind="props"
                class="d-flex flex-column rounded-lg"
                style="height: max-content!important; min-height: 100%"
              >
                <v-img :src="card.image" width="100%" height="60%" cover/>
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
                  <v-btn variant="flat">Узнать больше</v-btn>
                </v-overlay>
              </v-card>
            </v-hover>
          </CustomTransition>

        </v-col>
      </v-row>
    </v-row>
    <v-row class="flex-column w-100 w-100 py-4 px-4">
      <span class="text-h4 text-center pb-4">Процесс работы</span>
      <v-col>
        <v-card class="flex-row d-flex">
          <v-col>
            <v-img :src="analyze" width="40vw" class="rounded-lg"/>
          </v-col>
          <v-col class="d-flex flex-column">
            <span class="text-h4 pb-8">Анализ</span>
            <span>Мы тщательно анализируем всю имеющуюся у вас документацию, формируем план действий и согласовываем его с вами, после чего запускаем в работу.</span>
          </v-col>
        </v-card>
      </v-col>

      <!--      <v-timeline align="center" class="px-4">
              <v-timeline-item
                fill-dot
                dot-color="green"
              >
                <template v-slot:opposite>
                  <v-row class="flex-column">
                    <span class="text-h4 pb-8">Анализ</span>
                    <span>Мы тщательно анализируем всю имеющуюся у вас документацию, формируем план действий и согласовываем его с вами, после чего запускаем в работу.</span>
                  </v-row>
                </template>
                <v-col>
                  <v-img :src="analyze" width="40vw" class="rounded-lg"/>
                </v-col>
              </v-timeline-item>
            </v-timeline>-->
    </v-row>

  </v-container>
</template>
<script setup lang="ts">
import logo from '@/assets/img/logo-white.png';
import Header from '@/components/header.vue';
import bg from '@/assets/img/bg-2.jpg';

import analyze from '@/assets/img/analyze.jpg';
import process from '@/assets/img/process.jpg';
import coordination from '@/assets/img/coordination.jpg';

import { ref, onMounted } from 'vue';
import CustomTransition from '@/components/ui/CustomTransition.vue';
import { storeToRefs } from 'pinia';
import { useCardsStore } from '@/stores/cards';

const { cards } = storeToRefs(useCardsStore());


</script>
