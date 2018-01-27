<template>
  <div id="subform">
    <h2> Submission Form </h2>  </br>
    <form>
      <div>
          <label for="location">Location:</label>
          <input
            v-model="message" id="location"
            name="buff_location"
            placeholder = "E.g. Yusof Ishak House">
      </div>
      <div>
          <label for="halal">Buffet is Halal  </label>
          <input
            type="checkbox"
            id="halal"
            name="buff_halal"
            v-model = "checked">
      </div>
      <div>
          <label for="desc">Description:</label>
          <textarea v-model="buff_desc" placeholder=
            "Description of the buffet i.e. Type of food available">
          </textarea>
          <p>Description is: {{buff_desc}}</p>

      </div>
      <button type="submit"> Submit </button>
    </form>
<!-- <p>Description is: {{buff_desc}}</p> -->
  </div>
</template>

<script>
//import db from "./datab";

// console.log(buff_desc);
// db
//   .collection("Buffets")
//   .add({
//     description: "AMAZING",
//     halal: true,
//     open: true,
//     foodremaining: 0.5
//   })
//   .then(function(docRef) {
//     console.log("Document successfully written! ID:", docRef.id);
//   })
//   .catch(function(error) {
//     console.error("Error writing document: ", error);
//   });
//
export default {
  name: "subform"
};
</script>
