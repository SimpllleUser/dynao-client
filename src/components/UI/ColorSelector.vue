<script lang='ts' setup>
import { defineProps } from 'vue'
import { useVModel } from '@vueuse/core'

import colorClasses from '../../boot/color-classes'

const props = withDefaults(defineProps<{
  modelValue: string
  label: string
  customStyle: string
}>(), {
  modelValue: 'red-5'
})

interface Emits {
  (e: 'update:modelValue', payload: string): void
}

const emit = defineEmits<Emits>()

const data = useVModel(props, 'modelValue', emit)
const setColor = (classColor: string) => {
  data.value = classColor
}
</script>

<template>
  <div>
    <q-btn-dropdown
      split
      :color='data'
      push
      no-caps
      class='text-black'
      style='width: 6rem'
      :style='customStyle'
    >
      <template v-slot:label>
        <div class='row items-center no-wrap'>
          <div class='text-center text-black'>
            {{ label }}
          </div>
        </div>
      </template>

      <div
        style='
          width: 100%;
          max-width: 240px;
          display: flex;
          flex-wrap: wrap;'
      >
        <div
          v-for='color in colorClasses'
          :key='color'
          clickable
          v-close-popup
          @click='setColor(color)'
          class='cursor-pointer'
          :class='`bg-${color}`'
          style='width: 1rem; height: 1rem'
        >
        </div>
      </div>
    </q-btn-dropdown>
  </div>
</template>

<style scoped></style>
