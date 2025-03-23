<template>

    <!-- 环境展示 -->
    <div class="mt-2 px-4 py-6 bg-white">
        <h2 class="text-xl font-bold mb-4">环境展示</h2>
        <div class="grid grid-cols-2 gap-3">
            <div v-for="(env, index) in environments" :key="index"
                class="rounded-lg overflow-hidden shadow-sm">
                <!-- 图片容器 -->
                <div class="relative h-36">
                    <img 
                        :src="env.image" 
                        class="w-full h-full object-cover"
                        :alt="env.title"
                    />
                </div>
                
                <!-- 文字描述（改为相对定位） -->
                <div class="pl-3 mt-2 text">
                    {{ env.title }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const environments = [
    {
        title: '温馨居室',
        image: '/images/enviroments/2737871062cbbdfd779a8366620cbe29.jpg'
    },
    {
        title: '活动中心',
        image: '/images/enviroments/bc16bd78b057db5c1ae1a36bda974f27.jpg'
    },
    {
        title: '康复中心',
        image: '/images/enviroments/8a05dc127a841bbb095b075156c937cd.jpg'
    },
    {
        title: '休闲花园',
        image: '/images/enviroments/fce0b85c718047b1ac9360e461612afc.jpg'
    }
];
</script>