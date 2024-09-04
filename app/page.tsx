import Spline from '@splinetool/react-spline/next';
import Cards from './Components/cards';
import data from './json/EventName.json';
import Nav from './Components/nav';
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import Foot from './Components/footer';
import Image from 'next/image';

import image1 from './images/assets/firstimage.jpg'
import image2 from './images/assets/secondimage.jpg'
import image3 from './images/assets/thirdimage.jpg'
import image4 from './images/assets/fourthimage.jpg'
import image5 from './images/assets/fifthimage.jpg'
const Home = () => {
  return (
			<>
				<Nav />
				<Spline
        scene="https://prod.spline.design/P2q9a6aqHMkBs6od/scene.splinecode" 
      />
				<div className="bg-background m-0">
					<div className="grid grid-cols-1 md:grid-cols-2 px-5 text-center justify-center py-10 md:py-20">
						<div>
							<h1 className="text-4xl md:text-6xl lg:text-8xl font-bold font-retro">
								OCTOBER 10-11
							</h1>
							<p className="font-inter text-white text-lg md:text-xl lg:text-2xl">
								Don Bosco College of Engineering
							</p> 
						</div>
						<div>
							<p className="font-inter text-center text-white text-lg md:text-xl lg:text-2xl md:text-left">
								Join us for Inspirus 8 on October 10th and 11th, 2024! Presented
								by C-CODES and the Department of Computer Engineering, this
								flagship event of Don Bosco College of Engineering brings
								together participants from across Goa to compete and innovate in
								technology for exciting prizes. <b>Dont miss it!</b>
							</p>
						</div>
					</div>
					<div className="overflow-hidden whitespace-nowrap">
						<div className="flex animate-marquee space-x-6">
							<Image
								width={500}
								height={500}
								src={image1}
								alt="Image 1"
								className="w-auto rounded-lg h-72 md:h-43rem"
							/>
							<Image
								width={500}
								height={500}
								src={image2}
								alt="Image 2"
								className="w-auto rounded-lg h-72 md:h-43rem"
							/>
							<Image
								width={500}
								height={500}
								src={image3}
								alt="Image 3"
								className="w-auto rounded-lg h-72 md:h-43rem"
							/>
							<Image
								width={500}
								height={500}
								src={image4}
								alt="Image 4"
								className="w-auto rounded-lg h-72 md:h-43rem"
							/>
							<Image
								width={500}
								height={500}
								src={image5}
								alt="Image 5"
								className="w-auto rounded-lg h-72 md:h-43rem"
							/>
							<Image
								width={500}
								height={500}
								src={image1}
								alt="Image 6"
								className="w-auto rounded-lg h-72 md:h-43rem"
							/>
							<Image
								width={500}
								height={500}
								src={image2}
								alt="Image 7"
								className="w-auto rounded-lg h-72 md:h-43rem"
							/>
							<Image
								width={500}
								height={500}
								src={image3}
								alt="Image 8"
								className="w-auto rounded-lg h-72 md:h-43rem"
							/>
							<Image
								width={500}
								height={500}
								src={image4}
								alt="Image 9"
								className="w-auto rounded-lg h-72 md:h-43rem"
							/>
							<Image
								width={500}
								height={500}
								src={image5}
								alt="Image 10"
								className="w-auto rounded-lg h-72 md:h-43rem"
							/>
						</div>
					</div>

					<div className="card-section p-5 md:px-10 py-10 md:py-20">
						<h1 className="text-4xl md:text-6xl lg:text-8xl font-bold font-retro text-center">
							Events
						</h1>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 content-center align-center justify-items-center mt-10">
							{data.events.map((event, index) => (
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
				</div>
				<Foot />
			</>
		);
}

export default Home;
