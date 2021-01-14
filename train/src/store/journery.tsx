import * as journeryAction from './actionType/journey'
const defaultState = {
  from: '北京',
  to: '上海',
  isCitySelectorVisible: false,
  currentSelectingLeftCity: false,
  cityData: null,
  isLoadingCityData: false,
  isDataSelectorVisible: false,
  highSpeed: false
}

const reducer = (state = defaultState, action: any) => {
  if (action.type === journeryAction.ACTION_SET_FROM) {
    return { ...state, from: action.payload }
  }

  if (action.type === journeryAction.ACTION_SET_TO) {
    return { ...state, to: action.payload }
  }
  if (action.type === journeryAction.ACTION_SET_ISCITYSELECTORVISIBLE) {
    return { ...state, isCitySelectorVisible: action.payload }
  }
  if (action.type === journeryAction.ACTION_SET_CURRENTSELECTINGLEFTCITY) {
    return { ...state, currentSelectingLeftCity: action.payload }
  }
  if (action.type === journeryAction.ACTION_SET_CITYDATA) {
    return { ...state, cityData: action.payload }
  }
  if (action.type === journeryAction.ACTION_SET_ISLOADINGCITYDATA) {
    return { ...state, isLoadingCityData: action.payload }
  }
  if (action.type === journeryAction.ACTION_SET_ISDATASELECTORVISIBLE) {
    return { ...state, isDataSelectorVisible: action.payload }
  }
  if (action.type === journeryAction.ACTION_SET_HIGHSPEED) {
    return { ...state, highSpeed: action.payload }
  }
  return state
}
export default reducer
