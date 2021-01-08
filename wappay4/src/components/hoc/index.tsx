import React from 'react'
import axios from 'axios'
interface ILoaderState {
    data: any,
    isLoading: boolean
}
interface ILoaderProps {
    data: any
}   
const withLoader = <P extends ILoaderState>(WrappedComponent: React.ComponentType<P>, url: string) => {
    return class LoaderCompnent extends React.Component<Partial<ILoaderProps>,ILoaderState> {
        constructor(props: any) {
            super(props)
            this.state = {
                data: null,
                isLoading: false
            }
        }
        componentDidMount() {
            this.setState({
                isLoading: true
            })
            axios.get(url).then(result => {
                this.setState({
                    data: result.data,
                    isLoading: false
                })
            })
        }
        render() {
            const {data, isLoading} = this.state
            if (isLoading || !data) {
                return <p>data is loading </p> 
            }
            return <WrappedComponent {...this.props as P } data={data} />
        }
    }
}
export default withLoader