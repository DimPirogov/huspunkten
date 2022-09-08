// show navbar
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
	navbarLinks.classList.toggle("active");
});

//Slideshow functionality
function showSlides() {
	let i;

	let slides = document.getElementsByClassName("mySlides");

	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	slideIndex++;

	if (slideIndex > slides.length) {
		slideIndex = 1;
	}

	slides[slideIndex - 1].style.display = "block";

	setTimeout(showSlides, 6000); // Change image every 2 seconds
}
