import React, { useState } from 'react'
import "./categories.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { FaHamburger, FaHotdog, FaPizzaSlice } from "react-icons/fa";
import { GiDonerKebab, GiChickenLeg } from "react-icons/gi";
import { LuSandwich } from "react-icons/lu";
import { IoFastFoodOutline } from "react-icons/io5";
import { GiCakeSlice } from "react-icons/gi";
import Lavash from "../../assets/image/icons8-shawarma-60.png"
import Pitta from "../../assets/image/falafel_3296535.png"
import KFC from "../../assets/image/kfc.png"
import Twister from "../../assets/image/shawarma_3296395.png"
import Haggi from "../../assets/image/haggi.png"
import Longer from "../../assets/image/hot-dog_2448087.png"
import Fri from "../../assets/image/fries_1037775.png"
import { FaBowlFood } from "react-icons/fa6";
import { RiDrinks2Line } from "react-icons/ri";
import { BsFillCake2Fill } from "react-icons/bs";
import { GiCupcake } from "react-icons/gi";
import { SiCakephp } from "react-icons/si";
import Gamburger from "../../assets/image/burger.png"


function Categories() {
  const [activeCategory, setActiveCategory] = useState("fastFood"); // default FastFood
  const [activeCategoryItems, setActiveCategoryItems] = useState("burgers"); 
  const categories = [
    {
      id: "fastFood",
      name: "Fast Food",
      icon: <IoFastFoodOutline />,
      background: "/src/assets/image/fastfood.jpg" // admin paneldan o'zgaradigan qism
    },
    {
      id: "pizza",
      name: "Pizza",
      icon: <FaPizzaSlice />,
      background: "/src/assets/image/pizza.jpg"
    }
    ,
    {
      id: "salat",
      name: "Salat",
      icon: <FaBowlFood />,
      background: "/src/assets/image/salat.jpg"
    }
    ,
    {
      id: "shirinlik",
      name: "Shirinliklar",
      icon: <GiCakeSlice />,
      background: "/src/assets/image/shirinlik.webp"
    }
    ,
    {
      id: "ichimlik",
      name: "Ichimliklar",
      icon: <RiDrinks2Line />,
      background: "/src/assets/image/moxito.webp"
    }
  ];
  const subCategories = {
    fastFood: [
      { id: "burgers", icon: <FaHamburger />, name: "Burger" },
      { id: "lavash", icon: <img src={Lavash} alt="lavash" />, name: "Lavash" },
      { id: "donar", icon: <GiDonerKebab />, name: "Donar" },
      { id: "hotdog", icon: <FaHotdog />, name: "Hot-Dog" },
      { id: "pitta", icon: <img src={Pitta} alt="pitta" />, name: "Pitta" },
      { id: "kfc", icon: <img src={KFC} alt="kfc" className='kfcImg' />, name: "KFC" },
      { id: "chicken", icon: <GiChickenLeg />, name: "Chicken" },
      { id: "twister", icon: <img src={Twister} alt="twister" />, name: "Twister" },
      { id: "haggi", icon: <img src={Haggi} alt="haggi" />, name: "Haggi" },
      { id: "longer", icon: <img src={Longer} alt="longer" />, name: "Longer" },
      { id: "klab", icon: <LuSandwich />, name: "Klab Sendvich" },
      { id: "garnir", icon: <img src={Fri} alt="fri" />, name: "Garnir" },
    ],
    pizza: [
      { id: "pizza", icon: <FaPizzaSlice />, name: "Pizza" },
    ],
    salat: [
      { id: "salat", icon: <FaBowlFood />, name: "Salat" },
    ],
    shirinlik: [
      { id: "tort", icon: <BsFillCake2Fill />, name: "Tort" },
      { id: "vafli", icon: <GiCupcake />, name: "Gongkong Vafli" },
      { id: "vanilla", icon: <SiCakephp />, name: "Vanilla" },
    ],
    ichimlik: [
      { id: "gazirovka", icon: <RiDrinks2Line />, name: "Gazirovka" },  
      { id: "moxito", icon: <RiDrinks2Line />, name: "Moxito" },
      { id: "cola", icon: <RiDrinks2Line />, name: "Cola" },
      { id: "fanta", icon: <RiDrinks2Line />, name: "Fanta" },
      { id: "sprite", icon: <RiDrinks2Line />, name: "Sprite" },
      { id: "suv", icon: <RiDrinks2Line />, name: "Suv" },
    ]
  };

  const handleCategoryClick = {
    burgers: [
      { id: "burgers", picture: <img src={Gamburger} alt='Gamburger'/>, name: "Gamburger", price: 32000 },
      { id: "burgers", picture: <img src={Gamburger} alt='Gamburger'/>, name: "Chizburger", price: 35000 },
      { id: "burgers", picture: <img src={Gamburger} alt='Gamburger'/>, name: "Big Gamburger", price: 43000 },
      { id: "burgers", picture: <img src={Gamburger} alt='Gamburger'/>, name: "Big Chizburger", price: 48000 },
    ]
  }

  return (
    <div className='categoriesBox container'>
      {/* Asosiy kategoriyalar */}
      <Swiper
        slidesPerView={2}
        spaceBetween={15}
        pagination={{ clickable: true }}
        className="mySwiper categoriesItem"
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id}>
            <button
              onClick={() => setActiveCategory(category.id)}
              className="categoryBtn"
              style={{
                backgroundImage: `url(${category.background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                border: "none",
                borderRadius: "12px",
                color: "white",
                fontWeight: "bold",
                cursor: "pointer",
                height: "150px",
                width: "150px",
              }}
            >
              <span className='categoryText'>{category.icon}
                <span>{category.name}</span>
              </span>
            </button>
          </SwiperSlide>
        ))}

      </Swiper>

      {/* Sub-kategoriyalar */}
      <Swiper
        slidesPerView={3}
        spaceBetween={15}
        pagination={{ clickable: true }}
        className="mySwiper categoriesList"
      >
        {subCategories[activeCategory].map((item) => (
          <SwiperSlide key={item.id}
            onClick={() => setActiveCategoryItems(item.id)}>
            <a href={`#${item.id}`}>
              {item.icon}
              <span>{item.name}</span>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
      modules={[EffectCoverflow, Pagination]}
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView="auto"
      coverflowEffect={{
        rotate: 0,
        stretch: -34,
        depth: 307,
        scale: 0.65,
        modifier: 0.5,
        slideShadows: true,
      }}
      speed={800} // transition duration
      pagination={{ clickable: true }}
        spaceBetween={15}
        className="mySwiper FoodItemSwiper"
      >
        {handleCategoryClick[activeCategoryItems].map((items) => (
          <SwiperSlide key={items.id}>
            <div className="foodItem" id={items.id}>
              <div className='foodImg'>
                {items.picture} 
              </div>
              <h3>{items.name}</h3>    
              <p>{items.price} UZS</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Categories;