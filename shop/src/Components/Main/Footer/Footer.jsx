import React from 'react'
import '../Styles/Style.css'
import img3 from '../../images/img11.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer_nav">
        <div className="footer_nav_left">
            <h1>
                TUO <font>TOWN</font>
            </h1>
            <h2>
            легендарные ножи, создающие шедевры
            </h2>
            <p>
            Компания «Tuotown» – эксклюзивный представитель профессиональных кухонных ножей, изготовленных лучшими мастерами Восточной Азии с применением передового европейского оборудования и современных материалов. 
            </p>
            <p>
            Они отличаются идеальным балансом и фантастической остротой. Сочетают в себе вековые традиции и новейшие разработки. Также предлагаем широкий ассортимент сопутствующих товаров.
            </p>
        </div>
        <div className="footer_nav_center">
            <div className="footer_center_top">
                <p>
                Информация
                </p>
                <ul>
                    <li>
                        <a href="#">
                        Главная
                        </a>
                    </li>

                    <li>
                        <a href="#">
                        Новости 
                        </a>
                    </li>

                    <li>
                        <a href="#">
                        О компании
                        </a>
                    </li>

                    <li>
                        <a href="#">
                        Контакты
                        </a>
                    </li>
                </ul>
            </div>
            <div className="footer_center_center">
                <p>
                Каталог
                </p>
                <ul>
                    <li>
                        <a href="#">
                        Кухонные ножи
                        </a>
                    </li>

                    <li>
                        <a href="#">
                        Складные ножи 
                        </a>
                    </li>

                    <li>
                        <a href="#">
                        Точилки для 
                        </a>
                    </li>

                    <li>
                        <a href="#">
                        ножей
                        </a>
                    </li>

                    <li>
                        <a href="#">
                        Аксессуары
                        </a>
                    </li>
                </ul>
            </div>
            <div className="footer_center_bottom">
                <p>
                Мы в соцсетях
                </p>

                <ul>
                    <li>
                        <a href="#">
                        <i class="fa-brands fa-facebook"></i>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                        <i class="fa-brands fa-vk"></i>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                        <i class="fa-brands fa-square-instagram"></i>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                        <i class="fa-brands fa-youtube"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="footer_nav_right">
            <h1>
            Контактная информация
            </h1>
            <h2>
            +7 (981) 120-11-17
            </h2>
            <p>
            tuotown@mail.ru
            </p>
            <p>
            08:00 — 18:00, ежедневно
            </p>
            <p>
            Россия, Москва, МКАД, 19-й километр,
            вл20с1, вход Ф, 22-68-70
            </p>
            <img src={img3} alt="" />
        </div>
        </div>
        <div className="footer_bottom">
            <p>
            TUOTOWN © 2021 Торговая марка TUOTOWN зарегистрирована. Все права защищены и принадлежат правообладателям.
            </p>
        </div>
    </div>
  )
}

export default Footer