import imgur from "imgur";

var imgur = require("imgur");

//setting
imgur.setClientId("aCs53GSs4tga0ikp");

//Getting
imgur.getClientId();

// Saving to disk. Returns a promise.
imgur
  .saveClientId()
  .then(function() {
    console.log("Saved.");
  })
  .catch(function(err) {
    console.log(err.message);
  });

imgur.loadClientId(path).then(imgur.setClientId);

// A single image
imgur
  .uploadFile("/home/kai/kittens.png")
  .then(function(json) {
    console.log(json.data.link);
  })
  .catch(function(err) {
    console.error(err.message);
  });

// All jpegs in a specific folder
// to an album you own
var albumId = "F8KTV";
imgur
  .uploadFile("/home/kai/*.jpg", albumId)
  .then(function(json) {
    console.log(json.data.link);
  })
  .catch(function(err) {
    console.error(err.message);
  });

// Multiple image types from home folder
imgur
  .uploadFile("~/*.(jpg|png|gif)")
  .then(function(json) {
    console.log(json.data.link);
  })
  .catch(function(err) {
    console.error(err.message);
  });

var kittenPic = "mbgq7nd";
imgur
  .getInfo(kittenPic)
  .then(function(json) {
    console.log(json);
  })
  .catch(function(err) {
    console.error(err.message);
  });

export default imgur;
