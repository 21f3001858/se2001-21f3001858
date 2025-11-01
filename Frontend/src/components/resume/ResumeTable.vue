<template>
  <table class="table table-striped align-middle">
    <thead class="table-light">
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Skills</th>
        <th>Experience</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(resume, i) in data" :key="i">
        <td>{{ i + 1 }}</td>
        <td>{{ resume.name }}</td>
        <td>{{ resume.email }}</td>
        <td>{{ resume.skills.join(', ') }}</td>
        <td>{{ resume.experience }}</td>
        <td>
          <button class="btn btn-outline-primary btn-sm" @click="$emit('viewDetails', resume)">
            View
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
defineProps({ data: Array });
</script>
