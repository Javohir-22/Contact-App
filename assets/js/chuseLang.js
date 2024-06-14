const btnE = document.querySelector('.btn-edit span')
const nameCon = document.querySelector('.name')
const lName = document.querySelector('.last-name')
const phNum = document.querySelector('.number')
const emailCon = document.querySelector('.email')
const aboutCon = document.querySelector('.about')
const valueLang = document.querySelector('.lang p')
const chusLang = document.querySelector('.lang')
const searchCon = document.querySelector('.block-search input')

let login = document.querySelector('.log-in')
let wcode = document.querySelector(".text-1");
let hd = document.querySelector(".text-2");
let nmode = document.querySelector(".text-3");
let ccont = document.querySelector(".text-4");
let con = document.querySelector(".text-5");
let evrys = document.querySelector(".text-6");
let creater = document.querySelector(".text-7");

// Language en 
function en() {
	wcode.textContent = 'Website codes'
	hd.textContent = 'Contacts'
	nmode.textContent = 'Night mode'
	ccont.textContent = 'Create a contact'
	con.textContent = 'Contacts'
	evrys.textContent = 'Everything'
	creater.textContent = 'Creater: Javohir Sultanov'
	btnE.textContent = 'Add'
	login.textContent = 'Login'
	btnLog.textContent = 'Login'

	nameLog.setAttribute('placeholder', 'Name')
	lastNameLog.setAttribute('placeholder', 'Last Name')
	nameCon.setAttribute('placeholder', 'Name')
	lName.setAttribute('placeholder', 'Last Name')
	phNum.setAttribute('placeholder', 'Phone Number')
	emailCon.setAttribute('placeholder', 'Email')
	aboutCon.setAttribute('placeholder', 'More Information')
	searchCon.setAttribute('placeholder', 'Search Contact')

	valueLang.textContent = 'En'
}

// Language ru 
function ru() {
	wcode.textContent = 'Коды веб-сайтов'
	hd.textContent = 'Контакты'
	nmode.textContent = 'Ночной режим'
	ccont.textContent = 'Создать контакт'
	con.textContent = 'Контакты'
	evrys.textContent = 'Все'
	creater.textContent = 'Создатель: Javohir Sultanov'
	btnE.textContent = 'Создать'
	login.textContent = 'Авторизоваться'
	btnLog.textContent = 'Авторизоваться'

	nameLog.setAttribute('placeholder', 'Имя')
	lastNameLog.setAttribute('placeholder', 'Фамилия')
	nameCon.setAttribute('placeholder', 'Имя')
	lName.setAttribute('placeholder', 'Фамилия')
	phNum.setAttribute('placeholder', 'Номер телефона')
	emailCon.setAttribute('placeholder', 'электронной почтa')
	aboutCon.setAttribute('placeholder', 'Больше информации')
	searchCon.setAttribute('placeholder', 'Поиск контакта')

	valueLang.textContent = 'Ru'
}

// Language uz
function uz() {
	wcode.textContent = 'Websayt kodlari'
	hd.textContent = 'Kontaktlar'
	nmode.textContent = 'Tun rejimi'
	ccont.textContent = 'Kontakt yaratish'
	con.textContent = 'Kontaktlar'
	evrys.textContent = 'Barchasi'
	creater.textContent = 'Dasturchi: Javohir Sultanov'
	btnE.textContent = 'Qo’shish'
	login.textContent = 'Kirish'
	btnLog.textContent = 'Kirish'

	nameLog.setAttribute('placeholder', 'Ism')
	lastNameLog.setAttribute('placeholder', 'Familiya')
	nameCon.setAttribute('placeholder', 'Ism')
	lName.setAttribute('placeholder', 'Familiya')
	phNum.setAttribute('placeholder', 'Telefon raqam')
	emailCon.setAttribute('placeholder', 'Elektron pochta')
	aboutCon.setAttribute('placeholder', 'Qo’shimcha ma’lumot')
	searchCon.setAttribute('placeholder', 'Kontakt qidirish')


	valueLang.textContent = 'Uz'
}

let lang = JSON.parse(localStorage.getItem('lang'))
? JSON.parse(localStorage.getItem('lang')) 
: 1;


switch(lang) {
	case 1:
		changeLanguage('en')
			break;
	case 2:
		changeLanguage('ru')
			break;
	case 3:
		changeLanguage('uz')
			break;
}

// Change Language
function changeLanguage(language) {
	switch(language) {
		case 'en' :
			en()
			localStorage.setItem('lang',JSON.stringify(1)); 
			chusLang.classList.remove('active')
				break;
		case 'ru':
			ru()
			chusLang.classList.remove('active')
			localStorage.setItem('lang',JSON.stringify(2)); 
				break;
		case 'uz':
			uz()
			localStorage.setItem('lang',JSON.stringify(3)); 
			chusLang.classList.remove('active')
				break;
	}
	document.documentElement.lang = language; 
}

// Chouse language 
valueLang.addEventListener('click', function () {
	chusLang.classList.add('active')
})

