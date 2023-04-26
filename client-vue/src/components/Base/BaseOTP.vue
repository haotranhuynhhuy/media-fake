<template>
  <div class="input-otp relative">
    <label>
      <input
        ref="input"
        :value="modelValue"
        :maxlength="lengthOTP"
        inputmode="numeric"
        class="z-10 px-16 absolute top-4 left-2 focus:outline-none bg-transparent"
        :class="{
          'hide-input': modelValue.length > 0,
        }"
        @keyup="handleChange"
        @input="handleChange"
        @focus="handleFocus"
      />
    </label>
    <div class="px-6 list-otp flex justify-evenly">
      <div
        v-for="(item, i) in data"
        :key="i"
        class="single-otp relative shadow-xl"
        :class="{
          active: item,
        }"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

interface Props {
  modelValue: string;
  data: Array<string>;
  lengthOTP?: number;
}
const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  data: () => [],
  lengthOTP: 4,
});
const input: any = ref(null);
const emit = defineEmits(['update:modelValue', 'focus']);
onMounted(() => {
  input.value.focus();
});
const handleChange = (event: any) => {
  if (event.target.value.length > props.lengthOTP) {
    event.target.value = event.target.value.slice(0, props.lengthOTP);
  }
  //disable input with text
  event.target.value = event.target.value.replace(/\D/g, '');
  emit('update:modelValue', event.target.value);
};
const handleFocus = () => {
  emit('focus');
};
</script>

<style lang="scss" scoped>
.input-otp {
  //hidden blinking cursor input
  .hide-input {
    color: transparent;
    caret-color: transparent;
    &::selection {
      background-color: transparent;
    }
  }

  .list-otp {
    .single-otp {
      font-size: 20px;
      width: 45px;
      height: 60px;
      background-color: #ebeff1;
      border-radius: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      &.active {
        background-color: #fff;
        filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.25));
      }
    }
  }
}
</style>
