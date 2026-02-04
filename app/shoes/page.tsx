"use client";

import Door from "../components/Door";

export default function ShoesPage() {
  return (
    <div className="min-h-screen bg-[#faf9f3] flex items-center justify-center py-20">
      <div className="grid grid-cols-4 gap-7">
        {Array.from({ length: 16 }).map((_, i) => (
          <Door
            key={i}
            index={i}
            isMain={i === 0}
            locked={i === 15} // ← 16番目だけ GLOBAL LEADERSHIP でロック
          />
        ))}
      </div>
    </div>
  );
}
