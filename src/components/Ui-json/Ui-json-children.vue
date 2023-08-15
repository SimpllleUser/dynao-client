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
// const handleModelUpdate = (newValue: string | number | boolean) => {
//   if (!props.component.props?.model) console.log(newValue.model)
//   const modelValue = props.component.props?.model
//     ? { value: newValue, model: props.component.props.model }
//     : { [`${newValue.model}`]: newValue.value }
//   emit('update:modelValue', modelValue)
// }

const handleModelUpdate = (newValue: { model: string; value: string | number | boolean }) => {
  if (typeof props.modelValue === 'object' && !Array.isArray(props.modelValue) && props.modelValue !== null) {
    // Если modelValue является объектом, объедините новое значение с существующим
    emit('update:modelValue', { ...props.modelValue, [newValue.model]: newValue.value });
  } else {
    // Если это простое значение, просто отправьте новое значение
    emit('update:modelValue', newValue.value);
  }
}

</script>

<template>
<!--  <div v-if='!component.props.model' class='bg-primary'>-->
<!--    {{ modelValue }}-->
<!--  </div>-->
  <condition :is-true='component.children'>
    <component :is='component.type' v-bind='component.props'>
      <ui-json-children
        v-for='(itemChild, key) in component.children'
        :key='key'
        :component='itemChild'
        :modelValue='modelValue'
        @update:modelValue='handleModelUpdate' />
    </component>
    <template #else>
      <component
        :is='component.type'
        v-bind='component.props'
        :modelValue='modelValue'
        @update:modelValue='handleModelUpdate'></component>
    </template>
  </condition>

</template>


<style scoped>

</style>
