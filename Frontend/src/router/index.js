import { createRouter, createWebHistory } from 'vue-router';
import HrDashboard from '@/views/HrDashboard.vue';
import HrEmployees from '@/views/HrEmployees.vue';
import HrResumeScanner from '@/views/HrResumeScanner.vue';
import HrQueries from '@/views/HrQueries.vue'

const routes = [
  { path: '/', redirect: '/hr/dashboard' },
  { path: '/hr/dashboard', component: HrDashboard },
  { path: '/hr/employees', component: HrEmployees },
  { path: '/hr/resume-scanner', component: HrResumeScanner },
   { path: '/hr/queries', component: HrQueries },
  {
    path: '/hr/birthday-tracker',
    name: 'BirthdayTracker',
    component: () => import('@/views/BirthdayTracker.vue')
  },
  {
    path: '/hr/leave-tracker',
    name: 'LeaveTracker',
    component: () => import('@/views/LeaveTracker.vue')
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
