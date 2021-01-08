import React, { lazy, Suspense } from 'react'
import './App.css'
import Button, { ButtonType, ButtonSize } from './components/Button/index'
import Button2 from './components/Button/index2'
import { GlobalContext, defaultVal } from './context/index'
import Foo from './components/foo/index'
import UseStateBtn from './components/hooks/useState'
import UseCtx from './components/hooks/useContext'
import UseMemo from './components/hooks/useMemo'
import UseRef from './components/hooks/useRef'
import TodoList from './redux/index'
const About = lazy(
  () => import(/*webpackChunkName:"about"*/ './components/about/index')
)
function App() {
  return (
    <GlobalContext.Provider value={defaultVal}>
      <div className="App">
        <header className="App-header">
          {/* <div>111</div>
          <Button
            onClick={(e) => {
              e.preventDefault()
              console.log('1')
            }}
          >
            aa
          </Button>
          <Button
            autoFocus
            btnType={ButtonType.Primary}
            size={ButtonSize.Large}
          >
            11
          </Button>
          <Button
            btnType={ButtonType.Link}
            size={ButtonSize.Small}
            disabled={true}
            href="https://www.baidu.com"
          >
            11
          </Button>
          <Button2></Button2>
          <Suspense fallback={<div>loading</div>}>
            <About></About>
          </Suspense>
          <Foo></Foo>
          <UseStateBtn></UseStateBtn>
          <UseCtx></UseCtx>
          <UseRef></UseRef>
          <UseMemo count={'1'}></UseMemo> */}
          <TodoList></TodoList>
        </header>
      </div>
    </GlobalContext.Provider>
  )
}

export default App
