<template>

    <!-- 联系页面 -->

    <div class="bg-white rounded-lg !p-4 shadow-sm">
        <h2 class="text-xl font-bold mb-4">联系我们</h2>
        <!-- 联系方式 -->
        <div class="!space-y-4 mb-6 ">
            <div class="flex items-center ">
                <v-icon icon="mdi-map-marker"  class="mr-3"> </v-icon>
                <span class="font-bold">地址： {{ contact.address }}</span>
            </div>
            <div class="flex items-center">
                <v-icon icon="mdi-phone" class="mr-3"></v-icon>
                <span class="font-bold">电话： {{ contact.phone }}</span>
            </div>
            <div class="flex items-center">
                <v-icon icon="mdi-email" class="mr-3"></v-icon>
                <span class="font-bold">邮箱：</span>
                <v-img :src="contact.qrCode"   max-width="80" ></v-img>
                
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">

const contact = {
    address: '鄂尔多斯市杭锦旗巴拉贡镇原税务局',
    phone: '18604733447  18047303551',
    qrCode: "/images/profiles/qrcode.png"
}

</script>
