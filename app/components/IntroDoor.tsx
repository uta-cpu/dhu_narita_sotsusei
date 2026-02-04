"use client";

import { motion, useAnimation } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function IntroDoor() {
  const router = useRouter();
  const doorControls = useAnimation();
  const glowControls = useAnimation();  // ← 光演出専用
  const screenControls = useAnimation();

  const [clicked, setClicked] = useState(false);
  const [hover, setHover] = useState(false);

  const handleClick = async () => {
    if (clicked) return;
    setClicked(true);

    // 扉を大きく開く
    doorControls.start({
      rotateY: -40,
      boxShadow: "40px 0 60px rgba(255,255,210,0.9)",
      transition: { duration: 0.7, ease: "easeInOut" },
    });

    // 光を一瞬強く → フェードアウト
    glowControls.start({
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    });
    glowControls.start({
      opacity: 0,
      transition: { delay: 0.3, duration: 0.8 },
    });

    // ズーム＆フェードアウト
    screenControls.start({
      scale: 1.7,
      opacity: 0,
      transition: { duration: 1.0, ease: "easeInOut" },
    });

    setTimeout(() => router.push("/shoes"), 700);
  };

  const hoverOpen = hover && !clicked;

  return (
    <motion.div
      className="relative w-full h-full flex items-center justify-center"
      animate={screenControls}
      initial={{ scale: 1, opacity: 1 }}
    >
      {/* 光レイヤー */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,230,0.25)_0%,_rgba(255,255,230,0)_70%)] pointer-events-none"
        animate={glowControls}
        initial={{ opacity: 0 }}
      />

      {/* 外枠 */}
      <div
        className="w-[300px] h-[520px] border-[6px] border-[#4a617a] rounded-lg bg-[#faf9f3] shadow-2xl relative overflow-hidden"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {/* 扉本体 */}
        <motion.div
          className="absolute inset-0 origin-left bg-[#faf9f3] border-r-[6px] border-[#4a617a]"
          animate={doorControls}
          initial={{ rotateY: 0 }}
          whileHover={!clicked ? { rotateY: -15 } : {}}
          transition={{ duration: 0.35, ease: "easeOut" }}
          onClick={handleClick}
        >
          {/* 扉の線画（詩奈デザインは絶対そのまま） */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[180px] h-[120px] border-[3px] border-[#4a617a] rounded-t-full rounded-b-sm"></div>
          <div className="absolute top-44 left-1/2 -translate-x-1/2 w-[180px] h-[180px] border-[3px] border-[#4a617a] rounded-sm"></div>
          <div className="absolute right-6 top-1/2 w-10 h-3 bg-[#4a617a] rounded-full"></div>
        </motion.div>
      </div>
    </motion.div>
  );
}
