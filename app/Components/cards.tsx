import Link from "next/link"

const Cards = (props: { 
  eventImage: string ,
  eventName: string ,
  eventDescription : string,
 }) => {
  return (
    <div className='max-w-md rounded-lg  overflow-hidden shadow-lg bg-cardcor mt-9 ' >
      <img src={props.eventImage} alt='logo' className='h-80 w-full object-cover'></img>
      <div className='px-3 py-4'>
        <p className='font-bebas text-5xl text-white'>{props.eventName}</p>
        <p className='font-inter text-white mt-1'>{props.eventDescription}</p>
        <div className="mt-5 mb-2">
        <Link className='text-white border p-3 font-inter font-bold text-xl rounded-lg border-cardborder hover:cursor-pointer'

        href="/eventdetails/1"
        >View Details</Link>
        </div>
        
      </div>
    </div>
  )
}

export default Cards