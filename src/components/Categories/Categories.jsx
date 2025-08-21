import React from 'react'
import "./categories.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaHamburger } from "react-icons/fa";
import { GiDonerKebab } from "react-icons/gi";
import { FaHotdog } from "react-icons/fa";
import { GiChickenLeg } from "react-icons/gi";
import { LuSandwich } from "react-icons/lu";
import { IoFastFoodOutline } from "react-icons/io5";
import Lavash from "../../assets/image/icons8-shawarma-60.png"
import Pitta from "../../assets/image/falafel_3296535.png"
import KFC from "../../assets/image/kfc.png"
import Twister from "../../assets/image/shawarma_3296395.png"
import Haggi from "../../assets/image/haggi.png"
import Longer from "../../assets/image/hot-dog_2448087.png"
import Fri from "../../assets/image/fries_1037775.png"



function Categories() {
  return (
    <div className='categoriesBox container'>
      <h2>Menu</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={15}
        pagination={{
          clickable: true,
        }}
        className="mySwiper categoriesItem"
      >
        <SwiperSlide><a href='#fastFood'><IoFastFoodOutline /> <span>Fast-Food</span></a></SwiperSlide>

      </Swiper>
      <Swiper
        slidesPerView={3}
        spaceBetween={15}
        pagination={{
          clickable: true,
        }}

        className="mySwiper categoriesList"
      >
        <SwiperSlide><a href="#burgers"><FaHamburger /> <span>Burger</span></a></SwiperSlide>
        <SwiperSlide><a href="#lavash"><img src={Lavash} alt='lavash' /><span>Lavash</span></a></SwiperSlide>
        <SwiperSlide><a href="#donar"><GiDonerKebab /><span>Donar</span></a></SwiperSlide>
        <SwiperSlide><a href="#hotdog"><FaHotdog /><span>Hot-Dog</span></a></SwiperSlide>
        <SwiperSlide><a href="#pitta"><img src={Pitta} alt='pitta' /><span>Pitta</span></a></SwiperSlide>
        <SwiperSlide><a href="#kfc"><img src={KFC} alt='kfc' className='kfcImg' /><span>KFC</span></a></SwiperSlide>
        <SwiperSlide><a href="#chicken"><GiChickenLeg /> <span>Chicken</span></a></SwiperSlide>
        <SwiperSlide><a href="#twister"><img src={Twister} alt='twister' /><span>Twister</span></a></SwiperSlide>
        <SwiperSlide><a href="#haggi"><img src={Haggi} alt='haggi' /><span>Haggi</span></a></SwiperSlide>
        <SwiperSlide><a href="#longer"><img src={Longer} alt='longer' /><span>Longer</span></a></SwiperSlide>
        <SwiperSlide><a href="#klab"><LuSandwich /><span>Klab Sendvich</span></a></SwiperSlide>
        <SwiperSlide><a href="#garnir"><img src={Fri} alt='fri' /><span>Garnir</span></a></SwiperSlide>
        <SwiperSlide><a href="#pizza">Pizza</a></SwiperSlide>
        <SwiperSlide><a href="#salat">Salat</a></SwiperSlide>
        <SwiperSlide><a href="#drinks">Ichimliklar</a></SwiperSlide>
        <SwiperSlide><a href="#icecream">Muzqaymoq</a></SwiperSlide>
        <SwiperSlide><a href="#moxito">Moxito</a></SwiperSlide>
        <SwiperSlide><a href="#vafli">Gongkong vafli</a></SwiperSlide>
        <SwiperSlide><a href="#kokteyllar">Kokteyllar</a></SwiperSlide>


      </Swiper>

    </div>
  )
}

export default Categories