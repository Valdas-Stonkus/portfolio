import worksData from './database/works_db.js'
import Work from './classes/Work.js'
// import Tag from './classes/Tag.js'

import getCardHtml from '../templates/work_card.js'
import getTagHtml from '../templates/tag.js'
import insertToDom from './helpers/dom_helpers.js'

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
// get works tags and add them to the DOM
const tags = new Set()
worksData.forEach(w => w.tags.forEach(t => tags.add(t)))
console.log(tags)
insertToDom('div.work__tags-filter', getTagHtml, tags)


// create work objects add objects as cards to work container DOM
let worksArr = []
worksData.forEach((wData) => worksArr.push(new Work(wData)))
insertToDom('div.work__container', getCardHtml, worksArr)


	