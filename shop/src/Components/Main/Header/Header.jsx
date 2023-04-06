import '../Styles/Style.css'
import React, { useRef, useState, Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Autoplay, Pagination, Navigation } from "swiper";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Header = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='header'>
      <div className="header_nav">
        <ul>
          <div className="header_nav_left">
            <li>
              <a href="#">
              <i class="fa-sharp fa-solid fa-braille"></i>
                {/* <div className="menu">
                  <Button variant="primary" onClick={handleShow}>
                    <i class="fa-sharp fa-solid fa-braille"></i>
                  </Button>

                  <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      Some text as placeholder. In real life you can have the elements you
                      have chosen. Like, text, images, lists, etc.
                    </Offcanvas.Body>
                  </Offcanvas>
                </div> */}

              </a>
            </li>

            <li>
              <a href="#">
                <i class="fa-sharp fa-solid fa-location-dot"></i>
              </a>
            </li>

            <li>
              <a href="#">
                8 981 120-11-17
              </a>
            </li>
          </div>

          <div className="header_nav_center">
            <li>
              <a href="#">
                <p>
                  TUO <font>TOWN</font>
                </p>
              </a>
            </li>
          </div>

          <div className="header_nav_right">
            <li>
              <a href="#">
                <i class="fa-solid fa-bag-shopping"></i>
              </a>
            </li>

            <li>
              <a href="#">
                <i class="fa-solid fa-envelope"></i>
              </a>
            </li>

            <li>
              <a href="#">
                <i class="fa-solid fa-magnifying-glass"></i>
              </a>
            </li>
          </div>
        </ul>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay,Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>

      <div className="header_info">
        <h1>
          Исключительное качество без компромиссов
        </h1>
        <p>
          Ножи «Tuotown» – это главный инструмент поваров и секрет кулинарного мастерства
        </p>
        <button>
          ПОДРОБНЕЕ
        </button>
      </div>

    </div>
  )
}

export default Header