
import React, { useState, useEffect } from "react";
import { Wrench, Bot, CheckCircle, List, Timer, Hammer, ArrowRight, Star, ShieldCheck, Zap } from "lucide-react";

interface LandingViewProps {
  onStart: () => void;
}

const LandingView: React.FC<LandingViewProps> = ({ onStart }) => {
  const [showExitPopup, setShowExitPopup] = useState(false);

  useEffect(() => {
    const exitIntent = (e: MouseEvent) => {
      if (e.clientY < 10) setShowExitPopup(true);
    };
    document.addEventListener("mouseout", exitIntent);
    return () => document.removeEventListener("mouseout", exitIntent);
  }, []);

  return (
    <div className="font-sans text-gray-900 bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-20 lg:pt-32 lg:pb-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-in fade-in slide-in-from-left-10 duration-700">
            <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 px-4 py-2 rounded-full text-sm font-bold mb-6 border border-orange-100">
              <SparklesIcon className="w-4 h-4" />
              <span>AI-Powered Home Maintenance</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-8 tracking-tight">
              Finish your home projects <span className="text-orange-600">this weekend</span>.
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl">
              Don't hire a pro. Follow expert DIY instructions and get real-time AI guidance for repairs, upgrades, and builds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={onStart}
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-5 text-lg font-bold rounded-2xl shadow-xl shadow-orange-200 transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 group"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={onStart}
                className="bg-white border-2 border-gray-100 hover:border-gray-200 px-8 py-5 text-lg font-bold rounded-2xl transition-all hover:bg-gray-50 flex items-center justify-center gap-2"
              >
                Browse Projects
              </button>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500 font-medium">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} src={`https://picsum.photos/seed/${i + 20}/64/64`} className="w-8 h-8 rounded-full border-2 border-white" />
                ))}
              </div>
              <p>Join 12,000+ DIYers building smarter</p>
            </div>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right-10 duration-700">
             <div className="bg-white rounded-[2.5rem] shadow-2xl p-4 border border-gray-100 relative z-10">
                <div className="bg-gray-50 rounded-[2rem] p-6">
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                        <div className="bg-white px-3 py-1 rounded-full text-[10px] font-bold text-gray-400 uppercase tracking-widest border">Project Dashboard</div>
                    </div>
                    <div className="space-y-6">
                        <div className="h-4 bg-gray-200 rounded-full w-2/3"></div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                                <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-3"><List className="w-5 h-5" /></div>
                                <div className="h-2 bg-gray-100 rounded-full w-full mb-2"></div>
                                <div className="h-2 bg-gray-100 rounded-full w-1/2"></div>
                            </div>
                            <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-3"><Bot className="w-5 h-5" /></div>
                                <div className="h-2 bg-gray-100 rounded-full w-full mb-2"></div>
                                <div className="h-2 bg-gray-100 rounded-full w-1/2"></div>
                            </div>
                        </div>
                        <div className="bg-orange-600 p-6 rounded-2xl text-white">
                            <div className="flex items-center justify-between mb-4">
                                <div className="text-sm font-bold">In Progress</div>
                                <div className="text-xs bg-white/20 px-2 py-1 rounded-md">Step 3/8</div>
                            </div>
                            <div className="h-2 bg-white/20 rounded-full w-full mb-2">
                                <div className="h-2 bg-white rounded-full w-[40%]"></div>
                            </div>
                            <div className="text-xs text-orange-100">"Next: Tighten the retaining nut..."</div>
                        </div>
                    </div>
                </div>
             </div>
             {/* Decorative Blobs */}
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-700"></div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="bg-gray-50/50 py-16 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
                { label: 'DIY Rating', val: '4.8/5' },
                { label: 'Active Users', val: '12K+' },
                { label: 'Guides Available', val: '500+' },
                { label: 'Money Saved', val: '$2M+' },
            ].map((stat, i) => (
                <div key={i}>
                    <div className="text-3xl font-extrabold text-orange-600 mb-1">{stat.val}</div>
                    <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">{stat.label}</div>
                </div>
            ))}
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl font-bold mb-6">Expert DIY guidance, powered by AI.</h2>
            <p className="text-lg text-gray-600">We provide the structure and support you need to tackle any home project with confidence.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
            {[
                { 
                    icon: Bot, 
                    title: "24/7 AI Assistant", 
                    desc: "Stuck on a step? Ask the AI what to do next or how to use a specific tool.",
                    color: "bg-blue-50 text-blue-600"
                },
                { 
                    icon: CheckCircle, 
                    title: "Step-by-Step Clarity", 
                    desc: "Instructions that actually make sense. No jargon, just clear directions.",
                    color: "bg-green-50 text-green-600"
                },
                { 
                    icon: Timer, 
                    title: "Precision Estimates", 
                    desc: "Know exactly how much time and money a project will take before you start.",
                    color: "bg-orange-50 text-orange-600"
                },
                { 
                    icon: List, 
                    title: "Smart Shopping Lists", 
                    desc: "AI generates your hardware store list so you never forget a single screw.",
                    color: "bg-purple-50 text-purple-600"
                },
                { 
                    icon: ShieldCheck, 
                    title: "Safety-First Approach", 
                    desc: "Get context-aware safety warnings tailored to your specific project.",
                    color: "bg-red-50 text-red-600"
                },
                { 
                    icon: Zap, 
                    title: "Instant Troubleshooting", 
                    desc: "Something went wrong? Use your camera to show the AI and get a fix.",
                    color: "bg-yellow-50 text-yellow-600"
                },
            ].map((f, i) => (
                <div key={i} className="group p-8 bg-white border border-gray-100 rounded-[2rem] hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className={`w-14 h-14 ${f.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                        <f.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{f.desc}</p>
                </div>
            ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
            <div className="bg-gray-900 rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">Ready to build something great?</h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">Join the new era of DIY. Faster, safer, and smarter with HandyScan.</p>
                    <button 
                        onClick={onStart}
                        className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-5 text-xl font-bold rounded-2xl shadow-xl shadow-orange-900/40 transition-all hover:scale-105 active:scale-95"
                    >
                        Start Your First Project
                    </button>
                    <p className="mt-8 text-gray-500 text-sm font-medium">Free forever plan • No credit card required</p>
                </div>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
            <div>
                <div className="flex items-center gap-2 text-2xl font-bold text-orange-600 mb-6">
                    <Hammer className="w-8 h-8" />
                    <span>HandyScan</span>
                </div>
                <p className="text-gray-500 leading-relaxed">Making home maintenance accessible to everyone through AI intelligence.</p>
            </div>
            <div>
                <h4 className="font-bold mb-6">Product</h4>
                <ul className="space-y-4 text-gray-500">
                    <li><a href="#" className="hover:text-orange-600 transition-colors">Project Explorer</a></li>
                    <li><a href="#" className="hover:text-orange-600 transition-colors">AI Assistant</a></li>
                    <li><a href="#" className="hover:text-orange-600 transition-colors">For Pros</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold mb-6">Company</h4>
                <ul className="space-y-4 text-gray-500">
                    <li><a href="#" className="hover:text-orange-600 transition-colors">About Us</a></li>
                    <li><a href="#" className="hover:text-orange-600 transition-colors">Contact</a></li>
                    <li><a href="#" className="hover:text-orange-600 transition-colors">Careers</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold mb-6">Support</h4>
                <ul className="space-y-4 text-gray-500">
                    <li><a href="#" className="hover:text-orange-600 transition-colors">Help Center</a></li>
                    <li><a href="#" className="hover:text-orange-600 transition-colors">Safety Guide</a></li>
                    <li><a href="#" className="hover:text-orange-600 transition-colors">Terms</a></li>
                </ul>
            </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-20 text-center text-gray-400 text-sm">
            © 2024 HandyScan AI. Built for DIYers, by DIYers.
        </div>
      </footer>

      {/* Exit Popup */}
      {showExitPopup && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-6 animate-in fade-in duration-300">
          <div className="bg-white p-10 rounded-[2.5rem] max-w-md w-full text-center relative shadow-2xl animate-in zoom-in-95 duration-300">
            <button onClick={() => setShowExitPopup(false)} className="absolute top-6 right-6 text-gray-400 hover:text-gray-900"><XIcon className="w-6 h-6" /></button>
            <div className="w-20 h-20 bg-orange-100 text-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-8">
                <Zap className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Don't leave yet!</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">Enter your email to get our "Essential DIY Toolkit" guide and a special offer on Premium AI help.</p>
            <div className="space-y-4">
                <input className="w-full bg-gray-50 border-2 border-gray-100 p-4 rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none transition-all" placeholder="your@email.com" />
                <button 
                    onClick={onStart}
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-2xl shadow-lg transition-all active:scale-95"
                >
                    Get My Free Guide
                </button>
                <button onClick={() => setShowExitPopup(false)} className="text-gray-400 text-sm font-medium hover:text-gray-600 transition-colors">Maybe later</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Simple icon helpers
const SparklesIcon = ({ className }: { className: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
);

const XIcon = ({ className }: { className: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);

export default LandingView;
