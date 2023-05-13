import '../Styles/Style.css'
import React from 'react'
import Item from './Item'

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
            <div className="new">
                <div className="new_info">
                    <a href="#">
                        НОВИНКИ
                    </a>
                    <a href="#">
                        ПОПУЛЯРНОЕ
                    </a>
                </div>
                <div className="new_block">
                    <div className="new_block_cards">
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
                    <div className="new_block_cards">
                            <div className="block_image">
                                <img src={img2} alt="" />
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
                    <div className="new_block_cards">
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
                    <div className="new_block_cards">
                            <div className="block_image">
                                <img src={img2} alt="" />
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
                </div>
            </div>
            <div className="town">
                <div className="town_top">
                    <div className="town_top_left"></div>
                    <div className="town_top_right">
                        <h1>
                        «Tuotown» – легендарные ножи, создающие шедевры
                        </h1>
                        <p>
                        Компания «Tuotown» – эксклюзивный представитель профессиональных кухонных ножей, изготовленных лучшими мастерами Восточной Азии с применением передового европейского оборудования и современных материалов. Они отличаются идеальным балансом и фантастической остротой. Сочетают в себе вековые традиции и новейшие разработки. Также предлагаем широкий ассортимент сопутствующих товаров.
                        </p>
                    </div>
                </div>
                <div className="town_bottom">
                    <div className="town_bottom_left">
                        <p>
                        Истинная красота ножа — совершённая функциональность и визуальная гармония. Этот предмет издревле сопутствовал человеку: от зари цивилизации до сегодняшних дней. На протяжении всей истории человечества он был верным помощником, незаменимым инструментом и грозным оружием. Предлагаем изделия Hi-end качества по доступным ценам настоящим ценителям японских ножей.
                        </p>
                        <p>
                        Отличительной чертой нашего интернет-магазина являются уникальные торговые предложения, эксклюзивность продукции, неизменно высокое качество и выгодные цены. Осуществляем продажи элитных японских кухонных ножей для профессионалов и любителей. В обширной ассортиментной линейке представлены изделия для различных потребностей и любого бюджета — от столовых приборов до шеф-ножей.
                        </p>
                        <h1>
                        Ножи «Tuotown» – это главный инструмент поваров и секрет кулинарного мастерства
                        </h1>
                    </div>
                    <div className="town_bottom_right"></div>
                </div>
            </div>
            <div className="all">
                <p>
                Всё самое интересное о ножах
                </p>
                <Item data='4 августа 2021 19:24' info='Традиционные виды японских кухонных ножей'/>
                <Item data='4 августа 2021 19:24' info='Всемирная история режущих клинков — взгляд в прошлое'/>
                <Item data='4 августа 2021 19:24' info='Как ухаживать за японскими кухонными ножами?'/>
            </div>
        </div>
    )
}

export default Body