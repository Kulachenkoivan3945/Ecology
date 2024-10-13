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
}>()

const container = ref<Element>(null);
const animate = ref(false);

const observer = new IntersectionObserver(
  ([entry]) => {
    if (!animate.value) {
      console.log(entry)
      animate.value = entry.isIntersecting;
    }
    console.log(12)
  },
  {
    threshold: 0.5,
  },
);

onMounted(() => {
  observer.observe(container.value as Element);
});
</script>
<style scoped>
.animated-component.default-enter-from,
.animated-component.transitionLeft-enter-from,
.animated-component.transitionRight-enter-from {
  transition: none;
}


.default-enter-active,
.default-leave-active {
  transition: opacity 1.5s ease-in-out, transform 1s ease-in-out;
}

.default-enter-from,
.default-leave-to {
  opacity: 0;
  transform: scale(0.5) translateY(100%);
}

.transitionRight-enter-active,
.transitionRight-leave-active {
  transition: opacity 1.5s ease-in-out, transform 1s ease-in-out;
}

.transitionRight-enter-from,
.transitionRight-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.transitionLeft-enter-active,
.transitionLeft-leave-active {
  transition: opacity 1.5s ease-in-out, transform 1s ease-in-out;
}

.transitionLeft-enter-from,
.transitionLeft-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
</style>
