"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {

  return (
    <>
      <section className="h-screen flex items-center justify-center bg-black text-white">
        <h1 className="text-xl md:text-7xl tracking-[0.6rem] font-light text-center">WELCOME&nbsp;TO&nbsp;ITZFIZZ</h1>
      </section>
    </>
  );
}