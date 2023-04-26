<script setup lang="ts">
type data = {
  id: string;
  name: string;
  value: string;
};
interface Props {
  placeholder?: string;
  modelValue: string;
  name?: string;
  data: data[];
  nonBoxShadow?: boolean;
  readonlyCompany?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  placeholder: '',
  name: '',
  modelValue: '',
  data: () => [],
  nonBoxShadow: false,
  readonlyCompany: false,
});
const emit = defineEmits(['update:modelValue']);

//delay nếu điền dữ liệu vào input
const closeAllList = () => {
  setTimeout(() => {
    let data = props.data;
    data.length = 0;
  }, 150);
};

const handleChoose = (event: any) => {
  const value = event.target.value;
  emit('update:modelValue', value);
  let data = props.data;
  data.length = 0;
};

const handleInput = (e: any) => {
  const value = e.target.value;
  emit('update:modelValue', value);
};
</script>
<template>
  <div :class="nonBoxShadow ? 'relative w-full' : 'base-autocomplete'">
    <input
      :value="modelValue"
      type="text"
      class="focus:outline-none w-full text-black-70 text-base font-medium placeholder:font-normal"
      :class="nonBoxShadow ? '' : 'shadow-box-custom rounded-full p-4'"
      :placeholder="placeholder"
      tabindex="0"
      :readonly="readonlyCompany"
      @input="handleInput"
      @blur="closeAllList"
    />
    <div
      v-if="data.length > 0"
      class="mt-0.5"
      :class="[modelValue === '' ? 'hide-input' : '']"
    >
      <div
        class="shadow-box-custom overflow-y-auto max-h-48 absolute w-full"
        :class="nonBoxShadow ? 'top-8' : ''"
      >
        <input
          v-for="item in data"
          :key="item.id"
          readonly
          :name="item.name"
          :value="item.value"
          class="text-left w-full p-3 px-4 bg-white z-50 outline-none cursor-pointer border-t"
          @click="handleChoose"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.base-autocomplete {
  position: relative;
  width: 100%;
  input {
    // box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
    width: 100%;
  }
}
.shadow-text-custom {
  text-shadow: 0px -2px 3px rgb(0 0 0 / 15%);
}
.top-7px {
  top: 7px;
}
.hide-input {
  display: none;
}
.border-t:first-child {
  border-top: none;
}
.border-t:hover {
  background-color: #f9f9f9;
}
</style>
