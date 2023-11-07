import { InputComponentTypes } from 'src/modules/UIParser/types'
import iconsSource from '../../boot/icon-names'
import { filterTextItemsByText } from 'src/modules/ConfiguratorComponents/helpers'

export type ComponentClass = string | Record<string, boolean>
export interface InputComponentProps {
  model?: unknown
  label?: string
  placeholder?: string
  filled?: boolean
  class?: string | Array<ComponentClass>
}

interface InputComponentConfig {
  type: InputComponentTypes;
  props?: InputComponentProps;
  events?: (context: any) => Record<string, Function>
}

const COLOR_VARIANTS = ['primary', 'secondary', 'accent', 'positive', 'negative', 'info', 'warning', 'dark']

const INPUT_TYPES = [
  'text',
  'password',
  'number',
  'email',
  'search',
  'tel',
  'url',
  'date',
  'time',
  'datetime-local',
  'month',
  'week',
  'color',
];



export const Input = (model: any, label: string, placeholder: string): InputComponentConfig => {
  return {
    type: InputComponentTypes.Input,
    props: {
      model,
      label,
      placeholder,
      filled: true,
      class: 'full-width'
    },
  };
}

export const Checkbox = (model: string, label: string): InputComponentConfig => ({
  type: InputComponentTypes.Checkbox,
  props: {
    model,
    label
  }
})

export const Select = (modelName: string, label: string, placeholder: string = '', props?: any): InputComponentConfig => {


  return {
    type: InputComponentTypes.Select,
    props: {
      model: modelName,
      label,
      placeholder,
      filled: true,
      'use-input': true,
      class: 'full-width',
      ...props,
    },
    events: (_this: any) => ({
      filter: (val: any, update: any) => {
        update(() => {
          _this.vData.options = val.trim().length
            ? filterTextItemsByText(_this.vData.options, val)
            : props.options
        })
      },
    }),
  }
}

export const ColorSelector = (modelName: string, label: string, placeholder: string = '', props?: any): InputComponentConfig => {
  return Select(modelName, label, placeholder, {
    ...props,
    options: COLOR_VARIANTS,
  });
};

export const InputTypesSelector = (modelName: string, label: string, placeholder: string = '', props?: any): InputComponentConfig => {
  return Select(modelName, label, placeholder, {
    options: INPUT_TYPES,
    ...props,
  });
};

export const IconsSelector = (modelName: string, label: string, placeholder: string = '', props?: any): InputComponentConfig => {
  return Select(modelName, label, placeholder, {
    options: iconsSource,
    virtualScrollSliceSize: 25,
    useInput: true,
    events: (_this: any) => ({
      filter: (val: any, update: any) => {
        update(() => {
          _this.vData.options = val.trim().length
            ? filterTextItemsByText(_this.vData.options, val)
            : props.options
        })
      },
    }),
    ...props,
  });
};
