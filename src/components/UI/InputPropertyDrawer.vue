<script lang='ts' setup>
import { useToggle, useVModel } from '@vueuse/core/index'
import { defineProps } from 'vue/dist/vue'

const props = withDefaults(defineProps<{
  modelValue: boolean
  label?: string
}>(), {})

interface Emits {
  (e: 'update:modelValue', payload: boolean): void
}

const emit = defineEmits<Emits>()

const data = useVModel(props, 'modelValue', emit)

const setDrawerState = (value: boolean) => {
  data.value = value
}
</script>

<template>
  <q-drawer
    v-model='data'
    side='right'
    show-if-above
    bordered
    width='400'
    overlay
    :breakpoint='500'
  >
    <q-scroll-area class='fit'>
      <div class='p-y-md'>
        <div class='row items-center q-pa-sm q-pa-sm'>
          <div class='col'>
            <q-btn
              flat
              icon='close'

              @click='setDrawerState(false)'
            ></q-btn>
          </div>
          <div class='col'>
            <b>{{ label }}</b>
          </div>
        </div>
        <hr>
        <div class='q-pa-sm'>
          <slot></slot>
        </div>
      </div>
    </q-scroll-area>
  </q-drawer>
</template>

<style scoped></style>
