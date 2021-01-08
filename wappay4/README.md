# React

create-react-app my-react-ts-app --template typescript
MVC 中的 V

Functional Component 函数式组件不能使用 state 和生命周期的钩子函数

Hook 解决的问题

1. 组件状态逻辑的复用

HOC， render Props

Hook 是一个特殊的函数
它可以让你勾入 react 特性

在现有的函数组件中使用 hook

纯函数：输入确定的情况， 输出一定确定

网络请求，DOM 操作，订阅数据来源， 和纯函数界面渲染做的是不想关的事情，称之为副作用

无需清除的副作用

需清除的副作用

1. 如果特定值在两次渲染时，没有发生变化，则通知 react，跳出 effect 的调用

3-9 自定义 hook

Higher Order Component
HOC 模式： 对组件逻辑重用的一种解决方案
高阶组件是一个函数，接受一个组件作为参数，返回一个新的组件
