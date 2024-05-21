<script setup lang="ts">
import catalogues from "@/components/catalogues.vue"
import {dataSource,onCreate ,onRemove ,onRename } from "@/assets/treeData"


</script>

<template>
  <div>
    <h1>树结构目录案例</h1>
    <catalogues
      :dataSource="dataSource"
      :onCreate="onCreate"
      :onRemove="onRemove"
      :onRename="onRename"
    />
  </div>
</template>

<style scoped>

</style>
