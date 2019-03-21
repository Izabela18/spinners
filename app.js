var spinner1 = document.getElementById("spinner1").animate(
    [
        { backgroundColor: '#000000', opacity: 1.0, transform: 'rotate(0deg) translate3D(0, 0, 0)' },
        { backgroundColor: '#440000', opacity: 0.3 },
        { backgroundColor: '#000000', opacity: 1.0, transform: 'rotate(360deg) translate3D(0, 0, 0)' }
    ],
    {
        duration: 500,
        iterations: Infinity,
        easing: 'ease-in-out'
    }
)

var spinner2 = document.getElementById("spinner2").animate(
    [
        { backgroundColor: '#000000', opacity: 1.0, transform: 'rotate(0deg) translate3D(0, 0, 0)' },
        { backgroundColor: '#440000', opacity: 0.3 },
        { backgroundColor: '#000000', opacity: 1.0, transform: 'rotate(360deg) translate3D(0, 0, 0)' }
    ],
    {
        duration: 500,
        iterations: Infinity,
        easing: 'ease-in-out'
    }
)

var spinner3 = document.getElementById("spinner3").animate(
    [
        { backgroundColor: '#000000', opacity: 1.0, transform: 'rotate(0deg) translate3D(0, 0, 0)  skew(20deg)' },
        { backgroundColor: '#440000', opacity: 0.3 },
        { backgroundColor: '#000000', opacity: 1.0, transform: 'rotate(360deg) translate3D(0, 0, 0) skew(20deg)' }
    ],
    {
        duration: 500,
        iterations: Infinity,
        easing: 'ease-in-out'
    }
)

var spinner4 = document.getElementById("spinner4").animate(
    [
        { backgroundColor: '#000000', opacity: 1.0, transform: 'rotate(0deg) translate3D(0, 0, 0)' },
        { backgroundColor: '#440000', opacity: 0.3 },
        { backgroundColor: '#000000', opacity: 1.0, transform: 'rotate(360deg) translate3D(0, 0, 0)' }
    ],
    {
        duration: 500,
        iterations: Infinity,
        easing: 'ease-in-out'
    }
)

var spinner5 = document.getElementById("spinner5").animate(
    [
        { backgroundColor: '#000000', opacity: 1.0, transform: 'rotate(0deg) translate3D(0, 0, 0)' },
        { backgroundColor: '#440000', opacity: 0.3 },
        { backgroundColor: '#000000', opacity: 1.0, transform: 'rotate(360deg) translate3D(0, 0, 0)' }
    ],
    {
        duration: 500,
        iterations: Infinity,
        easing: 'ease-in-out'
    }
)

var spinner6 = document.getElementById("spinner6").animate(
    [
        { backgroundColor: '#000000', opacity: 1.0, transform: 'rotate(0deg) translate3D(0, 0, 0) skew(30deg)' },
        { backgroundColor: '#440000', opacity: 0.3 },
        { backgroundColor: '#000000', opacity: 1.0, transform: 'rotate(360deg) translate3D(0, 0, 0) skew(30deg)' }
    ],
    {
        duration: 500,
        iterations: Infinity,
        easing: 'ease-in-out'
    }
)





var colorWell1;
var defaultColor = "red";

window.addEventListener("load", onstart, false);
function onstart() {
  colorWell1 = document.querySelector("#colorWell1");
  colorWell1.value = defaultColor;
  colorWell1.addEventListener("input", updateBody, false);
  colorWell1.addEventListener("change", watchChange, false);
  colorWell1.select();
}
function updateBody(event) {
  var b = document.querySelector("body");


  if (b) {
    b.style.backgroundColor = event.target.value;
  }

}
function watchChange(event) {
  var b = document.querySelector("body");

  if (b) {
    b.style.backgroundColor = event.target.value;
  }

}
