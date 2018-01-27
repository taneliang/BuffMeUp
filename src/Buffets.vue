<template>
  <div id="buffets">
    <h2>===Available Buffets===</h2>
    <!-- Buffets here -->
    <p>{{ buffets.length }}</p>
  </div>
</template>

<script>
import db from "./datab";
export default {
  name: "buffets",
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
  }
};
</script>
