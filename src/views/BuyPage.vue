<template>
  <section id="BuyPage" class="stationary-page d-flex justify-content-center">
    <div class="wraper d-flex justify-content-center">
      <div class="card px-5 py-3 rounded">
        <div class="d-block text-center mb-3">
          <img src="/logo-ovo.png" alt="logo-ovo" class="w-50" />
        </div>
        <span class="mb-3">You are going to purchase:</span>
        <h4>{{ course.name }}</h4>
        <h5>{{ price }}</h5>
        <form @submit.prevent="buy" class="d-flex flex-column mt-3">
          <span>Enter your phone number (OVO)</span>
          <input
            required
            type="number"
            placeholder="+628123456789"
            class="form-control mt-1"
            v-model="phoneNumber"
          />
          <input type="submit" value="Purchase" class="btn btn-orange mt-4" />
          <router-link
            :to="`/courses/${this.$route.params.courseId}`"
            class="btn btn-back mt-2"
            >Back</router-link
          >
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { alertError, alertLoading, alertSuccess, swalDone } from "../apis/swal";
export default {
  name: "BuyPage",
  data: function () {
    return {
      course: {},
      phoneNumber: "",
    };
  },
  methods: {
    buy() {
      alertLoading();
      this.$store
        .dispatch("addUserCourseUser", this.$route.params)
        .then((result) => {
          const payload = {
            phoneNumber: `+${this.phoneNumber}`,
            userCourseId: result.id,
          };

          this.$store
            .dispatch("ovoCharge", payload)
            .then(() => {
              alertSuccess(`Purchased!`);
              this.$router.push("/my-courses");
            })
            .catch((err) => {
              alertError(err.message);
            });
        })
        .catch((err) => {
          alertError(err.message);
          this.$router.push(`/my-courses/${this.$route.params.courseId}`);
        });
    },
    fetchCoursesDetailUser() {
      alertLoading();
      this.$store
        .dispatch("fetchCoursesDetailUser", this.$route.params)
        .then((result) => {
          this.course = result;
          swalDone();
        })
        .catch((err) => {
          alertError(err.message);
        });
    },
  },
  created() {
    this.fetchCoursesDetailUser();
  },
  computed: {
    price() {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "IDR",
      });

      return formatter.format(this.course.price);
    },
  },
};
</script>

<style>
#BuyPage .card {
  min-width: 600px;
}

#BuyPage span {
  font-weight: 400;
  font-family: "Poppins", sans-serif;
}

#BuyPage .btn {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: italic;
}

#BuyPage .btn-orange {
  background-color: #fc7901;

  color: #ffffff;
}

#BuyPage .btn-orange:hover {
  background-color: #eb5e0b;
}

#BuyPage .btn-back {
  background-color: #6c757d;
  color: #ffffff;
}
#BuyPage .btn-back:hover {
  background-color: #5c636a;
}
</style>
