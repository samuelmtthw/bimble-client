<template>
  <router-link :to="`/my-courses/${courseId}`">
    <div class="MyCourseCard card p-3">
      <div class="imgContainer">
        <img :src="course.thumbnailUrl" alt="Thumbnail" class="w-100 mb-3" />
      </div>
      <h6 class="mb-3">{{ course.name }}</h6>

      <p>
        <span>{{ difficulty }}</span>
      </p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "MyCourseCard",
  props: ["course", "courseId"],
  methods: {
    toDetails() {
      console.log(this.courseId);
      this.$router.push(`/my-courses/${this.courseId}`);
    },
  },
  computed: {
    difficulty() {
      return this.course.difficulty.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    },
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
.MyCourseCard {
  width: 250px;
  margin: 0 0 15px 15px;
  border-radius: 15px;
  transition-duration: 150ms;
  border-width: 2px;
  border-color: #eee;
}

.MyCourseCard img {
  border-radius: 15px;
}

.MyCourseCard span {
  color: #eb5e0b;
  background-color: #a3d2ca;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: italic;
  width: fit-content;
  border-radius: 5px;
  padding: 3px 15px;
}

.MyCourseCard:hover {
  border-color: #a3d2ca;
}
</style>
