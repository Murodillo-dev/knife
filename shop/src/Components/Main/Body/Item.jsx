import React from 'react'

const Item = (props) => {
  return (
    <div className='item'>
        <div className="item_img">
        <img src={props.img}/>
        </div>
        <h1>
            {props.name}
        </h1>
    </div>
  )
}

export default Item