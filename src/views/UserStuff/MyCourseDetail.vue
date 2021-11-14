<template>
  <section
    id="MyCourseDetail"
    class="stationary-page d-flex justify-content-center"
  >
    <div class="wrapper">
      <div class="row">
        <div class="col-9">
          <h3>{{ course.name }}</h3>
          <hr />
          <strong>{{ displayed.name }}</strong>
          <br />
          <div class="videoContainer mt-1 mb-3">
            <iframe :src="displayed.videoUrl" frameborder="0"></iframe>
          </div>
          <strong>Description</strong>
          <p>{{ course.description }}</p>
        </div>
        <div class="col-3">
          <button
            v-for="(video, idx) in course.Videos"
            :key="video.id"
            @click="changeVideo(idx)"
            :class="index === idx ? 'btn w-100 mt-1 active' : 'btn w-100 mt-1'"
          >
            {{ video.name }}
          </button>

          <router-link to="/my-courses" class="btn btn-back w-100 mt-3"
            >Back</router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { alertError } from "../../apis/swal";

export default {
  name: "MyCourseDetail",
  data: function () {
    return {
      course: {},
      displayed: {},
      index: 0,
    };
  },
  methods: {
    changeVideo(idx) {
      this.displayed = this.course.Videos[idx];
      this.index = idx;
    },
    fetchUserCourseDetail() {
      this.$store
        .dispatch("fetchUserCourseDetail", this.$route.params)
        .then((result) => {
          this.course = result.Course;
          this.displayed = result.Course.Videos[0];
          this.index = 0;
        })
        .catch((err) => {
          alertError(err.message);
          this.$router.push("/my-courses");
        });
    },
  },
  created() {
    this.fetchUserCourseDetail();
  },
};
</script>

<style>
#MyCourseDetail h3 {
  color: #eb5e0b;
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  font-style: italic;
}

#MyCourseDetail strong {
  font-size: 1.3em;
}

#MyCourseDetail span {
  color: #eb5e0b;
  background-color: #a3d2ca;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: italic;
  width: fit-content;
  border-radius: 5px;
  padding: 3px 15px;
}

#MyCourseDetail .videoContainer {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
}

#MyCourseDetail .videoContainer iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}

#MyCourseDetail .btn {
  background-color: #a3d2ca;
  color: #eb5e0b;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: italic;
}
#MyCourseDetail .btn:hover {
  background-color: #8fcac0;
}

#MyCourseDetail .active {
  background-color: #eb5e0b;
  color: #f8f1f1;
}
#MyCourseDetail .active:hover {
  background-color: #ce5109;
  color: #f8f1f1;
}

#MyCourseDetail .btn-back {
  background-color: #6c757d;
  color: #f8f1f1;
}
#MyCourseDetail .btn-back:hover {
  background-color: #5c636a;
}
</style>
