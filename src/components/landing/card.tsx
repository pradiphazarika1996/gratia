"use client";
import React from "react";
import {
  Monitor,
  Sparkles,
  TrendingUp,
  Code,
  Smartphone,
  Lightbulb,
  ArrowRight,
  LucideIcon,
} from "lucide-react";

// ✅ Define type for a service object
interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  backDescription: string;
}

// ✅ Your array of services (typed)
const services: Service[] = [
  {
    icon: Monitor,
    title: "Web Design",
    description:
      "Proin Pulvinar Eu Sem Eu Vehicula and, Integer Urna Libero, Semper mes.",
    backDescription:
      "Creating stunning, user-friendly web designs that captivate your audience and drive engagement.",
  },
  {
    icon: Sparkles,
    title: "Motion Design",
    description:
      "Proin Pulvinar Eu Sem Eu Vehicula and, Integer Urna Libero, Semper mes.",
    backDescription:
      "Bringing your brand to life with dynamic motion graphics and animations that tell your story in engaging, memorable ways.",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "Proin Pulvinar Eu Sem Eu Vehicula and, Integer Urna Libero, Semper mes.",
    backDescription:
      "Driving growth through strategic digital marketing campaigns. We help you reach your target audience and maximize your ROI.",
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Proin Pulvinar Eu Sem Eu Vehicula and, Integer Urna Libero, Semper mes.",
    backDescription:
      "Building robust, scalable web applications with cutting-edge technologies. From concept to deployment, we deliver excellence.",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Proin Pulvinar Eu Sem Eu Vehicula and, Integer Urna Libero, Semper mes.",
    backDescription:
      "Crafting native and cross-platform mobile applications that provide seamless user experiences on iOS and Android.",
  },
  {
    icon: Lightbulb,
    title: "Creative Solution",
    description:
      "Proin Pulvinar Eu Sem Eu Vehicula and, Integer Urna Libero, Semper mes.",
    backDescription:
      "Innovative solutions tailored to your unique challenges. We think outside the box to deliver creative strategies that work.",
  },
];

// ✅ Type the props of ServiceCard properly
const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  const Icon = service.icon;

  return (
    <div className="flip-card h-[280px]">
      <div className="flip-card-inner h-full w-full relative">
        {/* Front of card */}
        <div className="flip-card-front absolute inset-0">
          <div className="h-full w-full bg-[#0f1e2e]/80 backdrop-blur-sm border border-gray-800/50 rounded-lg p-8 flex flex-col">
            <div className="mb-6">
              <div className="w-12 h-12 bg-gray-600/10 border border-[#f8f9fa] flex items-center justify-center">
                <Icon className="w-6 h-6 text-[#FFFFFF]" />
              </div>
            </div>

            <h3 className="text-white text-xl font-semibold mb-4">
              {service.title}
            </h3>

            <p className="text-gray-400 text-sm mb-6 flex-grow">
              {service.description}
            </p>

            <button className="flex items-center gap-2 text-white text-sm font-medium hover:text-blue-500 transition-colors group">
              READ MORE
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Back of card */}
        <div className="flip-card-back absolute inset-0">
          <div className="h-full w-full bg-gradient-to-br from-blue-900/80 to-blue-950/90 backdrop-blur-sm border border-blue-500/50 rounded-lg p-8 flex flex-col">
            <div className="mb-6">
              <div className="w-16 h-16 bg-blue-600/20 border border-blue-500/50 flex items-center justify-center">
                <Icon className="w-8 h-8 text-blue-400" />
              </div>
            </div>

            <h3 className="text-white text-xl font-semibold mb-4">
              {service.title}
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed flex-grow">
              {service.backDescription}
            </p>

            <button className="flex items-center gap-2 text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors group mt-4">
              LEARN MORE
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ITTechServices() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .flip-card {
            perspective: 1000px;
            isolation: isolate;
          }
          
          .flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            transition: transform 1.2s;
            transform-style: preserve-3d;
          }
          
          .flip-card:hover .flip-card-inner {
            transform: rotateY(180deg);
          }
          
          .flip-card-front,
          .flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
          }
          
          .flip-card-back {
            transform: rotateY(180deg);
          }
        `,
        }}
      />

      <div className="relative min-h-screen w-full overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://media.istockphoto.com/id/1036766612/video/african-american-business-man-holding-a-presentation-in-the-glass-conference-room.mp4?s=mp4-640x640-is&k=20&c=7S7-7Ef0aNIM_DCXqgP7fcGxzpWCVAs7zcad0PbN4sU="
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <p className="text-[#18e4eb] text-sm font-medium mb-4 flex items-center justify-center gap-2">
              <span className="w-8 h-[2px] bg-[#18e4eb]"></span>
              SERVICE WE PROVIDE
              <span className="w-8 h-[2px] bg-[#18e4eb]"></span>
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#ffffff] leading-tight">
              All Professional We re Offering Best
              <br />
              IT Solutions & <span className="text-[#18e4eb]">Services</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
