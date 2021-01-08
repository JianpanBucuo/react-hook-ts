import React,{ useEffect, useState } from 'react'
import usePositionHook from './hook'
 

const MouseTracker:React.FC = () => {
    const position = usePositionHook()
    return (
        <div>
            <p>X: {position.x}</p>
            <p>Y: {position.y}</p>
        </div>
    )
}
export default MouseTracker