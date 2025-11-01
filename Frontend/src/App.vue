<!-- src/App.vue -->
<template>
  <div class="app-layout">
    <HrSidebar />
    <div class="main">
      <HrTopbar title="Human Resource System" />
      <div class="page-content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import HrSidebar from '@/components/layout/HrSidebar.vue'
import HrTopbar from '@/components/layout/HrTopbar.vue'
</script>

<style>
.app-layout {
  display: flex;
  min-height: 100vh;
  background: #f9fafb;
}
.main {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.page-content {
  flex: 1;
  padding: 20px;
}
</style>
