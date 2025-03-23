<template>

      <!-- 底部导航组件：绑定当前激活索引和背景色 -->
      <v-bottom-navigation
        :model-value="activeIndex"  
        mode="shift"
        :bg-color="navColor"
        @update:model-value="navigate"
        
        class="flex justify-center items-center"
      >
        <!-- 循环渲染导航项：使用配置化数据 -->
        <v-btn 
          v-for="(item, index) in navItems"  
          :key="index"
          :value="index"                     
          class="transition-all hover:opacity-80" 
        >

          <v-icon :color="index === activeIndex ? 'green-400' : 'grey-lighten-1'">
            {{ item.icon }}  
          </v-icon>
          

          <span :class="[
            'tw-text-xs',
            index === activeIndex
              ? 'text-green-400'      
              : 'text-white'  
          ]">
            {{ item.label }}  
          </span>
        </v-btn>
      </v-bottom-navigation>

  </template>
  
  <script setup lang="ts">

  
  // 1. 路由相关（Nuxt自动注入）
  const route = useRoute()  // 获取当前路由信息
  const router = useRouter() // 获取路由实例
  
  // 配置项类型声明
interface NavItem {
  path: string
  icon: string
  label: string
  color: string
}
  // 2. 导航配置数据（集中管理）
  const navItems: NavItem[] = [
    { path: '/', icon: 'mdi-home', label: '首页', color: 'blue-grey' },
    { path: '/services', icon: 'mdi-heart', label: '服务', color: 'teal' },
    { path: '/activities', icon: 'mdi-calendar', label: '活动', color: 'brown' },
    { path: '/profile', icon: 'mdi-account', label: '关于', color: 'indigo' }
  ] 
  
  // 3. 计算当前导航栏背景色
  const navColor = computed<string>(() => {
    // 查找当前路由匹配的配置项
    //const item = navItems.find(item => item.path === route.path)
    //return item?.color || 'blue-grey' // 返回对应颜色或默认
    return 'blue-grey'
  })
  
  // 4. 计算当前激活项的索引
  const activeIndex = computed<number>(() => {
    const index = navItems.findIndex(item => item.path === route.path) 
    return index > -1 ? index : 0;
  })
  
  // 5. 导航跳转方法
  const navigate = (index: number) => {
    // 确保router实例只在客户端使用
    // 使用 process.client 已弃用，替换为 process.env.SSR 取反
    if (!process.env.SSR) {
      router.push(navItems[index].path)
    }
  }
  </script>