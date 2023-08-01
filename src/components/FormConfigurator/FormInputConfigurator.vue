<script lang="ts" setup>
import { useVModel } from '@vueuse/core'
import { BackgroundColors, Colors, Option} from "boot/configurator-properties";
import ColorSelector from 'components/UI/ColorSelector.vue'

interface Configurator {
  counter?: boolean
  loading?: boolean
  shadowText?: string
  prefix?: string
  suffix?: string
  label?: string
  maxlength?: number
  stackLabel?: boolean
  clearable?: boolean
  readonly?: boolean
  disable?: boolean
  square?: boolean
  dense?: boolean
  rounded?: boolean
  hideBottomSpace?: boolean
  borderless?: boolean
  outlined?: boolean
  filled?: boolean
  dark?: boolean
  color?: Colors
  bgColor?: Colors
  labelColor?: Colors
}

interface Props {
  modelValue: Configurator
}

const props = defineProps<Props>()

const colors: Array<string> = Object.keys(Colors)
const bgColors: Array<Option> = Object.keys(BackgroundColors).map((key) => ({
  label: key,
  value: BackgroundColors[key],
}))

interface Emits {
  (e: 'update:modelValue', payload: Configurator): void
}

const emit = defineEmits<Emits>()

const data = useVModel(props, 'modelValue', emit)

</script>

<template>
  <div>
    Form input configurator
    <hr>
    <div>
      <color-selector v-model="data.color" label='Variant' customStyle='width: 11rem' />
      <color-selector v-model="data.bgColor" label='Background color' customStyle='width: 11rem' />
      <color-selector v-model="data.labelColor" label='Label color' customStyle='width: 11rem' />
      <q-input v-model="data.label" label="Label"/>
      <q-input v-model="data.shadowText" label="ShadowText"/>
      <q-input v-model="data.prefix" label="Prefix"/>
      <q-input v-model="data.suffix" label="Suffix"/>
      <q-input v-model="data.maxlength" type="number" label="Max length"/>
      <q-checkbox v-model="data.loading" label="Loading"/>
      <q-checkbox v-model="data.stackLabel" label="StackLabel"/>
      <q-checkbox v-model="data.counter" label="Is counter"/>
      <q-checkbox v-model="data.clearable" label="Clearable"/>
      <q-checkbox v-model="data.readonly" label="Readonly"/>
      <q-checkbox v-model="data.disable" label="Disable"/>
      <q-checkbox v-model="data.square" label="Square"/>
      <q-checkbox v-model="data.dense" label="Dense"/>
      <q-checkbox v-model="data.rounded" label="Rounded"/>
      <q-checkbox v-model="data.hideBottomSpace" label="Hide bottom space"/>
      <q-checkbox v-model="data.borderless" label="Borderless"/>
      <q-checkbox v-model="data.outlined" label="Outlined"/>
      <q-checkbox v-model="data.filled" label="Filled"/>
      <q-checkbox v-model="data.dark" label="Dark"/>
    </div>
  </div>
</template>

<style scoped>

</style>
