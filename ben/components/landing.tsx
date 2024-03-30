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
export const LandingPage = () => {
    useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 800,
          easing: "ease-out-cubic",
        });
      }, []);
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
                        Take the worry out of editing
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

                <div>
                    <div className="mt-10 flex space-x-8">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/k-XlqnNT_Xk?si=zvl3SqgWKVvpoaVA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="border border-slate-100/40 rounded-[5px]"></iframe>
                    
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/SjqmjAq2YAE?si=O0QiJ-hWkrGyXDNK" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="border border-slate-100/40 rounded-[5px]"></iframe>
                    </div>
                </div>
                <div className="l">
                    <div className="mt-10 flex space-x-8">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Siexk0ZFKCw?si=4_Rulc4o8Iwc2rub" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="border border-slate-100/40 rounded-[5px]"></iframe>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/C0cbOOecml8?si=XHtTmV_GJfhq2NL9" allow="autoplay; fullscreen" className="border border-slate-100/40 rounded-[5px]"></iframe>
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
                            <Avatar src={channel.logo} alt={channel.name} sx={{width: 100, height: 100}}/>
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
                <InlineWidget url="https://calendly.com/nizabizaher/programming-tutoring-consultation" styles={{"height": "1000px", "borderRadius": "5px"}}/>
                
            </div>
        </div>
    );
}