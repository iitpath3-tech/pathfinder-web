import { motion } from "framer-motion";
import { BookOpen, PenTool, GraduationCap, Award, Trophy, Star } from "lucide-react";
import { useEffect, useState } from "react";

const FlyingIcons = () => {
  // Define the icons to use
  const icons = [
    { icon: BookOpen, color: "text-blue-500" },
    { icon: PenTool, color: "text-green-500" },
    { icon: GraduationCap, color: "text-purple-500" },
    { icon: Award, color: "text-yellow-500" },
    { icon: Trophy, color: "text-red-500" },
    { icon: Star, color: "text-pink-500" },
  ];

  // Generate random positions and animations
  const [iconPositions, setIconPositions] = useState<Array<{
    id: number;
    icon: typeof icons[number];
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
  }>>([]);

  useEffect(() => {
    // Generate 5-8 icons with random properties (reduced from 15-20)
    const positions = Array.from({ length: 5 + Math.floor(Math.random() * 4) }, (_, i) => {
      const icon = icons[Math.floor(Math.random() * icons.length)];
      return {
        id: i,
        icon,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 16 + Math.random() * 24, // Random size between 16px and 40px
        duration: 20 + Math.random() * 40, // Random duration between 20s and 60s
        delay: Math.random() * 5, // Random delay up to 5s
      };
    });
    
    setIconPositions(positions);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[-1]">
      {iconPositions.map((position) => {
        const IconComponent = position.icon.icon;
        return (
          <motion.div
            key={position.id}
            className={`absolute ${position.icon.color}`}
            initial={{
              x: `${position.x}vw`,
              y: `${position.y}vh`,
            }}
            animate={{
              x: [`${position.x}vw`, `${Math.random() * 100}vw`, `${Math.random() * 100}vw`],
              y: [`${position.y}vh`, `${Math.random() * 100}vh`, `${Math.random() * 100}vh`],
            }}
            transition={{
              duration: position.duration,
              delay: position.delay,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <IconComponent size={position.size} className="opacity-10" />
          </motion.div>
        );
      })}
    </div>
  );
};

export default FlyingIcons;