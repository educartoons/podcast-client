import * as api from '@/api/podcasts'

export const getPodcasts = ({ commit }, page = 1) => {

  api.getPodcasts(page).then((response) => {
    commit('setPodcasts', response.data.data)
    commit('setPageData',{
      current: page,
      max: response.data.meta.pagination.total_pages
    })
  })
}

export const getMorePodcasts = ({ commit, state }, page = 1) => {

  api.getPodcasts(state.page.current + 1).then((response) => {
    // append to podcasts
    commit('appendToPodcasts', response.data.data)
    commit('setPageData',{
      current: state.page.current + 1
    })
  })
}

export const getPodcast = ({ commit }, id) => {
  return api.getPodcast(id).then((response) => {
    return response.data.data
  //  commit('player/setPlaying')
  })
}
