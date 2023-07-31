<script lang="ts" setup>

import { useVModel } from '@vueuse/core'

const props = defineProps<{
  modelValue: string
}>()

interface Emits {
  (e: 'update:modelValue', payload: string): void
}

const emit = defineEmits<Emits>()

const data = useVModel(props, 'modelValue', emit)
</script>

<template>
  <div>{{ $attrs }}
  <q-input
    v-model="data"
    v-bind="$attrs"/>
  </div>
</template>

<style scoped>

</style>
