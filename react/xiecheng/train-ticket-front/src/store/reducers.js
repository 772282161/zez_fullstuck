import {
  ACTION_SET_FROM
} from './action_types';

export default {
  from: (state = '北京', action)=> {
    const { type, payload } = action;
    switch(type) {
      case ACTION_SET_FROM:
        return payload;
      default:
        break
    }
    return state
  }
}