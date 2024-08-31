
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
        <CardBody className="max-w-48">
          <CardItem translateZ="100">
            <img
              src={props.teamImage}
              className="w-full object-cover rounded-t-lg group-hover/card:shadow-xl"
              alt="thumbnail" />
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
            {props.teamRole}
          </CardItem>
        </CardBody>
      </CardContainer></>
  )
}
 
export default TeamCards