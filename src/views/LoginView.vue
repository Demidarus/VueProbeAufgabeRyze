<template>
  <div>
    <login-form @form-submitted="handleFormSubmitted" />
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";

export default {
  components: { LoginForm },

  methods: {
    handleFormSubmitted(formData) {
      console.log("Form data received:", formData);
    },
  },
};
</script>
