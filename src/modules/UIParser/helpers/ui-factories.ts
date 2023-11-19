import { curry } from 'lodash'

import { Children, ComponentTypes, Parent, Props } from '../types'

export default interface Component {
  type: ComponentTypes;
  props: Props;
  children: Children;
  parent: Parent;
  body: any;
};

export type Slots = Array<{ name: string; body: any }>

type ComponentFactory = (
  props?: Props,
  children?: Children,
  parent?: Parent
) => Component;
export const componentByType: any = (
  type: ComponentTypes,
  params?: { props?: Props; children?: Children; parent?: Children; body?: any } | {}
) => ({
  type,
  ...params
})

// TODO як окремі аргументи передавати тільки обов'язкові поля, а всі інші поля передавати об'єктом
export const componentFactory = (
  type: ComponentTypes
) => (params?: {
  props?: Props,
  children?: Children,
  parent?: Children,
  body?: any
}) => componentByType(type,
  params)

const getClassWithDefault = (defaultClass: string, props: Props): Props => ({
  ...props,
  class: `${defaultClass} ${props?.class || ''}`
})

const getConcatStringBySeparator = (
  startString: string,
  separator = '',
  endString?: string | number
): string => `${startString}${separator}${endString || ''}`

const mappedForColClass = (col?: string | number) => {
  const seperator = col ? '-' : ''
  return getConcatStringBySeparator('col', seperator, col)
}

export const componentByTypeCurry = curry(componentByType) as (
  type: ComponentTypes
) => ComponentFactory;

// export const getDivFactory = componentByTypeCurry('div') as ComponentFactory;

export const Div = componentFactory('div')

export const Row = (props = {} as Props, children: Children, params?: {parent?: Parent, body: any}) => Div(
  {
    ...getClassWithDefault('row', props || {}),
    children,
    parent,
    params
  },
  )

export const Col = (props = {} as Props, children: Children, col?: string | number, parent?: Parent, body?: any) => Div(
  {
    ...getClassWithDefault(mappedForColClass(col), props),
    children,
    parent,
    body,
  },
)

