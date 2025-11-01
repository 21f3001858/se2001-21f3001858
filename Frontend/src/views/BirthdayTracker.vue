<template>
  <div class="container py-4">
    <h4 class="fw-semibold text-primary mb-4">🎂 Birthday Tracker</h4>

    <div class="card shadow-sm p-3 mb-4">
      <div class="d-flex justify-content-between align-items-center mb-2">
        <h5 class="text-secondary fw-semibold">Birthday This Month</h5>
        <button class="btn btn-sm btn-primary" @click="exportBirthdays">
          <i class="bi bi-download me-1"></i> Export
        </button>
      </div>
      <ul class="list-group">
        <li
          v-for="(person, index) in birthdaysThisMonth"
          :key="index"
          class="list-group-item d-flex align-items-center"
        >
          <i class="bi bi-gift text-danger me-2"></i> {{ person.name }} — {{ person.date }}
        </li>
      </ul>
    </div>

    <div class="card shadow-sm p-3">
      <h5 class="text-secondary fw-semibold mb-2">Birthday Upcoming Month</h5>
      <ul class="list-group">
        <li
          v-for="(person, index) in birthdaysNextMonth"
          :key="index"
          class="list-group-item d-flex align-items-center"
        >
          <i class="bi bi-calendar3 text-success me-2"></i> {{ person.name }} — {{ person.date }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useHRStore } from '@/store/useHRStore'
const hrStore = useHRStore()

const birthdaysThisMonth = hrStore.birthdaysToday
const birthdaysNextMonth = [
  { name: 'Nisha Verma', date: 'Dec 3' },
  { name: 'Ravi Iyer', date: 'Dec 19' },
]

function exportBirthdays() {
  const data = [...birthdaysThisMonth, ...birthdaysNextMonth]
  const csv = data.map(p => `${p.name},${p.date}`).join('\n')
  const blob = new Blob([csv], { type: 'text/csv' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'birthdays.csv'
  a.click()
  URL.revokeObjectURL(url)
}
</script>

<style scoped>
.card {
  border-radius: 16px;
}
</style>
