<script setup lang="ts">
interface Props {
  label: string;
  content?: any;
  showDiviner?: boolean;
}

withDefaults(defineProps<Props>(), {
  content: '',
  showDiviner: false,
});
</script>

<template>
  <div
    class="flex flex-nowrap justify-center items-center py-3.5 px-5"
    :class="{ 'border-b': showDiviner }"
  >
    <div class="w-1/2 text-sm text-tertiary">
      {{ label }}
    </div>
    <div class="w-1/2 text-right font-medium">
      <slot>
        {{ content }}
      </slot>
    </div>
  </div>
</template>
