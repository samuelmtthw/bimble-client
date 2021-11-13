<template>
  <router-link :to="`/courses/${course.id}`">
    <div class="CourseCard card p-3">
      <div class="imgContainer">
        <img :src="course.thumbnailUrl" alt="Thumbnail" class="w-100 mb-3" />
      </div>
      <h6 class="mb-3">{{ course.name }}</h6>

      <p>
        <strong>{{ price }}</strong>
        <span>{{ difficulty }}</span>
      </p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "CourseCard",
  props: ["course"],
  methods: {
    toDetails() {
      this.$router.push(`/courses/${this.course.id}`);
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
.CourseCard {
  width: 350px;
  margin: 0 0 15px 15px;
  border-radius: 15px;
  transition-duration: 150ms;
  border-width: 2px;
  border-color: #eee;
}

.CourseCard img {
  border-radius: 15px;
}

.CourseCard strong {
  color: #eb5e0b;
  font-size: 1.2em;
}

.CourseCard span {
  float: right;
  color: #eb5e0b;
  background-color: #a3d2ca;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: italic;
  width: fit-content;
  border-radius: 5px;
  padding: 3px 15px;
}

.CourseCard:hover {
  border-color: #a3d2ca;
}
</style>
