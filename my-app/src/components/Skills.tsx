"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Database,
  Code2,
  Terminal,
  Cpu,
  Layers,
  Server,
  Globe,
  Radio,
  FileCode,
  Boxes,
  Zap,
  Lock,
  Workflow,
  Bot,
  BrainCircuit,
  Share2,
  Layout,
  Binary,
  ShieldCheck,
  GitBranch,
  Sliders,
} from "lucide-react";

export type SkillCategory =
  | "frameworks"
  | "languages"
  | "databases"
  | "vector_db"
  | "integration"
  | "tools"
  | "core"
  | "security"
  | "ai_automation";

export interface SkillItem {
  name: string;
  category: SkillCategory;
  level: string;
  percentage: number;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
  accent: "purple" | "cyan" | "pink" | "amber" | "emerald";
  description: string;
}

const skillsData: SkillItem[] = [
  // 1. Frameworks & Libraries
  {
    name: "React.js",
    category: "frameworks",
    level: "Expert",
    percentage: 96,
    icon: Layers,
    tag: "Hooks / Context API / State",
    accent: "cyan",
    description: "Custom hooks, component architecture, state management, memoization, and virtual DOM efficiency.",
  },
  {
    name: "Next.js",
    category: "frameworks",
    level: "Advanced",
    percentage: 92,
    icon: Globe,
    tag: "App Router / SSR / CSR",
    accent: "cyan",
    description: "Server-side rendering, dynamic API routes, SEO optimization, and static site generation.",
  },
  {
    name: "Node.js & Express.js",
    category: "frameworks",
    level: "Advanced",
    percentage: 90,
    icon: Server,
    tag: "REST APIs / Middleware / Routing",
    accent: "cyan",
    description: "Scalable backend routing, asynchronous event loops, middleware pipelines, and auth integration.",
  },
  {
    name: "Bootstrap, Flexbox & CSS Grid",
    category: "frameworks",
    level: "Expert",
    percentage: 95,
    icon: Layout,
    tag: "Responsive Layouts / Styling",
    accent: "cyan",
    description: "Pixel-perfect responsive UIs, flex layout alignment, custom grid systems, and adaptive design.",
  },

  // 2. Languages
  {
    name: "JavaScript (ES6+)",
    category: "languages",
    level: "Expert",
    percentage: 95,
    icon: Code2,
    tag: "Async/Await / Closures / DOM",
    accent: "purple",
    description: "Modern ES6+ syntax, asynchronous event loop, promises, closures, and DOM manipulation.",
  },
  {
    name: "TypeScript",
    category: "languages",
    level: "Advanced",
    percentage: 90,
    icon: FileCode,
    tag: "Static Typing / Interfaces",
    accent: "purple",
    description: "Type-safe architectures, custom interface declarations, generics, and strict compile checking.",
  },
  {
    name: "Python",
    category: "languages",
    level: "Proficient",
    percentage: 85,
    icon: Terminal,
    tag: "Scripting / Data / AI",
    accent: "purple",
    description: "Core scripting, automated data processing pipelines, backend services, and AI integrations.",
  },
  {
    name: "HTML5 & CSS3",
    category: "languages",
    level: "Expert",
    percentage: 98,
    icon: Globe,
    tag: "Semantic / Accessibility",
    accent: "purple",
    description: "Semantic HTML structure, accessible UX design, keyframe animations, and cross-browser styling.",
  },

  // 3. Databases
  {
    name: "MongoDB",
    category: "databases",
    level: "Advanced",
    percentage: 90,
    icon: Database,
    tag: "NoSQL / Mongoose / Aggregation",
    accent: "pink",
    description: "Document data modeling, schema validation, Mongoose ORM, and complex aggregation pipelines.",
  },
  {
    name: "SQL",
    category: "databases",
    level: "Advanced",
    percentage: 88,
    icon: Database,
    tag: "Relational Queries / Joins",
    accent: "pink",
    description: "Relational database schemas, structured query design, multi-table joins, and data normalization.",
  },

  // 4. Vector Databases
  {
    name: "Vector Databases",
    category: "vector_db",
    level: "Advanced",
    percentage: 87,
    icon: Binary,
    tag: "Pinecone / Qdrant / Chroma",
    accent: "pink",
    description: "High-dimensional vector indexing, similarity search algorithms, embeddings storage, and vector retrieval.",
  },

  // 5. Automation & AI
  {
    name: "n8n Automation",
    category: "ai_automation",
    level: "Advanced",
    percentage: 92,
    icon: Workflow,
    tag: "Workflows / Webhooks / Fallbacks",
    accent: "cyan",
    description: "Automated multi-step workflows, HTTP request nodes, custom webhook triggers, and error recovery.",
  },
  {
    name: "LLM APIs & Prompt Engineering",
    category: "ai_automation",
    level: "Advanced",
    percentage: 90,
    icon: Bot,
    tag: "OpenAI / Anthropic / Ollama",
    accent: "cyan",
    description: "Generative AI API integration (OpenAI, Anthropic, Hugging Face, Ollama), prompt tuning, and structured outputs.",
  },
  {
    name: "RAG Pipelines",
    category: "ai_automation",
    level: "Advanced",
    percentage: 88,
    icon: BrainCircuit,
    tag: "Retrieval-Augmented Generation",
    accent: "cyan",
    description: "Knowledge base embedding generation, contextual vector search retrieval, and grounded AI responses.",
  },

  // 6. Integration
  {
    name: "RESTful APIs & Webhooks",
    category: "integration",
    level: "Expert",
    percentage: 94,
    icon: Radio,
    tag: "Endpoints / Webhooks / JSON",
    accent: "emerald",
    description: "Designing, consuming, and testing RESTful API endpoints, real-time webhooks, and HTTP status handling.",
  },
  {
    name: "JSON & System Integration",
    category: "integration",
    level: "Advanced",
    percentage: 92,
    icon: Share2,
    tag: "API Wiring / Data Exchange",
    accent: "emerald",
    description: "Cross-platform data transformation, third-party API wiring, payload validation, and system integration.",
  },

  // 7. Security & Governance
  {
    name: "Security & Governance",
    category: "security",
    level: "Advanced",
    percentage: 88,
    icon: ShieldCheck,
    tag: "Data Privacy / Access Control",
    accent: "emerald",
    description: "Data privacy compliance, role-based access control (RBAC), security headers, and safe data flow design.",
  },

  // 8. Tools & Platforms
  {
    name: "Git & GitHub",
    category: "tools",
    level: "Expert",
    percentage: 94,
    icon: GitBranch,
    tag: "Version Control / Workflow",
    accent: "amber",
    description: "Branching strategies, pull request code reviews, conflict resolution, and collaborative repositories.",
  },
  {
    name: "VS Code & Chrome DevTools",
    category: "tools",
    level: "Expert",
    percentage: 96,
    icon: Terminal,
    tag: "Debugging / Performance Profiling",
    accent: "amber",
    description: "DOM tree inspection, network waterfall timing, breakpoint debugging, and performance profiling.",
  },
  {
    name: "npm & Postman",
    category: "tools",
    level: "Expert",
    percentage: 95,
    icon: Zap,
    tag: "Package Mgmt / API Testing",
    accent: "amber",
    description: "Automated API request testing, environment variable suites, mock servers, and package dependencies.",
  },

  // 9. Core Concepts
  {
    name: "Data Structures & Algorithms",
    category: "core",
    level: "Advanced",
    percentage: 89,
    icon: Cpu,
    tag: "Trees / Graphs / Optimization",
    accent: "purple",
    description: "Fundamental data structures, time & space complexity, recursion, and algorithmic problem solving.",
  },
  {
    name: "OOP & Web Performance",
    category: "core",
    level: "Advanced",
    percentage: 91,
    icon: Sliders,
    tag: "Object-Oriented / Speed",
    accent: "purple",
    description: "Object-Oriented principles, code reusability, asset optimization, lazy loading, and web vitals.",
  },
];

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    | "all"
    | "frameworks"
    | "languages"
    | "databases"
    | "ai_automation"
    | "integration"
    | "security"
    | "tools"
    | "core"
  >("all");

  const filteredSkills = skillsData.filter((skill) => {
    if (activeTab === "all") return true;
    if (activeTab === "databases") return skill.category === "databases" || skill.category === "vector_db";
    return skill.category === activeTab;
  });

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[300px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-3">
          <Cpu className="w-3.5 h-3.5" />
          <span>Technical Skills & Arsenal</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
          Technical <span className="gradient-text-cyan">Skillset & Stack</span>
        </h2>
        <p className="mt-3 text-zinc-400 max-w-2xl text-sm sm:text-base">
          Comprehensive technical skills across Web Engineering, AI & Automation, Vector Databases, Security, and System Integration.
        </p>

        {/* Filter Tabs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-[#0d0e17] border border-white/10 backdrop-blur-xl">
          {[
            { id: "all", label: "All Skills" },
            { id: "frameworks", label: "Frameworks & Libs" },
            { id: "languages", label: "Languages" },
            { id: "databases", label: "Databases & Vector DBs" },
            { id: "ai_automation", label: "Automation & AI" },
            { id: "integration", label: "Integration & APIs" },
            { id: "security", label: "Security & Governance" },
            { id: "tools", label: "Tools & Platforms" },
            { id: "core", label: "Core Concepts" },
          ].map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`relative px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  isSelected
                    ? "text-white font-semibold"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-white/5"
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="absolute inset-0 bg-gradient-to-r from-purple-600/40 via-indigo-600/40 to-cyan-600/40 border border-purple-500/50 rounded-xl shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of Skill Cards */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        <AnimatePresence>
          {filteredSkills.map((skill, index) => {
            const Icon = skill.icon;
            const accentColors = {
              purple: {
                border: "group-hover:border-purple-500/40",
                badge: "bg-purple-500/10 text-purple-300 border-purple-500/20",
                bar: "bg-gradient-to-r from-purple-600 to-indigo-500",
                icon: "text-purple-400 bg-purple-500/10 border-purple-500/20",
                glow: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]",
              },
              cyan: {
                border: "group-hover:border-cyan-500/40",
                badge: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
                bar: "bg-gradient-to-r from-cyan-500 to-blue-600",
                icon: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
                glow: "group-hover:shadow-[0_0_30px_rgba(56,189,248,0.2)]",
              },
              pink: {
                border: "group-hover:border-pink-500/40",
                badge: "bg-pink-500/10 text-pink-300 border-pink-500/20",
                bar: "bg-gradient-to-r from-pink-500 to-rose-600",
                icon: "text-pink-400 bg-pink-500/10 border-pink-500/20",
                glow: "group-hover:shadow-[0_0_30px_rgba(236,72,153,0.2)]",
              },
              amber: {
                border: "group-hover:border-amber-500/40",
                badge: "bg-amber-500/10 text-amber-300 border-amber-500/20",
                bar: "bg-gradient-to-r from-amber-500 to-orange-600",
                icon: "text-amber-400 bg-amber-500/10 border-amber-500/20",
                glow: "group-hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]",
              },
              emerald: {
                border: "group-hover:border-emerald-500/40",
                badge: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
                bar: "bg-gradient-to-r from-emerald-500 to-teal-600",
                icon: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
                glow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]",
              },
            }[skill.accent];

            return (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className={`group relative p-5 rounded-2xl bg-[#0f1019]/80 border border-white/6 backdrop-blur-xl transition-all duration-300 hover:bg-[#141624] ${accentColors.border} ${accentColors.glow} hover:-translate-y-1 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl border ${accentColors.icon} group-hover:scale-105 transition-transform`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-white group-hover:text-zinc-100 transition-colors">
                          {skill.name}
                        </h3>
                        <span className={`inline-block mt-0.5 text-[10px] font-mono px-2 py-0.5 rounded border ${accentColors.badge}`}>
                          {skill.tag}
                        </span>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono font-semibold text-zinc-400 group-hover:text-white">
                      {skill.percentage}%
                    </span>
                  </div>

                  <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed mt-2">
                    {skill.description}
                  </p>
                </div>

                {/* Progress bar */}
                <div className="mt-4 pt-3 border-t border-white/5">
                  <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.1 }}
                      className={`h-full rounded-full ${accentColors.bar}`}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

