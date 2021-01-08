import React from 'react'
import { connect } from 'react-redux'
import './App.css'
import DepartDate from './components/departDate'
import Header from './components/departDate'
import HighSpeed from './components/highSpeed'
import Journery from './components/journey'
import Submit from './components/submit'
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Journery></Journery>
      <DepartDate></DepartDate>
      <HighSpeed></HighSpeed>
      <Submit></Submit>
    </div>
  )
}

function mapStateToProps() {
  return {}
}
function mapDispatchtoProps() {
  return {}
}
export default connect(mapStateToProps, mapDispatchtoProps)(App)
