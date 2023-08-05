<script lang='ts' setup>
import { defineProps, ref } from 'vue'
import { useVModel } from '@vueuse/core'

import iconsSource from '../../boot/icon-names'

const props = withDefaults(defineProps<{
  modelValue: string
  label: string
  customStyle: string
}>(), {
  modelValue: ''
})

interface Emits {
  (e: 'update:modelValue', payload: string): void
}

const emit = defineEmits<Emits>()

const data = useVModel(props, 'modelValue', emit)

const propsStyle = {
  filled: true,
  labelColor: 'secondary',
  color: 'secondary',
  size: 'md',
}

const icons = ref(iconsSource)

const searchIcon = (val, update) => {
  update(() => {
    const needle = val.toLowerCase()
    icons.value = iconsSource.filter(v => v.toLowerCase().indexOf(needle) > -1)
  })
}

</script>

<template>
  <div>
    <div>
      <q-select
        v-model='data'
        :options='icons'
        :label='label'
        @filter="searchIcon"
        :virtual-scroll-slice-size='25'
        clearable
        use-input
        v-bind='propsStyle'
      >
        <template v-slot:selected>
          <q-icon :name='data' v-if='data' />
        </template>
        <template v-slot:option='scope'>
          <q-item v-bind='scope.itemProps' class='row justify-center'>
            <q-item-section>
              <q-icon :name='scope.opt' size='sm' />
            </q-item-section>
          </q-item>
        </template>
      </q-select>
    </div>
  </div>
</template>

<style scoped></style>
