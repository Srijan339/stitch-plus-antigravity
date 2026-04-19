"use client";

import CanvasSequence from "@/components/CanvasSequence";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const { scrollYProgress } = useScroll();

  // Floating animation configuration
  const floatingAnimation = (delay: number, duration: number) => ({
    y: [0, -15, 0],
    transition: {
      duration: duration,
      repeat: Infinity,
      ease: "easeInOut" as const,
      delay: delay,
    },
  });

  return (
    <main className="relative bg-black min-h-screen text-white font-sans selection:bg-white/20">
      {/* Scroll Sequence Background */}
      <div className="fixed inset-0 z-0">
         <CanvasSequence />
      </div>

      {/* Foreground Content container */}
      <div className="relative z-10 w-full">
        
        {/* Floating Background Ingredients - Absolute positioned throughout the page to add depth to scroll */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <motion.div animate={floatingAnimation(0, 4)} className="absolute top-[20%] left-[10%] w-24 h-24 blend-screen opacity-70 hidden md:block">
            <Image src="/assets/raspberry.png" alt="Raspberry" fill className="object-contain" />
          </motion.div>
          <motion.div animate={floatingAnimation(1.2, 5)} className="absolute top-[40%] right-[10%] w-28 h-28 blend-screen opacity-60">
            <Image src="/assets/blueberry.png" alt="Blueberry" fill className="object-contain" />
          </motion.div>
          <motion.div animate={floatingAnimation(0.5, 4.5)} className="absolute top-[70%] left-[20%] w-16 h-16 blend-screen opacity-50">
            <Image src="/assets/oat.png" alt="Oat" fill className="object-contain blur-[1px]" />
          </motion.div>
        </div>

        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 pb-32">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter drop-shadow-xl"
          >
            ARTISAN CRAFTED
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-6 text-xl text-gray-400 font-light"
          >
            The perfect balance of earth and energy.
          </motion.p>
        </section>

        {/* Kinetic Chill */}
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-32 bg-gradient-to-b from-transparent to-black/60">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold tracking-tighter"
          >
            KINETIC SUSPENSION
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-gray-400 font-light max-w-xl mx-auto leading-relaxed"
          >
            Premium ingredients suspended in a moment of freshness.
          </motion.p>
        </section>

        {/* The Dirty Pour */}
        <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6 py-32 bg-black/40 backdrop-blur-sm">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold tracking-tighter uppercase"
          >
            THE PREMIUM BOWL
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-gray-400 font-light"
          >
            Rich antioxidants meet high-performance oats.
          </motion.p>
        </section>

        {/* Taste the Moment */}
        <section className="min-h-[60vh] flex flex-col justify-center items-center text-center px-6 py-32 bg-gradient-to-t from-black via-black/80 to-transparent">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter"
          >
            TASTE THE MOMENT
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-6 text-xl text-gray-400 font-light"
          >
            Experience the fusion.
          </motion.p>
        </section>

        {/* Complex Profile Grid */}
        <section className="py-32 px-6 bg-black">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">COMPLEX PROFILE</h2>
              <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">
                A symphony of contrasting flavors that shouldn't work, but perfectly do.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-white/10 pt-16">
              {[
                { title: "Earthy", desc: "Deep, grounding notes from raw, high-altitude oats." },
                { title: "Sweet", desc: "Subtle natural sweetness from sun-ripened wild berries." },
                { title: "Bold", desc: "Robust crunch that awakens your morning routine." },
                { title: "Creamy", desc: "Velvety texture when paired with your favorite artisan milk." }
              ].map((item, i) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col"
                >
                  <h3 className="text-2xl font-semibold mb-4 text-white uppercase tracking-wider">{item.title}</h3>
                  <p className="text-gray-400 font-light leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Deep Ingredients Detail */}
        <section className="py-32 px-6 bg-[#050505]">
          <div className="max-w-5xl mx-auto space-y-32">
            {[
              {
                title: "Wild Berries",
                subtitle: "Pacific Northwest",
                desc: "Hand-picked at peak ripeness. Rich in antioxidants and vitamins for sustained mental clarity and physical recovery.",
              },
              {
                title: "Raw Oats",
                subtitle: "Andean Highlands",
                desc: "Slow-grown in harsh conditions for an ultra-dense nutrient profile. The ultimate foundation for slow-release energy.",
              },
              {
                title: "Pure Protein",
                subtitle: "Plant-Based Matrix",
                desc: "A proprietary blend designed to elevate physical performance. Neutral sweetness that perfectly elevates the bowl layout.",
              }
            ].map((ing, i) => (
              <motion.div 
                key={ing.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${i % 2 === 0 ? 'items-start md:text-left' : 'items-end md:text-right'} p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 transition-colors backdrop-blur-md`}
              >
                <h3 className="text-3xl font-bold mb-2 uppercase tracking-tight">{ing.title}</h3>
                <h4 className="text-xl text-gray-500 mb-6 font-light">{ing.subtitle}</h4>
                <p className="text-gray-300 max-w-xl leading-relaxed text-lg font-light">{ing.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Reviews */}
        <section className="py-32 px-6 bg-black border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { 
                  quote: "Pure aesthetic perfection. Tastes even better than it looks.", 
                  author: "Sarah J.", 
                  title: "Verified Buyer" 
                },
                { 
                  quote: "The complex profile is a morning ritual I can't live without now.", 
                  author: "David K.", 
                  title: "Health Enthusiast" 
                },
                { 
                  quote: "Finally, a nutritional bowl that respects the ingredients.", 
                  author: "Elena R.", 
                  title: "Athlete" 
                }
              ].map((review, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col items-center text-center space-y-6"
                >
                  <p className="text-xl italic text-gray-300 leading-relaxed">"{review.quote}"</p>
                  <div>
                    <p className="font-bold text-white tracking-wide">{review.author}</p>
                    <p className="text-sm text-gray-500 uppercase tracking-widest mt-1">{review.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Purchase & Pricing */}
        <section className="py-32 px-6 bg-black flex flex-col items-center text-center border-t border-white/10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-7xl font-bold mb-6 tracking-tighter">$12.50</h2>
            <p className="text-2xl font-light text-gray-300 mb-4">Limited Daily Batches</p>
            <p className="text-gray-500 mb-12">Free shipping on orders over $50. Freshness guaranteed.</p>
            <button className="px-14 py-5 text-lg font-bold text-black bg-white select-none hover:bg-gray-200 hover:scale-105 transition-all duration-300">
              PURCHASE NOW
            </button>
          </motion.div>
        </section>

        {/* Exact Sample Footer */}
        <footer className="py-16 px-6 bg-black text-center border-t border-white/5 space-y-6 flex flex-col items-center">
          <p className="text-sm text-gray-500 uppercase tracking-widest">
            © 2026 NUTRITION ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-sm font-semibold tracking-widest text-white uppercase mt-4">
            <a href="#" className="hover:text-gray-400 transition-colors">INSTAGRAM</a>
            <a href="#" className="hover:text-gray-400 transition-colors">TIKTOK</a>
          </div>
        </footer>
      </div>
    </main>
  );
}
