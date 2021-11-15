<template>
  <section
    id="CourseDetailAdmin"
    class="stationary-page d-flex justify-content-center"
  >
    <div class="wrapper">
      <div class="row">
        <div class="col-9">
          <h3>{{ course.name }}</h3>
          <hr />

          <strong>{{ displayed.name }}</strong
          ><br />
          <button class="btn btn-back my-1" @click="updateVideo(displayed.id)">
            Update Video
          </button>
          <button
            class="btn btn-danger my-1 mx-3"
            @click="deleteVideo(displayed.id)"
          >
            Delete Video
          </button>

          <br />
          <div class="videoContainer mt-1 mb-3">
            <iframe :src="displayed.videoUrl" frameborder="0"></iframe>
          </div>
          <strong>Description</strong>
          <p>{{ course.description }}</p>
        </div>
        <div class="col-3">
          <div class="d-flex justify-content-between">
            <span>{{ difficulty }}</span>
            <span>{{ rating }}</span>
          </div>
          <hr />
          <strong>{{ price }}</strong>
          <button
            v-for="(video, idx) in course.Videos"
            :key="video.id"
            @click="changeVideo(idx)"
            :class="index === idx ? 'btn w-100 mt-1 active' : 'btn w-100 mt-1'"
          >
            {{ video.name }}
          </button>

          <router-link to="/admin" class="btn btn-back w-100 mt-3"
            >Back</router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Swal from "sweetalert2";
import { alertError, alertSuccess } from "../../apis/swal";
export default {
  name: "CourseDetailAdmin",
  data: function () {
    return {
      course: {},
      displayed: {},
      index: 0,
      rating: "",
    };
  },
  methods: {
    updateVideo(videoId) {
      this.$router.push(`/update-video/${videoId}`);
    },
    deleteVideo(videoId) {
      Swal.fire({
        title: "Are you sure?",
        text: `You will delete video with name: ${this.displayed.name}!`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.$store
            .dispatch("deleteVideoAdmin", videoId)
            .then((result) => {
              alertSuccess(result.message);
              this.fetchCoursesDetailAdmin();
            })
            .catch((err) => {
              alertError(err.message);
            });
        } else {
          alertSuccess("Processs canceled");
        }
      });
    },
    changeVideo(idx) {
      this.displayed = this.course.Videos[idx];
      this.index = idx;
    },
    fetchCoursesDetailAdmin() {
      this.$store
        .dispatch("fetchCoursesDetailAdmin", this.$route.params)
        .then((result) => {
          this.course = result;
          this.displayed = result.Videos[0];
          this.index = 0;
        })
        .catch((err) => {
          alertError(err.message);
          this.$router.push("/admin");
        });
    },
    fetchCourseRating() {
      this.$store
        .dispatch("fetchCourseRating", this.$route.params)
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
  created() {
    this.fetchCoursesDetailAdmin();
    this.fetchCourseRating();
  },
  computed: {
    price() {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "IDR",
      });

      return formatter.format(this.course.price);
    },
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
  },
};
</script>

<style>
#CourseDetailAdmin h3 {
  color: #eb5e0b;
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  font-style: italic;
}

#CourseDetailAdmin strong {
  font-size: 1.3em;
}

#CourseDetailAdmin span {
  color: #eb5e0b;
  background-color: #a3d2ca;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: italic;
  width: fit-content;
  border-radius: 5px;
  padding: 3px 15px;
}

#CourseDetailAdmin .videoContainer {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
}

#CourseDetailAdmin .videoContainer iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}

#CourseDetailAdmin .btn {
  background-color: #a3d2ca;
  color: #eb5e0b;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: italic;
}
#CourseDetailAdmin .btn:hover {
  background-color: #8fcac0;
}

#CourseDetailAdmin .active {
  background-color: #eb5e0b;
  color: #f8f1f1;
}
#CourseDetailAdmin .active:hover {
  background-color: #ce5109;
  color: #f8f1f1;
}

#CourseDetailAdmin .btn-back {
  background-color: #6c757d;
  color: #f8f1f1;
}
#CourseDetailAdmin .btn-back:hover {
  background-color: #5c636a;
}

#CourseDetailAdmin .btn-danger {
  background-color: #dc3545;
  color: #f8f1f1;
}
#CourseDetailAdmin .btn-danger:hover {
  background-color: #bb2d3b;
}
</style>
