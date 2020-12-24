import tableTemplate from '../components/tableTemplate'

export const paginationConfig = {
  total: 100,
  pageSize: 10,
  pageIndex: 1,
  'page-sizes': [10, 30, 50, 100],
  layout: 'total, sizes, prev, pager, next, jumper',
}
export const tableConfig = {
  tableConfig: {
    stripe: true, // 斑马条纹
    border: true,
    height: 500,
    style: 'width: 95%',
    'highlight-current-row': true, // 高亮选中
  },
  tableColumns: [],
  tableData: [],
}

export default {
  data() {
    return {
      name: '',
      tableConfig,
    }
  },
  components: { tableTemplate },
  created() {
    console.log('mixin...', this.name)
  },
  mounted() { },
  methods: {
    doSearch() {
      this.$alert('请重新配置doSearch函数')
    },
  },
}
