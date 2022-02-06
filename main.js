import worksData from './database/works_db.js'
import Work from './classes/work.js'
import addWorksToDom from './helpers/dom_helpers.js'

// NAVIGATION -------------------------------------------------------------------
function openNav() {
	const container = document.querySelector('.container')

	container.style.opacity = '0.3'
	document.getElementById('sidenav').style.width = '250px'
	// FIXME resolve side menu open close event
	// const ddd = container.addEventListener('click', closeNav)
	// console.log('click open')
}

function closeNav() {
	document.querySelector('.container').style.opacity = '1'
	document.getElementById('sidenav').style.width = '0'
	// console.log('click close')
}

// WORK --------------------------------------------------------------------------
// create work objects
let worksArr = []
worksData.forEach((wData) => worksArr.push(new Work(wData)))
// add all work objects as cards to work container DOM
addWorksToDom(worksArr)


	