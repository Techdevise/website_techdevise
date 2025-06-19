import Ai from "../assets/Group.svg";
import Man_wearing from "../assets/man-wearing-1.svg";
  import '../styles/components/ArtificialIntelligence.css'

const AIPillars = () => {
  return (
    <div
      className="relative w-full max-w-full mx-auto text-white overflow-hidden mt-10 md:mt-20"
      style={{
        backgroundImage: `url(${Man_wearing})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: "#001028",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />

      <div className="relative flex flex-col lg:flex-row h-full z-10 py-10 md:py-0">
        {/* Left section with robot and platform */}
        <div className="w-full lg:w-[35%] flex items-center justify-center relative order-2 lg:order-1 mt-8 lg:mt-0">
          <div className="absolute bottom-0 w-[200px] md:w-[300px] h-[100px] md:h-[150px] bg-[#0066cc] opacity-30 rounded-[50%] blur-md"></div>
          <img
            src={Ai}
            alt="AI Robot"
            className="w-[280px] sm:w-[350px] md:w-[430px] h-auto relative z-10 mb-10 lg:mb-20"
          />
        </div>

        {/* Right section with content */}
        <div className="w-full lg:w-[55%] px-4 sm:px-6 md:px-10 pt-6 lg:pt-[6rem] pb-10 order-1 lg:order-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Title card */}
            <div className="text-white p-4 md:p-5 rounded-lg flex flex-col h-auto sm:h-[304px]">
              <h3 className="text-2xl sm:text-3xl md:text-[31px] font-bold mb-3 md:mb-4 h3tag">
                5 Pillars of Our<br />
                AI Development<br />
                Services
              </h3>
              <p className="text-[13px] md:text-[16px] pteg">
                As a leading Blockchain development company, TechDevise only hires blockchain developers with a proven
                track record. That's why we can handle any task or project, even the most complicated ones.
              </p>
            </div>

            {/* Data Quality */}
            <div className="bg-[#e6f7ff] text-[#001028] p-4 md:p-5 rounded-lg flex flex-col h-auto sm:h-[304px]">
              <h3 className="text-[20] sm:text-[28px] font-bold mb-2 h3tag">Data Quality</h3>
              <p className="text-[13px] md:text-[16px] pteg">
                Our AI ML development services built the foundation for clean, structured, and reliable data solutions.
                By leveraging AI development frameworks, we ensure the best possible datasets power your AI models.
              </p>
            </div>

            {/* Explainability */}
            <div className="bg-[#e6f7ff] text-[#001028] p-4 md:p-5 rounded-lg flex flex-col h-auto sm:h-[304px]">
              <h3 className="text-[20] sm:text-[28px] font-bold  h3tag mb-2">Explainability</h3>
              <p className="text-[13px] md:text-[16px] pteg">
                We prioritize transparency by making AI solutions easily interpretable for businesses and end-user
                alike. With our top-class AI development services, your enterprise gains clear and actionable insights
                from AI-driven analytics.
              </p>
            </div>

            {/* Scalability */}
            <div className="bg-[#e6f7ff] text-[#001028] p-4 md:p-5 rounded-lg flex flex-col h-auto sm:h-[304px]">
              <h3 className="text-[20] sm:text-[28px] font-bold mb-2 h3tag">Scalability</h3>
              <p className="text-[13px] md:text-[16px] pteg">
                Our AI systems are built to grow with your business. From initial deployment to future expansions, we
                offer scalable solutions that adapt to your evolving needs, providing long-term value and flexibility.
              </p>
            </div>

            {/* Predictable ROI */}
            <div className="bg-[#e6f7ff] text-[#001028] p-4 md:p-5 rounded-lg flex flex-col h-auto sm:h-[304px]">
              <h3 className="text-[20] sm:text-[28px] font-bold mb-2 h3tag">Predictable ROI</h3>
              <p className="text-[13px] md:text-[16px] pteg">
                We guarantee a predictable return on investment by aligning AI strategies with business goals. Our AI
                development platforms streamline operations and optimize decision-making for better profitability.
              </p>
            </div>

            {/* Security */}
            <div className="bg-[#e6f7ff] text-[#001028] p-4 md:p-5 rounded-lg flex flex-col h-auto sm:h-[304px] sm:col-span-2 lg:col-span-1">
              <h3 className="text-[20] sm:text-[28px] font-bold mb-2 h3tag">Security</h3>
              <p className="text-[13px] md:text-[16px] pteg">
                We implement robust security measures during the AI software development process to ensure compliance
                and data integrity. As the best AI development company, we offer scalable AI systems tailored to meet
                your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIPillars;