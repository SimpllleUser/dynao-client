<template>
  <div>
    <div class='row'>
      <div class='col-8'>
        <component :is="'q-input'" v-model='entity' v-bind='inputConfigurator'
                   @click="setActiveTypeComponent('q-input')" />
        <component :is="'q-btn'" v-model='entity' v-bind='buttonConfigurator'
                   @click="setActiveTypeComponent('q-btn')" />
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
        <ui-parse-v-model
          v-if="activeTypeComponent === 'q-input'"
          v-model='inputConfigurator'
          :components='propsConfiguratorInput'
        />
        <ui-parse-v-model
          v-if="activeTypeComponent === 'q-btn'"
          v-model='buttonConfigurator'
          :components='propsConfiguratorButton'
        />
      </div>
    </input-property-drawer>
  </div>
</template>

<script setup lang='ts'>
import { Ref, ref } from 'vue'
import { useToggle } from '@vueuse/core'
import { Vue3JsonEditor } from 'vue3-json-editor'
import { propsConfiguratorInput, propsConfiguratorButton } from 'src/modules/ConfiguratorComponents/config'
import InputPropertyDrawer from 'components/UI/InputPropertyDrawer.vue'
import UiParseVModel from 'src/modules/UIParser/components/UiParseVModel.vue'
import { Nullable } from 'boot/types'


const entity = ref('')

const [showOption] = useToggle(false)

const handleChange = (value: JSON) => {
  entity.value = value
}

const inputConfigurator = ref({})
const buttonConfigurator = ref({})

const activeTypeComponent: Ref<Nullable<any>> = ref(null)
const setActiveTypeComponent = (type: string) => {
  activeTypeComponent.value = type
}

</script>
