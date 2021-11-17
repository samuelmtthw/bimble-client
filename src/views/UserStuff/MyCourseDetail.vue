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
          <strong
            >Comments for this video ({{ displayed.Comments.length }}):</strong
          >
          <div class="card p-3">
            <form
              @submit.prevent="addCommentUser"
              class="d-flex justify-content-between mb-3"
            >
              <input
                type="text"
                placeholder="Add a comment"
                class="form-control w-75 d-inline-block"
                v-model="comment"
              />
              <div class="w-25 d-flex justify-content-end">
                <button
                  type="submit"
                  class="btn active d-inline-block class w-75"
                >
                  Send
                </button>
              </div>
            </form>
            <div
              v-for="comment in displayed.Comments"
              :key="comment.id"
              class="border-top pt-3 mb-3"
            >
              <p class="mb-1">{{ comment.User.name }}</p>
              <h6 class="mb-0">{{ comment.comment }}</h6>
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
import {
  alertError,
  alertSuccess,
  alertLoading,
  swalDone,
} from "../../apis/swal";

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
      alertLoading();
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
      alertLoading();
      this.$store
        .dispatch("fetchUserCourseDetail", this.$route.params)
        .then((result) => {
          this.course = result.Course;
          this.displayed = result.Course.Videos[0];
          this.index = 0;
          swalDone();
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
          this.comment = "";
          this.fetchUserCourseDetail();
          this.fetchUserCourseRating();
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
  color: #fc7901;
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  font-style: italic;
}

#MyCourseDetail strong {
  font-size: 1.3em;
}

#MyCourseDetail span {
  color: #fff;
  background-color: #fc7901;
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
  background-color: #6c757d;
  color: #ffffff;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: italic;
}
#MyCourseDetail .btn:hover {
  background-color: #5c636a;
}

#MyCourseDetail .active {
  background-color: #fc7901;
  color: #ffffff;
}
#MyCourseDetail .active:hover {
  background-color: #eb5e0b;
  color: #ffffff;
}

#MyCourseDetail .btn-back {
  background-color: #6c757d;
  color: #ffffff;
}
#MyCourseDetail .btn-back:hover {
  background-color: #5c636a;
}
</style>
