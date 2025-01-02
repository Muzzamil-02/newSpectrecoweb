import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./Maincss.css"
const cardsData = [
  {
    title: "Community Impact",
    description: "Build trust within the community and enable productivity and collective prosperity.",
    icon: "👥",
  },
  {
    title: "Risk Management",
    description: "Identify, manage and mitigate risks for built infrastructure and investment portfolios.",
    icon: "⚠️",
  },
  {
    title: "Carbon Cleanse",
    description: "Measure, Track, Report & Benchmark Scope 1, 2 & 3 emissions.",
    icon: "🌿",
  },
  {
    title: "Carbon Cleanse",
    description: "Measure, Track, Report & Benchmark Scope 1, 2 & 3 emissions.",
    icon: "🌿",
  },
  {
    title: "Energy Efficiency",
    description: "Improve energy efficiency across operations and reduce costs.",
    icon: "💡",
  },
  {
    title: "Carbon Cleanse",
    description: "Measure, Track, Report & Benchmark Scope 1, 2 & 3 emissions.",
    icon: "🌿",
  },
  {
    title: "Innovation Support",
    description: "Drive innovative solutions for sustainable business growth.",
    icon: "🚀",
  },
  {
    title: "Carbon Cleanse",
    description: "Measure, Track, Report & Benchmark Scope 1, 2 & 3 emissions.",
    icon: "🌿",
  },
];

const AdvisoryCarousel = () => {
  return (
    <div style={{ padding: "20px", backgroundColor: "#f9f9f9",marginTop:"40px",marginBottom:"40px" }}>
      <h2 style={{padding:"20px"}}>Tailored Industry Solutions</h2>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={4} // Adjust for responsiveness
      >
        {cardsData.map((card, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "30px" }}>{card.icon}</div>
              <h3 style={{ margin: "10px 0" ,fontSize:"20px" }}>{card.title}</h3>
              <p style={{ fontSize: "14px", color: "#555" }}>{card.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Learn More
      </button>
    </div>
  );
};

export default AdvisoryCarousel;
