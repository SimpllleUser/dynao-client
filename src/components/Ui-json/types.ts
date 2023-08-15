export enum ComponentTypes {
  Input = 'input',
  Select = 'Select',
  Checkbox = 'checkbox',
  Radio = 'radio',
}

export interface UIElementByJson {
  id?: string
  type: ComponentTypes
  parent: UIElementByJson
  children: UIElementByJson
  events: object,
  props: object & { modelValue?: any },
}
