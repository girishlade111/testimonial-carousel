"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { Quote, Star, Sparkles } from "lucide-react"
import TestimonialCard from "./testimonial-card"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    quote: "Your product is awesome for X, Y, Z reasons. Would highly recommend!",
    subtitle: "Unparalleled in speed and reliability",
    name: "John Smith",
    title: "Co-Founder & CTO",
    company: "Microsoft",
    avatar: "/professional-bearded-man.png",
    logo: "/health-tech-logo.png",
    rating: 5,
  },
  {
    id: 2,
    quote: "We struggled a lot with X and Y! Not a problem anymore after switching",
    subtitle: "Great customer support",
    name: "Caroline Reaper",
    title: "Co-Founder",
    company: "Google",
    avatar: "/young-tech-founder.png",
    logo: "/placeholder-xsd8p.png",
    rating: 5,
  },
  {
    id: 3,
    quote: "Finally a great service that don't require constant maintenance",
    subtitle: "Zero Maintenance",
    name: "Jake Kang",
    title: "Co-Founder & CTO",
    company: "Amazon",
    avatar: "/tech-executive-glasses.png",
    logo: "/modern-software-logo.png",
    rating: 5,
  },
  {
    id: 4,
    quote: "The reliability is unmatched. We've had zero downtime since switching over.",
    subtitle: "Enterprise-grade stability",
    name: "Sarah Johnson",
    title: "CTO",
    company: "Vercel",
    avatar: "/professional-woman-short-hair.png",
    logo: "/enterprise-software-logo.png",
    rating: 5,
  },
  {
    id: 5,
    quote: "Transformed our workflow completely. The ROI has been incredible.",
    subtitle: "Game-changing solution",
    name: "Michael Chen",
    title: "VP of Engineering",
    company: "Stripe",
    avatar: "/professional-woman-short-hair.png",
    logo: "/data-analytics-logo.png",
    rating: 5,
  },
  {
    id: 6,
    quote: "Best-in-class security and compliance features gave us peace of mind.",
    subtitle: "Enterprise Security",
    name: "Emily Davis",
    title: "CISO",
    company: "Salesforce",
    avatar: "/tech-executive-glasses.png",
    logo: "/construction-tech-logo.png",
    rating: 5,
  },
]

export default function TestimonialCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials]

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-3xl border border-emerald-500/30 bg-emerald-950/20">
      {/* Ambient background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(16,185,129,0.08),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(59,130,246,0.06),_transparent_50%)]" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Top gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-neutral-950 via-neutral-950/80 to-transparent pointer-events-none z-30" />
      
      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent pointer-events-none z-20" />

      {/* Left gradient overlay */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-neutral-950 via-neutral-950/60 to-transparent pointer-events-none z-25" />
      
      {/* Right gradient overlay */}
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-neutral-950 via-neutral-950/60 to-transparent pointer-events-none z-25" />

      {/* Scrolling container */}
      <div 
        ref={scrollRef}
        className={cn(
          "flex gap-6 items-stretch",
          isPaused && "animation-paused"
        )}
        style={{
          animation: 'scroll 30s linear infinite',
          width: 'fit-content'
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <div key={`${testimonial.id}-${index}`} className="flex-shrink-0">
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-4 left-4 w-16 h-16 border-l border-t border-white/10 rounded-tl-xl pointer-events-none z-20" />
      <div className="absolute top-4 right-4 w-16 h-16 border-r border-t border-white/10 rounded-tr-xl pointer-events-none z-20" />
      <div className="absolute bottom-4 left-4 w-16 h-16 border-l border-b border-white/10 rounded-bl-xl pointer-events-none z-20" />
      <div className="absolute bottom-4 right-4 w-16 h-16 border-r border-b border-white/10 rounded-br-xl pointer-events-none z-20" />

      {/* Animated sparkle effect */}
      <div className="absolute top-6 right-8 pointer-events-none z-20">
        <Sparkles className="w-4 h-4 text-amber-400/60 animate-pulse" />
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-396px * 6 - 24px * 6));
          }
        }
        .animation-paused {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}