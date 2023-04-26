<script setup lang="ts">
import { ref } from 'vue';
import BaseModal from './Base/BaseModal.vue';

const showModalSupport = ref(false);

defineProps({
  intro: { type: Boolean, default: false },
});
</script>

<template>
  <div class="absolute z-10" :class="[intro ? 'support-intro' : 'support']">
    <div
      class="flex font-medium mt-6 items-center justify-center cursor-pointer"
      @click="showModalSupport = true"
    >
      <img
        src="@/assets/images/support.png"
        class="button-pulse"
        width="50"
      />
    </div>
  </div>
  <BaseModal :show-modal="showModalSupport">
    <template #icon>
      <div class="cursor-pointer">
        <svg
          width="21"
          height="20"
          viewBox="0 0 24 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          @click="showModalSupport = false"
        >
          <path
            d="M9.82716 11.7176L1.34831 3.2387C0.74832 2.63871 0.74832 1.66594 1.34831 1.06596C1.94829 0.465971 2.92106 0.465971 3.52105 1.06596L11.9999 9.54481L20.4788 1.06596C21.0787 0.465971 22.0515 0.46597 22.6515 1.06596C23.2515 1.66594 23.2515 2.63872 22.6515 3.2387L14.1726 11.7176L22.6515 20.1964C23.2515 20.7964 23.2515 21.7692 22.6515 22.3692C22.0515 22.9691 21.0787 22.9691 20.4788 22.3692L11.9999 13.8903L3.52105 22.3692C2.92106 22.9691 1.94829 22.9691 1.34831 22.3692C0.748319 21.7692 0.748319 20.7964 1.34831 20.1964L9.82716 11.7176Z"
            fill="#FF514D"
          />
        </svg>
      </div>
    </template>
    <template #header>
      <h3 class="font-bold mt-4 text-center">
        {{ $t('Support') }}
      </h3>
    </template>
    <template #default>
      <div class="mt-4 px-2">
        <p>Số điện thoại: (028) 6686 3398</p>
        <p>Email: support@interloan.vn</p>
        <p>Zalo: 088 616 8088</p>
      </div>
    </template>
  </BaseModal>
</template>

<style scoped lang="scss">
.support {
  right: 10px;
  bottom: 85px;
}
.support-intro {
  right: 18px;
  bottom: 165px;
}
.button-pulse {
  animation: pulse 2s infinite 1s cubic-bezier(0.25, 0, 0, 1);
  border-radius: 50%;
  box-shadow: 0 0 0 0 #4ea5e355;
  -webkit-appearance: none;
}
@keyframes pulse {
  to {
    box-shadow: 0 0 0 10px #ffffff00;
    -webkit-appearance: none;
  }
}
</style>
