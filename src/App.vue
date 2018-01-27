<template>
  <div id="app">
    <h1>Buffmeup</h1>
    <buffets></buffets>
    <faq></faq>
  </div>
</template>

<script>
import Faq from './Faq.vue'
import Buffets from './Buffets.vue'

export default {
  name: "app",
  components: { Faq, Buffets }
};

</script>
