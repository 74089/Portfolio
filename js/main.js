function test() {
  alert("I am a test alert!");
}
function smartScroll(parameter) {
  var x = parameter;
  document.getElementById(x).scrollIntoView({ block: 'end',  behavior: 'smooth' });
  var x = document.getElementById("wrapperStickyMenu");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
