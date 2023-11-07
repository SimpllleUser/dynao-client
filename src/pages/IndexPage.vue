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
        <ui-parser
          v-if="activeTypeComponent === 'q-input'"
          v-model='inputConfigurator'
          :components='propsConfiguratorInput'
        />
        <ui-parser
          v-if="activeTypeComponent === 'q-btn'"
          v-model='buttonConfigurator'
          :components='propsConfiguratorButton'
        />
        {{ inputConfigurator }}
      </div>
    </input-property-drawer>
  </div>
</template>

<script setup lang='ts'>
import { Ref, ref } from 'vue'
import { useToggle } from '@vueuse/core'
import { Vue3JsonEditor } from 'vue3-json-editor'
import { Nullable } from 'boot/types'
import { propsConfiguratorInput, propsConfiguratorButton } from 'src/modules/ConfiguratorComponents/config'
import InputPropertyDrawer from 'components/UI/InputPropertyDrawer.vue'
import UiParser from 'src/modules/UIParser/components/UiParser.vue'


const entity = ref('')

const [showOption] = useToggle(false)

const handleChange = (value: JSON) => {
  entity.value = value
}

const inputConfigurator = ref({

})
const buttonConfigurator = ref({})

const activeTypeComponent: Ref<Nullable<any>> = ref(null)
const setActiveTypeComponent = (type: string) => {
  activeTypeComponent.value = type
}

</script>
