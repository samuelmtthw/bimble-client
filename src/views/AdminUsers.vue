<template>
  <section id="AdminUsers">
    <table class="w-100">
      <thead>
        <tr>
          <th class="text-center">ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id" class="p1">
          <td class="text-center">{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.role }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  name: "AdminUsers",
  data: function () {
    return {
      users: [],
    };
  },
  methods: {
    fetchUsersFromAdmin() {
      this.$store
        .dispatch("fetchUsersFromAdmin")
        .then((result) => {
          this.users = result;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.fetchUsersFromAdmin();
  },
};
</script>

<style>
#AdminUsers table th {
  padding: 0 5px 5px 5px;
  font-size: 1.1em;
}

#AdminUsers table td {
  padding: 5px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
</style>
