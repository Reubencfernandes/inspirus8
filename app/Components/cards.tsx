"use client";
import Image from "next/image"
import Link from "next/link"
const Cards = (props: { 
  eventImage: string ,
  eventName: string ,
  eventDescription : string,
  eventid:string
 }) => {
  return (
			<div className="max-w-md rounded-lg  overflow-hidden shadow-lg bg-cardcor mt-9 ">
				<Image
					width={500}
					height={500}
					src={props.eventImage}
					alt="logo"
					className="h-80 w-full object-cover"
				/>
				<div className="px-3 py-4">
					<p className="font-bebas text-5xl text-white">{props.eventName}</p>
					<div className="font-inter text-white mt-1" dangerouslySetInnerHTML={{ __html: props.eventDescription || "Reuben is always Here" }} />
					<div className="mt-5 mb-2">
						<Link
							className="text-white border p-3 font-inter font-bold text-xl rounded-lg border-cardborder hover:cursor-pointer hover:text-hold"
							href={`/eventdetails/${props.eventid}`}

						>
							View Details
						</Link>
					</div>
				</div>
			</div>
		);
}

export default Cards