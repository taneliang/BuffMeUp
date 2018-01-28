<template>
 <div class="container">
  <div id="subform">
    <h2> Submission Form </h2>  </br>
    <form>
       <div class="form-group">
          <label for="location">Location*</label>
          <input v-model="location" type="text" class="form-control" id="location" placeholder="E.g. Yusof Ishak House">
       </div>

     <!-- <div id = "location">
          <label for="location">Location:</label>
          <input
            v-model="location"
            id="location"
            name="buff_location"
            placeholder="E.g. Yusof Ishak House">
      </div>
      -->

      <!-- Settled -->
      <div id = "expirytiming">
        <label for="exptime">Expiry timing:</label>
        <select name="exphrs" v-model = "exptimehrs">
          <option v-for="time in ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23']">{{time}}</option>
        </select>
        <select name="expmins" v-model = "exptimemins">
          <option v-for="mins in ['00','15','30','45']">{{mins}}</option>
        </select>
      </div>


      <div class="form-group">
          <label for="foodremaining">Amount of food left (%)</label>
          <select class="form-control" v-model="foodrem" id="foodremaining">
            <option>25</option>
            <option>50</option>
            <option>75</option>
            <option>100</option></select>
      </div>


      <!--
      <div id = "foodremaining">
        <label for="foodremaining">Amount of food remaining:</label>
          <input type="text" v-model="foodrem">
      </div>
      -->



      <div class="form-check">
            <label class="form-check-label" for="halal">Buffet is halal?</label>
            <input type="checkbox" v-model="is_halal" class="form-check-input" id="halal">
      </div>

      <!--
      <div id = "halal">
          <label for="halal">Buffet is Halal  </label>
          <input
            type="checkbox"
            id="halal"
            name="buff_halal"
            v-model="is_halal">
      </div>
      -->

      <div class="form-check">
            <label class="form-check-label" for="halal">Cultery Available?</label>
            <input type="checkbox" v-model="has_cutlery" class="form-check-input" id="cultery">
      </div>

      <!--
      <label for="isCulteryAvailable">Cultery Available?</label>
        <fieldset class="form-group">
          <div class="form-check">
            <label class="form-check-label">
              <input type="radio" class="form-check-input" name="isCulteryAvailable" id="CultleryYes" value="true" checked>
              Yes
            </label>
          </div>
          <div class="form-check">
          <label class="form-check-label">
              <input type="radio" class="form-check-input" name="isCulteryAvailable" id="CulteryNo" value="false">
              No
            </label>
          </div>
        </fieldset>

        -->

      <div class="form-group">
          <label for="desc">Food Description*</label>
          <textarea class="form-control" v-model="desc" id="desc" rows="3"></textarea>
      </div>

      <!--
      <div id = "description">
          <label for="desc">Description:</label>
          <textarea v-model="desc" placeholder=
            "Description of the buffet i.e. Type of food available">
          </textarea>
      </div>
      -->

      <!--
      <button type="submit" v-on:click="onSubmit"> Submit </button>
      -->

      <button type="submit" v-on:click="onSubmit" class="btn btn-primary">Submit</button>

    </form>
  </div>
  </div>
</template>

<script>
import db from "./datab";
import router from "./router";

export default {
  name: "subform",
  methods: {
    onSubmit(e) {
      e.preventDefault();
      let valid;
      if (this.location && this.exptimehrs) {
        valid = true;
      } else {
        console.log(this.location, this.exptimehrs);
        valid = false;
      }

      if (valid) {
        const exphrs = parseInt(this.exptimehrs);
        const expmins = parseInt(this.exptimehrs);
        const expdate = new Date();
        expdate.setHours(exphrs);
        expdate.setMinutes(expmins);
        // ===================THIS IS A CONSOLE LOG============================================
        console.log(
          this.exptimehrs,
          exphrs,
          this.exptimemins,
          expmins,
          expdate,
          this.is_halal,
          this.has_cutlery
        );
        db
          .collection("Buffets")
          .add({
            description: this.desc,
            location: this.location,
            halal: this.is_halal || false,
            cutlery: this.has_cutlery || false,
            open: true,
            foodremaining: parseFloat(this.foodrem),
            time: new Date(),
            expirytiming: expdate
          })
          .then(function(docRef) {
            alert("Buffet successfully added! ID:", docRef.id);
            router.push({ path: "/" });
          })
          .catch(function(error) {
            console.error("Error writing document: ", error);
          });
      } else {
        alert("Missing key information!");
      }
    }
  }
};
</script>
