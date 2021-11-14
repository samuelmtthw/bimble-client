<template>
  <g-signin-button
    class="btn btn-secondary form-control py-2 googleButton"
    :params="googleSignInParams"
    @success="onSignInSuccess"
    @error="onSignInError"
  >
    Continue with Google
  </g-signin-button>
</template>

<script>
import { alertSuccess, alertError } from "../apis/swal";
export default {
  name: "GoogleButton",
  props: ["page"],
  data() {
    return {
      googleSignInParams: {
        client_id:
          "169201741181-ih9hhjsdu6t7ml0l9b4h91q1jifpjf0a.apps.googleusercontent.com",
      },
    };
  },
  methods: {
    onSignInSuccess(googleUser) {
      const idToken = googleUser.getAuthResponse().id_token;
      this.$store
        .dispatch("googleLogin", idToken)
        .then((data) => {
          localStorage.setItem("access_token", data.access_token);
          this.$store.commit("IS_LOGGED_IN", true);
          this.$store.commit("SET_ROLE", data.role);

          if (data.role === "Admin") {
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
    onSignInError(error) {
      alertError("Google Sign In Failed :c");
      console.log(error);
    },
  },
};
</script>

<style>
.g-signin-button {
  display: inline-block;
  border-radius: 3px;
}

.g-signin-button:hover {
  cursor: pointer;
}
</style>
