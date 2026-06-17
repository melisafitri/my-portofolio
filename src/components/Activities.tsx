import { motion } from "motion/react";
import { ArrowRight, Calendar } from "lucide-react";
import { portfolioData } from "../data";
import { useEffect, useRef, useState } from "react";
import { GlassCard } from "./ui/GlassCard";
import { SectionHeader } from "./ui/SectionHeader";
import { Badge } from "./ui/Badge";
import { Newspaper } from "lucide-react";

export function Activities() {
  const { activities } = portfolioData;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let animationFrameId: number;
    let accumulatedScroll = 0;
    let lastTime = performance.now();

    const scroll = (time: number) => {
      const deltaTime = time - lastTime;
      lastTime = time;

      if (scrollRef.current && !isHovered) {
        const scrollSpeed = 0.05;
        accumulatedScroll += scrollSpeed * deltaTime;

        if (accumulatedScroll >= 1) {
          scrollRef.current.scrollLeft += Math.floor(accumulatedScroll);
          accumulatedScroll -= Math.floor(accumulatedScroll);

          const maxScroll = scrollRef.current.scrollWidth / 2;
          if (scrollRef.current.scrollLeft >= maxScroll) {
            scrollRef.current.scrollLeft -= maxScroll;
          }
        }
      } else {
        accumulatedScroll = 0;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  if (!activities || activities.length === 0) return null;

  return (
    <section id="activities" className="py-24 px-6 md:px-12 relative z-10 antialiased">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          icon={Newspaper}
          title="More Information"
          iconClassName="text-blue-500"
          className="mb-12"
        />

        <div className="relative -mx-6 md:-mx-12 px-6 md:px-12">
          <div
            ref={scrollRef}
            className="flex pb-12 pt-4 overflow-x-auto gap-6 cursor-grab active:cursor-grabbing"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
          >
            {[1, 2].map((_, blockIndex) => (
              <div key={blockIndex} className="flex gap-6 shrink-0">
                {activities.map((activity, index) => (
                  <GlassCard
                    key={`${activity.id}-${index}`}
                    whileHover={{ y: -5 }}
                    rounded="3xl"
                    className="shrink-0 w-[75vw] max-w-[300px] md:w-[380px] overflow-hidden flex flex-col"
                  >
                    {/* Image */}
                    <div className="relative h-48 md:h-56 overflow-hidden">
                      <img
                        src={activity.image}
                        alt={activity.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8 flex flex-col flex-grow">
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 leading-snug mb-3 line-clamp-3">
                        {activity.title}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-4">
                        <Calendar className="w-3.5 h-3.5" />
                        {activity.date}
                      </div>
                      <div className="mt-auto">
                        <a
                          href={activity.link}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-blue-600 font-semibold text-sm bg-blue-500/10 border border-blue-200/60 backdrop-blur-md hover:bg-blue-500/20 transition-all"
                        >
                          Informasi Selengkapnya
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </GlassCard>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
