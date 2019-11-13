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
