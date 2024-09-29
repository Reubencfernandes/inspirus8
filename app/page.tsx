"use client";
import Spline from '@splinetool/react-spline/next';
import Cards from './Components/cards';
import data from './json/EventName.json';
import Nav from './Components/nav';
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import Foot from './Components/footer';
import Image from 'next/image';

import HyperText from '@/components/magicui/hyper-text';
import { AnimatedPinDemo } from './Components/sponsors';
const Home = () => {
  return (
			<>
				<Nav />
				<Spline
        scene="https://prod.spline.design/6FczZU0C0HR3lmGN/scene.splinecode" 
      />

				<div className="bg-background m-0">
					<div className="grid grid-cols-1 md:grid-cols-2 px-5 text-center justify-center py-10 md:py-20">
						<div>
							<h1 className="text-4xl md:text-6xl lg:text-8xl font-bold font-retro ios">
								OCTOBER 10-11
							</h1>
							<p className="font-inter text-white text-lg md:text-xl lg:text-2xl">
								<b>Don Bosco College of Engineering</b>
							</p> 
						</div>
						<div>
							<p className="font-inter text-center text-white text-lg md:text-xl lg:text-2xl md:text-left">
								Join us for Inspirus 8 on October 10th and 11th, 2024! Presented
								by C-CODES and the Department of Computer Engineering, this
								flagship event of Don Bosco College of Engineering brings
								together participants from across Goa and Neighbouring states to compete and innovate in
								technology for exciting prizes. <b>Don&apos;t miss it!</b>
							</p>
						</div>
					</div>
					<div className="overflow-hidden whitespace-nowrap">
						<div className="flex animate-marquee space-x-6">
							<Image
								width={500}
								height={500}
								src="https://i.imgur.com/oGq1m4D.jpeg"
								alt="Image 1"
								className="w-auto rounded-lg h-72 md:h-43rem"
							/>
							<Image
								width={500}
								height={500}
								src="https://i.imgur.com/vjHIXpK.jpeg"
								alt="second"
								className="w-auto rounded-lg h-72 md:h-43rem"
							/>
							<Image
								width={500}
								height={500}
								src="https://i.imgur.com/zvCcliv.jpeg"
								alt="third"
								className="w-auto rounded-lg h-72 md:h-43rem"
							/>
							<Image
								width={500}
								height={500}
								src="https://i.imgur.com/eC4TuTp.jpeg"
								alt="fourth"
								className="w-auto rounded-lg h-72 md:h-43rem"
							/>
							<Image
								width={500}
								height={500}
								src="https://i.imgur.com/dTVahjl.jpeg"
								alt="fifth"
								className="w-auto rounded-lg h-72 md:h-43rem"
							/>
							<Image
								width={500}
								height={500}
								src="https://i.imgur.com/oGq1m4D.jpeg"
								alt="Image 1"
								className="w-auto rounded-lg h-72 md:h-43rem"
							/>
							<Image
								width={500}
								height={500}
								src="https://i.imgur.com/vjHIXpK.jpeg"
								alt="second"
								className="w-auto rounded-lg h-72 md:h-43rem"
							/>
							<Image
								width={500}
								height={500}
								src="https://i.imgur.com/zvCcliv.jpeg"
								alt="third"
								className="w-auto rounded-lg h-72 md:h-43rem"
							/>
							<Image
								width={500}
								height={500}
								src="https://i.imgur.com/eC4TuTp.jpeg"
								alt="fourth"
								className="w-auto rounded-lg h-72 md:h-43rem"
							/>
							<Image
								width={500}
								height={500}
								src="https://i.imgur.com/dTVahjl.jpeg"
								alt="fifth"
								className="w-auto rounded-lg h-72 md:h-43rem"
							/>
						</div>
					</div>

					<div className="card-section p-5 md:px-10 py-10 md:py-20">
						<h1 className="text-4xl md:text-6xl lg:text-8xl font-bold font-retro text-center ios">
							Events
						</h1>
						
						<HyperText className="text-2xl lg:text-4xl font-bold text-white text-center" text="Technical Events" duration={120}/>
						
						
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 content-center align-center justify-items-center mt-10">
							{data.events.filter(event => event.technical === true).map((event, index) => (
								<Cards
									key={index}
									eventName={event.title}
									eventDescription={event.description}
									eventImage={event.image}
									eventid={event.id}
								/>
							))}
						</div>
						<HyperText className="text-2xl lg:text-4xl font-bold text-white text-center mt-10" text="Non-Technical Events" duration={120}/>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 content-center align-center justify-items-center mt-10">
							{data.events.filter(event => event.technical === false).map((event, index) => (
								<Cards
									key={index}
									eventName={event.title}
									eventDescription={event.description}
									eventImage={event.image}
									eventid={event.id}
								/>
							))}
						</div>
					</div>

					<AnimatedPinDemo/>
					<div className="sponsors text-center">
  <HyperText className="text-2xl lg:text-4xl font-bold text-white mt-10" text="Sponsors" duration={120} />

  <h1 className="text-2xl font-bold mt-6">Powered by</h1>
  <div className="p-3">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      <img src="https://i.imgur.com/UY3wvln.jpg" className="w-full h-full object-contain" />
      <img src="https://i.imgur.com/FRCz9Eg.jpg" className="w-full h-full object-contain" />
      <img src="https://i.imgur.com/k4KlXSe.png" className="w-full h-40 object-contain" />
    </div>

    <h1 className="text-2xl font-bold mt-10">Supported by</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      <img src="https://i.imgur.com/DS4y9jW.jpg" className="w-full h-40 object-contain" />
      <img src="https://i.imgur.com/Jcy46d4.jpg" className="w-full h-40 object-contain" />
      <img src="https://i.imgur.com/2lWiV1Y.jpg" className="w-full h-40 object-contain" />
    </div>

    <h1 className="text-2xl font-bold mt-10">Media Partner</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      <img src="https://i.imgur.com/iHU9pmF.jpg" className="w-full h-40 object-contain" />
    </div>
  </div>
</div>


				</div>
				<Foot />
			</>
		);
}

export default Home;
