import React,{useState, useEffect, useContext} from 'react'
import {ThemeContext} from '../../pages/home/index'
const useLike = () => {
    const [like,setLike] = useState(0)
    useEffect(() => {
        console.log('document.title is changing')
        document.title = String(like) 
    })
    return {
        like,setLike
    }
}
const LikeButton:React.FC = () => {
    const [on, setOn] = useState(true)
    const {like , setLike} = useLike()
    const theme = useContext(ThemeContext)
    console.log(theme)
    const style = {
        background: theme.backgroundColor,
        color: theme.color
    }
    return (
        <div>
            <p>You clicked { like } times</p>
            <button style={style} onClick={() => setLike(like + 1)}>Add Count</button>
            <button onClick={() => setOn(!on)}>{ on ? 'ON' : 'OFF'}</button>
        </div>
    )
}
export default LikeButton
 

 