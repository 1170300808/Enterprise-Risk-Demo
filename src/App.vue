<template>
  <div id="app">
    <!-- 页面顶部的导航栏 -->
    <el-header class="header">
      <div class="logo">
        Enterprise-Risk-Demo
      </div>
      <!-- 搜索框 -->
      <el-input
        v-model="searchQuery"
        placeholder="搜索企业名"
        class="header-search"
        @keyup.enter="handleSearch"
      >
        <template #append>
          <el-icon @click="handleSearch">
            <Search/>
          </el-icon>
        </template>
      </el-input>

      <!-- 功能模块 -->
      <div class="header-menu">
        <el-link href="#" class="menu-item">首页</el-link>
        <el-link href="#" class="menu-item">分类查询</el-link>
        <el-link href="#" class="menu-item">小程序</el-link>
      </div>

      <!-- 用户图标 -->
      <el-icon 
        class="user-avatar"
        icon="el-icon-user-solid"
        size="large"
        style="cursor: pointer;">
        <Avatar />
      </el-icon>
    </el-header>

    <!-- 主体内容区域 -->
    <el-main>
      <!-- 引入并使用 SearchPage 组件 -->
      <SearchPage></SearchPage>
    </el-main>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import SearchPage from './components/SearchPage.vue'; // 请确保路径正确

export default defineComponent({
  name: 'App',
  components: {
    SearchPage, // 注册 SearchPage 组件
  },
  setup() {
    const searchQuery = ref('');

    const handleSearch = () => {
      console.log('Search for:', searchQuery.value);
      // 在这里实现搜索逻辑
    };

    return {
      searchQuery,
      handleSearch,
    };
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

.header {
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: space-between; /* 内容左右分布 */
  padding: 10px 20px;
  border-bottom: 1px solid #ebeef5;
}

.header-search {
  flex: 1;
  margin-right: 20px;
  max-width: 300px; /* 搜索框的最大宽度 */
}

.header-menu {
  display: flex;
  align-items: center;
  margin-right: 20px;
}

.menu-item {
  margin: 0 10px;
  color: #909399;
  cursor: pointer;
  font-size: 16px;
}

.user-avatar {
  margin-left: 20px;
}
</style>
