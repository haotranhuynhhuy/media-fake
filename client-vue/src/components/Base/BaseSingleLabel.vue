<template>
  <div class="w-full flex justify-between items-center border-b py-3 px-5">
    <p class="text-tertiary text-base">{{ label }}</p>
    <p class="text-base grow text-right" :class="{ 'font-semibold': bold }">
      {{ value }} <span>{{ suffix }}</span>
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  label: string;
  value: string | number;
  suffix?: string;
  bold?: boolean;
}
withDefaults(defineProps<Props>(), {
  label: '',
  value: '',
  bold: false,
  suffix: '',
});
</script>

<style lang="scss" scoped></style>
