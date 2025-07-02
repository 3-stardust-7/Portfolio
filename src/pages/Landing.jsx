import React, { useState, useEffect } from "react";
import { ChevronDown, Github, Linkedin, Twitter, Mail, ExternalLink } from "lucide-react";
import Typewriter from "../components/Typewriter"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-black/80 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Kirubha.dev
          </div>
          <div className="hidden md:flex space-x-8">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} 
                 className="text-white/70 hover:text-white transition-colors duration-300 hover:scale-105 transform">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

const SocialIcons = () => {
  const socials = [
    { Icon: Github, href: "#", label: "GitHub" },
    { Icon: Linkedin, href: "#", label: "LinkedIn" },
    { Icon: Twitter, href: "#", label: "Twitter" },
    { Icon: Mail, href: "#", label: "Email" }
  ];

  return (
    <div className="flex space-x-6">
      {socials.map(({ Icon, href, label }, i) => (
        <a key={label} href={href}
           className="group relative p-3 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-110 hover:-rotate-6"
           style={{ animationDelay: `${i * 100}ms` }}>
          <Icon className="w-6 h-6 text-white group-hover:text-purple-400 transition-colors duration-300" />
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/90 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {label}
          </div>
        </a>
      ))}
    </div>
  );
};

const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-30 animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }}
        />
      ))}
    </div>
  );
};

const SkillCard = ({ skill, delay }) => (
  <div 
    className="group relative p-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl border border-white/10 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2"
    style={{ animationDelay: `${delay}ms` }}>
    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10 rounded-2xl transition-all duration-500" />
    <div className="relative z-10">
      <h3 className="text-2xl font-bold text-white mb-2">{skill}</h3>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full group-hover:animate-pulse" 
             style={{ width: `${85 + Math.random() * 15}%` }} />
      </div>
    </div>
  </div>
);

const Contact = () => (
  <div className="max-w-4xl mx-auto">
    <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
      Let's Create Something Amazing
    </h2>
    <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-3xl p-8 border border-white/10 backdrop-blur-sm">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
          <p className="text-gray-300 mb-8">
            Ready to bring your ideas to life? Let's discuss your next project and create something extraordinary together.
          </p>
          <SocialIcons />
        </div>
        <div className="space-y-4">
          <input 
            type="text" 
            placeholder="Your Name"
            className="w-full p-4 bg-black/50 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors duration-300"
          />
          <input 
            type="email" 
            placeholder="Your Email"
            className="w-full p-4 bg-black/50 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors duration-300"
          />
          <textarea 
            placeholder="Your Message"
            rows="4"
            className="w-full p-4 bg-black/50 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors duration-300 resize-none"
          />
          <button className="w-full p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
            Send Message
          </button>
        </div>
      </div>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-black/80 border-t border-white/10 py-12">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
        Kirubha.dev
      </div>
      <p className="text-gray-400 mb-6">Crafting digital experiences with passion and precision</p>
      <div className="flex justify-center">
        <SocialIcons />
      </div>
      <div className="mt-8 pt-8 border-t border-white/10">
        <p className="text-gray-500">© 2025 Kirubha. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const Landing = () => {
  const skills = ["React", "Tailwind CSS", "JavaScript", "Supabase", "Firebase", "Machine Learning"];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <FloatingParticles />
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20" />
        
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                  Hey! I'm{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Kirubha
                  </span>
                </h1>
                <div className="text-2xl lg:text-3xl font-light">
                  <Typewriter />
                </div>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                A passionate web developer who loves crafting beautiful, interactive experiences. 
                Specialized in React, modern CSS, and cutting-edge web technologies with a growing passion for AI.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                  View My Work
                </button>
                <button className="px-8 py-4 border-2 border-white/20 rounded-full font-bold hover:border-purple-400 hover:text-purple-400 transition-all duration-300 hover:scale-105">
                  Download CV
                </button>
              </div>
              
              <SocialIcons />
            </div>
            
            <div className="relative flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse" />
                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-full animate-spin-slow" />
                  <div className="absolute inset-4 bg-gradient-to-br from-pink-600/20 to-purple-600/20 rounded-full animate-reverse-spin" />
                  <img
                    src="/me!!.jpg"
                    alt="Kirubha - Web Developer"
                    className="absolute inset-8 w-64 h-64 lg:w-80 lg:h-80 object-cover rounded-full border-4 border-white/20 group-hover:border-purple-400/50 transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-purple-400" />
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, i) => (
              <SkillCard key={skill} skill={skill} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* Animated Skills Marquee */}
      <section className="py-12 border-y border-white/10 bg-gradient-to-r from-purple-900/10 to-pink-900/10">
        <div className="flex animate-marquee space-x-16 text-4xl font-bold">
          {[...skills, ...skills].map((skill, i) => (
            <span key={i} className="text-white/20 hover:text-white/60 transition-colors duration-300 whitespace-nowrap">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Contact />
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes reverse-spin {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-reverse-spin {
          animation: reverse-spin 15s linear infinite;
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Landing;