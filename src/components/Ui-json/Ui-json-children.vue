<script lang='ts' setup>
import { UIElementByJson } from 'components/Ui-json/types'
import Condition from 'components/UI/Condition.vue'

interface Props {
  component: UIElementByJson
}

const props = defineProps<Props>()

</script>

<template>
  <condition :is-true='component.child'>
    <component :is='component.type' style='border: 1px solid red; padding: 5px'>
      {{ component.label }}
      <ui-json-children :component='component.child'>
      </ui-json-children>
    </component>
    <template #else>
      <component :is='component.type' style='border: 1px solid blue; padding: 5px'>{{ component.label }}</component>
    </template>
  </condition>

</template>


<style scoped>

</style>
