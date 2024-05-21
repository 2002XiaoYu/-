<template>
  <div class="custom-tree-container">
    <el-tree
      style="max-width: 256px"
      :data="dataSource"
      node-key="id"
      class="custom-tree-node-label"
      default-expand-all
      :expand-on-click-node="false">
      <template #default="{ node, data }">
        <span class="custom-tree-node">
          <span>{{ node.label }}</span>
          <div class="dropdown-content">
            <el-dropdown @command="handleCommand">
            <el-icon><More /></el-icon>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="onCreate(data)">增加节点</el-dropdown-item>
                <el-dropdown-item @click="onRemove(node, data)">删除节点</el-dropdown-item>
                <el-dropdown-item @click="onRename(data)">重命名</el-dropdown-item>
                <el-dropdown-item >触发自定义事件</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          </div>
        </span>
      </template>
    </el-tree>
  </div>
</template>


<script lang="ts" setup>
import { defineProps } from 'vue'
import { ref } from 'vue';
import { ElMessage } from 'element-plus'
import { More , ArrowDown} from '@element-plus/icons-vue'
import type { TreeNode } from 'element-plus';
import type Node from 'element-plus/es/components/tree/src/model/node'

const props = defineProps<{
  dataSource: Node[],
  onCreate: Function,
  onRemove: Function,
  onRename: Function,
  handleCommand: Function
}>()


const handleCommand = (command: string | number | object) => {
  ElMessage({
    message: '操作成功',
    type: 'success',
  })
}

</script>

<style>
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
.el-tree-node__content{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

/* 隐藏下拉菜单内容 */
.dropdown-content {
  display: none;
}

/* 悬停时显示下拉菜单内容 */
.custom-tree-node:hover .dropdown-content {
  display: block;
}

/* 实现边界处理:内容超出范围进行...省略 */
.custom-tree-node-label span {
  max-width: 100%;  /* 确保不超出容器宽度 */
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
