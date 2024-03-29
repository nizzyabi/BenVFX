'use client'
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { Particles } from "@/components/particles";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from 'lucide-react';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"

const channels = [
    {
        logo: '/alpha.jpeg',
        name: 'Alpha Central',
        subs: '200,000',
    },
    {
        logo: '/frazer.jpeg',
        name: 'Frazer Brookes',
        subs: '70,000',
    },
    {
        logo: '/dan.jpg',
        name: 'Dan Kieft',
        subs: '14,000',
    },
    {
        logo: '/joe.jpeg',
        name: 'Joe Leech',
        subs: '13,000',
    },
    {
        logo: '/nizar.png',
        name: 'Nizar',
        subs: '5,000',
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
                        I take the worry out of editing
                    </h1>
                    <p className="mb-8 text-lg text-zinc-300/40 font-medium" data-aos="fade-down" data-aos-delay="200">Transform your videos with Retention based editing </p>
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
        
            <div className="text-center" id='edited'>
                <h1 className="pb-4 font-bold tracking-tight text-5xl lg:text-6xl ">Videos I've edited</h1>
                <div className="flex items-center justify-center">
                    <Separator className="mt-3 bg-slate-100/20 h-0.5 w-40" />
                </div>

                <div>
                    <div className="mt-10 flex space-x-8">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/X-0DXrOIN_c?si=AFGQCz5MtkJhraa5" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="border border-slate-100/40 rounded-[5px]"></iframe>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/X-0DXrOIN_c?si=AFGQCz5MtkJhraa5" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="border border-slate-100/40 rounded-[5px]"></iframe>
                    </div>
                </div>
                <div className="max-w-8xl">
                    <div className="mt-10 flex space-x-8">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/X-0DXrOIN_c?si=AFGQCz5MtkJhraa5" 
                    
                        title="YouTube video player" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="border border-slate-100/40 rounded-[5px]"></iframe>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/X-0DXrOIN_c?si=AFGQCz5MtkJhraa5" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="border border-slate-100/40 rounded-[5px]"></iframe>
                    </div>
                </div>
            </div>

            <div className="text-center">
                <h1 className="pb-4 font-bold tracking-tight text-5xl lg:text-6xl ">Channels I've Worked With</h1>
                <div className="flex items-center justify-center">
                    <Separator className="mt-3 bg-slate-100/20 h-0.5 w-40" />
                </div>
               
                {channels.map((channel, index) => (
                    <div key={index} className="mt-10 flex items-center text-center space-x-8">
                        <Avatar className="flex flex-col">
                            <AvatarImage src={channel.logo} alt={channel.name} height='12' width='12'/>
                            <AvatarFallback>{channel.name}</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                            <h1 className="font-bold text-2xl">{channel.name}</h1>
                            <p className="text-lg">{channel.subs} Subscribers</p>
                        </div>
                    </div>
                ))}
               
            </div>
        </div>
    );
}