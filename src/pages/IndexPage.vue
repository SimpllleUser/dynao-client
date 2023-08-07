<template>
  <div>
    <div class='row'>
      <div class='col-8'>
        <div><b>Form | {{ showOption }}</b></div>
        <hr>
        <ui-by-json :elements='uiElements' />
<!--        <q-select v-model='select' v-bind='selectConfigurator' />-->


        <!--        <q-checkbox-->
        <!--          v-model='checkboxValue'-->
        <!--          v-bind='checkboxConfigurator'-->
        <!--        />-->
        <!--        <form-input-->
        <!--          v-model='text'-->
        <!--          v-bind='inputConfigurator'-->
        <!--          @focus='showOption = true'-->
        <!--        />-->
        <hr>
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
      <FormSelectorConfigurator v-model='selectConfigurator' />
      <!--      <FormCheckboxConfigurator v-model='checkboxConfigurator' />-->
      <!--      <FormCheckboxConfigurator v-model='checkboxConfigurator' />-->
      <!--      <FormInputConfigurator v-model='inputConfigurator' />-->
    </input-property-drawer>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { useToggle } from '@vueuse/core'
import { Vue3JsonEditor } from 'vue3-json-editor'
import { BackgroundColors, Colors } from 'boot/configurator-properties'
import InputPropertyDrawer from 'components/UI/InputPropertyDrawer.vue'
import FormSelectorConfigurator from 'components/FormConfigurator/FormSelectorConfigurator.vue'
import FormInput from 'components/FormInputs/FormInput.vue'
import FormInputConfigurator from 'components/FormConfigurator/FormInputConfigurator.vue'
import FormCheckboxConfigurator from 'components/FormConfigurator/FormCheckboxConfigurator.vue'
import IconSelector from 'components/UI/IconSelector.vue'
import UiByJson from 'components/Ui-json/Ui-by-json.vue'


const [showOption] = useToggle(false)

const icon = ref('add')
const select = ref(null)
const checkboxValue = ref(null)
const handleChange = (value: JSON) => {
  entity.value = value
}

const entity = ref({})

const inputConfigurator = ref({
  color: Colors.primary,
  bgColor: BackgroundColors.white,
  clearable: false,
  counter: false,
  disable: false,
  label: '',
  loading: false,
  readonly: false,
  shadowText: '',
  stackLabel: false,
  labelColor: BackgroundColors.primary
})

const selectConfigurator = ref({
  color: Colors.primary,
  bgColor: BackgroundColors.white,
  clearable: false,
  counter: false,
  disable: false,
  label: '',
  loading: false,
  readonly: false,
  shadowText: '',
  stackLabel: false,
  labelColor: BackgroundColors.primary
})
const checkboxConfigurator = ref({
  color: Colors.primary,
  bgColor: BackgroundColors.white,
  labelColor: BackgroundColors.primary
})

const uiElements = [
  {
    type: 'q-input',
    config: {
      modelValue: '123123',
      label: 'q-input',
      mask: '####-##-##'
    },
    events: {
      'update:model-value': (value) => { console.log(value) }
    }
  },
  {
    type: 'q-select',
    config: {
      label: 'q-select'
    },
  },
  {
    type: 'q-checkbox',
    config: {
      label: 'q-checkbox'
    },
  },
  {
    type: 'q-radio',
    config: {
      label: 'q-radio'
    },
  },
  {
    type: 'q-btn',
    config: {
      icon: 'pen',
      content: 'q-btn'
    },
    parent: {
      type: 'h1',
      parent: {
        type: 'h2',
      },
    },
    child: {
      type: 'h3',
      label: 'h3',
      child: {
        type: 'h2',
        label: 'h2'
      },
    },
    events: {
      'click': (value: string) => { console.log(value) }
    }
  },
]
</script>
