import React from 'react'

const BtnComponent = ({text,styleName}) => {
  return (
    <div>
      <button className={styleName}>{text}</button>
    </div>
  )
}

export default BtnComponent
