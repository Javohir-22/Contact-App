const btnEdit = document.querySelector('.btn-edit')
const fName = document.querySelector('.name')
const lastName = document.querySelector('.last-name')
const phoneNum = document.querySelector('.number')
const email = document.querySelector('.email')
const about = document.querySelector('.about')
const contactList = document.querySelector('.contact-list')
const enter = document.querySelector('.log-in')
const modalLog = document.querySelector('.modal-log')
const btnLog = document.querySelector(".btn-login")
const userName = document.querySelector('.user-name')
const nameLog = document.querySelector('.name-log')
const lastNameLog = document.querySelector('.last-name-log')
const closeMod = document.querySelector('.close-mod')
const menu = document.querySelector('.menu')
const sectionEd = document.querySelector('.section-edit')
const sectionCon = document.querySelector('.section-contacts')

// 

activeClass(menu)

sectionEd.classList.add('active')

menu.addEventListener('click', function(){
	if (sectionEd.classList.contains('active')) {
		sectionEd.classList.remove('active')
		sectionCon.classList.add('active')
	}else {
		sectionEd.classList.add('active')
		sectionCon.classList.remove('active')
	}
})

// Login 

enter.addEventListener("click", function(){
	modalLog.classList.add('active');
})

closeMod.addEventListener("click", function(){
	modalLog.classList.remove('active');
})

let userN = JSON.parse(localStorage.getItem('dek'))
? JSON.parse(localStorage.getItem('dek'))
: 'User'

userName.textContent = userN

btnLog.addEventListener('click', function(){
	if(nameLog.value !== ''){
		userName.textContent = `${lastNameLog.value} ${nameLog.value}`
		userN = userName.textContent
		localStorage.setItem('dek', JSON.stringify(userN))
		modalLog.classList.remove('active')
		lastNameLog.value = ''
		nameLog.value = ''
	}
})

/////////////////////////////////////////

// This function work for open or close modals
function activeClass(className) {
	className.addEventListener('click', function () {
		if (className.classList.contains('active')) {
			className.classList.remove('active')
		} else {
			className.classList.add('active')
		}
	})
}
/////////////////////////////////////////////////

// Create Element
function createElement(tagName, className, parent, content) {
	const element = document.createElement(tagName)
	element.setAttribute('class', className)
	parent.appendChild(element)
	element.textContent = content

	return element
}
////////////////////

//Create contact
function createContact() {
	contactList.innerHTML = ''
	for (item of list) {
		const blockPerson = createElement('div', 'block-person', contactList, '')
		const person = createElement('div', 'person flex-between', blockPerson, '')
		const div = createElement('div', 'flex', person, '')
		const imgP = createElement('img', 'person-img', div, '')
		imgP.setAttribute('src', './assets/images/user.png')
		const personAbout = createElement('div', 'person-about', div, '')
		const names = createElement(
			'h4',
			'medium',
			personAbout,
			`${item.name} ${item.last}`
		)
		const personPhone = createElement(
			'p',
			'regular',
			personAbout,
			`+${item.phone}`
		)
		const divTwo = createElement('div', 'flex', person, '')
		const starImg = createElement('div', 'star-img', divTwo, '')
		const btnDel = createElement('button', 'settings', divTwo, '')
		const block = createElement('div', 'block-about flex-between', blockPerson)
		const aboutPerson = createElement(
			'h5',
			'regular',
			block,
			`${item.aboutCon}`
		)	
		const aboutPersonAdr = createElement(
			'h5',
			'regular',
			block,
			`${item.address}`
		)
		
		activeClass(blockPerson)
		activeClass(starImg)
		btnDel.addEventListener('click', function () {
			deleteItem(item.id)
		})
	}
}
///////////////////////////////////

let list = JSON.parse(localStorage.getItem('list'))
	? JSON.parse(localStorage.getItem('list'))
	: []

function generateId() {
	if (list.length > 0) {
		return list[list.length - 1].id + 1
	} else {
		return 1
	}
}
btnEdit.addEventListener('click', function () {
	if (fName.value !== '' && phoneNum.value !== '') {
		let newObj = {
			id: generateId(),
			name: fName.value,
			last: lastName.value,
			address: email.value,
			aboutCon: about.value,
			phone: phoneNum.value,
		}
		list.push(newObj)
		localStorage.setItem('list', JSON.stringify(list))
		fName.value = ''
		lastName.value = ''
		email.value = ''
		about.value = ''
		phoneNum.value = ''
		console.log(list)
		createContact()

		sectionEd.classList.remove('active')
		sectionCon.classList.add('active')
		menu.classList.add('active')
	} else {
		
	}
})

function deleteItem(id){
  list = list.filter(function(item){
    return item.id !== id
  })

  localStorage.setItem("list", JSON.stringify(list))
	createContact()
}

///////////////////////////////////////////////

createContact()


// function searchContacts(query) {
// 	query = query.toLowerCase();
// 	return list.filter(contact => {
// 			return contact.name.toLowerCase().includes(query) || contact.phone.includes(query);
// 	});
// }