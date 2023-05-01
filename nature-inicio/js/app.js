

// slide fadeIn - fadeOut
const images = document.querySelectorAll('.slide > div > img')
const firstSlide = document.querySelector('.slide > div:first-child')
const activeSlideClass = 'active';
firstSlide.classList.add(activeSlideClass)

images.forEach((image) => {
	image.addEventListener('mouseover', StopImage)
	image.addEventListener('mouseleave', initSlide)
})

function StopImage(){
	clearInterval(timer)
	
}

function initSlide(){
   timer = setInterval(slide, 2000);
}



function slide(){
    let activeSlide = document.querySelector('.slide > .active');
	let nextSlide = activeSlide.nextElementSibling;

	if(nextSlide === null){
		nextSlide = firstSlide;
	}

	activeSlide.classList.remove(activeSlideClass)
	nextSlide.classList.add(activeSlideClass)
}

let timer = setInterval(slide, 2000)





// nav-tab
const sections = document.querySelectorAll('[data-group]')
const allClick = document.querySelectorAll('[data-click]')
const activeNavClass = 'active';



sections.forEach((section) => {
	section.querySelector('[data-target]').classList.add(activeNavClass)
	section.querySelector('[data-click]').classList.add(activeNavClass)
})


allClick.forEach((btn) => {
	btn.addEventListener('click', navegationTab)
	
})


function navegationTab(event){

	event.preventDefault();

	
	let idTarget = this.dataset.click;
	let idSection = this.dataset.section;
   
	let target = document.querySelector('[data-target="'+ idTarget + '"]')
    let section = document.querySelector('[data-group = "' + idSection + '"]')

	removeClass(section)


	target.classList.add(activeNavClass);
	this.classList.add(activeNavClass)
 }


 function removeClass(section){
    const removeClassTargets = section.querySelectorAll('[data-target]');
    const removeClassBtnNav = section.querySelectorAll('[data-click]');

    removeClassTargets.forEach((target) => {
		target.classList.remove(activeNavClass)
	})

	removeClassBtnNav.forEach((btnNav) => {
		btnNav.classList.remove(activeNavClass)
	})
   
}