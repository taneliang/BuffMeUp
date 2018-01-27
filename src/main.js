import VueRouter from "vue-router";
import App from "./App.vue";
import Faq from "./Faq.vue";
import Buffets from "./Buffets.vue";
import SubmissionForm from "./SubmissionForm.vue";

Vue.use(VueRouter);

const routes = [
  { path: "*", redirect: "/buffets" },
  { path: "/buffets", component: Buffets },
  { path: "/faq", component: Faq },
  { path: "/post", component: SubmissionForm }
];
const router = new VueRouter({ routes });

new Vue({
  el: "#app",
  template: "<App/>",
  components: { App },
  router
});
