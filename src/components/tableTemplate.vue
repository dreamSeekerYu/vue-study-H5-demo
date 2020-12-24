<template>
  <div class="table" style="margin-top:15px">
    <!-- 需要用到比较罕见的配置就去 element-ui 官网查询配置一下 -->
    <el-table
      :data="tableData"
      style="width: 100%"
      :stripe="tableConfig.tableConfig.stripe"
      :border="tableConfig.tableConfig.border"
      :height="tableConfig.tableConfig.height"
      :style="tableConfig.tableConfig ? tableConfig.tableConfig.style : ''"
      :highlight-current-row="tableConfig.tableConfig['highlight-current-row']"
      :show-summary="tableConfig.tableConfig['show-summary']"
      :sum-text="tableConfig.tableConfig['sum-text']"
      @current-change="handleCurrentChange"
      @selection-change="handleSelectionChange"
    >
      <!--  展开表格 具名插槽 name="expand" -->
      <slot name="expand" />

      <!-- 起始下标 -->
      <el-table-column
        v-if="tableConfig.tableConfig.index"
        type="index"
        width="50"
      />

      <!-- 多选展示 -->
      <el-table-column
        v-if="tableConfig.tableConfig.selection"
        type="selection"
        width="55"
      />
      <!-- 依次循环展示配置的表头 -->
      <el-table-column
        v-for="item in tableConfig.tableColumns"
        :key="item.prop"
        :label="item.label"
        :prop="item.prop"
        :fixed="item.fixed"
        :min-width="item.minWidth"
      >
        <!-- 合并表头直接嵌套即可 -->
        <el-table-column
          v-for="(childColumn, index) in item.chidren"
          v-if="item.chidren"
          :key="childColumn.prop + index"
          :label="childColumn.label"
          :prop="childColumn.prop"
          :fixed="childColumn.fixed"
        />

        <template slot-scope="scope">
          <!-- 配合过滤器筛选展示结果 -->
          <span v-if="item.filters">{{
            item.filters(scope.row[item.prop])
          }}</span>
          <!-- 参数配置自定义操作 -->
          <span v-else-if="item.action">
            <el-button
              type="text"
              size="small"
              @click="handler(item.action, table.tableData, scope.row)"
            >删除</el-button>
          </span>
          <span v-else-if="item.actionlist">
            <el-button
              v-for="(actionButton, actionIndex) in item.actionlist"
              :key="actionIndex"
              type="text"
              size="small"
              @click="handler(actionButton.action, tableData, scope.row)"
            >{{ actionButton.label }}</el-button>
          </span>
          <!-- 默认展示对应信息 -->
          <span v-else>
            {{ scope.row[item.prop] }}
          </span>
        </template>
      </el-table-column>
      <!--  默认插槽 -->
      <slot />
      <slot name="action" />
    </el-table>
    <el-pagination
      v-if="tableData && tableData.length"
      style="margin-top:10px"
      :page-sizes="defaultpaginationConfig['page-sizes']"
      background
      :layout="defaultpaginationConfig.layout"
      :total="totalCount"
      :page-size="pageSize"
      :current-page="pageIndex"
      @size-change="handleSizeChange"
      @current-change="handleIndexChange"
    />
  </div>
</template>

<script>
import { paginationConfig } from '../config/tableTemplateMixin'
export default {
  name: 'TableTemplate',
  props: {
    tableConfig: {
      default() {
        return {
          tableColumns: [],
          tableConfig: {
            stripe: true,
            border: false
          }
        }
      }
    },
    tableData: {
      type: Array,
      default() {
        return []
      }
    },
    paginationConfig: {
      default() {
        return null
      }
    },
    pageIndex: {
      default() {
        return 1
      }
    },
    pageSize: {
      default() {
        return 10
      }
    },
    totalCount: {
      default() {
        return 0
      }
    }
  },

  data() {
    return {
      defaultpaginationConfig: paginationConfig
    }
  },
  created() {
    // this.$forceUpdate(0)
  },
  methods: {
    handler(action, tableData, row) {
      action(tableData, row)
    },
    handleSizeChange(val) {
      this.$emit('update:pageSize', val)
      this.$emit('handlePaginationChange')
    },
    handleIndexChange(val) {
      this.$emit('update:pageIndex', val)
      this.$emit('handlePaginationChange')
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
      this.$emit('handleSelectionChange', val)
    },
    handleCurrentChange(val) {
      this.$emit('handleCurrentChange', val)
    }
  }
}
/**
 *
 * 多级表头考虑递归调用封装一下
 *    列的宽度定义方式
 *
 *  自定义的展示方式考虑使用自定义组件插槽的方式
 *
 *  自定义的操作方式可以 使用插槽列表或则具名插槽的方式
 *
 *
 */
</script>
<style scoped></style>
