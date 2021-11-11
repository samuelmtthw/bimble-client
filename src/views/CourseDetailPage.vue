<template>
  <section
    id="CourseDetail"
    class="stationary-page d-flex justify-content-center"
  >
    <div class="wrapper">
      <div class="row">
        <div class="col-2">
          <h3>{{ course.name }}</h3>
          <strong>Rp. {{ course.price }}</strong> <br />
          <button class="btn mt-4">Purchase Now</button>
        </div>
        <div class="col-8">
          <div class="vidContainer">
            <iframe :src="course.Videos[0].videoUrl" frameborder="0" />
          </div>
        </div>
        <div class="col-2">
          <strong>Description</strong>
          <hr />
          <p>{{ course.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CourseDetailPage",
  data: function () {
    return {
      course: {
        id: 1,
        name: "Program Linear",
        description:
          "Program Linear adalah bagian matematika yang membahas cara menentukan nilai optimum suatu fungsi – dinamakan fungsi obyektif atau fungsi tujuan – pada suatu sistem yang dibatasi beberapa kendala. Ada dua macam nilai optimum yang akan ditentukan, yaitu nilai maksimum dan nilai minimum.",
        price: 145000,
        thumbnailUrl:
          "https://i.ytimg.com/vi/WJr11FExG7s/hqdefault.jpg?s…RUAAIhCGAE=&rs=AOn4CLAImD8rRbQR7cuFCw3Z_xsjLlr1Tg",
        difficulty: "medium",
        status: "active",
        rating: 8,
        CategoryId: 1,
        Videos: [
          {
            id: 1,
            videoUrl: "https://www.youtube.com/embed/WJr11FExG7s",
          },
        ],
      },
    };
  },
  methods: {
    fetchCourseDetailUser() {
      this.$store
        .dispatch("fetchCourseDetailUser")
        .then((result) => {
          this.course = result;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    // this.fetchCourseDetailUser();
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

#CourseDetail .vidContainer {
  min-height: 100%;
}

#CourseDetail .vidContainer iframe {
  width: 100%;
  height: 500px;
}

#CourseDetail .btn {
  background-color: #a3d2ca;
  color: #eb5e0b;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: italic;
}

#CourseDetail .btn:hover {
  background-color: #8fcac0;
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
