<template>
  <a-layout class="layout-container">
    <a-layout-header class="header">
      一派青山千古秀
    </a-layout-header>
    <a-layout>
      <a-layout-sider class="layout-sider">
        <a-menu
          v-model:selectedKeys="selectedKeys"
          mode="inline"
          :inline-collapsed="false"
          style="height: 100%"
        >
          <a-menu-item key="index">
            <template #icon>
              <PieChartOutlined />
            </template>
            <router-link :to="{ path: '/' }">首页</router-link>
          </a-menu-item>
          <a-menu-item key="app">
            <template #icon>
              <PieChartOutlined />
            </template>
            <router-link :to="{ path: '/apply' }">应用中心</router-link>
          </a-menu-item>
          <!-- <a-menu-item key="2">
            <template #icon>
              <DesktopOutlined />
            </template>
            <span>Option 2</span>
          </a-menu-item> -->
          <a-sub-menu key="data-center">
            <template #title>
              <span>
                <user-outlined />
                数据中心
              </span>
            </template>
            <a-menu-item key="aggregate-table" @click="jump">聚合表</a-menu-item>
            <a-menu-item key="data-factory">数据工厂</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout-content class="layout-content">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import { ref, watch } from 'vue';
import { PieChartOutlined } from '@ant-design/icons-vue';

const selectedKeys = ref<string[]>(['index']);

const jump = () => {
  window.location.href = '/admin'
}
</script>
<style lang="less" scoped>
.layout-container {
  width: 100%;
  height: 100vh;
}
.header {
  background: #eee;
}
.layout-sider {
  width: 200px;
  height: 100%;
  background: #eee;
}
.layout-content {
  background: rgba(255, 255, 255, 0.7);
  border-radius: 11px;
  padding: 27px;
}

#components-layout-demo-top-side-2 .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side-2 .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}
</style>
