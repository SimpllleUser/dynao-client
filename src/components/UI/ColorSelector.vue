<script lang='ts' setup>
import { computed, defineProps, ref } from 'vue'
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
const inputSearchValue = ref('')
const setColor = (classColor: string) => {
  data.value = classColor
}

const inputSearchLabel = computed(() => `Search ${props.label?.toLowerCase()}`)

const filteredItems = computed(() => inputSearchValue.value.trim()?.length
  ? colorClasses
  .filter((className: string) => className
    .toLowerCase()
    .includes(inputSearchValue.value.toLowerCase()))
  : colorClasses
)
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
      <div class='row q-px-sm'>
        <q-input v-model='inputSearchValue' :label='inputSearchLabel' />
      </div>
      <div
        style='
          width: 100%;
          max-width: 240px;
          display: flex;
          flex-wrap: wrap;'
      >
        <div
          v-for='color in filteredItems'
          :key='color'
          clickable
          v-close-popup
          @click='setColor(color)'
          class='cursor-pointer color-item'
          :class='`bg-${color}`'
          style='width: 1rem; height: 1rem'
        >
          <q-tooltip :delay='200'>
            {{ color }}
          </q-tooltip>
        </div>
      </div>
    </q-btn-dropdown>
  </div>
</template>

<style lang='scss' scoped>
.color-item:hover {
  border: 1px solid black;
  box-sizing: border-box;
}
</style>
