export function updateDeadline ({ commit }, payload) {
  commit('updateDeadline', payload)
  console.log('Deadline updated')
}

export function updateContent ({ commit }, payload) {
  commit('updateContent', payload)
}

export function newContentItem ({ commit }, payload) {
  commit('newContentItem', payload)
}

export function updateCategories ({ commit }, payload) {
  console.log('Update')
  commit('updateCategories', payload)
}