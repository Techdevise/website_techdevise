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
    {
    id: "05",
    title: "SEO Content optimization",
    description:
      "The content listed plays a vital role in grabbing the attention of your target audience. The professional team of Tech Devise are highly experienced and can formulate engaging and creative content that captivates your target audience in the long run.",
    bgColor: "bg-[#B6F1A5]",
    textColor: "text-[#579C43]",
    
  },
    {
    id: "06",
    title: "Result Oriented Strategies",
    description:
      "At Tech Devise, we believe in generating results. The foremost goal of our company is to meet client expectations. Therefore, the strategies formulated are result oriented that will surely give your business long term benefits.",
    bgColor: "bg-[#FFDDA5]",
    textColor: "text-[#579C43]",
    
  },
];

const SEOFeatures = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -260, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 260, behavior: "smooth" });
    }
  };

  return (
   <div className="relative w-full m-auto px-4 sm:px-6 md:px-10 lg:pr-0 py-15 pt-0 bg-white bg-[#FAFAFA]">
  <div className="w-[1680px] max-w-full mx-auto">
    {/* Scrollable Section */}
    <div
      ref={scrollRef}
      className="flex overflow-x-auto space-x-4 scrollbar-hide snap-x snap-mandatory"
    >
      {seoFeatures.map((feature, index) => (
        <div
          key={index}
          className={`snap-start flex-shrink-0 w-[90%] sm:w-[50%] md:w-[33.33%] lg:w-[30%] xl:w-[32.4%] p-6 rounded-lg shadow-md ${feature.bgColor}`}
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
    <div className=" relative  flex gap-4 mt-5">
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
