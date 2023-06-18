import React from 'react'
import '../Styles/Responsive.css'

const Item2 = (props) => {
  return (
    <div className='item2'>
        <div className="item2_img">
        <div className="circle">
        <i class="fa-regular fa-plus"></i>
        </div>
        </div>
        <p>
            {props.model}
        </p>
        <h2>
            {props.cost}
        </h2>
    </div>
  )
}

export default Item2