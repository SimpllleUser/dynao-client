<script lang='ts' setup>
import { UIElementByJson } from 'components/Ui-json/types'

interface Props {
  component: UIElementByJson
}

const props = defineProps<Props>()

</script>

<template>
  <div v-if='component.child' style='border: 1px solid red; padding: 5px'>
    <component :is='component.type'>
    {{ component.label }}
    <ui-json-children :component='component.child' >
    </ui-json-children>
    </component>
  </div>
  <div v-else style='border: 1px solid blue; padding: 5px'>
    <component :is='component.type'>{{ component.label }}</component>
  </div>
</template>


<style scoped>

</style>
