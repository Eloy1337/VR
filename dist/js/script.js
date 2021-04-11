// alert("Hello Gulp1");

$(document).ready(() => {
	$(".header__burger").click(() => {
		$(".burgerPopup").animate({
			top: "0"
		}, 500)
	});

	$(".burgerPopup__burger").click(() => {
		$(".burgerPopup").animate({
			top: "-100vh"
		}, 500)
	});
});