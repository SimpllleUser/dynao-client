<script lang='ts' setup>
import { UIElementByJson } from 'components/Ui-json/types'

interface Props {
  component: UIElementByJson
}

const props = defineProps<Props>()

</script>

<template>
  <div v-if='component.parent'>
    <ui-json-parent :component='component.parent' >
      <component :is='component.type'>
        <slot></slot>
      </component>
    </ui-json-parent>
  </div>
  <div v-else>
    <component :is='component.type'>
      <slot></slot>
    </component>
  </div>
</template>


<style scoped>

</style>
