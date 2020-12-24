<template>
<!--  白名单 -->
<div>
  <el-form inline>
    <el-form-item label="车辆VIN码:">
      <el-input placeholder="请输入车辆 VIN 码" size="small" :value="queryParams.param.vin" :maxlength="17" @input="val => (queryParams.param.vin = val.replace(/[\W]/g, '').toUpperCase())" />
    </el-form-item>
  </el-form>
  <div style="margin:10px 0">
    <el-button type="primary" icon="el-icon-search" size="small" title="查询" @click="doSearch" />
    <el-button type="warning" icon="el-icon-refresh" size="small" title="清空查询条件" @click="reset" />
  </div>
  <!-- 查询结果表格 -->
  <tableTemplate :table-config="tableConfig" :table-data="VehicleWhiteList.items" :page-size.sync="queryParams.pageSize" :page-index.sync="queryParams.pageIndex" :total-count="queryParams.totalCount" @handlePaginationChange="doSearch">
    <el-table-column slot="action" label="操作" width="100">
      <template slot-scope="scope">
      </template>
    </el-table-column>
  </tableTemplate>
  <hr />
  <h3 style="color:red">测试结果</h3>
</div>
</template>

<script>
import request from '@/utils/request'
import service from '@/api'

import tableTemplateMixin from '@/config/tableTemplateMixin.js' // 引入mixin文件
// 表格分页的配置采用 mixin 的方式导入
import {
  tableConfig
} from '@/config'
import {
  parseTime
} from '../utils/index'
import {
  commonFilters,
  vehicleStyleTypeEnums,
  vehicleTypesEnums
} from '../enums'

export default {
  mixins: [tableTemplateMixin],
  data() {
    return {
      VehicleWhiteList: [],
      AllWhiteVinList: [],
      queryParams: {
        totalCount: 0,
        pageSize: 10,
        pageIndex: 1,
        param: {
          vin: ''
        }
      },
      tableConfig: {
        ...tableConfig,
        tableColumns: [{
            prop: 'vin',
            label: 'VIN码'
          },
          {
            prop: 'vehicleType',
            label: '车辆类型',
            filters: commonFilters(vehicleTypesEnums)
          },
          {
            prop: 'vehicleSeriesName',
            label: '车系'
          },
          {
            prop: 'vehicleModelName',
            label: '车型名称'
          },
          {
            prop: 'vehicleModel',
            label: '特征包代码'
          },
          {
            prop: 'powerType',
            label: '动力类型',
            filters: commonFilters(vehicleStyleTypeEnums)
          },
          {
            prop: 'createEmpName',
            label: '创建人'
          },
          {
            prop: 'createTime',
            label: '创建时间',
            filters: parseTime
          }
        ]
      }
    }
  },
  created() {
    this.doSearch()
  },
  methods: {
    async doSearch() {
      console.log(service)
      await service.carManage
        // .VehicleWhiteList(this.queryParams)                          // 获取结果，不绑定
        // .VehicleWhiteList(this.queryParams, this)                    // 获取结果， 自动同名绑定
        .VehicleWhiteList(this.queryParams, this, 'VehicleWhiteList') // 获取结果， 指定变量名称绑定
        .then(res => this.checkSearchResult(res))
    },
    // 改变查询条件、分页没变，查询结果为空时默认重置到第一页
    checkSearchResult(res) {
      console.log('%c res....', 'color: red; font-style: italic', JSON.stringify(res, null, 2))
      this.queryParams.totalCount = res.totalCount
      this.queryParams.pageSize = res.pageSize
      this.queryParams.pageIndex = res.pageIndex
      if (res.items.length == 0 && res.totalCount) {
        this.queryParams.pageIndex = 1
        this.doSearch()
      }
    },
    reset() {
      Object.assign(this.$data.queryParams, this.$options.data().queryParams)
      this.doSearch()
    },

  }
}
</script>

<style lang="scss" scoped></style>
