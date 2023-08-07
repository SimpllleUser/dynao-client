export enum ComponentTypes {
  Input = 'input',
  Select = 'Select',
  Checkbox = 'checkbox',
  Radio = 'radio',
}

export interface UIElementByJson {
  type: ComponentTypes
  parent: UIElementByJson
  child: UIElementByJson
  events: object,
  config: object,
}
