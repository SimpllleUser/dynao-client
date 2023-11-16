import { Col, Row } from 'src/modules/UIParser/helpers/ui-factories'
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
    Row({ class: 'w-full' }, [
        InputTypesSelector('type', 'Type', 'Type input'),
        Input('label', 'Label', 'Input label', [
            {
                name: 'append',
                body: [Checkbox('Some', 'Outline')],
            },
        ]),
    ]),
    Row({ class: 'w-full q-pt-sm' }, [
        Input('placeholder', 'Placeholder', 'Input placeholder'),
    ]),
    Row({ class: 'w-full q-mt-sm' }, [
        ColorSelector('color', 'Color'),
        ColorSelector('bg-color', 'Background color'),
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
    Row({ class: 'w-full q-mb-sm' }, [Input('label', 'Label', 'Input label')]),
    ColorSelector('color', 'Color'),
    ColorSelector('text-color', 'Text color'),
    Row({ class: 'w-full q-mb-sm pb' }, [
        IconsSelector('icon', 'Icon', 'Input icon'),
        IconsSelector('icon-right', 'Icon right', 'Input icon right'),
    ]),
    Row({ class: 'w-full q-mb-sm' }, [
        Checkbox('round', 'Round'),
        Checkbox('flat', 'Flat'),
        Checkbox('outline', 'Outline'),
        Checkbox('round', 'Round'),
    ]),
    Row({}, [Checkbox('square', 'Square'), Checkbox('no-caps', 'No-caps')]),
]
