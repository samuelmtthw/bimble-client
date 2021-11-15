<template>
  <section
    id="CourseDetail"
    class="stationary-page d-flex justify-content-center"
  >
    <div class="wrapper">
      <div class="row">
        <div class="col-2">
          <div class="d-flex flex-column">
            <h3>{{ course.name }}</h3>
            <strong> {{ price }}</strong>
            <h6 class="mt-2">Rating</h6>
            <span>{{ rating }}</span>
            <h6 class="mt-2">Difficulty</h6>
            <span>{{ difficulty }}</span>
          </div>
          <hr />
          <strong class="d-block mb-3">Want full access?</strong>
          <button class="btn w-100" @click="addUserCourseUser">
            Purchase Here
          </button>
        </div>
        <div class="col-10">
          <div class="row">
            <div class="col-9">
              <strong class="d-block mb-3"
                >Spoiler: {{ course.Videos[0].name }}</strong
              >
              <div class="videoContainer">
                <iframe :src="course.Videos[0].videoUrl" frameborder="0" />
              </div>
            </div>
            <div class="col-3">
              <strong class="d-block mb-3">Videos in this course</strong>
              <span
                v-for="(video, idx) in course.Videos"
                :key="video.id"
                :class="
                  idx === 0 ? 'btn w-100 mb-1' : 'btn w-100 mb-1 disabled'
                "
                disabled
              >
                {{ video.name }}
              </span>
            </div>
          </div>
          <br />
          <hr />
          <strong class="d-block mb-1">Description</strong>
          <p>{{ course.description }}</p>
          <strong class="d-block mb-1"
            >Comments for this video ({{ comments.length }}):</strong
          >
          <div
            class="card container"
            v-for="comment in comments"
            :key="comment.id"
          >
            <div class="card-body">
              <div class="text">
                <h6 class="card-title">{{ comment.User.name }}</h6>
                <p>{{ comment.comment }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { alertError } from "../apis/swal";
export default {
  name: "CourseDetailPage",
  data: function () {
    return {
      course: {
        Videos: [{ videoUrl: "" }],
      },
      comments: [],
      rating: "",
    };
  },
  methods: {
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

    fetchCourseDetailUser() {
      this.$store
        .dispatch("fetchCoursesDetailUser", this.$route.params)
        .then((result) => {
          this.course = result;
          if (result.Videos[0]) {
            this.comments = result.Videos[0].Comments;
          } else {
            this.comments = [];
          }
        })
        .catch((err) => {
          alertError(err.message);
          this.$router.push("/courses");
        });
    },
    addUserCourseUser() {
      this.$router.push(`/buy/${this.course.id}`);
    },
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
  created() {
    this.fetchCourseDetailUser();
    this.fetchCourseRating();
  },
};
</script>

<style>
#CourseDetail .col-3 {
  border-radius: 15px;
  height: 100%;
}

#CourseDetail h3 {
  color: #eb5e0b;
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  font-style: italic;
}

#CourseDetail strong {
  font-size: 1.3em;
}

#CourseDetail span {
  color: #eb5e0b;
  background-color: #a3d2ca;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: italic;
  width: fit-content;
  border-radius: 5px;
  padding: 3px 15px;
}

#CourseDetail .videoContainer {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
}

#CourseDetail .videoContainer iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}

#CourseDetail .btn {
  background-color: #eb5e0b;
  color: #f8f1f1;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: italic;
}

#CourseDetail button.btn:hover {
  background-color: #ce5109;
}

#CourseDetail .disabled {
  background-color: #6c757d;
  color: #f8f1f1;
}

* {
  font-family: "Montserrat Alternates", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box !important;
  color: #222;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Poppins", sans-serif;
}

body {
  background-color: #f8f1f1;
}

a {
  text-decoration: none;
}

.wrapper {
  width: 1440px;
  padding: 20px 36px;
}

.stationary-page {
  max-width: 100vw;

  min-height: calc(100vh - 160px);
  padding: 20px 0;
}
</style>
