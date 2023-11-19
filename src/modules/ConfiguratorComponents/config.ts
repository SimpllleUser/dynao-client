import { Col, Div, Row } from 'src/modules/UIParser/helpers/ui-factories'
import { InputComponentTypes } from 'src/modules/UIParser/types'
import {
    Input,
    ColorSelector,
    Checkbox,
    Select,
    InputTypesSelector,
    IconsSelector,
} from 'src/modules/ConfiguratorComponents/form-element'

export const propsConfiguratorInput = [
    Div({
        props: { class: 'bg-primary q-pa-lg text-secondary' },
        body: 'Text body in div',
    }),
    Row({ class: 'w-full' }, [
        InputTypesSelector('type', {
            label: 'Type',
            placeholder: 'Type input',
        }),
        Input('label', {
            label: 'Label',
            placeholder: 'Input label',
            slots: [
                {
                    name: 'append',
                    body: [Checkbox('Some', 'Outline')],
                },
            ],
        }),
    ]),
    Row({ class: 'w-full q-pt-sm' }, [
        Input('placeholder', {
            label: 'Placeholder',
            placeholder: 'Input placeholder',
        }),
    ]),
    Row({ class: 'w-full q-mt-sm' }, [
        ColorSelector('color', { label: 'Color' }),
        ColorSelector('bg-color', { label: 'Background color' }),
    ]),
    Row({ class: 'w-full q-mt-sm' }, [
        Checkbox('outline', 'Outline'),
        Checkbox('dense', 'Dense'),
        Checkbox('filled', 'Filled'),
        Checkbox('disabled', 'Disabled'),
        Checkbox('clearable', 'Clearable'),
    ]),
    Row({ class: 'w-full q-mt-sm' }, [
        Checkbox('standout', 'Standout'),
        Checkbox('square', 'Square'),
        Checkbox('rounded', 'Rounded'),
        Checkbox('borderless', 'Borderless'),
    ]),
]

export const propsConfiguratorButton = [
    Row({ class: 'w-full q-mb-sm' }, [
        Input('label', { label: 'Label', placeholder: 'Input label' }),
    ]),
    ColorSelector('color', { label: 'Color' }),
    ColorSelector('text-color', { label: 'Text color' }),
    Row({ class: 'w-full q-mb-sm pb' }, [
        IconsSelector('icon', { label: 'Icon', placeholder: 'Input icon' }),
        IconsSelector('icon-right', {
            label: 'Icon right',
            placeholder: 'Input icon right',
        }),
    ]),
    Row({ class: 'w-full q-mb-sm' }, [
        Checkbox('round', 'Round'),
        Checkbox('flat', 'Flat'),
        Checkbox('outline', 'Outline'),
        Checkbox('round', 'Round'),
    ]),
    Row({}, [Checkbox('square', 'Square'), Checkbox('no-caps', 'No-caps')]),
]
