// src/components/services/resumeService.js
export const resumeService = {
  async upload(file) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));

    // Mock data
    return {
      name: file.name.replace(/\.[^/.]+$/, ''),
      email: 'applicant@example.com',
      experience: `${Math.floor(Math.random() * 10) + 1} years`,
      skills: ['Vue.js', 'JavaScript', 'Bootstrap', 'REST APIs'],
      summary: 'Enthusiastic web developer passionate about front-end technologies.'
    };
  }
};
