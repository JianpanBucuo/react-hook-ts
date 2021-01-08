import React,{useMemo, useState, memo} from 'react'


const App = () => {
    const [count, setCount] = useState(0)
    const double =  useMemo(() => {
        return count * 2
    },[count])
    return <div>
        <button onClick={() => setCount(count + 1)}>
            Click {count} Double {double }
        </button>
    </div>
}
interface HelloProps {
    count?:string
}

const Counter:React.FC<HelloProps> = memo(function(props:HelloProps) {
    console.log('render')
    return<div>{props.count}</div>
})
export default Counter