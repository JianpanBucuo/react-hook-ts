import React, { FC } from 'react'
import classNames from 'classnames'
import './index.less'
interface IButton {
  //点击事件
  clickEvent(): void
  children: any
}

const Button: FC<IButton> = (props: IButton) => {
  const classes = classNames('wp-button')
  const { clickEvent } = props
  return (
    <div className={classes} onClick={clickEvent}>
      {props.children}
    </div>
  )
}

export default Button
