
import Image from "next/image"
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card"
const TeamCards = (props: 
  { 
   teamImage: string,
   teamName: string,
   teamRole: string
  }) => {
  return (
    <>
    <CardContainer className="bg-cardcor rounded-lg font-inter">
        <CardBody className="sm:max-w-48 max-w-32 text-center flex flex-col items-center">
          <CardItem translateZ="100">
            <Image
              src={props.teamImage}
              className="w-full object-cover rounded-t-lg group-hover/card:shadow-xl"
              alt="thumbnail" 
              width={100}
              height={100}
              />
          </CardItem>
          <CardItem
            translateZ="50"
            className="font-inter text-xl font-bold text-white p-2"
          >
           {props.teamName}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="font-inter text-white pl-2 pb-3"
          >
            <div className="" dangerouslySetInnerHTML={{ __html: props.teamRole || "" }} />
          </CardItem>
        </CardBody>
      </CardContainer></>
  )
}
 
export default TeamCards