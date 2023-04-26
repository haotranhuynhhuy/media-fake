<script setup lang="ts">
import useEmitter from '@/composables/useEmitter';

type options = {
  id: string;
  name: string;
  value: string;
};
interface Props {
  modelValue: string;
  data: options | any[];
}

withDefaults(defineProps<Props>(), {
  modelValue: '',
  data: () => [],
});

const value = useEmitter();
const handleChoose = (event: any) => {
  value.emit('update:modelValue', event.target.value);
};
</script>
<template>
  <div class="base-select border-b border-0">
    <select
      class="focus:outline-none w-full py-1 bg-transparent"
      :value="modelValue"
      @change="handleChoose"
    >
      <option v-for="item in data" :key="item.id" :value="item.value">
        {{ item.name }}
      </option>
    </select>
  </div>
</template>
<style lang="scss" scoped>
.base-select {
  select {
    height: 32px;
  }
}
</style>
