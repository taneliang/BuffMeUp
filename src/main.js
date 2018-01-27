import App from "./App.vue";
import firebase from "firebase";
import "@firebase/firestore";

firebase.initializeApp({
  apiKey: "",
  authDomain: "https://haxaton.firebaseio.com/",
  projectId: "haxaton"
});

new Vue({
  el: "#app",
  template: "<App/>",
  components: { App }
});
