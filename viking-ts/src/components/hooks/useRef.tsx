import React , {useRef,forwardRef} from 'react'

interface childProps {
    ref?: React.RefObject<HTMLElement>
}
const Child = (props:childProps) => {
    return <div>CHild</div>
}

// const Demo = () => {
//     const child = useRef<HTMLElement>(null)
    
//     const onButtonClick = () => {
//         console.log(child.current)
//     }
//     return <div>
//         <div onClick={onButtonClick}>
//             <Child></Child>
//             <input  ref={child} type="text" />
//         </div>
        
//     </div>
// }
function TextInputWithFocusButton() {
    const inputEl = useRef<HTMLInputElement>(null);
    const onButtonClick = () => {
      // `current` 指向已挂载到 DOM 上的文本输入元素
      if(inputEl.current !== null) {
          inputEl.current.focus();
      }
      
    };
    return (
      <>
        <input ref={inputEl} type="text" />
        <button onClick={onButtonClick}>Focus the input</button>
      </>
    );
  }

export default TextInputWithFocusButton