<template>
  <div>
    <div class='row'>
      <div class='col-8'>
        <div><b>Form | {{ showOption }}</b></div>

        <q-checkbox
          v-model='checkboxValue'
          v-bind='checkboxConfigurator'
        />
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
      <FormCheckboxConfigurator v-model='checkboxConfigurator' />
      <!--      <FormInputConfigurator v-model='inputConfigurator' />-->
    </input-property-drawer>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { useToggle } from '@vueuse/core'
import { Vue3JsonEditor } from 'vue3-json-editor'
import FormInput from 'components/FormInputs/FormInput.vue'
import FormInputConfigurator from 'components/FormConfigurator/FormInputConfigurator.vue'
import { BackgroundColors, Colors } from 'boot/configurator-properties'
import InputPropertyDrawer from 'components/UI/InputPropertyDrawer.vue'
import FormCheckboxConfigurator from 'components/FormConfigurator/FormCheckboxConfigurator.vue'


const [showOption] = useToggle(false)

const text = ref('')
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
const checkboxConfigurator = ref({
  color: Colors.primary,
  bgColor: BackgroundColors.white,
  labelColor: BackgroundColors.primary
})
</script>
