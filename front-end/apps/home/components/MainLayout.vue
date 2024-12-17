<template>
  <div class="main-layout">
    <!-- 顶部导航 -->
    <header class="header">
      <div class="logo">Logo</div>
      <nav class="nav">
        <ul>
          <li><NuxtLink to="/">首页</NuxtLink></li>
          <li><NuxtLink to="/about">关于</NuxtLink></li>
        </ul>
      </nav>
    </header>

    <!-- 侧边栏 -->
    <div class="container">
      <aside class="sidebar">
        <ul class="menu">
          <li><NuxtLink to="/dashboard">控制台</NuxtLink></li>
          <li><NuxtLink to="/micro-web">Web应用</NuxtLink></li>
        </ul>
      </aside>

      <!-- 主内容区 -->
      <main class="content">
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
// 组件逻辑
</script>

<style scoped>
.main-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  height: 60px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  padding: 0 20px;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  margin-right: 40px;
}

.nav ul {
  display: flex;
  list-style: none;
  gap: 20px;
}

.container {
  flex: 1;
  display: flex;
}

.sidebar {
  width: 200px;
  background: #f5f5f5;
  padding: 20px;
}

.menu {
  list-style: none;
  padding: 0;
}

.menu li {
  margin-bottom: 10px;
}

.content {
  flex: 1;
  padding: 20px;
}
</style> 