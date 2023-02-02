$(document).ready(function(){
	$('.slider').slick({
		arrows:false,
		dots:false,
		slidesToShow:4,
		autoplay:true,
		speed:1400,
		autoplaySpeed:2000,
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
Array.from(document.getElementsByClassName("modal_toggler")).forEach(element =>  {
    element.addEventListener("click", function(event){
        let target_id = event.target.dataset.target;
       document.getElementById(target_id).classList.toggle("showModal");
    })
})


Array.from(document.getElementsByClassName("modal-closebtn")).forEach(element =>  {
    element.addEventListener("click", function(event){ event.target.closest(".modal").classList.toggle("showModal");
    })
})

function info_close() {
	document.getElementById('info_block').classList.toggle("showModal");
	document.getElementById('info_block').style.display='none';
}

// document.getElementById('info_close').addEventListener('click', info_close);
