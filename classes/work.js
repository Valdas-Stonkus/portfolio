function Work(params) {
	this.image = params.image
	this.image.src = `../src/work-card-images/${params.image.src}`
	this.title = params.title
	this.tags = params.tags
	this.description = params.description

}

export default Work;