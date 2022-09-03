import React,{useState,useEffect} from 'react'
import './staff.css'
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const data = [
{
  id: 1,
  imageSrc: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" ,
  firstName: "Jelena" ,
  lastName: "Ilic",
  biography: "I care deeply about my clients, and there’s nothing of more value to me than helping somebody go through an experience that makes them happy, confident, and strong. I realize how being overweight affects many aspects of your life, and I want to be there for you and help you discover the benefits and joys of training that helped me become the person I am today. I’m here to be your personal guide on every step of the journey."
},
{
  id: 2,
  imageSrc: "https://images.unsplash.com/photo-1613685044678-0a9ae422cf5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80" ,
  firstName: "Ognjen" ,
  lastName: "Milic",
  biography: "I care deeply about my clients, and there’s nothing of more value to me than helping somebody go through an experience that makes them happy, confident, and strong. I realize how being overweight affects many aspects of your life, and I want to be there for you and help you discover the benefits and joys of training that helped me become the person I am today. I’m here to be your personal guide on every step of the journey."
}
];

const Staff = () => {


  return (
    <section id="staff">
      <h5>Our Staff</h5>
      <h2>Highly Qualified Trainers</h2>
      <Swiper
        className="container staff__container"
        modules={[Pagination]}
        spaceBetween={50}
        pagination={{ clickable: true }}
      >
        {data!== null && data.map((i) => (
          <SwiperSlide key={i.id} className="staff">
            <div className="staff__avatar">
              <img src={i.imageSrc} alt="coach" />
            </div>
            <h5 className="trainer__name">{i.firstName+" "+i.lastName}</h5>
            <small className="trainer__desc">{i.biography}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
    )
}

export default Staff