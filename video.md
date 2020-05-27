<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>HKS Consulting</title>
  <link rel="shortcut icon" type="image/x-icon" href="./assets/icon/hks.ico">
  <link rel="stylesheet" href="./dist/css/all.min.css">
</head>

<body>
  <!-- header -->
  <nav class="container navbar navbar-expand-lg navbar-light header-bg">
    <a class="navbar-brand" href="./">
      <img src="./assets/img/hks-logo.svg" alt="">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="#aboutUs">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#services">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#plansPricing">Plans & Pricing</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            Resources
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="./video.html">Video playing</a>
          </div>
        </li>
      </ul>
      <form class="my-2 my-lg-0">
        <img src="./assets/icon/icon-login.svg" alt="">
      </form>
    </div>
  </nav>
  <!-- header -->
  <div class="banner-box">
    <div class="container gray-700">
      <h2 class="text-r-6-3-6 banner-text">Video playing</h2>
    </div>
  </div>
  <!-- main -->
  <main class="container pt-4">
    <h4>Video Name</h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime aliquam quisquam repellat, velit ipsum quibusdam
      voluptatibus quae tempore sapiente excepturi quidem architecto nulla placeat eum voluptate commodi dolores ex
      illum?</p>
    <!-- video -->
    <video id="myVideo" class="video-box" controls>
      <!-- <source src="videoplayback.mp4" type="video/mp4"> -->
      <source src="http://www.vela.hk/law/html/HKS-consulting/videoplayback.mp4" type="video/mp4">
      Your browser does not support HTML5 video.
    </video>
    <div class="text-r-1-3-1">
      <p>Playback position: <span id="demo"></span></p>
    </div>
    <!-- video -->
  </main>
  <!-- main -->

  <!-- Q&A -->
  <div class="qa-box pt-4 pb-4">
    <div class="container col-lg-8 col-sm-12 mt-4 mb-4">
      <h4 class="text-center text-r-3-5-3 hks-blue-600">Have Questions?</h4>
      <form class="text-r-1-4-1 gray-700">
        <div class="form-group">
          <label for="exampleFormControlInput1">Email</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
        </div>
        <div class="form-group">
          <label for="qsName">Name</label>
          <input type="text" class="form-control" id="qsName" placeholder=" ">
        </div>
        <div class="form-group">
          <label for="qsQuestion">Question</label>
          <textarea class="form-control" id="qsQuestion" rows="6"></textarea>
        </div>
        <div class="d-flex justify-content-center">
          <button type="submit" class="btn btn-primary">Send</button>
        </div>
      </form>
    </div>
  </div>
  <!-- Q&A -->
  <!-- modal -->
  <!-- Button trigger modal -->
  <button type="button" class="btn btn-primary" id="modal" data-toggle="modal">
    Launch demo modal
  </button>

  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  <!-- modal -->
  <!-- onload popup -->
  <div id="enquirypopup" class="modal fade in" role="dialog">
      <div class="modal-dialog">
        
        <!-- Modal content-->
        <div class="modal-content row">
          <div class="modal-header custom-modal-header">
            <button type="button" class="close" data-dismiss="modal">×</button>
            <h4 class="modal-title">Enquire Now</h4>
          </div>
          <div class="modal-body">
            <form name="info_form" class="form-inline" action="#" method="post">
              <div class="form-group col-sm-12">
                <input type="text" class="form-control" name="name" id="name" placeholder="Enter Name">
              </div>
              <div class="form-group col-sm-12">
                <input type="email" class="form-control" name="email" id="email" placeholder="Enter Email">
              </div>
              <div class="form-group col-sm-12">
                <input type="text" class="form-control" name="checkin" id="cheeckin" placeholder="Check-In Date">
              </div>
              <div class="form-group col-sm-12">
                <input type="text" class="form-control" name="checkout" id="cheeckout" placeholder="Check-Out Date">
              </div>
              <div class="form-group col-sm-12">
                <input type="text" class="form-control" name="phone" id="phone" placeholder="Enter Phone">
              </div>
              
              <div class="form-group col-sm-12">
                <textarea class="form-control" id="msg" name="msg" rows="4" placeholder="Enter Message"></textarea>
              </div>
              <div class="form-group col-sm-12">
                <button type="submit" class="btn btn-default pull-right">Submit</button>
              </div>
            </form>
          </div>
          
        </div>
        
      </div>
    </div>
  <!-- footer -->
  <div
    class="container d-flex justify-content-lg-between flex-lg-row flex-md-column flex-sm-column footer-box text-r-0-1-0 pt-4 pb-2">
    <p> Copyright © 2020 HKS Consulting Limited. All rights reserved.</p>
    <p> <a href="#">Privacy Policy</a> | <a href="#">Terms & Conditions</a></p>
  </div>
  <!-- footer -->
  <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script type="text/javascript" src="./dist/js/popper.min.js"></script>
  <script type="text/javascript" src="./dist/js/bootstrap.min.js"></script>
  <script>
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
          if (is_p) {
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
  </script>
  <script>
    $(document).ready(function () {
      $('#modal').click(function () {
        $('#exampleModal').modal('show');
        setTimeout(function () {
          $('#exampleModal').modal('show');
        }, 1000);
      });
      //
      $(window).load(function(){
        setTimeout(function() {
                $('#enquirypopup').modal('show');
        }, 3000);
            });  
    });
  </script>
  
</body>

</html>


///
  <script>
          setInterval(function () {
            $('#exampleModal').modal('show');
            vid.pause();
            }, 10000);   
  </script>
  vid.play();


  $( "p" ).click(function() {
  $( this ).slideUp();
});