
window.addEventListener("scroll", function() {

  const distance = window.scrollY;
  var vid = document.getElementById("video");
  const volume = 1-(distance * (1/1100))

  if(volume >= 0) {
    vid.volume = volume;
  } else vid.volume = 0;

})

function preview() {
  var aud = document.getElementById("audio");
  aud.toggleAttribute("autoplay");
}

document.getElementById("f1").onmouseout = stop();

function stop() {
  var aud = document.getElementById("audio");
  console.log("mouseOut")
  aud.removeAttribute("autoplay");
  aud.pause();
}