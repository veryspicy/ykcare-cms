<template>

    <!-- 使用 v-carousel 组件实现轮播图 -->
    <v-carousel cycle :show-arrows="false" height="300" > <!-- 每 5 秒切换一次 -->
      <v-carousel-item
        v-for=" (item, i) in imageUrls.banner"
            :key="i"
            :src="item.src"     
            cover    
        >
      </v-carousel-item>
    </v-carousel>

</template>

<script setup lang="ts">




// 图片URL集合
const imageUrls = ref({
  banner: [
    {
      src: '/images/banner/22d3a90c4eeff8785c1d1511613cba3d.jpg'
    },
    {
      src: '/images/banner/7c0557485df25568ca1f9db50c6be67c.jpg'
    },
    {
      src: '/images/banner/ce277390a4bffc877cdad323382e3e31.jpg'
    },
    {
      src: '/images/banner/f1d5bd76f8a9de00e12acca4a03e604e.jpg'
    }
    
  ],
  features: [
    '/images/features/medical.png',
    '/images/features/care.png',
    '/images/features/meal.png',
    '/images/features/activity.png'
  ],
  carePlans: [
    '/images/plans/basic.png',
    '/images/plans/premium.png'
  ],
  environments: [
    '/images/environment/1.jpg',
    '/images/environment/2.jpg'
  ],
  certifications: [
    '/images/certifications/iso.png',
    '/images/certifications/health.png',
    '/images/certifications/safety.png'
  ]
})
</script>
