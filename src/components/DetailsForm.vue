<template>
  <div>
    <h1>Details</h1>
    <b-card bg-variant="light" class="w-50 mx-auto">
      <b-form @submit.prevent="onSubmit" novalidate>
        <b-form-group
          label="Details Form"
          label-size="lg"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <b-form-group
            label="Title:"
            label-for="title-input"
            label-cols-sm="3"
            label-align-sm="right"
          >
            <b-form-input
              id="title-input"
              v-model="$v.form.title.$model"
              type="text"
              required
              :state="validateState('title')"
              placeholder="Enter title"
            ></b-form-input>
            <b-form-invalid-feedback>
              The title can be at most 100 characters long.
            </b-form-invalid-feedback>
          </b-form-group>

          <b-form-group
            label="Text:"
            label-for="text-input"
            label-cols-sm="3"
            label-align-sm="right"
          >
            <div class="position-relative">
              <b-form-textarea
                id="text-input"
                v-model="$v.form.text.$model"
                :rows="5"
                required
                :state="validateState('text')"
                placeholder="Enter text"
              ></b-form-textarea>
              <span class="position-absolute bottom-0 end-0 p-2">
                <small>{{ textLength }} / 300</small>
              </span>
            </div>
            <b-form-invalid-feedback>
              The text can be at most 300 characters long.
            </b-form-invalid-feedback>
          </b-form-group>

          <b-form-group
            label="Date:"
            label-for="date-input"
            label-cols-sm="3"
            label-align-sm="right"
          >
            <b-form-input
              id="date-input"
              v-model="$v.form.date.$model"
              type="date"
              required
              :state="validateState('date')"
              placeholder="Enter date"
            ></b-form-input>
            <b-form-invalid-feedback>
              Date is required.
            </b-form-invalid-feedback>
          </b-form-group>

          <b-button
            type="submit"
            variant="primary"
            class="m-4"
            :disabled="$v.form.$invalid"
            >Save</b-button
          >
        </b-form-group>
      </b-form>
    </b-card>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  data() {
    return {
      form: {
        title: "",
        text: "",
        date: "",
      },
      editingIndex: null,
    };
  },
  validations: {
    form: {
      title: {
        required,
        maxLength: maxLength(100),
      },
      text: {
        required,
        maxLength: maxLength(300),
      },
      date: {
        required,
      },
    },
  },
  computed: {
    textLength() {
      return this.form.text ? this.form.text.length : 0;
    },
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    onSubmit() {
      if (!this.form.title || !this.form.text || !this.form.date) {
        return;
      }
      // Emit form data to parent component
      const formDataToEmit = { ...this.form };

      if (this.editingIndex !== null) {
        this.$emit("form-updated", {
          data: formDataToEmit,
          index: this.editingIndex,
        });
        this.editingIndex = null;
      } else {
        this.$emit("form-submitted", formDataToEmit);
      }

      this.clearForm();
    },
    clearForm() {
      this.form.title = "";
      this.form.text = "";
      this.form.date = "";
      this.$v.$reset();
    },
    edit(item, index) {
      this.form.title = item.title;
      this.form.text = item.text;
      this.form.date = item.date;
      this.editingIndex = index;
    },
  },
};
</script>
