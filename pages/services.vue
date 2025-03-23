<template>
    <!-- 服务页面 -->
    <v-container class="pt-14 pb-16">
        <div class="!space-y-10 !p-6">

            <ServicesSearchService v-model="searchQuery" />
            <ServicesServiceCategory v-model="selectedCategory" />

            <ServicesServiceList :filteredServices="filteredServices"  />
        </div>


    </v-container>

</template>


<script setup lang="ts">
   const searchQuery = ref('')
   const selectedCategory = ref(1)

   



const allServices = [
    {
        id: 1,
        categoryId: 2,
        title: "专业医疗评估",
        description: "由专业医师团队进行全面体检和健康评估，制定个性化医疗方案",
        price: 1200,
        image:
            "/images/services/41c986ea8e63305d4c63e2b270fa3fc4.jpg",
    },
    {
        id: 2,
        categoryId: 3,
        title: "物理康复治疗",
        description: "专业康复师一对一指导，配合先进设备进行康复训练",
        price: 800,
        image:
            "/images/services/0fc58e25c7b5299d708fdd0277e304be.jpg",
    },
    {
        id: 3,
        categoryId: 4,
        title: "专业护理照料",
        description: "24小时专业护理人员照料，保证生活起居安全舒适",
        price: 600,
        image:
            "/images/services/6a4de7a4d86e225d10d7ff48f3ce324c.jpg",
    },
    {
        id: 4,
        categoryId: 2,
        title: "中医理疗服务",
        description: "中医专家提供针灸、推拿等传统医疗保健服务",
        price: 1000,
        image:
            "/images/services/5a2dffd3861f7d57f40220bf3c211dd0.jpg",
    },
    {
        id: 5,
        categoryId: 3,
        title: "认知功能训练",
        description: "专业心理治疗师指导，帮助提升记忆力和认知能力",
        price: 900,
        image:
            "/images/services/8a90292c27283f5cd14aa781bebdda5d.jpg",
    },
    {
        id: 6,
        categoryId: 4,
        title: "营养膳食服务",
        description: "营养师定制三餐，确保营养均衡，适合长者食用",
        price: 500,
        image:
            "/images/services/181adc1cca0cd2aee7e7fd9bf79e23ac.jpg",
    },
];
const filteredServices = computed(() => {
    
    let services = allServices;
    if (selectedCategory.value !== 1) {
        services = services.filter(
            (service) => service.categoryId === selectedCategory.value,
        );
    }
    if (searchQuery.value) {
        const query = searchQuery.value.toLowerCase();
        services = services.filter(
            (service) =>
                service.title.toLowerCase().includes(query) ||
                service.description.toLowerCase().includes(query),
        );
    }
    return services;
});

</script>