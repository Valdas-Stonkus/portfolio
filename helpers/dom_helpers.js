// insert html before the first child of the given element
function insertToDom(divClass, htmlTemplate, dataArr) {
  dataArr.forEach((item) => {
    const html = htmlTemplate(item)
		document
			.querySelector(divClass)
			.insertAdjacentHTML('beforeend', html)
	})
}

export default insertToDom;