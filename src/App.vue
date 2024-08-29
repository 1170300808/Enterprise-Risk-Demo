<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
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

.logo {
  color: #6f65d2;
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
  max-width: 250px; /* 搜索框的最大宽度 */
}

.header-menu {
  display: flex;
  align-items: center;
  margin-right: 0px;
}

.menu-item {
  margin: 0 20px;
  /* color: #909399; */
  cursor: pointer;
  font-size: 16px;
}

</style>
