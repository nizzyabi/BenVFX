'use client'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { Hero } from "./hero";
import { EditedVideos } from "./edited-videos";
import { Channels } from "./channels";
import { Calendly } from "./calendly";
import { Footer } from "./footer";
import { EditedShorts } from "./edited-shorts";


export const LandingPage = () => {
    // Data AOS Animations
    useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 800,
          easing: "ease-out-cubic",
        });
      }, []);
    
    return (
        <div>
          <div className="pt-32 pb-16 md:pt-52 md:pb-32 relative max-w-5xl min-h-screen px-4 mx-auto sm:px-6 space-y-80">

            {/* Hero */}
            <Hero />

            {/* Edited Videos*/}
            <EditedVideos />

            {/* Shorts Edited Videos*/}

            <EditedShorts />

            {/* Channels Worked With*/}
            <Channels />

            {/* Calendly Booking Page*/}
            <Calendly />
          </div>

          
          <div>
            <Footer />
          </div>
          
        </div>
    );
}