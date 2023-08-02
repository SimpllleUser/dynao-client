<script lang='ts' setup>
import { defineProps } from 'vue'
import { useVModel } from '@vueuse/core'

import colorClasses from '../../boot/color-classes'

const props = defineProps<{
  modelValue: string
}>()

interface Emits {
  (e: 'update:modelValue', payload: string): void
}
enum Size {
  Xs = 'xs',
  Sm = 'sm',
  Md = 'md',
  Lg = 'lg',
  Xl = 'xl',
}

const emit = defineEmits<Emits>()

const data = useVModel(props, 'modelValue', emit)
const sizes: Array<string> = Object.values(Size)

</script>

<template>
  <div>
    <q-select filled v-model="data" :options="sizes" label="Size" />
  </div>
</template>

<style scoped></style>
