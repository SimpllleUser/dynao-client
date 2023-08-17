<script setup lang="ts">
import UiParserChildren from 'src/modules/UIParser/components/UiParserChildren.vue'
import { useVModel } from '@vueuse/core'
import { UIElementByJson } from 'src/modules/UIParser/types'
import Condition from 'components/UI/Condition.vue'

const props = defineProps<{
  modelValue: any,
  components: Array<UIElementByJson>
}>()

const emit = defineEmits(['update:modelValue'])

const data = useVModel(props, 'modelValue', emit)

</script>

<template>
  <condition is-true='components.length'>
    <UiParserChildren
        v-for="(component, index) in components"
        :key="`${component.type}-${index}`"
        v-model="data"
        :component="component"
    />
  </condition>
</template>

<style scoped></style>
