<template>
  <div class="d-flex flex-column bg-light vh-100 border-end p-3" style="width: 240px;">
    <h5 class="fw-semibold mb-4 text-center text-primary">HR Panel</h5>
    <ul class="nav flex-column gap-2">
      <li class="nav-item">
        <router-link to="/hr/dashboard" class="nav-link">
          <i class="bi bi-speedometer2 me-2"></i> Dashboard
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/hr/resume-scanner" class="nav-link">
          <i class="bi bi-file-earmark-text me-2"></i> Resume Scanner
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/hr/employees" class="nav-link">
          <i class="bi bi-people me-2"></i> Employees
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/hr/queries" class="nav-link">
          <i class="bi bi-people me-2"></i> Queries
        </router-link>
      </li>
      <li class="nav-item">
  <router-link to="/hr/birthday-tracker" class="nav-link">
    <i class="bi bi-gift me-2"></i> Birthday Tracker
  </router-link>
</li>
<li class="nav-item">
  <router-link to="/hr/leave-tracker" class="nav-link">
    <i class="bi bi-calendar-week me-2"></i> Leave Tracker
  </router-link>
</li>

    </ul>
  </div>
</template>

<style scoped>
.nav-link {
  color: #333;
  border-radius: 6px;
  padding: 8px 12px;
}
.nav-link.router-link-active {
  background-color: #0d6efd;
  color: white;
}
</style>
