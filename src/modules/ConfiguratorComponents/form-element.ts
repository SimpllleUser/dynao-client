import { InputComponentTypes } from 'src/modules/UIParser/types'
import iconsSource from '../../boot/icon-names'

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



export const createInputComponent = (model: string, label: string, placeholder: string) => {
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

export const createCheckboxComponent = (model: string, label: string) => ({
  type: InputComponentTypes.Checkbox,
  props: {
    model,
    label
  }
})

export const createSelectComponent = (modelName: string, label: string, placeholder: string = '', props?: any) => {


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
            ? _this.vData.options.filter((item: string) => item.toLowerCase().includes(val.trim().toLowerCase()))
            : props.options
        })
      },
    }),
  }
}

export const createColorSelector = (modelName: string, label: string, placeholder: string = '', props?: any) => {
  return createSelectComponent(modelName, label, placeholder, {
    ...props,
    options: COLOR_VARIANTS,
  });
};

export const createInputTypesSelector = (modelName: string, label: string, placeholder: string = '', props?: any) => {
  return createSelectComponent(modelName, label, placeholder, {
    options: INPUT_TYPES,
    ...props,
  });
};

export const createIconsSelector = (modelName: string, label: string, placeholder: string = '', props?: any) => {
  return createSelectComponent(modelName, label, placeholder, {
    options: iconsSource,
    virtualScrollSliceSize: 25,
    useInput: true,
    events: {
      // filter: () => (val, update) => {
      //   update(() => {
      //     const needle = val.toLowerCase()
      //     icons.value = iconsSource.filter(v => v.toLowerCase().indexOf(needle) > -1)
      //   })
      // }
    },
    ...props,
  });
};
