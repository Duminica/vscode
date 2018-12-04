/* js*/
let handleListArray = ["On Github", "On facebook", "@duminicasunday"];
let index = 0;

window.addEventListener("load", startTicker);

function startTicker() {
	setInterval(runTickerItems, 2400);
}

function runTickerItems() {
	$(".handle").html(handleListArray[index]);

	index++;

	if(index == handleListArray.length)
	{
		index = 0;
	}
}





/* jquery*/
$(function(){
	$("#examples").click(function() {
		if($(window).width() < 720){
			$('html, body').animate({scrollTop: $("div .exampleSection").offset().top - 220}, 1000);
		}
		else {
			$('html, body').animate({scrollTop: $("div .exampleSection").offset().top - 100}, 1000);
		}
	}),

	$("#resume").click(function() {
		if($(window).width() < 720){
			$('html, body').animate({scrollTop: $("div .resumeSection").offset().top - 220}, 1000);
		}
		else {
			$('html, body').animate({scrollTop: $("div .resumeSection").offset().top - 100}, 1000);
		}
	}),

	

	$("#contact").click(function() {
		if($(window).width() < 720){
			$('html, body').animate({scrollTop: $("div .footer").offset().top - 220}, 1000);
		}
		else {
			$('html, body').animate({scrollTop: $("div .footer").offset().top - 100}, 1000);
		}
	}),

	$("#staticIntroduction").click(function() {
		$('html, body').animate({scrollTop: $("div .introduction").offset().top}, 1000);
	}),

	$("#staticExamples").click(function() {
		if($(window).width() < 720){
			$('html, body').animate({scrollTop: $("div .exampleSection").offset().top - 220}, 1000);
		}
		else {
			$('html, body').animate({scrollTop: $("div .exampleSection").offset().top - 100}, 1000);
		}
	}),

	$("#staticResume").click(function() {
		if($(window).width() < 720){
			$('html, body').animate({scrollTop: $("div .resumeSection").offset().top - 220}, 1000);
		}
		else {
			$('html, body').animate({scrollTop: $("div .resumeSection").offset().top - 100}, 1000);
		}
	}),

	

	$("#staticContact").click(function() {
		if($(window).width() < 720){
			$('html, body').animate({scrollTop: $("div .footer").offset().top - 220}, 1000);
		}
		else {
			$('html, body').animate({scrollTop: $("div .footer").offset().top - 100}, 1000);
		}
	}),

	$(window).scroll(function(){
		if($(this).scrollTop() > 100){
			$(".staticMenu").fadeIn(500);
		}
		else {
			$(".staticMenu").fadeOut(500);
		}
		
	});
});