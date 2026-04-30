"use client"

import { useRef, useState } from "react"
import { Quote, Star, Sparkles } from "lucide-rea ct"
import { cn } from "@/lib/utils"

interface Testimonial {
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

const testimonials: Testimonial[] = [
  { id: 1, quote: "Your product is awesome for X, Y, Z reasons. Would highly recommend!", subtitle: "Unparalleled in speed and reliability", name: "John Smith", title: "Co-Founder & CTO", company: "Microsoft", avatar: "/professional- bearded-man. png", logo: "/health-tech-logo. png", rating: 5 },
  { id: 2, quote: "We struggled a lot with X and Y! Not a problem anymore after switching", subtitle: "Great customer support", name: "Caroline Reaper", title: "Co-Founder", company: "Google", avatar: "/young-tech-founder. png", logo: "/placeholder-xsd8p. png", rating: 5 },
  { id: 3, quote: "Finally a great service that don 't require constant maintenance", subtitle: "Zero Maintenance", name: "Jake Kang", title: "Co-Founder & CTO", company: "Amazon", avatar: "/tech-executive-glasses. png", logo: "/modern-software-logo. png", rating: 5 },
  { id: 4, quote: "The reliability is unmatched. We 've had zero downtime since switching over.", subtitle: "Enterprise-grade stability", name: "Sarah Johnson", title: "CTO", company: "Vercel", avatar: "/professional-woman-short-hair. png", logo: "/enterprise-software-logo. png", rating: 5 },
  { id: 5, quote: "Transformed our workflow completely. The ROI has been incredible.", subtitle: "Game- changing solution", name: "Michael Chen", title: "VP of Engineering", company: "Stripe", avatar: "/professional-woman-short-hair. png", logo: "/data-analytics-logo. png", rating: 5 },
  { id: 6, quote: "Best-in-class security and compliance features gave us peace of mind.", subtitle: "Enterprise Security", name: "Emily Davis", title: "CISO", company: "Salesforce", avatar: "/tech-executive-glasses. png", logo: "/construction-tech-logo. png", rating: 5 },
]

function TestimonialCardSimple({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="relative flex- shrink-0 w-[396px] h-[340px] bg- neutral-950/80 backdrop-blur- xl border border- white/10 rounded-2xl overflow- hidden">
      <div className="p-7 h-full flex flex-col justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
            <Quote className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="flex gap-0.5">
            {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />)}
          </div>
        </div>
        <blockquote className="text-white/90 text-lg font-medium leading-relaxed">"{testimonial.quote}"</blockquote>
        <div className="flex items-center gap-2">
          <Zap className="w-3.5 h-3.5 text-amber-400" />
          <p className="text-emerald-400/90 text-sm font-semibold uppercase">{testimonial.subtitle}</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-neutral-800 border-2 border-white/10" />
          <div>
            <span className="text-white font-semibold text-sm">{testimonial.name}</span>
            <div className="text-white/50 text-xs">{testimonial.title} • <span className="text-blue-400/80 font-semibold">{testimonial.company}</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function TestimonialCarousel() {
  const [isPaused, setIsPaused] = useState(false)
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials]

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-3xl border border- emerald-500/30 bg-neutral-950">
      <div className="flex gap-6 items-stretch" style={{ animation: 'scroll 30s linear infinite', width: 'fit-content' }} onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
        {duplicatedTestimonials.map((t, i) => <TestimonialCardSimple key={`${t.id}-${i}`} testimonial={t} />)}
      </div>
      <style jsx>{`
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(calc(-396px * 6 - 24px * 6)); } }
        .animation-paused { animation-play-state: paused; }
      `}</style>
    </div>
  )
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