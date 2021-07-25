import parsedDate from './methods/parsedDate'

export function updateDeadline (state, payload) {
  var newDate = parsedDate(payload.date)
  Object.assign(state.articles[payload.ID], { deadline: newDate })
}

export function updateContent (state, payload) {
  if ('title' in payload) {
    Object.assign(state.articles[payload.ID], { title: payload.title })
  } else if ('content' in payload) {
    Object.assign(state.articles[payload.ID].content[payload.content_ID], { string: payload.content })
  }
}

export function newContentItem(state, payload) {
  console.log("new content")
}

export function updateCategories(state, payload) {
  Object.assign(state.articles[payload.ID], { categories: payload.categories })
}