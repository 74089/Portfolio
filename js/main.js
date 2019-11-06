function test() {
  alert("I am a test alert!");
}
function smartScroll(parameter) {
  var x = parameter;
  document.getElementById(x).scrollIntoView({ block: 'end',  behavior: 'smooth' });
}
