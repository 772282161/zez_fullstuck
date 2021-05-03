const ADD_GUN = '加枪'
const REMOVE_GUN = '减枪'

//reducer
// 新建仓库store
// 通过reducer建立
// 根据老的state和action，生成新的state
export function counter(state, action) {
  switch (action.type) {
    case '加枪':
      return state + 1
    case '减枪':
      return state - 1
    default:
      return 10
  }
}

export function addGun() {
  return { type: ADD_GUN }
}

export function addGunAsync() {
  return dispatch => {
    setTimeout(() => {
      dispatch(addGun())
    }, 2000)
  }
}

export function removeGun() {
  return { type: REMOVE_GUN }
}