import VueRouter from "vue-router";
import App from "./App.vue";
import Faq from "./Faq.vue";
import Buffets from "./Buffets.vue";
import SubmissionForm from "./SubmissionForm.vue";
import BuffetHistory from "./BuffetHistory.vue";

Vue.use(VueRouter);

const routes = [
  { path: "*", redirect: "/buffets" },
  { path: "/history", component: BuffetHistory },
  { path: "/buffets", component: Buffets },
  { path: "/faq", component: Faq },
  { path: "/post", component: SubmissionForm }
];
const router = new VueRouter({ routes, mode: "history" });

new Vue({
  el: "#app",
  template: "<App/>",
  components: { App },
  router
});
