<template>
  <nav class="flex items-center justify-between bg-white border-b shadow-sm px-6 py-3">
    <!-- Left: Brand -->
    <div class="flex items-center gap-2">
      <div class="p-2 rounded-xl bg-blue-100 text-blue-600">
        <i class="bi bi-people-fill text-lg"></i>
      </div>
      <h1 class="text-lg font-semibold tracking-tight text-gray-800">
        Human Resource System
      </h1>
    </div>

    <!-- Right: Actions -->
    <div class="flex items-center gap-5">
      <!-- Notification Icon -->
      <button
        class="relative p-2 rounded-full hover:bg-gray-100 transition"
        aria-label="Notifications"
      >
        <i class="bi bi-bell text-gray-600 text-xl"></i>
        <span
          class="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border border-white"
        ></span>
      </button>

      <!-- Profile -->
      <div class="flex items-center gap-3">
        <div class="flex flex-col text-right">
          <span class="text-sm font-semibold text-gray-800">
            {{ hrUser.name }}
          </span>
          <span class="text-xs text-gray-500">HR Manager</span>
        </div>
        <div
          class="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center text-blue-700 font-bold text-sm"
        >
          {{ hrUser.name.charAt(0) }}
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useHRStore } from '@/store/useHRStore'

const hrStore = useHRStore()
const hrUser = hrStore.hrUser || { name: 'HR Admin' }
</script>

<style scoped>
/* Optional: subtle fade-in effect */
nav {
  animation: fadeIn 0.4s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
