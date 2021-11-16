<template>
  <section
    id="RegisterPage"
    class="stationary-page d-flex justify-content-center"
  >
    <div class="wrapper d-flex justify-content-center">
      <div class="card p-5 rounded">
        <form @submit.prevent="register" class="d-flex flex-column">
          <h2 class="mb-5">Register</h2>
          <label><span>Username</span></label>
          <input
            type="text"
            v-model="name"
            placeholder="John Doe"
            class="form-control mb-3"
            required
          />
          <label><span>E-mail</span></label>
          <input
            type="email"
            v-model="email"
            placeholder="john@mail.com"
            class="form-control mb-3"
            required
          />
          <label><span>Password</span></label>
          <input
            type="password"
            v-model="password"
            placeholder="********"
            class="form-control mb-4"
            required
          />

          <input type="submit" value="Register" class="form-control my-3 btn" />
          <small class="text-center text-muted"
            >Have an account?
            <router-link to="/login">Log in</router-link>
          </small>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { alertSuccess, alertError, alertLoading } from "../apis/swal";

export default {
  name: "RegisterPage",
  data: function () {
    return {
      name: "",
      password: "",
      email: "",
    };
  },
  methods: {
    register() {
      let payload = {
        name: this.name,
        email: this.email,
        password: this.password,
      };
      alertLoading();
      this.$store
        .dispatch("registerUser", payload)
        .then((result) => {
          alertSuccess(
            `New user created with email ${result.email}. Please log in to continue`
          );
          this.$router.push("/login");
        })
        .catch((err) => {
          alertError(err.message);
        });
    },
  },
};
</script>

<style>
#RegisterPage .card {
  min-width: 600px;
  box-shadow: 0 5px 35px rgba(0, 0, 0, 0.18);
}

#RegisterPage span {
  font-weight: 400;
  font-family: "Poppins", sans-serif;
}

#RegisterPage .btn {
  background-color: #fc7901;
  color: #ffffff;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: italic;
}

#RegisterPage .btn:hover {
  background-color: #eb5e0b;
}
</style>
