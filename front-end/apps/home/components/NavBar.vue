<template>
  <header class="flex items-center p-4 bg-white shadow-md">
    <!-- 左侧Logo和导航 -->
    <div class="flex items-center flex-1">
      <!-- Logo -->
      <div class="text-lg font-bold mr-10">
        <img 
          src="https://qcloudimg.tencent-cloud.cn/raw/77fa9689f37fcc9bbd7153927d58f880.svg" 
          alt="Logo" 
          class="h-8 inline-block"
        />
      </div>
      
      <!-- 菜单导航 -->
      <nav class="space-x-6">
        <a href="#" class="hover:text-blue-500">应用中心</a>
        <!-- <a href="#" class="hover:text-blue-500">模板中心</a>
        <a href="#" class="hover:text-blue-500">解决方案中心</a>
        <a href="#" class="hover:text-blue-500">定价</a>
        <a href="#" class="hover:text-blue-500">开发者服务</a> -->
      </nav>
    </div>

    <!-- 右侧操作按钮 -->
    <div class="flex items-center">
      <button class="mr-4 hover:text-blue-500">登录</button>
      <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
        免费试用
      </button>
    </div>
  </header>
</template>

<script setup>
</script>

<style scoped>
a {
  text-decoration: none;
  color: #333;
  transition: color 0.2s;
}

button {
  transition: all 0.2s;
}
</style>
