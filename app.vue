<template>

  <v-app>
    <NuxtLayout>
      <!-- 页面过渡效果 -->
      <Transition name="page" mode="out-in">
        
      <!-- 缓存 -->
      <NuxtPage :keepalive="{ max:10 }" />
      </Transition> 
    </NuxtLayout>
  </v-app>
</template>
<script setup lang="ts">
  // SEO
  useSeoMeta({
    title: '颐康老年养护中心',
    description: '颐康老年养护中心创立于2014年，是一家专注于为长者提供高品质养老服务的专业机构。我们始终秉持"以人为本，专业照护"的服务理念。',
    keywords: '养老，医疗，护理，颐康，老年护理，护理中心，老年护理中心，颐康老年养护中心',
  })
</script>
