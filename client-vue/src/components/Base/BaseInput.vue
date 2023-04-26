<template>
  <div class="relative">
    <input
      class="block px-2.5 pb-2.5 pt-4 w-full text-sm rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      :id="id"
      :value="modelValue"
      placeholder=" "
      :maxlength="length"
      :type="inputType"
      :inputmode="mode"
      @input="handleChange"
    />
    <label
      :for="id"
      class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
      >{{ placeholder }}</label
    >
  </div>
</template>

<script setup lang="ts">
interface Props {
  id: string;
  placeholder?: string;
  inputType?: string;
  length?: number;
  modelValue?: string;
  mode?: any;
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: " ",
  inputType: "text",
  length: 256,
  modelValue: "",
  mode: "text",
  id: "text",
});
const emit = defineEmits(["update:modelValue"]);

const handleChange = (event: any) => {
  if (props.length && props.mode === "numeric") {
    event.target.value = event.target.value.replace(/\D/g, "");
  }
  emit("update:modelValue", event.target.value);
};
</script>
