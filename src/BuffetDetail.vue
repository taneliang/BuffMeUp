<template>
  <div id="buffet">
    <h3>Buffet des {{ buffet.description }}</h3>
  </div>
</template>

<script>
export default {
  name: "buffet-detail",
  props: ["buffet"]
};
</script>
