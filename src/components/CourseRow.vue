<template>
  <tr>
    <td class="text-center">{{ course.id }}</td>
    <td>{{ course.name }}</td>
    <td>
      <select
        name="status"
        v-model="status"
        @change="handleStatus"
        class="form-select"
      >
        <option value="active" :selected="course.status === 'active'">
          Active
        </option>
        <option value="inactive" selected="course.status === 'inactive'">
          Inactive
        </option>
      </select>
    </td>
    <td>{{ course.Category.name }}</td>
    <td>
      <div class="d-flex flex-row justify-content-between">
        <button
          class="btn actionButton w-25"
          @click.prevent="toDetails(course.id)"
        >
          Details
        </button>
        <button class="btn btn-secondary w-25" @click="toUpdate(course.id)">
          Update
        </button>
      </div>
    </td>
  </tr>
</template>

<script>
import { alertError, alertSuccess } from "../apis/swal";
export default {
  name: "CourseRow",
  props: ["course"],
  data: function () {
    return {
      status: "",
    };
  },
  methods: {
    toUpdate(courseId) {
      this.$router.push(`/update-course/${courseId}`);
    },
    toDetails(courseId) {
      this.$router.push(`/courses/${courseId}`);
    },
    handleStatus() {
      const payload = {
        courseId: this.course.id,
        status: this.status,
      };
      this.$store
        .dispatch("updateCourseStatusAdmin", payload)
        .then(() => {
          alertSuccess(
            `Course status with id ${this.course.id} has been updated`
          );
          this.$emit("updateStatus");
        })
        .catch((err) => {
          alertError(err.message);
        });
    },
  },
  created() {
    this.status = this.course.status;
  },
};
</script>

<style></style>
