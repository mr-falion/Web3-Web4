import React, { useEffect, useRef, useState } from 'react';
import { servicesData } from '../../data/mock';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import * as LucideIcons from 'lucide-react';
import { ArrowRight } from 'lucide-react';

const WorkWithUsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 bg-[#0a0a0a] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <span className="inline-block px-4 py-2 bg-[#00FFD1]/10 border border-[#00FFD1]/30 text-[#00FFD1] text-sm font-medium mb-6">
            COLLABORATION
          </span>
          <h2 className="font-pixel text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
            Work With Us
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            We collaborate with startups, enterprises, and protocols to bring Web3 and AI visions to life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {servicesData.map((service, index) => {
            const IconComponent = LucideIcons[service.icon] || LucideIcons.Circle;
            return (
              <Card
                key={service.title}
                className={`group bg-[#121212] border border-white/10 hover:border-[#00FFD1]/50 p-6 transition-all duration-500 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#00FFD1]/10 flex-shrink-0 flex items-center justify-center group-hover:bg-[#00FFD1] transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-[#00FFD1] group-hover:text-black transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-semibold mb-2 group-hover:text-[#00FFD1] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div
          className={`text-center transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <Button
            className="bg-[#00FFD1] text-black hover:bg-[#00FFD1]/10 hover:text-[#00FFD1] px-10 py-6 rounded-none text-lg font-medium transition-all duration-400 group"
            asChild
          >
            <a href="#contact" className="flex items-center gap-3">
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WorkWithUsSection;
