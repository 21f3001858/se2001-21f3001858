<script setup>
const props = defineProps({
  label: { type: String, default: '' },
  value: { type: [String, Number], default: '' },
  subtitle: { type: String, default: '' }
})
</script>

<template>
  <div class="stat-card">
    <div class="small">{{ props.label }}</div>
    <div class="value">{{ props.value }}</div>
    <div class="small-muted">{{ props.subtitle }}</div>
  </div>
</template>

<style scoped>
.stat-card {
  padding: 12px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
}
.small { font-size: 12px; color: #6b7280; }
.value { font-size: 20px; font-weight: 600; margin: 4px 0; }
.small-muted { color: #9ca3af; font-size: 12px; }
</style>
