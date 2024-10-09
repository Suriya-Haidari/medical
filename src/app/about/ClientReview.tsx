import React, { useEffect, useRef } from "react";
import "./style.css";

interface ClientReviewProps {
  reviews: {
    id: number;
    title: string;
    description: string;
    linkText: string;
  }[];
}

export default function ClientReview({ reviews }: ClientReviewProps) {
  const cardRefs = useRef<HTMLDivElement[]>([]);

  const handleMouseEnter = () => {
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  };

  const handleMouseLeave = () => {
    document.body.style.backgroundColor = "";
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-card");
          } else {
            entry.target.classList.remove("animate-card");
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((card) => {
      if (card) {
        observer.observe(card);
        card.addEventListener("mouseenter", handleMouseEnter);
        card.addEventListener("mouseleave", handleMouseLeave);
      }
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) {
          observer.unobserve(card);
          card.removeEventListener("mouseenter", handleMouseEnter);
          card.removeEventListener("mouseleave", handleMouseLeave);
        }
      });
    };
  }, []);

  return (
    <div className="body">
      <div className="container__2">
        {reviews.map((review, index) => (
          <div
            key={review.id}
            ref={(el) => (cardRefs.current[index] = el!)}
            className="card__2 opacity-0 transform translate-y-[20px]"
          >
            <div className="circle">
              <h2>{review.title}</h2>
            </div>
            <div className="content">
              <h1 className="text-lg">{review.name}:</h1>
              <p>{review.description}</p>
              <a href="/emergency">{review.linkText}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
