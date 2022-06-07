import getCardHtml from '../templates/work_card.js'

// add work objects to work_container
function addWorksToDOM(works) {
  works.forEach((work) => {
    const cardHtml = getCardHtml(work)
		document
			.querySelector('div.work__container')
			.insertAdjacentHTML('beforeend', cardHtml)
	})
}

export default addWorksToDOM;