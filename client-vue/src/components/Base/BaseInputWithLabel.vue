<template>
  <div class="w-full">
    <span class="bg-white relative top-3 px-3 ml-5 text-sm font-normal">{{
      label
    }}</span>
    <div
      class="border px-5 py-4 text-lg rounded-lg flex items-center justify-between"
      :class="[checkValue ? 'border-color-value' : 'border-color']"
    >
      <slot></slot>
      <span v-if="suffix" class="text-tertiary font-medium">{{ suffix }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  label: string;
  suffix?: string;
  checkValue?: boolean;
}
withDefaults(defineProps<Props>(), {
  label: '',
  suffix: '',
  checkValue: false,
});
</script>

<style scoped lang="scss">
.border-color {
  border-color: #babfc6;
}
.border-color-value {
  border-color: #f1f1f1;
}
</style>
