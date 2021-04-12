@@include("fullpage.js");

$(document).ready(() => {

	// Нажатие на бургер
	$(".header__burger").click(() => {
		$(".burgerPopup").animate({
			opacity: "1"
		}, 500).removeClass("hidden");
	});

	$(".burgerPopup__burger").click(() => {
		$(".burgerPopup").animate({
			opacity: "0"
		}, 500, () => {
			$(".burgerPopup").addClass("hidden")
		});
	});

	// Получить консультацию
	$(".header__button").click(() => {
		$(".formConsultation").removeClass("hidden");
		$(".formConsultation").animate({
			opacity: "1"
		}, 500);
	})

	$(".formConsultation__left button").click(() => {
		$(".formConsultation").animate({
			opacity: "0"
		}, 500, () => {
			$(".formConsultation").addClass("hidden")
		});
	});
  
  // Добавление Fullpage
    $("#fullpage").fullpage({
    //options here
    autoScrolling: true,
    navigation: true,
    navigationPosition: "left",
    scrollBar: false,
    scrollingSpeed: 500,
  });
  
});
