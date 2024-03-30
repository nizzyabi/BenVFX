'use client'
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { Particles } from "@/components/particles";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from 'lucide-react';
import { Avatar } from '@mui/material';
import { InlineWidget } from "react-calendly";
import YouTube, { YouTubeProps } from 'react-youtube';


export const LandingPage = () => {
    // Data AOS Animations
    useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 800,
          easing: "ease-out-cubic",
        });
      }, []);
    // Youtube Video Options
    const videoOptions = {
        playerVars: {
          autoplay: 1,
          controls: 0,
          rel: 0,
          showinfo: 0,
          mute: 1,
          loop: 1
        },
        width: '480',
        height: '270',
        className: 'rounded-xl'
        
      };
    // Channels
    const channels = [
        {
            logo: '/alpha.jpeg',
            name: 'Alpha',
            subs: '200,000',
            link: 'https://www.youtube.com/@AlphaCentralOfficial'
        },
        {
            logo: '/frazer.jpeg',
            name: 'Brookes',
            subs: '70,000',
            link: 'https://www.youtube.com/@FrazerBrookesChannel'
        },
        {
            logo: '/dan.jpg',
            name: 'Dan Kieft',
            subs: '14,000',
            link: 'https://www.youtube.com/@Dankieft'
        },
        {
            logo: '/joe.jpeg',
            name: 'Joe Leech',
            subs: '30,000',
            link: 'https://www.youtube.com/@Joe_Leech'
        },
    ]
    // Avatar Styles
    const style = {
        width: {
          xs: 50, // width on extra-small devices
          sm: 100, // width on small devices
          md: 150, // default width
        },
        height: {
          xs: 50, // height on extra-small devices
          sm: 100, // height on small devices
          md: 150, // default height
        },
        // You can add more responsive keys (lg, xl) as needed
      };
    return (
        <div className="pt-32 pb-16 md:pt-52 md:pb-32 relative max-w-5xl min-h-screen px-4 mx-auto sm:px-6 space-y-80">

            {/* Hero */}
            <div>
                <Particles className="absolute inset-0 -z-10 " />
                <div className="text-center px-8">
                    <div className="mb-6" data-aos="fade-down">
                        <div className="relative inline-flex before:absolute before:inset-0 ">
                            <Link
                            className="px-3 py-1 text-sm font-medium inline-flex items-center justify-center border rounded-full  text-zinc-300 hover:text-white transition duration-150 ease-in-out w-full group border-slate-100/40"
                            href="https://www.youtube.com/@Vfxbenlee"
                            target="_blank"
                            >
                                <span className="relative inline-flex items-center">
                                    My Youtube Channel{" "}
                                    <span className="tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                                        -&gt;
                                    </span>
                                </span>
                            </Link>
                        </div>
                    </div>
                    <h1 className="pb-4 font-extrabold tracking-tight text-transparent text-7xl lg:text-8xl  bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400" data-aos="fade-down">
                        Edits Made Easy
                    </h1>
                    <p className="mb-8 text-lg text-zinc-300/40 font-medium" data-aos="fade-down" data-aos-delay="200">Transform your videos with retention based editing</p>
                    <div className="flex flex-col items-center max-w-xs mx-auto gap-4 sm:max-w-none  sm:justify-center sm:flex-row sm:inline-flex" data-aos="fade-down"
                    data-aos-delay="400">
                        <Link
                            className="w-full justify-center flex items-center whitespace-nowrap transition duration-150 ease-in-out font-medium rounded px-4 py-1.5  text-zinc-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group"
                            href="#edited">
                                Checkout my edits{" "}
                                <ArrowRight className="w-3 h-3 tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Edited Videos*/}
            <div className="text-center" id='edited'>
                <h1 className="pb-4 font-bold tracking-tight text-5xl lg:text-6xl ">Videos I've edited</h1>
                <div className="flex items-center justify-center">
                    <Separator className="mt-3 bg-slate-100/20 h-0.5 w-40" />
                </div>

                <div className="flex justify-center">
                    <div className="mt-10 grid sm:grid-cols-1 lg:grid-cols-2 gap-5">
                        <YouTube videoId="Siexk0ZFKCw" opts={videoOptions}/>
                        <YouTube videoId="C0cbOOecml8" opts={videoOptions}/>
                        <YouTube videoId="SjqmjAq2YAE" opts={videoOptions}/>
                        <YouTube videoId="ofbDgjXAs5s" opts={videoOptions}/>
                    </div>
                </div>
            </div>

            

            {/* Channels Worked With*/}
            <div className="text-center">
                <h1 className="pb-4 font-bold tracking-tight text-5xl lg:text-6xl ">Channels I've Worked With</h1>
                <div className="flex items-center justify-center">
                    <Separator className="mt-3 bg-slate-100/20 h-0.5 w-40" />
                </div>
               
               <div className="flex items-center justify-center mx-auto sm:space-x-2 md:space-x-4 lg:space-x-8">
                {channels.map((channel, index) => (
                    <div key={index} className="mt-10 flex">
                        <div className="flex flex-col items-center">
                            <Link href={`${channel.link}`}>
                            <Avatar src={channel.logo} alt={channel.name} sx={style}/>
                            </Link>
                            <h1 className="font-semibold text-xl mt-4">{channel.name}</h1>
                            <p className="text-lg mt-2">{channel.subs} subs</p>
                        </div>
                    </div>
                ))}
                </div>
            </div>

            {/* Calendly Booking Page*/}
            <div className="text-center">
                <h1 className="pb-4 font-bold tracking-tight text-4xl lg:text-4xl">Ready to Transform Your Content? <br/> Book a Free Editing Consultation Below!</h1>
                <div className="flex items-center justify-center">
                    <Separator className="mt-3 bg-slate-100/20 h-0.5 w-40" />
                </div>
                <InlineWidget url="https://calendly.com/benvfxs/30min" styles={{"height": "1000px", "borderRadius": "5px"}}/>
                
            </div>
        </div>
    );
}