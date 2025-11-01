<template>
  <div class="text-center">
    <h6>Upload Resume Files</h6>
    <input
      type="file"
      multiple
      accept=".pdf,.doc,.docx"
      class="form-control mt-3"
      @change="handleFileUpload"
    />
    <button class="btn btn-primary mt-3 px-4" @click="extractResumes">Extract</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { resumeService } from '@/components/services/resumeService';
const files = ref([]);
const emit = defineEmits(['resumeExtracted']);

function handleFileUpload(e) {
  files.value = Array.from(e.target.files);
}
async function extractResumes() {
  if (!files.value.length) return;
  const extracted = await Promise.all(files.value.map(file => resumeService.upload(file)));
  emit('resumeExtracted', extracted);
}
</script>
