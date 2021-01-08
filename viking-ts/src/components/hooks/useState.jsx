import React , {Component,useState,useEffect} from 'react'

class Demo1 extends Component {
    constructor() {
        super()
        this.state = {
            count:0,
            size:{
                width:0,
                height:0
            }
        }
    }
    componentDidMount(){
        document.title = this.state.count
        window.addEventListener('resize', this.onResize)
    }
    componentDidUpdate() {
        document.title = this.state.count
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize)
    }
    onResize = () => {
        this.setState({
            size: {
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight
            }
        })
    }
    render() {
        const {count,size} = this.state
            console.log(size)
        return (<div>
            <button type='button' onClick={() => {this.setState({count: count+ 1})}}>onClick {count}</button>
        </div>)
    }
} 
function Demo2 () {
    const [count, setCount] = useState(0)
    const [size, setSize ] = useState({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    })
    const [width, setWidth] = useState(document.documentElement.clientWidth)
 
    useEffect(() => {
        document.title = count
     
    })
    useEffect(() => {
        const onResize = () => {
            console.log('1')
            setSize({
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight    
            })
        }
        document.addEventListener('click', onResize, false)
        return () => {
            document.removeEventListener('click', onResize, false)
        }
    },[])
    useEffect(() => {
        const onResize = () => {
            setWidth(document.documentElement.clientWidth)
        }
        document.addEventListener('click', onResize, false)
        return ()=> {
            document.removeEventListener('click', onResize, false)
        }
    })
    console.log(size)
    return <button 
                onClick={() => {
                    setCount(count+ 1)
            }}>{count + ' ' + size.width + ' ' + size.height + ' ' + width }</button>

}
export default Demo2