<script lang='ts' setup>
import { UIElementByJson } from 'components/Ui-json/types'
import Condition from 'components/UI/Condition.vue'

interface Props {
  component: UIElementByJson
  modelValue: string | number | boolean
}

const props = defineProps<Props>()
const elements2 = [{ 'type': 'q-input' }, { 'type': 'q-select' }, { 'type': 'q-checkbox' }, { 'type': 'q-radio' }, { 'type': 'q-btn' }]


const emit = defineEmits(['update:modelValue'])
const handleModelUpdate = (newValue: string | number | boolean) => {
  /// Возможно надо передавать из children из какого комопнента или по какомуц ключу идет обращение к v-model
  //  if(!props.component.props?.model) {
  //    console.log('Start')
  //    console.log(newValue)
  //    console.log({ ...props.modelValue })
  //    console.log({ ...props })
  //    console.log('End')
  //  }

  const vModel = props.component.props.model
    ? {
      ...props.modelValue,
      [`${props.component.props.model}`]: newValue,
    }
    : newValue
  console.log(newValue)
  emit('update:modelValue', vModel)
}

const componentSupportsVModel = (type: string) => {
  // Тут список компонентов, которые поддерживают v-model или аналог
  const componentsWithVModel = ['q-input', 'q-select', 'q-checkbox', 'q-radio']
  return componentsWithVModel.includes(type)
}
</script>

<template>
  <condition :is-true='component.children'>
    <component :is='component.type' v-bind='component.props'>
      <ui-json-children
        v-for='(itemChild, key) in component.children'
        :key='itemChild.id'
        :component='itemChild'
        :modelValue='modelValue'
        @update:modelValue='handleModelUpdate' />
    </component>
    <template #else>
      {{ modelValue[component.props.model] }}
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
