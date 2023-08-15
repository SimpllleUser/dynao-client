<script setup lang="ts">
import { ref } from 'vue'
import UiJsonChildren from 'components/Ui-json/Ui-json-children.vue'

const fields = [
    {
        type: 'div',
        props: {
            type: '',
            debounce: '',
        },
        children: [
            {
                type: 'q-select',
                props: {
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
            },
            {
                type: 'q-input',
                props: {
                    model: 'debounce',
                    label: 'Debounce',
                    inputType: 'number',
                },
            },
        ],
    },
]
const elements2 = [
    { type: 'q-input' },
    { type: 'q-select' },
    { type: 'q-checkbox' },
    { type: 'q-radio' },
    { type: 'q-btn' },
]

const test = ref({})
</script>
<!--v-model="test[`${field.modelKey}`]"-->

<template>
    <div>
        {{ test }}
        <UiJsonChildren
            v-for="(field, index) in fields"
            :key="index"
            v-model="test[`${field.props.model}`]"
            :component="field"
        >
        </UiJsonChildren>
    </div>
</template>

<style scoped></style>
