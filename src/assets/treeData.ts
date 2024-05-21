import { ref } from 'vue'
import type Node from 'element-plus/es/components/tree/src/model/node'

interface Tree {
  id: number
  label: string
  children?: Tree[]
}

let id = 1000

export const dataSource = ref<Tree[]>([
  {
    id: 1,
    label: '☆必看! 编程导航学习指南',
    children: [
      {
        id: 4,
        label: '一、学习方向',
        children: [
          {
            id: 9,
            label: '经典问题',
          },
          {
            id: 10,
            label: '就业方向',
          },
        ],
      },
    ],
  }
])

// 新增内容
export const onCreate = (data: Tree) => {
  const newChild = { id: id++, label: '新增目录', children: [] }
  if (!data.children) {
    data.children = []
  }
  data.children.push(newChild)
  dataSource.value = [...dataSource.value]
}

// 删除内容
export const onRemove = (node: Node, data: Tree) => {
  const parent = node.parent
  const children: Tree[] = parent.data.children || parent.data
  const index = children.findIndex((d) => d.id === data.id)
  children.splice(index, 1)
  dataSource.value = [...dataSource.value]
}

export const rename = (data: Tree, newLabel: string) => {
  data.label = newLabel;
  dataSource.value = [...dataSource.value];  // 触发响应式更新
}

// 重命名
export const onRename = (data: Tree) => {
  const newLabel = prompt('目录重命名为:', data.label);
  if (newLabel !== null && newLabel !== data.label) {
    rename(data, newLabel);
  }
}
