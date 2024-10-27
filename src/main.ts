import { createApp, type Directive, type DirectiveBinding, type VNode  } from 'vue';
import './style.css';
import App from './App.vue';
import { createPinia } from 'pinia';

import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { router } from '@/router/index';

import '@mdi/font/css/materialdesignicons.css'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@/assets/css/fonts.css'
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
  },
  aliases,
  sets: {
    mdi,
  },
});

const pinia = createPinia();

export const appear: Directive = {
  beforeMount(element: HTMLElement) {
    element.style.visibility = 'hidden';
  },
  updated(
    element: HTMLElement,
    binding: DirectiveBinding<boolean>,
    node: VNode
  ) {
    if (!binding.value === !binding.oldValue || null === node.transition) {
      return;
    }

    if (!binding.value) {
      node.transition.leave(element, () => {
        element.style.visibility = 'hidden';
      });
      return;
    }

    node.transition.beforeEnter(element);
    element.style.visibility = '';
    node.transition.enter(element);
  }
};

createApp(App).use(pinia).use(vuetify).use(router).directive('appear', appear).mount('#app');
