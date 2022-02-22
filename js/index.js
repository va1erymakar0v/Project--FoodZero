// SLIDER
const sliderContentList = document.querySelector('.quotes__slides').querySelectorAll('.quote');
const sliderAuthorsList = document.querySelector('.quotes__authors').querySelectorAll('.slider-author');
const sliderPrev = document.querySelector('.slider__prev');
const sliderNext = document.querySelector('.slider__next');
const sliderCurrent = document.querySelector('.slider__current');
const sliderAll = document.querySelector('.slider__all');

let sliderCurrentPage = 1;

sliderContentList[0].classList.add('active');
sliderAuthorsList[0].classList.add('active');
sliderCurrent.innerHTML = sliderCurrentPage;
sliderAll.innerHTML = sliderContentList.length;

function clearSlider() {
	for (i = 0; i < sliderContentList.length; i++) {
		if (sliderContentList[i].classList.contains('active')) {
			sliderContentList[i].classList.remove('active');
		}	
	}
	for (i = 0; i < sliderContentList.length; i++) {
		if (sliderAuthorsList[i].classList.contains('active')) {
			sliderAuthorsList[i].classList.remove('active');
		}	
	}
}



sliderPrev.onclick = function() {
	clearSlider()
	if (sliderCurrentPage == 1) {
		sliderCurrent.innerHTML = sliderContentList.length;
		sliderCurrentPage = sliderContentList.length;
		sliderContentList[sliderCurrentPage - 1].classList.add('active');
		sliderAuthorsList[sliderCurrentPage - 1].classList.add('active');
	} else {
		sliderCurrentPage -= 1;
		sliderCurrent.innerHTML = sliderCurrentPage;
		sliderContentList[sliderCurrentPage - 1].classList.add('active');
		sliderAuthorsList[sliderCurrentPage - 1].classList.add('active');
	}
}

sliderNext.onclick = function() {
	clearSlider()
	console.log(sliderCurrentPage)
	if (sliderCurrentPage == sliderContentList.length) {
		sliderCurrent.innerHTML = 1;
		sliderCurrentPage = 1;
		sliderContentList[sliderCurrentPage - 1].classList.add('active');
		sliderAuthorsList[sliderCurrentPage - 1].classList.add('active');
	} else {
		sliderCurrentPage += 1;
		sliderCurrent.innerHTML = sliderCurrentPage;
		sliderContentList[sliderCurrentPage - 1].classList.add('active');
		sliderAuthorsList[sliderCurrentPage - 1].classList.add('active');
	}
}



// animation

const preAnimated = document.querySelectorAll('.pre-animated');

let animationCounter = true;

window.addEventListener('scroll', scrollAnimation);
function scrollAnimation() {
	for (let i = 0; i < preAnimated.length; i++) {
		const itemToAnimate = preAnimated[i];
		const itemHight = itemToAnimate.offsetHeight;
		const itemOffset = offset(itemToAnimate).top;
		const itemStart = 4;

		let itemToAnimatePlace = window.innerHeight - itemHight / itemStart;
		if (itemHight > window.innerHeight) {
			itemToAnimatePlace = window.innerHeight - window.innerHeight / itemStart;
		}

		if ((pageYOffset > itemOffset - itemToAnimatePlace) && (pageYOffset < (itemOffset + itemToAnimatePlace))) {
			itemToAnimate.classList.add('animated');
		}
	}

	function offset(element) {
		const rect = element.getBoundingClientRect();
		const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
		const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
	}
}

scrollAnimation();