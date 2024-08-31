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

export default function EventDetails() {
  return (
    <>
      <Nav />
      <div className="bg-background">
        <h1 className="text-center font-retro text-4xl sm:text-5xl md:text-6xl lg:text-8xl">
          Inspirathon
        </h1>
        <div className="max-w-4xl mx-auto p-4 text-white">
          <div className="grid grid-cols-1 gap-4">
            <div className="p-4 bg-transparent border rounded-xl border-cardborder1">
              <h2 className="text-3xl sm:text-4xl font-retro text-center mb-2 relative z-20">
                Event Coordinators
              </h2>
              <div className="font-inter flex flex-col sm:flex-row items-center justify-center relative z-20 gap-10 sm:gap-20">
                <div className="flex items-center flex-col">
                  <img
                    src="https://avatars.githubusercontent.com/u/31587917?v=4"
                    alt="Reuben"
                    className="rounded-full w-20 h-20 sm:w-24 sm:h-24 mb-2"
                  />
                  <p>Reuben</p>
                  <p>Event Coordinator</p>
                  <Modal>
                    <ModalTrigger className="bg-black rounded-lg text-white flex justify-center group/modal-btn mt-1">
                      <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                        Contact Me
                      </span>
                      <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                        💬
                      </div>
                    </ModalTrigger>
                  </Modal>
                </div>
                <div className="flex items-center flex-col">
                  <img
                    src="https://avatars.githubusercontent.com/u/31587917?v=4"
                    alt="Reuben"
                    className="rounded-full w-20 h-20 sm:w-24 sm:h-24 mb-2"
                  />
                  <p>Reuben</p>
                  <p>Event Coordinator</p>
                  <Modal>
                    <ModalTrigger className="bg-black text-white flex justify-center group/modal-btn mt-1">
                      <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                        Contact Me
                      </span>
                      <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                        💬
                      </div>
                    </ModalTrigger>
                  </Modal>
                </div>
              </div>
            </div>
            <CardSpotlight className="p-4 bg-transparent border rounded-xl border-cardborder1">
              <div className="relative z-20">
                <h1 className="text-3xl sm:text-4xl font-retro text-center mb-2">
                  Details
                </h1>
                <p>Date: 7th October, 2023</p>
                <p>Time: 9:30 AM - 1:00 PM</p>
                <p>Venue: C5 and C6</p>
                <p>Members: 2 per team</p>
                <button className="mt-4 w-full p-2 bg-red-500 rounded">
                  Register
                </button>
              </div>
            </CardSpotlight>

            <CardSpotlight className="p-4 bg-transparent border rounded-xl border-cardborder1 md:col-span-2">
              <div className="relative z-20">
                <SparklesText className="text-center mb-2" text="Rules" />
                <ul className="list-disc list-inside leading-relaxed">
                  <li>The event is divided into 3 different rounds</li>
                  <li>
                    The exact rules for each round will be mentioned below
                  </li>
                  <li>
                    The rounds will include steganography, cryptography, and web
                    exploitation
                  </li>
                  <li>
                    To see the event participation must have a basic knowledge
                    of cybersecurity
                  </li>
                  <li>Maximum 15 teams would be allowed to register</li>
                  <li>
                    All participants must reach the venue (DBCE) by 9:00 AM on
                    the 7th of October
                  </li>
                  <li>
                    For any further queries, contact the respective student
                    coordinators (preferably on WhatsApp)
                  </li>
                </ul>
              </div>
            </CardSpotlight>

            <CardSpotlight className="p-4 bg-transparent border rounded-xl border-cardborder1">
              <div className="relative z-20 text-center">
                <h2 className="text-3xl sm:text-4xl font-bunge text-center mb-2">
                  EVENTS
                </h2>
                <div>
                  <p className="font-poppins">1st Place: ₹6000</p>
                  <p className="font-poppins">2nd Place: ₹4000</p>
                  <p className="font-poppins">3rd Place: ₹2500</p>
                </div>
              </div>
            </CardSpotlight>

            <CardSpotlight className="p-4 bg-transparent border rounded-xl border-cardborder1">
              <div className="relative z-20">
                <h2 className="text-3xl sm:text-4xl text-center mb-2 font-bebas bg-gradient-to-tr from-green-600 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
                  Team Members
                </h2>
                <div className="flex justify-center items-center flex-col">
                  <h1 className="font-retro text-6xl sm:text-8xl">2</h1>
                  <p className="text-center ml-4 font-poppins">
                    Members Per Team
                  </p>
                </div>
              </div>
            </CardSpotlight>

            <CardSpotlight className="p-5 bg-transparent border rounded-xl border-cardborder1 md:col-span-2">
              <div className="relative z-20 flex flex-col md:flex-row gap-9">
                <div>
                  <h2 className="text-4xl sm:text-6xl font-bebas bg-gradient-to-tr from-green-600 to-blue-500 bg-clip-text text-transparent animate-gradient-x">
                    Eligibility
                  </h2>
                </div>
                <p className="text-left">
                  Undergraduate and Diploma students from all professional and
                  non-professional institutions
                </p>
              </div>
            </CardSpotlight>

            <CardSpotlight className="p-4 bg-transparent border rounded-xl border-cardborder1 md:col-span-2">
              <div className="relative z-20">
                <h2 className="text-4xl sm:text-6xl font-bebas text-center mb-2 bg-gradient-to-tr from-red-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x">
                  Round Details
                </h2>
                <div className="font-inter leading-relaxed">
                  <p>Round 1: The Hidden Blueprint (Steganography)</p>
                  <p>A Digital Image called "A Poneglyph" is provided.</p>
                  <p>Round 1.1</p>
                  <ul className="list-disc list-inside">
                    <li>
                      One out of the two members (First Member) is given 15
                      minutes to analyze the Poneglyph and find the hidden
                      information.
                    </li>
                    <li>
                      The second member must wait outside while the first member
                      is in the process of analyzing the image.
                    </li>
                    <li>
                      After 15 minutes if the first member finds the hidden
                      information then the team is awarded with 50 points.
                    </li>
                  </ul>
                  <p>Round 2.2</p>
                  <ul className="list-disc list-inside">
                    <li>
                      If the first member is unable to find the hidden
                      information then he can ask for a hint but that will cost
                      the team 20 points.
                    </li>
                    <li>
                      After 15 minutes the second member switches places and
                      analyzes the Poneglyph and is provided with 10 minutes to
                      find the hidden information.
                    </li>
                    <li>
                      If the second member finds the information then the team
                      will get 25 points.
                    </li>
                  </ul>
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
