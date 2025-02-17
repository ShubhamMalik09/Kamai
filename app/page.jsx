"use client"

import HeroSection from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { featuresData, howItWorkData, statsData, testimonialsData } from "@/data/landing";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const imageRef = useRef();

  useEffect(()=>{
    const imageElement = imageRef.current;

    const handleScroll = ()=>{
        const scrollPosition = window.scrollY;
        const scrollThreshold = 1500;

        if(scrollPosition > scrollThreshold){
            imageElement.classList.add("scrolled");
        } else{
            imageElement.classList.remove("scrolled");
        }
    }
    window.addEventListener("scroll", handleScroll);
    return ()=>window.removeEventListener("scroll", handleScroll);
  },[]);

  return (
    <div>
      <HeroSection/>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Everything you need to manage your finances</h2>
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{
              perspective: '1000px'
            }}>
              {
                featuresData.map((feature,index) => (
                  <div key={index} className="relative group"
                    onMouseMove={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;
                      const centerX = rect.width / 2;
                      const centerY = rect.height / 2;
                      const deltaX = x - centerX;
                      const deltaY = y - centerY;
                      const ax = -(deltaY / centerY) * 5; // Rotate X axis based on vertical distance
                      const ay = (deltaX / centerX) * 5; 
                      e.currentTarget.style.setProperty("--x", `${x}px`);
                      e.currentTarget.style.setProperty("--y", `${y}px`);
                      e.currentTarget.style.setProperty("--ax", `${ax}deg`);
                      e.currentTarget.style.setProperty("--ay", `${ay}deg`);
                    }}
                    onMouseLeave={(e)=>{
                      e.currentTarget.style.setProperty("--ax", `${0}deg`);
                      e.currentTarget.style.setProperty("--ay", `${0}deg`);
                    }}
                    style={{
                      transform: "rotateX(var(--ax)) rotateY(var(--ay))",
                      transition: "transform 0.2s ease-out"
                    }}
                  >
                    <Card className="p-6 border border-black/30 rounded-xl relative transition">
                      <CardContent className="space-y-4 pt-4">
                        {feature.icon}
                        <h3 className="text-xl font-semibold">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </CardContent>
                    </Card>
                    <div
                      className="absolute inset-0 rounded-xl bg-[#60A5FA] opacity-0 group-hover:opacity-100 transition duration-300"
                      style={{
                        maskImage: `radial-gradient(150px 150px at var(--x, 100%) var(--y, 100%), rgba(96, 165, 250, 0.5) 0%, transparent 50%)`,
                        WebkitMaskImage: `radial-gradient(150px 150px at var(--x, 100%) var(--y, 100%), rgba(96, 165, 250, 0.5) 0%, transparent 50%)`,
                      }}
                    ></div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((data,index)=>(
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{data.value}</div>
                <div className="text-gray-600">{data.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-20 overflow-hidden">
        <div className='hero-image-wrapper'>
            <div ref={imageRef} className='hero-image'>
                <Image src={"/banner.jpg"} width={980} height={640} alt='dashboard preview' className='rounded-lg shadow-2xl border mx-auto' priority></Image>
            </div>
        </div>
      </section>

      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {
              howItWorkData.map((step,index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 flex items-center justify-center rounded-full mx-auto mb-6">{step.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {
              testimonialsData.map((testimonial,index) => (
                <Card key={index} className="p-6">
                  <CardContent className="pt-4">
                    <div className="flex items-center mb-4">
                      <Image src={testimonial.image} alt={testimonial.name} width={40} height={40} className="rounded-full"/>
                      <div className="ml-4">
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                      </div>
                    </div>
                    <p className="text-gray-600">{testimonial.quote}</p>
                  </CardContent>
                </Card>
              ))
            }
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-center mb-4">Ready To Take Control of Your Finances</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Join thousands of users who are already managing their finances smarter with Kam.ai</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {
              testimonialsData.map((testimonial,index) => (
                <Card key={index} className="p-6">
                  <CardContent className="pt-4">
                    <div className="flex items-center mb-4">
                      <Image src={testimonial.image} alt={testimonial.name} width={40} height={40} className="rounded-full"/>
                      <div className="ml-4">
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                      </div>
                    </div>
                    <p className="text-gray-600">{testimonial.quote}</p>
                  </CardContent>
                </Card>
              ))
            }
          </div>
        </div>
      </section>

    </div>
  );
}
