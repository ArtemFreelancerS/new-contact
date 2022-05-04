<template>
  <div>
    <div class="mb-3">
      <input
        type="text"
        placeholder="Введите имя"
        class="form-control"
        v-model="model.name"
      />
    </div>
    <div class="mb-3">
      <input
        type="text"
        placeholder="Введите номер"
        class="form-control"
        v-model="model.phone"
      />
    </div>
    <button class="btn btn-success d-block w-100" @click="saveContactHandler">
      Сохранить
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    contact: {
      type: Object,
      required: true,
    },
    indexContact: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      model: null,
    };
  },
  created() {
    this.modelInit();
  },
  methods: {
    ...mapActions({ saveContact: "contactList/edit" }),
    saveContactHandler() {
      this.saveContact({ index: this.indexContact, data: { ...this.model } });
    },
    modelInit() {
      this.model = {
        name: this.contact.name,
        phone: this.contact.phone,
      };
    },
  },
};
</script>