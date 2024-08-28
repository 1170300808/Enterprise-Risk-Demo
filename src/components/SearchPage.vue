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
          <!-- 使用图标组件 -->
          <el-icon @click="handleSearch" style="color: black">
            <Search />
          </el-icon>
        </template>
      </el-input>
  
      <!-- 筛选条件 -->
      <el-collapse v-model="activeFilters">
        <el-collapse-item title="展开筛选条件" name="1">
          <el-form :model="filters" label-width="100px" class="filter-form">
            <el-form-item label="注册资本">
              <el-radio-group v-model="filters.registeredCapital">
                <el-radio label="不限">不限</el-radio>
                <el-radio label="100以内">100以内</el-radio>
                <el-radio label="100-200">100-200</el-radio>
                <el-radio label="200-500">200-500</el-radio>
                <el-radio label="500-1000">500-10000</el-radio>
                <el-radio label="1000-50000">1000-50000</el-radio>
                <el-radio label="50000以上">50000以上</el-radio>
                <!-- 添加更多选项 -->
              </el-radio-group>
            </el-form-item>
  
            <el-form-item label="企业状态">
              <el-radio-group v-model="filters.companyStatus">
                <el-radio label="不限">不限</el-radio>
                <el-radio label="在营（开业）企业">在营（开业）企业</el-radio>
                <el-radio label="吊销企业">吊销企业</el-radio>
                <el-radio label="注销企业">注销企业</el-radio>
                <el-radio label="迁出">迁出</el-radio>
                <!-- 添加更多选项 -->
              </el-radio-group>
            </el-form-item>

            <el-form-item label="企业类型">
              <el-radio-group v-model="filters.companyType">
                <el-radio label="不限">不限</el-radio>
                <el-radio label="有限责任公司（自然人独资）">有限责任公司（自然人独资）</el-radio>
                <el-radio label="有限责任公司（自然人投资或控股）">有限责任公司（自然人投资或控股）</el-radio>
                <el-radio label="有限责任公司（自然人投资或控股的法人投资）">有限责任公司（自然人投资或控股的法人投资）</el-radio>
                <el-radio label="其他有限责任公司">其他有限责任公司</el-radio>
                <!-- 添加更多选项 -->
              </el-radio-group>
            </el-form-item>
  
            <el-form-item label="企业类别">
              <el-radio-group v-model="filters.companyCategory">
                <el-radio label="不限">不限</el-radio>
                <el-radio label="私营企业">私营企业</el-radio>
                <el-radio label="农民专业合作社">农民专业合作社</el-radio>
                <el-radio label="内资企业">内资企业</el-radio>
                <el-radio label="外资投资企业">外资投资企业</el-radio>
                <!-- 添加更多选项 -->
              </el-radio-group>
            </el-form-item>

            <el-form-item label="行业门类">
              <el-radio-group v-model="filters.industryCategory">
                <el-radio label="不限">不限</el-radio>
                <el-radio label="批发和零售业">批发和零售业</el-radio>
                <el-radio label="房地产业">房地产业</el-radio>
                <el-radio label="租赁和商务服务业">租赁和商务服务业</el-radio>
                <el-radio label="制造业">制造业</el-radio>
                <el-radio label="信息传输、软件和信息技术服务业">信息传输、软件和信息技术服务业</el-radio>
                <el-radio label="科学研究和技术服务业">科学研究和技术服务业</el-radio>
                <el-radio label="建筑业">建筑业</el-radio>
                <el-radio label="惠民服务、修理和其他服务业">惠民服务、修理和其他服务业</el-radio>
                <el-radio label="住宿和餐饮业">住宿和餐饮业</el-radio>
                <el-radio label="交通运输、仓储和邮政业">交通运输、仓储和邮政业</el-radio>
                <el-radio label="文化、体育和娱乐业">文化、体育和娱乐业</el-radio>
                <el-radio label="教育">教育</el-radio>
                <el-radio label="农、林、牧、渔业">农、林、牧、渔业</el-radio>
                <el-radio label="水利、环境和公共设施管理业">水利、环境和公共设施管理业</el-radio>
                <el-radio label="电力、热力、燃气及生产和供应业">电力、热力、燃气及生产和供应业</el-radio>
                <el-radio label="金融业">金融业</el-radio>
                <el-radio label="采矿业">采矿业</el-radio>
                <el-radio label="公共管理、社会管理和社会福利">公共管理、社会管理和社会福利</el-radio>
                <!-- 添加更多选项 -->
              </el-radio-group>
            </el-form-item>
            
            <el-form-item label="从业人数">
              <el-radio-group v-model="filters.employeeCount">
                <el-radio label="不限">不限</el-radio>
                <el-radio label="5人以上">5人以上</el-radio>
                <el-radio label="5人以下">5人以下</el-radio>
                <!-- 添加更多选项 -->
              </el-radio-group>
            </el-form-item>
            
            <el-form-item label="成立期限">
              <el-radio-group v-model="filters.establishmentPeriod">
                <el-radio label="不限">不限</el-radio>
                <el-radio label="1年内">1年内</el-radio>
                <el-radio label="1-2年">1-2年</el-radio>
                <el-radio label="2-3年">2-3年</el-radio>
                <el-radio label="3-5年">3-5年</el-radio>
                <el-radio label="5-10年">5-10年</el-radio>
                <el-radio label="10年以上">10年以上</el-radio>
                <!-- 添加更多选项 -->
              </el-radio-group>
            </el-form-item>

            <el-form-item label="经营期限">
              <el-radio-group v-model="filters.operatingPeriod">
                <el-radio label="不限">不限</el-radio>
                <el-radio label="2年内">2年内</el-radio>
                <el-radio label="2-5年">2-5年</el-radio>
                <el-radio label="5-10年">5-10年</el-radio>
                <el-radio label="10年以上">10年以上</el-radio>
                <!-- 添加更多选项 -->
              </el-radio-group>
            </el-form-item>

            <el-form-item label="排序字段">
              <el-radio-group v-model="filters.sortingField">
                <el-radio label="注册资本">注册资本</el-radio>
                <el-radio label="成立日期">成立日期</el-radio>
                <el-radio label="从业人数">从业人数</el-radio>
                <!-- 添加更多选项 -->
              </el-radio-group>
            </el-form-item>

            <el-form-item label="排序方式">
              <el-radio-group v-model="filters.sortingOrder">
                <el-radio label="升序">升序</el-radio>
                <el-radio label="降序">降序</el-radio>
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
  import { Search } from '@element-plus/icons-vue'; // 确保图标组件已正确导入
  
  export default {
    name: 'SearchPage',
    components: {
      Search, // 注册图标组件
    },
    setup() {
      const searchQuery = ref('');
      const activeFilters = ref([]);
      const filters = ref({
        registeredCapital: '',
        companyStatus: '',
        companyType: '',
        companyCategory: '',
        industryCategory: '',
        employeeCount: '',
        establishmentPeriod: '',
        operatingPeriod: '',
        sortingField: '',
        sortingOrder: '',
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
    padding: 0px;
  }
  
  .search-input {
    margin-bottom: 10px;
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
  