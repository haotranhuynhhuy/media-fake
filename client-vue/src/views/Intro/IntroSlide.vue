<template>
  <div class="mt-5">
    <BaseInput id="text" v-model="test" placeholder="Testing " />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BaseInput from "../../components/Base/BaseInput.vue";
const test = ref("");
</script>

<style lang="scss" scoped></style>
