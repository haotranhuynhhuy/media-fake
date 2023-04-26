<template>
  <div class="shadow-input-custom">
    <BaseInput
      v-model:modelValue="value"
      :placeholder="placeholder"
      :input-type="'date'"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BaseInput from './BaseInput.vue';

const value = ref();
defineProps({
  placeholder: { type: String, default: 'date' },
});
</script>

<style scoped>
.shadow-input-custom {
  padding-top: 10px !important;
  padding-bottom: 10px !important;
  width: 48%;
}
</style>
