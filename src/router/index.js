import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "@/views/HomePage.vue";
import LoginPage from "@/views/LoginPage.vue";
import RegisterPage from "@/views/RegisterPage.vue";
import CoursesPage from "@/views/CoursesPage.vue";

import MyCoursesPage from "@/views/MyCoursesPage.vue";
import CourseDetailPage from "@/views/CourseDetailPage.vue";
import BuyPage from "@/views/BuyPage.vue";
import AdminPage from "@/views/AdminPage.vue";
import AddCourse from "@/views/AdminStuff/AddCourse.vue";
import UpdateCourse from "@/views/AdminStuff/UpdateCourse.vue";

import UpdateUser from "@/views/UserStuff/UpdateUser.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  // TODO bikin landingpage
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  // TODO bikin pagination
  {
    path: "/courses",
    name: "Courses",
    component: CoursesPage,
  },
  // TODO tambahin comment
  {
    path: "/courses/:courseId",
    name: "CourseDetail",
    component: CourseDetailPage,
  },
  // TODO tambahin google login
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
  // * done
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
      if (store.state.role !== "Admin" || store.state.isLoggedIn === false) {
        next({ path: "/login" });
      } else {
        next();
      }
    },
  },
  // TODO error nav guard
  {
    path: "/add-course",
    name: "AddCourse",
    component: AddCourse,
    // beforeEnter: function (to, from, next) {
    //   if (store.state.role !== "Admin" || store.state.isLoggedIn === false) {
    //     next({ path: "/login" });
    //   } else {
    //     next();
    //   }
    // },
  },
  // TODO navguard
  {
    path: "/update-course/:courseId",
    name: "UpdateCourse",
    component: UpdateCourse,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
