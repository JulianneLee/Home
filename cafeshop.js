    var slideIndex = 1;
	showSlides(slideIndex);

	function addSlides(num) {
 		showSlides(slideIndex += num);
	}

	function thisSlide(num) {
		showSlides(slideIndex = num);
	}

	function showSlides(num) {
 		var x;
		var slides = document.getElementsByClassName("aboutSlides");
		var dots = document.getElementsByClassName("dot");
		if (num > slides.length) {slideIndex = 1} 
		if (num < 1) {slideIndex = slides.length}
		for (x = 0; x < slides.length; x++) {
			slides[x].style.display = "none";}
		for (x = 0; x < dots.length; x++) {
			dots[x].className = dots[x].className.replace(" active", "");}
		slides[slideIndex-1].style.display = "block"; 
		dots[slideIndex-1].className += " active";}
