import React from 'react';
import hr from "../assets/hr.png"

const teamData = [
  {
    name: 'Sophie Parker',
    role: 'HR Executive',
    image: hr,
    bgColor: 'bg-red-200',
  },
  {
    name: 'Alex Johnson',
    role: 'Project Manager',
    image: hr,
    bgColor: 'bg-blue-200',
  },
  {
    name: 'Alex Johnson',
    role: 'Team Leader',
    image: hr,
    bgColor: 'bg-green-200',
  },
  {
    name: 'Alex Johnson',
    role: 'HR Executive',
    image: hr,
    bgColor: 'bg-yellow-200',
  },
];

function TeamSection() {
  return (
    <div
      className="w-full max-w-[1750px] h-auto mt-10 px-4 md:px-10 mx-auto bg-white"
      style={{ overflow: 'hidden' }}
    >
      <h2 className="text-center md:text-[48px] text-[25px] font-bold text-black">
        Meet The Visionaries Behind{' '} <br />
        <span className="text-[#157B6C]">TechDevise</span>
      </h2>
      <p className='text text-center semibold'>We're a thriving ecosystem of creators, builders, and forward-thinkers shaping digital technology's future.</p>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
        {teamData.map((member, index) => (
          <div key={index} className="relative rounded-md overflow-hidden w-full">
            {/* Half background div behind image */}
            <div
              className={`absolute top-1/2 left-0 w-full h-1/2 ${member.bgColor} z-0 rounded-t-md`}
            ></div>

     <div className="w-[180px] h-[240px] relative rounded-t-md overflow-hidden z-10 mx-auto sm:w-full sm:aspect-[3/4] sm:h-auto sm:mx-0">
  <img
    src={member.image}
    alt={member.name}
    className="w-full h-full object-cover object-center"
  />
</div>
            {/* Info Section */}
            <div className="absolute bottom-0 w-full bg-white bg-opacity-80 p-4 text-center z-20">
              <h3 className="text-xl font-bold text-black">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          </div>
        ))}
      </div>



    </div>
  );
}

export default TeamSection;
