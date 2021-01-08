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
  return state
}
export default reducer
