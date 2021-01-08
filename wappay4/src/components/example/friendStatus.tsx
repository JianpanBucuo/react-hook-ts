import { Component } from "react";
const chatAPI = {
    subscribeToFriendStatus(id:number, func?: Function) {
    
    },
    unSubscribeToFriendStatus(id: number, func?: Function) {

    }
}
interface Friend {
    id: number
}
interface defaultProps {
    friend: Friend
}
interface defaultState {
    isOnline: null | string
}
class FriendStatus extends Component<defaultProps,defaultState> {
    constructor(props: defaultProps) {
        super(props)
        this.state = {
            isOnline: null
        }
        this.handleStatusChange = this.handleStatusChange.bind(this)
    }
    handleStatusChange(status: defaultState) {
        this.setState({
            isOnline: status.isOnline
        })
    }
    componentDidMount() {
        const {friend} = this.props
        chatAPI.subscribeToFriendStatus(
             friend.id, this.handleStatusChange
        )
    }
    componentWillUnmount() {
        const {friend} = this.props
        chatAPI.unSubscribeToFriendStatus(friend.id, this.handleStatusChange)
    }
    componentDidUpdate() {

    }
}