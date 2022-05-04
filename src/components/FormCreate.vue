<template>
  <div class="p-5 bg-white">
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
    <button class="btn btn-success d-block w-100" @click="createContactHandler">
      Добавить
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      model: null,
    };
  },
  created() {
    this.modelInit();
  },
  methods: {
    ...mapActions({
      createContact: "contactList/create",
    }),
    createContactHandler() {
      this.createContact({ data: { ...this.model } });
      this.modelInit()
    },
    modelInit() {
      this.model = {
        name: "",
        phone: "",
      };
    },
  },
};
</script>