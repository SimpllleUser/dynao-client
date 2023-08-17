import { getCol, getRow } from 'src/modules/UIParser/helpers/ui-factories'
import { InputComponentTypes } from 'src/modules/UIParser/types'

export const commonPropsConfigurator = [
    getRow({ class: 'w-full' }, [
        {
            type: InputComponentTypes.Input,
            props: {
                model: 'label',
                label: 'Label',
                placeholder: 'Input label',
                filled: true,
                class: 'full-width',
            },
        },
    ]),
    getRow({ class: 'w-full q-pt-sm' }, [
        {
            type: InputComponentTypes.Input,
            props: {
                model: 'placeholder',
                label: 'Placeholder',
                placeholder: 'Input placeholder',
                filled: true,
                class: 'full-width',
            },
        },
    ]),
    getRow({ class: 'w-full q-mt-sm' }, [
        getCol({}, [
            {
                type: InputComponentTypes.Checkbox,
                props: {
                    model: 'outlined',
                    label: 'Outlined',
                },
            },
        ]),
        getCol({}, [
            {
                type: InputComponentTypes.Checkbox,
                props: {
                    model: 'dense',
                    label: 'Dense',
                },
            },
        ]),
        getCol({}, [
            {
                type: InputComponentTypes.Checkbox,
                props: {
                    model: 'disabled',
                    label: 'Disabled',
                },
            },
        ]),
        getCol({}, [
            {
                type: InputComponentTypes.Checkbox,
                props: {
                    model: 'clearable',
                    label: 'Clearable',
                },
            },
        ]),
    ]),
]
