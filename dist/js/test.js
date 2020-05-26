//<script>
// Get the video element with id="myVideo"
var vid = document.getElementById("myVideo");
var is_p = true;
//var isWatching = alert("Good! Keep Watching!");
// Assign an ontimeupdate event to the video element, and execute a function if the current playback position has changed
vid.ontimeupdate = function () {
  is_p = myFunction(is_p);
};
function myFunction(is_p) {
  // Display the current position of the video in a p element with id="demo"
  document.getElementById("demo").innerHTML = vid.currentTime;

  //testing
  if ((vid.currentTime > 10 && vid.currentTime < 15 || vid.currentTime > 20 && vid.currentTime < 25 || vid
      .currentTime > 30 && vid.currentTime < 45)) {
    // is_p = false;
    if (is_p) {
      alert("Good! Keep Watching!");

      vid.pause();
      document.getElementById("demo").innerHTML = "ERRRR";
      if (confirm(is_p)) {
        is_p = false;

        vid.play();
      }
    }
  } else {
    is_p = true;

    document.getElementById("demo").innerHTML = "Watching...";
    
  }
  return is_p;
}
//</script>