ele = document.getElementById("ele1");
ele.addEventListener("click", function () {
  ele.style.backgroundColor = "yellow";
});

function pintar(color) {
  ele2 = document.getElementById("ele2");
  ele2.style.backgroundColor = color;
}

ele2 = document.getElementById("ele2");
ele2.style.backgroundColor = "green";
ele2.addEventListener("click", function () {
  pintar("yellow");
});