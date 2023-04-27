<template>
  <div>
    <details-form
      @form-submitted="handleFormSubmitted"
      ref="detailsForm"
      @form-updated="handleFormUpdated"
    />
    <div class="mt-4" v-if="list.length > 0">
      <h2>Previous Entries</h2>
      <b-list-group>
        <b-list-group-item
          v-for="(item, index) in list"
          :key="index"
          class="d-flex align-items-center justify-content-between"
        >
          <div>{{ item.title }} - {{ item.date }}</div>
          <b-button variant="info" size="sm" @click="editItem(item, index)"
            >Edit</b-button
          >
        </b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>

<script>
import DetailsForm from "@/components/DetailsForm.vue";

export default {
  components: { DetailsForm },

  data() {
    return {
      list: [],
    };
  },
  methods: {
    handleFormSubmitted(formData) {
      console.log("Form data received:", formData);
      this.list.push(formData);
    },
    editItem(item, index) {
      this.$refs.detailsForm.edit(item, index);
    },
    handleFormUpdated({ data, index }) {
      this.list.splice(index, 1, data);
    },
  },
};
</script>

<style>
.list-group-item:hover {
  background-color: #f1f1f1;
  cursor: pointer;
}
</style>
