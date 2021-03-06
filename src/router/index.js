import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "@/views/HomePage.vue";
import AboutPage from "@/views/AboutPage.vue";
import LoginPage from "@/views/LoginPage.vue";
import RegisterPage from "@/views/RegisterPage.vue";
import CoursesPage from "@/views/CoursesPage.vue";

import MyCoursesPage from "@/views/MyCoursesPage.vue";
import MyCourseDetail from "@/views/UserStuff/MyCourseDetail.vue";
import CourseDetailPage from "@/views/CourseDetailPage.vue";
import BuyPage from "@/views/BuyPage.vue";
import AdminPage from "@/views/AdminPage.vue";
import AddCourse from "@/views/AdminStuff/AddCourse.vue";
import AddVideo from "@/views/AdminStuff/AddVideo.vue";
import UpdateVideo from "@/views/AdminStuff/UpdateVideo.vue";
import CourseDetailAdmin from "@/views/AdminStuff/CourseDetailAdmin.vue";
import UpdateCourse from "@/views/AdminStuff/UpdateCourse.vue";

import UpdateUser from "@/views/UserStuff/UpdateUser.vue";
import store from "../store";
import { alertError } from "../apis/swal";

Vue.use(VueRouter);

const routes = [
  // TODO bikin landingpage
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/about",
    name: "AboutPage",
    component: AboutPage,
  },
  {
    path: "/courses",
    name: "Courses",
    component: CoursesPage,
    beforeEnter: function (to, from, next) {
      if (localStorage.getItem("access_token")) {
        if (store.state.role !== "User") {
          next({ path: "/" });
        } else {
          next();
        }
      } else {
        next();
      }
    },
  },
  // TODO tambahin comment
  {
    path: "/courses/:courseId",
    name: "CourseDetail",
    component: CourseDetailPage,
    beforeEnter: function (to, from, next) {
      if (localStorage.getItem("access_token")) {
        if (store.state.role !== "User") {
          next({ path: "/" });
        } else {
          next();
        }
      } else {
        next();
      }
    },
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
    beforeEnter: function (to, from, next) {
      if (localStorage.getItem("access_token")) {
        next({ path: "/" });
      } else {
        next();
      }
    },
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterPage,
    beforeEnter: function (to, from, next) {
      if (localStorage.getItem("access_token")) {
        next({ path: "/" });
      } else {
        next();
      }
    },
  },
  {
    path: "/my-courses",
    name: "MyCourses",
    component: MyCoursesPage,
    beforeEnter: function (to, from, next) {
      if (!localStorage.getItem("access_token")) {
        next({ path: "/login" });
      } else if (store.state.role !== "User") {
        next({ path: "/" });
      } else {
        next();
      }
    },
  },
  {
    path: "/my-courses/:courseId",
    name: "MyCourseDetail",
    component: MyCourseDetail,
    beforeEnter: function (to, from, next) {
      if (!localStorage.getItem("access_token")) {
        next({ path: "/login" });
      } else if (store.state.role !== "User") {
        next({ path: "/" });
      } else {
        next();
      }
    },
  },
  {
    path: "/update-profile",
    name: "UpdateUser",
    component: UpdateUser,
    beforeEnter: function (to, from, next) {
      if (!localStorage.getItem("access_token")) {
        next({ path: "/login" });
      } else if (store.state.role !== "User") {
        next({ path: "/" });
      } else {
        next();
      }
    },
  },
  {
    path: "/buy/:courseId",
    name: "BuyPage",
    component: BuyPage,
    beforeEnter: function (to, from, next) {
      if (!localStorage.getItem("access_token")) {
        next({ path: "/login" });
      } else if (store.state.role !== "User") {
        next({ path: "/" });
      } else {
        next();
      }
    },
  },
  // ! Admin
  {
    path: "/admin",
    name: "AdminPage",
    component: AdminPage,
    beforeEnter: function (to, from, next) {
      if (store.state.isLoggedIn === false) {
        next({ path: "/login" });
      } else if (store.state.role !== "Admin") {
        next({ path: "/" });
      } else {
        next();
      }
    },
  },
  {
    path: "/add-course",
    name: "AddCourse",
    component: AddCourse,
    beforeEnter: function (to, from, next) {
      if (store.state.isLoggedIn === false) {
        next({ path: "/login" });
      } else if (store.state.role !== "Admin") {
        next({ path: "/" });
      } else {
        next();
      }
    },
  },
  {
    path: "/add-video/:courseId",
    name: "AddVideo",
    component: AddVideo,
    beforeEnter: function (to, from, next) {
      if (store.state.isLoggedIn === false) {
        next({ path: "/login" });
      } else if (store.state.role !== "Admin") {
        next({ path: "/" });
      } else {
        next();
      }
    },
  },
  {
    path: "/update-video/:videoId",
    name: "UpdateVideo",
    component: UpdateVideo,
    beforeEnter: function (to, from, next) {
      if (store.state.isLoggedIn === false) {
        next({ path: "/login" });
      } else if (store.state.role !== "Admin") {
        next({ path: "/" });
      } else {
        next();
      }
    },
  },
  {
    path: "/admin/course/:courseId",
    name: "CourseDetailAdmin",
    component: CourseDetailAdmin,
    beforeEnter: function (to, from, next) {
      if (store.state.isLoggedIn === false) {
        next({ path: "/login" });
      } else if (store.state.role !== "Admin") {
        next({ path: "/" });
      } else {
        next();
      }
    },
  },
  {
    path: "/update-course/:courseId",
    name: "UpdateCourse",
    component: UpdateCourse,
    beforeEnter: function (to, from, next) {
      if (store.state.isLoggedIn === false) {
        next({ path: "/login" });
      } else if (store.state.role !== "Admin") {
        next({ path: "/" });
      } else {
        next();
      }
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  // scrollBehavior() {
  //   return { x: 0, y: 0 };
  // },
});

router.beforeEach(async (to, from, next) => {
  if (localStorage.getItem("access_token")) {
    store.commit("IS_LOGGED_IN", true);
    await store
      .dispatch("fetchUserDetail")
      .then((result) => {
        store.commit("SET_ROLE", result.role);
      })
      .catch((err) => {
        alertError(err.message);
        localStorage.removeItem("access_token");
        store.commit("IS_LOGGED_IN", false);
        if (to.path !== "/") {
          next({ path: "/" });
        }
      });
  }
  next();
});

export default router;
