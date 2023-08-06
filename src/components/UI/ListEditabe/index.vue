<script lang='ts' setup>
import { computed, Ref, ref } from 'vue'
import _ from 'lodash'
import { EditableListOptionItem, Nullable } from 'boot/types'
import { useVModel } from '@vueuse/core'
import ListItem from 'components/UI/ListEditabe/ListItem.vue'


interface Props {
  modelValue: Array<EditableListOptionItem>
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: []
})

interface Emits {
  (e: 'update:modelValue', payload: Array<EditableListOptionItem>): void
}

const emit = defineEmits<Emits>()

const options = useVModel(props, 'modelValue', emit)


const optionValue = ref('')

const editableItemId: Ref<Nullable<number>> = ref(null)

const setEditableItemId = (id: Nullable<number>) => {
  editableItemId.value = id
}

const addOption = () => {
  options.value = [
    ...options.value,
    {
      id: Date.now(),
      label: optionValue.value
    }
  ]
  optionValue.value = ''
}

const removeItem = (id: number) => {
  const currentOptionIndex = options.value.findIndex((option) => option.id === id)
  const optionsClone = [...options.value]
  optionsClone.splice(currentOptionIndex, 1)
  options.value = optionsClone
}

const isActiveEdit = (id: number) => id === editableItemId.value

const setChangeItem = (item: EditableListOptionItem) => {
  const itemIndex = _.findIndex(options.value, { id: item.id })
  options.value = Object.assign(
    [],
    {
      ...options.value,
      [itemIndex]: item
    })
}

const isDisableAdd = computed(() => !optionValue.value?.trim().length)

</script>

<template>
  <div class='editable-list'>
    <div class='row q-pb-sm'>
      <q-input
        v-model='optionValue'
        filled
        label='Option'
        style='width: 85%'
        dense
      />
      <q-btn icon='add' outline color='primary' @click='addOption' :disable='isDisableAdd' />
    </div>
    <q-list bordered>
      <list-item
        v-for='option in options'
        :key='option.id'
        :item='option'
        :is-active='isActiveEdit(option.id)'
        @change='setChangeItem'
        @remove='removeItem'
        @set-edit-item='setEditableItemId'
        @unfocus='setEditableItemId(null)'
      />
    </q-list>
  </div>
</template>
=
