<template>
  <section>
    <div class="card bg-primary">
      <form v-on:submit.prevent="registerRequest">
        <h1>Register</h1>
        <label>Username</label>
        <input type="text" v-model="username" />
        <label>E-mail</label>
        <input type="email" v-model="email" />
        <label>Password</label>
        <input type="password" v-model="password" />

        <input type="submit" value="Register" />
        <!-- <button>Register with google</button> -->
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "RegisterPage",
  data: function () {
    return {
      username: "",
      password: "",
      email: "",
    };
  },
  methods: {
    register() {
      let payload = {
        username: this.username,
        email: this.email,
        password: this.password,
      };

      console.log(payload);
    },
  },
};
</script>

<style></style>
