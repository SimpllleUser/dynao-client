<script lang='ts' setup>

import { computed } from 'vue'
import { ComponentTypes, UIElementByJson } from 'components/Ui-json/types'
import UiJsonParent from 'components/Ui-json/Ui-json-parent.vue'
import UiJsonChildren from 'components/Ui-json/Ui-json-children.vue'

interface Props {
  elements: Array<UIElementByJson>
}

const props = defineProps<Props>()

const getComponentNameByType = (type: ComponentTypes): string => `q-${type}`

const components = computed(() => props.elements.map((element) => ({
  ...element,
  name: element.type
})))

const elements2 = [{ 'type': 'q-input' }, { 'type': 'q-select' }, { 'type': 'q-checkbox' }, { 'type': 'q-radio' }, { 'type': 'q-btn' }]

</script>

<template>
  <div>
    <div v-for='(component, index) in components' :key='index'>
      <div v-if='component.parent'>
        <ui-json-parent :component='component.parent'>
          <component :is='component.name' v-bind='component.config' v-on='component.events'>
            {{ component.config.content }}
            <ui-json-children v-if='component.child' :component='component.child' />
          </component>
        </ui-json-parent>
      </div>
      <component v-else :is='component.name' v-bind='component.config' v-on='component.events' />
    </div>
  </div>
</template>

<style scoped></style>
