import { ref } from 'vue';
import { defineStore } from 'pinia';


export const useUserStore = defineStore('user',() => {
  const menus = ref<any[]>([]);
  const userInfo = ref<any>({});

  // 处理数据
  return {
    menus,
    userInfo
  }
});