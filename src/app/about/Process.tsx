import { useEffect, useRef } from "react";
import Image from "next/image";
import "./style.css";

interface Process {
  images: {
    src: string;
    alt: string;
    height: string;
    width: string;
  }[];
}

export default function Process({ images }: Process) {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<HTMLDivElement[]>([]); // Store refs for all images

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation classes when the element enters the viewport
            if (entry.target.classList.contains("text-section")) {
              entry.target.classList.add("animate-text");
              entry.target.classList.remove("opacity-0");
            } else if (entry.target.classList.contains("image-section")) {
              entry.target.classList.add("animate-image");
              entry.target.classList.remove("opacity-0");
            }
          } else {
            // Remove the animation classes when the element leaves the viewport
            if (entry.target.classList.contains("text-section")) {
              entry.target.classList.remove("animate-text");
              entry.target.classList.add("opacity-0");
            } else if (entry.target.classList.contains("image-section")) {
              entry.target.classList.remove("animate-image");
              entry.target.classList.add("opacity-0");
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (textRef.current) observer.observe(textRef.current);
    imageRefs.current.forEach((image) => observer.observe(image));

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
      imageRefs.current.forEach((image) => observer.unobserve(image));
    };
  }, []);

  return (
    <div className="w-full dark:bg-natura-900 flex flex-col items-center justify-center">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">
          Explore Our Commitment to Care
        </h1>
        <p className="text-lg text-gray-600">
          Experience exceptional healthcare tailored to your needs.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full px-4 lg:px-16">
        <div
          ref={textRef}
          className="text-section flex flex-col justify-center opacity-0"
        >
          <h2 className="text-4xl font-bold mb-6">Your Health, Our Priority</h2>
          <p className="text-lg text-gray-600 mb-4">
            At our hospital, we believe that each patient deserves personalized
            care and attention. Our dedicated team of healthcare professionals
            works tirelessly to ensure that every individual receives the best
            possible treatment. From advanced medical technology to
            compassionate support, we are here to guide you through every step
            of your healthcare journey. Thank you for trusting us with your
            health.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Our state-of-the-art facilities and comprehensive services aim to
            meet all your healthcare needs. We are committed to providing a
            welcoming environment where you can feel safe and cared for.
            Discover the various ways we are transforming healthcare for our
            community.
          </p>
        </div>

        {/* Puzzle Image Layout */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) imageRefs.current[index] = el;
              }}
              className={`${image.height} ${image.width} relative image-section opacity-0`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
