<template>

    <!-- 护理方案 -->
    <div class="px-4 py-6">
        <h2 class="text-xl font-bold mb-4">护理方案</h2>
        <div class="flex flex-col gap-y-5 "> <!-- 改用 flex 布局 + 垂直间隙 -->
            <div 
                v-for="(plan, index) in carePlans" 
                :key="index" 
            class="bg-white rounded-lg  shadow-sm !p-3"
            >
                <!-- 保持原有内容不变 -->
                <div class="flex justify-between items-center mb-2">
                    <h3 class="font-bold">{{ plan.title }}</h3>
                    <span class="text-emerald-600">{{ plan.price }}</span>
                </div>
                <p class="text-sm text-gray-600">{{ plan.description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const carePlans = [
    {
        title: "基础护理",
        price: "详询工作人员",
        description: "包含日常生活照料、健康监测、营养膳食等基础服务",
    },
    {
        title: "专业护理",
        price: "详询工作人员",
        description: "额外配备专业护理人员，提供个性化康复训练计划",
    },
    {
        title: "特需护理",
        price: "详询工作人员",
        description: "一对一专属护理，24小时贴心照护，医疗巡诊",
    },
];
</script>