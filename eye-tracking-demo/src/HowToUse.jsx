import { motion } from "framer-motion";
import { ArrowLeft, Lightbulb, Moon, Activity, Eye, Focus, Laptop, AlertTriangle, Video } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function HowToUse() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-transparent selection:bg-cyan-500/30 overflow-hidden font-sans text-slate-300">
      {/* Background Decor */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-cyan-600/20 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-600/20 blur-[150px] rounded-full mix-blend-screen" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12 md:py-20 space-y-16">

        {/* FIRSTLY: AN ARROW THAT MOVES TO ANOTHER PAGE */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={() => navigate("/")}
            className="group flex items-center gap-3 text-cyan-400 hover:text-cyan-300 transition-all font-medium text-lg bg-[#0A0D18]/80 px-6 py-3 rounded-full border border-cyan-500/50 hover:bg-[#13182B] backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:shadow-[0_0_25px_rgba(6,182,212,0.3)] w-max"
          >
            <ArrowLeft className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </button>
        </motion.div>

        {/* PAGE HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center space-y-6 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium mb-2 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.2)]">
            <Focus className="w-4 h-4" />
            <span>System Guide & Requirements</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            How to Use the <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Interface System
            </span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed font-light">
            An overview of the project requirements, optimal lighting conditions, and the EOG fallback mode for perfect accuracy.
          </p>
        </motion.div>

        {/* SECTION 1: Project Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-8 md:p-12 rounded-3xl border border-white/5 backdrop-blur-md shadow-xl relative group overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent z-0 pointer-events-none" />
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                <Laptop className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-white">Project Requirements</h2>
              <p className="text-xl font-medium text-blue-100">
                Minimum specifications for the ML-based eye-tracking system.
              </p>
              <ul className="space-y-4 text-slate-400 text-lg font-light list-disc pl-5">
                <li><strong>Hardware:</strong> A modern laptop or desktop computer equipped with a standard internal or external webcam (720p or higher recommended).</li>
                <li><strong>Software:</strong> An up-to-date modern web browser (Chrome, Firefox, Edge, Safari) that supports the MediaDevices API.</li>
                <li><strong>Permissions:</strong> The user must grant explicit camera permissions to the application upon startup. No video data is ever transmitted to a server.</li>
                <li><strong>Environment:</strong> A stable surface to rest the computer to minimize camera shaking.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 overflow-hidden bg-[#03050C] p-6 flex flex-col items-center justify-center space-y-6 relative h-full min-h-[300px] group-hover:border-blue-500/50 transition-colors shadow-inner shadow-blue-500/10">
              <Laptop className="w-24 h-24 text-blue-400/50 group-hover:text-blue-400 transition-colors" />
              <p className="text-center text-blue-400/80 font-mono text-sm">SYSTEM_READY : VALIDATED</p>
            </div>
          </div>
        </motion.div>

        {/* SECTION 2: Lighting Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-8 md:p-12 rounded-3xl border border-white/5 backdrop-blur-md shadow-xl relative group overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent z-0 pointer-events-none" />
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">

            <div className="order-2 md:order-1 rounded-2xl border border-white/10 overflow-hidden bg-[#03050C] p-6 flex flex-col items-center justify-center space-y-6 relative h-full min-h-[300px] group-hover:border-cyan-500/50 transition-colors shadow-inner shadow-cyan-500/10">
              <div className="absolute top-4 left-4 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <Eye className="w-24 h-24 text-cyan-400/50 group-hover:text-cyan-400 transition-colors animate-pulse" />
              <p className="text-center text-cyan-400/80 font-mono text-sm">FACIAL_LANDMARK_DETECTION : ACTIVE</p>
            </div>

            <div className="order-1 md:order-2 space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-white">Lighting Requirements</h2>
              <p className="text-xl font-medium text-cyan-50">
                Optimal conditions for standard webcam-based tracking.
              </p>
              <ul className="space-y-4 text-slate-400 text-lg font-light list-disc pl-5">
                <li>Ensure the primary light source is in front of you (diffuse lighting), illuminating your face evenly.</li>
                <li>Avoid sitting with a bright window directly behind you, as severe backlighting can throw the facial mapping model off.</li>
                <li>Maintain a comfortable distance (50-70cm) from the camera, ensuring both eyes clearly remain in the frame.</li>
                <li>Glasses can be worn, but mitigating severe glare helps the ML models lock onto your irises instantly.</li>
              </ul>
            </div>

          </div>
        </motion.div>

        {/* SECTION 3: EOG Usage as a Fallback */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-8 md:p-12 rounded-3xl border border-white/5 backdrop-blur-md shadow-xl relative group overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent z-0 pointer-events-none" />
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">

            <div className="space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.2)] relative">
                <Moon className="w-8 h-8" />
                <AlertTriangle className="absolute -top-2 -right-2 w-6 h-6 text-yellow-500 drop-shadow-[0_0_5px_rgba(234,179,8,1)]" />
              </div>
              <h2 className="text-3xl font-bold text-white">Fallback Mode: EOG</h2>
              <p className="text-xl font-medium text-purple-100">
                Only utilized during severe lighting failures or pitch darkness.
              </p>
              <div className="space-y-4 text-slate-400 text-lg font-light">
                <p>
                  As a highly accessible inclusive system, a hardware fallback exists if optical webcam tracking completely fails due to an unresponsive environment (e.g. no lighting available).
                </p>
                <p>
                  In such edge cases, the system can fall back to <strong className="text-purple-300 font-medium">Electrooculography (EOG)</strong> tracking.
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-4 text-base">
                  <li><strong>Setup:</strong> If initiated, small bio-electrodes are placed on the skin surrounding the eyes to measure electrical resting potentials instead of using a camera.</li>
                  <li><strong>How it Works:</strong> As your eye rotates, the system detects voltage shifts, safely circumventing the lack of light.</li>
                  <li><strong>Note:</strong> This is strictly a fallback measure. The primary and recommended usage mode remains the streamlined, hardware-free optical webcam model.</li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 overflow-hidden bg-[#03050C] p-6 flex flex-col items-center justify-center space-y-6 relative h-full min-h-[300px] group-hover:border-purple-500/50 transition-colors shadow-inner shadow-purple-500/10">
              <Moon className="absolute top-8 right-8 w-12 h-12 text-slate-700 group-hover:text-purple-400/30 transition-colors" />
              <Activity className="w-32 h-32 text-purple-500" strokeWidth={1} />
              <p className="text-center text-purple-400/80 font-mono text-sm tracking-widest mt-4">FALLBACK_EOG : STANDBY</p>
            </div>

          </div>
        </motion.div>
        {/* SECTION 4: Demo Video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-8 md:p-12 rounded-3xl border border-white/5 backdrop-blur-md shadow-xl relative group overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent z-0 pointer-events-none" />
          <div className="relative z-10 flex flex-col items-center gap-8">

            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 shadow-[0_0_15px_rgba(236,72,153,0.2)]">
                <Video className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-white">System Demo Video</h2>
              <p className="text-xl font-medium text-pink-100">
                Watch the interface in action.
              </p>
              <p className="text-slate-400 text-lg font-light">
                See how effortless it is to navigate, type, and interact hands-free using nothing but your eyes and deliberate blinks.
              </p>
            </div>

            <div className="w-full max-w-4xl aspect-video rounded-2xl border border-white/10 overflow-hidden bg-[#03050C] flex flex-col items-center justify-center relative group-hover:border-pink-500/50 transition-colors shadow-2xl shadow-pink-500/10">
              {/* Placeholder for actual video embed */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#03050C]/80 to-transparent z-10 pointer-events-none" />
              <Video className="w-20 h-20 text-slate-700 group-hover:text-pink-400/50 transition-colors z-20" />
              <p className="text-center text-pink-400/80 font-mono text-sm tracking-widest mt-6 z-20">VIDEO_PLAYER : AWAITING_SOURCE</p>

              {/* Example of how to embed a YouTube video once available:*/
               <iframe 
                 className="w-full h-full absolute inset-0 z-30" 
                 src="demo.mp4" 
                 title="System Demo Video" 
                 frameBorder="0" 
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                 allowFullScreen>
               </iframe> 
               }
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  )
}