import shop from '../../api/shop'
// 在vue中支持模块化(modules)
const state = () => ({
  all:[],
})
const getters = {

}
// actions 是发起api请求的地方 
const actions = {
  getAllProducts ({commit}) {
    shop.getProducts(products => {
      commit('setProducts',products)
    })
  }
}
const mutations = {
  setProducts (state, products) {
    state.all = products
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}