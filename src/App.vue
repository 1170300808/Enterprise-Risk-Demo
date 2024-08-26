<template>
  <div id="app">
    <!-- 页面顶部的导航栏，可以自行设计 -->
    <el-header>
      <div class="logo">
        MicoSage
      </div>
    </el-header>

    <!-- 主体内容区域 -->
    <el-main>
      <!-- 引入并使用 SearchPage 组件 -->
      <SearchPage></SearchPage>
    </el-main>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import SearchPage from './components/SearchPage.vue'; // 请确保路径正确

export default defineComponent({
  name: 'App',
  components: {
    SearchPage, // 注册 SearchPage 组件
  },
});
</script>

<style>
/* 全局样式或页面布局样式 */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  padding: 10px;
}

.el-header {
  background-color: #409EFF;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.el-main {
  flex: 1;
  padding: 20px;
}
</style>
