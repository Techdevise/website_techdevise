import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "../styles/components/TechStack.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// >>>>>>>>>>>>>>>>>>>>programming languages<<<<<<<<<<<<<<<<<<<<<<<<<<<
import Csharp from "../assets/programming languages/cPlus.svg";
import javascripttlogo from "../assets/programming languages/javascript-1 1.svg";
import Kotlinlogo from "../assets/programming languages/Kotlin 1.svg";
import Mysqlicon from "../assets/programming languages/my sql.svg";
import Postgresqllogo from "../assets/programming languages/postgre sql.svg";
import Pythonlogo from "../assets/programming languages/python.svg";
import Sqlserverlogo from "../assets/programming languages/sql server.svg";
import Swiftlogo from "../assets/programming languages/Swift 1.svg";
// >>>>>>>>>>>>>>>>>>>>Framework<<<<<<<<<<<<<<<<<<<<<<<<<<<
import XamarinLogo from "../assets/Framework/xamarin.svg";
import Phonegaplogo from "../assets/Framework/phonegap 1.svg";
import nodejslogo from "../assets/Framework/nodejs.svg";
import ioniclogo from "../assets/Framework/ionic.svg";
import flutterlogo from "../assets/Framework/flutter.svg";
import appceleratorlogo from "../assets/Framework/appcelerator.svg";

// >>>>>>>>>>>>>>>>>>>>PAYMENT GATEWAYS<<<<<<<<<<<<<<<<<<<<<<<<<<<
import stripelogo from "../assets/PAYMENT GATEWAYS/stripe.svg";
import squarelogo from "../assets/PAYMENT GATEWAYS/square.svg";
import paypallogo from "../assets/PAYMENT GATEWAYS/paypal.svg";
import alipaylogo from "../assets/PAYMENT GATEWAYS/alipay.svg";
import adyenlogo from "../assets/PAYMENT GATEWAYS/adyen.svg";

// >>>>>>>>>>>>>>>>>>>>DEVOPS<<<<<<<<<<<<<<<<<<<<<<<<<<<
import ansiblelogo from "../assets/DEVOPS/ansible.svg";
import cheflogo from "../assets/DEVOPS/chef.svg";
import dockerlogo from "../assets/DEVOPS/docker.svg";
import kuberneteslogo from "../assets/DEVOPS/kubernetes.svg";
import openshiftlogo from "../assets/DEVOPS/openshift.svg";
import puppetlogo from "../assets/DEVOPS/puppet.svg";
import saltstacklogo from "../assets/DEVOPS/saltstack.svg";
import SQL_Serverlogo from "../assets/DEVOPS/SQL-Server-1 1.svg";
import terraformlogo from "../assets/DEVOPS/terraform.svg";

// >>>>>>>>>>>>>>>>>>>>databases<<<<<<<<<<<<<<<<<<<<<<<<<<<
import sql_serverlogo from "../assets/databases/sql server.svg";
import postgreSQLlogo from "../assets/databases/postgreSQL.svg";
import oraclelogo from "../assets/databases/oracle.svg";
import MYSQLlogo from "../assets/databases/MYSQL.svg";
import mongodblogo from "../assets/databases/mongodb.svg";
import cassandralogo from "../assets/databases/cassandra.svg";
import apachenifilogo from "../assets/databases/apachenifi.svg";
import apachehivelogo from "../assets/databases/apachehive.svg";
import apachehbaselogo from "../assets/databases/apachehbase.svg";
// >>>>>>>>>>>>>>>>>>>>CLOUDS<<<<<<<<<<<<<<<<<<<<<<<<<<<
import awslogo from "../assets/CLOUDS/aws.svg";
import azurelogo from "../assets/CLOUDS/azure.svg";
import digitaloceanlogo from "../assets/CLOUDS/digitalocean.svg";
import googlecloudlogo from "../assets/CLOUDS/googlecloud.svg";

const TechStack = () => {
  const [activeTab, setActiveTab] = useState("Programming Languages");
  const wrapperRef = useRef(null);
  const slideRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0)
  const tabs = [
    "Programming Languages",
    "Frameworks",
    "Databases",
    "Devops",
    "Payment Gateways",
    "Clouds",
  ];

  const technologies = {
    "Programming Languages": [
      { name: "MySQL", logo: Mysqlicon },
      { name: "Python", logo: Pythonlogo },
      { name: "PostgreSQL", logo: Postgresqllogo },
      { name: "SQL Server", logo: Sqlserverlogo },
      { name: "Swift", logo: Swiftlogo },
      { name: "C#", logo: Csharp },
      { name: "JavaScript", logo: javascripttlogo },
      { name: "Kotlin", logo: Kotlinlogo },
    ],
    "Frameworks": [
      { name: "Xamarin", logo: XamarinLogo },
      { name: "Phonegap", logo: Phonegaplogo },
      { name: "Node.js", logo: nodejslogo },
      { name: "Ionic", logo: ioniclogo },
      { name: "Flutter", logo: flutterlogo },
      { name: "Appcelerator", logo: appceleratorlogo },
    ],
    "Databases": [
      { name: "SQL Server", logo: sql_serverlogo },
      { name: "PostgreSQL", logo: postgreSQLlogo },
      { name: "Oracle", logo: oraclelogo },
      { name: "MySQL", logo: MYSQLlogo },
      { name: "MongoDB", logo: mongodblogo },
      { name: "Cassandra", logo: cassandralogo },
      { name: "Apache Nifi", logo: apachenifilogo },
      { name: "Apache Hive", logo: apachehivelogo },
      { name: "Apache HBase", logo: apachehbaselogo },
    ],
    "Devops": [
      { name: "Ansible", logo: ansiblelogo },
      { name: "Chef", logo: cheflogo },
      { name: "Docker", logo: dockerlogo },
      { name: "Kubernetes", logo: kuberneteslogo },
      { name: "OpenShift", logo: openshiftlogo },
      { name: "Puppet", logo: puppetlogo },
      { name: "SaltStack", logo: saltstacklogo },
      { name: "SQL Server", logo: SQL_Serverlogo },
      { name: "Terraform", logo: terraformlogo },
    ],
    "Payment Gateways": [
      { name: "Stripe", logo: stripelogo },
      { name: "Square", logo: squarelogo },
      { name: "PayPal", logo: paypallogo },
      { name: "Alipay", logo: alipaylogo },
      { name: "Adyen", logo: adyenlogo },
    ],
    "Clouds": [
      { name: "AWS", logo: awslogo },
      { name: "Azure", logo: azurelogo },
      { name: "Digital Ocean", logo: digitaloceanlogo },
      { name: "Google Cloud", logo: googlecloudlogo },
    ],
  };
  const itemsPerSlide = 8;
  const totalSlides = Math.ceil(technologies[activeTab].length / itemsPerSlide);
  const handlePrev = () => {
    setCurrentSlide((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };
   useEffect(() => {
    if (!slideRef.current || !wrapperRef.current) return;

    const wrapper = wrapperRef.current;
    const slide = slideRef.current;

    // Clear previous clones
    while (wrapper.children.length > 1) {
      wrapper.removeChild(wrapper.lastChild);
    }

    const clone = slide.cloneNode(true);
    wrapper.appendChild(clone);

    gsap.to(wrapper, {
      xPercent: -50,
      duration: 60,
      ease: "none",
      repeat: -1,
    });
  }, [activeTab]);

  return (
    <div className="tech_sttack px-4 sm:px-6 lg:px-8 xl:px-10">
      <h1 className="tech_title w-full max-w-[488px] text-3xl sm:text-4xl lg:text-[48px] font-Montserrat font-extrabold mb-6 ml-0 lg:ml-[100px] mx-auto">
        Tech Stack We Use
      </h1>

      <div className="bg-white rounded-lg shadow-lg w-full max-w-[1629px] h-auto lg:h-[284px] relative mx-auto">
        <div className="flex overflow-x-auto border-b px-1 sm:px-2 md:px-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`flex-shrink-0 px-4 sm:px-6 py-2 sm:py-4 text-base sm:text-lg lg:text-[24px] font-Montserrat font-semibold whitespace-nowrap ${activeTab === tab ? "border-b-2 border-black" : "text-gray-500"
                }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="relative flex justify-start overflow-hidden">
          <div
            ref={wrapperRef}
            className="flex w-max gap-8 py-6 px-4"
          >
            <div ref={slideRef} className="flex gap-8">
              {technologies[activeTab].map((tech, index) => (
                <div key={index} className="flex flex-col items-center min-w-[162px]">
                  <div className="w-full h-[120px] sm:h-[145px] border rounded-xl flex items-center justify-center mb-2">
                    <img
                      src={tech.logo || "/placeholder.svg"}
                      alt={tech.name}
                      className="w-[80px] sm:w-[106px] h-[40px] sm:h-[55px] object-contain"
                    />
                  </div>
                  <span className="text-sm text-center">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* {totalSlides > 1 && (
          <div className="absolute bottom-4 right-4 flex space-x-2">
            <button onClick={handlePrev} className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center">
              <FaArrowLeft />
            </button>
            <button onClick={handleNext} className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center">
              <FaArrowRight />
            </button>
          </div>
        )} */}

        <div className="hidden lg:block absolute w-[5%] right-[-50px] mt-[-100px] top-1/2 transform -translate-y-1/2 rotate-450">
          <span
            className="text-[#A2A2A2] whitespace-nowrap font-Montserrat font-extrabold text-[20px] tracking-wide"
            style={{ background: "linear-gradient(99.51deg, #A2A2A2, #00000000)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}
          >
            Programming Languages
          </span>
        </div>
      </div>
    </div>
  );
};

export default TechStack;