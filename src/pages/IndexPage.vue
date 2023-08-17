<template>
  <div>
    <div class='row'>
      <div class='col-8'>
        <component :is="'q-input'" v-model='entity' v-bind='inputConfigurator' />
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
        <ui-parse-v-model v-model='inputConfigurator' :components='commonPropsConfigurator' />
      </div>
    </input-property-drawer>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { useToggle } from '@vueuse/core'
import { Vue3JsonEditor } from 'vue3-json-editor'
import { commonPropsConfigurator } from 'src/modules/ConfiguratorComponents/config'
import InputPropertyDrawer from 'components/UI/InputPropertyDrawer.vue'
import UiParseVModel from 'src/modules/UIParser/components/UiParseVModel.vue'


const entity = ref('')

const [showOption] = useToggle(false)

const handleChange = (value: JSON) => {
  entity.value = value
}

const inputConfigurator = ref({})


</script>
