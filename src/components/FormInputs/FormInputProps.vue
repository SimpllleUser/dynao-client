<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import ColorSelector from 'components/UI/ColorSelector.vue'
import IconSelector from 'components/UI/IconSelector.vue'

type InputTypes = 'text' |
  'password' |
  'textarea' |
  'email' |
  'search' |
  'tel' |
  'number' |
  'url' |
  'time' |
  'date' |
  'datetime-local'


interface PropsState {
  type: InputTypes;
  debounce: number;
  autofocus: boolean;
  maxLength: number;
  max: string; // если это дата или число, может потребоваться другой тип
  min: string; // аналогично предыдущему
  step: number;
  color: string; // в формате HEX
  clearable: boolean;
  clearIcon: string; // это может быть имя иконки, если оно из ограниченного списка, можно использовать union типы
  fillInput: boolean;
  hint: string;
  hideHint: boolean;
  prefix: string;
  suffix: string;
  mask: string; // если у маски есть определенный формат, можно уточнить тип
  filled: boolean;
  outlined: boolean;
  standout: boolean;
  bottomSlots: boolean;
  lazyRules: boolean;
}

const inputTypesOptions = [
  'text',
  'password',
  'textarea',
  'email',
  'search',
  'tel',
  'number',
  'url',
  'time',
  'date',
  'datetime-local',
]
interface Props {
  modelValue: PropsState

}

interface Emits {
  (e: 'update:modelValue', payload: PropsState): void
}

const emit = defineEmits<Emits>()

const props = defineProps<Props>()

const propsState = useVModel(props, 'modelValue', emit)
</script>

<template>
  <div class="q-pa-md">
    <q-select
      v-model="propsState.type"
      :options="inputTypesOptions"
      label="Type"
    ></q-select>

    <q-input
      v-model.number="propsState.debounce"
      label="Debounce"
      type="number"
    ></q-input>

    <q-checkbox
      v-model="propsState.autofocus"
      label="Autofocus"
    ></q-checkbox>

    <q-input
      v-model.number="propsState.maxLength"
      label="Max Length"
      type="number"
    ></q-input>

    <q-input v-model="propsState.max" label="Max" type="text"></q-input>

    <q-input v-model="propsState.min" label="Min" type="text"></q-input>

    <q-input
      v-model.number="propsState.step"
      label="Step"
      type="number"
    ></q-input>

    <color-selector v-model='propsState.color' label='Variant' customStyle='width: 11rem' />

    <q-checkbox
      v-model="propsState.clearable"
      label="Clearable"
    ></q-checkbox>

    <div class='q-my-sm'>
      <icon-selector v-model='propsState.clearIcon' label='Clear Icon'/>
    </div>

    <q-checkbox
      v-model="propsState.fillInput"
      label="Fill Input"
    ></q-checkbox>

    <q-input v-model="propsState.hint" label="Hint" type="text"></q-input>

    <q-checkbox v-model="propsState.hideHint" label="Hide Hint"></q-checkbox>

    <q-input
      v-model="propsState.prefix"
      label="Prefix"
      type="text"
    ></q-input>

    <q-input
      v-model="propsState.suffix"
      label="Suffix"
      type="text"
    ></q-input>

    <q-input v-model="propsState.mask" label="Mask" type="text"></q-input>

    <q-checkbox v-model="propsState.filled" label="Filled"></q-checkbox>

    <q-checkbox v-model="propsState.outlined" label="Outlined"></q-checkbox>

    <q-checkbox v-model="propsState.standout" label="Standout"></q-checkbox>

    <q-checkbox
      v-model="propsState.bottomSlots"
      label="Bottom Slots"
    ></q-checkbox>

    <q-checkbox
      v-model="propsState.lazyRules"
      label="Lazy Rules"
    ></q-checkbox>
  </div>
</template>

<style scoped></style>
