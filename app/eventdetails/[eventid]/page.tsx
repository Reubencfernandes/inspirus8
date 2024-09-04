
import parse from 'html-react-parser'; 
import React from "react";
import {
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalTrigger,
} from "../../../components/ui/animated-modal";

import { CardSpotlight } from "../../../components/ui/card-spotlight";
import Nav from "@/app/Components/nav";
import HyperText from "@/components/magicui/hyper-text";
import SparklesText from "@/components/magicui/sparkles-text";
import Foot from "@/app/Components/footer";
import Image from "next/image";
import eventData from "@/app/json/EventName.json"; // Directly import JSON data
import Link from 'next/link';


interface EventDetailsProps {
    params: {
        eventid: string;
    };
}


export async function generateStaticParams() {
    try {
        // You don't need fs and path if you directly import JSON like this
        const events = eventData.events;
        console.log(events);

        // Map over the events to generate the params
        return events.map((event) => ({
            eventid: event.id,
        }));
    } catch (error) {
        console.error("Error reading or parsing JSON file:", error);
        return []; // Return an empty array or handle the error as needed
    }
}

export default function EventDetails({ params }: EventDetailsProps) {
    const { eventid } = params;
	const Event = eventData.events.find(e => e.id === eventid);
    return (
		<>
			<Nav />
			<div className="bg-background">
				<h1 className="text-center  font-retro text-4xl sm:text-5xl md:text-6xl lg:text-8xl uppercase">
					{Event?.title}
				</h1>
				<div className="max-w-4xl mx-auto p-4 text-white">
					<div className="grid grid-cols-1 gap-4">
						<div className="p-4 bg-transparent border rounded-xl border-cardborder1">
							<h2 className="text-3xl sm:text-4xl font-inter font-bold bg-gradient-to-tr from-green-600 to-blue-500 bg-clip-text text-transparent animate-gradient-x text-center mb-2 relative z-20">
								Event Coordinators
							</h2>
							<div className="font-inter flex flex-col sm:flex-row items-center justify-center relative z-20 gap-10 sm:gap-20">
								<div className="flex items-center flex-col">
									<Image
										height={500}
										width={500}
										src={Event?.contacts[0].image || "https://avatars.githubusercontent.com/u/31587917?v=4" } 
										alt={Event?.contacts[0].name || "Reuben"}
										className="rounded-full w-48 h-48 sm:w-48 sm:h-48 mb-2 object-cover"
									/>
									<p>{Event?.contacts[0].name || 'Coordinator'}</p>
									<p>Event Coordinator</p>
									<Modal>
										<Link href={Event?.contacts[0].number || ''}>
										<ModalTrigger className="bg-black rounded-lg text-white flex justify-center group/modal-btn mt-1">
											<span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
												Contact Me
											</span>
											<div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
												💬
											</div>
										</ModalTrigger>
										</Link>
									</Modal>
								</div>
								<div className="flex items-center flex-col">
									<Image
										height={500}
										width={500}
										src={Event?.contacts[1].image || "https://avatars.githubusercontent.com/u/31587917?v=4" } 
										alt={Event?.contacts[1].name || "Reuben"}
										className="rounded-full w-48 h-48 sm:w-48 sm:h-48 mb-2 object-cover"
									/>
									<p>{Event?.contacts[1].name || 'Coordinator'}</p>
									<p>Event Coordinator</p>
									<Modal>
									<Link href={Event?.contacts[0].number || ''}>
										<ModalTrigger className="bg-black text-white flex justify-center group/modal-btn mt-1">
											<span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
												Contact Me
											</span>
											<div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
												💬
											</div>
										</ModalTrigger>
										</Link>
									</Modal>
								</div>
							</div>
						</div>
						<CardSpotlight className="p-4 bg-transparent border rounded-xl border-cardborder1">
							<div className="relative z-20">
								<h1 className="text-3xl sm:text-4xl font-inter font-bold bg-gradient-to-tr from-green-600 to-blue-500 bg-clip-text text-transparent animate-gradient-x text-center mb-2">
									Details
								</h1>
								<p>Date: <b>{Event?.date}</b></p>
								<p>Time: <b>{Event?.time}</b></p>
								<p>Venue: <b>{Event?.venue}</b></p>
								<div className="list-disc list-inside" dangerouslySetInnerHTML={{ __html: Event?.members || ""}} />
								<Link href={Event?.register || ''}>
								<button className="mt-4 w-full p-2 bg-red-500 rounded">
									Register
								</button>
								</Link>
							</div>
						</CardSpotlight>

						<CardSpotlight className="p-4 bg-transparent border rounded-xl border-cardborder1 md:col-span-2">
							<div className="relative z-20">
								<SparklesText className="text-center mb-2" text="Rules" />
								<div className="list-disc list-inside" dangerouslySetInnerHTML={{ __html: Event?.rules || ""}} />
							</div>
						</CardSpotlight>

						<CardSpotlight className="p-4 bg-transparent border rounded-xl border-cardborder1">
							<div className="relative z-20 text-center">
								<h2 className="text-3xl sm:text-4xl font-bunge text-center mb-2">
									Prize
								</h2>
								<div>
								<div className="font-poppins" dangerouslySetInnerHTML={{ __html: Event?.prizes || ""}} />
								</div>
							</div>
						</CardSpotlight>

						<CardSpotlight className="p-4 bg-transparent border rounded-xl border-cardborder1">
							<div className="relative z-20">
								<h2 className="text-3xl sm:text-4xl text-center mb-2 font-bebas bg-gradient-to-tr from-green-600 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
									Team Members
								</h2>
								<div className="flex justify-center items-center flex-col">
									<h1 className="font-retro text-6xl sm:text-8xl">{Event?.teamnumber}</h1>
									<p className="text-center ml-4 font-poppins">
										Members Per Team
									</p>
								</div>
							</div>
						</CardSpotlight>

						<CardSpotlight className="p-5 bg-transparent border rounded-xl border-cardborder1 md:col-span-2">
							<div className="relative z-20 flex flex-col items-center">
								<div>
									<h2 className="text-4xl sm:text-6xl font-bebas bg-gradient-to-tr from-green-600 to-blue-500 bg-clip-text text-transparent animate-gradient-x">
										Eligibility
									</h2>
								</div>
								<div className="font-poppins" dangerouslySetInnerHTML={{ __html: Event?.eligibility || ""}} />
							</div>
						</CardSpotlight>

						<CardSpotlight className="p-4 bg-transparent border rounded-xl border-cardborder1 md:col-span-2">
							<div className="relative z-20">
								<h2 className="text-4xl sm:text-6xl font-bebas text-center mb-2 bg-gradient-to-tr from-red-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x">
									Round Details
								</h2>
								<div className="font-inter leading-relaxed">
								<div className="font-poppins" dangerouslySetInnerHTML={{ __html: Event?.roundinfo || "Not Available"}} />
								</div>
							</div>
						</CardSpotlight>
					</div>
				</div>
			</div>
			<Foot />
		</>
	);
}
