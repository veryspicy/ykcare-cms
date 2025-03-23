<template>
     <!-- 机构动态 -->
     <div class="bg-white rounded-xl p-6">
            <h2 class="text-xl font-bold mb-4">机构动态</h2>
            <div class="!space-y-4">
              <div
                v-for="(news, index) in newsList"
                :key="index"
                class="flex items-start space-x-3 pb-4 border-b border-gray-100 last:border-0"
              >
                <img
                  :src="news.image"
                  class="w-24 h-24 rounded-lg object-cover"
                  :alt="news.title"
                />
                <div class="flex-1 pl-4">
                  <h3 class="font-bold mb-2">{{ news.title }}</h3>
                  <p class="text-sm text-gray-600 line-clamp-2">
                    {{ news.summary }}
                  </p>
                  <div class="flex items-center mt-2 text-xs text-gray-500">
                    <span>{{ news.date }}</span>
                    <span class="mx-2">|</span>
                    <span>{{ news.views }} 阅读</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
</template>

<script setup lang="ts">
    const newsList = [
        {
            title: "我院获评2024年度最佳养老机构",
            summary:
            "在近日举行的2024年度养老服务评选中，我院凭借专业的服务水平和良好的口碑获得最佳养老机构称号。",
            date: "2025-03-01",
            views: "2,358",
            image:
            "/images/activities/ee6f343ea85dada6f9aaf557d47055d1.jpg",
        },
        {
            title: "新增智能康复设备投入使用",
            summary:
            "引进最新智能康复设备，提供更专业的康复训练服务，助力长者恢复健康。",
            date: "2025-02-28",
            views: "1,892",
            image:
            "/images/activities/94cc50ebcbc0c9eb7977fc6df4446675.jpg",
        },
        {
            title: "开展工作人员专业技能培训",
            summary:
            "为提升服务质量，特邀行业专家开展为期一周的专业技能培训，内容包括急救技能、照护技巧等。",
            date: "2025-02-25",
            views: "1,567",
            image:
            "/images/activities/c2e95036ba6097e96355f0b8d046ebc3.jpg",
        },
    ];
</script>