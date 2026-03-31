import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { Eye, Keyboard, StickyNote, Sparkles, BookOpen, Code, Mic, ChevronRight, ChevronLeft, Camera, Brain, Crosshair, MousePointer2 } from "lucide-react"
import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

const FEEDBACK_URL = "https://forms.gle/fRBaMdkfHWKHfM5f6";
const featuresData = [


  {
    id: 1,
    title: "Start & Calibration",
    icon: Eye,
    color: "cyan",
    images: ["/start_screen.png"],
    overview: "Users begin by quickly calibrating gaze detection for optimal accuracy mapping physical eye limits to screen coordinates.",
    details: "This critical first step ensures that the system understands the user's specific eye movements, allowing for seamless and hyper-accurate tracking across the entire monitor interface."
  },
  {
    id: 2,
    title: "Home Interface",
    icon: Keyboard,
    color: "blue",
    images: ["/asst.jpeg"],
    overview: "An intuitive circular, gaze-controlled interface allows users to seamlessly navigate between actions and tools.",
    details: "Built specifically around the constraint of eye-tracking, this radial menu minimizes eye strain and accidental clicks by requiring deliberate dwell times on large, easily distinguishable targets."
  },
  {
    id: 3,
    title: "Take Notes",
    icon: StickyNote,
    color: "indigo",
    images: ["/take.jpeg"],
    overview: "A specialized environment optimized for writing, enabling students to dictate or type out notes efficiently using gaze.",
    details: "The uncluttered interface prioritizes the text area while keeping essential formatting and saving tools accessible on the periphery."
  },
  {
    id: 4,
    title: "Smart Word Prediction",
    icon: Sparkles,
    color: "purple",
    images: ["/word_predict1.jpeg", "/word_predict2.jpeg"],
    overview: "Intelligent text suggestions appear dynamically as the user types via the on-screen keyboard.",
    details: "By anticipating the next word based on context and frequency, this feature significantly increases typing speed and reduces the cognitive load required to spell out long thoughts."
  },
  {
    id: 5,
    title: "View & Manage Notes",
    icon: BookOpen,
    color: "pink",
    images: ["/save_notes.jpeg","taking_notes.jpeg"],
    overview: "A dedicated gallery bridging past work, allowing users to scroll through, read, and organize their previous notes seamlessly.",
    details: "Users can effortlessly retrieve study materials using gaze-based sequential scanning and categorization, keeping their educational journey organized."
  },
  {
    id: 6,
    title: "Assistive Coding",
    icon: Code,
    color: "amber",
    images: ["/coding/coding_main.jpeg", "/coding/coding_temp.jpeg",  "/coding/coding.jpeg", "/coding/coding2.jpeg", "/coding/coding3.jpeg", "/coding/coding4.jpeg","/coding/coding_working.jpeg"],
    overview: "A specialized environment to construct complex programming logic and syntax using simplified, gaze-friendly blocks.",
    details: "This interface demystifies software development for motor-impaired students, allowing them to participate in computer science curricula by snapping together syntactic structures with their eyes."
  },
  {
    id: 7,
    title: "Voice Recording",
    icon: Mic,
    color: "rose",
    images: ["/save_notes.png"],
    overview: "Integrates hands-free audio recording capabilities, providing an alternative input and communication channel.",
    details: "For students who can vocalize, this tool records lectures or personal memos directly into the application ecosystem, securely saving them alongside text notes."
  }
];

export default function Home() {
  const navigate = useNavigate()
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] })
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.5])

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % featuresData.length);
  };

  const slidePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? featuresData.length - 1 : prev - 1));
  };

  const currentFeature = featuresData[currentIndex];
  const Icon = currentFeature.icon;

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95
    })
  };

  return (
    <div ref={containerRef} className="relative min-h-screen bg-transparent selection:bg-cyan-500/30 overflow-hidden font-sans">

      {/* Background Decor */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-cyan-600/20 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-600/20 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute top-[20%] right-[20%] w-[30%] h-[30%] bg-pink-600/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik00MCAwaC00MHY0MGg0MHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTQwIDBoLTQwdjQwaDQweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+')] opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24 space-y-20">

        {/* HERO SECTION */}
        <motion.div
          className="text-center space-y-6 max-w-4xl mx-auto"
          style={{ y: backgroundY, opacity }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm font-medium mb-2 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.2)]"
          >
            <Sparkles className="w-4 h-4" />
            <span>Inclusive Education Technology</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight"
          >
            ML-Based <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-sm">
              Eye Tracking System
            </span> <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 drop-shadow-sm">
              for Inclusive Education
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-slate-400 text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed font-light"
          >
            Empowering motor-impaired students to interact with computers seamlessly using machine learning and blink classification.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="pt-6"
          >
            <button
              onClick={() => navigate('/how-to-use')}
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-700/80 to-purple-700/80 border border-white/10 text-white font-bold text-lg overflow-hidden transition-all shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:shadow-[0_0_50px_rgba(99,102,241,0.6)] hover:-translate-y-1"
            >

            <button
  onClick={() => window.open(FEEDBACK_URL, "_blank")}
  className="group relative inline-flex items-center gap-3 px-8 py-4 mt-4 rounded-full bg-gradient-to-r from-pink-600/80 to-rose-600/80 border border-white/10 text-white font-bold text-lg overflow-hidden transition-all shadow-[0_0_30px_rgba(244,63,94,0.4)] hover:shadow-[0_0_50px_rgba(244,63,94,0.6)] hover:-translate-y-1"
>
  <div className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-colors" />
  <span className="relative z-10 flex items-center gap-2">
    💬 Give Feedback
  </span>
</button>
              <div className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-colors" />
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                How To Use
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </motion.div>
        </motion.div>

        {/* OVERVIEW */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-8 md:p-10 rounded-3xl text-center max-w-4xl mx-auto border-cyan-500/20 shadow-[0_0_40px_rgba(6,182,212,0.1)] relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-transparent to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-colors duration-500 rounded-3xl" />
          <h2 className="text-3xl font-semibold mb-6 flex items-center justify-center gap-3 relative z-10">
            <Eye className="w-8 h-8 text-cyan-400" />
            Project Overview
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed md:text-xl font-light relative z-10">
            This system utilizes advanced computer vision and machine learning algorithms to detect gaze direction and blink patterns directly from a standard webcam. These gestures are instantly translated into cursor movements, keyboard inputs, and specialized communication tools, ensuring a completely hands-free interaction experience.
          </p>
        </motion.div>

        {/* HOW IT WORKS SECTION */}
        <div className="pt-16 pb-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 inline-block mb-4">
              How The System Works
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">A seamless, sub-second pipeline from physical movement to digital interaction.</p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Connecting Horizontal Line for Desktop */}
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-500/0 via-purple-500/40 to-pink-500/0 -translate-y-1/2 hidden md:block z-0" />

            {/* Connecting Vertical Line for Mobile */}
            <div className="absolute top-0 left-1/2 w-[2px] h-full bg-gradient-to-b from-cyan-500/0 via-purple-500/40 to-pink-500/0 -translate-x-1/2 md:hidden z-0" />

            <div className="grid md:grid-cols-4 gap-8 md:gap-6 relative z-10">
              {[
                {
                  icon: Camera,
                  title: "1. Webcam Input",
                  desc: "Captures high-fps video feed securely directly in the browser. No data leaves your machine.",
                  color: "cyan"
                },
                {
                  icon: Brain,
                  title: "2. ML Analysis",
                  desc: "Advanced neural networks instantly extract complex facial landmarks and precise eye meshes.",
                  color: "purple"
                },
                {
                  icon: Crosshair,
                  title: "3. Gaze Mapping",
                  desc: "Algorithms translate the exact pupil direction and iris positioning to screen coordinates.",
                  color: "pink"
                },
                {
                  icon: MousePointer2,
                  title: "4. Interaction",
                  desc: "Hover to move the intelligent cursor. Intentional blinking registers as deliberate clicks.",
                  color: "blue",
                  scrollToFeatures: true
                },
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2, duration: 0.6 }}
                  className={`relative group h-full ${step.scrollToFeatures ? 'cursor-pointer' : ''}`}
                  onClick={() => {
                    if (step.scrollToFeatures) {
                      document.getElementById('explore-features')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                >
                  <div className="glass-panel p-8 rounded-3xl text-center h-full border hover:border-cyan-500/50 transition-all duration-500 hover:bg-[#13182B]/80 relative overflow-hidden transform group-hover:-translate-y-2 shadow-xl hover:shadow-[0_15px_50px_rgba(6,182,212,0.2)] flex flex-col items-center">

                    {/* Glow effect */}
                    <div className={`absolute -inset-4 bg-${step.color}-500/20 blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 z-0 pointer-events-none`} />

                    <div className="relative z-10 flex flex-col items-center w-full flex-grow">
                      <div className={`w-20 h-20 rounded-2xl bg-${step.color}-500/10 border border-${step.color}-500/30 flex items-center justify-center mb-6 text-${step.color}-400 shadow-[0_0_15px_rgba(var(--${step.color}-rgb),0.2)] group-hover:scale-110 group-hover:bg-${step.color}-500/20 transition-all duration-500`}>
                        <step.icon className="w-10 h-10" />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-4">{step.title}</h4>
                      <p className="text-slate-400 text-sm md:text-base leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* INTERACTIVE CAROUSEL FEATURE SHOWCASE */}
        <div id="explore-features" className="pt-10">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 inline-block mb-4">
              Explore The Features
            </h2>
            <p className="text-slate-400">Swipe or click through to see the system in action.</p>
          </div>

          <div className="relative max-w-6xl mx-auto min-h-[600px] flex items-center justify-center">

            {/* Nav Buttons */}
            <button
              onClick={slidePrev}
              className="absolute left-0 md:-left-6 z-20 p-3 rounded-full bg-slate-800/80 border border-white/10 text-white hover:bg-slate-700/80 hover:text-cyan-400 transition-all shadow-xl backdrop-blur-md hidden sm:block"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={slideNext}
              className="absolute right-0 md:-right-6 z-20 p-3 rounded-full bg-slate-800/80 border border-white/10 text-white hover:bg-slate-700/80 hover:text-cyan-400 transition-all shadow-xl backdrop-blur-md hidden sm:block"
            >
              <ChevronRight size={28} />
            </button>

            <div className="w-full relative overflow-visible flex justify-center">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                    scale: { duration: 0.2 }
                  }}
                  className="w-full"
                >
                  <div className="glass-panel p-6 md:p-10 rounded-3xl border border-white/10 w-full grid lg:grid-cols-12 gap-10 items-center overflow-hidden relative group">

                    {/* Background glow specific to feature color */}
                    <div className={`absolute inset-0 bg-${currentFeature.color}-500/5 transition-colors duration-500 rounded-3xl`} />

                    {/* Content Section */}
                    <div className="lg:col-span-5 space-y-6 relative z-10">
                      <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                        <div className={`p-4 rounded-2xl bg-${currentFeature.color}-500/20 text-${currentFeature.color}-400 shadow-[0_0_20px_rgba(255,255,255,0.05)]`}>
                          <Icon className="w-8 h-8" />
                        </div>
                        <div>
                          <div className="text-sm text-slate-400 font-medium tracking-wider uppercase mb-1">
                            Step 0{currentFeature.id} of 07
                          </div>
                          <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
                            {currentFeature.title}
                          </h3>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <p className="text-xl font-medium leading-relaxed text-cyan-50">
                          {currentFeature.overview}
                        </p>
                        <p className="text-slate-400 leading-relaxed text-lg">
                          {currentFeature.details}
                        </p>
                      </div>
                    </div>

                    {/* Image Section */}
                    <div className="lg:col-span-7 relative z-10 h-full flex items-center justify-center">
                      <div className={`w-full ${currentFeature.images.length > 1 ? 'grid grid-cols-2 gap-4' : ''}`}>
                        {currentFeature.images.map((imgSrc, idx) => (
                          <div key={idx} className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#03050C] group-hover:border-cyan-500/30 transition-all duration-500 relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#03050C]/60 to-transparent z-10 pointer-events-none" />
                            <img
                              src={imgSrc}
                              alt={`${currentFeature.title} visual ${idx + 1}`}
                              className="w-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mobile Nav & Dots */}
            <div className="absolute -bottom-16 left-0 right-0 flex justify-center items-center gap-6">
              <button onClick={slidePrev} className="p-2 sm:hidden text-slate-400 hover:text-white"><ChevronLeft /></button>
              <div className="flex gap-3">
                {featuresData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setDirection(idx > currentIndex ? 1 : -1);
                      setCurrentIndex(idx);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-10 bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.6)]' : 'w-2 bg-slate-700 hover:bg-slate-500'}`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
              <button onClick={slideNext} className="p-2 sm:hidden text-slate-400 hover:text-white"><ChevronRight /></button>
            </div>

          </div>
        </div>

        <div className="py-16"></div> {/* Spacer */}

        {/* CONCLUSION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-10 rounded-3xl text-center max-w-5xl mx-auto bg-gradient-to-br from-cyan-900/40 to-slate-900/60 border-cyan-500/30 relative"
        >
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 p-3 bg-[#03050C] rounded-full border border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.5)]">
            <Sparkles className="w-6 h-6 text-cyan-400" />
          </div>
          <h3 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mt-4">
            Impact & Vision
          </h3>
          <p className="text-slate-300 text-xl leading-relaxed font-light max-w-4xl mx-auto">
            This system proudly demonstrates the profound way that computer vision and machine learning can democratize accessible human-computer interaction. By relying solely on a standard webcam and optimized ML models, we deliver an affordable, highly-effective, and empowering assistive solution for motor-impaired students worldwide.
          </p>
        </motion.div>

        {/* FOOTER */}
        <footer className="text-center py-8 text-slate-500 border-t border-white/5 mt-20">
          <p>© {new Date().getFullYear()}| Made with ❤️ by Team Titans </p>
        </footer>

      </div>
    </div>
  )
}