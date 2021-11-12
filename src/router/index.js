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
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/courses",
    name: "Courses",
    component: CoursesPage,
  },
  {
    path: "/courses/:courseId",
    name: "CourseDetail",
    component: CourseDetailPage,
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
    // navguard sama kaya login, arahin ke login
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
    // navguard sama kaya login, arahin ke login
    beforeEnter: function (to, from, next) {
      if (!localStorage.getItem("access_token")) {
        next({ path: "/login" });
      } else {
        next();
      }
    },
  },
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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
