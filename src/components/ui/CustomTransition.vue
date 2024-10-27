<template>
  <div ref="container" class="h-100 w-100">
    <transition :name="animationType ?? 'default'">
      <div v-appear="animate" class="animated-component h-100 w-100 overflow-visible">
        <slot>

        </slot>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">

import { onMounted, ref, defineProps } from 'vue';

const props = defineProps<{
  duration: number | string;
  animationType: string;
}>();

const animationDuration = (props.duration ?? 1) + 's';
const container = ref<Element>(null);
const animate = ref(false);

const observer = new IntersectionObserver(
  ([entry]) => {
    if (!animate.value) {
      animate.value = entry.isIntersecting;
    }
  },
  {
    threshold: 0.7,
  },
);

onMounted(() => {
  observer.observe(container.value as Element);
});
</script>
<style scoped>
.animated-component.default-enter-from,
.animated-component.transitionFade-enter-from,
.animated-component.transitionLeft-enter-from,
.animated-component.transitionRight-enter-from {
  transition: none;
}


.default-enter-active,
.default-leave-active {
  transition-property: opacity, transform;
  transition-timing-function: ease-in-out;
  transition-duration: v-bind(animationDuration);
}

.default-enter-from,
.default-leave-to {
  opacity: 0;
  transform: scale(0.5) translateY(100%);
}

.transitionFade-enter-active,
.transitionFade-leave-active {
  transition-property: opacity, transform;
  transition-timing-function: ease-in-out;
  transition-duration: v-bind(animationDuration);
}

.transitionFade-enter-from,
.transitionFade-leave-to {
  opacity: 0;
}

.transitionRight-enter-active,
.transitionRight-leave-active {
  transition-property: opacity, transform;
  transition-timing-function: ease-in-out;
  transition-duration: v-bind(animationDuration);
}

.transitionRight-enter-from,
.transitionRight-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.transitionLeft-enter-active,
.transitionLeft-leave-active {
  transition-property: opacity, transform;
  transition-timing-function: ease-in-out;
  transition-duration: v-bind(animationDuration);
}

.transitionLeft-enter-from,
.transitionLeft-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
</style>
