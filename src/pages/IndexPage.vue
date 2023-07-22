<script setup lang="ts">
import 'vue-grid-layout3/dist/style.css'

import { ref } from "vue";

const layout = ref([
  { x: 0, y: 0, w: 2, h: 2, i: 0 },
  { x: 2, y: 0, w: 2, h: 4, i: 1 },
  { x: 4, y: 0, w: 2, h: 5, i: 2 },
  { x: 6, y: 0, w: 2, h: 3, i: 3 },
  { x: 8, y: 0, w: 2, h: 3, i: 4 },
  { x: 8, y: 0, w: 2, h: 3, i: 5 },
  { x: 0, y: 5, w: 2, h: 5, i: 6 },
  { x: 2, y: 5, w: 2, h: 5, i: 7 },
  { x: 4, y: 5, w: 2, h: 5, i: 8 },
  { x: 6, y: 3, w: 2, h: 4, i: 9 }
])

const layoutInner = ref([
  { x: 0, y: 0, w: 2, h: 2, i: 0 },
  { x: 2, y: 0, w: 2, h: 4, i: 1 },
])

const resize = (...value) => { console.log(value) }
const move = (...value) => { console.log(value) }
const moved = (...value) => { console.log(value) }

const getHeightByGrid = (h: number) => 30 + (h - 1) * 40
const getWidthByGrid = (w: number) => 77 + (w - 1) * 87

</script>
<template>
  <q-page class="row items-center justify-evenly">
    <grid-layout
      v-model:layout="layout"
      :col-num="12"
      :row-height="30"
      class="grid-generator"
      horizontalShift
      :verticalCompact="false"
      :preventCollision="false"
      :margin="[2, 2]"
    >
      <template #default="{ gridItemProps }">
        <grid-item
          v-for="item in layout"
          :key="item.i"
          v-bind="gridItemProps"
          :x="item.x"
          :y="item.y"
          :w="item.w"
          :h="item.h"
          :i="item.i"
          @resize="resize"
          @move="move"
          @moved="moved"
        >
          <div v-if="item.i === 5">
            <grid-layout
              v-model:layout="layoutInner"
              :col-num="24"
              :row-height="15"
              horizontalShift
              :verticalCompact="false"
              :preventCollision="false"
              :margin="[0, 0]"
              :style="`width: ${getWidthByGrid(item.w)}px`"
            >
              <template #default="{ gridItemProps }">
                <grid-item
                  v-for="itemInner in layoutInner"
                  :key="item.i"
                  v-bind="gridItemProps"
                  :x="itemInner.x"
                  :y="itemInner.y"
                  :w="itemInner.w"
                  :h="itemInner.h"
                  :i="itemInner.i"
                  :maxH="(item.h * 2) + 1"
                  :maxW="item.w"
                  class="bg-primary"
                >
                  <div>
                    {{ item }}
                    <hr>
                    {{ itemInner}}
                  </div>
                </grid-item>
              </template>
            </grid-layout>
          </div>
        </grid-item>
      </template>
    </grid-layout>
  </q-page>
</template>

<style lang="scss" scoped>
  .grid-generator {
    :deep(.vue-grid-layout) {
      width: calc(100vw - 24px);
    }
  }
</style>
