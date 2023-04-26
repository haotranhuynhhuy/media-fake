<template>
  <div class="messeage-error shake mb-2 mx-5">
    <span>{{ errorMessages }}</span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  errorMessages: string;
}
withDefaults(defineProps<Props>(), {
  errorMessages: '',
});
</script>
<style lang="scss" scoped>
.messeage-error {
  min-height: 15px;
  color: #ff5252;
  font-size: 13px;
}
</style>
