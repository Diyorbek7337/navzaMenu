import React from 'react'
import Avatar from "../../assets/image/user.png"
import { useState, useEffect } from 'react';
import  "./header.css"
import { IoMdNotificationsOutline  } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";



function Header() {

const [location, setLocation] = useState("Aniqlanmoqda...");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          );
          const data = await response.json();

          if (data.address) {
            const city =
              data.address.city ||
              data.address.town ||
              data.address.village ||
              data.address.county;

            const street =
              data.address.road ||
              data.address.neighbourhood ||
              data.address.suburb;

            const fullLocation = `${street ? street + ", " : ""}${city || "Aniqlanmadi"}`;
            setLocation(fullLocation);

            // ✅ Avtomatik ogohlantirish
            if (city && city.toLowerCase().includes("shurchi")) {
              console.log("✅ Siz Shurchidasiz. Zakaz qabul qilinadi!");
            } else {
              alert("❌ Afsuski, hozircha faqat Shurchi hududiga yetkazib beramiz.");
            }
          } else {
            setLocation("Aniqlanmadi");
          }
        } catch (error) {
          setLocation("Xatolik yuz berdi");
          console.log(error)
        }
      });
    } else {
      setLocation("Geolokatsiya qo'llab-quvvatlanmaydi");
    }
  }, []);

  return (
    <div className='headerBox'>
        <div className='container headerItem'>
            <div className='headerProfile'>
                <img src={Avatar} alt='user'/>
            </div>
            <div className='headerLocation'>
                <p><IoLocationOutline/> <span>{location}</span></p>
            </div>
            <div className='headerNotification'>
                <IoMdNotificationsOutline  />   
            </div>
        </div>
    </div>
  )
}

export default Header