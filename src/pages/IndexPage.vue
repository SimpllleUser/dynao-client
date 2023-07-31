<template>
  <div>
    <div class="row">
      <div class="col-8">
        <div><b>Form</b></div>
        <hr>
      </div>
      <div class="col-4">
        <div><b>Source entity</b></div>
        <hr>
        <Vue3JsonEditor
          v-model="state"
          :show-btns="true"
          :expandedOnStart="true"
          @json-change="onJsonChange"
        />
        <hr>
        {{ entity }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineComponent, reactive, ref, toRefs} from "vue"
import { Vue3JsonEditor } from "vue3-json-editor"

const onJsonChange = (value: JSON) => {
  console.log('value:', value)
  entity.value = value
}

const entity = ref({})
</script>
