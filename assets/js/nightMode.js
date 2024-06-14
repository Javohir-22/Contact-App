const night = document.querySelectorAll('.night')
const icons = document.querySelectorAll('.icons')
const nightMode = document.getElementById('night')

let mode = JSON.parse(localStorage.getItem('mode'))
	? JSON.parse(localStorage.getItem('mode'))
	: 0

// Sorting icons
let num = 0

for (let icon of icons) {
	num++
	icon.setAttribute('src', `./assets/images/${num}.png`)
}

// Night mode
function toggleNightMode() {
	if (document.documentElement.classList.contains('night-mode')) {
		document.documentElement.classList.remove('night-mode')
		mode = 0
		localStorage.setItem('mode', JSON.stringify(mode))
	} else {
		document.documentElement.classList.add('night-mode')
		mode = 1
		localStorage.setItem('mode', JSON.stringify(mode))
	}
}

function modeIcons() {
	for (let item of night) {
		if (item.classList.contains('active')) {
			item.classList.remove('active')
			num = 0
			for (let icon of icons) {
				num++
				icon.setAttribute('src', `./assets/images/${num}.png`)
			}
		} else {
			item.classList.add('active')
			num = 8
			for (let icon of icons) {
				num++
				icon.setAttribute('src', `./assets/images/${num}.png`)
			}
		}
	}
}

document.addEventListener('DOMContentLoaded', function () {
	if (mode == 0) {
		document.documentElement.classList.remove('night-mode')
		for (let item of night) {
			item.classList.add('active')
		}
		
	} else if (mode == 1) {
		document.documentElement.classList.add('night-mode')
		for (let item of night) {
			item.classList.remove('active')
		}
	}
	modeIcons()
	document.getElementById('night').addEventListener('click', function () {
		modeIcons()
		toggleNightMode()
	})
})

////////////////////////////////////////////////////
