<template>
  <div>
    <div class="card border-success">
      <div class="card-header">
        <h2>Список контактов</h2>
      </div>
      <div class="card-body">
        <form-create></form-create>

        <div v-if="listContact.length !== 0">
          <hr />
          <h5>Контакты:</h5>
          <body-list
            :list="listContact"
            @editContact="editContactHandler"
          ></body-list>
        </div>

        <div v-if="currentEditIndex !== null">
          <div class="my-popup">
            <div class="bg-white p-4 position-relative">
              <button
                class="btn btn-close position-absolute top-0 end-0 m-2"
                @click="currentEditIndex = null"
              ></button>
              <h6 class="text-center text-nowrap mb-3">Изменение контакта</h6>
              <FormEdit
                :contact="listContact[currentEditIndex]"
                :indexContact="currentEditIndex"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormCreate from "@/components/FormCreate";
import BodyList from "@/components/BodyList";
import FormEdit from "@/components/FormEdit";
import { mapGetters } from "vuex";
export default {
  components: {
    FormCreate,
    FormEdit,
    BodyList,
  },
  data() {
    return {
      currentEditIndex: null,
    };
  },
  computed: {
    ...mapGetters({
      listContact: "contactList/getList",
    }),
  },
  methods: {
    editContactHandler(index) {
      this.currentEditIndex = index;
    },
  },
};
</script>

<style scoped>
.card {
  min-width: 400px;
}

.my-popup {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.43);
}
</style>