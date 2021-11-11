import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "@/views/HomePage.vue";
import LoginPage from "@/views/LoginPage.vue";
import RegisterPage from "@/views/RegisterPage.vue";
import CoursesPage from "@/views/CoursesPage.vue";
import ProfilePage from "@/views/ProfilePage.vue";
import MyCoursesPage from "@/views/MyCoursesPage.vue";
import CourseDetailPage from "@/views/CourseDetailPage.vue";
import BuyPage from "@/views/BuyPage.vue";
import AdminPage from "@/views/AdminPage.vue";

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
    path: "/profile",
    name: "Profile",
    component: ProfilePage,
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
  {
    path: "/admin",
    name: "AdminPage",
    component: AdminPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
