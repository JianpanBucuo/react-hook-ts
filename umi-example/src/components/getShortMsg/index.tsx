import React, { FC, useEffect, useRef, useState } from 'react'
import './index.less'
interface IGetShortMsg {}
const GetShortMsg: FC<IGetShortMsg> = (props: IGetShortMsg) => {
  const [count, setCount] = useState(60)
  const [sendingMsg, setSendingMsg] = useState(false)

  const getMsg = () => {
    if (sendingMsg) {
      return
    }
    setSendingMsg(true)
  }
  useEffect(() => {
    let x = 60
    setInterval(() => {
      setCount(--x)
    }, 1000)
  }, [sendingMsg])
  return (
    <div className="msg" onClick={getMsg}>
      {count + 's'}
    </div>
  )
}
export default GetShortMsg
