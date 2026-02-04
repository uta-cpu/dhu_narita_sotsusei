export default function IntroBackground() {
  return (
    <div className="absolute inset-0 bg-[#a8ccc7]">
      {/* 優しいノイズテクスチャ */}
      <div className="absolute inset-0 opacity-40 bg-[url('/noise.png')] mix-blend-overlay"></div>
    </div>
  );
}
