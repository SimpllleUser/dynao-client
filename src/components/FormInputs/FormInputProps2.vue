<script setup lang="ts">
import { ref } from 'vue'
import { getCol, getRow } from 'src/modules/UIParser/helpers/ui-factories'
import UiParserChildren from '../../modules/UIParser/components/UiParserChildren.vue'

const components = [
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

const value = ref({
    type: 'text',
    debounce: '200',
    test: '200',
})
</script>

<template>
    <div>
        <ui-parser-children
            v-for="component in components"
            :key="component.id"
            v-model="value"
            :component="component"
            :optional-key="optionalKey"
        />
    </div>
</template>

<style scoped></style>
