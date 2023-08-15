<script setup lang="ts">
import { ref } from 'vue'
import UiJsonChildren from 'components/Ui-json/Ui-json-children.vue'

const fields = [
    {
        id: '1',
        type: 'div',
        props: {
            // type: '',
            // debounce: '',
        },
        children: [
            {
                id: '1.1',
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
                  clearable: true,
                },
            },
            {
                id: '1.2',
                type: 'q-input',
                props: {
                    model: 'debounce',
                    label: 'Debounce',
                    inputType: 'number',
                    clearable: true,
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

const test = ref({
    type: 'text',
    debounce: '200',
})
</script>
<!--v-model="test[`${field.modelKey}`]"-->

<template>
    <div>
      {{ test }}
        <UiJsonChildren
            v-for="(field, index) in fields"
            :key="field.id"
            v-model="test"
            :component="field"
            :optional-key="optionalKey"
        >
        </UiJsonChildren>
    </div>
</template>

<style scoped></style>
