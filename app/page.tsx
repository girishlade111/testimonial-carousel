import TestimonialCarousel from "@/components/testimonial-carousel"

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center p-8">
      <div className="w-full max-w-7xl">
        <TestimonialCarousel />
      </div>
      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-380px * 4 - 16px * 4)); }
        }
      `}</style>
    </main>
  )
}
