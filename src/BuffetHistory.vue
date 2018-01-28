<template>
<div class="container">
   <div class="row">
  <div id="history">
    <h1>Past Buffets</h1>
    <buffet-detail v-for="buffet in buffets" display-date = "true" v-bind:buffet="buffet.obj" v-bind:buffet-id="buffet.id" v-bind:key="buffet.id"></buffet-detail>
  </div>
  <div class="clearfix visible-sm-block"></div>
     </div> <!-- End row -->
</div> <!-- End container -->
</template>

<script>
import db from "./datab";
import BuffetDetail from "./BuffetDetail.vue";

const currenttime = new Date(); //Creates a new date object when the page is created.

export default {
  name: "history",
  data() {
    return {
      buffets: [],
      queryUnsubscribe: db
        .collection("Buffets")
        .where("expirytiming", "<", new Date())
        .onSnapshot(
          querySnapshot =>
            (this.buffets = querySnapshot.docs.map(d => ({
              id: d.id,
              obj: d.data()
            })))
        )
    };
  },
  destroyed() {
    this.queryUnsubscribe();
  },
  components: { BuffetDetail }
};
</script>
