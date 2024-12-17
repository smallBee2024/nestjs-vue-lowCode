<template>
  <div class="micro-web">
    <wujie-vue
      width="100%"
      height="100%"
      name="web"
      :url="runtimeConfig.public.microApps.web"
      :sync="true"
    ></wujie-vue>
  </div>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
</script>

<style scoped>
.micro-web {
  width: 100%;
  height: calc(100vh - 60px);
}
</style> 