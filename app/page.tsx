import TestimonialCarousel from "@/components/testimonial-carousel"
import { Shield, Zap, Globe, Award, CheckCircle2, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.05),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(59,130,246,0.04),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(139,92,246,0.03),_transparent_60%)]" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6 md:p-12">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-white/60 text-sm font-medium">Trusted by 500+ Companies Worldwide</span>
          </div>
          
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500">Clients Say</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have transformed their business with our enterprise solutions.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12">
          {[
            { icon: Shield, label: "Enterprise Verified", value: "500+" },
            { icon: Globe, label: "Global Customers", value: "50K+" },
            { icon: Zap, label: "Uptime Guaranteed", value: "99.9%" },
            { icon: Award, label: "Industry Awards", value: "25+" },
          ].map((stat, index) => (
            <div 
              key={index}
              className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm"
            >
              <stat.icon className="w-5 h-5 text-emerald-400" />
              <span className="text-2xl md:text-3xl font-bold text-white">{stat.value}</span>
              <span className="text-xs text-white/40">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Carousel Section */}
        <div className="w-full max-w-7xl mx-auto">
          <TestimonialCarousel />
        </div>

        {/* CTA Section */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-white/90 transition-colors">
            Get Started
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-colors">
            Schedule Demo
          </button>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-8 opacity-40">
          {["SOC 2", "ISO 27001", "GDPR Ready", "HIPAA Compliant"].map((badge) => (
            <span key={badge} className="text-xs text-white/60 font-medium tracking-wider">{badge}</span>
          ))}
        </div>
      </div>
    </main>
  )
}