<template>
  <div>
    <ul class="p-0 m-0">
      <li
        class="
          d-flex
          justify-content-between
          align-items-center
          border-bottom border-warning
          py-2
        "
        v-for="(item, index) in list"
        :key="index"
      >
        <p class="m-0">Имя: {{ item.name }}</p>
        <p class="m-0">Номер: {{ item.phone }}</p>
        <button class="btn p-1 m-1" @click="$emit('editContact', index)">
          🖊
        </button>
        <button class="btn p-1 m-1" @click="removeContact({ index })">
          ❌
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "BodyList",
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  methods: {
    ...mapActions({
      removeContact: "contactList/remove",
      editContact: "contactList/edit",
    }),
  },
};
</script>

<style scoped>
</style>