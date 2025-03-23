<template>

    <!-- 服务特色 -->
    <div class="px-4 py-4 bg-gray-50">
        <h2 class="text-xl font-bold mb-4">特色服务</h2>
        <div class="grid grid-cols-4 gap-3">
            <div v-for="(feature, index) in features" :key="index" class="flex flex-col items-center">
                <div class="w-15 h-15 mb-2 rounded-xl overflow-hidden shadow-sm">
                    <v-img :src="feature.icon" class="w-full h-full object-cover "  :alt="feature.title" > </v-img>
                </div>
                <div class="text-sm text-gray-600 whitespace-nowrap">{{ feature.title }}</div>
            </div>
        </div>
    </div>

</template>


<script setup lang="ts">
const features = [
    {
        title: '专业医护',
        icon: '/images/services/1c01b644f000a303978903925f494c91.jpg'
    },
    {
        title: '营养膳食',
        icon: '/images/services/92caa567731b444e1648c4000cea17a7.jpg'
    },
    {
        title: '康复训练',
        icon: '/images/services/76eb573ede2d15e3126d1e766160938b.jpg'
    },
    {
        title: '文娱活动',
        icon: '/images/services/903e071244601e9618a7c885ed94a851.jpg'
    }
];
</script>
