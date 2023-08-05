<script lang='ts' setup>
import { Ref, ref } from 'vue'
import { EditableListOptionItem, Nullable } from 'boot/types'
import { BackgroundColors, Colors, Option } from 'boot/configurator-properties'
import { useVModel } from '@vueuse/core'

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

// const options: Ref<Array<EditableListOptionItem>> = ref([
//   {
//     id: 1,
//     label: 'Option - 1'
//   }
// ])

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

const removeOption = (id: number) => {
  const currentOptionIndex = options.value.findIndex((option) => option.id === id)
  const optionsClone = [ ...options.value ]
  optionsClone.splice(currentOptionIndex, 1)
  options.value = optionsClone
}

const isActiveEdit = (id: number) => id === editableItemId.value

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
      <q-btn icon='add' outline color='primary' @click='addOption' />
    </div>
    <q-list bordered separator>
      <q-item
        v-for='(option, index) in options'
        :key='index'
        class='item-option items-center'
      >
        <q-item-section>
          <div class='row'>
            <q-input
              v-model='option.label'
              :filled='isActiveEdit(option.id)'
              dense
              borderless
              :disable='!isActiveEdit(option.id)'
              input-class='w-full'
              @focusout='setEditableItemId(null)'
            />
          </div>
        </q-item-section>
        <q-item-section top side>
          <div class='item-actions cursor-pointer'>
            <q-btn
              class='gt-xs'
              size='12px'
              flat
              dense
              round
              icon='delete'
              @click='removeOption(option.id)'
            />
            <q-btn
              class='gt-xs'
              size='12px'
              flat
              dense
              round
              icon='edit'
              @click='setEditableItemId(option.id)'
            />
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<style lang='scss' scoped>
.item-option {
  :deep(label) {
    width: 100%;
  }
  .item-actions {
    transition: opacity .3s;
    opacity: 0;
  }

  &:hover {
    .item-actions {
      opacity: 1;
    }
  }
}
</style>
