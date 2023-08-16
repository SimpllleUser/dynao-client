<script lang='ts' setup>

// 'q-input' 'q-btn' 'q-select' 'q-checkbox' 'q-radio'

import { computed } from 'vue'
import { ComponentTypes, UIElementByJson } from 'src/modules/UIParser/types'
import UiParserParent from 'src/modules/UIParser/components/UiPareserParent.vue'
import UiParserChildren from 'src/modules/UIParser/components/UiParserChildren.vue'

interface Props {
  elements: Array<UIElementByJson>
}

const props = defineProps<Props>()

const getComponentNameByType = (type: ComponentTypes): string => `q-${type}`

const components = computed(() => props.elements.map((element) => ({
  ...element,
  name: element.type
})))

</script>

<template>
  <div>
    <div v-for='(component, index) in components' :key='index'>
      <div v-if='component.parent'>
        <ui-parser-parent :component='component.parent'>
          <component :is='component.name' v-bind='component.props' v-on='component.events'>
           <ui-parser-children v-if='component.children' :component='component.children' />
          </component>
        </ui-parser-parent>
      </div>
      <component v-else :is='component.name' v-bind='component.props' v-on='component.events' />
    </div>
  </div>
</template>

<style scoped></style>
