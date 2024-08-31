"use client";
import React from 'react';
import data from '../json/Teams.json';
import TeamCards from '../Components/TeamCards';
import Nav from '../Components/nav';
import Foot from '../Components/footer';

const Team = () => {
  return (
    <>
      <Nav />
      <div className='bg-background'>
        {data.sections.map((teaminfo, index) => (
          <div key={index} className=''>
            <h1 className='font-retro text-center text-3xl md:text-4xl lg:text-5xl'>{teaminfo.header}</h1>
            <div className=' grid grid-cols-2 sm:flex sm:flex-wrap sm:gap-7 justify-center items-center'>
              {teaminfo.members.map((person, index) => (
                <TeamCards
                  key={index}
                  teamName={person.name}
                  teamImage={person.image}
                  teamRole={person.title} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <Foot/>
    </>
  );
}

export default Team;
