<template>
    <!-- 服务分类 -->
    <div class="grid grid-cols-4 gap-3 mb-6 bg-gray-50">
        <div v-for="(category, index) in serviceCategories" :key="index" @click="handleSelected(category.id)"
            class="flex flex-col items-center cursor-pointer " >
            <div class="w-15 h-15 rounded-full mb-2 flex items-center justify-center"
                :class="modelValue === category.id ? 'bg-emerald-100' : 'bg-gray-100'">
                <img :src="category.icon" class="w-8 h-8" :alt="category.name" />
            </div>
            <span class="text-sm" :class="modelValue === category.id ? 'text-emerald-600' : 'text-gray-600'">
                {{ category.name }}
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">

const serviceCategories = [
    {
        id: 1,
        name: "全部",
        icon: "/images/services/329b21211341286a7c6662cc385cb9d9.jpg",
    },
    {
        id: 2,
        name: "医疗",
        icon: "/images/services/70fba4660e0c294ec3b25c04a0575fcb.jpg",
    },
    {
        id: 3,
        name: "康复",
        icon: "/images/services/40ce1d0b7d8e82cb71b7b0f6fc068251.jpg",
    },
    {
        id: 4,
        name: "护理",
        icon: "/images/services/8578d407a0c95f4029f07a83d08fac39.jpg",
    },
];
const props = defineProps({
        modelValue: {
            type: Number,
            default: 1,
        }
    });
const emit = defineEmits(["update:modelValue"]);
const handleSelected = (id: number) => {
    emit("update:modelValue", id);
};

</script>