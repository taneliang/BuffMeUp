<template>
  <div id="history">
    <h1>Past Buffets</h1>
    <buffet-detail v-for="buffet in buffets" v-bind:buffet="buffet" v-bind:key="buffet.id"></buffet-detail>
  </div>
</template>

<script>
import db from "./datab";
import BuffetDetail from "./BuffetDetail.vue";

const currenttime = new Date(); //Creates a new date object when the page is created.

export default {
  name: "history",
  data() {
    db
      .collection("Buffets")
      .get()
      .then(
        querySnapshot => (this.buffets = querySnapshot.docs.map(d => d.data()))
      );
    return {
      buffets: []
    };
  },
  components: { BuffetDetail }
};
</script>
