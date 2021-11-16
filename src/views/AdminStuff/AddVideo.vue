<template>
  <section id="AddVideo" class="stationary-page d-flex justify-content-center">
    <div class="wrapper d-flex justify-content-center align-items-center">
      <div class="card p-5 rounded">
        <form
          enctype="multipart/form-data"
          @submit.prevent="uploadVideo"
          class="d-flex flex-column"
        >
          <h2 class="mb-4">Add Video</h2>
          <label>Video</label>
          <input
            required
            type="file"
            accept="video/mp4,video/x-m4v,video/*"
            name="Videos"
            class="form-control mt-1 mb-3"
            @change="addVideo"
          />
          <input type="submit" value="Submit" class="btn mt-3" />
          <router-link to="/admin" class="form-control mt-3 btn btn-back"
            >Back</router-link
          >
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { alertError, alertLoading, LoadingDone } from "../../apis/swal";

export default {
  name: "AddVideo",
  data: function () {
    return {
      videos: [{ file: "" }],
    };
  },
  methods: {
    addVideo(event) {
      this.videos[0].file = event.target.files[0];
    },

    uploadVideo(e) {
      const files = new FormData(e.target);

      const payload = {
        files: files,
        courseId: this.$route.params.courseId,
      };
      alertLoading();
      this.$store
        .dispatch("addVideoAdmin", payload)
        .then(() => {
          this.$router.push("/admin");
          LoadingDone();
        })
        .catch((err) => {
          alertError(err.message);
        });
    },
  },
};
</script>

<style>
#AddVideo .card {
  min-width: 600px;
  height: fit-content;
}

#AddVideo .btn {
  background-color: #eb5e0b;
  color: #f8f1f1;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: italic;
}

#AddVideo .btn:hover {
  background-color: #ce5109;
}
#AddVideo .btn-back {
  background-color: #6c757d;
  color: #f8f1f1;
}
#AddVideo .btn-back:hover {
  background-color: #5c636a;
}
</style>
