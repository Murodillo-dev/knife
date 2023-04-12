import '../Styles/Style.css'
import React from 'react'

import icon1 from '../../icons/1.png'
import icon2 from '../../icons/2.png'
import icon3 from '../../icons/3.png'
import icon4 from '../../icons/4.png'
import img1 from '../../images/img3.png'
import img2 from '../../images/img4.png'


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
            <div className="body_knife">
                <div className="body_knife_cards">
                    <div className="body_knife_cards_img">
                        <a href="#">
                            Познакомьтесь с коллекцией ножей TUOTOWN
                        </a>
                        <i class="fa-solid fa-arrow-right-long"></i>
                    </div>
                    <div className="body_knife_cards_block">
                        <div className="block_image">
                            <img src={img1} alt="" />
                            <div className="circle">
                            <i class="fa-light fa-plus"></i>
                            </div>
                        </div>
                        <h1>
                        Складной нож SQ01-B
                        </h1>
                        <p>
                        850 р. <font>Новинка</font>
                        </p>
                    </div>
                    <div className="body_knife_cards_block">
                        <div className="block_image">
                            <img src={img2} alt="" />
                            <div className="circle">
                            <i class="fa-light fa-plus"></i>
                            </div>
                        </div>
                        <h1>
                        Складной нож JJ001-TUO-B
                        </h1>
                        <p>
                        12 850 р.
                        </p>
                    </div>
                    <div className="body_knife_cards_block">
                        <div className="block_image">
                            <img src={img1} alt="" />
                            <div className="circle">
                            <i class="fa-light fa-plus"></i>
                            </div>
                        </div>
                        <h1>
                        Складной нож JJ001-TUO-B
                        </h1>
                        <p>
                        12 850 р.
                        </p>
                    </div>
                    <div className="body_knife_cards_block">
                        <div className="block_image">
                            <img src={img2} alt="" />
                            <div className="circle">
                            <i class="fa-light fa-plus"></i>
                            </div>
                        </div>
                        <h1>
                        Складной нож JJ001-TUO-B
                        </h1>
                        <p>
                        12 850 р.
                        </p>
                    </div>
                    <div className="body_knife_cards_block instagram">
                        <i class="fa-brands fa-instagram"></i>
                        <p>
                            instagram
                        </p>
                    </div>
                    <div className="body_knife_cards_block">
                        <div className="block_image">
                            <img src={img2} alt="" />
                            <div className="circle">
                            <i class="fa-light fa-plus"></i>
                            </div>
                        </div>
                        <h1>
                        Складной нож JJ001-TUO-B
                        </h1>
                        <p>
                        12 850 р.
                        </p>
                    </div>
                </div>
            </div>
            <div className="email">
                <div className="email_info">
                    <p>
                    Узнавайте первым о новинках и новостях
                    </p>
                    <input type="text" placeholder='Ваш e-mail' />
                </div>
                <div className="email_block">
                <div className="email_block_cards">
                        <div className="block_image">
                            <img src={img1} alt="" />
                            <div className="circle">
                            <i class="fa-light fa-plus"></i>
                            </div>
                        </div>
                        <h1>
                        Складной нож SQ01-B
                        </h1>
                        <p>
                        850 р. 
                        </p>
                    </div>
                    <div className="email_block_cards">
                        <div className="block_image">
                            <img src={img2} alt="" />
                            <div className="circle">
                            <i class="fa-light fa-plus"></i>
                            </div>
                        </div>
                        <h1>
                        Складной нож JJ001-TUO-B
                        </h1>
                        <p>
                        850 р. 
                        </p>
                    </div>
                    <div className="email_block_cards">
                        <div className="block_image">
                            <img src={img1} alt="" />
                            <div className="circle">
                            <i class="fa-light fa-plus"></i>
                            </div>
                        </div>
                        <h1>
                        Складной нож SQ01-B
                        </h1>
                        <p>
                        850 р. <font>Новинка</font>
                        </p>
                    </div>
                    <div className="email_block_cards">
                        <div className="block_image">
                            <img src={img2} alt="" />
                            <div className="circle">
                            <i class="fa-light fa-plus"></i>
                            </div>
                        </div>
                        <h1>
                        Складной нож JJ001-TUO-B
                        </h1>
                        <p>
                        850 р. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body