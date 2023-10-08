import { getCol, getRow } from 'src/modules/UIParser/helpers/ui-factories';
import { InputComponentTypes } from 'src/modules/UIParser/types';

const createSelectComponent = (modelName: string, label: string, placeholder: string = '') => ({
  type: InputComponentTypes.Select,
  props: {
    model: modelName,
    label,
    placeholder,
    filled: true,
    class: 'full-width',
    options: ['primary', 'secondary', 'accent', 'positive', 'negative', 'info', 'warning', 'dark'],
  },
});

const createInputComponent = (model: string, label: string, placeholder: string) => ({
  type: InputComponentTypes.Input,
  props: {
    model,
    label,
    placeholder,
    filled: true,
    class: 'full-width',
  },
});

const createColorSelector = (model: string, label: string) => ({
  type: InputComponentTypes.ColorSelector,
  props: {
    model,
    label,
  },
});

const createCheckboxComponent = (model: string, label: string) => ({
  type: InputComponentTypes.Checkbox,
  props: {
    model,
    label,
  },
});

export const propsConfiguratorInput = [
  getRow({ class: 'w-full' }, [
    createSelectComponent('type', 'Type', 'Type input'),
    createInputComponent('label', 'Label', 'Input label'),
  ]),
  getRow({ class: 'w-full q-pt-sm' }, [
    createInputComponent('placeholder', 'Placeholder', 'Input placeholder'),
  ]),
  createSelectComponent('color', 'Color'),
  createSelectComponent('bg-color', 'Background color'),
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
];

export const propsConfiguratorButton = [
  getRow({ class: 'w-full q-mb-sm' }, [createInputComponent('label', 'Label', 'Input label')]),
  createSelectComponent('color', 'Color'),
  createSelectComponent('text-color', 'Text color'),
  getRow({ class: 'w-full q-mb-sm pb' }, [
    createInputComponent('icon', 'Icon', 'Input icon'),
    createInputComponent('icon-right', 'Icon right', 'Input icon right'),
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
    createColorSelector('color', 'Color'),
  ]),
];
