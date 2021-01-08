import React,{Fragment} from 'react';
interface HelloProps {
    msg?:string
}

const Hello:React.FC<HelloProps> = (props) => {
    return <h2>{props.msg}</h2>
}
Hello.defaultProps = {
    msg:'aaaa'
}
export default Hello