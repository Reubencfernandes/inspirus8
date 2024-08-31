
import Spline from '@splinetool/react-spline/next';
import Cards from './Components/cards'
import data from './json/EventName.json'
import Nav from './Components/nav';
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

const Home = (props: { onSelectPage: any; }) => {
  return (
    <>
    <Nav/>
    <Spline
    scene="https://prod.spline.design/P2q9a6aqHMkBs6od/scene.splinecode" 
  /><div className='bg-background m-0'>
          <div className='grid grid-cols-2 px-5 text-center justify-center py-20'>
              <div>
                  <h1 className="text-8xl font-bold font-retro">
                      OCTOBER  10-11
                  </h1>
                  <p className='font-inter text-white text-2xl'>
                      Don Bosco College of Engineering
                  </p>
              </div>
              <div>
                  <p className='font-inter text-white text-2xl text-left'>Join us for Inspirus 8 on October 10th and 11th, 2024! Presented by C-CODES and the Department of Computer Engineering, this flagship event of Don Bosco College of Engineering brings together participants from across Goa to compete and innovate in technology for exciting prizes. Don't miss it!</p>
              </div>
          </div>
          <div className='card-section p-5 px-10 py-20'>
              <h1 className="text-8xl font-bold font-retro text-center">
                  Events
              </h1>
              <div className="grid grid-cols-3 content-center align-center justify-items-center">
                  {data.events.map((event, index) => (
                      <Cards key={index} eventName={event.title} eventDescription={event.description} eventImage={event.image}  />
                  ))}
              </div>
 
          </div>
      </div></> 
  )
}

export default Home