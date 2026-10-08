"use client";

import { easeOut, motion } from "motion/react";
import Image from "next/image";

const quoteBlocks = [
  "My name is Kim Dokja. Twenty-eight… No, wait. I was twenty-eight, and I was an employee of a game company. My hobby was reading web novels… It's pathetic, right? Well, this is who I am…",
  "Yoo Joonghyuk, who are you? …I see. In the first place, 'I' wasn't something that could be proven. It was because 'I' was made up of things that didn't only belong to me.",
  "If I have made one unpardonable error in my life, it’s to deny, all the time, that there are people who might genuinely love me.",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.6,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOut },
  },
};

const DokjaSolemnQuote = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-10 flex items-center justify-center min-h-[60vh]">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16 w-full">
        {/* Left Side: Staggered Fade-In Quote Blocks */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex-1 max-w-xl text-left border-l-2 border-zinc-700/60 pl-6 space-y-4 font-serif italic text-zinc-300 text-base md:text-lg leading-relaxed"
        >
          {quoteBlocks.map((block, index) => (
            <motion.p
              key={index}
              variants={itemVariants}
              className="text-zinc-400"
            >
              "{block}"
            </motion.p>
          ))}
        </motion.div>

        {/* Right Side: Kim Dokja Image Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="shrink-0 relative w-64 md:w-72 h-96 md:h-[420px] overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-950 shadow-2xl group"
        >
          <Image
            fill
            loading="eager"
            src="/orv-dokja/dokja-2.JPG"
            alt="Kim Dokja"
            className="object-cover object-top filter  contrast-105 transition-all duration-600 group-hover:grayscale-0 group-hover:scale-105"
            sizes="(max-width: 768px) 256px, 288px"
          />

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};

export default DokjaSolemnQuote;
