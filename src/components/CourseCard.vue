<template>
  <router-link
    :to="`/courses/${course.id}`"
    data-aos="fade-up"
    data-aos-duration="600"
  >
    <div class="CourseCard card p-3">
      <div class="imgContainer">
        <img :src="course.thumbnailUrl" alt="Thumbnail" class="w-100 mb-3" />
      </div>
      <h6>{{ course.name }}</h6>
      <strong>{{ price }}</strong>
      <hr />
      <p>
        <span> {{ difficulty }}</span>
        <span> {{ rating }}</span>
      </p>
    </div>
  </router-link>
</template>

<script>
import { alertError } from "../apis/swal";
export default {
  name: "CourseCard",
  props: ["course"],
  data: function () {
    return {
      rating: "",
    };
  },
  methods: {
    toDetails() {
      this.$router.push(`/courses/${this.course.id}`);
    },
    fetchCourseRating() {
      this.$store
        .dispatch("fetchCourseRating", { courseId: this.course.id })
        .then((result) => {
          if (result.rating) {
            this.rating = `${result.rating} / 10`;
          } else {
            this.rating = "Not Rated";
          }
        })
        .catch((err) => {
          alertError(err.message);
        });
    },
  },
  computed: {
    difficulty() {
      let result = "";
      if (this.course.difficulty) {
        result = this.course.difficulty[0].toUpperCase();

        for (let i = 1; i < this.course.difficulty.length; i++) {
          result += this.course.difficulty[i];
        }
      }
      return result;
    },
    price() {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "IDR",
      });

      return formatter.format(this.course.price);
    },
  },
  created() {
    this.fetchCourseRating();
  },
};
</script>

<style>
.CourseCard {
  width: 350px;
  margin: 0 0 15px 15px;
  border-radius: 15px;
  transition-duration: 150ms;
  border-width: 1px;
  border-color: #ffffff;
  box-shadow: 0 5px 35px rgba(0, 0, 0, 0.18);
}

.CourseCard img {
  border-radius: 15px;
}

.CourseCard strong {
  color: #fc7901;
  font-size: 1.2em;
}

.CourseCard span {
  color: #fff;
  background-color: #fc7901;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: italic;
  width: fit-content;
  border-radius: 5px;
  padding: 3px 15px;
  margin-right: 5px;
}

.CourseCard:hover {
  border-color: #fc7901;
}
</style>
