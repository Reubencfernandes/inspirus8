"use client";
import React from 'react'
import data from '../json/Teams.json'
import TeamCards from '../Components/TeamCards'
import Nav from '../Components/nav';

const Team = () => {
  return (
    <>
    <Nav />
    <div className='bg-background'>
      {data.sections.map((teaminfo, index) => (
        <div key={index} className='pt-5 '>
          <h1 className='font-retro text-center text-5xl'>{teaminfo.header}</h1>
          <div className='flex flex-wrap gap-7 justify-center items-center'>

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
    </>
  )
}

export default Team 
