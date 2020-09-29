<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>
            <button
              @click="$store.dispatch('table/sortTableByName')"
              class="table-sorting_element"
            >Имя</button>
          </th>
          <th>
            <button
              @click="$store.dispatch('table/sortTableByPhone')"
              class="table-sorting_element"
            >Телефон</button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in $store.getters['table/tableData']" :key="user.id">
          <td>
            {{user.name}}
          </td>
          <td>{{user.phone}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
table {
  table-layout: fixed;
  border-collapse: collapse;
  border: 3px solid purple;
}

.table-sorting_element {
  background-color: white;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  padding: 1em;
}

table td,
table th {
  padding: 0.7em;
  border: 1px solid black;
}

thead th {
  padding: 0;
}

tbody tr:nth-child(odd) {
  background-color: lightgoldenrodyellow;
}

.substring {
  height: 10px;
}
</style>