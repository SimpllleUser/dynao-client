<script setup lang="ts">
import { computed } from 'vue'
import { UIElementByJson } from 'src/modules/UIParser/types'
import Condition from 'components/UI/Condition.vue'
import UiParserNested from 'src/modules/UIParser/components/UiParserNested.vue'

interface Emits {
  (event:'update:modelValue', payload: any): void
}

const props = defineProps<{
  modelValue: any,
  components: Array<UIElementByJson>
}>()

const emits = defineEmits<Emits>()

const data = computed({
  get: () => props.modelValue,
  set: (value: any) => {
    emits('update:modelValue', { ...props.modelValue, ...value })
  }
})

</script>

<template>
  <condition is-true='components.length'>
    <ui-parser-nested
        v-for="(component, index) in components"
        :key="`${component.type}-${index}`"
        v-model="data"
        :component="component"
    />
  </condition>
</template>

<style scoped></style>
