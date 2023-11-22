<template>
  <div>
    <div class='row'>
      <div class='col-4'>
       <q-banner  class="bg-negative text-white">
         Можна додати обробку Event <hr>
         Виділити в окрему змінну список елементів та з нею виконувати операції<hr>
         Додати рективності до конфігурацї чи до елементів hildren, body, parant і т д<hr>
         Спробувати надати реактивності самій конфігурацї (може воно всеодно не буде відпрацовувати)<hr>
         Пділаштувати нові методи фабрики піл старий форматЮ чи навпаки<hr>
         Виділити елементи логіки в коремі методи (UiParserNested)<hr>
       </q-banner>

        <ui-parser
          v-model='todoModel'
          :components='propsConfiguratorTodo'
        />

<!--        <component :is="'q-input'" v-model='entity' v-bind='inputConfigurator'-->
<!--                   @click="setActiveTypeComponent('q-input')" />-->
<!--        <component :is="'q-btn'" v-model='entity' v-bind='buttonConfigurator'-->
<!--                   @click="setActiveTypeComponent('q-btn')" />-->
      </div>
<!--      <div class='col-8'>-->
<!--        <div><b>Source entity</b></div>-->
<!--        <hr>-->
<!--        <Vue3JsonEditor-->
<!--          :model-value='propsConfiguratorInput'-->
<!--          @json-change='handleChange'-->
<!--        />-->
<!--      </div>-->
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
<!--  <q-item clickable v-ripple>-->
<!--    <q-item-section>-->
<!--      <q-item-label>Item with caption</q-item-label>-->
<!--      <q-item-label caption>Caption</q-item-label>-->
<!--    </q-item-section>-->
<!--  </q-item>-->
</template>

<script setup lang='ts'>
import { Ref, ref, watch } from 'vue'
import { useToggle } from '@vueuse/core'
import { Vue3JsonEditor } from 'vue3-json-editor'
import { Nullable } from 'boot/types'
import { propsConfiguratorInput, propsConfiguratorButton, propsConfiguratorTodo } from 'src/modules/ConfiguratorComponents/config'
import InputPropertyDrawer from 'components/UI/InputPropertyDrawer.vue'
import UiParser from 'src/modules/UIParser/components/UiParser.vue'


const entity = ref('')

const [showOption] = useToggle(false)

const handleChange = (value: JSON) => {
  entity.value = value
}

const todoModel = ref({})
const inputConfigurator = ref({})
const buttonConfigurator = ref({})

const activeTypeComponent: Ref<Nullable<any>> = ref(null)
const setActiveTypeComponent = (type: string) => {
  activeTypeComponent.value = type
}

watch( () => inputConfigurator, () => {
  console.log(propsConfiguratorInput)
}, { deep: true })

</script>
