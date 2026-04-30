"use client"

import * as React from "react"
import { useCallback, useEffect, useState, useRef } from "react"
import useEmblaCarousel from "embla-carousel-react"
import AutoPlay from "embla-carousel-autoplay"
import { ChevronLeft, ChevronRight, Sparkles, Pause, Play } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import TestimonialCard from "./testimonial-card"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    quote: "Our productivity increased by 40% in the first quarter of implementation. Truly revolutionary.",
    subtitle: "Enterprise Efficiency",
    name: "John Smith",
    title: "CTO",
    company: "Microsoft",
    avatar: "/professional-bearded-man.png",
    logo: "/health-tech-logo.png",
    rating: 5,
  },
  {
    id: 2,
    quote: "The seamless integration with our existing stack was what impressed us most. Highly recommend.",
    subtitle: "Seamless Integration",
    name: "Caroline Reaper",
    title: "Head of Infrastructure",
    company: "Google",
    avatar: "/young-tech-founder.png",
    logo: "/placeholder-xsd8p.png",
    rating: 5,
  },
  {
    id: 3,
    quote: "Finally a solution that scales with our growth without increasing operational complexity.",
    subtitle: "Scalable Infrastructure",
    name: "Jake Kang",
    title: "VP of Engineering",
    company: "Amazon",
    avatar: "/tech-executive-glasses.png",
    logo: "/modern-software-logo.png",
    rating: 5,
  },
  {
    id: 4,
    quote: "The reliability is unmatched. We've had zero downtime since switching over to this platform.",
    subtitle: "Zero Downtime",
    name: "Sarah Johnson",
    title: "SVP Technology",
    company: "Vercel",
    avatar: "/professional-woman-short-hair.png",
    logo: "/enterprise-software-logo.png",
    rating: 5,
  },
  {
    id: 5,
    quote: "Transformed our workflow completely. The ROI has been incredible for our entire organization.",
    subtitle: "Maximum ROI",
    name: "Michael Chen",
    title: "Director of Product",
    company: "Stripe",
    avatar: "/professional-woman-short-hair.png",
    logo: "/data-analytics-logo.png",
    rating: 5,
  },
  {
    id: 6,
    quote: "Best-in-class security and compliance features gave our legal team complete peace of mind.",
    subtitle: "Bank-Grade Security",
    name: "Emily Davis",
    title: "CISO",
    company: "Salesforce",
    avatar: "/tech-executive-glasses.png",
    logo: "/construction-tech-logo.png",
    rating: 5,
  },
]

export default function TestimonialCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true, 
      align: "center",
      skipSnaps: false,
    },
    [AutoPlay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })]
  )

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const [isPlaying, setIsPlaying] = useState(true)
  const [progress, setProgress] = useState(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
    setProgress(0) // Reset progress on manual change
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
  }, [emblaApi, setScrollSnaps, onSelect])

  // Progress bar animation
  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current) clearInterval(timerRef.current)
      return
    }

    const interval = 50 // Update every 50ms
    const totalDelay = 5000
    const step = (interval / totalDelay) * 100

    timerRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0
        return prev + step
      })
    }, interval)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isPlaying, selectedIndex])

  const toggleAutoPlay = useCallback(() => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    if (autoplay.isPlaying()) {
      autoplay.stop()
      setIsPlaying(false)
    } else {
      autoplay.play()
      setIsPlaying(true)
    }
  }, [emblaApi])

  return (
    <div className="relative w-full group/carousel">
      {/* Background Ambient Glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Main Container */}
      <div className="overflow-hidden px-4 md:px-0" ref={emblaRef}>
        <div className="flex -ml-4 md:-ml-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="flex-[0_0_100%] min-w-0 pl-4 md:pl-8 md:flex-[0_0_auto]"
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>

      {/* Controls Overlay */}
      <div className="mt-12 flex flex-col items-center gap-8">
        {/* Navigation Dots */}
        <div className="flex items-center gap-3">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                "relative h-1.5 transition-all duration-500 rounded-full overflow-hidden",
                index === selectedIndex ? "w-12 bg-white/20" : "w-1.5 bg-white/10 hover:bg-white/20"
              )}
            >
              {index === selectedIndex && (
                <motion.div 
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  className="absolute inset-0 bg-emerald-500"
                />
              )}
            </button>
          ))}
        </div>

        {/* Bottom Bar: Prev/Next + Progress Info */}
        <div className="flex items-center justify-between w-full max-w-2xl px-6 py-4 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-xl">
          <div className="flex items-center gap-4">
            <button
              onClick={scrollPrev}
              className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group/btn"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-white/60 group-hover/btn:text-white transition-colors" />
            </button>
            <div className="h-8 w-px bg-white/10" />
            <button
              onClick={scrollNext}
              className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group/btn"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-white/60 group-hover/btn:text-white transition-colors" />
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-4 px-6 py-2 rounded-xl bg-white/5 border border-white/5">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-medium text-white/60">
              <span className="text-white font-bold">{String(selectedIndex + 1).padStart(2, '0')}</span>
              <span className="mx-2">/</span>
              <span>{String(scrollSnaps.length).padStart(2, '0')}</span>
            </span>
          </div>

          <button
            onClick={toggleAutoPlay}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20 transition-all duration-300"
          >
            {isPlaying ? (
              <>
                <Pause className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-widest">Pause</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-widest">Auto</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Perspective Overlay Gradients (Desktop) */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-neutral-950 to-transparent pointer-events-none z-10 hidden md:block" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-neutral-950 to-transparent pointer-events-none z-10 hidden md:block" />
    </div>
  )
}