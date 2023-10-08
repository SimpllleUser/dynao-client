import { getCol, getRow } from 'src/modules/UIParser/helpers/ui-factories'
import { InputComponentTypes } from 'src/modules/UIParser/types'


// const colorVariantSelect = ({
//                               modelName,
//                               label,
//                               placeholder = ''
//                             }: { modelName: string; label?: string; placeholder?: string }) => getRow({ class: 'w-full' }, [
//   getCol({}, [
//     {
//       type: InputComponentTypes.Select,
//       props: {
//         model: modelName,
//         label,
//         placeholder,
//         filled: true,
//         class: 'full-width',
//         options: [
//           'primary',
//           'secondary',
//           'accent',
//           'positive',
//           'negative',
//           'info',
//           'warning',
//           'dark'
//         ]
//       }
//     }
//   ])
// ])

const colorVariantSelect = ({
                              modelName,
                              label,
                              placeholder = ''
                            }: { modelName: string; label?: string; placeholder?: string }) => ({
  type: InputComponentTypes.Select,
  props: {
    model: modelName,
    label,
    placeholder,
    filled: true,
    class: 'full-width',
    options: [
      'primary',
      'secondary',
      'accent',
      'positive',
      'negative',
      'info',
      'warning',
      'dark'
    ]
  }
})

const inputLabel = {
  type: InputComponentTypes.Input,
  props: {
    model: 'label',
    label: 'Label',
    placeholder: 'Input label',
    filled: true,
    class: 'full-width'
  }
}

const inputColor = (label: string, model: string) => (
  {
    type: InputComponentTypes.ColorSelector,
    props: {
      model,
      label
    }
  }
)

const outline = {
  type: InputComponentTypes.Checkbox,
  props: {
    model: 'outline',
    label: 'Outline'
  }
}
const square = {
  type: InputComponentTypes.Checkbox,
  props: {
    model: 'square',
    label: 'Square'
  }
}
const round = {}
const disabled = {}

export const propsConfiguratorInput = [
  getRow({ class: 'w-full' }, [
    getCol({}, [
      {
        type: InputComponentTypes.Select,
        props: {
          model: 'type',
          label: 'Type',
          placeholder: 'Type input',
          filled: true,
          class: 'full-width',
          options: [
            'text',
            'password',
            'textarea',
            'email',
            'search',
            'tel',
            'file',
            'number',
            'url',
            'time',
            'date'
          ]
        }
      }
    ]),
    getCol({}, [inputLabel])
  ]),
  getRow({ class: 'w-full q-pt-sm' }, [
    {
      type: InputComponentTypes.Input,
      props: {
        model: 'placeholder',
        label: 'Placeholder',
        placeholder: 'Input placeholder',
        filled: true,
        class: 'full-width'
      }
    }
  ]),
  colorVariantSelect({ modelName: 'color', label: 'Color' }),
  colorVariantSelect({ modelName: 'bg-color', label: 'Background color' }),
  getRow({ class: 'w-full q-mt-sm' }, [
    getCol({}, [
      outline
    ]),
    getCol({}, [
      {
        type: InputComponentTypes.Checkbox,
        props: {
          model: 'dense',
          label: 'Dense'
        }
      }
    ]),
    getCol({}, [
      {
        type: InputComponentTypes.Checkbox,
        props: {
          model: 'filled',
          label: 'Filled'
        }
      }
    ]),
    getCol({}, [
      {
        type: InputComponentTypes.Checkbox,
        props: {
          model: 'disabled',
          label: 'Disabled'
        }
      }
    ]),
    getCol({}, [
      {
        type: InputComponentTypes.Checkbox,
        props: {
          model: 'clearable',
          label: 'Clearable'
        }
      }
    ])
  ]),
  getRow({ class: 'w-full q-mt-sm' }, [
    getCol({}, [
      {
        type: InputComponentTypes.Checkbox,
        props: {
          model: 'standout',
          label: 'Standout'
        }
      }
    ]),
    getCol({}, [
      square
    ]),
    getCol({}, [
      {
        type: InputComponentTypes.Checkbox,
        props: {
          model: 'rounded',
          label: 'Rounded'
        }
      }
    ]),
    getCol({}, [
      {
        type: InputComponentTypes.Checkbox,
        props: {
          model: 'borderless',
          label: 'Borderless'
        }
      }
    ])
  ]),
  getRow({ class: 'w-full q-mt-sm' }, [
    getCol({}, [inputColor('Color', 'color')]),
    getCol({}, [inputColor('Background color', 'bg-color')])
  ])
]

export const propsConfiguratorButton = [
  getRow({ class: 'w-full q-mb-sm' }, [getCol({}, [inputLabel])]),
  colorVariantSelect({ modelName: 'color', label: 'Color' }),
  colorVariantSelect({ modelName: 'text-color', label: 'Text color' }),
  getRow({ class: 'w-full q-mb-sm pb' }, [
    getCol({}, [
      {
        type: InputComponentTypes.IconSelector,
        props: {
          model: 'icon',
          label: 'Icon'
        }
      }
    ]),
    getCol({}, [
      {
        type: InputComponentTypes.IconSelector,
        props: {
          model: 'icon-right',
          label: 'Icon right'
        }
      }
    ])
  ]),
  getRow({ class: 'w-full q-mb-sm' }, [
    getCol({}, [
      {
        type: InputComponentTypes.Checkbox,
        props: {
          model: 'round',
          label: 'Round'
        }
      }
    ]),
    getCol({}, [
      {
        type: InputComponentTypes.Checkbox,
        props: {
          model: 'flat',
          label: 'Flat'
        }
      }
    ]),
    getCol({}, [
      outline
    ]),
    getCol({}, [
      {
        type: InputComponentTypes.Checkbox,
        props: {
          model: 'round',
          label: 'Round'
        }
      }
    ])
  ]),
  getRow({}, [
    getCol({}, [
      square
    ]),
    getCol({}, [
      {
        type: InputComponentTypes.Checkbox,
        props: {
          model: 'no-caps',
          label: 'No-caps'
        }
      }
    ]),
    getCol({}, [
      inputColor('Color', 'color')
    ]),
    getCol({}, [])
  ])
]
