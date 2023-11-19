<script>
// <!-- 'q-input' 'q-btn' 'q-select' 'q-checkbox' 'q-radio' 'color-selector' 'icon-selector'-->
import { get } from 'lodash'

import {
    InputComponentTypes,
    UIElementByJson,
} from 'src/modules/UIParser/types'
import Condition from 'components/UI/Condition.vue'
import UiParser from 'src/modules/UIParser/components/UiParser.vue'

function setNestedValue(obj, keys, value) {
    if (keys.length === 1) {
        obj[keys[0]] = value
    } else {
        const key = keys[0]
        if (!obj[key]) {
            obj[key] = {}
        }
        setNestedValue(obj[key], keys.slice(1), value)
    }
}
export default {
    components: { Condition },
    props: {
        component: Object,
        modelValue: [String, Number, Boolean],
        slots: Array,
    },
    data() {
        const vEvents = this.component?.events
            ? this.component?.events(this)
            : {}
        return {
            modelValueData: this.modelValue,
            vData: this.component.props,
            vEvents,
        }
    },
    computed: {
        vBind() {
            return { ...this.component.props, ...this.vData }
        },
    },
    methods: {
        getModelValue(valuePath = '') {
            return get(this.modelValueData, this.component.props.model)
        },
        componentSupportsVModel() {
            const { type } = this.component
            const componentsWithVModel = Object.values(InputComponentTypes)
            return componentsWithVModel.includes(type)
        },
        handleModelUpdate(newValue) {
            if (this.component.props && this.component.props.model) {
                const keys = this.component.props.model.split('.')
                setNestedValue(this.modelValueData, keys, newValue)
            } else {
                this.modelValueData = newValue
            }
            this.$emit('update:modelValue', this.modelValueData)
        },
    },
}
</script>

<template>
    <condition :is-true="component.children">
        <component :is="component.type" v-bind="component.props">
            <ui-parser-nested
                v-for="(itemChild, key) in component.children"
                :key="itemChild.id"
                :component="itemChild"
                :model-value="modelValueData"
                @update:modelValue="handleModelUpdate"
            >
                <!--Додати відображення body (text ...)-->
            </ui-parser-nested>
        </component>
        <template #else>
            <component
                :is="component.type"
                v-if="componentSupportsVModel(component.type)"
                v-bind="vBind"
                :model-value="getModelValue(component.props.model)"
                @update:modelValue="handleModelUpdate"
                v-on="vEvents"
            >
                <template
                    v-for="slot in component.slots"
                    :key="slot.name"
                    #[slot.name]="item"
                >
                    <!--Видалені елементи data bind
                  Необідно автоматизувати при'язку дані між компонентами
                  з указанням рівня вкладеності там передачі на найвищий елемент
                  Просто указувати який об'єкт прив'язується до якого компоненту-->
                    <ui-parser-nested
                        v-for="(slotBody, slotKey) in slot.body"
                        :key="slotKey"
                        :model-value="slotBody.props.model"
                        :component="slotBody"
                    />
                </template>
            </component>
            <component :is="component.type" v-else v-bind="component.props">
                <template
                    v-for="slot in component.slots"
                    :key="slot.name"
                    #[slot.name]="item"
                >
                    {{ slot.body }}
                    <ui-parser :components="slot.body" />
                </template>
            </component>
        </template>
    </condition>
</template>

<style scoped></style>
