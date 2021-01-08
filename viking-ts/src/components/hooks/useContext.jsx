import  React,{ useEffect, useState, useContext, Component,Fragment } from 'react'
import {GlobalContext} from '../../context/index'
// 三种写法
class Demo extends Component {
    render() {
        return <Fragment>
            <GlobalContext.Consumer>
                {val => <div>demo:{val.a}</div>}
            </GlobalContext.Consumer>
        </Fragment>
    }
}
class Demo1 extends Component {
    static contextType = GlobalContext
    render() {
        const ctx = this.context
        return <div>demo2: {ctx.a}</div>
    }
}
const Demo2 = () => {
    const count = useContext(GlobalContext)
    return <div>demo3: {count.a}</div>
}
export default Demo2