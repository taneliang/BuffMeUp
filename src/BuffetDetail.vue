<template>
  <div id="buffet">
<<<<<<< HEAD
    <h3>Buffet des {{ buffet.description }}</h3>
=======
    <h3>Buffet Name: {{ buffet.description }}</h3>
    <p>Location: {{buffet.location}}</p>
    <p>Is food halal: {{buffet.halal}}</p>
    <p>Amount of food left (0-1): {{buffet.foodremaining}}</p>
    <p>Buffet still available: {{buffet.open}}</p>
    <p>Clearing time: {{buffet.time.toLocaleString()}}</p>
>>>>>>> 71829cc960b4e69ee7fa3b36707079f1a1d23613
  </div>
</template>

<script>
export default {
  name: "buffet-detail",
  props: ["buffet"]
};
</script>
