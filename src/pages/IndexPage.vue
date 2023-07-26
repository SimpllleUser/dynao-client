<script setup lang="ts">
import 'vue-grid-layout3/dist/style.css'

import { ref } from "vue";

interface GridItem {
  x: number, y: number, w: number, h: number, i: number
}

type LayoutItemEvent = (i: number, x: number, y: number) => void

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

const existItem = (item: GridItem): boolean => Boolean(Object.keys(item)?.length)

const starItemData = ref(null);

const move: LayoutItemEvent = (i, x, y) => {
  if (y > 25) return
  console.log(i, x, y);
}
const moved: LayoutItemEvent = (i, x, y) => {
  const currentItem: GridItem = layoutInner.value[i];

}
const getHeightByGrid = (h: number) => 30 + (h - 1) * 40
const getWidthByGrid = (w: number) => 77 + (w - 1) * 87

</script>
<template>
  <div>
    <grid-layout
      v-model:layout="layout"
      :col-num="12"
      :row-height="30"
      class="grid-generator"
      horizontalShift
      :verticalCompact="false"
      :preventCollision="false"
      :margin="[2, 2]"
      style="width: 1000px; margin: 0 auto; height: 500px; max-height: 500px"
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
          :class="{ 'bg-info': item.i === 5 }"
        >
          <div v-if="item.i === 5" style="position: relative">
            <q-badge color="blue" style="position: absolute; z-index: 999">
              {{ item}}
            </q-badge>
            <grid-layout
              v-model:layout="layoutInner"
              :col-num="24"
              :row-height="15"
              horizontalShift
              :verticalCompact="false"
              :preventCollision="true"
              :margin="[0, 0]"
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
                  class="bg-primary"
                >
                  <div>
                    {{ getHeightByGrid(item.h) }}
                    <q-badge color="warning">{{ itemInner }}</q-badge>
                  </div>
                </grid-item>
              </template>
            </grid-layout>
          </div>
        </grid-item>
      </template>
    </grid-layout>
  </div>
</template>

<style lang="scss" scoped>

</style>
