import React from 'react'
import '../Styles/Style.css'

const Item = (props) => {
  return (
    <div className='item'>
      <div className="item_data">
      <p>
        {props.data}
      </p>
      </div>
        <div className="item_info">
        <h1>
            {props.info}
        </h1>
        </div>
    </div>
  )
}


export default Item