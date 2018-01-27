import App from "./App.vue";
import firebase from "firebase";
import "@firebase/firestore";

firebase.initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "https://haxaton.firebaseio.com/",
  projectId: "haxaton"
});

new Vue({
  el: "#app",
  template: "<App/>",
  components: { App }
});
