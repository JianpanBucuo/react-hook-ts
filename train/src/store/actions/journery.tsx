import Journey from '../../components/journey'
import * as journeryAction from '../actionType/journey'

export const setFrom = (from: string) => {
  return {
    type: journeryAction.ACTION_SET_FROM,
    payload: from
  }
}

export const setTo = (to: string) => {
  return {
    type: journeryAction.ACTION_SET_TO,
    payload: to
  }
}
export const setIsCitySelectorVisible = (payload: any) => {
  return {
    type: journeryAction.ACTION_SET_ISCITYSELECTORVISIBLE,
    payload
  }
}
export const setCityData = (payload: any) => {
  return {
    type: journeryAction.ACTION_SET_CITYDATA,
    payload
  }
}

export const setiIsLoadingCityData = (payload: any) => {
  return {
    type: journeryAction.ACTION_SET_ISLOADINGCITYDATA,
    payload
  }
}

export const setIsDataSelectorVisible = (payload: any) => {
  return {
    type: journeryAction.ACTION_SET_ISDATASELECTORVISIBLE,
    payload
  }
}

// export const setHighSpeed = (payload: any) => {
//   return {
//     type: journeryAction.ACTION_SET_HIGHSPEED,
//     payload
//   }
// }
export const toggleHighSpeed = () => {
  return (dispatch: any, getState: any) => {
    const { journey } = getState()
    console.log(journey)
    dispatch({
      type: journeryAction.ACTION_SET_HIGHSPEED,
      highSpeed: !journey.highSpeed
    })
  }
}
export const showCitySelector = (currentSelectingLeftCity: string) => {
  return (dispatch: any) => {
    dispatch({
      type: journeryAction.ACTION_SET_ISCITYSELECTORVISIBLE,
      payload: false
    })
    dispatch({
      type: journeryAction.ACTION_SET_CURRENTSELECTINGLEFTCITY,
      payload: currentSelectingLeftCity
    })
  }
}

export function hideCitySeletor() {
  return {
    type: journeryAction.ACTION_SET_ISCITYSELECTORVISIBLE,
    payload: false
  }
}
export function setSeletedCity(city: string) {
  return (dispatch: any, getState: any) => {
    const { journey } = getState()
    if (journey.currentSelectingLeftCity) {
      dispatch(setFrom(city))
    } else {
      dispatch(setTo(city))
    }
  }
}

export function showDateSelector() {
  return {
    type: journeryAction.ACTION_SET_ISDATASELECTORVISIBLE,
    payload: true
  }
}

export function hideDateSelector() {
  return {
    type: journeryAction.ACTION_SET_ISDATASELECTORVISIBLE,
    payload: false
  }
}

export function exchangeFromTo() {
  return (dispatch: any, getState: any) => {
    const { journey } = getState()
    const { from, to } = journey
    dispatch(setFrom(to))
    dispatch(setTo(from))
  }
}
