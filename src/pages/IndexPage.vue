<template>
  <div>
    <div class='row'>
      <div class='col-8'>
        <div><b>Form</b></div>
        <color-selector v-model='color' />
        <form-input v-model='text' v-bind='inputConfigurator' />
        <hr>
        <FormInputConfigurator v-model='inputConfigurator' />
      </div>
      <div class='col-4'>
        <div><b>Source entity</b></div>
        <hr>
        <Vue3JsonEditor
          @json-change='handleChange'
        />
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { Vue3JsonEditor } from 'vue3-json-editor'
import FormInput from 'components/FormInputs/FormInput.vue'
import FormInputConfigurator from 'components/FormConfigurator/FormInputConfigurator.vue'
import { BackgroundColors, Colors } from 'boot/configurator-properties'
import ColorSelector from 'components/UI/ColorSelector.vue'

const text = ref('')
const handleChange = (value: JSON) => {
  entity.value = value
}

const color = ref()
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
</script>
