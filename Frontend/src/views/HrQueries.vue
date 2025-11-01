<template>
  <div class="container-fluid px-4 py-3">
    <h4 class="mb-4 text-warning">Queries & Surveys</h4>

    <!-- New Queries Section -->
    <div class="card shadow-sm p-3 mb-4">
      <h5>New Queries</h5>
      <ul class="list-group mb-2">
        <li v-for="q in queries" :key="q" class="list-group-item bg-danger-subtle">
          {{ q }}
        </li>
      </ul>
      <button class="btn btn-outline-primary">View All</button>
    </div>

    <!-- Surveys Section -->
    <div class="card shadow-sm p-3">
      <h5>Surveys</h5>
      <div class="d-flex justify-content-end mb-2">
        <button class="btn btn-primary" @click="showSurveyForm = true">Create New Survey</button>
      </div>
      <ul class="list-group">
        <li v-for="s in surveys" :key="s.title" class="list-group-item bg-danger-subtle d-flex justify-content-between">
          <span>{{ s.title }}</span>
          <div>
            <button class="btn btn-outline-dark btn-sm me-1">View</button>
            <button class="btn btn-outline-secondary btn-sm me-1">Export</button>
            <button class="btn btn-outline-danger btn-sm">Delete</button>
          </div>
        </li>
      </ul>
    </div>

    <!-- Create Survey Modal -->
    <div v-if="showSurveyForm" class="modal-backdrop">
      <div class="modal-content">
        <h5>Create New Survey</h5>
        <input v-model="newSurvey" placeholder="Enter survey title..." class="form-control mb-2" />
        <div class="text-end">
          <button class="btn btn-secondary me-2" @click="showSurveyForm = false">Cancel</button>
          <button class="btn btn-success" @click="addSurvey">Add</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const queries = ref(['Query 1', 'Query 2', 'Query 3'])
const surveys = ref([
  { title: 'Past Survey 1' },
  { title: 'Past Survey 2' },
  { title: 'Past Survey 3' },
])

const showSurveyForm = ref(false)
const newSurvey = ref('')

function addSurvey() {
  if (!newSurvey.value) return
  surveys.value.push({ title: newSurvey.value })
  newSurvey.value = ''
  showSurveyForm.value = false
}
</script>

<style scoped>
.card {
  border: none;
  border-radius: 12px;
}
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  width: 400px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.2);
}
</style>
