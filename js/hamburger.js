function test() {
  alert("I am a test alert!");
}


document.addEventListener('DOMContentLoaded', function() {
  // When the user scrolls the page, execute myFunction
  window.onscroll = function() {myFunction()};

  // Get the header

  var header = document.getElementById("myHeader");
  // Get the offset position of the navbar
  var sticky = header.offsetTop;

  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
})


function menuButton(x) {
  x.classList.toggle("change");
    var x = document.getElementById("wrapperStickyMenu");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

function showMenu() {
  var x = document.getElementById("wrapperStickyMenu");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
