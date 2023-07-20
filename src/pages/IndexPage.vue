<script setup lang="ts">
import 'vue-grid-layout3/dist/style.css'

import { ref } from "vue";

const layout = ref([
  { x: 0, y: 0, w: 2, h: 2, i: 0, moved: true },
  { x: 2, y: 0, w: 2, h: 4, i: 1, moved: true },
  { x: 4, y: 0, w: 2, h: 5, i: 2, moved: true },
  { x: 6, y: 0, w: 2, h: 3, i: 3, moved: true },
  { x: 8, y: 0, w: 2, h: 3, i: 4, moved: true },
  { x: 8, y: 0, w: 2, h: 3, i: 5, moved: true },
  { x: 0, y: 5, w: 2, h: 5, i: 6, moved: true },
  { x: 2, y: 5, w: 2, h: 5, i: 7, moved: true },
  { x: 4, y: 5, w: 2, h: 5, i: 8, moved: true },
  { x: 6, y: 3, w: 2, h: 4, i: 9, moved: true }
])

const resize = (value) => { console.log(value) }
const move = (value) => { console.log(value) }
const moved = (value) => { console.log(value) }

</script>
<template>
  <q-page class="row items-center justify-evenly">
    <grid-layout
      v-model:layout="layout"
      :col-num="12"
      :row-height="30"
      class="grid-generator"
    >
      <template #default="{ gridItemProps }">
        <!-- | gridItemProps props from GridLayout | -->
        <!--breakpointCols: props.cols-->
        <!--colNum: props.colNum-->
        <!--containerWidth: width.value-->
        <!--isDraggable: props.isDraggable-->
        <!--isResizable: props.isResizable-->
        <!--lastBreakpoint: lastBreakpoint.value-->
        <!--margin: props.margin-->
        <!--maxRows: props.maxRows-->
        <!--responsive: props.responsive-->
        <!--rowHeight: props.rowHeight-->
        <!--useCssTransforms: props.useCssTransforms-->
        <!--width: width.value-->
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
          {{ item.i }}
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
