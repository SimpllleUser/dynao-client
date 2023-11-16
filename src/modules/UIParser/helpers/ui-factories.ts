import { curry } from 'lodash'

import { Children, ComponentTypes, Parent, Props } from '../types'

interface Component  {
  type: ComponentTypes;
  props: Props;
  children: Children;
  parent: Parent;
};

export type Slots = Array<{ name: string; body: any }>

type ComponentFactory = (
  props?: Props,
  children?: Children,
  parent?: Parent
) => Component;
export const componentByType = (
  type: ComponentTypes,
  props?: Props,
  children?: Children,
  parent?: Children
) => ({
  type,
  props: props || {},
  children: children || [],
  parent: parent || []
})

export const componentFactory = (
  type: ComponentTypes
) => (props?: Props,
      children?: Children,
      parent?: Children) => componentByType(type, props, children, parent)

const getClassWithDefault = (defaultClass: string, props: Props): Props => ({
  ...props,
  class: `${defaultClass} ${props?.class || ''}`
})

const getConcatStringBySeparator = (
  startString: string,
  seperator = '',
  endString?: string | number
): string => `${startString}${seperator}${endString || ''}`

const mappedForColClass = (col?: string | number) => {
  const seperator = col ? '-' : ''
  return getConcatStringBySeparator('col', seperator, col)
}

export const componentByTypeCurry = curry(componentByType) as (
  type: ComponentTypes
) => ComponentFactory;

export const getDivFactory = componentByTypeCurry('div') as ComponentFactory;

export const Div = componentFactory('div')

export const Row = (props = {} as Props, children: Children, parent?: Parent) => Div(
  { ...getClassWithDefault('row', props || {}) },
  children,
  parent
)

export const Col = (props = {} as Props, children: Children, col?: string | number, parent?: Parent) => getDivFactory(
  { ...getClassWithDefault(mappedForColClass(col), props) },
  children,
  parent
)

