import exampleApi from '../api/example'
interface item {
  id: number
  value: number
}
export interface IAction {
  payload?:any,
  type: string
}
interface statInterface {
  list: item[]
}
interface IUser {
  [props: number]: number
}
type IUsers = Array<IUser>
export default {
  namespace: 'example',
  state: {
    list:[
      {
        value:'aaa',
        id:1
      },
      {
        value:'bbb',
        id:2
      }
    ]
  },
  //同步更新
  reducers:{
    'delete'(state:statInterface, {payload: id}: IAction) {
      return {...state, list:state.list.filter(item => item.id !== id)}
    },
    'add'(state: statInterface, {payload: addArray}: IAction) {
      return {...state, list: [...state.list, ...addArray]}
    }
  },
  //异步更新
  effects:{
    *getEgList(action: IAction, {put}: any) {
      const {users}  = yield exampleApi.getExampleList()
      const handledInfo: item[] = users.map((v: number) => {
        return {
           id: Math.random(),
           value:v
        }
      })
      yield put({
        type:'add',
        payload: handledInfo
      })
    }
  }
}
