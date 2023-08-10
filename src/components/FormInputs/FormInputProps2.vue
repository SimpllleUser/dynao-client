<script setup lang="ts">
import { ref } from 'vue'

const fields = [
    {
        type: 'select',
        model: 'type',
        label: 'Type',
        options: [
            'text',
            'password',
            'textarea',
            'email',
            'search',
            'tel',
            'number',
            'url',
            'time',
            'date',
            'datetime-local',
        ],
    },
    {
        type: 'input',
        model: 'debounce',
        label: 'Debounce',
        inputType: 'number',
    },
    {
        type: 'checkbox',
        model: 'autofocus',
        label: 'Autofocus',
    },
    {
        type: 'input',
        model: 'maxLength',
        label: 'Max Length',
        inputType: 'number',
    },
    {
        type: 'input',
        model: 'max',
        label: 'Max',
        inputType: 'text',
    },
    {
        type: 'input',
        model: 'min',
        label: 'Min',
        inputType: 'text',
    },
    {
        type: 'input',
        model: 'step',
        label: 'Step',
        inputType: 'number',
    },
    {
        type: 'input',
        model: 'color',
        label: 'Color',
        inputType: 'color',
    },
    {
        type: 'checkbox',
        model: 'clearable',
        label: 'Clearable',
    },
    {
        type: 'input',
        model: 'clearIcon',
        label: 'Clear Icon',
        inputType: 'text',
    },
    {
        type: 'checkbox',
        model: 'fillInput',
        label: 'Fill Input',
    },
    {
        type: 'input',
        model: 'hint',
        label: 'Hint',
        inputType: 'text',
    },
    {
        type: 'checkbox',
        model: 'hideHint',
        label: 'Hide Hint',
    },
    {
        type: 'input',
        model: 'prefix',
        label: 'Prefix',
        inputType: 'text',
    },
    {
        type: 'input',
        model: 'suffix',
        label: 'Suffix',
        inputType: 'text',
    },
    {
        type: 'input',
        model: 'mask',
        label: 'Mask',
        inputType: 'text',
    },
    {
        type: 'checkbox',
        model: 'filled',
        label: 'Filled',
    },
    {
        type: 'checkbox',
        model: 'outlined',
        label: 'Outlined',
    },
    {
        type: 'checkbox',
        model: 'standout',
        label: 'Standout',
    },
    {
        type: 'checkbox',
        model: 'bottomSlots',
        label: 'Bottom Slots',
    },
    {
        type: 'checkbox',
        model: 'lazyRules',
        label: 'Lazy Rules',
    },
].map(({ label, model, type, ...other }) => ({
    props: { label, ...other },
    modelKey: model,
    component: `q-${type}`,
}))
const elements2 = [
    { type: 'q-input' },
    { type: 'q-select' },
    { type: 'q-checkbox' },
    { type: 'q-radio' },
    { type: 'q-btn' },
]

const test = ref({})
</script>

<template>
    <div>
        <component
            :is="field.component"
            v-for="(field, index) in fields"
            :key="index"
            v-bind="field.props"
            v-model="test[`${field.modelKey}`]"
        >
        </component>
    </div>
</template>

<style scoped></style>
