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
      prop="ip"
      label="IP"
    >
    </el-table-column>
    <el-table-column
      prop="port"
      label="port"
    >
    </el-table-column>
    <el-table-column
      prop="date"
      label="创建日期"
    >
    </el-table-column>
    <el-table-column
      prop="address"
      label="设备地址">
    </el-table-column>
    <el-table-column label="操作" width="250px">
      <el-button type="primary" size="mini">编辑</el-button>
      <el-button type="primary" size="mini">详情</el-button>
      <el-button type="primary" size="mini">删除</el-button>
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
   * Created on lucky 2020/9/5  21:58
   * 设备列表
   */
export default {
  name: 'DeviceList',
  data () {
    return {
      tableData: [
        {
          id: 0,
          name: '温度传感器',
          ip: '192.168.12',
          port: 23,
          date: '2016-05-02',
          address: '隧道口9#2#12'
        },
        {
          id: 1,
          name: '甲烷',
          ip: '192.168.12',
          port: 45,
          date: '2016-05-04',
          address: '隧道口12#2'
        }]
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
