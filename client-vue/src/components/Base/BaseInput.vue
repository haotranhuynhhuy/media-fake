<template>
  <input
    class="focus:outline-none w-full text-black-70 text-base font-medium placeholder:font-normal"
    :placeholder="placeholder"
    :value="modelValue"
    :maxlength="length"
    :type="inputType"
    :inputmode="mode"
    @input="handleChange"
  />
</template>

<script setup lang="ts">
interface Props {
  placeholder: string;
  inputType?: string;
  length?: number;
  modelValue?: string;
  mode?: any;
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: '',
  inputType: 'text',
  length: 256,
  modelValue: '',
  mode: 'text',
});
const emit = defineEmits(['update:modelValue']);

const handleChange = (event: any) => {
  if (props.length && props.mode === 'numeric') {
    event.target.value = event.target.value.replace(/\D/g, '');
  }
  emit('update:modelValue', event.target.value);
};
</script>
