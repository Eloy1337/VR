@@include("fullpage.js");


$(document).ready(function () {
    console.log("1")
  $("#fullpage").fullpage({
    //options here
    autoScrolling: true,
    navigation: true,
    navigationPosition: "left",
    scrollBar: false,
    scrollingSpeed: 500,
  });
});