"use client";

import { useState } from "react";

export default function ClientWrapper({ children }) {
    const [darkmode, setDarkmode] = useState(false);
  
    return (
      <>
        {children}
        <footer>
          <div className={`flex flex-col ${darkmode ? "text-black bg-white" : "text-white bg-black"}`}>
            <div className="grid grid-cols-4 p-5">
              <img src={darkmode ? "kamai-black.png" : "kamai-white.png"} className="w-48 pt-3 pl-5"/>
              <div className="flex flex-col gap-1">
                <p className="font-semibold pb-2">Products & pricing</p>
                <p className="opacity-80 hover:cursor-pointer hover:opacity-90">Pricing</p>
                <p className="opacity-80 hover:cursor-pointer hover:opacity-90">Atlas</p>
                <p className="opacity-80 hover:cursor-pointer hover:opacity-90">Billing</p>
                <p className="opacity-80 hover:cursor-pointer hover:opacity-90">Link</p>
                <p className="opacity-80 hover:cursor-pointer hover:opacity-90">Payments</p>
                <p className="opacity-80 hover:cursor-pointer hover:opacity-90">Payment Links</p>
                <p className="opacity-80 hover:cursor-pointer hover:opacity-90">Invoicing</p>
                <p className="opacity-80 hover:cursor-pointer hover:opacity-90">Payouts</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-semibold pb-2">Solutions</p>
                <p className="opacity-80 hover:cursor-pointer hover:opacity-90">Startups</p>
                <p className="opacity-80 hover:cursor-pointer hover:opacity-90">Enterprises</p>
                <p className="opacity-80 hover:cursor-pointer hover:opacity-90">SaaS</p>
                <p className="opacity-80 hover:cursor-pointer hover:opacity-90">Retail</p>
                <p className="opacity-80 hover:cursor-pointer hover:opacity-90">Platforms</p>
                <p className="opacity-80 hover:cursor-pointer hover:opacity-90">E-Commerce</p>
                <p className="font-semibold mt-3 pb-2">Integrations & custom solutions</p>
                <p className="opacity-80 hover:cursor-pointer hover:opacity-90">Partner ecosystem</p>
                <p className="opacity-80 hover:cursor-pointer hover:opacity-90">Professional services</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-semibold pb-2">Resources</p>
                <p className="opacity-80 hover:cursor-pointer hover:opacity-90">Guides</p>
                <p className="opacity-80 hover:cursor-pointer hover:opacity-90">Blog</p>
                <p className="opacity-80 hover:cursor-pointer hover:opacity-90">Privacy & terms</p>
                <p className="opacity-80 hover:cursor-pointer hover:opacity-90">Licences</p>
                <p className="font-semibold mt-3 pb-2">Company</p>
                <p className="opacity-80 hover:cursor-pointer hover:opacity-90">Jobs</p>
                <p className="font-semibold mt-3 pb-1">Support</p>
                <p className="opacity-80 hover:cursor-pointer hover:opacity-90">Contact sales</p>
                <p className="opacity-80 hover:cursor-pointer hover:opacity-90">Support centre</p>
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