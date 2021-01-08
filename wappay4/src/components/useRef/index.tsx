import React,{useState, useEffect, useRef} from 'react'

const useLike = () => {
    const [like,setLike] = useState(0)
    
    // ref在所有render里保持着唯一的引用
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
    const {like , setLike, } = useLike()
    const likeRef = useRef(0)
    const didMountRef = useRef(false)
    const domRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        if(didMountRef.current) {
            console.log('this is updated')
        } else {
            didMountRef.current = true
        }
    })
    useEffect(() => {
        if(domRef && domRef.current) {
            domRef.current.focus()
        }
    })
    function handleAlertClick () {
        setTimeout(() => {
        alert('clicked ' + like + 'ref ' + likeRef.current)
        }, 3000)
    }
    return (
        <div>
            <input type="text" ref={domRef}></input>
            <p>You clicked { like } times</p>
            <button onClick={() => handleAlertClick()}>alert</button>
            <button onClick={() => {setLike(like + 1);likeRef.current++}}>Add Count</button>
            <button onClick={() => setOn(!on)}>{ on ? 'ON' : 'OFF'}</button>
        </div>
    )
}
export default LikeButton
 

 