<template>
  <section id="AdminPage" class="stationary-page d-flex justify-content-center">
    <div class="wrapper">
      <div class="row">
        <div class="col-2 d-flex flex-column">
          <button
            :class="
              page === 'getCourses'
                ? 'navButton btn mb-3 active'
                : 'navButton btn mb-3'
            "
            @click="changePage('getCourses')"
          >
            Courses
          </button>
          <button
            :class="
              page === 'getUsers'
                ? 'navButton btn mb-3 active'
                : 'navButton btn mb-3'
            "
            @click="changePage('getUsers')"
          >
            Users
          </button>
          <button
            :class="
              page === 'getCategories'
                ? 'navButton btn mb-3 active'
                : 'navButton btn mb-3'
            "
            @click="changePage('getCategories')"
          >
            Categories
          </button>
        </div>
        <div class="col-10">
          <AdminCourses v-if="page === 'getCourses'" />
          <AdminUsers v-if="page === 'getUsers'" />
          <AdminCategories v-if="page === 'getCategories'" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AdminCourses from "./AdminCourses.vue";
import AdminUsers from "./AdminUsers.vue";
import AdminCategories from "./AdminCategories.vue";

export default {
  name: "AdminPage",
  data: function () {
    return {
      page: "getCourses",
    };
  },
  methods: {
    changePage(targetPage) {
      this.page = targetPage;
    },
  },
  components: {
    AdminCourses,
    AdminUsers,
    AdminCategories,
  },
};
</script>

<style>
#AdminPage .navButton {
  background-color: #6c757d;
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: italic;
}

#AdminPage .navButton:hover {
  background-color: #5c636a;
}

#AdminPage .active {
  background-color: #fc7901;
  color: #ffffff;
}
#AdminPage .active:hover {
  background-color: #eb5e0b;
  color: #ffffff;
}
</style>
