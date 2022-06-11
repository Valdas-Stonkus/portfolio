// template of work card
function cardHtml(work) {
  let li = ''
  work.tags.forEach(tag => {
    li += `<li>${tag}</li>`
  })
  return `
  <div class="work__card">
    <div class="work__card-container">
      <div class="work__card-image">
        <img src="${work.image.src}" alt="${work.image.alt}" />
      </div>
      <div class="work__card-title">${work.title}</div>
      <div>
        <ul class="work__tag-list">
          ${li}
        </ul>
      </div>
      <p>${work.description}</p>
      <div class="work__card-buttons">
        <button type="button" class="btn work__card-button-dark">Preview</button>
        <button type="button" class="btn work__card-button">Github</button>
      </div>
    </div>
  </div>
  `
}
export default cardHtml;