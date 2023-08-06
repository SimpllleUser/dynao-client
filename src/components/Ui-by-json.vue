<script lang="ts" setup>

import { computed } from 'vue'

enum ComponentTypes {
  Input = 'input',
  Select = 'Select',
  Checkbox = 'checkbox',
  Radio = 'radio',
}

interface UIElementByJson {
  type: ComponentTypes
}

interface Props {
  elements: Array<UIElementByJson>
}

const props = defineProps<Props>()

const getComponentNameByType = (type: ComponentTypes): string => `q-${type}`

const components = computed(() => props.elements.map((element) => ({
  ...element,
  name: element.type
}) ))

const elements2 =  [ { "type": "q-input" }, { "type": "q-select" }, { "type": "q-checkbox" }, { "type": "q-radio" }, { "type": "q-btn" } ]

</script>

<template>
    <div>
      <div v-for='(component, index) in components' :key='index'>
        <component :is='component.name' v-bind='component.config' v-on='component.events' />
      </div>
    </div>
</template>

<style scoped></style>
