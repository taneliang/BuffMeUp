<template>
  <div id="buffets">
    <h2>===Available Buffets===</h2>
    <!-- Buffets here -->
    <p>{{ hhh.length }}</p>
  </div>
</template>

<script>
import db from "./datab";
export default {
  name: "buffets",
  data() {
    return {
      hhh: db
        .collection("Buffets")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            console.log(`${doc.id} => ${doc.data()}`);
          });
        })
    };
  }
};
</script>
