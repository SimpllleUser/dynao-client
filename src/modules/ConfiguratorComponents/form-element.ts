import { InputComponentTypes } from 'src/modules/UIParser/types';
import { filterTextItemsByText } from 'src/modules/ConfiguratorComponents/helpers';
import { Slots } from 'src/modules/UIParser/helpers/ui-factories';
import ICONS_SOURCE from '../../boot/icon-names';

export type ComponentClass = string | Record<string, boolean>;

export interface InputComponentProps {
  model?: unknown;
  label?: string;
  placeholder?: string;
  filled?: boolean;
  class?: string | Array<ComponentClass>;
}

interface InputComponentConfig {
  type: InputComponentTypes;
  props?: InputComponentProps;
  events?: (context: any) => Record<string, Function>;
  slots?: any;
}

interface ComponentConfig {
  label?: string, placeholder?: string, props?: any, slots?: Slots
}

const COLOR_VARIANTS = ['primary', 'secondary', 'accent', 'positive', 'negative', 'info', 'warning', 'dark'];

const INPUT_TYPES = [
  'text', 'password', 'number', 'email', 'search', 'tel', 'url', 'date',
  'time', 'datetime-local', 'month', 'week', 'color'
];

const VIRTUAL_SCROLL_SIZE = 25

const createBaseConfig = (type: InputComponentTypes, model: any, config?: ComponentConfig): InputComponentConfig => {
  return {
    type,
    props: {
      model,
      label: config?.label || '',
      placeholder: config?.placeholder || '',
      filled: true,
      class: 'full-width'
    },
    slots: config?.slots
  };
};

export const Input = (model: any, config?: ComponentConfig): InputComponentConfig => {
  return createBaseConfig(InputComponentTypes.Input, model, config);
};

export const Checkbox = (model: string, label: string, slots?: Slots): InputComponentConfig => ({
  type: InputComponentTypes.Checkbox,
  props: {
    model,
    label
  },
  slots
});

export const createSelect = (type: InputComponentTypes, modelName: string, config?: ComponentConfig): InputComponentConfig => {
  return {
    type,
    props: {
      ...config?.props,
      model: modelName,
      filled: true,
      'use-input': true,
      class: 'full-width',
      label: config?.label,
      placeholder: config?.placeholder,
    },
    events: (_this: any) => ({
      filter: (val: any, update: any) => {
        update(() => {
          _this.vData.options = val.trim().length
            ? filterTextItemsByText(_this.vData.options, val)
            : config?.props?.options || [];
        });
      }
    }),
    slots: config?.slots
  };
};

export const Select = (modelName: string, config?: ComponentConfig): InputComponentConfig => {
  return createSelect(InputComponentTypes.Select, modelName, config);
};

export const ColorSelector = (modelName: string, config?: ComponentConfig): InputComponentConfig => {
  return createSelect(InputComponentTypes.Select, modelName, {
    label: config?.label,
    placeholder: config?.placeholder,
    props: {
      ...config?.props || {},
      options: COLOR_VARIANTS,
    },
    slots: config?.slots
  });
};

export const InputTypesSelector = (modelName: string, config?: ComponentConfig): InputComponentConfig => {
  return createSelect(InputComponentTypes.Select, modelName, {
    label: config?.label,
    placeholder: config?.placeholder,
    props: {
      ...config?.props,
      options: INPUT_TYPES,
    },
    slots: config?.slots
  });
};

export const IconsSelector = (modelName: string, config?: { label?: string, placeholder?: string, props?: any, slots?: Slots }): InputComponentConfig => {
  return createSelect(InputComponentTypes.Select, modelName, {
    label: config?.label,
    placeholder: config?.placeholder,
    props: {
      options: ICONS_SOURCE,
      virtualScrollSliceSize: VIRTUAL_SCROLL_SIZE,
      useInput: true,
      events: (_this: any) => ({
        filter: (val: any, update: any) => {
          update(() => {
            _this.vData.options = val.trim().length
              ? filterTextItemsByText(_this.vData.options, val)
              : config?.props.options || {};
          });
        }
      }),
      ...config?.props || {}
    },
    slots: config?.slots
  });
};
