"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=2500",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        }
      });

      tl.to(".car", {
        x: "70vw",
        ease: "none",
      }, 0);

      tl.to(".text-mask", {
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "none",
      }, 0);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="hero relative h-screen bg-black flex items-center"
    >

      <div className="absolute left-20 z-10">
        <div
          className="text-mask"
          style={{
            clipPath: "inset(0% 100% 0% 0%)", // initially the text will be hidden
          }}
        >
          <h1 className="text-white text-6xl font-bold whitespace-nowrap">
            Welcome to Itzfizz Digital
          </h1>
        </div>
      </div>

      <img
        src="/car.png"
        alt="Car"
        className="car absolute left-0 w-96"
      />

    </section>
  );
}