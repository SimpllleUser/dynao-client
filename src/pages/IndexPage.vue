<template>
  <div>
    <div class='row'>
      <div class='col-8'>
        <div><b>Form | {{ showOption }}</b></div>
        <q-input v-model='entity' v-bind='test' />
        <component :is="'q-input'" v-model='entity' />
        <ui-by-json :elements='uiElements' />
        <ui-json-children v-for='(element, key) in uiElements' :key='key' :component='element'>
          {{ element }} {{ key }}
        </ui-json-children>
      </div>
      <div class='col-4'>
        <div><b>Source entity</b></div>
        <hr>
        <Vue3JsonEditor
          @json-change='handleChange'
        />
      </div>
    </div>

    <input-property-drawer v-model='showOption' label='Input properties'>
      <div>
        <common-input-configurator />
        <form-input-props-2 />
      </div>
      <div v-if='false'>
        <!--        <common-form-input-props input-name='q-input' v-model='test' />-->
        <form-input-props v-model='test' />
      </div>
    </input-property-drawer>
  </div>
</template>

<script setup lang='ts'>
import { computed, ref } from 'vue'
import { useToggle } from '@vueuse/core'
import { Vue3JsonEditor } from 'vue3-json-editor'
import InputPropertyDrawer from 'components/UI/InputPropertyDrawer.vue'
import UiByJson from '../modules/UIParser/components/UiParser.vue'
import FormInputProps from 'components/FormInputs/FormInputProps.vue'
import UiJsonChildren from '../modules/UIParser/components/UiParserChildren.vue'
import CommonInputConfigurator from 'src/modules/ConfiguratorComponents/components/CommonInputConfigurator.vue'


const entity = ref('')
const test = ref({})
const num = ref(0)

const [showOption] = useToggle(false)

const handleChange = (value: JSON) => {
  entity.value = value
}

const inputConfigurator = ref({})

const selectConfigurator = ref({})
const checkboxConfigurator = ref({})
const childrenBtnClick = '!!!!!!!!!!!!`'

const uiElements = computed(() => [
  {
    type: 'div',
    props: {
      class: 'bg-primary'
    },
    // parent: {
    //   type: 'div',
    //   props: {
    //     class: 'bg-primary'
    //   },
    //   parent: {
    //     type: 'div',
    //   },
    // },
    children: [
      {
        type: 'div',
        props: {
          class: 'row bg-secondary'
        },
        children: [
          {
            type: 'div',
            props: {
              class: 'col-4 bg-primary'
            },
            children: [
              {
                type: 'q-btn',
                props: {
                  icon: 'checked',
                  label: 'Click me'
                }
              }
            ]
          },
          {
            type: 'div',
            props: {
              class: 'col-4 bg-primary'
            },
            children: [
              {
                type: 'q-btn',
                props: {
                  icon: 'checked',
                  label: 'Click me'
                }
              }
            ]
          }
        ]
      }
    ]
    // events: {
    //   'click': () => {
    //     num.value += 1
    //     console.log(num.value)
    //   }
    // }
  }
])
</script>
