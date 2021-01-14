import React, { useCallback } from 'react'
import { connect } from 'react-redux'
import './App.scss'

import DepartDate from './components/departDate'
import Header from './components/header'
import HighSpeed from './components/highSpeed'
import Journery from './components/journey'
import Submit from './components/submit'
import { exchangeFromTo, showCitySelector } from './store/actions/journery'
function App(props: any) {
  const { from, to } = props
  const onBack = useCallback(() => {
    window.history.back()
  }, [])
  return (
    <div className="App">
      <Header title="火车票" onBack={onBack} />
      <Journery
        exchangeFromTo={exchangeFromTo}
        showCitySelector={showCitySelector}
        from={from}
        to={to}
      ></Journery>
      <DepartDate></DepartDate>
      <HighSpeed></HighSpeed>
      <Submit></Submit>
    </div>
  )
}

function mapStateToProps(state: any) {
  return state
}
function mapDispatchtoProps(dispatch: any) {
  return dispatch
}
export default connect(mapStateToProps, mapDispatchtoProps)(App)
