
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

const state = {
  comingSoonFilms: [],
  nowPlayingFilms: [],
  detail: {},
  billboards: []
}

export default{
  state,
  actions,
  getters,
  mutations
}
