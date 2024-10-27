import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import garbage from '@/assets/img/garbage.png';
import air from '@/assets/img/air.jpg';
import other from '@/assets/img/other.jpg';
import { useDisplay } from 'vuetify';
import { DisplayBreakpoints } from '@/enums';

export const useDisplayState = defineStore('displayStore', () => {
  const { width } = useDisplay();

  const isWidthLgAndUp = computed(() => width.value > DisplayBreakpoints.LG_1300);
  const isMobileXSBreakpoint = computed(() => width.value <= DisplayBreakpoints.XS_450);
  const isMobileBreakpoint = computed(() => width.value <= DisplayBreakpoints.SM_900);
  const isMobileSMBreakpoint = computed(() => width.value <= DisplayBreakpoints.SM_600);

  return {
    isWidthLgAndUp,
    isMobileXSBreakpoint,
    isMobileBreakpoint,
    isMobileSMBreakpoint,
  };
});
