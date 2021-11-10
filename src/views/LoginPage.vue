<template>
  <section id="LoginPage" class="stationary-page d-flex justify-content-center">
    <div class="wrapper d-flex justify-content-center">
      <div class="card p-5 rounded">
        <form @submit.prevent="login" class="d-flex flex-column">
          <h2 class="mb-5">Log In</h2>
          <label><span>E-mail</span></label>
          <input
            type="email"
            v-model="email"
            placeholder="john@mail.com"
            class="form-control mb-3"
          />
          <label><span>Password</span></label>
          <input
            type="password"
            v-model="password"
            placeholder="********"
            class="form-control mb-4"
          />

          <input type="submit" value="Log In" class="form-control btn mt-3" />
          <span class="my-1 text-muted text-center">or</span>
          <button value="Log In" class="form-control btn mb-3">
            Continue with Google
          </button>

          <small class="text-muted text-center mt-3"
            >Don't have an account? Register
            <router-link to="/register">here</router-link></small
          >
        </form>
      </div>
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

<style>
#LoginPage .card {
  min-width: 600px;
  /* height: fit-content; */
}

#LoginPage span {
  font-weight: 400;
  font-family: "Poppins", sans-serif;
}

#LoginPage .btn {
  background-color: #a3d2ca;
  color: #eb5e0b;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: italic;
}

#LoginPage .btn:hover {
  background-color: #8fcac0;
}
</style>
