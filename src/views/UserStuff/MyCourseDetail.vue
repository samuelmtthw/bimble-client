<template>
  <section
    id="MyCourseDetail"
    class="stationary-page d-flex justify-content-center"
  >
    <div class="wrapper">
      <div class="row">
        <div class="col-9">
          <div class="d-flex justify-content-between align-items-start">
            <h3>{{ course.name }}</h3>
            <form
              class="d-flex w-25"
              @submit.prevent="addUserCourseRating"
              v-if="showForm"
            >
              <input
                type="number"
                v-model="rating"
                min="1"
                max="10"
                class="form-control mx-2"
                placeholder="Rating"
                required
              />
              <input type="submit" value="Rate" class="btn active" />
            </form>
            <span v-if="!showForm"
              >Your rating for this course : {{ rating }}</span
            >
          </div>
          <hr />
          <strong>{{ displayed.name }}</strong>
          <br />
          <div class="videoContainer mt-1 mb-3">
            <iframe :src="displayed.videoUrl" frameborder="0"></iframe>
          </div>
          <strong>Description</strong>
          <p>{{ course.description }}</p>
          <strong>Comments ({{ displayed.Comments.length }}):</strong>
          <div class="card">
            <form
              @submit.prevent="addCommentUser"
              class="d-flex justify-content-between card-body"
            >
              <input
                type="text"
                placeholder="Add a comment"
                class="form-control w-75 d-inline-block"
                v-model="comment"
              />
              <div class="w-25 d-flex justify-content-end">
                <button type="submit" class="btn d-inline-block class w-75">
                  Send
                </button>
              </div>
            </form>
            <div
              class="container"
              v-for="comment in displayed.Comments"
              :key="comment.id"
            >
              <div class="card-body">
                <div class="text">
                  <p class="card-title">{{ comment.User.name }}</p>
                  <h5>{{ comment.comment }}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3">
          <button
            v-for="(video, idx) in course.Videos"
            :key="video.id"
            @click="changeVideo(idx)"
            :class="index === idx ? 'btn w-100 mb-2 active' : 'btn w-100 mb-2'"
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
import { alertError, alertSuccess } from "../../apis/swal";

export default {
  name: "MyCourseDetail",
  data: function () {
    return {
      course: {},
      displayed: {
        Comments: [],
      },
      index: 0,
      comment: "",
      rating: "",
      showForm: true,
    };
  },
  methods: {
    addUserCourseRating() {
      const payload = {
        courseId: this.$route.params.courseId,
        rating: this.rating,
      };
      this.$store
        .dispatch("addUserCourseRating", payload)
        .then((result) => {
          alertSuccess(
            `You gave course with id ${result.CourseId} a rating of ${result.rating} / 10`
          );
          this.fetchUserCourseRating();
        })
        .catch((err) => {
          alertError(err.message);
        });
    },
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
    addCommentUser() {
      const payload = {
        videoId: this.displayed.id,
        comment: this.comment,
      };

      this.$store
        .dispatch("addCommentUser", payload)
        .then(() => {
          this.fetchUserCourseDetail();
        })
        .catch((err) => {
          alertError(err.message);
        });
    },
    fetchUserCourseRating() {
      const courseId = this.$route.params.courseId;
      this.$store
        .dispatch("fetchUserCourseRating", courseId)
        .then((result) => {
          if (result) {
            this.rating = `${result.rating} / 10`;
            this.showForm = false;
          }
        })
        .catch((err) => {
          alertError(err.message);
        });
    },
  },
  created() {
    this.fetchUserCourseDetail();
    this.fetchUserCourseRating();
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
