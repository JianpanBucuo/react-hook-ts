import React,{useContext} from  'react'
import {GlobalContext,defaultVal} from '../../context/index'
class Button2 extends React.Component {
    static contextType = GlobalContext;
    render() {
        let val = this.context
        return <div>111,{val.a}</div>   
    }
}
Button2.contextType = GlobalContext

export default Button2