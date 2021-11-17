<template>
  <router-link
    :to="`/my-courses/${courseId}`"
    data-aos="fade-up"
    data-aos-duration="600"
  >
    <div class="MyCourseCard card p-3 shadow">
      <div class="imgContainer">
        <img :src="course.thumbnailUrl" alt="Thumbnail" class="w-100 mb-3" />
      </div>
      <h5>{{ course.name }}</h5>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "MyCourseCard",
  props: ["course", "courseId"],
  methods: {
    toDetails() {
      this.$router.push(`/my-courses/${this.courseId}`);
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
};
</script>

<style>
.MyCourseCard {
  width: 250px;
  margin: 0 15px 15px 0;
  border-radius: 15px;
  transition-duration: 150ms;
  border-width: 1px;
  border-color: #ffffff;
}

.MyCourseCard img {
  border-radius: 15px;
}

.MyCourseCard h5 {
  color: #fc7901;

  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: italic;
}

.MyCourseCard:hover {
  border-color: #fc7901;
}
</style>
