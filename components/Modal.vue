<template>
  <div class="modal">
    <div class="modal-control">
      <p>Добавление пользователя</p>
      <button
        class="modal-btn--close"
        @click="$store.dispatch('modal/changeModalVisibility')"
      >&times;</button>
    </div>

    <div class="modal-control">
      <label for="name">Имя</label>
      <input
        type="text"
        name="name"
        :value="$store.getters['modal/newUser'].name"
        @input="updateUserName"
      />
    </div>

    <div class="modal-control">
      <label for="phone">Телефон</label>
      <input
        type="text"
        name="phone"
        :value="$store.getters['modal/newUser'].phone"
        @input="updateUserNumber"
      />
    </div>

    <div class="modal-control modal-control--select">
      <label for="userParent">Начальник</label>
      <select name="userParent" v-model="selectedParent">
        <option selected disabled>Выберите родителя</option>
        <option
          v-for="user in $store.getters['table/tableData']"
          :key="user.id"
          :value="user.name"
        >{{user.name}}</option>
      </select>
    </div>

    <button
      class="modal-btn--save"
      type="submit"
      @click.prevent="$store.dispatch('modal/addNewUser')"
    >Сохранить</button>
  </div>
</template>

<script>
export default {
  methods: {
    updateUserName(e) {
      this.$store.commit("modal/updateUserName", e.target.value);
    },

    updateUserNumber(e) {
      this.$store.commit("modal/updateUserNumber", e.target.value);
    },
  },

  computed: {
    selectedParent: {
      get() {
        return this.$store.getters["modal/newUser"].parent;
      },

      set(value) {
        this.$store.commit("modal/updateUserParent", value);
      },
    },
  },

  mounted() {
    if (window.localStorage.userName) {
      this.$store.commit(
        "modal/setUserNameFromStorage",
        window.localStorage.userName
      );
    }

    if (window.localStorage.userPhone) {
      this.$store.commit(
        "modal/setUserPhoneFromStorage",
        window.localStorage.userPhone
      );
    }
  },
};
</script>

<style scoped>
.modal {
  width: 30%;
  height: auto;
  border: 1px solid black;
  position: absolute;
  left: 50%;
  top: 50%;
  display: flex;
  flex-direction: column;
  padding: 1em;
}

.modal p {
  margin: 0;
}

.modal-control {
  display: flex;
  justify-content: space-between;
  margin: 0.5em;
}

select,
input {
  display: flex;
  flex-grow: 1;
}

label {
  width: 30%;
}

.modal-btn--save {
  width: auto;
  max-width: 7em;
  margin: 0.5em;
}

.modal-btn--close {
  border: none;
  background: rgb(239, 239, 239);
  outline: none;
}

.modal-btn--close:hover {
  background-color: rgb(170, 170, 170);
}
</style>