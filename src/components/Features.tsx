
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Microscope, Stethoscope, HeartPulse, Pill, ShieldCheck, Bandage } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={cardRef}
      className={cn(
        "feature-card glass-card opacity-0 p-4 sm:p-6",
        "lg:hover:bg-gradient-to-br lg:hover:from-white lg:hover:to-pulse-50",
        "transition-all duration-300"
      )}
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <div className="rounded-full bg-pulse-50 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-pulse-500 mb-4 sm:mb-5">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{title}</h3>
      <p className="text-gray-600 text-sm sm:text-base">{description}</p>
    </div>
  );
};

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".fade-in-element");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animate-fade-in");
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section
      className="py-12 sm:py-16 md:py-20 pb-0 relative bg-gray-50"
      id="features"
      ref={sectionRef}
    >
      <div className="section-container">
        <div className="text-center mb-10 sm:mb-16">
          <div className="pulse-chip mx-auto mb-3 sm:mb-4 opacity-0 fade-in-element">
            <span>Features</span>
          </div>
          <h2 className="section-title mb-3 sm:mb-4 opacity-0 fade-in-element">
            Trusted Care, <br className="hidden sm:block" />
            Comprehensive Services
          </h2>
          <p className="section-subtitle mx-auto opacity-0 fade-in-element">
            Genuine medicines and expert guidance tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <FeatureCard
            icon={<Microscope className="w-5 h-5 sm:w-6 sm:h-6" />}
            title="Genuine Medicines"
            description="Only authentic, approved medicines from trusted suppliers."
            index={0}
          />
          <FeatureCard
            icon={<Stethoscope className="w-5 h-5 sm:w-6 sm:h-6" />}
            title="Professional Guidance"
            description="Qualified support to help you choose the right treatment."
            index={1}
          />
          <FeatureCard
            icon={<HeartPulse className="w-5 h-5 sm:w-6 sm:h-6" />}
            title="Expert Care"
            description="Guidance from qualified professionals for the right treatment."
            index={2}
          />
          <FeatureCard
            icon={<Pill className="w-5 h-5 sm:w-6 sm:h-6" />}
            title="Wide Selection"
            description="Prescription, OTC, ayurvedic, and veterinary supplies in one place."
            index={3}
          />
          <FeatureCard
            icon={<ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />}
            title="Safe & Secure"
            description="Proper storage, handling, and privacy for your health needs."
            index={4}
          />
          <FeatureCard
            icon={<Bandage className="w-5 h-5 sm:w-6 sm:h-6" />}
            title="Quick Assistance"
            description="Fast service and easy ordering via WhatsApp."
            index={5}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
