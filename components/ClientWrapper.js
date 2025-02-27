"use client";

import { useState } from "react";
import Header from "./Header";

export default function ClientWrapper({ children }) {
    const [darkmode, setDarkmode] = useState(false);
  
    return (
      <>
        <Header/>
        <main className="min-h-screen mt-20">
            {children}
        </main>
        <footer className="mt-14">
          <div className={`flex flex-col ${darkmode ? "text-black bg-white" : "text-black bg-white"}`}>
            <div className="grid grid-cols-2 md:grid-cols-4 p-5 gap-4">
              <img src={darkmode ? "kamai-white.png" : "kamai-black.png"} className="w-48 pt-3 pl-5"/>
              <div className="flex flex-col gap-1">
                <p className="font-semibold pb-2">Products & pricing</p>
                <p><span className="opacity-80 hover:cursor-pointer hover:opacity-[93]">Pricing</span></p>
                <p><span className="opacity-80 hover:cursor-pointer hover:opacity-[93]">Atlas</span></p>
                <p><span className="opacity-80 hover:cursor-pointer hover:opacity-[93]">Billing</span></p>
                <p><span className="opacity-80 hover:cursor-pointer hover:opacity-[93]">Link</span></p>
                <p><span className="opacity-80 hover:cursor-pointer hover:opacity-[93]">Payments</span></p>
                <p><span className="opacity-80 hover:cursor-pointer hover:opacity-[93]">Payment Links</span></p>
                <p><span className="opacity-80 hover:cursor-pointer hover:opacity-[93]">Invoicing</span></p>
                <p><span className="opacity-80 hover:cursor-pointer hover:opacity-[93]">Payouts</span></p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-semibold pb-2">Solutions</p>
                <p><span className="opacity-80 hover:cursor-pointer hover:opacity-[93]">Startups</span></p>
                <p><span className="opacity-80 hover:cursor-pointer hover:opacity-[93]">Enterprises</span></p>
                <p><span className="opacity-80 hover:cursor-pointer hover:opacity-[93]">SaaS</span></p>
                <p><span className="opacity-80 hover:cursor-pointer hover:opacity-[93]">Retail</span></p>
                <p><span className="opacity-80 hover:cursor-pointer hover:opacity-[93]">Platforms</span></p>
                <p><span className="opacity-80 hover:cursor-pointer hover:opacity-[93]">E-Commerce</span></p>
                <p className="font-semibold mt-3 pb-2">Integrations & custom solutions</p>
                <p><span className="opacity-80 hover:cursor-pointer hover:opacity-[93]">Partner ecosystem</span></p>
                <p><span className="opacity-80 hover:cursor-pointer hover:opacity-[93]">Professional services</span></p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-semibold pb-2">Resources</p>
                <p><span className="opacity-80 hover:cursor-pointer hover:opacity-[93]">Guides</span></p>
                <p><span className="opacity-80 hover:cursor-pointer hover:opacity-[93]">Blog</span></p>
                <p><span className="opacity-80 hover:cursor-pointer hover:opacity-[93]">Privacy & terms</span></p>
                <p><span className="opacity-80 hover:cursor-pointer hover:opacity-[93]">Licences</span></p>
                <p className="font-semibold mt-3 pb-2">Company</p>
                <p><span className="opacity-80 hover:cursor-pointer hover:opacity-[93]">Jobs</span></p>
                <p className="font-semibold mt-3 pb-1">Support</p>
                <p><span className="opacity-80 hover:cursor-pointer hover:opacity-[93]">Contact sales</span></p>
                <p><span className="opacity-80 hover:cursor-pointer hover:opacity-[93]">Support centre</span></p>
              </div>
            </div>
            <div className="flex w-full items-center justify-center p-3">
              <p className="font-semibold text-lg">Made with 💗 by Shubham Malik</p>
            </div>
          </div>
        </footer>
      </>
    );
  }