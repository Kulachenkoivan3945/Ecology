import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import garbage from '@/assets/img/garbage.png'
import air from '@/assets/img/air.jpg'
import other from '@/assets/img/other.jpg'
import { PageLinks } from '@/enums';

export const useCardsStore = defineStore('cardsStore', () => {
  const cards = ref([
    {
      title: 'Воздух',
      image: air,
      titles: 'НДВ, ПДВ, НМУ И ДРУГИЕ',
      description: 'подготовка и согласование природоохранной документации по атмосферному воздуху',
      link: PageLinks.AIR
    },
    {
      title: 'Отходы',
      image: garbage,
      titles: 'ПНООЛР, ПАСПОРТА ОТХОДОВ И ДРУГИЕ',
      description: 'подготовка и согласование природоохранной документации по отходам' +
        ' производства и потребления',
      link: PageLinks.WASTES
    },
    {
      title: 'Иное',
      image: other,
      titles: 'ПЭК И ДРУГИЕ',
      description: 'подготовка и согласование прочей природоохранной документаци',
      link: PageLinks.OTHER
    }
  ]);

  return {
    cards
  };
});
