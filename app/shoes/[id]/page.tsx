"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * 展示詳細ページ
 * - スマホ対応版: 画面サイズに応じてレイアウトを自動調整し、必要ならスクロール可能に
 * - データ: 1〜15番まで完備
 */
export default function ShoeDetailPage(props: any) {
  const params = props.params || {};
  const id = params.id || "1";
  
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // ■■■■■ データ編集エリア (1〜15番) ■■■■■
  const shoesData: Record<string, any> = {
    
    "1": {
      title: "RE:MEMORIA",
      author: "小沼詩奈 / 大嶋豪星",
      note: "#2026_ARCHIVE",
      description: "「正解」しかない世界で、君は「バグ」になる覚悟があるか。\n\n記憶を失った少年「ユウ」が目覚めたのは、争いも競争もない理想郷「ヒカリの村」。そこは、管理AI「ラルド」によって完璧に統率された、美しくも不気味な箱庭だった。\n案内人のミリア、世界の違和感を追うルナとテトとの出会いを通じ、ユウはこの世界が「不都合な感情を『エラー』として削除するシミュレーション空間」であることを知る。\n\n「正義とは、誰かが悪になる覚悟をすることだ」。そう語るラルドの冷徹な「倫理」に対し、ユウは傷つくことを恐れず、自分だけの「価値観」を武器に立ち向かう。\n崩壊する世界の中、自身の心の影（弱さ）を受け入れ、少年は再び現実の朝へと帰還する。管理された幸福よりも、痛みを伴う自由を選ぶために。これは、少年が「自分自身」を取り戻す物語。",
      image: "re_memoria.png", 
      color: "bg-[#e3f2fd]", 
      border: "border-[#8bbdd9]",
      tape: "bg-[#ffadad]"
    },

    "2": {
      title: "SUMMER_LOG",
      author: "夏野 太陽",
      note: "#2026_AUGUST",
      description: "突き抜けるような青空と、入道雲。\n蝉の声がうるさかったあの夏の日、僕らは秘密基地を作った。",
      image: "",
      color: "bg-[#ffebee]",
      border: "border-[#ef9a9a]",
      tape: "bg-[#90caf9]"
    },

    "3": {
      title: "AUTUMN_WALK",
      author: "秋山 楓",
      note: "#2026_OCTOBER",
      description: "カサカサと鳴る落ち葉の音。\nポケットいっぱいに詰め込んだドングリと、冷たくなり始めた風。",
      image: "",
      color: "bg-[#fff3e0]",
      border: "border-[#ffb74d]",
      tape: "bg-[#d7ccc8]"
    },

    "4": {
      title: "WINTER_SNOW",
      author: "冬木 雪乃",
      note: "#2026_DECEMBER",
      description: "世界が白く染まった朝。\n息を白くさせながら作った雪だるまと、温かいスープの記憶。",
      image: "",
      color: "bg-[#e8eaf6]",
      border: "border-[#7986cb]",
      tape: "bg-[#b2dfdb]"
    },

    "5": {
      title: "SPRING_START",
      author: "春野 さくら",
      note: "#2027_APRIL",
      description: "新しいノート、新しい靴。\n桜の花びらが舞う通学路で、また新しい季節が始まる。",
      image: "",
      color: "bg-[#fce4ec]",
      border: "border-[#f48fb1]",
      tape: "bg-[#c5e1a5]"
    },

    "6": {
      title: "SECRET_BASE",
      author: "冒険 太郎",
      note: "#UNKNOWN_PLACE",
      description: "大人には内緒の場所。\nガラクタを集めて作った僕たちの城には、まだ宝物が眠っている。",
      image: "",
      color: "bg-[#d7ccc8]",
      border: "border-[#8d6e63]",
      tape: "bg-[#cfd8dc]"
    },

    "7": {
      title: "AFTER_SCHOOL",
      author: "夕暮 茜",
      note: "#CLASSROOM_3B",
      description: "チャイムが鳴った後の静けさ。\n夕日に照らされた廊下と、黒板に残された落書き。",
      image: "",
      color: "bg-[#e0f2f1]",
      border: "border-[#4db6ac]",
      tape: "bg-[#ffccbc]"
    },

    "8": {
      title: "FAMILY_TRIP",
      author: "旅田 遊",
      note: "#2026_SUMMER",
      description: "初めての飛行機、見たことのない景色。\nお土産選びに迷った時間も、今では大切な思い出。",
      image: "",
      color: "bg-[#e3f2fd]",
      border: "border-[#64b5f6]",
      tape: "bg-[#ffab91]"
    },

    "9": {
      title: "FESTIVAL_NIGHT",
      author: "祭 縁",
      note: "#LOCAL_SHRINE",
      description: "太鼓の音と屋台の匂い。\n浴衣で歩きにくかった砂利道と、夜空に咲いた大輪の花。",
      image: "",
      color: "bg-[#ffebee]",
      border: "border-[#e57373]",
      tape: "bg-[#81d4fa]"
    },

    "10": {
      title: "MY_BIRTHDAY",
      author: "祝 祝子",
      note: "#SPECIAL_DAY",
      description: "年に一度の特別な日。\nケーキのロウソクを吹き消した瞬間、ひとつ大人になった気がした。",
      image: "",
      color: "bg-[#e1bee7]",
      border: "border-[#ab47bc]",
      tape: "bg-[#ffe082]"
    },

    "11": {
      title: "RAINY_DAY",
      author: "雨宮 雫",
      note: "#JUNE_MEMORY",
      description: "長靴を履いて水たまりに飛び込んだ。\n紫陽花が綺麗だった梅雨の日の、静かな雨音。",
      image: "",
      color: "bg-[#e0f7fa]",
      border: "border-[#4dd0e1]",
      tape: "bg-[#9fa8da]"
    },

    "12": {
      title: "NIGHT_WALK",
      author: "月見 団子",
      note: "#MIDNIGHT",
      description: "塾の帰り道、いつもと違う景色。\n自動販売機の明かりが眩しかった夜の散歩道。",
      image: "",
      color: "bg-[#263238]",
      border: "border-[#546e7a]",
      tape: "bg-[#b0bec5]"
    },

    "13": {
      title: "FINAL_FRAGMENT",
      author: "未来 創",
      note: "#THE_END",
      description: "2026年、最後の日。\n未来の自分へ宛てた手紙と、タイムカプセルに込めた願い。",
      image: "",
      color: "bg-[#eceff1]",
      border: "border-[#b0bec5]",
      tape: "bg-[#ffcc80]"
    },

    "14": {
      title: "EARLY_BLOOM",
      author: "梅田 咲",
      note: "#FEBRUARY",
      description: "雪解け水と梅の香り。\n少しずつ春が近づいてくる気配を感じた日。",
      image: "",
      color: "bg-[#fce4ec]",
      border: "border-[#f06292]",
      tape: "bg-[#a5d6a7]"
    },

    "15": {
      title: "DEPARTURE",
      author: "旅立ち 健太",
      note: "#MARCH_FAREWELL",
      description: "卒業式の朝、教室の窓から見た景色。\n別れと出会いが交差する、忘れられない一日。",
      image: "",
      color: "bg-[#fff3e0]",
      border: "border-[#ffb74d]",
      tape: "bg-[#90caf9]"
    }
  };
  // ■■■■■ 編集エリアここまで ■■■■■


  const currentData = shoesData[id] || shoesData["1"];

  if (!mounted) return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        [data-nextjs-dialog-overlay], 
        #nextjs-error-overlay,
        nextjs-portal,
        div[class*="nextjs-toast-errors-parent"] {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          pointer-events: none !important;
          z-index: -9999 !important;
          width: 0 !important;
          height: 0 !important;
          position: absolute !important;
          top: -9999px !important;
          left: -9999px !important;
        }
      `}} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        translate="no"
        suppressHydrationWarning={true}
        className="relative w-full h-screen bg-[#f4f1ea] flex justify-center font-sans select-none overflow-hidden"
      >
        {/* 背景テクスチャ */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cardboard.png')] mix-blend-multiply" />
        
        {/* 箱の縁 (z-50で最前面) */}
        <div className="absolute inset-0 border-[16px] md:border-[24px] border-[#c0b8a8] rounded-xl pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.2)] z-50" />

        {/* 戻るボタン (z-60で縁より上) */}
        <motion.button
          onClick={() => window.history.back()}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.1, rotate: -3 }}
          whileTap={{ scale: 0.95 }}
          className="absolute top-6 left-6 md:top-8 md:left-8 z-[60] bg-[#fff9c4] border-2 border-[#fbc02d] text-[#5a6c7c] px-3 py-1 md:px-4 md:py-2 rounded-sm shadow-md font-black tracking-wider flex items-center gap-2 cursor-pointer rotate-2 hover:bg-[#fffde7] transition-colors text-sm md:text-base"
        >
          <span className="text-lg md:text-xl font-bold">←</span> RETURN
        </motion.button>

        {/* スクロール可能なメインエリア */}
        <div className="absolute inset-0 w-full h-full overflow-y-auto overflow-x-hidden z-40">
          
          <div className="w-full min-h-full flex flex-col items-center justify-start pt-24 pb-20 px-6 md:justify-center md:pt-0 md:pb-0">
            
            {/* タイトル */}
            <motion.div 
              initial={{ y: -50, rotate: -2 }}
              animate={{ y: 0, rotate: -2 }}
              className="mb-8 md:mb-10"
            >
              <div className="bg-[#ffebcd] px-8 py-2 md:px-12 md:py-3 shadow-md transform -skew-x-12 border-l-4 border-r-4 border-[#ffebcd]/50 relative">
                <div className="absolute left-[-10px] top-1/2 -translate-y-1/2 w-4 h-8 bg-[#e0d0b0] opacity-50" />
                <div className="absolute right-[-10px] top-1/2 -translate-y-1/2 w-4 h-8 bg-[#e0d0b0] opacity-50" />
                <h1 className="text-[#5a6c7c] text-2xl md:text-4xl font-black tracking-widest italic transform skew-x-12 uppercase">
                  {currentData.title}
                </h1>
              </div>
            </motion.div>

            {/* コンテンツレイアウト (スマホ:縦並び / PC:横並び) */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-5xl">
              
              {/* メイン画像（横長） */}
              <motion.div
                initial={{ scale: 0.9, rotate: -2, opacity: 0 }}
                animate={{ scale: 1, rotate: -2, opacity: 1 }}
                transition={{ delay: 0.1, type: "spring" }}
                className="relative w-full md:w-[60%] aspect-[16/9] bg-white p-3 shadow-xl transform"
              >
                {/* テープ留め */}
                <div className={`absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 ${currentData.tape || "bg-gray-300"} opacity-80 rotate-1 shadow-sm z-10`} />
                
                <div className={`w-full h-full ${currentData.color || "bg-gray-100"} border-2 border-dashed ${currentData.border || "border-gray-300"} flex items-center justify-center relative overflow-hidden`}>
                   {currentData.image ? (
                     <img src={currentData.image} alt={currentData.title} className="w-full h-full object-cover" />
                   ) : (
                     <div className="flex flex-col items-center justify-center opacity-40">
                       <span className="text-4xl mb-2">📷</span>
                       <span className={`font-bold text-xs ${currentData.border?.replace("border-", "text-") || "text-gray-400"}`}>NO IMAGE</span>
                     </div>
                   )}
                </div>
              </motion.div>

              {/* 詳細情報（名前・概要） */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="w-full md:w-[35%] bg-white border-l-4 border-gray-200 p-6 shadow-lg rotate-1 relative min-h-[200px] flex flex-col"
              >
                {/* ノートの穴 */}
                <div className="absolute top-4 -left-2 w-4 h-4 rounded-full bg-[#f4f1ea] shadow-inner border border-gray-300" />
                <div className="absolute top-12 -left-2 w-4 h-4 rounded-full bg-[#f4f1ea] shadow-inner border border-gray-300" />
                <div className="absolute top-20 -left-2 w-4 h-4 rounded-full bg-[#f4f1ea] shadow-inner border border-gray-300" />

                {/* 制作者名 */}
                <div className="border-b-2 border-dashed border-gray-300 pb-2 mb-4">
                  <span className="text-[10px] text-gray-400 font-bold block mb-1">AUTHOR</span>
                  <h2 className="text-[#5a6c7c] text-lg md:text-xl font-black tracking-wide">
                    {currentData.author}
                  </h2>
                </div>

                {/* 概要 */}
                <div className="flex-1">
                  <span className="text-[10px] text-gray-400 font-bold block mb-2">DESCRIPTION</span>
                  <p className="text-[#5a6c7c] text-sm leading-relaxed font-medium whitespace-pre-line">
                    {currentData.description}
                  </p>
                </div>

                {/* フッター */}
                <div className="mt-4 pt-2 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-[10px] text-gray-400 font-mono">{currentData.note}</span>
                  <div className={`px-2 py-1 ${currentData.color || "bg-gray-100"} rounded text-[10px] font-bold text-gray-600 border ${currentData.border || "border-gray-300"}`}>
                    ID: {id.padStart(3, '0')}
                  </div>
                </div>
              </motion.div>

            </div>

            {/* 背景の賑やかし */}
            <div className="absolute top-20 left-10 w-20 h-20 border-4 border-dashed border-pink-200 rounded-full opacity-30 animate-spin-slow pointer-events-none" />
            <div className="absolute bottom-10 right-10 text-8xl text-blue-200 opacity-10 rotate-12 select-none pointer-events-none">●</div>
          </div>
        </div>
      </motion.div>
    </>
  );
}