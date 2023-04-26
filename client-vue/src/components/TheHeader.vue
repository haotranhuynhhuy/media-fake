<template>
  <header
    class="app-header flex items-center justify-center font-medium bg-primary text-white"
  >
    <h1>{{ title }}</h1>
    <div v-if="!hiddenBackBtn" class="absolute left-5 cursor-pointer">
      <icon-arrow-left @click="back()" />
    </div>
  </header>
</template>

<script setup lang="ts">
import constRouter from '@/constants/constRouter';
import { useProfileStore } from '@/stores/profile';
import { useRoute, useRouter } from 'vue-router';
import IconArrowLeft from './Icons/IconArrowLeft.vue';

defineProps({
  title: { type: String, default: 'Interloan' },
  hiddenBackBtn: { type: Boolean, default: false },
});
const route = useRoute();
const router = useRouter();
const profileStore = useProfileStore();

const back = () => {
  if (route.name === 'dashboard') {
    router.push({
      name: constRouter.DASHBOARD.name,
    });
  } else {
    profileStore.setRequireCreatePassword(true);
    router.back();
  }
};
</script>

<style scoped lang="scss">
.app-header {
  top: 0;
  z-index: 1;
  height: 60px;
  max-width: 550px;
  border-radius: 0 0 20px 20px;
  line-height: 60px;
}
</style>
