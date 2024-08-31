import Spline from '@splinetool/react-spline/next';
import Cards from './Components/cards';
import data from './json/EventName.json';
import Nav from './Components/nav';
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import Foot from './Components/footer';

const Home = (props: { onSelectPage: any; }) => {
  return (
    <>
      <Nav />
      <Spline
        scene="https://prod.spline.design/P2q9a6aqHMkBs6od/scene.splinecode"
      />
      <div className='bg-background m-0'>
        <div className='grid grid-cols-1 md:grid-cols-2 px-5 text-center justify-center py-10 md:py-20'>
          <div>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold font-retro">
              OCTOBER 10-11
            </h1>
            <p className='font-inter text-white text-lg md:text-xl lg:text-2xl'>
              Don Bosco College of Engineering
            </p>
          </div>
          <div>
            <p className='font-inter text-white text-lg md:text-xl lg:text-2xl text-left'>
              Join us for Inspirus 8 on October 10th and 11th, 2024! Presented by C-CODES and the Department of Computer Engineering, this flagship event of Don Bosco College of Engineering brings together participants from across Goa to compete and innovate in technology for exciting prizes. Don't miss it!
            </p>
          </div>
        </div>
        <div className='card-section p-5 md:px-10 py-10 md:py-20'>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold font-retro text-center">
            Events
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 content-center align-center justify-items-center mt-10">
            {data.events.map((event, index) => (
              <Cards key={index} eventName={event.title} eventDescription={event.description} eventImage={event.image} />
            ))}
          </div>
        </div>
      </div>
      <Foot />
    </>
  );
}

export default Home;
