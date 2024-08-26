<template>
    <div class="search-page">
      <!-- 搜索框 -->
      <el-input
        v-model="searchQuery"
        placeholder="搜索企业名"
        class="search-input"
        @keyup.enter="handleSearch"
      >
        <template #append>
          <el-button @click="handleSearch" icon="el-icon-search"></el-button>
        </template>
      </el-input>
  
      <!-- 筛选条件 -->
      <el-collapse v-model="activeFilters">
        <el-collapse-item title="展开筛选条件" name="1">
          <el-form :model="filters" label-width="100px" class="filter-form">
            <el-form-item label="注册资本">
              <el-radio-group v-model="filters.registeredCapital">
                <el-radio-button label="不限">不限</el-radio-button>
                <el-radio-button label="100万以内">100万以内</el-radio-button>
                <el-radio-button label="100-200">100-200</el-radio-button>
                <el-radio-button label="200-500">200-500</el-radio-button>
                <!-- 添加更多选项 -->
              </el-radio-group>
            </el-form-item>
  
            <el-form-item label="企业状态">
              <el-radio-group v-model="filters.companyStatus">
                <el-radio-button label="不限">不限</el-radio-button>
                <el-radio-button label="在营（开业）企业">在营（开业）企业</el-radio-button>
                <el-radio-button label="停业企业">停业企业</el-radio-button>
                <!-- 添加更多选项 -->
              </el-radio-group>
            </el-form-item>
  
            <!-- 添加更多筛选条件 -->
  
          </el-form>
        </el-collapse-item>
      </el-collapse>
  
      <!-- 搜索结果 -->
      <div class="search-results">
        <el-row :gutter="20">
          <el-col :span="8" v-for="result in searchResults" :key="result.id">
            <el-card :header="result.name" class="result-card">
              <div>企业编码：{{ result.code }}</div>
              <div>注册时间：{{ result.registrationDate }}</div>
              <div>注册资本：{{ result.capital }}</div>
              <el-button type="primary" @click="viewDetails(result)">查看详情</el-button>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { ElMessage } from 'element-plus';
  
  export default {
    name: 'SearchPage',
    setup() {
      const searchQuery = ref('');
      const activeFilters = ref([]);
      const filters = ref({
        registeredCapital: '不限',
        companyStatus: '不限',
        // 其他筛选条件初始化
      });
      const searchResults = ref([]);
  
      const handleSearch = () => {
        // 模拟搜索逻辑
        searchResults.value = [
          {
            id: 1,
            name: '示例公司A',
            code: '1234567890',
            registrationDate: '2007-01-01',
            capital: '100万',
          },
          {
            id: 2,
            name: '示例公司B',
            code: '0987654321',
            registrationDate: '2010-02-02',
            capital: '500万',
          },
          // 更多模拟数据
        ];
        ElMessage.success('搜索完成');
      };
  
      const viewDetails = (result) => {
        // 处理查看详情逻辑
        console.log('查看详情:', result);
      };
  
      return {
        searchQuery,
        activeFilters,
        filters,
        searchResults,
        handleSearch,
        viewDetails,
      };
    },
  };
  </script>
  
  <style scoped>
  .search-page {
    padding: 20px;
  }
  
  .search-input {
    margin-bottom: 20px;
    width: 100%;
  }
  
  .filter-form {
    margin-bottom: 20px;
  }
  
  .search-results {
    margin-top: 20px;
  }
  
  .result-card {
    margin-bottom: 20px;
  }
  </style>
  