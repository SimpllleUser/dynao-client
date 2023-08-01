<template>
  <div>
    <div class='row'>
      <div class='col-8'>
        <div><b>Form | {{ showOption }}</b></div>
        <form-input
          v-model='text'
          v-bind='inputConfigurator'
          @focus='showOption = true'
        />
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

    <q-drawer
      side='right'
      v-model='showOption'
      show-if-above
      bordered
      width='400'
      overlay
      :breakpoint='500'
    >
      <q-scroll-area class='fit'>
        <div class='p-y-md'>
          <div class='row items-center'>
            <div class='col'>
              <q-btn icon='close' flat @click='toggleOptions()'></q-btn>
            </div>
            <div class='col'>
              <b>Input properties</b>
            </div>
          </div>
        <div class='q-pa-sm'>
          <FormInputConfigurator v-model='inputConfigurator' />
        </div>
        </div>
      </q-scroll-area>
    </q-drawer>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { useToggle } from '@vueuse/core'
import { Vue3JsonEditor } from 'vue3-json-editor'
import FormInput from 'components/FormInputs/FormInput.vue'
import FormInputConfigurator from 'components/FormConfigurator/FormInputConfigurator.vue'
import { BackgroundColors, Colors } from 'boot/configurator-properties'
import ColorSelector from 'components/UI/ColorSelector.vue'


const [showOption, toggleOptions] = useToggle(false)

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
