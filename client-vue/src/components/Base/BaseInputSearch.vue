<template>
  <div class="w-full shadow-input-custom mb-5">
    <svg
      class="mr-2"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.6327 13.2209C17.0765 10.0825 16.8557 5.5418 13.9706 2.65662C10.8464 -0.467572 5.78105 -0.467572 2.65685 2.65662C-0.46734 5.78082 -0.46734 10.8461 2.65685 13.9703C5.54204 16.8555 10.0827 17.0762 13.2212 14.6325C13.2347 14.6478 13.2488 14.6628 13.2635 14.6774L16.0919 17.5059C16.4824 17.8964 17.1156 17.8964 17.5061 17.5059C17.8966 17.1153 17.8966 16.4822 17.5061 16.0917L14.6777 13.2632C14.663 13.2486 14.648 13.2345 14.6327 13.2209ZM12.6395 12.6393C15.0286 10.2502 15.0286 6.37674 12.6395 3.98765C10.2504 1.59856 6.37697 1.59856 3.98788 3.98765C1.59879 6.37674 1.59879 10.2502 3.98788 12.6393C6.37697 15.0284 10.2504 15.0284 12.6395 12.6393Z"
        fill="#D9D9D9"
      />
    </svg>
    <BaseInput
      v-model:modelValue="value"
      :placeholder="placeholder"
      :mode="mode"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import BaseInput from './BaseInput.vue';
import useEmitter from '@/composables/useEmitter';

const value = ref();
const emit = useEmitter();

defineProps({
  placeholder: { type: String, default: 'Search' },
  mode: { type: String, default: 'text' },
});

watch(value, (newValue) => {
  emit.emit('inputSearch', newValue);
});
</script>

<style scoped>
.shadow-input-custom {
  padding-top: 10px !important;
  padding-bottom: 10px !important;
}
</style>
