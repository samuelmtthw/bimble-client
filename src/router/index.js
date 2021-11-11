import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "@/views/HomePage.vue";
import LoginPage from "@/views/LoginPage.vue";
import RegisterPage from "@/views/RegisterPage.vue";
import CoursesPage from "@/views/CoursesPage.vue";
import MyCoursesPage from "@/views/MyCoursesPage.vue";
import CourseDetailPage from "@/views/CourseDetailPage.vue";
import BuyPage from "@/views/BuyPage.vue";
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
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterPage,
  },
  {
    path: "/my-courses",
    name: "MyCourses",
    component: MyCoursesPage,
  },
  {
    path: "/buy/:courseId",
    name: "BuyPage",
    component: BuyPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
