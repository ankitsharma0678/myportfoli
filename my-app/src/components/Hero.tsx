"use client";

import React from "react";
import Image from "next/image";
import anishImg from "../../public/anish.png";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Sparkles,
  Terminal,
  Cpu,
  Layers,
  Zap,
  Code2,
  GitBranch,
} from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-center items-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Central Hero Glow Halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[350px] bg-gradient-to-tr from-purple-600/15 via-indigo-600/10 to-cyan-500/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Availability Badge with Mini Avatar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#12131f]/90 border border-purple-500/25 shadow-[0_0_20px_rgba(168,85,247,0.15)] mb-8 backdrop-blur-xl"
        >
          <div className="w-5 h-5 rounded-full overflow-hidden border border-purple-400/60 relative shrink-0">
            <Image
              src={anishImg}
              alt="Anish Sharma"
              width={20}
              height={20}
              className="object-cover object-top"
            />
          </div>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          <span className="text-xs font-medium text-zinc-300">
            Open for Full-Stack & AI Roles
          </span>
          <span className="text-zinc-600">|</span>
          <span className="text-[11px] font-mono text-purple-300 flex items-center gap-1">
            <Zap className="w-3 h-3 text-amber-400" />
            React.js & Next.js Specialist
          </span>
        </motion.div>

        {/* High-Contrast Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.08]"
        >
          Innovate. Build. Deliver.{" "}
          <span className="gradient-text-hero block mt-2">
            Modern React.js, Next.js & Full-Stack Apps.
          </span>
        </motion.h1>

        {/* High-Legibility Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-6 text-base sm:text-lg lg:text-xl text-zinc-400 max-w-2xl font-normal leading-relaxed"
        >
          Results-driven Full Stack Developer specializing in React.js, Next.js, and dynamic frontend
          architectures. Experienced in building responsive web platforms, RESTful API integrations,
          and modern AI-powered applications.
        </motion.p>

        {/* CTA Group */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          {/* Primary CTA - Explore Work */}
          <a
            href="#projects"
            className="relative group px-7 py-3.5 rounded-full overflow-hidden font-medium text-sm text-white shadow-[0_0_30px_rgba(168,85,247,0.35)] transition-all duration-300 hover:shadow-[0_0_45px_rgba(168,85,247,0.55)] hover:scale-[1.02]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-300" />
            <span className="relative flex items-center gap-2 font-semibold">
              <span>View Featured Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>

          {/* Secondary CTA - Contact */}
          <a
            href="#contact"
            className="relative group px-6 py-3.5 rounded-full glass-button font-medium text-sm text-zinc-200 transition-all duration-300 hover:text-white hover:scale-[1.02] flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-purple-400 group-hover:rotate-12 transition-transform" />
            <span>Contact Me</span>
          </a>

          {/* AI Copilot CTA */}
          <a
            href="#ai-demo"
            className="relative group px-5 py-3.5 rounded-full bg-white/[0.04] border border-cyan-500/30 text-xs font-mono text-cyan-300 transition-all duration-300 hover:bg-cyan-500/10 flex items-center gap-2"
          >
            <Bot className="w-4 h-4 text-cyan-400" />
            <span>AI Copilot Demo</span>
          </a>
        </motion.div>

        {/* Terminal Quick Highlight Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="mt-10 max-w-lg w-full p-2.5 rounded-2xl bg-[#0b0c14]/80 border border-white/8 backdrop-blur-xl shadow-2xl flex items-center justify-between text-xs font-mono text-zinc-400"
        >
          <div className="flex items-center gap-2 pl-2">
            <Terminal className="w-3.5 h-3.5 text-purple-400" />
            <span className="text-zinc-500">$</span>
            <span className="text-zinc-200">npx anish-sharma --stack react,nextjs,node</span>
          </div>
          <div className="flex items-center gap-1.5 pr-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] text-emerald-400 font-sans">Active</span>
          </div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          className="mt-14 w-full grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-4xl"
        >
          {[
            {
              value: "15+",
              label: "Interactive Apps Built",
              detail: "React.js & Next.js Platforms",
              icon: Code2,
              accent: "text-purple-400",
              borderGlow: "group-hover:border-purple-500/40",
            },
            {
              value: "200+",
              label: "Bootcamp Hours",
              detail: "NxtWave CCBP 4.0 Trainee",
              icon: Zap,
              accent: "text-amber-400",
              borderGlow: "group-hover:border-amber-500/40",
            },
            {
              value: "100%",
              label: "API & REST Integration",
              detail: "Node.js, Express & Mongo/SQL",
              icon: GitBranch,
              accent: "text-pink-400",
              borderGlow: "group-hover:border-pink-500/40",
            },
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className={`group relative p-4 sm:p-5 rounded-2xl bg-[#0f1019]/70 border border-white/6 backdrop-blur-md transition-all duration-300 hover:bg-[#151624]/90 ${stat.borderGlow} hover:-translate-y-1`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-2xl sm:text-3xl font-bold tracking-tight text-white ${stat.accent}`}>
                    {stat.value}
                  </span>
                  <div className="p-1.5 rounded-lg bg-white/5 border border-white/5 text-zinc-400 group-hover:text-white transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-xs font-semibold text-zinc-200 text-left">
                  {stat.label}
                </p>
                <p className="text-[11px] text-zinc-500 text-left mt-0.5">
                  {stat.detail}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
