<template>
  <div class="container-fluid px-4 py-3">
    <h4 class="mb-4 text-primary fw-semibold">Employee Management</h4>

    <!-- 🔍 Search & Add -->
    <div class="d-flex justify-content-between align-items-center mb-3">
      <input
        v-model="searchQuery"
        class="form-control w-50"
        placeholder="Search by Name or Email"
      />
      <button class="btn btn-success" @click="openAddModal">+ Add Employee</button>
    </div>

    <!-- 👩‍💼 Employee Table -->
    <table class="table table-striped align-middle shadow-sm rounded">
      <thead class="table-light">
        <tr>
          <th>Name</th>
          <th>DOB</th>
          <th>Qualification</th>
          <th>Email</th>
          <th>Status</th>
          <th class="text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="emp in filteredEmployees" :key="emp.email">
          <td>{{ emp.name }}</td>
          <td>{{ emp.dob }}</td>
          <td>{{ emp.qualification }}</td>
          <td>{{ emp.email }}</td>
          <td>
            <span
              :class="emp.active ? 'badge bg-success' : 'badge bg-secondary'"
            >
              {{ emp.active ? 'Active' : 'Inactive' }}
            </span>
          </td>
          <td class="text-center">
            <button class="btn btn-sm btn-outline-info me-1" @click="openEditModal(emp)">
              <i class="bi bi-pencil-square"></i>
            </button>
            <button class="btn btn-sm btn-outline-warning me-1" @click="hrStore.toggleActive(emp.email)">
              <i :class="emp.active ? 'bi bi-person-x' : 'bi bi-person-check'"></i>
            </button>
            <button class="btn btn-sm btn-outline-danger" @click="deleteEmployee(emp.email)">
              <i class="bi bi-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- 🆕 Add / ✏️ Edit Modal -->
    <div v-if="showModal" class="modal-backdrop">
      <div class="modal-content">
        <h5 class="fw-semibold mb-3">{{ editMode ? 'Edit Employee' : 'Add Employee' }}</h5>

        <input v-model="tempEmployee.name" placeholder="Name" class="form-control mb-2" />
        <input v-model="tempEmployee.dob" type="date" placeholder="DOB" class="form-control mb-2" />
        <input v-model="tempEmployee.qualification" placeholder="Qualification" class="form-control mb-2" />
        <input v-model="tempEmployee.email" placeholder="Email" class="form-control mb-3" :disabled="editMode" />

        <div class="text-end">
          <button class="btn btn-secondary me-2" @click="closeModal">Cancel</button>
          <button class="btn btn-primary" @click="saveEmployee">
            {{ editMode ? 'Update' : 'Add' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useHRStore } from '@/store/useHRStore'

const hrStore = useHRStore()

// 🔍 Search & Filter
const searchQuery = ref('')
const filteredEmployees = computed(() =>
  hrStore.employees.filter(e =>
    e.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    e.email.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
)

// 🧱 Modal Management
const showModal = ref(false)
const editMode = ref(false)
const tempEmployee = ref({ name: '', dob: '', qualification: '', email: '', active: true })

function openAddModal() {
  editMode.value = false
  tempEmployee.value = { name: '', dob: '', qualification: '', email: '', active: true }
  showModal.value = true
}

function openEditModal(emp) {
  editMode.value = true
  tempEmployee.value = { ...emp }
  showModal.value = true
}

function closeModal() {
  showModal.value = false
}

function saveEmployee() {
  if (!tempEmployee.value.name || !tempEmployee.value.email) return
  if (editMode.value) {
    hrStore.updateEmployee(tempEmployee.value)
  } else {
    hrStore.addEmployee({ ...tempEmployee.value })
  }
  showModal.value = false
}

function deleteEmployee(email) {
  if (confirm('Are you sure you want to delete this employee?')) {
    hrStore.deleteEmployee(email)
  }
}
</script>

<style scoped>
.table {
  background: #fff;
  border-radius: 10px;
}
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1050;
}
.modal-content {
  background: #fff;
  border-radius: 12px;
  padding: 24px;
  width: 420px;
  box-shadow: 0 4px 25px rgba(0,0,0,0.3);
}
</style>
