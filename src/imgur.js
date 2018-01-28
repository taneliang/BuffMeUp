// import imgur from "imgur";
import axios from "axios";

export default function postImage(file) {
  const reader = new FileReader();
  // const self = this;
  reader.readAsBinaryString(file);
  reader.onload = function() {
    const formData = new FormData();
    formData.append("image", reader.result);
    formData.append("type", "binary");
    return (
      axios
        .post("https://api.imgur.com/3/image", formData, {
          headers: {
            Authorization: "Client-ID e1e37637389e144"
            // Authorization: "Bearer f0c0050662341ad797633dbd1d21649aa1f2dd7f"
          }
        })
        // return axios({
        // url: "https://api.imgur.com/3/image",
        // method: "POST",
        // headers: {
        // // Authorization: "Client-ID 34b18e4882702d4",
        // Authorization: "Bearer f0c0050662341ad797633dbd1d21649aa1f2dd7f"
        // },
        // data: formData
        // })
        .then(e => console.log(e))
        .catch(e => console.log(e))
    );
  };
}

//setting
// imgur.setClientId("aCs53GSs4tga0ikp");

// export default imgur;

//Getting
// imgur.getClientId();
//
// // Saving to disk. Returns a promise.
// imgur.saveClientId()
//   .then(function() {
//     console.log("Saved.");
//   })
//   .catch(function(err) {
//     console.log(err.message);
//   });
//
// imgur.loadClientId().then(imgur.setClientId);
//
// // A single image
// imgur
//   .uploadFile("/home/kai/kittens.png")
//   .then(function(json) {
//     console.log(json.data.link);
//   })
//   .catch(function(err) {
//     console.error(err.message);
//   });
//
// // All jpegs in a specific folder
// // to an album you own
// var albumId = "F8KTV";
// imgur
//   .uploadFile("/home/kai/*.jpg", albumId)
//   .then(function(json) {
//     console.log(json.data.link);
//   })
//   .catch(function(err) {
//     console.error(err.message);
//   });
//
// // Multiple image types from home folder
// imgur
//   .uploadFile("~/*.(jpg|png|gif)")
//   .then(function(json) {
//     console.log(json.data.link);
//   })
//   .catch(function(err) {
//     console.error(err.message);
//   });
//
// var kittenPic = "mbgq7nd";
// imgur
//   .getInfo(kittenPic)
//   .then(function(json) {
//     console.log(json);
//   })
//   .catch(function(err) {
//     console.error(err.message);
//   });
