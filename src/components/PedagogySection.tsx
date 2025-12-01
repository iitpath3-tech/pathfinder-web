import React from 'react';
import { motion } from 'framer-motion';
import { Heart, GraduationCap, BookOpen, Target, MessageCircle, Users, BarChart3, Gamepad2 } from 'lucide-react';

export default function PedagogySection() {
  const pedagogyItems = [
    {
      icon: Heart,
      title: "Child-Centric Approach",
      desc: "Child-Centric approach and Feedback Driven Mechanism",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: GraduationCap,
      title: "Expert Faculty",
      desc: "Team of highly qualified teachers comprising of IITians, Doctors and Doctorates",
      color: "from-purple-500 to-purple-700",
    },
    {
      icon: BookOpen,
      title: "Study Material",
      desc: "Extensive study material prepared by experienced faculty members",
      color: "from-green-500 to-green-700",
    },
    {
      icon: Target,
      title: "Precise Training",
      desc: "Precise training for competitive exams as well as school exams",
      color: "from-orange-500 to-orange-700",
    },
    {
      icon: MessageCircle,
      title: "Feedback System",
      desc: "Regular feedback system, parent-teacher meeting & detailed analysis report after every major test",
      color: "from-red-500 to-red-700",
    },
    {
      icon: Users,
      title: "Effective Batch Size",
      desc: "Effective batch size in class and regular availability of teachers in library for doubt solving",
      color: "from-indigo-500 to-indigo-700",
    },
    {
      icon: BarChart3,
      title: "Assessment System",
      desc: "Topic-wise tests, major tests, All India Test Series (AITS) to assess & evaluate students' performance",
      color: "from-yellow-500 to-yellow-700",
    },
    {
      icon: Gamepad2,
      title: "Gamified Learning",
      desc: "A gamified learning app which makes learning Math and Science fun",
      color: "from-pink-500 to-pink-700",
    },
  ];

  // Positions for circular layout (adjusted for 8 items)
  const positions = [
    { top: '10%', left: '15%' },    // Top-left
    { top: '5%', left: '42%' },     // Top-center
    { top: '10%', right: '15%' },   // Top-right
    { top: '35%', right: '8%' },    // Middle-right
    { bottom: '10%', right: '15%' },// Bottom-right
    { bottom: '5%', left: '42%' },  // Bottom-center
    { bottom: '10%', left: '15%' }, // Bottom-left
    { top: '35%', left: '8%' },     // Middle-left
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-16 px-4"
    >
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Our Pedagogy
      </h2>
      
      {/* Circular Layout Container */}
      <div className="relative w-full max-w-7xl mx-auto" style={{ minHeight: '800px' }}>
        {/* Decorative connecting lines/curves */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" style={{ zIndex: 0 }}>
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
          {/* Curved connecting lines */}
          <path d="M 200,150 Q 400,100 600,150" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
          <path d="M 600,150 Q 750,250 750,400" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
          <path d="M 750,400 Q 750,550 600,650" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
          <path d="M 600,650 Q 400,700 200,650" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
          <path d="M 200,650 Q 50,550 50,400" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
          <path d="M 50,400 Q 50,250 200,150" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
        </svg>

        {/* Circular Items */}
        {pedagogyItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.15,
              type: "spring",
              stiffness: 100
            }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, zIndex: 10 }}
            className="absolute group cursor-pointer"
            style={positions[index]}
          >
            {/* Circular Card */}
            <div className="relative">
              {/* Outer glow ring on hover */}
              <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`} 
                   style={{ width: '180px', height: '180px', margin: '-10px' }}></div>
              
              {/* Main circular container */}
              <div className="relative w-40 h-40 rounded-full bg-white shadow-xl border-4 border-gray-100 flex flex-col items-center justify-center p-4 group-hover:border-gray-200 transition-all duration-300">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="h-7 w-7 text-white" />
                </div>
                
                {/* Title */}
                <h3 className="text-xs font-bold text-center text-gray-800 leading-tight">
                  {item.title}
                </h3>
              </div>

              {/* Tooltip/Description on hover */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-64 bg-white rounded-xl shadow-2xl p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20 border border-gray-200"
              >
                <div className={`absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-200 rotate-45`}></div>
                <p className="text-sm text-gray-700 text-center relative z-10">
                  {item.desc}
                </p>
              </motion.div>
            </div>
          </motion.div>
        ))}

        {/* Center decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-10 blur-2xl"></div>
        </motion.div>
      </div>

      {/* Optional: Mobile fallback grid view */}
      <div className="lg:hidden grid grid-cols-2 gap-6 mt-12">
        {pedagogyItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-4 shadow-lg border border-gray-100"
          >
            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center mb-3`}>
              <item.icon className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-sm font-bold mb-2 text-gray-800">
              {item.title}
            </h3>
            <p className="text-xs text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}