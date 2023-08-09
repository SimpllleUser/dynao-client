<template>
  {{ propsState }}
  <q-input
    v-if="isPropSupported('label')"
    v-model="propsState.label"
    placeholder="Введите метку"
    label="Label"
  />

  <!-- Текстовое поле для 'placeholder' -->
  <q-input
    v-if="isPropSupported('placeholder')"
    v-model="propsState.placeholder"
    placeholder="Введите плейсхолдер"
    label="Placeholder"
  />

  <!-- Переключатель для 'disabled' -->
  <q-toggle
    v-if="isPropSupported('disabled')"
    v-model="propsState.disabled"
    label="Disabled"
  />

  <!-- Переключатель для 'dense' -->
  <q-toggle
    v-if="isPropSupported('dense')"
    v-model="propsState.dense"
    label="Dense"
  />

  <!-- Переключатель для 'readonly' -->
  <q-toggle
    v-if="isPropSupported('readonly')"
    v-model="propsState.readonly"
    label="Readonly"
  />

  <!-- Чекбокс для 'required' -->
  <q-checkbox
    v-if="isPropSupported('required')"
    v-model="propsState.required"
    label="Required"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useVModel } from '@vueuse/core'

export type InputType = 'q-input' | 'q-button' | 'q-select' | 'q-checkbox' | 'q-radio' | 'q-date' | 'q-time';
export type InputProps = 'label' | 'placeholder' | 'disabled' | 'dense' | 'readonly' | 'required';
interface PropsState {
  label?: string,
  placeholder?: string,
  disabled?: false,
  dense?: false,
  readonly?: false,
  required?: false
}

interface Props {
  inputName: InputType
  modelValue: PropsState
}

const props =  withDefaults(defineProps<Props>(), {
  modelValue: () => ({
    label: '',
    placeholder: '',
    disabled: false,
    dense: false,
    readonly: false,
    required: false
  })
})

interface Emits {
  (e: 'update:modelValue', payload: PropsState): void
}

const emit = defineEmits<Emits>()

const propsState = useVModel(props, 'modelValue', emit)
const getSupportedProps = (inputType: InputType): InputProps[] => {
  const inputProps = {
    "q-input": ["label", "placeholder", "disabled", "dense", "readonly", "required"],
    "q-button": ["label", "disabled", "dense"],
    "q-select": ["label", "placeholder", "disabled", "dense", "readonly", "required"],
    "q-checkbox": ["label", "disabled", "readonly"],
    "q-radio": ["label", "disabled", "readonly"],
    "q-date": ["label", "placeholder", "disabled", "dense", "readonly", "required"],
    "q-time": ["label", "placeholder", "disabled", "dense", "readonly", "required"]
  };

  return inputProps[inputType]; /// InputType
}
const isPropSupported = (propName: InputProps) =>  getSupportedProps(props.inputName as InputType).includes(propName);

// const propsState = ref({
//   label: '',
//   placeholder: '',
//   disabled: false,
//   dense: false,
//   readonly: false,
//   required: false
// })
</script>

<style scoped></style>
