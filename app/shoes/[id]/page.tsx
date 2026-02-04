"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * 展示詳細ページ
 * - エラー修正: params が undefined の場合のガード処理を追加
 * - コンテンツ: 13種類の思い出データを搭載
 * - ★更新: ラベル表記を全ページ共通の「No.01, No.02, No.03」に統一しました
 */
export default function ShoeDetailPage(props: any) {
  // paramsが存在しない場合のエラー回避
  const params = props.params || {};
  const id = params.id || "1";
  
  // Hydrationエラー対策
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // ■■■■■ ここから下を編集してページを増やします ■■■■■
  // case: "No.01" のように統一しました。
  // image: 画像URL (例: "/images/photo1.jpg")
  const shoesData: Record<string, any> = {
    
    // === ID: 1 (記憶の始まり) ===
    "1": {
      title: "RE:MEMORIA",
      note: "#2026_ARCHIVE", 
      description: "靴箱の中から見つかった「あの頃」の記憶。整理されずに放り込まれた宝物たちを、そのままの形で展示しました。",
      items: [
        { 
          id: "c1-1", case: "No.01", caption: "始まりの場所", // ★表記を統一
          image: "", // 画像URL
          bg: "bg-[#e3f2fd]", border: "border-[#8bbdd9]", text: "text-[#5a6c7c]", tape: "bg-[#ffadad]",
          rotate: -6 
        },
        { 
          id: "c1-2", case: "No.02", caption: "大切な宝物",
          image: "", 
          bg: "bg-[#fff9c4]", border: "border-[#fbc02d]", text: "text-[#5a6c7c]", 
          isSpecial: true, rotate: 0 
        },
        { 
          id: "c1-3", case: "No.03", caption: "いつかの風景",
          image: "", 
          bg: "bg-[#e8f5e9]", border: "border-[#66bb6a]", text: "text-[#5a6c7c]", tape: "bg-[#a5d6a7]",
          rotate: 6 
        },
      ]
    },

    // === ID: 2 (夏の思い出) ===
    "2": {
      title: "SUMMER_LOG",
      note: "#2026_AUGUST",
      description: "突き抜けるような青空と、入道雲。蝉の声がうるさかったあの夏の日。",
      items: [
        { 
          id: "c2-1", case: "No.01", caption: "観察日記",
          image: "", 
          bg: "bg-[#ffebee]", border: "border-[#ef9a9a]", text: "text-[#8c5a5a]", tape: "bg-[#90caf9]",
          rotate: -8 
        },
        { 
          id: "c2-2", case: "No.02", caption: "秘密の夜",
          image: "", 
          bg: "bg-[#f3e5f5]", border: "border-[#ab47bc]", text: "text-[#6a1b9a]", 
          isSpecial: true, rotate: 2 
        },
        { 
          id: "c2-3", case: "No.03", caption: "溶けた記憶",
          image: "", 
          bg: "bg-[#e0f7fa]", border: "border-[#26c6da]", text: "text-[#006064]", tape: "bg-[#ffcc80]",
          rotate: 5 
        },
      ]
    },

    // === ID: 3 (秋の散歩) ===
    "3": {
      title: "AUTUMN_WALK",
      note: "#2026_OCTOBER",
      description: "カサカサと鳴る落ち葉の音。ポケットいっぱいに詰め込んだドングリ。",
      items: [
        { 
          id: "c3-1", case: "No.01", caption: "赤い葉っぱ",
          image: "",
          bg: "bg-[#fff3e0]", border: "border-[#ffb74d]", text: "text-[#e65100]", tape: "bg-[#d7ccc8]",
          rotate: -4 
        },
        { 
          id: "c3-2", case: "No.02", caption: "公園で発見",
          image: "",
          bg: "bg-[#efebe9]", border: "border-[#8d6e63]", text: "text-[#3e2723]", 
          isSpecial: true, rotate: 1 
        },
        { 
          id: "c3-3", case: "No.03", caption: "木枯らし",
          image: "",
          bg: "bg-[#eceff1]", border: "border-[#90a4ae]", text: "text-[#37474f]", tape: "bg-[#b0bec5]",
          rotate: 8 
        },
      ]
    },

    // === ID: 4 (雪の日) ===
    "4": {
      title: "WINTER_SNOW",
      note: "#2026_DECEMBER",
      description: "世界が白く染まった朝。息を白くさせながら作った雪だるま。",
      items: [
        { 
          id: "c4-1", case: "No.01", caption: "雪の結晶",
          image: "",
          bg: "bg-[#e8eaf6]", border: "border-[#7986cb]", text: "text-[#283593]", tape: "bg-[#b2dfdb]",
          rotate: 5 
        },
        { 
          id: "c4-2", case: "No.02", caption: "静かな夜",
          image: "",
          bg: "bg-[#f5f5f5]", border: "border-[#9e9e9e]", text: "text-[#424242]", 
          isSpecial: true, rotate: -2 
        },
        { 
          id: "c4-3", case: "No.03", caption: "温もり",
          image: "",
          bg: "bg-[#fffde7]", border: "border-[#fff176]", text: "text-[#f57f17]", tape: "bg-[#ffab91]",
          rotate: -6 
        },
      ]
    },

    // === ID: 5 (春の始まり) ===
    "5": {
      title: "SPRING_START",
      note: "#2027_APRIL",
      description: "新しいノート、新しい靴。桜の花びらが舞う通学路。",
      items: [
        { 
          id: "c5-1", case: "No.01", caption: "サクラサク",
          image: "",
          bg: "bg-[#fce4ec]", border: "border-[#f48fb1]", text: "text-[#880e4f]", tape: "bg-[#c5e1a5]",
          rotate: -5 
        },
        { 
          id: "c5-2", case: "No.02", caption: "1ページ目",
          image: "",
          bg: "bg-[#ffffff]", border: "border-[#9fa8da]", text: "text-[#283593]", 
          isSpecial: true, rotate: 3 
        },
        { 
          id: "c5-3", case: "No.03", caption: "春の訪れ",
          image: "",
          bg: "bg-[#f9fbe7]", border: "border-[#dce775]", text: "text-[#827717]", tape: "bg-[#ffcc80]",
          rotate: 7 
        },
      ]
    },

    // === ID: 6 (秘密基地) ===
    "6": {
      title: "SECRET_BASE",
      note: "#UNKNOWN_PLACE",
      description: "大人には内緒の場所。ガラクタを集めて作った僕たちの城。",
      items: [
        { 
          id: "c6-1", case: "No.01", caption: "宝の地図",
          image: "",
          bg: "bg-[#d7ccc8]", border: "border-[#8d6e63]", text: "text-[#3e2723]", tape: "bg-[#cfd8dc]",
          rotate: 10 
        },
        { 
          id: "c6-2", case: "No.02", caption: "開けるな危険",
          image: "",
          bg: "bg-[#212121]", border: "border-[#000000]", text: "text-[#ffeb3b]", 
          isSpecial: true, rotate: 0 
        },
        { 
          id: "c6-3", case: "No.03", caption: "探検隊",
          image: "",
          bg: "bg-[#fff9c4]", border: "border-[#fbc02d]", text: "text-[#f57f17]", tape: "bg-[#8d6e63]",
          rotate: -9 
        },
      ]
    },

    // === ID: 7 (放課後) ===
    "7": {
      title: "AFTER_SCHOOL",
      note: "#CLASSROOM_3B",
      description: "チャイムが鳴った後の静けさ。夕日に照らされた廊下。",
      items: [
        { 
          id: "c7-1", case: "No.01", caption: "日直当番",
          image: "",
          bg: "bg-[#e0f2f1]", border: "border-[#4db6ac]", text: "text-[#004d40]", tape: "bg-[#ffccbc]",
          rotate: -3 
        },
        { 
          id: "c7-2", case: "No.02", caption: "落とし物",
          image: "",
          bg: "bg-[#ffffff]", border: "border-[#b0bec5]", text: "text-[#546e7a]", 
          isSpecial: true, rotate: 4 
        },
        { 
          id: "c7-3", case: "No.03", caption: "帰り道",
          image: "",
          bg: "bg-[#ffe0b2]", border: "border-[#ffb74d]", text: "text-[#e65100]", tape: "bg-[#80cbc4]",
          rotate: -6 
        },
      ]
    },

    // === ID: 8 (家族旅行) ===
    "8": {
      title: "FAMILY_TRIP",
      note: "#2026_SUMMER",
      description: "初めての飛行機、見たことのない景色。お土産選びに迷った時間。",
      items: [
        { 
          id: "c8-1", case: "No.01", caption: "搭乗券",
          image: "",
          bg: "bg-[#e3f2fd]", border: "border-[#64b5f6]", text: "text-[#1565c0]", tape: "bg-[#ffab91]",
          rotate: 6 
        },
        { 
          id: "c8-2", case: "No.02", caption: "友達へ",
          image: "",
          bg: "bg-[#f3e5f5]", border: "border-[#ba68c8]", text: "text-[#7b1fa2]", 
          isSpecial: true, rotate: -2 
        },
        { 
          id: "c8-3", case: "No.03", caption: "旅の記録",
          image: "",
          bg: "bg-[#fff3e0]", border: "border-[#ffb74d]", text: "text-[#e65100]", tape: "bg-[#90caf9]",
          rotate: 4 
        },
      ]
    },

    // === ID: 9 (夜のお祭り) ===
    "9": {
      title: "FESTIVAL_NIGHT",
      note: "#LOCAL_SHRINE",
      description: "太鼓の音と屋台の匂い。浴衣で歩きにくかった砂利道。",
      items: [
        { 
          id: "c9-1", case: "No.01", caption: "金魚すくい",
          image: "",
          bg: "bg-[#ffebee]", border: "border-[#e57373]", text: "text-[#c62828]", tape: "bg-[#81d4fa]",
          rotate: -7 
        },
        { 
          id: "c9-2", case: "No.02", caption: "最後の花火",
          image: "",
          bg: "bg-[#311b92]", border: "border-[#673ab7]", text: "text-[#ede7f6]", 
          isSpecial: true, rotate: 0 
        },
        { 
          id: "c9-3", case: "No.03", caption: "わたあめ",
          image: "",
          bg: "bg-[#fce4ec]", border: "border-[#f06292]", text: "text-[#880e4f]", tape: "bg-[#fff59d]",
          rotate: 8 
        },
      ]
    },

    // === ID: 10 (誕生日) ===
    "10": {
      title: "MY_BIRTHDAY",
      note: "#SPECIAL_DAY",
      description: "年に一度の特別な日。ケーキのロウソクを吹き消した瞬間。",
      items: [
        { 
          id: "c10-1", case: "No.01", caption: "プレゼント",
          image: "",
          bg: "bg-[#e1bee7]", border: "border-[#ab47bc]", text: "text-[#7b1fa2]", tape: "bg-[#ffe082]",
          rotate: 5 
        },
        { 
          id: "c10-2", case: "No.02", caption: "母からの手紙",
          image: "",
          bg: "bg-[#ffffff]", border: "border-[#ffeb3b]", text: "text-[#fbc02d]", 
          isSpecial: true, rotate: -3 
        },
        { 
          id: "c10-3", case: "No.03", caption: "12歳",
          image: "",
          bg: "bg-[#ffebee]", border: "border-[#ff8a80]", text: "text-[#d50000]", tape: "bg-[#ce93d8]",
          rotate: 2 
        },
      ]
    },

    // === ID: 11 (雨の日) ===
    "11": {
      title: "RAINY_DAY",
      note: "#JUNE_MEMORY",
      description: "長靴を履いて水たまりに飛び込んだ。紫陽花が綺麗だった梅雨。",
      items: [
        { 
          id: "c11-1", case: "No.01", caption: "お気に入りの傘",
          image: "",
          bg: "bg-[#e0f7fa]", border: "border-[#4dd0e1]", text: "text-[#00838f]", tape: "bg-[#9fa8da]",
          rotate: -5 
        },
        { 
          id: "c11-2", case: "No.02", caption: "紫の花",
          image: "",
          bg: "bg-[#f3e5f5]", border: "border-[#ce93d8]", text: "text-[#8e24aa]", 
          isSpecial: true, rotate: 4 
        },
        { 
          id: "c11-3", case: "No.03", caption: "水たまり",
          image: "",
          bg: "bg-[#e3f2fd]", border: "border-[#64b5f6]", text: "text-[#1565c0]", tape: "bg-[#80cbc4]",
          rotate: -2 
        },
      ]
    },

    // === ID: 12 (夜の探検) ===
    "12": {
      title: "NIGHT_WALK",
      note: "#MIDNIGHT",
      description: "塾の帰り道、いつもと違う景色。自動販売機の明かりが眩しかった。",
      items: [
        { 
          id: "c12-1", case: "No.01", caption: "月明かり",
          image: "",
          bg: "bg-[#263238]", border: "border-[#546e7a]", text: "text-[#eceff1]", tape: "bg-[#b0bec5]",
          rotate: 8 
        },
        { 
          id: "c12-2", case: "No.02", caption: "光る眼",
          image: "",
          bg: "bg-[#212121]", border: "border-[#ffd600]", text: "text-[#ffff00]", 
          isSpecial: true, rotate: -4 
        },
        { 
          id: "c12-3", case: "No.03", caption: "120円",
          image: "",
          bg: "bg-[#e0f7fa]", border: "border-[#00bcd4]", text: "text-[#006064]", tape: "bg-[#78909c]",
          rotate: 3 
        },
      ]
    },

    // === ID: 13 (最後の記憶) ===
    "13": {
      title: "FINAL_FRAGMENT",
      note: "#THE_END",
      description: "2026年、最後の日。未来の自分へ宛てた手紙と、タイムカプセル。",
      items: [
        { 
          id: "c13-1", case: "No.01", caption: "埋めた場所",
          image: "",
          bg: "bg-[#eceff1]", border: "border-[#b0bec5]", text: "text-[#546e7a]", tape: "bg-[#ffcc80]",
          rotate: 0 
        },
        { 
          id: "c13-2", case: "No.02", caption: "未来の僕へ",
          image: "",
          bg: "bg-[#fff3e0]", border: "border-[#ffcc80]", text: "text-[#ef6c00]", 
          isSpecial: true, rotate: 0 
        },
        { 
          id: "c13-3", case: "No.03", caption: "約束の鍵",
          image: "",
          bg: "bg-[#fffde7]", border: "border-[#fff59d]", text: "text-[#fbc02d]", tape: "bg-[#bcaaa4]",
          rotate: 0 
        },
      ]
    }
  };
  // ■■■■■ 編集エリアここまで ■■■■■


  // 該当するIDのデータがない場合は、ID="1" のデータをデフォルトとして使う
  const currentData = shoesData[id] || shoesData["1"];
  const items = currentData.items;

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
        className="relative w-full h-screen bg-[#f4f1ea] flex items-center justify-center overflow-hidden font-sans select-none"
      >
        {/* 背景テクスチャ */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cardboard.png')] mix-blend-multiply" />
        
        {/* 箱の縁 */}
        <div className="absolute inset-0 border-[24px] border-[#c0b8a8] rounded-xl pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.2)] z-50" />

        {/* 戻るボタン */}
        <motion.button
          onClick={() => window.history.back()}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.1, rotate: -3 }}
          whileTap={{ scale: 0.95 }}
          className="absolute top-8 left-8 z-[60] bg-[#fff9c4] border-2 border-[#fbc02d] text-[#5a6c7c] px-4 py-2 rounded-sm shadow-md font-black tracking-wider flex items-center gap-2 cursor-pointer rotate-2 hover:bg-[#fffde7] transition-colors"
        >
          <span className="text-xl font-bold">←</span> RETURN
        </motion.button>

        {/* メインエリア */}
        <div className="relative w-full h-full max-w-6xl mx-auto flex flex-col items-center justify-center p-8">
          
          {/* タイトル */}
          <motion.div 
            initial={{ y: -50, rotate: -2 }}
            animate={{ y: 0, rotate: -2 }}
            className="absolute top-12 z-20"
          >
            <div className="bg-[#ffebcd] px-12 py-3 shadow-md transform -skew-x-12 border-l-4 border-r-4 border-[#ffebcd]/50 relative">
              <div className="absolute left-[-10px] top-1/2 -translate-y-1/2 w-4 h-8 bg-[#e0d0b0] opacity-50" />
              <div className="absolute right-[-10px] top-1/2 -translate-y-1/2 w-4 h-8 bg-[#e0d0b0] opacity-50" />
              <h1 className="text-[#5a6c7c] text-4xl font-black tracking-widest italic transform skew-x-12 uppercase">
                {currentData.title}
              </h1>
            </div>
          </motion.div>

          {/* パネル配置エリア */}
          <div className="relative w-full h-[60vh] flex items-center justify-center mt-10">
            
            {/* Panel 1 (Left) */}
            <motion.div
              initial={{ x: -100, rotate: -10, opacity: 0 }}
              animate={{ x: -20, rotate: items[0].rotate, opacity: 1 }}
              transition={{ delay: 0.1, type: "spring" }}
              whileHover={{ scale: 1.05, rotate: items[0].rotate - 2, zIndex: 10 }}
              className="absolute left-[5%] md:left-[10%] w-[28vw] max-w-[300px] aspect-[3/4] bg-white p-3 shadow-xl transform origin-bottom-left"
            >
              <div className={`absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 ${items[0].tape} opacity-80 rotate-2 shadow-sm`} />
              
              <div className={`w-full h-full ${items[0].bg} border-2 border-dashed ${items[0].border} flex flex-col p-4 relative overflow-hidden`}>
                 <div className={`flex-1 flex items-center justify-center bg-white/60 border ${items[0].border.replace('border-', 'border-')}/30 relative overflow-hidden`}>
                   {items[0].image ? (
                     <img src={items[0].image} alt={items[0].caption} className="w-full h-full object-cover" />
                   ) : (
                     <span className={`${items[0].border.replace('border-', 'text-')} font-bold text-xs rotate-45 opacity-50`}>NO IMAGE</span>
                   )}
                 </div>
                 <div className={`mt-2 h-auto flex flex-col justify-between border-t-2 ${items[0].border} pt-1`}>
                   <div className="flex justify-between items-center">
                     <span className={`${items[0].text} font-black text-xs`}>{items[0].case}</span>
                     <div className={`w-3 h-3 rounded-full ${items[0].border.replace('border-', 'bg-')}`} />
                   </div>
                   <p className={`${items[0].text} text-[10px] font-bold mt-1`}>{items[0].caption}</p>
                 </div>
              </div>
            </motion.div>

            {/* Panel 2 (Center - Special) */}
            <motion.div
              initial={{ y: 50, rotate: 2, opacity: 0 }}
              animate={{ y: 0, rotate: items[1].rotate, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
              className="absolute z-10 w-[32vw] max-w-[340px] aspect-[3/4] bg-white p-3 shadow-2xl"
            >
              <div className="absolute -top-4 right-10 w-4 h-12 bg-gray-400 rounded-full border-2 border-gray-500" />
              
              <div className={`w-full h-full ${items[1].bg} border-2 ${items[1].border} flex flex-col p-5 relative`}>
                 <div className={`flex-1 flex items-center justify-center bg-white border ${items[1].border.replace('border-', 'border-')}/30 shadow-inner relative overflow-hidden`}>
                   {items[1].image ? (
                     <img src={items[1].image} alt={items[1].caption} className="w-full h-full object-cover" />
                   ) : (
                     <span className={`${items[1].border.replace('border-', 'text-')} font-bold text-xs -rotate-12 opacity-50`}>SECRET</span>
                   )}
                 </div>
                 <div className={`mt-3 text-center border-t-2 ${items[1].border} pt-2`}>
                   <h2 className={`${items[1].text} font-black text-lg leading-none`}>{items[1].case}</h2>
                   <p className={`text-[10px] ${items[1].text} mt-1`}>{items[1].caption}</p>
                 </div>
              </div>
            </motion.div>

            {/* Panel 3 (Right) */}
            <motion.div
              initial={{ x: 100, rotate: 10, opacity: 0 }}
              animate={{ x: 20, rotate: items[2].rotate, opacity: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              whileHover={{ scale: 1.05, rotate: items[2].rotate + 2, zIndex: 10 }}
              className="absolute right-[5%] md:right-[10%] w-[28vw] max-w-[300px] aspect-[3/4] bg-white p-3 shadow-xl transform origin-bottom-right"
            >
              <div className={`absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 ${items[2].tape} opacity-80 -rotate-2 shadow-sm`} />

              <div className={`w-full h-full ${items[2].bg} border-2 border-dashed ${items[2].border} flex flex-col p-4`}>
                 <div className={`flex-1 flex items-center justify-center bg-white/60 border ${items[2].border.replace('border-', 'border-')}/30 relative overflow-hidden`}>
                   {items[2].image ? (
                     <img src={items[2].image} alt={items[2].caption} className="w-full h-full object-cover" />
                   ) : (
                     <span className={`${items[2].border.replace('border-', 'text-')} font-bold text-xs -rotate-45 opacity-50`}>NO IMAGE</span>
                   )}
                 </div>
                 <div className={`mt-2 h-auto flex flex-col justify-between border-t-2 ${items[2].border} pt-1`}>
                   <div className="flex justify-between items-center">
                     <span className={`${items[2].text} font-black text-xs`}>{items[2].case}</span>
                     <div className={`w-3 h-3 rounded-full ${items[2].border.replace('border-', 'bg-')}`} />
                   </div>
                   <p className={`${items[2].text} text-[10px] font-bold mt-1`}>{items[2].caption}</p>
                 </div>
              </div>
            </motion.div>
          </div>

          {/* 下部のアイテム群 */}
          <div className="absolute bottom-8 w-full px-12 flex justify-between items-end pointer-events-none">
            
            {/* 説明文ノート */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="w-[320px] bg-white border border-gray-200 p-6 shadow-lg rotate-[-3deg] pointer-events-auto relative"
            >
              <div className="absolute top-[-10px] left-4 w-4 h-4 rounded-full bg-[#f4f1ea] shadow-inner border border-gray-300" />
              <div className="absolute top-[-10px] left-12 w-4 h-4 rounded-full bg-[#f4f1ea] shadow-inner border border-gray-300" />
              
              <h3 className="text-pink-500 font-bold text-xs mb-2 flex items-center">
                <span className="inline-block w-2 h-2 bg-pink-500 rounded-full mr-2" />
                EXHIBITION NOTES
              </h3>
              <p className="text-[#5a6c7c] text-xs leading-relaxed font-medium whitespace-pre-line">
                {currentData.description || "靴箱の中から見つかった「あの頃」の記憶。整理されずに放り込まれた宝物たちを、そのままの形で展示しました。"}
                <br/>
                <span className="text-[10px] text-gray-400 mt-2 block text-right">{currentData.note}</span>
              </p>
            </motion.div>

            {/* IDタグなどの小物 */}
            <div className="flex items-center gap-6 pointer-events-auto">
              <motion.div 
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="bg-[#fff176] px-4 py-2 border-2 border-[#fbc02d] shadow-md rotate-6 rounded-sm"
              >
                <span className="text-[#5a6c7c] font-black text-sm tracking-widest">BOX_{id.padStart(3, '0')}</span>
              </motion.div>

              <motion.div 
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 rounded-full bg-white border-4 border-[#ffab91] flex items-center justify-center shadow-lg"
              >
                 <div className="text-[#ffab91] text-2xl">★</div>
              </motion.div>
            </div>
          </div>

          {/* 背景の賑やかし */}
          <div className="absolute top-20 left-10 w-20 h-20 border-4 border-dashed border-pink-200 rounded-full opacity-30 animate-spin-slow" />
          <div className="absolute top-1/2 right-10 text-6xl text-blue-200 opacity-20 rotate-12 select-none">●</div>
          <div className="absolute bottom-20 left-1/3 w-10 h-10 bg-green-200 rotate-45 opacity-40 rounded-sm" />
        </div>
      </motion.div>
    </>
  );
}