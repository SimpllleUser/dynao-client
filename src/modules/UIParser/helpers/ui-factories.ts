import { curry } from 'lodash'

import { Children, ComponentTypes, Parent, Props } from '../types'

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

const mappedForColClass = (col: string | number) => {
  const seperator = col ? '-' : ''
  return getConcatStringBySeparator('col', seperator, col)
}

export const componentByTypeCurry = curry(componentByType)

export const getDivFactory = componentByTypeCurry('div')

export const getDiv = componentFactory('div')

// @ts-ignore
export const getRow = (props = {} as Props, children: Children, parent?: Parent) => getDivFactory(
  { ...getClassWithDefault('row', props || {}) },
  children,
  parent
)

// @ts-ignore
export const getCol = (props = {} as Props, children: Children, col?: string | number = '', parent?: Parent) => getDivFactory(
  { ...getClassWithDefault(mappedForColClass(col), props) },
  children,
  parent
)

