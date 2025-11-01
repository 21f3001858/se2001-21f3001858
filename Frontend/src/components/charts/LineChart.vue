<script setup>
import { onMounted, ref, watch } from 'vue'
import Chart from 'chart.js/auto'

const props = defineProps({
  labels: { type: Array, default: () => [] },
  data: { type: Array, default: () => [] },
  label: { type: String, default: 'Series' }
})

const canvas = ref(null)
let chart = null

onMounted(() => {
  if (!canvas.value) return
  chart = new Chart(canvas.value.getContext('2d'), {
    type: 'line',
    data: {
      labels: props.labels,
      datasets: [{ label: props.label, data: props.data, fill: true, tension: 0.3 }]
    },
    options: {
      plugins: { legend: { display: true } },
      scales: { y: { beginAtZero: true } }
    }
  })
})

watch(() => [props.labels, props.data], () => {
  if (!chart) return
  chart.data.labels = props.labels
  chart.data.datasets[0].data = props.data
  chart.update()
})
</script>

<template>
  <div class="chart-box">
    <canvas ref="canvas" />
  </div>
</template>

<style scoped>
.chart-box { padding: 12px; height: 260px; }
</style>
