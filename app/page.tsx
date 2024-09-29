
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

					<HyperText className="text-2xl lg:text-4xl font-bold text-white text-center" text="Technical Events" duration={120} />


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
					<HyperText className="text-2xl lg:text-4xl font-bold text-white text-center mt-10" text="Non-Technical Events" duration={120} />
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
				<div className='pb-6'>
					<h1 className='font-bebas text-5xl text-white text-center'>Powered By </h1>
					<AnimatedPinDemo data={[{
						image: "https://i.imgur.com/UY3wvln.jpg",
						url: "https://oneshield.com/",
						title: "One Shield",
						description: "Description for image 1",
					},
					{
						image: "https://i.imgur.com/FRCz9Eg.jpg",
						url: "https://www.goa.ftvsalon.in/",
						title: "F Salon, Goa",
						description: "Description for image 2",
					},
					{
						image: "https://i.imgur.com/k4KlXSe.png",
						url: "https://www.instagram.com/dr.abishek.colaco/",
						title: "Colaco Physiotherapy",
						description: "Description for image 3",
					},
					]}
					/>
					<h1 className='font-bebas text-5xl text-white text-center pt-7'>Supported by</h1>
					<AnimatedPinDemo data={[{
						image: "https://i.imgur.com/DS4y9jW.jpg",
						url: "https://ongcindia.com/",
						title: "ONGC",
						description: "This is the description for image 1",
					},
					{
					image: "https://i.imgur.com/Jcy46d4.jpg",
						url: "https://eduadvise.in/",
						title: "EduAdvise",
						description: "This is the description for image 2",
					},
					{
						image: "https://i.imgur.com/2lWiV1Y.jpg",
						url: "https://www.hdfccredila.com/",
						title: "HDFC Credila",
						description: "This is the description for image 3",
					},
					]}
					/>

					<h1 className='font-bebas text-5xl text-white text-center pt-7'>Media Partner</h1>
					<AnimatedPinDemo data={[{
						image: "https://i.imgur.com/iHU9pmF.jpg",
						url: "https://goanewshub.com/",
						title: "Goa News Hub",
						description: "This is the description for image 1",
					}
					]}
					/>
					<h1 className='font-bebas text-5xl text-white text-center pt-7'>Sponsors</h1>
					<AnimatedPinDemo data={[{
						image: "https://i.imgur.com/hoEB8Q8.jpg",
						url: "https://www.instagram.com/bodhami/",
						title: "Bodhami",
						description: "This is the description for image 1",
					},{
						image: "https://i.imgur.com/kII3mJU.jpg",
						url: "https://ulhasjewellers.com/",
						title: "Ulhas jewellery",
						description: "This is the description for image 1",
					},{
						image: "https://i.imgur.com/27hAd9n.jpg",
						url: "https://www.creativecapsule.com/",
						title: "Creative Capsule",
						description: "This is the description for image 1",
					},{
						image: "https://i.imgur.com/fwz32zx.png",
						url: "https://inspirus.dbcegoa.ac.in/",
						title: "Arkatech",
						description: "This is the description for image 1",
					},
					]}
					/>

				</div>
			</div>
			<Foot />
		</>
	);
}

export default Home;
