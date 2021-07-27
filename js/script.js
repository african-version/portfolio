$(function () {

});

function myFunction() {
    var dots = document.getElementsByClassName(".dots");
    var moreText = document.getElementsByClassName(".more");
    var btnText = document.getElementsByClassName(".btn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }



$(function () {

$('.counter').counterUp({
  delay: 10,
  time: 3000
});

});


$(function () {
  new WOW().init();
});



