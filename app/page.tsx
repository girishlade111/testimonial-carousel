import TestimonialCarousel from "@/components/testimonial-carousel"
import { Shield, Zap, Globe, Award, CheckCircle2, ArrowRight, Star, ExternalLink, Play } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 relative overflow-x-hidden selection:bg-emerald-500/30">
      {/* Dynamic Background System */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,_rgba(16,185,129,0.1),_transparent_80%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,_rgba(59,130,246,0.08),_transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_-20%_50%,_rgba(139,92,246,0.05),_transparent_70%)]" />
        
        {/* Animated grid */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Navigation / Header */}
        <header className="w-full px-6 py-8 flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-blue-500 flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">TrustFlow<span className="text-emerald-500">.</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {['Product', 'Enterprise', 'Pricing', 'Resources'].map((item) => (
              <a key={item} href="#" className="text-sm font-medium text-white/50 hover:text-white transition-colors">{item}</a>
            ))}
          </div>
          <button className="px-5 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-semibold hover:bg-white/10 transition-colors">
            Sign In
          </button>
        </header>

        {/* Hero Section */}
        <section className="pt-20 pb-16 px-6">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-emerald-400 text-xs font-bold uppercase tracking-[0.2em]">Enterprise Ready Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-extrabold text-white mb-8 tracking-tighter leading-[1.05]">
              Social Proof That <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-500">Drives Growth</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-white/50 max-w-3xl mx-auto mb-12 leading-relaxed">
              We empower industry leaders to build trust and accelerate conversions with our 
              state-of-the-art testimonial infrastructure.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button className="group relative px-8 py-4 rounded-2xl bg-white text-black font-bold flex items-center gap-3 overflow-hidden transition-transform hover:scale-105">
                <span className="relative z-10">Start Your Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold flex items-center gap-3 hover:bg-white/10 transition-colors">
                <Play className="w-4 h-4 fill-white" />
                See TrustFlow in Action
              </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { icon: Shield, label: "Enterprise Verified", value: "950+", color: "emerald" },
              { icon: Globe, label: "Global Reach", value: "140+", color: "blue" },
              { icon: Zap, label: "Real-time Sync", value: "24/7", color: "amber" },
              { icon: Award, label: "G2 Leader", value: "2024", color: "purple" },
            ].map((stat, index) => (
              <div 
                key={index}
                className="group p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl hover:bg-white/[0.05] transition-all duration-500"
              >
                <div className={cn(
                  "w-12 h-12 rounded-2xl mb-6 flex items-center justify-center",
                  "bg-white/5 border border-white/10 transition-transform group-hover:scale-110"
                )}>
                  <stat.icon className="w-6 h-6 text-white/70" />
                </div>
                <div className="text-4xl font-extrabold text-white mb-1 tracking-tight">{stat.value}</div>
                <div className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Carousel Section */}
        <section className="py-20 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto mb-16 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Voices of Innovation</h2>
              <p className="text-white/40 text-lg max-w-xl">Hear from the pioneers who are redefining their industries using TrustFlow.</p>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/10">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-neutral-950 bg-neutral-800" />
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  <span className="text-sm font-bold text-white tracking-tight">4.9/5</span>
                </div>
                <span className="text-[9px] text-white/40 font-bold uppercase tracking-[0.15em]">Rating by 12k+ users</span>
              </div>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto">
            <TestimonialCarousel />
          </div>
        </section>

        {/* Logo Cloud Section */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-white/30 text-xs font-bold uppercase tracking-[0.3em] mb-12">Empowering teams at the worlds most innovative companies</p>
            <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
              {['Microsoft', 'Google', 'Amazon', 'Vercel', 'Stripe', 'Salesforce'].map((logo) => (
                <div key={logo} className="h-8 w-32 relative">
                  <div className="flex items-center justify-center h-full text-white font-bold text-xl tracking-tighter italic opacity-60 hover:opacity-100 transition-opacity cursor-default">
                    {logo}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 px-6">
          <div className="max-w-5xl mx-auto p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-emerald-500/20 via-blue-500/10 to-transparent border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10 text-center">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">Ready to transform <br />your business?</h2>
              <div className="flex flex-wrap items-center justify-center gap-6">
                <button className="px-10 py-5 rounded-2xl bg-white text-black font-bold text-lg hover:scale-105 transition-transform shadow-[0_20px_40px_-10px_rgba(255,255,255,0.3)]">
                  Get Started for Free
                </button>
                <button className="px-10 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-20 px-6 border-t border-white/5 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Zap className="w-5 h-5 text-emerald-500" />
                <span className="text-lg font-bold text-white tracking-tight">TrustFlow<span className="text-emerald-500">.</span></span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed">The standard for enterprise-grade social proof infrastructure.</p>
            </div>
            {[
              { title: 'Product', links: ['Features', 'Integrations', 'Security', 'Enterprise'] },
              { title: 'Company', links: ['About', 'Careers', 'Blog', 'Newsroom'] },
              { title: 'Legal', links: ['Privacy', 'Terms', 'Cookie Policy', 'SLA'] },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">{col.title}</h4>
                <ul className="space-y-4">
                  {col.links.map(link => (
                    <li key={link}><a href="#" className="text-white/40 text-sm hover:text-emerald-400 transition-colors">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/20 text-xs">© 2026 TrustFlow Systems Inc. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-white/20 hover:text-white transition-colors"><ExternalLink className="w-4 h-4" /></a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}