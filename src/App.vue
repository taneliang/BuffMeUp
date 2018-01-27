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
                <li><a href="#buffets">Today</a></li> <!-- #buffets should be renamed to #today -->
                <li><router-link to="/history">History</router-link></li>
                <li><router-link to="/faq">FAQ</router-link></li>
                <li><router-link to="/post">Post</router-link></li>
             </ul>
          </div>
       </div>
    </div>
    <div class="container" style="padding-top: 65px;">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: "app",
};
</script>
