import "bootstrap";

const containers = document.querySelectorAll('.animcont');

console.log(containers)

window.addEventListener('scroll', (e) => {
	console.log(window.scrollY);
	containers.forEach((container)=>{
		const sliderImages = container.querySelectorAll('.slide-in');
		const activationHeight = parseInt (container.id, 10);
		if(window.scrollY > activationHeight) {
			sliderImages.forEach((sliderImage) => {
				sliderImage.classList.add('active');
			});
		};
	});
});