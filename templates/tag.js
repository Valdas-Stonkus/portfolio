// template of tag
function tagHtml(tag) {
  
  return `
  <input id="${tag}" type="radio" name="rad" /><label for="${tag}">${tag}</label>
  `
}
export default tagHtml;