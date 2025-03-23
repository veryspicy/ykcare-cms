<template>
    <!-- 服务搜索 -->
        <v-text-field  @input="$emit('update:modelValue', $event.target.value)" label="搜索服务项目"  prepend-inner-icon="mdi-magnify"
            hide-details  variant="underlined" color="green"
        >

        </v-text-field>
            
</template>


<script setup lang="ts">
    // const props = defineProps(['modelValue'])
    const emit = defineEmits(['update:modelValue'])

</script>