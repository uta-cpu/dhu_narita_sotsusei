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
      title: "犬猫",
      author: "犬猫チーム",
      note: "#2026_ARCHIVE",
      description: "保護犬猫活動",
      image: "", 
      color: "bg-[#e3f2fd]", 
      border: "border-[#8bbdd9]",
      tape: "bg-[#ffadad]"
    },

    "2": {
      title: "BLOOM LAB",
      author: "BLOOM LAB",
      note: "#2026_AUGUST",
      description: "突き抜けるような青空と、入道雲。\n蝉の声がうるさかったあの夏の日、僕らは秘密基地を作った。",
      image: "",
      color: "bg-[#ffebee]",
      border: "border-[#ef9a9a]",
      tape: "bg-[#90caf9]"
    },

    "3": {
      title: "初心者向けのCS2！",
      author: "Chan Anson",
      note: "#2026_OCTOBER",
      description: "この3本の動画は、Counter-Strike 2を始めたばかりの初心者が「何を意識すれば上達できるか」を理解するために作っています。\nCS2はエイムだけのゲームではありません。\n\n正しい動き方・撃ち方・考え方を知るだけで、誰でも安定して強くなれます。初心者のうちに間違った癖がつくと、あとから直すのはとても大変です。\n\n初心者が一番つまずきやすいのが「動きながら撃つ」ことです。\nこの動画では、「いつ走るべきか、いつ歩くべきか」、「なぜ止まらないと弾が当たらないのか」、「敵が出てくる前に、どこにクロスヘアを置くべきか」を感覚ではなく、理由付きで解説しています。\n\nだからこそこのチャンネルでは、「エイム練習の前に知るべき基礎」を大切にしています。\n\nさらに、スモーク・フラッシュ・モロトフといったユーティリティを正しく使うことで、撃ち合いが苦手でも試合に大きく貢献できます。初心者のうちに正しい考え方を学ぶことで、無駄な癖をつけず、安定して成長できるようになります。\n\nこの3本を理解できれば、CS2の見え方・考え方が必ず変わります。",
      image: "CS2.png",
      color: "bg-[#fff3e0]",
      border: "border-[#ffb74d]",
      tape: "bg-[#d7ccc8]"
    },

    "4": {
      title: "届ける、ひとさじの勇気",
      author: "KIM JOHAN",
      note: "#2026_DECEMBER",
      description: "本作品は、繰り返されるオーディションの落選で夢を見失いかけていた声優志望生が、オーディオプラットフォーム「Spoon」を通じて「声」の真の価値を再発見し、再び前を向く姿を描いたブランドストーリー型広告である。\n\n主人公・Aの部屋には、熾烈な努力の跡が刻まれた台本が山積している。しかし現実は、無機質な不合格通知と、夢を叶えていく周囲への焦燥感で溢れている。誰にも届かない練習はただの「独り言」に過ぎず、彼女の情熱は暗い部屋の中で行き場を失っていた。\n\n絶望の淵に立たされたある夜、友人から「Spoonで自分だけのファンができた」という知らせが届く。その言葉に背中を押され、彼女は「Spoon」という新たな舞台に足を踏み入れる。プロの選考基準に縛られるのではなく、ただ自分の声を必要とするリスナーに向けて言葉を紡ぎ始めた瞬間、独り言だった彼女の練習は「誰かへの癒やし」へと変貌する。\n\n本作は、「誰でも、どこでも、声一つで主役になれる」というSpoonならではのサービス価値を強調する。声を届けるという行為が、リスナーに安らぎを与えるだけでなく、配信者自身の不安を拭い去り、明日への原動力になるという相互の感情的価値（Emotional Value）を提示する。",
      image: "spoon.png",
      color: "bg-[#e8eaf6]",
      border: "border-[#7986cb]",
      tape: "bg-[#b2dfdb]"
    },

    "5": {
      title: "「それでも私は、今日を生きる」",
      author: "Kong Lok Yin",
      note: "#2027_APRIL",
      description: "本作は、「断ることができない」性格を抱えた女性・美夢が、自分の意思を言葉にするまでの心の変化を描いた短編アニメーションである。\n\n元カレとの関係や職場での出来事をきっかけに、自分の気持ちを後回しにする癖を強めていった美夢。そんな美夢の前に現れるのが、レンタル彼氏として出会った晴斗である。晴斗との「断る練習」を通して、美夢は、自分の感情を言葉にすること、嫌だと感じた気持ちを否定しないことを少しずつ学んでいく。そんな時、母に見合いを押し付けられた。\n\n母の勧めによって見合いに応じた美夢は、相手に悪意も不快感もないまま関係を進めてしまう。相手を傷つけたくない、空気を壊したくないという思いから、本心を飲み込み続ける彼女は、いつしか「自分がどうしたいのか」さえ分からなくなっていく。遊園地でのデートや日常の小さな選択を重ねる中で、美夢は「相手に合わせる優しさ」と「自分を犠牲にすること」は違うのだと気づいていく。\n\nそして最後に、はじめて自分の言葉で告白を断ることで、誰かに依存せず、自分の足で前に進む決意を固める。本作は、派手なドラマではなく、心の奥で起きる静かな葛藤と成長を丁寧に描き、「自分の人生を自分で選ぶこと」の大切さを問いかける物語である。",
      image: "kong.png",
      color: "bg-[#fce4ec]",
      border: "border-[#f48fb1]",
      tape: "bg-[#c5e1a5]"
    },

    "6": {
      title: "日本の美（学生）",
      author: "Oh jiyun",
      note: "#2027_APRIL",
      description: "本作品は、現代の日本社会が暗黙のうちに要求する「学生らしさ」と、画一化された「美しさ」の歪みを展示形式で視覚化した試みである。中心に据えられたハート型のフレームは、本来であれば愛や保護、純粋さの象徴とされるものだ。しかしここでは、あふれるはずの感情を一定の規格に押し込め、美しく陳列するための冷徹な枠組みとして機能している。\n\nそのフレームの中でうずくまる生徒の姿は、一見すると安らかな休息のようにも映るが、実際には身動きを封じられた「停止」の状態にある。そして、その様子を無機質に見下ろすマネキンの顔は、個としての性質を徹底的に排除した日本的な美の理想像そのものである。\n\nこの展示空間において、学生は血の通った生身の人間ではなく、社会の理想を具現化した「美しい学生像」という名の標本として扱われる。鑑賞者はこの作品を通じて、守られているはずの「純粋さ」が、実は自由を奪う装置として機能している矛盾を突きつけられることになる。個性や感性が記号化され、美しさという檻の中に閉じ込められる学生たちの孤独と、それを強いる社会の無言の圧力を改めて問い直したい。",
      image: "beautiful.png",
      color: "bg-[#fce4ec]",
      border: "border-[#f48fb1]",
      tape: "bg-[#c5e1a5]"
    },

    "7": {
      title: "ことばのかたち",
      author: "佐藤ほのか",
      note: "#UNKNOWN_PLACE",
      description: "本作品は、私が大学4年間の中で出会い、心に深く残った言葉や学びを「作字」という表現を通して可視化した卒業制作です。人は日々多くの言葉に触れていますが、すべてが心に残るわけではありません。その中で、迷いや不安の中にあった私を支えたり、考え方や行動を静かに変えてきた言葉が確かに存在していました。本制作では、それらの言葉を40個選び、一つひとつに当時の感情や思考の揺らぎを重ねながら作字を行っています。\n\n作字においては、整った美しさだけでなく、線の強弱や崩れ、余白を意識し、言葉が持つ感情の温度や時間の経過を表現しました。完成された文字ではなく、揺れや未完成さを含んだ文字にすることで、言葉が生きていた瞬間の記憶を残しています。\n\n最終的に、この40の作字はオリジナルの缶ボトルに展開されます。展示空間の中で鑑賞されるだけでなく、日常の中で使われ、手に取られることで、言葉が再び生活の一部になることを目指しました。誰かの何気ない一日の中で、この言葉がふと目に入り、立ち止まるきっかけや小さな支えとなれば嬉しく思います。この作品は私自身の4年間の記録であると同時に、受け取る人それぞれの記憶や感情と重なり、意味を更新し続けていくものです。",
      image: "honoka.png",
      color: "bg-[#d7ccc8]",
      border: "border-[#8d6e63]",
      tape: "bg-[#cfd8dc]"
    },

    "8": {
      title: "若者のメンタルヘルスに関する考察ーうつ・適応障害と再発防止の可能性ー",
      author: "平中孝汰",
      note: "#CLASSROOM_3B",
      description: "本論文は、若者に多い「うつ病の再発」に着目し、その予防策を個人・周囲・社会の三つの視点から考察したものである。\n統計データや先行研究に加え、筆者自身の経験や身近な事例をもとに、再発しやすい要因と現実的な対策を整理した。\n\n特に、環境調整やセルフマネジメントの有効性だけでなく、金銭的・制度的制約によってそれらが実行しにくい若者の実情にも焦点を当てている。\n\n本研究を通して、再発防止は個人の努力だけに依存するものではなく、周囲の理解と社会的支援が連動することで初めて持続可能になることを示した。",
      image: "",
      color: "bg-[#e0f2f1]",
      border: "border-[#4db6ac]",
      tape: "bg-[#ffccbc]"
    },

    "9": {
      title: "生ハムと塩分のちょうどいい関係",
      author: "森田惠衣",
      note: "#2026_SUMMER",
      description: "本展示は、「塩分＝悪いもの」という固定観念を見直し、「美味しさと健康は両立できない」というあきらめを手放すこと、そして真面目で少し難しくなりがちな食の情報を、誰にでも伝わるかたちで分かりやすく届けること、この三つを主な目的として企画しました。\n\n塩分が高い食品として知られながらも、私自身が愛してやまない生ハムを題材に、“避ける”のではなく“ちょうどよく食べる”ためのアイデアを、情報展示やレシピ制作を通して提案します。「塩分＝我慢」というネガティブなイメージをくつがえし、工夫や選び方次第で、塩分とも上手に付き合えるという新たな選択肢があることに気づいてもらうことを目指しています。\n\n生ハムという身近で親しみやすい食材を通して、楽しさと健康のバランスを“自分ごと”として感じてもらい、日々の食生活を前向きに見つめ直すきっかけを持ち帰ってもらう。そのために「感性」と「クリエイティブ」を軸に、堅苦しくない、体験的な展示を構成しています。",
      image: "ham.png",
      color: "bg-[#e3f2fd]",
      border: "border-[#64b5f6]",
      tape: "bg-[#ffab91]"
    },

    "10": {
      title: "立体で編む世界",
      author: "上原悠玖",
      note: "#LOCAL_SHRINE",
      description: "本プロジェクトは、ホラーやダークファンタジーのキャラクターデザインにおいて、「生理的な嫌悪感（恐怖）」と「抗えない魅力（美しさ）」がいかに同居しうるかを探求・実証するものです。\n\n単なる3DCGデータの作成にとどまらず、3Dプリンターによる「フィジカル（実体化）」と、映像を用いた「シネマティック（物語性）」の双方からアプローチすることで、キャラクターの存在感を多角的に表現することを目的としています。",
      image: "yuku.png",
      color: "bg-[#ffebee]",
      border: "border-[#e57373]",
      tape: "bg-[#81d4fa]"
    },

    "11": {
      title: "RE:MEMORIA",
      author: "小沼詩奈 / 大嶋豪星",
      note: "#SPECIAL_DAY",
      description: "「正解」しかない世界で、君は「バグ」になる覚悟があるか。\n\n記憶を失った少年「ユウ」が目覚めたのは、争いも競争もない理想郷「ヒカリの村」。そこは、管理AI「ラルド」によって完璧に統率された、美しくも不気味な箱庭だった。\n案内人のミリア、世界の違和感を追うルナとテトとの出会いを通じ、ユウはこの世界が「不都合な感情を『エラー』として削除するシミュレーション空間」であることを知る。\n\n「正義とは、誰かが悪になる覚悟をすることだ」。そう語るラルドの冷徹な「倫理」に対し、ユウは傷つくことを恐れず、自分だけの「価値観」を武器に立ち向かう。\n崩壊する世界の中、自身の心の影（弱さ）を受け入れ、少年は再び現実の朝へと帰還する。管理された幸福よりも、痛みを伴う自由を選ぶために。これは、少年が「自分自身」を取り戻す物語。",
      image: "re_memoria.png",
      color: "bg-[#e1bee7]",
      border: "border-[#ab47bc]",
      tape: "bg-[#ffe082]"
    },

    "12": {
      title: "STAR REACH",
      author: "金子世俊",
      note: "#JUNE_MEMORY",
      description: "戦艦を指揮し、ポイントを集めながら惑星制圧を目指す戦略カードゲーム。\nプレイヤーは自らの艦隊と役割を見極め、限られた手番の中で最適な判断を下していく。1ターンに選べる行動は、ポイント獲得・攻撃・アイテム購入のいずれか一つのみ。\n\nHPの概念は存在せず、攻撃は敵艦を撃破するためではなく、行動不能にして相手のテンポを崩すための妨害手段として機能する。防御型の戦艦はポイントカードを犠牲にすることで行動不能を回避でき、サポート型は味方の行動不能を解除し戦線を立て直す役割を担う。\n\n攻撃力の高い戦艦ほど相手に重い選択とコストを強要できるが、それ自体が勝利に直結するわけではない。行動不能状態では惑星カードを獲得できず、攻めるべき瞬間と守るべき局面の見極めが勝敗を分ける。\nアイテムによって一時的に制限を突破し、状況を覆す逆転も可能となる。最適なタイミングで惑星を制圧したプレイヤーが勝者となる、判断力と読み合いが問われるゲームである。",
      image: "seshun.png",
      color: "bg-[#e0f7fa]",
      border: "border-[#4dd0e1]",
      tape: "bg-[#9fa8da]"
    },

    "13": {
      title: "NIGHT_WALK",
      author: "木下実咲",
      note: "#MIDNIGHT",
      description: "本稿は、「無断転載をやめればアニメーターは救われるのか」という疑問を起点に、日本のアニメ業界が抱える構造的課題を検討したものである。\n海外での無断転載の実態や業界関係者へのヒアリングを通じ、無断転載と低賃金問題が必ずしも直接的に結びつかないことが明らかとなった。\n\n背景には、製作委員会方式、多重下請け構造、そして「好きだから頑張る」文化といった業界特有の構造的要因が存在する。\n本稿では、問題の解決を個人の意識や消費行動に求めるのではなく、官民連携による制度整備と人材育成支援に着目し、アニメ制作会社が持続的に成長するためのモデルを提示する。",
      image: "anime.png",
      color: "bg-[#263238]",
      border: "border-[#546e7a]",
      tape: "bg-[#b0bec5]"
    },

    "14": {
      title: "「SNS時代におけるデジタルコンテンツ販売の可能性」",
      author: "山本晃輔",
      note: "#THE_END",
      description: "本研究は、SNSの普及によって変化したデジタルコンテンツの購買行動について、特に人間の感情や共感、習慣といった心理的要因に着目して考察するものである。\n従来の購買行動が利便性や価格といった合理的要因を中心に説明されてきたのに対し、SNS上では「応援したい」「共感した」「流れで購入した」といった非合理的ともいえる動機が購買を後押ししている。\n\n本論文では、各SNSプラットフォームの特性や具体的な事例分析に加え、自身のプロゲーマーとしての経験も踏まえながら、感情が購買行動に与える影響を整理した。\nその結果、SNSにおけるデジタルコンテンツ販売は、単なる商品提供ではなく、共感や物語性を含んだ体験として成立していることを明らかにした。\n本研究は、今後のデジタルコンテンツ販売において、感情設計やコミュニケーションの重要性を再考するための一つの指針を示すものである。",
      image: "",
      color: "bg-[#eceff1]",
      border: "border-[#b0bec5]",
      tape: "bg-[#ffcc80]"
    },

    "15": {
      title: "旅稿『トリコ星がない夜に』",
      author: "横田千聖",
      note: "#FEBRUARY",
      description: "本作『トリコ星がない夜に』は、現代に生きる人間の思考や感情、社会に対する違和感を多面的な視点から記録した作品です。言語表現とグラフィックデザインを用いて、詩、エッセイ、インスタントフィクションといった複数の文章形式を通して、ナマモノとしての感情がどのように加工され、扱われていくのかを問いかけています。\n\n本のカバーに配置したホールケーキのモチーフは、意図せず生じた事象に対する解釈や感情が切り分けられ、共有され、消費されていく過程を象徴しています。自己と他者の関係性、ならびに認識の拡張を、視覚的に提示する試みです。\n\n観測者としての「私」は、世界から個人に至るまで、大小さまざまな舞台を見つめ直し、再解釈を重ねていきます。本作は明確な結論を提示するのではなく、読者自身に思考を委ねる余白を残した構成としています。",
      image: "toriko.png",
      color: "bg-[#fce4ec]",
      border: "border-[#f06292]",
      tape: "bg-[#a5d6a7]"
    },
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