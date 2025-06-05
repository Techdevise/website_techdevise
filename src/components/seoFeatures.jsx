import React, {useRef} from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import '../styles/components/seoFeatures.css'


const seoFeatures = [
  {
    id: "01",
    title: "SEO Optimization",
    description:
      "At Tech Devise, we offer unique SEO optimization services that will increase the ranking of your website on various search engines. We will help your website to become SEO optimized and this will ensure an increase in search engine ranking.",
    bgColor: "bg-[#FEEEBB]",
    textColor: "text-[#EAD182]",
  },
  {
    id: "02",
    title: "Keyword Research",
    description:
      "Analysis of effective keywords is a critical aspect that helps your overall online ranking. Identification of these keywords hence becomes imperative. Tech Devise ensures to scan and chalk out the most relevant keywords that are duly added to all your online content.",
    bgColor: "bg-[#C0E3F5]",
    textColor: "text-[#6BA3BF]",
  },
  {
    id: "03",
    title: "Regular Reports",
    description:
      "Keep track of your online operations will help you to analyze the overall performance of your firm. With the assistance of the Tech Devise team, you can now avail regular reports that identify specific loopholes present in your online strategies.",
    bgColor: "bg-[#CAC0F5]",
    textColor: "text-[#9080D7]",
  },
  {
    id: "04",
    title: "Competitor Analysis",
    description:
      "In order to stand out, competitor analysis is necessary. Our strategy helps to analyze your competition and identify key opportunities.",
    bgColor: "bg-[#FEBBBC]",
    textColor: "text-[#DA7273]",
    
  },
];

const SEOFeatures = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -560, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 560, behavior: "smooth" });
    }
  };

  return (
   <div className="relative w-full m-auto px-4 sm:px-6 md:px-10 lg:px-20 py-20 pt-0 bg-white">
  <div className="w-[1620px] max-w-full mx-auto">
    {/* Scrollable Section */}
    <div
      ref={scrollRef}
      className="flex overflow-x-auto space-x-4 scrollbar-hide snap-x snap-mandatory"
    >
      {seoFeatures.map((feature, index) => (
        <div
          key={index}
          className={`snap-start flex-shrink-0 w-[90%] sm:w-[50%] md:w-[33.33%] lg:w-[30%] xl:w-[28%] p-6 rounded-lg shadow-md ${feature.bgColor}`}
        >
          <h2 className={`text-[48px] sm:text-[64px] md:text-[72px] font-Montserrat font-extrabold ${feature.textColor}`}>
            {feature.id}
          </h2>
          <h3 className="text-[18px] sm:text-[20px] md:text-[24px] font-bold font-Montserrat mt-3">
            {feature.title}
          </h3>
          <p className="text-gray-700 mt-2">{feature.description}</p>
        </div>
      ))}
    </div>

    {/* Navigation Arrows */}
    <div className="absolute left-33 bottom-4 flex gap-4">
      <button onClick={scrollLeft} className="bg-black text-white p-3 rounded-full">
        <FaArrowLeft size={15} />
      </button>
      <button onClick={scrollRight} className="bg-black text-white p-3 rounded-full">
        <FaArrowRight size={15} />
      </button>
    </div>
  </div>
</div>

  );
};

export default SEOFeatures;
