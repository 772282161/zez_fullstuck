import {
  ACTION_SET_FROM
} from './action_types.js'

export function setFrom(from) {
  return {
    type:ACTION_SET_FROM,
    payload:from
  }
}