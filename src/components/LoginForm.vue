<template>
  <div>
    <h1>Login</h1>
    <b-card bg-variant="light" class="w-50 mx-auto">
      <b-form @submit.prevent="onSubmit" novalidate>
        <b-form-group
          label="Login Form"
          label-size="lg"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <b-form-group
            label="Email:"
            label-for="email-input"
            label-cols-sm="3"
            label-align-sm="right"
          >
            <b-form-input
              id="email-input"
              v-model="$v.form.email.$model"
              type="email"
              required
              :state="validateState('email')"
              placeholder="Enter email"
            ></b-form-input>
            <b-form-invalid-feedback>
              Please enter a valid email address.
            </b-form-invalid-feedback>
          </b-form-group>

          <b-form-group
            label="Password:"
            label-for="password-input"
            label-cols-sm="3"
            label-align-sm="right"
          >
            <b-form-input
              id="password-input"
              v-model="$v.form.password.$model"
              type="password"
              required
              :state="validateState('password')"
              placeholder="Enter password"
            ></b-form-input>
            <b-form-invalid-feedback>
              Password must be at least 8 characters long.
            </b-form-invalid-feedback>
          </b-form-group>

          <b-button
            type="submit"
            variant="primary"
            class="m-4"
            :disabled="$v.form.$invalid"
            >Login</b-button
          >
        </b-form-group>
      </b-form>
    </b-card>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email, minLength } from "vuelidate/lib/validators";
import { v4 as uuidv4 } from "uuid";

export default {
  mixins: [validationMixin],
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  validations: {
    form: {
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(8),
      },
    },
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    onSubmit() {
      if (!this.form.email || !this.form.password) {
        return;
      }
      // Save token to local storage
      const token = uuidv4();
      localStorage.setItem("token", token);
      // Redirect to details page
      this.$router.push({ name: "details" });

      // Clear the form
      this.clearForm();
    },
    clearForm() {
      this.form.email = "";
      this.form.password = "";
      this.$v.$reset();
    },
  },
};
</script>
