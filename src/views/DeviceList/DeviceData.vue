<template>
  <div>
    <el-table
      :data="tableData"
      border
      header-align="center"
      header-row-class-name="header-row"
      style="width: 100%">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="id"
        label="ID"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="设备名称"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="设备地址">
      </el-table-column>
      <el-table-column
        prop="lastDate"
        label="最近操作"
      >
      </el-table-column>
      <el-table-column
        prop="current"
        label="当前读数"
      >
      </el-table-column>
      <el-table-column
        prop="surfix"
        label="单位"
      >
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        scope="scope"
        width="80px"
      >
        <template slot-scope="scope">
        <el-button :type="handleStatus(scope.row.status)" size="mini">{{handleWord(scope.row.status)}}</el-button>
        </template>
      </el-table-column>
      <el-table-column label="操作" prop="status" width="80px">
        <el-button type="primary" size="mini">操作</el-button>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="100">
    </el-pagination>
  </div>
</template>

<script>
/**
   * Created by 简小
   * Created on lucky 2020/9/5  14:25
   * 设备数据
   */
export default {
  name: 'DeviceData',
  data () {
    return {
      tableData: [
        {
          id: 0,
          name: '温度传感器',
          address: '隧道口9#2#12',
          lastDate: '2020-8-23 12:04:12',
          current: 15,
          surfix: '℃',
          status: 0
        },
        {
          id: 1,
          name: '甲烷',
          lastDate: '2020-8-24 15:23:12',
          address: '隧道口12#2',
          current: 0.23,
          surfix: '%',
          status: 1
        },
        {
          id: 2,
          name: '甲烷',
          lastDate: '2020-8-24 15:23:12',
          address: '隧道口12#2',
          current: 0.23,
          surfix: '%',
          status: 2
        },
        {
          id: 3,
          name: '甲烷',
          lastDate: '2020-8-24 15:23:12',
          address: '隧道口12#2',
          current: 0.23,
          surfix: '%',
          status: 3
        },
        {
          id: 4,
          name: '甲烷',
          lastDate: '2020-8-24 15:23:12',
          address: '隧道口12#2',
          current: 0.23,
          surfix: '%',
          status: 4
        }
      ]
    }
  },
  methods: {
    handleStatus (status) {
      if (status === 0) {
        return 'success'
      } else if (status === 1) {
        return 'warning'
      } else if (status === 2) {
        return 'info'
      } else {
        return 'danger'
      }
    },
    handleWord (status) {
      if (status === 0) {
        return '成功'
      } else if (status === 1) {
        return '警告'
      } else if (status === 2) {
        return '提示'
      } else {
        return '危险'
      }
    }
  }
}
</script>

<style scoped>
  /deep/ .header-row th {
    background: #ebebef;
    color: black;
  }
</style>
