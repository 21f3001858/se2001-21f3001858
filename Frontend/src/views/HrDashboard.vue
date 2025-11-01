<template>
  <div class="container-fluid px-4 py-3">
    <h3 class="mb-4 fw-semibold text-warning">HR Analytics</h3>

    <!-- Top stats -->
    <div class="row g-3">
      <div class="col-md-3" v-for="stat in stats" :key="stat.label">
        <StatCard
          :label="stat.label"
          :value="stat.value"
          :subtitle="stat.subtitle"
        />
      </div>
    </div>

    <!-- Analytics Charts Section -->
    <div class="row mt-4 g-4">
      <div class="col-md-6">
        <div class="card shadow-sm p-3">
          <h5># of Employees by Gender</h5>
          <canvas id="genderChart"></canvas>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card shadow-sm p-3">
          <h5>Age Distribution</h5>
          <canvas id="ageChart"></canvas>
        </div>
      </div>
      <div class="col-md-12">
        <div class="card shadow-sm p-3">
          <h5>Gender Distribution by Department</h5>
          <canvas id="deptGenderChart"></canvas>
        </div>
      </div>
    </div>

    <!-- Birthday and Leave Sections -->
    <div class="row mt-4 g-4">
      <div class="col-md-6">
        <div class="card shadow-sm p-3 bg-warning-subtle">
          <h5>🎂 Birthday Today</h5>
          <ul>
            <li v-for="b in birthdays" :key="b">{{ b }}</li>
          </ul>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card shadow-sm p-3 bg-danger-subtle">
          <h5>🏖️ On Leave Today</h5>
          <ul>
            <li v-for="l in onLeaveToday" :key="l">{{ l }}</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Recruitment Overview -->
    <div class="card mt-4 shadow-sm p-3">
      <h5 class="mb-3">Recruitment Overview</h5>
      <LineChart
        :labels="hrStore.monthlyHiring.labels"
        :data="hrStore.monthlyHiring.values"
        label="Monthly Hiring Trend"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useHRStore } from '@/store/useHRStore'
import StatCard from '@/components/cards/StatCard.vue'
import LineChart from '@/components/charts/LineChart.vue'
import Chart from 'chart.js/auto'

const hrStore = useHRStore()

// Existing stats
const stats = computed(() => [
  { label: 'Employees', value: hrStore.totalEmployees, subtitle: 'Total active staff' },
  { label: 'On Leave', value: hrStore.onLeave, subtitle: 'Currently unavailable' },
  { label: 'Avg Satisfaction', value: hrStore.avgSatisfaction, subtitle: 'Out of 5' },
  { label: 'Hires This Month', value: hrStore.hiresThisMonth, subtitle: 'New employees added' },
])

// Birthday & leave mock data
const birthdays = ['Asha K', 'Kiran V']
const onLeaveToday = ['Rahul P', 'Meera S']

onMounted(() => {
  // Chart 1 - Employees by Gender
  new Chart(document.getElementById('genderChart'), {
    type: 'doughnut',
    data: {
      labels: ['Female', 'Male'],
      datasets: [{ data: [14, 11], backgroundColor: ['#ff6384', '#36a2eb'] }]
    }
  })

  // Chart 2 - Age Distribution
  new Chart(document.getElementById('ageChart'), {
    type: 'bar',
    data: {
      labels: ['20-25', '26-30', '31-35', '36-40', '41+'],
      datasets: [{
        label: 'Employees',
        data: [5, 9, 8, 2, 1],
        backgroundColor: '#4bc0c0'
      }]
    }
  })

  // Chart 3 - Gender Distribution by Department
  new Chart(document.getElementById('deptGenderChart'), {
    type: 'bar',
    data: {
      labels: ['R&D', 'HR', 'Analytics', 'Sales'],
      datasets: [
        { label: 'Female', data: [3, 2, 4, 1], backgroundColor: '#ff9f40' },
        { label: 'Male', data: [2, 3, 1, 2], backgroundColor: '#36a2eb' }
      ]
    }
  })
})
</script>

<style scoped>
.card {
  border: none;
  border-radius: 12px;
}
ul {
  list-style: none;
  padding-left: 10px;
  margin: 0;
}
ul li {
  background: #fff;
  border-radius: 8px;
  padding: 6px 10px;
  margin-bottom: 6px;
  font-weight: 500;
}
</style>
