function openNav() {
	const container = document.querySelector('.container')

	container.style.opacity = '0.3'
	document.getElementById('sidenav').style.width = '250px'
	// TODO resolve side menu open close event
	// const ddd = container.addEventListener('click', closeNav)
	// console.log('click open')
}

function closeNav() {
	document.querySelector('.container').style.opacity = '1'
	document.getElementById('sidenav').style.width = '0'
	// console.log('click close')
}
