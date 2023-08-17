<script setup lang="ts">
import { ref } from 'vue'
import { commonPropsConfigurator } from 'src/modules/ConfiguratorComponents/config'
import UiParserChildren from 'src/modules/UIParser/components/UiParserChildren.vue'

const config = ref({
    label: '111',
    clearable: true,
    disabled: true,
    dense: true,
    outlined: true,
    placeholder: '22',
})
</script>

<template>
    <UiParserChildren
        v-for="(component, index) in commonPropsConfigurator"
        :key="`${component.type}-${index}`"
        v-model="config"
        :component="component"
    />
</template>

<style scoped></style>
