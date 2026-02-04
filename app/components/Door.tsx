"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Door({
  index,
  isMain,
  locked = false,
}: {
  index: number;
  isMain: boolean;
  locked?: boolean;
}) {
  const router = useRouter();
  const [hover, setHover] = useState(false);

  const hoverOpen = hover && !locked;

  const handleClick = () => {
    if (locked) return; // ロックのやつ（GLOBAL LEADERSHIP）は飛ばない
    router.push(`/shoes/${index + 1}`);
  };

  return (
    <div
      className="relative w-[150px] h-[150px] perspective-[800px]"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleClick} // ←★ ここでクリックを拾う！
    >
      {/* ■ 外枠（靴箱っぽい枠） */}
      <div className="absolute inset-0 bg-[#f4f4ef] border-[3px] border-[#7a93a3] rounded-md shadow-[inset_0_3px_6px_rgba(0,0,0,0.10)]" />

      {/* ■ 中枠（インナー） */}
      <div className="absolute inset-2 border border-[#9ab0bd] rounded-sm opacity-60 pointer-events-none" />

      {/* ■ 扉本体 */}
      <div
        className={`
          absolute inset-[6px] bg-[#e8ebe6] border border-[#7f9dad] rounded-sm 
          transition-all duration-300 origin-left
          ${hoverOpen ? "rotate-y-[-22deg]" : ""}
          ${isMain && !locked ? "rotate-y-[-10deg]" : ""}
        `}
        style={{
          boxShadow: hoverOpen
            ? "15px 0 35px rgba(255,255,220,0.65)"
            : isMain && !locked
            ? "0 0 20px rgba(255,255,200,0.45)"
            : "none",
        }}
      >
        {/* 内側の二重枠 */}
        <div className="absolute inset-2 border border-[#9ab0bd] rounded-sm opacity-70" />

        {/* 取っ手 */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border border-[#748b99] bg-[#f0f0ec]" />

        {/* ロック中のテキスト */}
        {locked && (
          <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
            <span className="text-[#506273] text-sm font-semibold tracking-wide opacity-90 leading-tight">
              GLOBAL LEADERSHIP
            </span>
          </div>
        )}
      </div>

      {/* 番号札 */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-2 py-[1px] text-xs border border-[#7a93a3] rounded-sm shadow-sm text-[#5f707a] font-medium">
        {index + 1}
      </div>

      {/* ホワホワ光（ホバー時だけ足元にふわっと） */}
      {hoverOpen && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-16 h-6 bg-[#fff8d6] blur-xl opacity-70 pointer-events-none" />
      )}
    </div>
  );
}
