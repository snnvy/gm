$(document).ready(function(){
	$('.slider').slick({
		arrows:false,
		dots:false,
		slidesToShow:4,
		autoplay:true,
		speed:1400,
		autoplaySpeed:1800,
		touchThreshold: 20,
		waitForAnimate:false,
		variableWidth:true,
	});
});

const closeNav = document.getElementById('closebtn');
const openNav = document.getElementById('opennav');

openNav.onclick = function () {
  document.getElementById("mySidebar").style.width = "250px";
}

closeNav.onclick = function (){
  document.getElementById("mySidebar").style.width = "0";
}
