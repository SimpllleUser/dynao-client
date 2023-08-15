<script setup lang="ts">
import { ref } from 'vue'
import UiJsonChildren from 'components/Ui-json/Ui-json-children.vue'
import { getCol, getRow } from 'boot/component-factories'

const fields = [
    getRow(
        [
            getCol([
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
            ]),
            getCol(
                [
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
                {
                    class: 'bg-secondary',
                },
            ),
        ],
        {
            class: 'bg-primary',
        },
    ),
]
const elements2 = [
    { type: 'q-input' },
    { type: 'q-select' },
    { type: 'q-checkbox' },
    { type: 'q-radio' },
    { type: 'q-btn' },
]

const value = ref({
    type: 'text',
    debounce: '200',
    test: '200',
})
</script>

<template>
    <div>
        <UiJsonChildren
            v-for="(field, index) in fields"
            :key="field.id"
            v-model="value"
            :component="field"
            :optional-key="optionalKey"
        >
        </UiJsonChildren>
    </div>
</template>

<style scoped></style>
