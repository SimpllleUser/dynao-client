<script lang='ts' setup>

import { EditableListOptionItem } from 'boot/types'

interface Props {
  item: EditableListOptionItem
  isActive?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isActive: false
})

interface Emits {
  (e: 'set-edit-item', payload: number): void

  (e: 'remove', payload: number): void

  (e: 'unfocus'): void

  (e: 'change', payload: EditableListOptionItem): void
}

const emit = defineEmits<Emits>()

const handleInput = (label: string) => {
  emit('change', { ...props.item, label })
}

const actionBtnProps = {
  class: 'gt-xs',
  size: '12px',
  flat: true,
  dense: true,
  round: true
}

</script>

<template>
  <q-item class="item-option items-center" bordered>
    <q-item-section>
      <div class='row'>
        <q-input
          :model-value='item.label'
          :filled='isActive'
          dense
          borderless
          :disable='!isActive'
          input-class='w-full'
          @update:model-value='handleInput'
          @focusout="() => emit('unfocus')"
        />
      </div>
    </q-item-section>
    <q-item-section top side>
      <div class='item-actions cursor-pointer'>
        <q-btn
          v-bind='actionBtnProps'
          icon='delete'
          @click="emit('remove', item.id)"
        />
        <q-btn
          v-bind='actionBtnProps'
          icon='edit'
          @click="emit('set-edit-item', item.id)"
        />
      </div>
    </q-item-section>
  </q-item>
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
