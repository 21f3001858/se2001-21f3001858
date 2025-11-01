import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useHRStore = defineStore('hr', () => {
  // 🌟 Dashboard Stats
  const totalEmployees = ref(120)
  const onLeave = ref(8)
  const avgSatisfaction = ref(4.1)
  const hiresThisMonth = ref(5)

  const monthlyHiring = ref({
    labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug'],
    values: [2,1,3,4,5,2,6,5]
  })

  // 👩‍💼 Analytics (Dashboard Charts)
  const genderDistribution = ref({
    labels: ['Male', 'Female', 'Other'],
    values: [60, 55, 5]
  })

  const ageDistribution = ref({
    labels: ['20-25', '26-30', '31-35', '36-40', '41+'],
    values: [15, 30, 40, 20, 15]
  })

  // 🎂 Birthday Tracker Data
  const birthdaysThisMonth = ref([
    { name: 'Aditi Sharma', date: 'Nov 3' },
    { name: 'Ramesh Patel', date: 'Nov 12' },
    { name: 'Sita Nair', date: 'Nov 25' },
  ])

  const birthdaysNextMonth = ref([
    { name: 'Ravi Iyer', date: 'Dec 2' },
    { name: 'Nisha Verma', date: 'Dec 19' },
  ])

  // 🏖️ Leave Tracker Data
  const onLeaveToday = ref([
    { name: 'Rohan Singh' },
    { name: 'Meera Patel' },
  ])

  const leaveCalendar = ref([
    { name: 'Rohan Singh', days: [2, 5, 15] },
    { name: 'Meera Patel', days: [10, 11] },
    { name: 'Aditi Sharma', days: [7] },
  ])

  const employeeAvailability = computed(() => {
    const total = totalEmployees.value
    const onLeaveCount = onLeaveToday.value.length
    return Math.round(((total - onLeaveCount) / total) * 100)
  })

  // 📄 Resume Scanner
  const resumes = ref([])
  function setResumes(newResumes) {
    resumes.value = newResumes
  }

  // 👩‍💻 Employees (for management/edit modal)
  const employees = ref([
    { name: 'Asha K', dob: '1998-03-22', qualification: 'B.Tech', email: 'asha@mail.com', active: true },
    { name: 'Rahul P', dob: '1996-07-10', qualification: 'MBA', email: 'rahul@mail.com', active: true },
    { name: 'Rohan Singh', dob: '1995-02-15', qualification: 'M.Tech', email: 'rohan@mail.com', active: false },
  ])

  const activeEmployees = computed(() => employees.value.filter(e => e.active))
  const inactiveEmployees = computed(() => employees.value.filter(e => !e.active))

  // ✏️ CRUD Operations for Employees
  function addEmployee(emp) {
    employees.value.push(emp)
    totalEmployees.value = employees.value.length
  }

  function updateEmployee(updatedEmp) {
    const index = employees.value.findIndex(e => e.email === updatedEmp.email)
    if (index !== -1) employees.value[index] = { ...updatedEmp }
  }

  function deleteEmployee(empEmail) {
    employees.value = employees.value.filter(e => e.email !== empEmail)
    totalEmployees.value = employees.value.length
  }

  function toggleActive(empEmail) {
    const emp = employees.value.find(e => e.email === empEmail)
    if (emp) emp.active = !emp.active
  }

  async function fetchSummary() {
    // Replace with real API call later
    return true
  }

  return { 
    // 📊 Dashboard
    totalEmployees, 
    onLeave, 
    avgSatisfaction, 
    hiresThisMonth, 
    monthlyHiring,

    // 👥 Analytics
    genderDistribution,
    ageDistribution,

    // 🎂 Birthday Tracker
    birthdaysThisMonth,
    birthdaysNextMonth,

    // 🏖️ Leave Tracker
    onLeaveToday,
    leaveCalendar,
    employeeAvailability,

    // 📄 Resume Scanner
    resumes,
    setResumes,

    // 👩‍💻 Employee Management
    employees,
    activeEmployees,
    inactiveEmployees,
    addEmployee,
    updateEmployee,
    deleteEmployee,
    toggleActive,

    // Misc
    setEmployees(n){ totalEmployees.value = n },
    setOnLeave(n){ onLeave.value = n },
    fetchSummary
  }
})
