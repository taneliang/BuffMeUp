<template>
  <div id="subform">
    <h2> Submission Form </h2>  </br>
    <form>
      <div id = "location">
          <label for="location">Location:</label>
          <input
            v-model="location"
            id="location"
            name="buff_location"
            placeholder="E.g. Yusof Ishak House">
      </div>
      <div id = "foodremaining">
        <label for="foodremaining">Amount of food remaining:</label>
          <input type="text" v-model="foodrem">
      </div>
      <div id = "halal">
          <label for="halal">Buffet is Halal  </label>
          <input
            type="checkbox"
            id="halal"
            name="buff_halal"
            v-model="is_halal">
      </div>
      <div id = "expirytiming">
        <label for="exptime">Expiry timing:</label>
        <select name="exphrs" v-model = "exptimehrs">
          <option v-for="time in ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23']">{{time}}</option>
        </select>
        <select name="expmins" v-model = "exptimemins">
          <option v-for="mins in ['00','15','30','45']">{{mins}}</option>
        </select>
      </div>
      <div id = "description">
          <label for="desc">Description:</label>a
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
      const exphrs = parseInt(this.exptimehrs);
      console.log(this.exptimehrs, exphrs, this.exptimemins, this.foodrem);
      db
        .collection("Buffets")
        .add({
          description: this.desc,
          location: this.location,
          halal: this.is_halal,
          open: true,
          foodremaining: this.foodrem,
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
