import { type } from 'os'

export const a = 1
const isDone: boolean = true
const binaryNum: number = 0b1111
//联合类型 ( | )
const numOrString: number | string = 1

//数组
//将相同类型的数据组合在一起
const array: number[] = [1, 2, 43, 5]

function test() {
  console.log(arguments.length)
}

//元组
//将不同类型的数据组合在一起

const user: [string, number] = ['2', 1]
//interface 怎样定义对象

interface Iperson {
  readonly id: number
  name: string
  age: object
  [props: number]: string
}
//readOnly 只有在创建的时候可以赋值,只读属性
const per: Iperson = {
  id: 1,
  name: '1',
  age: {}
}
per.id = 1

//函数
function z(a: number, b: number, c?: number): number {
  if (typeof c === 'number') {
    return a + b + c
  }
  return a + b
}

const add: (a: number, b: number, c?: number) => number = z
//类： 一切事物的抽象特点
//对象： 类的实例
//封装：实现细节隐藏起来
// 继承：子类继承父类
// 多态：将父类方法覆盖
class A {
  a() {}
}
interface a {}
class B implements A, a {
  a() {}
}
const enum Direction {
  Up,
  Down,
  Left,
  Right
}

//常量枚举和计算枚举

//泛型
function echo<T>(arg: T): T {
  return arg
}
echo(1)
echo('123')
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}

interface Ilength {
  length: number
}
function echoWithArr<T extends Ilength>(arg: T) {
  console.log(arg.length)
}

echoWithArr('123')

class Queue<T> {
  private data: T[] = []
  push(item: T) {
    this.data.push(item)
  }
  pop() {
    this.data.pop()
  }
}
interface Iplus<T> {
  (a: T, b: T): T
}

declare var jQuery: () => any
