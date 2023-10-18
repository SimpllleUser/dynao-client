import { getCol, getRow } from 'src/modules/UIParser/helpers/ui-factories'
import { InputComponentTypes } from 'src/modules/UIParser/types'
import {
  createInputComponent,
  createColorSelector,
  createCheckboxComponent,
  createSelectComponent,
  createInputTypesSelector, createIconsSelector
} from 'src/modules/ConfiguratorComponents/form-element'

export const propsConfiguratorInput = [
    getRow({ class: 'w-full' }, [
        createInputTypesSelector('type', 'Type', 'Type input'),
        createInputComponent('label', 'Label', 'Input label'),
    ]),
    getRow({ class: 'w-full q-pt-sm' }, [
        createInputComponent('placeholder', 'Placeholder', 'Input placeholder'),
    ]),
    createColorSelector('color', 'Color'),
    createColorSelector('bg-color', 'Background color'),
    getRow({ class: 'w-full q-mt-sm' }, [
        createCheckboxComponent('outline', 'Outline'),
        createCheckboxComponent('dense', 'Dense'),
        createCheckboxComponent('filled', 'Filled'),
        createCheckboxComponent('disabled', 'Disabled'),
        createCheckboxComponent('clearable', 'Clearable'),
    ]),
    getRow({ class: 'w-full q-mt-sm' }, [
        createCheckboxComponent('standout', 'Standout'),
        createCheckboxComponent('square', 'Square'),
        createCheckboxComponent('rounded', 'Rounded'),
        createCheckboxComponent('borderless', 'Borderless'),
    ]),
    getRow({ class: 'w-full q-mt-sm' }, [
        createColorSelector('color', 'Color'),
        createColorSelector('bg-color', 'Background color'),
    ]),
]

export const propsConfiguratorButton = [
    getRow({ class: 'w-full q-mb-sm' }, [
        createInputComponent('label', 'Label', 'Input label'),
    ]),
  createColorSelector('color', 'Color'),
  createColorSelector('text-color', 'Text color'),
    getRow({ class: 'w-full q-mb-sm pb' }, [
      createIconsSelector('icon', 'Icon', 'Input icon'),
      createIconsSelector('icon-right', 'Icon right', 'Input icon right'),
    ]),
    getRow({ class: 'w-full q-mb-sm' }, [
        createCheckboxComponent('round', 'Round'),
        createCheckboxComponent('flat', 'Flat'),
        createCheckboxComponent('outline', 'Outline'),
        createCheckboxComponent('round', 'Round'),
    ]),
    getRow({}, [
        createCheckboxComponent('square', 'Square'),
        createCheckboxComponent('no-caps', 'No-caps'),
    ]),
]
