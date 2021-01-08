import React,{Fragment,useState, useEffect} from 'react'
import Hello from '../../components/hello/index2'
import Hello2 from '../../components/index2'
import LikeButton from '../../components/likebutton/index'
import RefButton from '../../components/useRef/index'
import MouseTracker from '../../components/mouseTracker/index'
import WithLoader from '../../components/hoc/index'
import useURLLoader from '../../components/cutomHook/index'
// https://dog.ceo/api/breeds/image/random
interface IThemeProps {
    [key:string]: {color: string, backgroundColor: string}
}
const iTheme: IThemeProps = {
    'light':{
        color:'#000',
        backgroundColor:'#eee'
    },
    'dark':{
        color:'#fff',
        backgroundColor:'#222'
    }
}
export const ThemeContext = React.createContext(iTheme.light)
interface IShowResult {
    message: string;
    status: string;
}
const DogShow: React.FC<{data: IShowResult}> = ({data}) => {
    return <div>
                <h2>Dog show: {data.status}</h2>
                <img src={data.message}></img>
            </div>
}

const WrappedDogShow = WithLoader(DogShow, 'https://dog.ceo/api/breeds/image/random')

const DogShowWithHook = () => {
    const [show, setShow] = useState(0)
    const [data , loading] = useURLLoader('https://dog.ceo/api/breeds/image/random',[show])
    const dogRes = data as IShowResult
    if(loading) {
        return  <Fragment>
                    <p>is loading ....</p>
                </Fragment> 
        
    } else  {
        return <Fragment>
                    <button onClick={() => setShow(show + 1)}>Refresh</button>
                    <hr />
                    <img src={dogRes && dogRes.message} alt=''></img>
                </Fragment> 
        
    }  
}

export default function App2() {
    return <Fragment>
            <ThemeContext.Provider value={iTheme.light}>
            <Hello msg='world'></Hello>
                <Hello2 ></Hello2>
                <LikeButton/>  
                <RefButton></RefButton>
                <MouseTracker></MouseTracker>
                {/* <WrappedDogShow ></WrappedDogShow>
                <DogShowWithHook></DogShowWithHook> */}
            </ThemeContext.Provider>
        </Fragment>
  }