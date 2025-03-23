<template>
    <!-- 最新活动 -->
    <div class="bg-white rounded-xl p-6">
            <h2 class="text-xl font-bold mb-4">最新活动</h2>
            <div class="!space-y-10">
              <div
                v-for="(activity, index) in activities"
                :key="index"
                class="bg-gray-50 rounded-xl p-4"
              >
                <img
                  :src="activity.image"
                  class="w-full h-48 object-cover rounded-lg mb-3"
                  :alt="activity.title"
                />
                <div class="flex items-center text-xs text-gray-500 mb-2">
                  <v-icon icon="mdi-calendar" class="mr-1" ></v-icon>
                  <span>{{ activity.date }}</span>
                  <span class="mx-2">|</span>
                  <span>{{ activity.time }}</span>
                </div>
                <div class="flex justify-between items-center">
                    <h3 class="font-bold text-lg mb-2">{{ activity.title }}</h3>
                    <span
                    class="text-xs px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full"
                  >
                    {{ activity.status }}
                  </span>
                </div>
                
                <p class="text-sm text-gray-600 mb-3">
                  {{ activity.description }}
                </p>
                <div class="flex justify-between items-center">
                  <span
                    class="text-xs px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full"
                  >
                    剩余名额：{{ activity.remaining }}
                  </span>
                  <v-btn
                    class="text-sm" :color="activity.signedUp? 'green' : 'grey'"
                    @click="handleSignUp(activity)"
                  >
                    {{ activity.signedUp ? '立即报名' : '报名结束'  }}
                </v-btn>
                </div>
              </div>
            </div>
          </div>

    <!-- 添加全局 Snackbar -->
    <v-snackbar
      v-model="snackbar.show"
      :color="snackbar.color"
      location="bottom center"
      timeout="3000"
    >
      {{ snackbar.message }}
    </v-snackbar>
</template>

<script setup lang="ts">
    const activities = ref([
        {
            title: "春季养生讲座",
            date: "2025-03-15",
            time: "14:00-16:00",
            description:
            "特邀中医专家王教授主讲，为大家讲解春季养生要点，包括饮食调养、起居保健等内容。",
            status: "报名中",
            remaining: 5,
            image:
            "/images/activities/b30a771a135229ba613e653ae786813c.jpg",
            signedUp: true,
        },
        {
            title: "园艺疗愈工作坊",
            date: "2025-03-20",
            time: "09:30-11:30",
            description:
            "通过园艺活动促进身心健康，提供专业园艺治疗指导，让生活更有趣味。",
            status: "名额已满",
            remaining: 0,
            image:
            "/images/activities/b8f3106a09c0916163248c2218cfcbb3.jpg",
            signedUp: false,
        },
    ]);

    // const handleSignUp = (activity: any) => {
    //     if (activity.status === "名额已满") {
    //         ElMessage.warning("该活动报名人数已满，请关注其他活动");
    //         return;
    //     }
    //     ElMessage.success("报名成功，请留意活动通知");
    // };
    // 响应式 Snackbar 控制对象
    const snackbar = ref({
        show: false,
        message: '',
        color: 'success'
    })

    const handleSignUp = (activity: any) => {
        
        if ( activity.remaining > 0 ) {
            // 减少剩余名额
            activity.remaining--;
        }
        if ( activity.remaining <= 0 ) {
            activity.signedUp = false;
            activity.status = '名额已满';
            snackbar.value = {
                show: true,
                message: '该活动报名人数已满，请关注其他活动',
                color: 'warning'
            }
            return
        }


        snackbar.value = {
            show: true,
            message: '报名成功，请留意活动通知',
            color: 'success'
        }
    };
</script>