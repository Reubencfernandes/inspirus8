"use client";
import React from "react";
import { PinContainer } from "../../components/ui/3d-pin";

export function AnimatedPinDemo() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center ">
      <PinContainer
        title="One Shield"
        href="https://oneshield.com/"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            One Shield
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
          </div>
          <img
            src="https://i.imgur.com/UY3wvln.jpg"
            className="w-full h-full object-contain"
          />
        </div>
      </PinContainer>
    </div>
  );
}
