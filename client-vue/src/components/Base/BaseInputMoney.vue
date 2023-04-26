<template>
  <BaseInputWithLabel
    class="mb-2"
    :label="$t('Advance of amount')"
    :suffix="$t('currency-symbol')"
    @input="errorMessagesMoney = ''"
  >
    <BaseInput
      v-model:modelValue="money"
      mode="numeric"
      :placeholder="$t('Enter your amount')"
      :length="11"
    />
  </BaseInputWithLabel>
  <slot />
  <div v-if="currency" class="font-normal text-sm mb-2 mx-5">
    {{ currency.charAt(0).toUpperCase() + currency.slice(1) }} đồng
  </div>
</template>

<script setup lang="ts">
import BaseInputWithLabel from './BaseInputWithLabel.vue';
import BaseInput from './BaseInput.vue';
import { ref, watch } from 'vue';
import { numberToMoney } from '@/helpers/currency';
import { numberToWords } from '@/helpers/numberToWords';
import useEmitter from '@/composables/useEmitter';

interface Props {
  moneyValue: number;
}

const props = withDefaults(defineProps<Props>(), {
  moneyValue: 0,
});
const money = ref('');
const currency = ref('');
const errorMessagesMoney = ref('');
const emit = useEmitter();

if (props.moneyValue > 0) {
  money.value = props.moneyValue.toString();
}

watch(money, (newValue) => {
  newValue = newValue.replace(/\./g, '');
  money.value = numberToMoney(Number(newValue));
  currency.value = numberToWords(Number(newValue));
  emit.emit('moneyInput', Number(newValue));

  emit.emit('errorMessagesMoney', errorMessagesMoney.value);
});
</script>

<style lang="scss" scoped></style>
