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
          @json-change="handleChange"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineComponent, reactive, ref, toRefs} from "vue"
import { Vue3JsonEditor } from "vue3-json-editor"

const handleChange = (value: JSON) => {
  entity.value = value
}

const entity = ref({})
</script>
