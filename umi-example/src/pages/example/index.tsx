import React, { useEffect, Dispatch } from 'react'
import { connect } from 'dva'
import { IAction } from '../../models/example'
import './index.less'
import Button from '../../components/button/index'
import GetShortMsg from '../../components/getShortMsg/index'
const Home = (props: any) => {
  const { list, deleteA, getList } = props
  const deleteItem = (id: number) => {
    deleteA(id)
  }
  useEffect(() => {
    getList()
    console.log('effect')
  }, [])
  const btnClickEvent = () => {}
  return (
    <div>
      Home
      {list.map((v: any) => {
        return (
          <div className="example" key={v.id} onClick={() => deleteItem(v.id)}>
            {v.value}
          </div>
        )
      })}
      <Button clickEvent={btnClickEvent}>立即支付</Button>
      <GetShortMsg></GetShortMsg>
    </div>
  )
}
const mapStateToProps = (state: any) => ({
  list: state.example.list,
})
const mapDispatchToProps = (dispatch: Dispatch<IAction>) => {
  return {
    deleteA(id: number) {
      dispatch({
        type: 'example/delete',
        payload: id,
      })
    },
    getList() {
      dispatch({
        type: 'example/getEgList',
      })
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
