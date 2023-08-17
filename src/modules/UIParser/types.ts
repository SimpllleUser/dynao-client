export type BaseType = string | boolean | number | object

export enum InputComponentTypes {
  Input = 'q-input',
  Select = 'q-select',
  Checkbox = 'q-checkbox',
  Radio = 'q-radio',
}

export type BlockComponentTypes =
  | "div"
  | "p"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "ol"
  | "ul"
  | "li"
  | "pre"
  | "address"
  | "blockquote"
  | "dl"
  | "dt"
  | "dd"
  | "figure"
  | "figcaption"
  | "hr"
  | "table"
  | "caption"
  | "thead"
  | "tbody"
  | "tfoot"
  | "tr"
  | "td"
  | "th"
  | "main"
  | "aside"
  | "article"
  | "section"
  | "header"
  | "footer"
  | "nav";

export type ComponentTypes = InputComponentTypes | BlockComponentTypes

export type Props = any
// export type Props = { placeholder?:  string, label?:  string, class?:  string, model?: string, id?: string, modelValue?: BaseType }

export interface UIElementByJson {
  id?: string
  type: ComponentTypes
  parent?: UIElementByJson
  children?: UIElementByJson
  events?: object,
  props?: Props,
}

export type Children = Array<UIElementByJson>
export type Parent = Array<UIElementByJson>
