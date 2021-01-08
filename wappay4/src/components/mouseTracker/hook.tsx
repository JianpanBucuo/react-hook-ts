import  { useEffect, useState } from 'react'

const useHook =  () => {
    const [position, setPosition] = useState({x:0, y:0})
    useEffect(() => {
        const updateMouse = (e:TouchEvent) => {
            setPosition({ 
                x: e.changedTouches[0].clientX,
                y: e.changedTouches[0].clientY
            })
        }
        document.addEventListener('touchmove',updateMouse)
        return () => {
            console.log('revmoce')
            document.removeEventListener('touchmove', updateMouse)
        }
    },[] )
    return position
}
export default useHook 
