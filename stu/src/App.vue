<template>
  <div class="app">
    <h2>路由测试</h2>
    <!-- 导航区 -->
     <div class="navigate">
      <!--路由链接 三种不同写法-->
      <RouterLink to="/home" active-class="active">首页</RouterLink>
      <RouterLink :to="{name: 'xinwen'}" active-class="active">新闻</RouterLink>
      <RouterLink :to= "{path: '/about'}" active-class="active">关于</RouterLink>
     </div>
     <!--展示区-->
     <div class="main-content">
      <RouterView></RouterView >
     </div>
  </div>
</template>

<script lang="ts" setup name="App">
  import { RouterView,RouterLink } from 'vue-router'

</script>

<style scoped>
.app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
}

h2 {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 30px;
  font-size: 28px;
}

.navigate {
  display: flex;
  justify-content: center;
  background-color: #f8f9fa;
  padding: 15px 0;
  border-radius: 8px;
  margin-bottom: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navigate a {
  color: #2c3e50;
  text-decoration: none;
  padding: 10px 20px;
  margin: 0 10px;
  font-weight: 500;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.navigate a:hover {
  background-color: #e9ecef;
  color: #3498db;
}

.navigate a:active {
  transform: scale(0.98);
}

.main-content {
  min-height: 300px;
  padding: 30px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
}
.active {
  color: #2406ce;
  font-weight: bold;
  text-shadow: 0 2px 4px rgba(36, 6, 206, 0.3);
  transform: translateY(-2px);
}

</style>