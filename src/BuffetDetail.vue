<template>
  <div id="buffet">
    <h3>Buffet Name: {{ buffet.description }}</h3>
    <p>Location: {{buffet.location}}</p>
    <p>Is food halal: {{buffet.halal}}</p>
    <p>Amount of food left (0-1): {{buffet.foodremaining}}</p>
    <p>Buffet still available: {{buffet.open}}</p>

    <p>Clearing time: {{buffet.time.toLocaleString()}}</p>
  </div>
</template>

<script>
export default {
  name: "buffet-detail",
  props: ["buffet"]
};
</script>
