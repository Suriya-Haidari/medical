"use client";
import "./style.css";
import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface HospitalCard {
  icon: any;
  title: string;
  text: string;
}

interface ExploreProps {
  hospitalData: HospitalCard[];
}

export default function Explore({ hospitalData }: ExploreProps) {
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-card_2");
          } else {
            entry.target.classList.remove("animate-card_2");
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className="w-full flex flex-wrap justify-center items-center p-4 dark:bg-neutral-900">
      {hospitalData.map((item, index) => (
        <div
          key={index}
          // @ts-ignore
          ref={(el) => (cardRefs.current[index] = el!)}
          className="w-48 h-48 dark:bg-neutral-900 flex-shrink-0 rounded-lg overflow-hidden transition duration-300 text-center mb-4 bg-transparent transform hover:scale-105 translate-x-[-20px]"
        >
          <div className="px-4 py-4 h-full flex flex-col justify-between dark:text-white">
            <div className="text-4xl mb-4 transition-colors duration-300">
              <FontAwesomeIcon icon={item.icon} />
            </div>
            <h1 className="font-bold text-lg text-teal-400">{item.title}</h1>
            <p className="font-bold">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
