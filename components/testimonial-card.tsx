"use client"

import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { Quote, Star, Verified, Award, TrendingUp, Zap, MousePointer2 } from "lucide-react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

interface TestimonialCardProps {
  testimonial: {
    id: number
    quote: string
    subtitle: string
    name: string
    title: string
    company: string
    avatar: string
    logo: string
    rating: number
  }
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  
  // Motion values for spotlight effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  // Spring configurations for smooth movement
  const springConfig = { damping: 20, stiffness: 150 }
  const xSpring = useSpring(mouseX, springConfig)
  const ySpring = useSpring(mouseY, springConfig)
  
  // Perspective transform based on mouse position
  const rotateX = useTransform(ySpring, [-0.5, 0.5], [5, -5])
  const rotateY = useTransform(xSpring, [-0.5, 0.5], [-5, 5])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    
    // Calculate normalized mouse position (-0.5 to 0.5)
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "relative flex-shrink-0 group cursor-default perspective-1000",
        "w-[340px] md:w-[420px] h-[360px]",
        "rounded-[2rem] p-px overflow-hidden",
        "bg-gradient-to-b from-white/10 to-white/[0.02]",
        "transition-all duration-700 ease-out"
      )}
    >
      {/* Dynamic Spotlight Background */}
      <motion.div
        className="pointer-events-none absolute -inset-px z-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useTransform(
            [xSpring, ySpring],
            ([x, y]) => `radial-gradient(600px circle at ${((x as number) + 0.5) * 100}% ${((y as number) + 0.5) * 100}%, rgba(16, 185, 129, 0.15), transparent 40%)`
          ),
        }}
      />

      {/* Main Card Content Area */}
      <div 
        className={cn(
          "relative z-10 h-full w-full rounded-[1.95rem] overflow-hidden",
          "bg-neutral-950/90 backdrop-blur-3xl",
          "flex flex-col justify-between p-8 md:p-10",
          "border border-white/5"
        )}
      >
        {/* Animated Background Textures */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
          
          {/* Subtle noise texture */}
          <div 
            className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Content - Top Section */}
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-8">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                  <Quote className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={cn(
                          "w-3 h-3 transition-colors duration-300",
                          i < testimonial.rating ? "fill-amber-400 text-amber-400" : "fill-white/10 text-white/10"
                        )} 
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <motion.div 
              animate={{ rotate: isHovered ? 360 : 0 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="relative"
            >
              <div className="absolute inset-0 bg-blue-400/20 blur-lg rounded-full" />
              <Verified className="w-6 h-6 text-blue-400 relative z-10" />
            </motion.div>
          </div>

          <blockquote className="relative">
            <p className="text-white/90 text-xl md:text-2xl font-medium leading-[1.4] tracking-tight">
              "{testimonial.quote}"
            </p>
            
            <div className="flex items-center gap-2 mt-4">
              <div className="h-px w-8 bg-emerald-500/50" />
              <Zap className="w-4 h-4 text-emerald-400 animate-pulse" />
              <p className="text-emerald-400/90 text-sm font-semibold tracking-wide uppercase">
                {testimonial.subtitle}
              </p>
            </div>
          </blockquote>
        </div>

        {/* Content - Bottom Section */}
        <div className="relative z-10 mt-auto pt-8 border-t border-white/5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative group/avatar">
                <div className="absolute -inset-1 bg-gradient-to-tr from-emerald-500 to-blue-500 rounded-2xl blur opacity-25 group-hover/avatar:opacity-50 transition duration-500" />
                <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-white/10 ring-1 ring-white/5">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover transform group-hover/avatar:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-neutral-900 flex items-center justify-center shadow-lg">
                  <TrendingUp className="w-2.5 h-2.5 text-white" />
                </div>
              </div>
              
              <div className="flex flex-col gap-0.5">
                <div className="flex items-center gap-1.5">
                  <span className="text-white font-bold text-base tracking-tight">{testimonial.name}</span>
                  <Award className="w-4 h-4 text-amber-400/80" />
                </div>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                  <span className="text-white/40 text-xs font-medium uppercase tracking-wider">{testimonial.title}</span>
                  <span className="text-white/20 text-xs">•</span>
                  <span className="text-emerald-400/80 text-xs font-bold">{testimonial.company}</span>
                </div>
              </div>
            </div>

            <div className="hidden sm:flex items-center justify-center w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/5 p-3 hover:bg-white/[0.08] transition-colors duration-300">
              <Image
                src={testimonial.logo || "/placeholder.svg"}
                alt={`${testimonial.company} logo`}
                width={32}
                height={32}
                className="object-contain opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>

        {/* Hover Edge Highlight */}
        <div 
          className={cn(
            "absolute inset-0 rounded-[1.95rem] pointer-events-none transition-opacity duration-500",
            "bg-gradient-to-tr from-emerald-500/20 via-transparent to-blue-500/20",
            isHovered ? "opacity-100" : "opacity-0"
          )} 
        />
      </div>

      {/* Background Glow */}
      <div 
        className={cn(
          "absolute -inset-[20%] z-0 pointer-events-none bg-emerald-500/10 blur-[100px] transition-opacity duration-700",
          isHovered ? "opacity-100" : "opacity-0"
        )} 
      />
    </motion.div>
  )
}