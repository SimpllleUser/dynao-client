<script lang='ts' setup>
import { useVModel } from '@vueuse/core'
import { BackgroundColors, Colors, Option } from 'boot/configurator-properties'
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
  value: BackgroundColors[key]
}))

interface Emits {
  (e: 'update:modelValue', payload: Configurator): void
}

const emit = defineEmits<Emits>()

const data = useVModel(props, 'modelValue', emit)

const propsStyle = {
  filled: true,
  labelColor: 'secondary',
  color: 'secondary',
}

</script>

<template>
  <div>
    <div class='row q-mb-md'>
      <div class='col-6'>
        <color-selector v-model='data.color' label='Variant' customStyle='width: 11rem' />
      </div>
      <div class='col-6'>
        <color-selector v-model='data.bgColor' label='Background color' customStyle='width: 11rem' />
      </div>
    </div>
    <div class='row q-mb-md'>
      <div class='col-6'>
        <color-selector v-model='data.labelColor' label='Label color' customStyle='width: 11rem' />
      </div>
    </div>

    <q-input v-model='data.label' label='Label' v-bind='propsStyle' class='q-mb-md' />
    <q-input v-model='data.shadowText' label='ShadowText' v-bind='propsStyle' class='q-mb-md' />
    <q-input v-model='data.prefix' label='Prefix' v-bind='propsStyle' class='q-mb-md' />
    <q-input v-model='data.suffix' label='Suffix' v-bind='propsStyle' class='q-mb-md' />
    <q-input v-model='data.maxlength' type='number' label='Max length' v-bind='propsStyle' class='q-mb-md' />
    <div class='row'>
      <div class='col-6'>
        <q-checkbox v-model='data.loading' label='Loading' v-bind='propsStyle' />
      </div>
      <div class='col-6'>
        <q-checkbox v-model='data.stackLabel' label='StackLabel' v-bind='propsStyle' />
      </div>
      <div class='col-6'>
        <q-checkbox v-model='data.counter' label='Is counter' v-bind='propsStyle' />
      </div>
      <div class='col-6'>
        <q-checkbox v-model='data.clearable' label='Clearable' v-bind='propsStyle' />
      </div>
      <div class='col-6'>
        <q-checkbox v-model='data.readonly' label='Readonly' v-bind='propsStyle' />
      </div>
      <div class='col-6'>
        <q-checkbox v-model='data.disable' label='Disable' v-bind='propsStyle' />
      </div>
      <div class='col-6'>
        <q-checkbox v-model='data.square' label='Square' v-bind='propsStyle' />
      </div>
      <div class='col-6'>
        <q-checkbox v-model='data.dense' label='Dense' v-bind='propsStyle' />
      </div>
      <div class='col-6'>
        <q-checkbox v-model='data.rounded' label='Rounded' v-bind='propsStyle' />
      </div>
      <div class='col-6'>
        <q-checkbox v-model='data.hideBottomSpace' label='Hide bottom space' v-bind='propsStyle' />
      </div>
      <div class='col-6'>
        <q-checkbox v-model='data.borderless' label='Borderless' v-bind='propsStyle' />
      </div>
      <div class='col-6'>
        <q-checkbox v-model='data.outlined' label='Outlined' v-bind='propsStyle' />
      </div>
      <div class='col-6'>
        <q-checkbox v-model='data.filled' label='Filled' v-bind='propsStyle' />
      </div>
      <div class='col-6'>
        <q-checkbox v-model='data.dark' label='Dark' v-bind='propsStyle' />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
