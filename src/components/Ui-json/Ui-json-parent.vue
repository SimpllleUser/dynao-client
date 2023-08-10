<script lang='ts' setup>
import { UIElementByJson } from 'components/Ui-json/types'
import Condition from 'components/UI/Condition.vue'

interface Props {
  component: UIElementByJson
}

const props = defineProps<Props>()

</script>

<template>
  <condition :is-true='component.parent'>
    <ui-json-parent :component='component.parent' >
      <component :is='component.type' v-bind='component.config'>
        <slot></slot>
      </component>
    </ui-json-parent>
    <template #else>
      <component :is='component.type' v-bind='component.config'>
        <slot></slot>
      </component>
    </template>
  </condition>
</template>


<style scoped>

</style>
