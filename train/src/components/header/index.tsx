import React from 'react'
import './index.scss'

interface HeaderProps {
  onBack(): void
  title: string
}
const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const { onBack, title } = props
  return (
    <div className="header">
      <div className="header-back" onClick={onBack}>
        <svg width="42" height="42">
          <polyline
            points="25,13 16,21 25,29"
            stroke="#fff"
            strokeWidth="2"
            fill="none"
          ></polyline>
        </svg>
      </div>
      <h2 className="header-title">{title}</h2>
      <span></span>
    </div>
  )
}
export default Header
