<template>
  <div class="container">
    <client-only>
      <Table />

      <button
        @click="$store.getters['modal/isModalVisible'] === false ?
        $store.dispatch('modal/changeModalVisibility') : ''"
      >Добавить</button>

      <transition name="fade">
        <Modal v-if="$store.getters['modal/isModalVisible']" />
      </transition>
    </client-only>
  </div>
</template>

<script>
import Table from "@/components/Table";
import Modal from "@/components/Modal";

export default {
  components: {
    Table,
    Modal,
  },
};
</script>

<style scoped>
.container {
  position: relative;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: 0.5s;
}

button {
  margin-top: 1em;
}
</style>