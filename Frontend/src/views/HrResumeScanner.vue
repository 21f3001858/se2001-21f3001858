<template>
  <div class="page">
    <h2 class="section-title">Resume Scanner</h2>

    <div class="upload-box">
      <input type="file" multiple @change="handleFiles" />
    </div>

    <h3 class="details-title">Details from Uploaded Resumes</h3>
    <table class="details-table">
      <thead><tr><th>Name</th><th>Email</th><th>Skills</th></tr></thead>
      <tbody>
        <tr v-for="res in resumeData" :key="res.id">
          <td>{{ res.name }}</td>
          <td>{{ res.email }}</td>
          <td>{{ res.skills }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const resumeData = ref([]);

const handleFiles = () => {
  // mock data for now
  resumeData.value = [
    { id: 1, name: 'Asha K', email: 'asha@mail.com', skills: 'Python, Vue.js' },
    { id: 2, name: 'Rahul P', email: 'rahul@mail.com', skills: 'HR, Recruitment' },
  ];
};
</script>

<style scoped>
.page { padding: 20px; }
.section-title { color: orange; font-size: 18px; font-weight: 600; }
.upload-box {
  background: #d6e8ff;
  padding: 40px;
  text-align: center;
  border-radius: 8px;
  margin: 20px 0;
}
.details-title {
  margin-top: 20px;
  font-size: 16px;
  font-weight: 500;
}
.details-table {
  width: 100%;
  border-collapse: collapse;
}
.details-table th,
.details-table td {
  border-bottom: 1px solid #ccc;
  padding: 8px;
}
</style>
