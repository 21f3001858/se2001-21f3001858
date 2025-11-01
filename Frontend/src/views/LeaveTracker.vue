<template>
  <div class="container py-4">
    <h4 class="fw-semibold text-primary mb-4">🗓️ Leave Tracker</h4>

    <div class="card shadow-sm p-3 mb-4">
      <div class="d-flex justify-content-between align-items-center mb-2">
        <h5 class="text-secondary fw-semibold">Leave Calendar</h5>
        <span class="badge bg-info text-dark p-2">
          Employee availability this week: {{ availability }}%
        </span>
      </div>

      <div class="table-responsive">
        <table class="table table-bordered align-middle text-center">
          <thead class="table-light">
            <tr>
              <th>Employee</th>
              <th v-for="day in 30" :key="day">Day {{ day }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(emp, i) in employees" :key="i">
              <td class="fw-semibold text-start">{{ emp.name }}</td>
              <td
                v-for="day in 30"
                :key="day"
                :class="{
                  'bg-danger text-white': isOnLeave(emp, day),
                  'bg-light': !isOnLeave(emp, day)
                }"
              >
                {{ isOnLeave(emp, day) ? 'L' : '' }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="card shadow-sm p-3">
      <h5 class="text-secondary fw-semibold mb-2">On Leave This Week</h5>
      <ul class="list-group">
        <li
          v-for="(person, index) in onLeaveList"
          :key="index"
          class="list-group-item d-flex align-items-center"
        >
          <i class="bi bi-person-dash me-2 text-danger"></i> {{ person.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useHRStore } from '@/store/useHRStore'
const hrStore = useHRStore()

const employees = hrStore.employees
const onLeaveList = hrStore.onLeaveToday
const availability = 70

function isOnLeave() {
  // Simulate random leave pattern for now
  return Math.random() < 0.05
}
</script>

<style scoped>
.table {
  font-size: 0.8rem;
}
.card {
  border-radius: 16px;
}
</style>
