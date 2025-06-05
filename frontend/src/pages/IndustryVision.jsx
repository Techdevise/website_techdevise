
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/pages/IndustryVision.css";
import DesktopIndustryVision from "../components/DesktopIndustryVision";
import MobileIndustryVision from "../components/MobileIndustryVision";





const IndustryVision = () => {
  return (
  <>
  <DesktopIndustryVision />
  <MobileIndustryVision />
  </>
  );
};

export default IndustryVision;
