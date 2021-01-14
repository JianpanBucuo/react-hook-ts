import React from 'react'
import './index.scss'
import switchImg from './imgs/switch.svg'
interface JourneyProps {
  from: string
  to: string
  exchangeFromTo(): any
  showCitySelector(): any
}
const Journey: React.FC<JourneyProps> = (props: JourneyProps) => {
  const { from, to, exchangeFromTo, showCitySelector } = props
  return (
    <div className="journey">
      <div className="journey-station">
        <input
          type="text"
          readOnly
          name="from"
          value={from}
          className="journey-input journey-from"
        ></input>
      </div>
      <div className="journey-switch" onClick={() => exchangeFromTo()}>
        <img src={switchImg} width="70" height="40" alt="switch" />
      </div>
      <div className="journey-station">
        <input
          type="text"
          readOnly
          name="to"
          value={to}
          className="journey-input journey-to"
        ></input>
      </div>
    </div>
  )
}
export default Journey
