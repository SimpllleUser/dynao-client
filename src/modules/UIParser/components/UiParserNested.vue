<script>
// <!-- 'q-input' 'q-btn' 'q-select' 'q-checkbox' 'q-radio' 'color-selector' 'icon-selector'-->

import {
    InputComponentTypes,
    UIElementByJson,
} from 'src/modules/UIParser/types'
import Condition from 'components/UI/Condition.vue'

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
        componentSupportsVModel() {
            const { type } = this.component
            const componentsWithVModel = Object.values(InputComponentTypes)
            return componentsWithVModel.includes(type)
        },
        handleModelUpdate(newValue) {
            if (this.component.props && this.component.props.model) {
                this.modelValueData = {
                    ...this.modelValueData,
                    [this.component.props.model]: newValue,
                }
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
                :model-value="modelValueData[component.props.model]"
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
