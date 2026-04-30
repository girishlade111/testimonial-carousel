"use client"
import { useState } from "react"
import { Quote, Star, Zap } from "lucide-react"
interface Testimonial {
  id: number
  quote: string
  subtitle: string
  name: string
  title: string
  company: string
  rating: number
}
const testimonials: Testimonial[] = [
  { id: 1, quote: "Your product is awesome!", subtitle: "Unparalleled speed", name: "John Smith", title: "Co-Founder & CTO", company: "Microsoft", rating: 5 },
  { id: 2, quote: "We struggled before. Not anymore!", subtitle: "Great support", name: "Caroline Reaper", title: "Co-Founder", company: "Google", rating: 5 },
  { id: 3, quote: "Finally zero maintenance!", subtitle: "Zero Maintenance", name: "Jake Kang", title: "Co-Founder & CTO", company: "Amazon", rating: 5 },
  { id: 4, quote: "Unmatched reliability!", subtitle: "Enterprise stability", name: "Sarah Johnson", title: "CTO", company: "Vercel", rating: 5 },
  { id: 5, quote: "ROI has been incredible.", subtitle: "Game- changing", name: "Michael Chen", title: "VP Engineering", company: "Stripe", rating: 5 },
  { id: 6, quote: "Best-in-class security!", subtitle: "Enterprise Security", name: "Emily Davis", title: "CISO", company: "Salesforce", rating: 5 },
]
function Card({ t }: { t: Testimonial }) {
  return (
    <div className="flex-shrink-0 w-[396px] h-[340px] bg-neutral-950/80 border border-white/10 rounded-2xl overflow-hidden">
      <div className="p-7 h-full flex flex-col justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
            <Quote className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="flex gap-0.5">
            {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />)}
          </div>
        </div>
        <blockquote className="text-white/90 text-lg font-medium leading-relaxed">"{t.quote}"</blockquote>
        <div className="flex items-center gap-2">
          <Zap className="w-3.5 h-3.5 text-amber-400" />
          <p className="text-emerald-400/90 text-sm font-semibold uppercase">{t.subtitle}</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-neutral-800 border-2 border-white/10" />
          <div>
            <span className="text-white font-semibold text-sm">{t.name}</span>
            <div className="text-white/50 text-xs">{t.title} <span className="text-blue-400/80 font-semibold">{t.company}</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default function TestimonialCarousel() {
  const [isPaused, setIsPaused] = useState(false)
  const all = [...testimonials, ...testimonials, ...testimonials]
  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-3xl bg-neutral-950 border border-emerald-500/20">
      <div className="flex gap-6 items-stretch" style={{ animation: 'scroll 30s linear infinite', width: 'fit-content' }} onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
        {all.map((t, i) => <Card key={`${t.id}-${i}`} t={t} />)}
      </div>
      <style jsx>{`@keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-2520px); } }`}</style>
    </div>
  )
}