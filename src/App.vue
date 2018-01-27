<template>
  <div id="app">
    <div class="navbar navbar-inverse navbar-fixed-top navbar-colour">
        <div class="container">
          <div class="navbar-header">
             <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                     data-target="#collapse-menu">
                   <span class="icon-bar"></span>
                   <span class="icon-bar"></span>
                   <span class="icon-bar"></span>
             </button>
             <a class="navbar-brand" href="#info">BuffMeUp</a>
          </div>
          <div class="collapse navbar-collapse" id="collapse-menu">
             <ul class="nav navbar-nav">
                <li><a href="#today">Today</a></li>
                <li><a href="#history">History</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#post">Post</a></li>
             </ul>
          </div>
       </div>
    </div>
    <div class="container" style="padding-top: 65px;">
      <buffets></buffets>
      <faq></faq>
    </div>
  </div>
</template>

<script>
import Faq from "./Faq.vue";
import Buffets from "./Buffets.vue";

export default {
  name: "app",
  components: { Faq, Buffets }
};
</script>
