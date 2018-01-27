<template>
  <div id="subform">
    <h2> Submission Form </h2>  </br>
    <form>
      <div>
          <label for="location">Location:</label>
          <input
            v-model="location"
            id="location"
            name="buff_location"
            placeholder="E.g. Yusof Ishak House">
      </div>
      <div>
          <label for="halal">Buffet is Halal  </label>
          <input
            type="checkbox"
            id="halal"
            name="buff_halal"
            v-model="is_halal">
      </div>
      <div>
          <label for="desc">Description:</label>
          <textarea v-model="desc" placeholder=
            "Description of the buffet i.e. Type of food available">
          </textarea>

      </div>
      <button type="submit" v-on:click="onSubmit"> Submit </button>
    </form>
  </div>
</template>

<script>
import db from "./datab";

export default {
  name: "subform",
  methods: {
    onSubmit(e) {
      e.preventDefault();
      db
        .collection("Buffets")
        .add({
          description: this.desc,
          location: this.location,
          halal: this.is_halal,
          open: true,
          foodremaining: 0.5,
          time: new Date()
        })
        .then(function(docRef) {
          console.log("Document successfully written! ID:", docRef.id);
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
        });
    }
  }
};
</script>
