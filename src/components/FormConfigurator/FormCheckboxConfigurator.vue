<script lang='ts' setup>
import { useVModel } from '@vueuse/core'
import ColorSelector from 'components/UI/ColorSelector.vue'
import SizeSelector from 'components/UI/SizeSelector.vue'
import IconSelector from 'components/UI/IconSelector.vue'


interface Props {
  modelValue: any
}

const props = defineProps<Props>()

interface Emits {
  (e: 'update:modelValue', payload: any): void
}

const emit = defineEmits<Emits>()

const data = useVModel(props, 'modelValue', emit)

const propsStyle = {
  filled: true,
  labelColor: 'secondary',
  color: 'secondary',
  size: 'md'
}

</script>

<template>
  <div>
    <div class='row q-mb-md'>
      <div class='col-6'>
        <color-selector v-model='data.color' label='Variant' customStyle='width: 11rem' />
      </div>
    </div>
    <div class='row q-mb-md'>
      <div class='col-6 q-pb-sm'>
        <size-selector v-model='data.size' />
      </div>
      <div class='col-6'>
        <icon-selector v-model='data.checkedIcon' label='Checked icon' />
      </div>
      <div class='col-6'>
        <icon-selector v-model='data.uncheckedIcon' label='Unchecked icon' />
      </div>
    </div>

    <q-input v-model='data.label' label='Label' v-bind='propsStyle' class='q-mb-md' />

    <div class='row'>
      <div class='col-6'>
        <q-checkbox v-model='data.dense' label='Dense' v-bind='propsStyle' />
      </div>
      <div class='col-6'>
        <q-checkbox v-model='data.loading' label='Loading' v-bind='propsStyle' />
      </div>
      <div class='col-6'>
        <q-checkbox v-model='data.disable' label='Disable' v-bind='propsStyle' />
      </div>
      <div class='col-6'>
        <q-checkbox v-model='data.leftLabel' label='Left label' v-bind='propsStyle' />
      </div>
      <div class='col-6'>
        <q-checkbox v-model='data.keepColor' label='Keep color' v-bind='propsStyle' />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
