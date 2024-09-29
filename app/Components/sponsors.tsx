
import React from "react";
import { PinContainer } from "../../components/ui/3d-pin";
type ImageData = {
  image: string;
  url: string;
  title: string;
  description: string;
};

type AnimatedPinDemoProps = {
  data: ImageData[];
};

export function AnimatedPinDemo({ data }: AnimatedPinDemoProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 content-center align-center justify-items-center">
   
    {data.map((item: any,index: any)=>(
    <div className="h-[26rem] w-full flex items-center justify-center" key={index}>
      <PinContainer
        title={item.title}
        href={item.url}
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            {item.title}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
          </div>
          <img
            src={item.image}
            className="w-full h-full object-contain"
          />
        </div>
      </PinContainer>
    </div>
  ))}
  </div>
  );
}
