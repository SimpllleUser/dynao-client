<script lang='ts' setup>
import { UIElementByJson } from 'src/modules/UIParser/types'
import Condition from 'components/UI/Condition.vue'

interface Props {
  component: UIElementByJson
}

const props = defineProps<Props>()

</script>

<template>
  <condition :is-true='component.parent'>
    <ui-parser-parent :component='component.parent' >
      <component :is='component.type' v-bind='component.props'>
        <slot></slot>
      </component>
    </ui-parser-parent>
    <template #else>
      <component :is='component.type' v-bind='component.props'>
        <slot></slot>
      </component>
    </template>
  </condition>
</template>


<style scoped>

</style>
