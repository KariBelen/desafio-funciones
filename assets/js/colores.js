let color = "";

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    color = "red";
  } else if (event.key === "s") {
    color = "blue";
  } else if (event.key === "d") {
    color = "yellow";
  }
});

div1 = document.getElementById("div1");
div1.addEventListener("click", function () {
  div1.style.backgroundColor = color;
});

div2 = document.getElementById("div2");
div2.addEventListener("click", function () {
  div2.style.backgroundColor = color;
});

div3 = document.getElementById("div3");
div3.addEventListener("click", function () {
  div3.style.backgroundColor = color;
});

div4 = document.getElementById("div4");
div4.addEventListener("click", function () {
  div4.style.backgroundColor = color;
});