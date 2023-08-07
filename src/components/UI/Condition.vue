<script lang='ts' setup>

interface Props {
  isTrue: boolean
}

const props = defineProps<Props>()

</script>

<template>
  <slot v-if='isTrue'></slot>
  <slot v-else name='else'></slot>
</template>

<style scoped>

</style>
