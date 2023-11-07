<script>
// <!-- 'q-input' 'q-btn' 'q-select' 'q-checkbox' 'q-radio' 'color-selector' 'icon-selector'-->
import { get } from 'lodash'

import {
    InputComponentTypes,
    UIElementByJson,
} from 'src/modules/UIParser/types'
import Condition from 'components/UI/Condition.vue'

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
            />
        </component>
        <template #else>
            <component
                :is="component.type"
                v-if="componentSupportsVModel(component.type)"
                v-bind="vBind"
                :model-value="getModelValue(component.props.model)"
                @update:modelValue="handleModelUpdate"
                v-on="vEvents"
            ></component>
            <component
                :is="component.type"
                v-else
                v-bind="component.props"
            ></component>
        </template>
    </condition>
</template>

<style scoped></style>
