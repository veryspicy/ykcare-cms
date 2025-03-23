<template>
            <!-- 服务列表 -->
            <div class="!space-y-4">
            <div v-for="(service, index) in filteredServices" :key="index"
                class="bg-white rounded-xl p-6 transform transition-all duration-300 hover:shadow-md">
                <div class="flex items-start">
                    <img :src="service.image" class="w-24 h-24 rounded-xl object-cover mr-4" :alt="service.title" />
                    <div class="flex-1">
                        <h3 class="font-bold text-lg mb-2">{{ service.title }}</h3>
                        <p class="text-sm text-gray-600 mb-3">
                            {{ service.description }}
                        </p>
                        <!-- <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <span class="text-emerald-600 font-bold">¥{{ service.price }}</span>
                                <span class="text-xs text-gray-500 ml-2">起</span>
                            </div>
                            <button @click="handleServiceDetail(service)"
                                class="px-4 py-2 bg-emerald-600 text-white text-sm rounded-lg !rounded-button">
                                了解详情
                            </button>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
</template>

<script setup lang="ts">
    const props = defineProps({

        filteredServices: {
            type: Array as () => any[],
            required: true,
        },
    })
</script>

