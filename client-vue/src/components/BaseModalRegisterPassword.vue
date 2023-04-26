<script setup lang="ts">
import BaseModal from '@/components/Base/BaseModal.vue';
import BaseInput from '@/components/Base/BaseInput.vue';
import IconEyeOn from '@/components/Icons/IconEyeOn.vue';
import IconEyeOff from '@/components/Icons/IconEyeOff.vue';
import BaseTextError from '@/components/Base/BaseTextError.vue';
import BaseButton from '@/components/Base/BaseButton.vue';
import { ref } from 'vue';
import { validatePassword } from '@/helpers/validate';
import { useProfileStore } from '@/stores/profile';
import { storeToRefs } from 'pinia';
import useNewPassword from '@/apis/customer/useNewPassword';
import httpClient from '@/libs/httpClient';

const showPass = ref(true);
const showConfirmPassword = ref(true);
const loading = ref(false);
const password = ref();
const confirmPassword = ref();
const profileStore = useProfileStore();
const showModal = ref(true);

const { profile, requireCreatePassword } = storeToRefs(profileStore);

//set condition modal
if (profile.value?.requireChangePass) {
  showModal.value = requireCreatePassword.value;
} else if (!profile.value?.requireChangePass || !httpClient.getAccessToken()) {
  showModal.value = false;
}

// check Validate
const errorMessages = ref();

const checkvalidate = (): boolean => {
  const validate = validatePassword(password.value, confirmPassword.value);
  if (validate) {
    errorMessages.value = validate;
    return false;
  }
  return true;
};

// call api forced create password
const callApiForcedPassword = async () => {
  const response = useNewPassword({
    newPassword: password.value,
    requireChangePass: false,
  });
  response.pending.value = true;
  loading.value = response.pending.value;
  await response.excute();
  loading.value = response.pending.value;
  if (response.error.value?.response?.status === 400) {
    errorMessages.value = response.error.value?.message;
    return;
  }
  if (response.error.value?.response?.status === 404) {
    alert('Something went wrong');
    return;
  }
  showModal.value = false;
};

const handleSubmit = async () => {
  if (checkvalidate()) {
    //call api forced create password
    await callApiForcedPassword();
    await profileStore.fetchProfile();
    profileStore.setRequireCreatePassword(true);
  }
};
</script>

<template>
  <BaseModal :show-modal="showModal">
    <div class="flex flex-col">
      <div class="text-center pb-6">
        <h2 class="text-2xl text-primary font-semibold">
          {{ $t('Enter new {name}', { name: $t('password') }) }}
        </h2>
        <p class="mt-3 text-sm px-10">
          {{ $t('To confidential information, please update your password') }}
        </p>
      </div>
      <div class="flex-grow px-2">
        <div class="relative" :class="!errorMessages ? 'mb-6' : ''">
          <BaseInput
            v-model="password"
            tabindex="1"
            :placeholder="$t('Enter new {name}', { name: $t('password') })"
            :input-type="showPass ? 'password' : 'text'"
            class="shadow-input-custom"
            @input="errorMessages = ''"
          />
          <div class="absolute icon-eye-pass right-3 top-5 cursor-pointer">
            <IconEyeOn v-if="showPass" @click="() => (showPass = false)" />
            <IconEyeOff v-else @click="() => (showPass = true)" />
          </div>
          <BaseTextError
            v-if="errorMessages"
            :error-messages="$t(errorMessages, { name: $t('Password') })"
          />
        </div>
        <div class="relative" :class="!errorMessages ? 'mb-6' : ''">
          <BaseInput
            v-model="confirmPassword"
            tabindex="2"
            :placeholder="$t('Enter new {name}', { name: $t('password') })"
            :input-type="showConfirmPassword ? 'password' : 'text'"
            class="shadow-input-custom"
            @keyup.enter="handleSubmit"
            @input="errorMessages = ''"
          />
          <div class="absolute icon-eye-pass right-3 top-5 cursor-pointer">
            <IconEyeOn
              v-if="showConfirmPassword"
              @click="() => (showConfirmPassword = false)"
            />
            <IconEyeOff v-else @click="() => (showConfirmPassword = true)" />
          </div>
          <BaseTextError
            v-if="errorMessages"
            :error-messages="$t(errorMessages, { name: $t('Password') })"
          />
        </div>
      </div>
    </div>
    <template #footer>
      <div class="flex justify-center">
        <BaseButton class="w-3/5" :loading="loading" @click="handleSubmit">
          {{ $t('Create password') }}
        </BaseButton>
      </div>
    </template>
  </BaseModal>
</template>

<style scoped></style>
