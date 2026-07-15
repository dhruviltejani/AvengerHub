import React from 'react'
import { Building2 } from 'lucide-react';

const Card = (props) => {
  return (
  
    <div className='card h-150 w-full min-w-0 bg-[#FFFFFF] flex flex-col justify-around overflow-hidden' >

      <div className="topsection flex flex-col justify-between  h-60 w-full">
        <div className="headpart h-30 w-full font-light text-xl  pr-6  flex items-center justify-end">${props.perHourRate}/hr</div>
        <div className="imgdiv h-120 rounded-2xl flex justify-center items-center">
          <div className="img  shadow-2xl shadow-black rounded-full overflow-hidden h-35 w-35 ">
          <img className=" h-full w-full object-cover" src={props.photo} alt="" />
        </div>
        </div>
      </div>

      <div className="middlesection flex flex-col gap-2 mt-3 ">
        <div className="middleelement flex justify-center font-medium text-2xl">{props.name}</div>
        <div className="middleelement flex justify-center font-extralight text-[14px]">{props.superpower}</div>
        <div className="middleelement flex justify-center items-center text-[#6FA9DE]"><Building2 size={15} />{props.type}</div>

      <div className="skill flex flex-wrap justify-center gap-2 mt-3 px-4 ">
          <div className="skillname text-[#686868] flex justify-center items-center min-h-8 px-3 py-1 whitespace-nowrap border-solid border-2 border-[#E0E3EA] rounded-2xl">{props.hobbies[0]}</div>
          <div className="skillname text-[#686868] flex justify-center items-center h-8 px-3 py-1 whitespace-nowrap border-solid border-2 border-[#E0E3EA] rounded-2xl">{props.hobbies[1]}</div>
          <div className="skillname text-[#686868] flex justify-center items-center h-8 px-3 py-1 whitespace-nowrap border-solid border-2 border-[#E0E3EA] rounded-2xl">{props.hobbies[2]}</div>

      </div>
      </div>

      <div className="bottomsection  flex flex-col justify-evenly items-center mt-3">
        <div className="description mb-5 text-base text-[#686868] text-center ">{props.description}</div>
        <div className="viewprofile p-3.5 text-[#31363A] border-t border-[#686868]">View Profile</div>
      </div>

    </div>

  )
}

export default Card

