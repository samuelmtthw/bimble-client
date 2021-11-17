<template>
  <section
    id="UpdateUser"
    class="stationary-page d-flex justify-content-center"
  >
    <div class="wrapper d-flex justify-content-center align-items-center">
      <div class="card p-5 rounded">
        <form @submit.prevent="updateUserDetail" class="d-flex flex-column">
          <h2 class="mb-4">Update Profile</h2>
          <span>Name:</span>
          <input type="text" v-model="name" class="form-control mb-3" />

          <span>Email:</span>
          <input type="email" v-model="email" class="form-control mb-3" />

          <input type="submit" value="Update" class="form-control mt-3 btn" />
          <router-link to="/my-courses">
            <button class="form-control mt-3 btn btn-back">Back</button>
          </router-link>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import {
  alertError,
  alertSuccess,
  alertLoading,
  swalDone,
} from "../../apis/swal";
export default {
  name: "UpdateUser",
  data: function () {
    return {
      name: "",
      email: "",
    };
  },
  methods: {
    updateUserDetail() {
      const payload = {
        name: this.name,
        email: this.email,
      };
      alertLoading();
      this.$store
        .dispatch("updateUserDetail", payload)
        .then(() => {
          alertSuccess("Profile has been updated");
          this.$router.push("/my-courses");
        })
        .catch((err) => {
          alertError(err.message);
        });
    },
    fetchUserDetail() {
      alertLoading();
      this.$store
        .dispatch("fetchUserDetail")
        .then((result) => {
          this.name = result.name;
          this.email = result.email;
          swalDone();
        })
        .catch((err) => {
          alertError(err.message);
        });
    },
  },
  created() {
    this.fetchUserDetail();
  },
};
</script>

<style>
#UpdateUser .card {
  min-width: 600px;
  height: fit-content;
}

#UpdateUser span {
  font-weight: 400;
  font-family: "Poppins", sans-serif;
}

#UpdateUser .btn {
  background-color: #fc7901;
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: italic;
}

#UpdateUser .btn:hover {
  background-color: #eb5e0b;
}

#UpdateUser .btn-back {
  background-color: #6c757d;
  color: #ffffff;
}
#UpdateUser .btn-back:hover {
  background-color: #5c636a;
}
</style>
