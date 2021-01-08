### 样式解决方案

安装依赖
npm install node-sass --save

scss parcel ?

Context
提供了一种方式，能够让数据在组件数种传递而不必一级一级手动传递

当数据改变时，会重新渲染

```js
// app.js
import { createContext } from 'react'
const defaultVal = {
  a: 1
}
export const BatteryContext = createContext(defaultVal)

// components
import { BatteryContext } from '../../App'
import React, { useContext } from 'react'
const ctx = useContext(BatteryContext)

ctx.a // 1
//如果有两个 context，嵌套起来即可
```

ContextType

### lazy

异步加载组件
MPA

### Suspense

延迟加载时，填充组件

<!-- 延迟加载 -->

memo 解决运行时的效率问题
PureComponent 会在 shouldComponentUpdata 比较 props 值，如无变化，则不会重新渲染，（对象不进行重新渲染）

Hook 与 component

类组件问题

1. 状态逻辑复用难
2. 趋向复杂难以维护，相关逻辑的代码会打散到不同声明周期函数中
3. this 指向复杂

Hooks 优势

1. 函数组件无 this 问题
2. 自定义 Hook 方便复用状态逻辑
3. 副作用的关注点分离 （并不是发生在数据向视图转换中发生的逻辑）
   绑定解绑事件，持久化缓存，获取 dom 元素，发起网络请求

Effect
副作用时机
Mount 之后
Update 之后
Unmount 之前

### useMemo useCallBack

useMemo 和 useEffect 的区别在于执行时机，
由于 useEffect 执行的是副作用，执行时机是渲染之后
而 useMemo 是拿到返回值之后渲染，返回值可以直接参与渲染， useMemo 是渲染期间执行

### useRef

获取子组件或者 DOM 节点的句柄

渲染周期之间共享数据的存储

### redux

1. 单一数据源
2. 状态不可变
3. 纯函数修改状态
