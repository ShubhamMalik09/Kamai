import HeroSection from "@/components/Hero";
import { statsData } from "@/data/landing";

export default function Home() {
  return (
    <div className="mt-40">
      <HeroSection/>

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
    </div>
  );
}
