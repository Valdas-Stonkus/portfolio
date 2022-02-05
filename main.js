function openNav() {
	const container = document.querySelector('.container')

	// navigation -----------------------------------------------
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

// work cards data
let workCardsObj = [
	{
		title: 'Title1',
		description: 'This is card description text',
		image: {
			src: './src/work-card-images/cash-register.png',
			alt: 'image text1',
		},
	},
	{
		title: 'Title2',
		description: 'This is card description text',
		image: {
			src: './src/work-card-images/cash-register.png',
			alt: 'image text2',
		},
	},
	{
		title: 'Title3',
		description: 'This is card description text',
		image: {
			src: './src/work-card-images/cash-register.png',
			alt: 'image text1',
		},
	},
	{
		title: 'Title4',
		description: 'This is card description text',
		image: {
			src: './src/work-card-images/cash-register.png',
			alt: 'image text1',
		},
	},
]

// generate work cards and update DOM
workCardsObj.forEach((card) => {
	let cardHtml = `
		<div class="work__card">
			<div class="work__card-container">
				<div>${card.title}</div>
				<p>${card.description}</p>
			</div>
		</div>
	`

	const domElement = document.querySelector('div.work__container')
	// TODO end here, need resolve append html
	domElement.insertAdjacentHTML(cardHtml)
})
