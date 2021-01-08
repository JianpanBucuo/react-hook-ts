import React, { Component } from 'react';
interface defaultState {
    count: number
}
interface defaultProps {
a:string
}
class Example extends Component<defaultProps,defaultState>{
    constructor(props:defaultProps) {
        super(props)
        this.state = {
            count: 0
        }
    }
    componentDidMount() {
        document.title = String(this.state.count)
    }
    componentDidUpdate() {
        document.title = String(this.state.count)
    }
}