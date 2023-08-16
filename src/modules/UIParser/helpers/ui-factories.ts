import _ from 'lodash'

import { Children, ComponentTypes, Parent, Props } from '../types'

export const componentByType = (
  type: ComponentTypes,
  children?: Children,
  parent?: Children,
  props?: Props
) => ({
  type,
  children: children || [],
  parent: parent || [],
  props: props || {}
})

// const getClassWithDefault = (defaultClass: string, props: Props): Props => ({
//   class: `${defaultClass} ${ props?.class || '' }`,
//   ...props
// })

const getClassWithDefault = (defaultClass: string, props: Props): Props => ({
  ...props,
  class: `${defaultClass} ${ props?.class || '' }`,
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

export const componentByTypeCurry = _.curry(componentByType)

export const getDiv = componentByTypeCurry('div')

// @ts-ignore
export const getRow = (children: Children, props?: Props, parent?: Parent) => getDiv(
  children,
  parent,
  { ...getClassWithDefault('row', props || {}) },
);

// @ts-ignore
export const getCol = (children: Children, props? = {}, col?: string | number = '', parent?: Parent) => getDiv(
  children,
  parent,
  { ...getClassWithDefault(mappedForColClass(col), props) },
);

