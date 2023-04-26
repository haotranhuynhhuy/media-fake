<script setup lang="ts">
import BaseLoading from './BaseLoading.vue';

interface Props {
  loading?: boolean;
  disabled?: boolean;
}

withDefaults(defineProps<Props>(), {
  loading: false,
  disabled: false,
});
</script>
<template>
  <button
    :disabled="disabled"
    class="base-button hover:opacity-90 w-full p-4 text-center bg-secondary text-white shadow-xl"
  >
    <BaseLoading v-if="loading" class="flex items-center justify-center h-12" />
    <slot v-else />
  </button>
</template>
<style scoped lang="scss">
.base-button {
  justify-content: center;
  font-size: 14px;
  border-radius: 40px;
  font-weight: bold;
  // box-shadow: 0px 20px 30px rgba(25, 28, 50, 0.1);
  -webkit-appearance: none;

  &.border-1 {
    border: 1px solid;
  }

  &.large {
    height: 52px;
  }

  &.small {
    height: 28px;
    font-size: 12px;
  }

  &.loading {
    pointer-events: none;
    background: #f5f5f5 !important;
    box-shadow: unset !important;
    border: none;
  }
  .h-12 {
    height: 24px;
  }
}
</style>
