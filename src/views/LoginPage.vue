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

          <input type="submit" value="Log In" class="form-control btn mt-3" />
          <span class="my-1 text-muted text-center">or</span>

          <GoogleButton />

          <!-- <button value="Log In" class="form-control btn mb-3">
            Continue with Google
          </button> -->

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
import { alertSuccess, alertError, alertLoading } from "../apis/swal";
import GoogleButton from "@/components/GoogleButton.vue";

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
      alertLoading();
      this.$store
        .dispatch("loginUser", payload)
        .then((result) => {
          localStorage.setItem("access_token", result.access_token);
          this.$store.commit("SET_ROLE", result.role);
          this.$store.commit("IS_LOGGED_IN", true);
          if (result.role === "Admin") {
            this.$router.push("/admin");
          } else {
            this.$router.push("/");
          }
          alertSuccess("Welcome to Bimble!");
        })
        .catch((err) => {
          alertError(err.message);
        });
    },
  },
  components: {
    GoogleButton,
  },
};
</script>

<style>
#LoginPage .card {
  min-width: 600px;
  box-shadow: 0 5px 35px rgba(0, 0, 0, 0.18);
}

#LoginPage span {
  font-weight: 400;
  font-family: "Poppins", sans-serif;
}

#LoginPage .btn {
  background-color: #fc7901;
  color: #ffffff;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: italic;
}
#LoginPage .btn:hover {
  background-color: #eb5e0b;
}

#LoginPage .googleButton {
  border: none;
  background-color: #6c757d;
  color: #fff;
}
#LoginPage .googleButton:hover {
  background-color: #5c636a;
}
</style>
