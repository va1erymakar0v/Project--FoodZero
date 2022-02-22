const mainMenu = document.querySelector('.header__menu');
const mainBurger = document.querySelector('.header__burger');
const mainClose = document.querySelector('.header__close');

mainBurger.onclick = function() {
	mainMenu.classList.toggle('active');
	document.querySelector('main').classList.toggle('hidden');

}

mainClose.onclick = function() {
	mainMenu.classList.toggle('active');
	document.querySelector('main').classList.toggle('hidden');
}

document.querySelector('main').onclick = function() {
	if (document.querySelector('main').classList.contains('hidden')) {
		mainMenu.classList.toggle('active');
		mainMenu.classList.toggle('closed');
		document.querySelector('main').classList.toggle('hidden');
	}
}