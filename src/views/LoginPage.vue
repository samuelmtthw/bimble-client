<template>
  <section>
    <div>
      <form @submit.prevent="login">
        <h1>Log In</h1>
        <label>E-mail</label>
        <input type="email" v-model="email" />
        <label>Password</label>
        <input type="password" v-model="password" />

        <input type="submit" value="Log In" />
        <!-- <button>Log In with google</button> -->
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "LoginPage",
  data: function () {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      const payload = {
        email: this.email,
        password: this.password,
      };

      this.$store
        .dispatch("login", payload)
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });

      console.log(payload);
    },
  },
};
</script>

<style></style>
