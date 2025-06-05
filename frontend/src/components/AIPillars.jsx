const AIPillars = () => {
    return (
      <div className="relative w-full max-w-[1920px] h-[858px] mx-auto bg-[#001028] text-white overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-[120px] left-[140px] w-[60px] h-[60px] rounded-full bg-[#0066cc] opacity-70 blur-sm"></div>
          <div className="absolute top-[220px] left-[120px] w-[40px] h-[40px] rounded-full bg-[#6633cc] opacity-70 blur-sm"></div>
          <div className="absolute top-[320px] left-[130px] w-[30px] h-[30px] rounded-full bg-[#cc3333] opacity-70 blur-sm"></div>
        </div>
  
        <div className="relative flex flex-col md:flex-row h-full">
          {/* Left section with robot and platform */}
          <div className="w-full md:w-[30%] flex items-center justify-center relative">
            <div className="absolute bottom-0 w-[300px] h-[150px] bg-[#0066cc] opacity-30 rounded-[50%] blur-md"></div>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qWRodU02FjDT0MnDk3sh4ecCwdSq9i.png"
              alt="AI Robot"
              className="w-[280px] h-auto relative z-10 mb-16"
            />
          </div>
  
          {/* Right section with content */}
          <div className="w-full md:w-[70%] p-6 md:p-10">
            {/* Heading and intro text */}
            <div className="mb-8 md:mb-12 max-w-[500px]">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                5 Pillars of Our
                <br />
                AI Development
                <br />
                Services
              </h1>
              <p className="text-sm md:text-base opacity-90">
                As a leading Blockchain development company, TechDevise only hires blockchain developers with a proven
                track record. That's why we can handle any task or project, even the most complicated ones.
              </p>
            </div>
  
            {/* Pillars grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {/* Data Quality */}
              <div className="bg-[#e6f7ff] text-[#001028] p-5 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Data Quality</h3>
                <p className="text-sm">
                  Our AI ML development services built the foundation for clean, structured, and reliable data solutions.
                  By leveraging AI development frameworks, we ensure the best possible datasets power your AI models.
                </p>
              </div>
  
              {/* Explainability */}
              <div className="bg-[#e6f7ff] text-[#001028] p-5 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Explainability</h3>
                <p className="text-sm">
                  We prioritize transparency by making AI solutions easily interpretable for businesses and end-user
                  alike. With our top-class AI development services, your enterprise gains clear and actionable insights
                  from AI-driven analytics.
                </p>
              </div>
  
              {/* Scalability */}
              <div className="bg-[#e6f7ff] text-[#001028] p-5 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Scalability</h3>
                <p className="text-sm">
                  Our AI systems are built to grow with your business. From initial deployment to future expansions, we
                  offer scalable solutions that adapt to your evolving needs, providing long-term value and flexibility.
                </p>
              </div>
  
              {/* Predictable ROI */}
              <div className="bg-[#e6f7ff] text-[#001028] p-5 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Predictable ROI</h3>
                <p className="text-sm">
                  We guarantee a predictable return on investment by aligning AI strategies with business goals. Our AI
                  development platforms streamline operations and optimize decision-making for better profitability.
                </p>
              </div>
  
              {/* Security */}
              <div className="bg-[#e6f7ff] text-[#001028] p-5 rounded-lg md:col-span-2 lg:col-span-1">
                <h3 className="text-xl font-bold mb-2">Security</h3>
                <p className="text-sm">
                  We implement robust security measures during the AI software development process to ensure compliance
                  and data integrity. As the best AI development company, we offer scalable AI systems tailored to meet
                  your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default AIPillars
  