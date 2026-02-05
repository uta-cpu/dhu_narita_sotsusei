"use client";

import { motion } from "framer-motion";

export default function Home() {
  // ロッカーの数（1番〜16番）
  const lockers = Array.from({ length: 16 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-[#faf9f3] flex flex-col items-center py-10 font-sans select-none overflow-x-hidden">
      
      {/* 案内メッセージエリア */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mb-8 text-center"
      >
        <div className="inline-block bg-white border-2 border-[#4a617a] px-6 py-3 rounded-full shadow-md">
          <p className="text-[#4a617a] font-bold text-sm md:text-base">
            それぞれのロッカーに展示が入っています。<br className="md:hidden"/>
            扉を開けて覗いてみてください ✨
          </p>
        </div>
      </motion.div>

      {/* レスポンシブグリッド設定:
        grid-cols-2    → スマホ (2列)
        md:grid-cols-4 → PC・タブレット (4列)
      */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-[90%] max-w-5xl my-auto pb-10 px-2">
        {lockers.map((num) => {
          // 16番かどうかを判定
          const isLocked = num === 16;
          // 16番ならただのdiv、それ以外ならリンク(aタグ)にする
          const Wrapper = isLocked ? "div" : "a";
          const wrapperProps = isLocked ? {} : { href: `/shoes/${num}` };

          return (
            <Wrapper 
              {...wrapperProps} 
              key={num} 
              className={`block group perspective-1000 ${isLocked ? "cursor-default" : "cursor-pointer"}`}
            >
              {/* ロッカー全体コンテナ */}
              <div className="relative aspect-[4/5] bg-[#dce4eb] border-[3px] border-[#8da0b6] rounded-sm shadow-sm group-hover:shadow-xl transition-shadow duration-300">
                
                {/* --- 扉が開いた時に見える中身（暗がり） --- */}
                {/* 16番以外だけ中身が見える演出を入れる */}
                {!isLocked && (
                  <div className="absolute inset-0 bg-[#cdd7e0] flex items-center justify-center rounded-sm overflow-hidden shadow-inner">
                     <div className="w-[80%] h-[80%] border-2 border-dashed border-[#aabbc8] opacity-50 flex items-center justify-center">
                        <span className="text-[#8da0b6] text-xs font-bold opacity-50">OPEN</span>
                     </div>
                  </div>
                )}

                {/* --- 扉本体（3D回転アニメーション） --- */}
                <motion.div
                  initial={{ rotateY: 0 }}
                  // 16番はホバーしても開かない（rotateY: 0 のまま）
                  whileHover={isLocked ? { rotateY: 0 } : { rotateY: -25 }} 
                  whileTap={isLocked ? { rotateY: 0 } : { rotateY: -15 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{ transformOrigin: "left", transformStyle: "preserve-3d" }}
                  className={`absolute inset-[-3px] bg-[#f0f6fc] border-[3px] border-[#8da0b6] rounded-sm flex flex-col items-center justify-center shadow-md origin-left z-10 ${isLocked ? "bg-[#e2e8f0]" : ""}`}
                >
                  {/* 扉のディテール：内枠 */}
                  <div className="absolute inset-1 border border-[#8da0b6]/20 rounded-[1px] pointer-events-none" />

                  {/* 番号プレート（立体的に浮かす） */}
                  <div className="absolute -top-[14px] left-1/2 -translate-x-1/2 bg-white border-[2px] border-[#8da0b6] px-4 py-[2px] shadow-sm z-20">
                    <span className="text-sm font-black text-[#4a617a] block leading-none">
                      {num.toString().padStart(2, '0')}
                    </span>
                  </div>

                  {/* 扉の装飾：通気口 */}
                  <div className="flex gap-1 mb-4 opacity-30">
                    <div className="w-1 h-8 bg-[#8da0b6] rounded-full" />
                    <div className="w-1 h-8 bg-[#8da0b6] rounded-full" />
                    <div className="w-1 h-8 bg-[#8da0b6] rounded-full" />
                  </div>

                  {/* 取っ手 */}
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-12 bg-[#eef4f9] border-[2px] border-[#8da0b6] rounded-full shadow-sm flex flex-col justify-center items-center gap-1">
                     <div className="w-1 h-1 bg-[#8da0b6] rounded-full opacity-50" />
                     <div className="w-1 h-1 bg-[#8da0b6] rounded-full opacity-50" />
                  </div>
                  
                  {/* 16番だけの特別ラベル */}
                  {num === 16 && (
                    <div className="absolute bottom-8 w-full flex justify-center">
                      <div className="bg-yellow-100 border-2 border-[#4a617a] px-2 py-1 rotate-[-2deg] shadow-sm">
                        <span className="text-[10px] text-[#4a617a] font-black block leading-tight text-center">
                          グローバル<br/>リーダーシップゼミ
                        </span>
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>
            </Wrapper>
          );
        })}
      </div>

    </div>
  );
}