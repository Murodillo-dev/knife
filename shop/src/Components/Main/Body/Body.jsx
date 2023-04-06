import React from 'react'

import icon1 from '../../icons/1.png'
import icon2 from '../../icons/2.png'
import icon3 from '../../icons/3.png'
import icon4 from '../../icons/4.png'

const Body = () => {
    return (
        <div className='body'>
            <div className="body_icons">
                <ul>
                    <li>
                        <a href="#">
                            <img src={icon1} />
                            <p>
                            Кухонные ножи
                            </p>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <img src={icon2} />
                            <p>
                            Складные ножи
                            </p>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <img src={icon3} />
                            <p>
                            Точилки для ножей
                            </p>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <img src={icon4} />
                            <p>
                            Точилки для ножей
                            </p>
                        </a>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Body