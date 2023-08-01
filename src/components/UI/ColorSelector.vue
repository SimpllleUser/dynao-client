<script lang="ts" setup>
import colorClasses from '../../boot/color-classes'
import { Ref, ref } from "vue";

const model: Ref<string> = ref(null)
const setColor = (classColor: string) => { model.value = classColor  }
</script>

<template>
    <div>
      <q-select filled v-model="model" :options="colorClasses" label="Color" autocomplete >
        <template #option="{ opt }">
          <div class="cursor-pointer" :class="`bg-${opt} text-${opt}`" @click="setColor(opt)">
            -
          </div>
        </template>
      </q-select>
      {{ model }}</div>
</template>

<style scoped></style>
