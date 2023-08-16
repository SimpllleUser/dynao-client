
<script lang='ts' setup>
// 'q-input' 'q-btn' 'q-select' 'q-checkbox' 'q-radio'

import { UIElementByJson } from 'src/modules/UIParser/types'
import Condition from 'components/UI/Condition.vue'

interface Props {
  component: UIElementByJson
  modelValue: string | number | boolean
}

const props = defineProps<Props>()


const emit = defineEmits(['update:modelValue'])
const handleModelUpdate = (newValue: string | number | boolean) => {
  const vModel = props.component.props?.model
    ? {
      ...props?.modelValue,
      [`${props.component.props.model}`]: newValue,
    }
    : newValue
  emit('update:modelValue', vModel)
}

const componentSupportsVModel = (type: string) => {
  const componentsWithVModel = ['q-input', 'q-select', 'q-checkbox', 'q-radio']
  return componentsWithVModel.includes(type)
}

</script>

<template>
  <condition :is-true='component.children'>
    <component :is='component.type' v-bind='component.props'>
      <ui-parser-children
        v-for='(itemChild, key) in component.children'
        :key='itemChild.id'
        :component='itemChild'
        :modelValue='modelValue'
        @update:modelValue='handleModelUpdate' />
    </component>
    <template #else>
      <component
        v-if='componentSupportsVModel(component.type)'
        :is='component.type'
        v-bind='component.props'
        :modelValue='modelValue[component.props.model]'
        @update:modelValue='handleModelUpdate'
      ></component>
      <component
        v-else
        :is='component.type'
        v-bind='component.props'
      ></component>
    </template>
  </condition>
</template>


<style scoped>

</style>
