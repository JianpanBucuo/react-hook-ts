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

export const setHighSpeed = (payload: any) => {
  return {
    type: journeryAction.ACTION_SET_HIGHSPEED,
    payload
  }
}
export const toggleHighSpeed = () => {
  return (dispatch: any, getState: any) => {
    const { journey } = getState()

    dispatch({
      type: journeryAction.ACTION_SET_HIGHSPEED,
      highSpeed: !journey.highSpeed
    })
  }
}
