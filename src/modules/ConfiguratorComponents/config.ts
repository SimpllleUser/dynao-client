import { getCol, getRow } from 'src/modules/UIParser/helpers/ui-factories'
import { InputComponentTypes } from 'src/modules/UIParser/types'

export const propsConfiguratorInput = [
    getRow({ class: 'w-full' }, [
        getCol({}, [
            {
                type: InputComponentTypes.Select,
                props: {
                    model: 'type',
                    label: 'Type',
                    placeholder: 'Type input',
                    filled: true,
                    class: 'full-width',
                    options: [
                        'text',
                        'password',
                        'textarea',
                        'email',
                        'search',
                        'tel',
                        'file',
                        'number',
                        'url',
                        'time',
                        'date',
                    ],
                },
            },
        ]),
        getCol({}, [
            {
                type: InputComponentTypes.Input,
                props: {
                    model: 'label',
                    label: 'Label',
                    placeholder: 'Input label',
                    filled: true,
                    class: 'full-width',
                },
            },
        ]),
    ]),
    getRow({ class: 'w-full q-pt-sm' }, [
        {
            type: InputComponentTypes.Input,
            props: {
                model: 'placeholder',
                label: 'Placeholder',
                placeholder: 'Input placeholder',
                filled: true,
                class: 'full-width',
            },
        },
    ]),
    getRow({ class: 'w-full q-mt-sm' }, [
        getCol({}, [
            {
                type: InputComponentTypes.Checkbox,
                props: {
                    model: 'outlined',
                    label: 'Outlined',
                },
            },
        ]),
        getCol({}, [
            {
                type: InputComponentTypes.Checkbox,
                props: {
                    model: 'dense',
                    label: 'Dense',
                },
            },
        ]),
        getCol({}, [
            {
                type: InputComponentTypes.Checkbox,
                props: {
                    model: 'disabled',
                    label: 'Disabled',
                },
            },
        ]),
        getCol({}, [
            {
                type: InputComponentTypes.Checkbox,
                props: {
                    model: 'clearable',
                    label: 'Clearable',
                },
            },
        ]),
    ]),
    getRow({ class: 'w-full q-mt-sm' }, [
        getCol({}, [
            {
                type: InputComponentTypes.Checkbox,
                props: {
                    model: 'standout',
                    label: 'Standout',
                },
            },
        ]),
        getCol({}, [
            {
                type: InputComponentTypes.Checkbox,
                props: {
                    model: 'square',
                    label: 'Square',
                },
            },
        ]),
        getCol({}, [
            {
                type: InputComponentTypes.Checkbox,
                props: {
                    model: 'rounded',
                    label: 'Rounded',
                },
            },
        ]),
        getCol({}, [
            {
                type: InputComponentTypes.Checkbox,
                props: {
                    model: 'borderless',
                    label: 'Borderless',
                },
            },
        ]),
    ]),
    getRow({ class: 'w-full q-mt-sm' }, [
        getCol({}, [
            {
                type: InputComponentTypes.ColorSelector,
                props: {
                    model: 'color',
                    label: 'Color',
                },
            },
        ]),
        getCol({}, [
            {
                type: InputComponentTypes.ColorSelector,
                props: {
                    model: 'bg-color',
                    label: 'Background color',
                },
            },
        ]),
    ]),
]
