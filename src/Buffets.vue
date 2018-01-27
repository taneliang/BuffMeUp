<template>
  <div id="buffets">
    <h2>===Available Buffets===</h2>
    <buffet-detail v-for="buffet in buffets" v-bind:buffet="buffet" v-bind:key="buffet.id"></buffet-detail>
  </div>
</template>

<script>
import db from "./datab";
import BuffetDetail from "./BuffetDetail.vue";

export default {
  name: "buffets",
  data() {
    return {
      buffets: [],
      queryUnsubscribe: db
        .collection("Buffets")
        .onSnapshot(
          querySnapshot =>
            (this.buffets = querySnapshot.docs.map(d => d.data()))
        )
    };
  },
  destroyed() {
    this.queryUnsubscribe();
  },
  components: { BuffetDetail }
};
</script>
