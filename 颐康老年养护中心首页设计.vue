<!-- The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work. -->
<template>
<div class="min-h-screen bg-gray-50">
<!-- 顶部导航栏 -->
<nav class="fixed top-0 left-0 w-full bg-white shadow-sm z-50 h-14 flex items-center justify-between px-4">
<div class="text-xl font-bold text-emerald-600">颐康之家</div>
<el-icon class="text-xl text-gray-600"><Bell /></el-icon>
</nav>
<!-- 主要内容区域 -->
<div class="pt-14 pb-16">
<!-- 首页 -->
<div v-if="currentTab === 0">
<!-- 首屏展示 -->
<div class="relative h-64 overflow-hidden">
<img
src="https://public.readdy.ai/ai/img_res/22d3a90c4eeff8785c1d1511613cba3d.jpg"
class="w-full h-full object-cover"
alt="养老院环境"
/>
<div class="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 flex items-center justify-center">
<h1 class="text-white text-2xl font-bold text-center px-4">
颐养天年 · 乐享生活<br>
<span class="text-lg mt-2 block font-normal">专业医养结合 · 品质养老服务</span>
</h1>
</div>
</div>
<!-- 服务特色 -->
<div class="px-4 py-6 bg-white">
<h2 class="text-xl font-bold mb-4">特色服务</h2>
<div class="grid grid-cols-4 gap-3">
<div v-for="(feature, index) in features" :key="index"
class="flex flex-col items-center">
<div class="w-14 h-14 mb-2 rounded-xl overflow-hidden shadow-sm">
<img :src="feature.icon" class="w-full h-full object-cover" :alt="feature.title" />
</div>
<div class="text-xs text-gray-600 whitespace-nowrap">{{ feature.title }}</div>
</div>
</div>
</div>
<!-- 护理方案 -->
<div class="mt-2 px-4 py-6 bg-white">
<div class="flex justify-between items-center mb-4">
<h2 class="text-xl font-bold">护理方案</h2>
<span class="text-sm text-emerald-600">更多方案 ></span>
</div>
<div class="space-y-3">
<div v-for="(plan, index) in carePlans" :key="index"
class="bg-gray-50 rounded-xl p-4">
<div class="flex justify-between items-center mb-2">
<div class="flex items-center">
<img :src="plan.icon" class="w-10 h-10 rounded-lg mr-3" :alt="plan.title" />
<div>
<h3 class="font-bold">{{ plan.title }}</h3>
<p class="text-xs text-gray-500 mt-1">{{ plan.subtitle }}</p>
</div>
</div>
<el-icon class="text-gray-400"><ArrowRight /></el-icon>
</div>
</div>
</div>
</div>
<!-- 环境展示 -->
<div class="mt-2 px-4 py-6 bg-white">
<h2 class="text-xl font-bold mb-4">环境展示</h2>
<div class="grid grid-cols-2 gap-3">
<div v-for="(env, index) in environments" :key="index"
class="rounded-xl overflow-hidden shadow-sm relative">
<img :src="env.image" class="w-full h-36 object-cover" :alt="env.title" />
<div class="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent">
<div class="text-sm text-white">{{ env.title }}</div>
</div>
</div>
</div>
</div>
<!-- 资质认证 -->
<div class="mt-2 px-4 py-6 bg-white">
<h2 class="text-xl font-bold mb-4">资质认证</h2>
<div class="grid grid-cols-3 gap-3">
<div v-for="(cert, index) in certifications" :key="index"
class="flex flex-col items-center">
<img :src="cert.icon" class="w-12 h-12 mb-2" :alt="cert.title" />
<div class="text-xs text-gray-600 text-center">{{ cert.title }}</div>
</div>
</div>
</div>
</div>
<!-- 关于页面 -->
<div v-if="currentTab === 3" class="px-4 py-6 space-y-6">
<div class="bg-white rounded-xl p-6">
<h2 class="text-xl font-bold mb-4">关于我们</h2>
<img
src="https://public.readdy.ai/ai/img_res/af87fbe2aa2830fa96ab75e318b3ced1.jpg"
class="w-full h-48 object-cover rounded-xl mb-4"
alt="关于我们"
/>
<div class="space-y-4 text-gray-600 text-sm leading-relaxed">
<p>颐康之家创立于2015年，是一家专注于为长者提供高品质养老服务的专业机构。十年来，我们始终秉持"以人为本，专业照护"的服务理念。</p>
<p>我们的团队由资深医护人员、康复治疗师、营养师等专业人士组成，为长者提供全方位的照护服务。目前已累计服务超过5000位长者家庭。</p>
</div>
</div>
<div class="bg-white rounded-xl p-6">
<h2 class="text-xl font-bold mb-6">联系我们</h2>
<div id="mapContainer" class="w-full h-64 rounded-xl mb-6"></div>
<div class="space-y-6 mb-8">
<div class="flex items-center">
<el-icon class="text-emerald-600 text-xl mr-4"><Location /></el-icon>
<div>
<div class="font-bold">机构地址</div>
<div class="text-sm text-gray-600 mt-1">北京市朝阳区阳光100国际公寓B座</div>
</div>
</div>
<div class="flex items-center">
<el-icon class="text-emerald-600 text-xl mr-4"><Phone /></el-icon>
<div>
<div class="font-bold">咨询电话</div>
<div class="text-sm text-gray-600 mt-1">400-888-9999</div>
</div>
</div>
<div class="flex items-center">
<el-icon class="text-emerald-600 text-xl mr-4"><Message /></el-icon>
<div>
<div class="font-bold">电子邮箱</div>
<div class="text-sm text-gray-600 mt-1">service@yikang.com</div>
</div>
</div>
</div>
<form @submit.prevent="handleSubmit" class="space-y-4">
<h3 class="font-bold text-lg mb-4">预约参观</h3>
<div class="space-y-4">
<input v-model="form.name" type="text"
class="w-full h-12 px-4 rounded-xl bg-gray-50 border-none"
placeholder="您的姓名" />
<input v-model="form.phone" type="tel"
class="w-full h-12 px-4 rounded-xl bg-gray-50 border-none"
placeholder="联系电话" />
<textarea v-model="form.message"
class="w-full h-32 p-4 rounded-xl bg-gray-50 border-none resize-none"
placeholder="留言内容"></textarea>
</div>
<button type="submit"
class="w-full h-12 bg-emerald-600 text-white rounded-xl mt-6 !rounded-button">
提交预约
</button>
</form>
</div>
</div>
<!-- 活动页面 -->
<div v-if="currentTab === 2" class="px-4 py-6">
<div class="space-y-4">
<!-- 最新活动 -->
<div class="bg-white rounded-xl p-6">
<h2 class="text-xl font-bold mb-4">最新活动</h2>
<div class="space-y-4">
<div v-for="(activity, index) in activities" :key="index" 
class="bg-gray-50 rounded-xl p-4">
<img :src="activity.image" class="w-full h-48 object-cover rounded-lg mb-3" :alt="activity.title" />
<div class="flex items-center text-xs text-gray-500 mb-2">
<el-icon class="mr-1"><Calendar /></el-icon>
<span>{{ activity.date }}</span>
<span class="mx-2">|</span>
<span>{{ activity.time }}</span>
</div>
<h3 class="font-bold text-lg mb-2">{{ activity.title }}</h3>
<p class="text-sm text-gray-600 mb-3">{{ activity.description }}</p>
<div class="flex justify-between items-center">
<span class="text-xs px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full">
{{ activity.status }}
</span>
<button class="text-sm text-emerald-600" @click="handleSignUp(activity)">
立即报名
</button>
</div>
</div>
</div>
</div>

<!-- 机构动态 -->
<div class="bg-white rounded-xl p-6">
<h2 class="text-xl font-bold mb-4">机构动态</h2>
<div class="space-y-4">
<div v-for="(news, index) in newsList" :key="index" 
class="flex items-start space-x-3 pb-4 border-b border-gray-100 last:border-0">
<img :src="news.image" class="w-24 h-24 rounded-lg object-cover" :alt="news.title" />
<div class="flex-1">
<h3 class="font-bold mb-2">{{ news.title }}</h3>
<p class="text-sm text-gray-600 line-clamp-2">{{ news.summary }}</p>
<div class="flex items-center mt-2 text-xs text-gray-500">
<span>{{ news.date }}</span>
<span class="mx-2">|</span>
<span>{{ news.views }} 阅读</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<!-- 服务页面 -->
<div v-if="currentTab === 1" class="px-4 py-6">
<div class="space-y-4">
<div v-for="(service, index) in services" :key="index"
class="bg-white rounded-xl p-6">
<div class="flex items-center mb-4">
<img :src="service.icon" class="w-12 h-12 rounded-xl mr-3" :alt="service.title" />
<div>
<h3 class="font-bold">{{ service.title }}</h3>
<p class="text-xs text-gray-500 mt-1">{{ service.subtitle }}</p>
</div>
</div>
<div class="space-y-2 text-sm text-gray-600">
<p v-for="(item, idx) in service.items" :key="idx">• {{ item }}</p>
</div>
</div>
</div>
</div>
</div>
<!-- 底部导航栏 -->
<div class="fixed bottom-0 left-0 w-full bg-white border-t">
<div class="grid grid-cols-4 h-16">
<div v-for="(tab, index) in tabs" :key="index"
class="flex flex-col items-center justify-center cursor-pointer"
:class="{ 'text-emerald-600': currentTab === index }"
@click="currentTab = index">
<el-icon class="text-xl mb-1">
<component :is="tab.icon" />
</el-icon>
<span class="text-xs">{{ tab.title }}</span>
</div>
</div>
</div>
<!-- 紧急呼叫按钮 -->
<div class="fixed right-4 bottom-20 z-50">
<button @click="handleEmergencyCall"
class="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white shadow-lg !rounded-button">
<el-icon class="text-2xl"><Phone /></el-icon>
</button>
</div>
</div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { House, User, Document, Phone, Location, Message, Bell, ArrowRight, Calendar } from '@element-plus/icons-vue';
import { ElMessage } from 'element-plus';
// 地图相关配置
const initAMap = () => {
const AMap = (window as any).AMap;
if (!AMap) return;
const map = new AMap.Map('mapContainer', {
zoom: 15,
center: [116.481485, 39.990464] // 阳光100坐标
});
const marker = new AMap.Marker({
position: [116.481485, 39.990464],
title: '颐康之家'
});
map.add(marker);
};
const initBMap = () => {
const BMap = (window as any).BMap;
if (!BMap) return;
const map = new BMap.Map('mapContainer');
const point = new BMap.Point(116.481485, 39.990464);
map.centerAndZoom(point, 15);
const marker = new BMap.Marker(point);
map.addOverlay(marker);
const label = new BMap.Label('颐康之家', {
position: point,
offset: new BMap.Size(20, -10)
});
marker.setLabel(label);
};
onMounted(() => {
// 优先使用高德地图，如果加载失败则使用百度地图
if ((window as any).AMap) {
initAMap();
} else if ((window as any).BMap) {
initBMap();
} else {
ElMessage.warning('地图服务加载失败');
}
});
const currentTab = ref(0);
const features = [
{
title: '专业医护',
icon: 'https://public.readdy.ai/ai/img_res/1c01b644f000a303978903925f494c91.jpg'
},
{
title: '营养膳食',
icon: 'https://public.readdy.ai/ai/img_res/92caa567731b444e1648c4000cea17a7.jpg'
},
{
title: '康复训练',
icon: 'https://public.readdy.ai/ai/img_res/76eb573ede2d15e3126d1e766160938b.jpg'
},
{
title: '文娱活动',
icon: 'https://public.readdy.ai/ai/img_res/903e071244601e9618a7c885ed94a851.jpg'
}
];
const carePlans = [
{
title: '生活照护',
subtitle: '基础生活照料服务',
icon: 'https://public.readdy.ai/ai/img_res/c802e127c2dc305c83bbc2c5566e68ed.jpg'
},
{
title: '康复护理',
subtitle: '专业康复训练计划',
icon: 'https://public.readdy.ai/ai/img_res/b6400e165dc41cb7404293c6a0a84aab.jpg'
},
{
title: '医疗照护',
subtitle: '专业医疗护理服务',
icon: 'https://public.readdy.ai/ai/img_res/5917f22121656ada83daaad183f333cf.jpg'
}
];
const environments = [
{
title: '温馨居室',
image: 'https://public.readdy.ai/ai/img_res/2737871062cbbdfd779a8366620cbe29.jpg'
},
{
title: '活动中心',
image: 'https://public.readdy.ai/ai/img_res/bc16bd78b057db5c1ae1a36bda974f27.jpg'
},
{
title: '康复中心',
image: 'https://public.readdy.ai/ai/img_res/8a05dc127a841bbb095b075156c937cd.jpg'
},
{
title: '休闲花园',
image: 'https://public.readdy.ai/ai/img_res/fce0b85c718047b1ac9360e461612afc.jpg'
}
];
const certifications = [
{
title: '医养结合',
icon: 'https://public.readdy.ai/ai/img_res/4217c4998cacc7f2996ad4cd72c985f4.jpg'
},
{
title: '五星评级',
icon: 'https://public.readdy.ai/ai/img_res/48959a3667711e62a73598cb0b31aaca.jpg'
},
{
title: '安全认证',
icon: 'https://public.readdy.ai/ai/img_res/c3e557d6893ddf9e247705dac204f200.jpg'
}
];
const services = [
{
title: '医疗护理',
subtitle: '专业医护团队 24小时守护',
icon: 'https://public.readdy.ai/ai/img_res/29672adb0d6c84276f1948a8a0177fd3.jpg',
items: ['24小时专业护理人员值守', '定期健康检查与评估', '慢性病管理与用药指导', '紧急医疗救助响应']
},
{
title: '康复训练',
subtitle: '个性化康复方案定制',
icon: 'https://public.readdy.ai/ai/img_res/d9577b8b927a899c87de7673f2e6326e.jpg',
items: ['专业康复评估', '个性化训练方案', '功能性训练指导', '康复进度跟踪']
},
{
title: '生活照料',
subtitle: '贴心生活照护服务',
icon: 'https://public.readdy.ai/ai/img_res/ca946a54a51c6977016244ab6db2a525.jpg',
items: ['起居生活协助', '营养膳食供应', '个人卫生护理', '文娱活动安排']
}
];
const tabs = [
{ title: '首页', icon: House },
{ title: '服务', icon: Document },
{ title: '活动', icon: Calendar },
{ title: '关于', icon: User }
];
const form = ref({
name: '',
phone: '',
message: ''
});
const handleSubmit = () => {
if (!form.value.name || !form.value.phone) {
ElMessage.warning('请填写完整信息');
return;
}
ElMessage.success('预约提交成功，我们会尽快与您联系');
form.value = {
name: '',
phone: '',
message: ''
};
};
const activities = [
{
title: '春季养生讲座',
date: '2025-03-15',
time: '14:00-16:00',
description: '特邀中医专家王教授主讲，为大家讲解春季养生要点，包括饮食调养、起居保健等内容。',
status: '报名中',
image: 'https://public.readdy.ai/ai/img_res/b30a771a135229ba613e653ae786813c.jpg'
},
{
title: '园艺疗愈工作坊',
date: '2025-03-20',
time: '09:30-11:30',
description: '通过园艺活动促进身心健康，提供专业园艺治疗指导，让生活更有趣味。',
status: '名额已满',
image: 'https://public.readdy.ai/ai/img_res/b8f3106a09c0916163248c2218cfcbb3.jpg'
}
];

const newsList = [
{
title: '我院获评2024年度最佳养老机构',
summary: '在近日举行的2024年度养老服务评选中，我院凭借专业的服务水平和良好的口碑获得最佳养老机构称号。',
date: '2025-03-01',
views: '2,358',
image: 'https://public.readdy.ai/ai/img_res/ee6f343ea85dada6f9aaf557d47055d1.jpg'
},
{
title: '新增智能康复设备投入使用',
summary: '引进最新智能康复设备，提供更专业的康复训练服务，助力长者恢复健康。',
date: '2025-02-28',
views: '1,892',
image: 'https://public.readdy.ai/ai/img_res/94cc50ebcbc0c9eb7977fc6df4446675.jpg'
},
{
title: '开展工作人员专业技能培训',
summary: '为提升服务质量，特邀行业专家开展为期一周的专业技能培训，内容包括急救技能、照护技巧等。',
date: '2025-02-25',
views: '1,567',
image: 'https://public.readdy.ai/ai/img_res/c2e95036ba6097e96355f0b8d046ebc3.jpg'
}
];

const handleSignUp = (activity: any) => {
if (activity.status === '名额已满') {
ElMessage.warning('该活动报名人数已满，请关注其他活动');
return;
}
ElMessage.success('报名成功，请留意活动通知');
};

const handleEmergencyCall = () => {
ElMessage.success('正在连接紧急救助热线...');
};
</script>
<style scoped>
input, textarea {
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
}
#mapContainer {
border: 1px solid #e5e7eb;
}
input:focus, textarea:focus {
outline: none;
border-color: #059669;
}
.el-message {
top: 50% !important;
transform: translateY(-50%) !important;
}
</style>
