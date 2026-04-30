"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"
import { Quote, Star, Verified, Award, TrendingUp, Zap } from "lucide-react"

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
  return (
    <div
      className={cn(
        "relative flex-shrink-0 group",
        "w-[396px] h-[340px]",
        "rounded-2xl overflow-hidden",
        "border border-white/10",
        "bg-neutral-950/80 backdrop-blur-xl",
        "transition-all duration-500 ease-out",
        "hover:border-white/20 hover:bg-neutral-950/90",
        "hover:shadow-[0_0_60px_-12px_rgba(16,185,129,0.15),0_25px_50px_-12px_rgba(0,0,0,0.5)]",
        "hover:scale-[1.02] hover:-translate-y-1"
      )}
      style={{
        background: `
          radial-gradient(130% 90% at 20% 0%, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 30%, transparent 60%),
          linear-gradient(180deg, rgba(255,255,255,0.015) 0%, rgba(0,0,0,0.08) 100%),
          repeating-linear-gradient(transparent, transparent 2px, rgba(255,255,255,0.01) 2px, rgba(255,255,255,0.01) 4px)
        `,
        boxShadow: `
          inset 0 0 0 1px rgba(255,255,255,0.03),
          0 4px 24px rgba(0,0,0,0.4),
          0 8px 48px rgba(0,0,0,0.2)
        `,
      }}
    >
      {/* Noise texture overlay */}
      <span
        className="pointer-events-none absolute inset-0 opacity-[0.025] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Gradient border on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/0 via-teal-500/0 to-cyan-500/0 group-hover:from-emerald-500/10 group-hover:via-teal-500/5 group-hover:to-cyan-500/5 transition-all duration-500" />

      {/* Animated shine effect */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <div className="absolute -top-full left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-45 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-7">
        {/* Header with quote icon */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
              <Quote className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="flex gap-0.5">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>
          <Verified className="w-5 h-5 text-blue-400/60" />
        </div>

        {/* Quote text */}
        <div className="mt-4">
          <blockquote className="text-white/90 text-lg font-medium leading-relaxed line-clamp-3">
            "{testimonial.quote}"
          </blockquote>
          
          {/* Subtitle with icon */}
          <div className="flex items-center gap-2 mt-3">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <p className="text-emerald-400/90 text-sm font-semibold tracking-wide uppercase">{testimonial.subtitle}</p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-5">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* Footer with user info */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-4">
            {/* Avatar with status indicator */}
            <div className="relative">
              <div className="w-14 h-14 rounded-xl overflow-hidden border-2 border-white/10 shadow-lg">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Online/Verified indicator */}
              <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-emerald-500 rounded-full border-2 border-neutral-950 flex items-center justify-center">
                <TrendingUp className="w-2 h-2 text-white" />
              </div>
            </div>
            
            {/* User details */}
            <div>
              <div className="flex items-center gap-2">
                <span className="text-white font-semibold text-sm">{testimonial.name}</span>
                <Award className="w-3.5 h-3.5 text-amber-400/70" />
              </div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-white/50 text-xs">{testimonial.title}</span>
                <span className="text-white/30 text-xs">•</span>
                <span className="text-blue-400/80 text-xs font-semibold">{testimonial.company}</span>
              </div>
            </div>
          </div>

          {/* Company logo */}
          <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center p-2">
            <Image
              src={testimonial.logo || "/placeholder.svg"}
              alt={`${testimonial.company} logo`}
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
        </div>

        {/* Hover indicators */}
        <div className="absolute bottom-4 right-4 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white/30 text-xs">View more</span>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </div>
  )
}