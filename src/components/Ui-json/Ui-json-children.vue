<script lang='ts' setup>
import { UIElementByJson } from 'components/Ui-json/types'
import Condition from 'components/UI/Condition.vue'

interface Props {
  component: UIElementByJson
}

const props = defineProps<Props>()
const elements2 = [{ 'type': 'q-input' }, { 'type': 'q-select' }, { 'type': 'q-checkbox' }, { 'type': 'q-radio' }, { 'type': 'q-btn' }]

</script>

<template>
  <condition :is-true='component.child'>
    <component :is='component.type' v-bind='component.config'>
      <ui-json-children  v-for='(itemChild, key) in component.child' :key='key' :component='itemChild' />
    </component>
    <template #else>
      <component :is='component.type' v-bind='component.config' > {{ component.child }}  </component>
    </template>
  </condition>

</template>


<style scoped>

</style>
