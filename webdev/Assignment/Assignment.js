document.addEventListener('DOMContentLoaded', function() {
    var videos = ['./img/v2.mp4', './img/v3.mp4', './img/v4.mp4'];
    var currentIndex = 0;
    var video = document.getElementById('myVideo');

    function changeVideo() {
      video.src = videos[currentIndex];
      currentIndex = (currentIndex + 1) % videos.length;
    }

    setInterval(changeVideo, 3000); 
  });

// document.addEventListener('DOMContentLoaded', function() {
//     var images = ['./img/v1.mp4', './img/rpg1.jpg', './img/as2x.jpg'];
//     var currentIndex = 0;
//     function changeBackground() {
//       var dynamicBg = document.querySelector('.dynamic-bg');
//       dynamicBg.style.backgroundImage = 'url("' + images[currentIndex] + '")';
//       currentIndex = (currentIndex + 1) % images.length;
//     }
//     setInterval(changeBackground, 5000); // Change background every 5 seconds
// });