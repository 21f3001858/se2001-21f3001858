<template>
  <div class="modal fade show d-block" style="background: rgba(0,0,0,0.4)">
    <div class="modal-dialog modal-lg">
      <div class="modal-content shadow-lg">
        <div class="modal-header">
          <h5 class="modal-title">{{ resume.name }} - Details</h5>
          <button class="btn-close" @click="$emit('close')"></button>
        </div>
        <div class="modal-body">
          <p><strong>Email:</strong> {{ resume.email }}</p>
          <p><strong>Experience:</strong> {{ resume.experience }}</p>
          <p><strong>Skills:</strong> {{ resume.skills.join(', ') }}</p>
          <hr />
          <p><strong>Summary:</strong> {{ resume.summary }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({ resume: Object });
</script>
