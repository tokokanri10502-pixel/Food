// 補助関数：現在の日付から相対的な日付文字列を生成 (YYYY.MM.DD)
function getRelativeDate(daysOffset = 0) {
    const d = new Date();
    d.setDate(d.getDate() + daysOffset);
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}.${m}.${day}`;
}

// モックデータ：食品トレンドニュース
const newsData = [
    {
        id: 7001,
        title: "「オートミール」ブームが第2章へ、料理研究家監修の絶品アレンジ本が発売",
        category: "health",
        categoryLabel: "健康",
        date: "2026.03.07",
        summary: "健康食の代名詞として定着したオートミール。今や「おにぎり」「お好み焼き」「リゾット」に変化し、食感の課題を克服した新世代レシピが若い世代にも浸透しつつある。",
        source: "ヘルスケア・フード",
        sourceUrl: "#",
        icon: "fa-bowl-food",
        gradient: "linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)",
        imageColor: "#27ae60",
        viewCount: 3200
    },
    {
        id: 7002,
        title: "業務スーパーの「1kg激安シリーズ」、節約インフルエンサーが続々紹介",
        category: "saving",
        categoryLabel: "節約",
        date: "2026.03.07",
        summary: "物価高を背景に、業務スーパーの大容量かつ低価格商品を紹介するSNS投稿が急増。特に冷凍野菜や輸入バター、おにぎり具材が家計の味方として注目されている。",
        source: "家計の味方ニュース",
        sourceUrl: "#",
        icon: "fa-piggy-bank",
        gradient: "linear-gradient(to top, #fcc5e4 0%, #fda34b 15%, #ff7882 35%, #c8699e 52%, #7046aa 71%, #0c1db8 87%, #020f75 100%)",
        imageColor: "#f39c12",
        viewCount: 5400
    },
    {
        id: 7003,
        title: "ノンアルコール市場が拡大、高品質「クラフトノンアル」が乾杯シーンを変える",
        category: "beverage",
        categoryLabel: "飲料",
        date: "2026.03.06",
        summary: "「飲めない人に配慮する文化」が定着し、ビール・ワイン・カクテルをリアルに再現したノンアルコール飲料が高品質化。外食産業でも専用メニューを設けるお店が急増中。",
        source: "PR TIMES",
        sourceUrl: "#",
        icon: "fa-wine-glass",
        gradient: "linear-gradient(to right, #a1c4fd 0%, #c2e9fb 100%)",
        imageColor: "#3498db",
        viewCount: 2900
    },
    {
        id: 7004,
        title: "広島「広島牛」ブランど化に本腰、県産和牛の新ブランド認定基準を策定",
        category: "hiroshima",
        categoryLabel: "広島県",
        date: "2026.03.06",
        summary: "広島県産の和牛を全国ブランドに育てるため、独自の基準と認定制度が整備へ。県内の飲食店や通販サイトでも「広島牛」表記の統一化に向けた動きが広がっている。",
        source: "中四国グルメナビ",
        sourceUrl: "#",
        icon: "fa-fire",
        gradient: "linear-gradient(135deg, #FF512F 0%, #DD2476 100%)",
        imageColor: "#e74c3c",
        viewCount: 1800
    },
    {
        id: 505,
        title: "「米粉ライスペーパー」の進化、揚げるだけでおつまみになる『瞬間チップス』が大流行",
        category: "sns",
        categoryLabel: "SNSトレンド",
        date: "2026.03.05",
        summary: "ライスペーパーを揚げて味付けするだけの簡単レシピがTikTokで数百万再生。ヘルシーさと食感の良さが、酒のつまみを求める層に刺さっている。",
        source: "トレンド探偵団",
        sourceUrl: "https://www.trend-tantei.jp/news/rice-paper-chips/",
        icon: "fa-hashtag",
        gradient: "linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)",
        imageColor: "#e67e22",
        viewCount: 3200
    },
    {
        id: 506,
        title: "広島産「瀬戸内レモン」を使用した『大人のクラフトクリームソーダ』が都心でヒット",
        category: "hiroshima",
        categoryLabel: "広島県",
        date: "2026.03.05",
        summary: "純喫茶ブームが進化し、本物の果汁とオーガニックハーブを使った本格派クリームソーダが登場。夜はリキュールを加える『夜のクリームソーダ』としても提供。",
        source: "瀬戸内経済Web",
        sourceUrl: "https://www.setouchi-news.jp/article/craft-cream-soda/",
        icon: "fa-glass-water",
        gradient: "linear-gradient(to top, #f6d365 0%, #fda085 100%)",
        imageColor: "#f1c40f",
        viewCount: 2800
    },
    {
        id: 507,
        title: "AIが個人の好みを学習する「スマートコーヒーメーカー」がサブスク市場を席巻",
        category: "retail",
        categoryLabel: "小売・流通",
        date: "2026.03.04",
        summary: "朝の気分や前日の睡眠データに基づき、最適な豆の配合と抽出温度を自動調整。パーソナライズされた一杯が提供できる次世代家電が単身世帯に普及。",
        source: "テックフード・デイリー",
        sourceUrl: "https://www.techfood-daily.jp/article/ai-coffee-2026/",
        icon: "fa-microchip",
        gradient: "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)",
        imageColor: "#3498db",
        viewCount: 1950
    },
    {
        id: 501,
        title: "「植物性ミルク」の第3波、ジャガイモ由来の『ポテトミルク』が上陸",
        category: "health",
        categoryLabel: "健康",
        date: "2026.03.04",
        summary: "オーツミルク、アーモンドミルクに続く次世代ミルクとして、環境負荷が極めて低いポテトミルクが注目。クリーミーな質感がラテに最適とカフェ業界で話題。",
        source: "プラントベース・デイリー",
        sourceUrl: "https://www.plantbased-daily.jp/news/potato-milk-2026/",
        icon: "fa-leaf",
        gradient: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        imageColor: "#27ae60",
        viewCount: 2100
    },
    {
        id: 502,
        title: "「おにぎり専門店」の高級化、一貫1000円超えの『鮨スタイル』が人気",
        category: "gaishoku",
        categoryLabel: "外食",
        date: "2026.03.03",
        summary: "厳選された希少米と最高級の海苔、職人が目の前で握る臨場感。おにぎりを「日常食」から「ハレの日の食事」へと昇華させた新業態がインバウンド客にもヒット。",
        source: "外食トレンド報",
        sourceUrl: "https://www.gaishoku-trend.jp/article/luxury-onigiri-2026/",
        icon: "fa-bowl-rice",
        gradient: "linear-gradient(to right, #43e97b 0%, #38f9d7 100%)",
        imageColor: "#c0392b",
        viewCount: 1850
    },
    {
        id: 503,
        title: "「透明なスイーツ」がSNSで再燃、水ゼリーを進化させた『クリスタル・和菓子』",
        category: "sweets",
        categoryLabel: "スイーツ",
        date: "2026.03.02",
        summary: "視覚的な美しさと清涼感を極めた透明スイーツ。最新技術で中に花や風景を閉じ込めたような芸術的な作品が、Z世代を中心に「食べるアート」として拡散中。",
        source: "スイーツ・タイムズ",
        sourceUrl: "https://www.sweets-times.jp/news/crystal-wagashi/",
        icon: "fa-gem",
        gradient: "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",
        imageColor: "#f1c40f",
        viewCount: 2400
    },
    {
        id: 504,
        title: "スーパーの「自動値下げ」AIが本格導入、食品ロス削減に劇的効果",
        category: "retail",
        categoryLabel: "小売・流通",
        date: "2026.03.01",
        summary: "在庫状況と賞味期限をリアルタイムで解析し、最適なタイミングで価格を変動させるAI。閉店間際の極端な値引きを避け、利益確保とロス削減を両立。",
        source: "流通デジタル通信",
        sourceUrl: "https://www.ryutsu-digital.jp/news/ai-price-optimizer/",
        icon: "fa-robot",
        gradient: "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)",
        imageColor: "#9b59b6",
        viewCount: 1560
    },
    {
        id: 1,
        title: "「飲むわらび餅」が進化？ 次世代テクスチャードリンクの台頭",
        category: "beverage",
        categoryLabel: "飲料",
        date: "2026.02.26",
        summary: "タピオカブーム以降、食感を楽しむドリンクが定着。最新のトレンドは、和素材とフルーツを組み合わせた「飲むスイーツ」の進化形。",
        source: "PR TIMES",
        sourceUrl: "https://prtimes.jp/main/html/rd/p/000000030.000063255.html",
        icon: "fa-glass-water",
        gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)",
        imageColor: "#e74c3c",
        viewCount: 1540
    },
    {
        id: 2,
        title: "コンビニ各社、高タンパク・低糖質スイーツを拡充",
        category: "sweets",
        categoryLabel: "スイーツ",
        date: "2026.02.25",
        summary: "罪悪感なく食べられる「ギルトフリー」スイーツの需要増に対応。大豆粉やオート米を使用した新商品が続々登場。",
        source: "日本食糧新聞",
        sourceUrl: "https://nissyoku.co.jp/news/kawamura20210604085458025",
        icon: "fa-cookie-bite",
        gradient: "linear-gradient(120deg, #f6d365 0%, #fda085 100%)",
        imageColor: "#f1c40f",
        viewCount: 1280
    },
    {
        id: 4,
        title: "冷凍食品の高級化が進む、有名シェフ監修シリーズがヒット",
        category: "retail",
        categoryLabel: "小売・流通",
        date: "2026.02.24",
        summary: "自宅でレストランの味を楽しめる「プレミアム冷凍食品」の売上が好調。デパ地下グルメに匹敵するクオリティが支持されている。",
        source: "CREO ニュース",
        sourceUrl: "https://creo-plus.net/distribution-frozen-food-high-class/",
        icon: "fa-snowflake",
        gradient: "linear-gradient(to top, #5f72bd 0%, #9b23ea 100%)",
        imageColor: "#9b59b6",
        viewCount: 950
    },
    {
        id: 5,
        title: "ピスタチオの次はこれ！ 2026年注目のナッツフレーバー",
        category: "sweets",
        categoryLabel: "スイーツ",
        date: "2026.02.24",
        summary: "数年続いたピスタチオブームに次ぐ素材として「黒ゴマ」と「ピーカンナッツ」が急上昇中。香ばしさと健康効果がキーワード。",
        source: "スイーツ・メディア",
        sourceUrl: "https://www.sweets-media.jp/article/2026-nuts-trend/",
        icon: "fa-seedling",
        gradient: "linear-gradient(to top, #0ba360 0%, #3cba92 100%)",
        imageColor: "#e67e22",
        viewCount: 420
    },
    {
        id: 6,
        title: "「ゴーストレストラン」から「実店舗回帰」へ、外食産業の揺り戻し",
        category: "gaishoku",
        categoryLabel: "外食",
        date: "2026.02.23",
        summary: "デリバリー専門店ブームが一段落し、体験価値を提供する実店舗への投資が再開。エンタメ要素を取り入れた新業態が注目される。",
        source: "外食ビジネスOnline",
        sourceUrl: "https://www.gaishoku-biz.jp/article/restaurant-trend-2026/",
        icon: "fa-store",
        gradient: "linear-gradient(to right, #43e97b 0%, #38f9d7 100%)",
        imageColor: "#c0392b",
        viewCount: 310
    },
    {
        id: 11,
        title: "麹ブーム再燃、手軽に使える「液体塩こうじ」が人気",
        category: "health",
        categoryLabel: "健康",
        date: "2026.02.23",
        summary: "発酵食品への関心の高まりとともに、調味料としての麹が見直されている。腸活意識の高い層にヒット。",
        source: "ヘルスケア・フード",
        sourceUrl: "https://www.healthcare-food.jp/news/koji-boom-2026/",
        icon: "fa-heart-pulse",
        gradient: "linear-gradient(to top, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)",
        imageColor: "#e84393",
        viewCount: 560
    },
    {
        id: 13,
        title: "「昭和レトロ」喫茶がZ世代に大ウケ、クリームソーダの色を変えて推し活に",
        category: "z_gen",
        categoryLabel: "Z世代",
        date: "2026.02.23",
        summary: "純喫茶の懐かしい雰囲気が逆に新しいと若者に人気。カラフルなドリンクがSNS映えし、アイドルのメンバーカラーを楽しむファン層に刺さっている。",
        source: "トレンド探偵団",
        sourceUrl: "https://www.trend-tantei.jp/zgen-showa-retro/",
        icon: "fa-camera-retro",
        gradient: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        imageColor: "#a29bfe",
        viewCount: 1100
    },
    {
        id: 14,
        title: "第4次韓流ブームで「ポチャ（屋台）」スタイルが定着",
        category: "asian",
        categoryLabel: "韓国・アジア",
        date: "2026.02.22",
        summary: "韓国ドラマの影響で、本場の屋台の雰囲気を再現した飲食店が増加。若者を中心にマッコリやソジュ（焼酎）の消費が伸びている。",
        source: "アジアグルメ通信",
        sourceUrl: "https://www.asia-gourmet.jp/korean-pocha-boom/",
        icon: "fa-bowl-rice",
        gradient: "linear-gradient(to right, #fa709a 0%, #fee140 100%)",
        imageColor: "#ff0099",
        viewCount: 780
    },
    {
        id: 111,
        title: "完全栄養食パン、サブスク市場でシェア拡大",
        category: "retail",
        categoryLabel: "小売・流通",
        date: "2026.02.22",
        summary: "忙しい朝の救世主として、1枚で1食分の栄養が摂れるパンの定期購入サービスが20代〜30代を中心に利用者を伸ばしている。",
        source: "日経クロストレンド",
        sourceUrl: "https://xtrend.nikkei.com/atcl/contents/casestudy/00012/1000780/",
        icon: "fa-bread-slice",
        gradient: "linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)",
        imageColor: "#2ecc71",
        viewCount: 620
    },
    {
        id: 8,
        title: "デパ地下惣菜の「個食化」進む、単身世帯ターゲット",
        category: "nakashoku",
        categoryLabel: "中食",
        date: "2026.02.21",
        summary: "ファミリー向けの大容量パックから、一人でも楽しめる少量多品種セットへ。仕事帰りの「プチ贅沢」需要を取り込む。",
        source: "デリ・ニュース",
        sourceUrl: "https://www.deli-news.jp/article/single-dish-trend/",
        icon: "fa-box-open",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        imageColor: "#16a085",
        viewCount: 450
    },
    {
        id: 12,
        title: "物価高で「訳あり商品」のEC販売が急増",
        category: "saving",
        categoryLabel: "節約",
        date: "2026.02.21",
        summary: "味は変わらないが形が不揃いな野菜や、賞味期限間近の加工食品をお得に購入できるサイトへのアクセスが増加中。",
        source: "家計の味方ニュース",
        sourceUrl: "https://www.kakei-mikata.jp/article/wakesari-ec-growth/",
        icon: "fa-piggy-bank",
        gradient: "linear-gradient(to top, #fcc5e4 0%, #fda34b 15%, #ff7882 35%, #c8699e 52%, #7046aa 71%, #0c1db8 87%, #020f75 100%)",
        imageColor: "#f39c12",
        viewCount: 890
    },
    {
        id: 9,
        title: "クラフトコーラブームは地方へ、ご当地素材の活用加速",
        category: "beverage",
        categoryLabel: "飲料",
        date: "2026.02.20",
        summary: "スパイスや柑橘類など、地域特産の農産物を使用した「ご当地クラフトコーラ」が観光お土産としても人気に。",
        source: "地域創生マガジン",
        sourceUrl: "https://www.chiiki-saisei.jp/",
        icon: "fa-bottle-water",
        gradient: "linear-gradient(to top, #d299c2 0%, #fef9d7 100%)",
        imageColor: "#d35400",
        viewCount: 340
    },
    {
        id: 15,
        title: "台湾・ベトナムに続き「タイの屋台メシ」がブームの予感",
        category: "asian",
        categoryLabel: "韓国・アジア",
        date: "2026.02.20",
        summary: "本格的なスパイス使いとヘルシーなイメージで、タイ料理のミールキットや冷凍食品がスーパーの棚を席巻しつつある。",
        source: "ワールドフードレポート",
        sourceUrl: "https://www.world-food-report.jp/",
        icon: "fa-pepper-hot",
        gradient: "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)",
        imageColor: "#27ae60",
        viewCount: 510
    },
    {
        id: 16,
        title: "「#究極の朝ごはん」がTiktok for Businessで話題、簡単アレンジレシピが拡散中",
        category: "sns",
        categoryLabel: "SNSトレンド",
        date: "2026.02.25",
        summary: "コンビニ食材だけで作る豪華な朝食動画が600万再生を突破。真似して投稿するユーザーが急増。",
        source: "TikTokトレンド",
        sourceUrl: "https://www.tiktok.com/",
        icon: "fa-mobile-screen",
        gradient: "linear-gradient(to right, #00dbde 0%, #fc00ff 100%)",
        imageColor: "#e056fd",
        viewCount: 2100
    },
    {
        id: 17,
        title: "X(旧Twitter)で「#無限ピーマン」に次ぐ「#無限ニンジン」がバズり中",
        category: "sns",
        categoryLabel: "SNSトレンド",
        date: "2026.02.24",
        summary: "大量のニンジン消費に困った農家の投稿がきっかけ。シンプルながら中毒性のある味が評判。",
        source: "X (Twitter)",
        sourceUrl: "https://x.com/",
        icon: "fa-hashtag",
        gradient: "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)",
        imageColor: "#3498db",
        viewCount: 1800
    },
    {
        id: 18,
        title: "広島の「汁なし担々麺」が都心でブーム、シメの『追い飯』が定番化",
        category: "hiroshima",
        categoryLabel: "広島県",
        date: "2026.02.25",
        summary: "広島のご当地グルメである汁なし担々麺。山椒の痺れと複雑なスパイスが都内のオフィス街でも人気。最後にライスを投入するスタイルが若者の胃袋を掴んでいる。",
        source: "中四国グルメナビ",
        sourceUrl: "https://www.chushikoku-gourmet.jp/",
        icon: "fa-fire",
        gradient: "linear-gradient(135deg, #FF512F 0%, #DD2476 100%)",
        imageColor: "#e74c3c",
        viewCount: 920
    },
    {
        id: 19,
        title: "博多の「明太フランス」が全国区に？ 冷凍販売で全国から注文殺到",
        category: "fukuoka",
        categoryLabel: "福岡県",
        date: "2026.02.26",
        summary: "福岡の人気ベーカリー発祥の明太フランス。焼き立てを急速冷凍する技術により、全国どこでも本場の味が楽しめるように。おつまみ需要としても急上昇中。",
        source: "九州食紀行",
        sourceUrl: "https://www.kyushu-food.jp/",
        icon: "fa-bread-slice",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        imageColor: "#ff4d6d",
        viewCount: 1650
    },
    {
        id: 20,
        title: "福岡「あまおう」スイーツの最高峰、有名パティスリーとのコラボが話題",
        category: "fukuoka",
        categoryLabel: "福岡県",
        date: "2026.02.24",
        summary: "ブランド苺「あまおう」を贅沢に使用した期間限定パフェがSNSで拡散。一皿3000円を超える『ご褒美スイーツ』市場の底堅さを見せている。",
        source: "スイーツ・タイムズ",
        sourceUrl: "https://www.sweets-times.jp/",
        icon: "fa-strawberry",
        gradient: "linear-gradient(to top, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)",
        imageColor: "#ff0000",
        viewCount: 1400
    },
    {
        id: 301,
        title: "北海道産「白いトウモロコシ」が高級スイーツ食材として人気急上昇",
        category: "hokkaido",
        categoryLabel: "北海道",
        date: "2026.02.25",
        summary: "糖度が極めて高く生でも食べられる北海道産の白いトウモロコシ「ピュアホワイト」が、パティスリーやジェラート専門店で引き合いが急増。本州への産直ECも活況を呈している。",
        source: "北海道農業新報",
        sourceUrl: "https://www.hokkaido-agri.jp/",
        icon: "fa-snowflake",
        gradient: "linear-gradient(to right, #a8edea 0%, #fed6e3 100%)",
        imageColor: "#4a90d9",
        viewCount: 1230
    },
    {
        id: 302,
        title: "函館「塩ラーメン」の洗練化が進む、出汁の多層化で新世代店舗が注目",
        category: "hokkaido",
        categoryLabel: "北海道",
        date: "2026.02.23",
        summary: "昆布・ホタテ・鶏のトリプル出汁を丁寧に重ねた新世代の塩ラーメンが、食通の間で話題に。外国人観光客が増加する函館で、新たな「食の聖地」化が加速している。",
        source: "ご当地ラーメン図鑑",
        sourceUrl: "https://www.ramen-zukan.jp/",
        icon: "fa-fire",
        gradient: "linear-gradient(to right, #48c6ef 0%, #6f86d6 100%)",
        imageColor: "#4a90d9",
        viewCount: 970
    },
    // --- アーカイブ用データ ---
    {
        id: 303,
        title: "北海道産バター不足が再燃、業務用需要増でスーパー棚が空に",
        category: "hokkaido",
        categoryLabel: "北海道",
        date: "2026.02.08",
        summary: "インバウンド回復による菓子需要の急回復と、酪農家の減少が重なりバター不足が再発。製菓業界では代替油脂の研究が加速している。",
        source: "酪農・乳業速報",
        sourceUrl: "https://www.dairy-news.jp/",
        icon: "fa-cow",
        gradient: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        imageColor: "#4a90d9",
        viewCount: 840
    },
    {
        id: 101,
        title: "冬の定番「おでん」に異変？ トッピングにアボカドが流行した兆し",
        category: "gaishoku",
        categoryLabel: "外食",
        date: "2026.02.16",
        summary: "昨今のヘルシー志向を受け、意外な組み合わせがヒット。変わり種おでんのブームを振り返る。",
        source: "トレンド回顧録",
        sourceUrl: "#",
        icon: "fa-bowl-food",
        gradient: "linear-gradient(to right, #6a11cb 0%, #2575fc 100%)",
        viewCount: 300
    },
    {
        id: 102,
        title: "2025年ヒット予測：昆虫食は「パウダー」から「姿」へ？",
        category: "health",
        categoryLabel: "健康",
        date: "2026.02.06",
        summary: "サステナブルフードとして注目された昆虫食。昨年の議論と市場の変化をアーカイブから読み解く。",
        source: "未来食通信",
        sourceUrl: "#",
        icon: "fa-bug",
        gradient: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)",
        viewCount: 150
    },
    {
        id: 103,
        title: "2026年元旦：健康寿命を延ばす「最強のおせち」が話題に",
        category: "health",
        categoryLabel: "健康",
        date: "2026.01.07",
        summary: "塩分控えめながら旨味を最大限に引き出した進化形おせち。高タンパク素材をふんだんに使用し、アクティブシニア層に大ヒット。",
        source: "健康日本21ニュース",
        sourceUrl: "#",
        icon: "fa-sun",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        viewCount: 420
    },
    {
        id: 104,
        title: "「ヴィーガニュアリー」日本でも浸透、プラントベース肉の売上が1.5倍に",
        category: "health",
        categoryLabel: "健康",
        date: "2026.01.12",
        summary: "1月を菜食で過ごす世界的なキャンペーンが日本でも注目。コンビニ各社が相次いで大豆ミート商品を発表。健康と環境を意識する若年層が牽引。",
        source: "エコライフ・マガジン",
        sourceUrl: "#",
        icon: "fa-leaf",
        gradient: "linear-gradient(to right, #43e97b 0%, #38f9d7 100%)",
        viewCount: 580
    },
    {
        id: 105,
        title: "余ったお餅をフレンチに？ SNSで「餅リメイク」が大バズり",
        category: "sns",
        categoryLabel: "SNSトレンド",
        date: "2026.01.17",
        summary: "正月明けの定番悩み「余った餅」を解決するレシピ動画がTikTokで拡散。特に『餅ラザニア』や『餅ワッフル』など、洋風アレンジが人気。",
        source: "レシピ・パトロール",
        sourceUrl: "#",
        icon: "fa-hashtag",
        gradient: "linear-gradient(to top, #ff9a9e 0%, #fecfef 100%)",
        viewCount: 1950
    },
    {
        id: 106,
        title: "高騰する光熱費に対抗！「非加熱レシピ」が節約層に支持される",
        category: "saving",
        categoryLabel: "節約",
        date: "2026.01.22",
        summary: "ガス・電気代の削減のため、電子レンジだけで完結する料理や、火を使わない和え物レシピが注目。カット野菜を活用した時短テクも併せて流行。",
        source: "家計の知恵袋",
        sourceUrl: "#",
        icon: "fa-bolt-slash",
        gradient: "linear-gradient(to top, #fcc5e4 0%, #fda34b 100%)",
        viewCount: 720
    },
    {
        id: 107,
        title: "「一人鍋」専用の高級家電が登場、独身世帯の『おうち外食』が加速",
        category: "retail",
        categoryLabel: "小売・流通",
        date: "2026.01.27",
        summary: "卓上で手軽に本格的な煮込み料理ができる小型調理器がヒット。デパ地下の高級鍋セットとの抱き合わせ販売も好調。",
        source: "家電トレンド報",
        sourceUrl: "#",
        icon: "fa-plug",
        gradient: "linear-gradient(to right, #92fe9d 0%, #00c9ff 100%)",
        viewCount: 480
    },
    {
        id: 108,
        title: "バレンタイン異変、チョコではなく「高級ナッツ」を贈るスタイルが急上昇",
        category: "sweets",
        categoryLabel: "スイーツ",
        date: "2026.02.01",
        summary: "甘いものが苦手な層や健康意識の高いパートナーへ、トリュフがけナッツや燻製ミックスナッツを贈るのが新常態に。酒のつまみ需要も。 ",
        source: "ギフトジャーナル",
        sourceUrl: "#",
        icon: "fa-heart",
        gradient: "linear-gradient(to bottom, #f77062 0%, #fe5196 100%)",
        viewCount: 1250
    },
    {
        id: 109,
        title: "AIが献立を提案するスマート冷蔵庫、普及率が10%を突破",
        category: "retail",
        categoryLabel: "小売・流通",
        date: "2026.02.11",
        summary: "庫内の食材から最適なレシピを提案し、不足分を自動発注する機能。食品ロス削減への貢献が期待され、共働き世帯からの導入が進む。",
        source: "テックフード・デイリー",
        sourceUrl: "#",
        icon: "fa-microchip",
        gradient: "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)",
        viewCount: 840
    },
    {
        id: 110,
        title: "広島ブランドの「牡蠣」に新展開、世界初の陸上養殖に成功か",
        category: "hiroshima",
        categoryLabel: "広島県",
        date: "2026.02.14",
        summary: "海の環境変化を受け、安定供給を目指す新プロジェクト。寄生虫リスクを抑えた『当たる心配のない牡蠣』として輸出市場も視野に。",
        source: "瀬戸内経済Web",
        sourceUrl: "#",
        icon: "fa-water",
        gradient: "linear-gradient(to right, #48c6ef 0%, #6f86d6 100%)",
        viewCount: 660
    }
];

// DOM要素


// DOM要素
const newsGrid = document.getElementById('news-grid');
const rankingGrid = document.getElementById('ranking-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('search-input');

// 状態管理
let currentCategory = 'all';
let currentSearchTerm = '';
let favoriteIds = JSON.parse(localStorage.getItem('food_trend_favorites') || '[]');
let showFavoritesOnly = false;
let showArchive = false; // アーカイブ表示フラグ

// 初期表示
document.addEventListener('DOMContentLoaded', () => {
    injectDailyArticle(); // デイリー記事をnewsDataに追加（必ず最初に実行）
    renderRanking();
    renderColumns(); // コラムセクションを描画
    applyFilters();
    setupFilters();
    setupSearch();
    checkDailyUpdate(); // 7時更新チェック
    setupMobileMenu(); // モバイルメニューの設定
    setupFavoritesNav(); // お気に入りナビの設定
    setupArchive(); // アーカイブの設定
    setupHomeButton(); // ホーム/ロゴボタンの設定
    setupMonthlyReport(); // 月間レポートの設定
    checkMonthlyReport(); // 月初の自動レポート表示チェック
});

// ホーム/ロゴボタンの設定（状態リセットとトップ移動）
function setupHomeButton() {
    const logo = document.getElementById('site-logo');
    const homeLink = document.getElementById('home-link');

    const resetView = (e) => {
        e.preventDefault();

        // 状態のリセット
        currentCategory = 'all';
        currentSearchTerm = '';
        showFavoritesOnly = false;
        showArchive = false;

        // UIのリセット
        searchInput.value = '';
        filterBtns.forEach(b => b.classList.remove('active'));
        const allFilter = document.querySelector('.filter-btn[data-category="all"]');
        if (allFilter) allFilter.classList.add('active');

        const favoritesBtn = document.getElementById('view-favorites');
        if (favoritesBtn) {
            favoritesBtn.classList.remove('active');
            favoritesBtn.innerHTML = '<i class="fa-solid fa-heart"></i> お気に入り';
        }

        const archiveBtn = document.getElementById('load-archive-btn');
        if (archiveBtn) archiveBtn.classList.remove('active');

        // フィルタ適用と最上部へのスクロール
        applyFilters();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (logo) logo.addEventListener('click', resetView);
    if (homeLink) homeLink.addEventListener('click', resetView);
}

// モバイルメニューの設定
function setupMobileMenu() {
    const toggle = document.getElementById('mobile-menu-toggle');
    const nav = document.querySelector('.main-nav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        const icon = toggle.querySelector('i');
        if (nav.classList.contains('active')) {
            icon.classList.replace('fa-bars', 'fa-xmark');
        } else {
            icon.classList.replace('fa-xmark', 'fa-bars');
        }
    });

    // メニューリンククリック時に閉じる
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            toggle.querySelector('i').classList.replace('fa-xmark', 'fa-bars');
        });
    });
}

// お気に入りナビの設定
function setupFavoritesNav() {
    const favoritesBtn = document.getElementById('view-favorites');
    const favoritesOnlyBtn = document.getElementById('filter-favorites-only');
    const showAllBtn = document.getElementById('filter-show-all');

    if (!favoritesBtn) return;

    // 「お気に入りのみ」を選択
    if (favoritesOnlyBtn) {
        favoritesOnlyBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showFavoritesOnly = true;
            showArchive = false;
            updateFavoritesUI();
            applyFilters();

            // フィルターのリセット
            resetOtherFilters();
        });
    }

    // 「すべて表示」を選択
    if (showAllBtn) {
        showAllBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showFavoritesOnly = false;
            updateFavoritesUI();
            applyFilters();
        });
    }

    // 親ボタン自体のクリック（トグル動作）
    favoritesBtn.addEventListener('click', (e) => {
        e.preventDefault();

        // 従来のトグル動作（表示内容の切り替え）も継続
        showFavoritesOnly = !showFavoritesOnly;
        showArchive = false;
        updateFavoritesUI();
        applyFilters();
        if (showFavoritesOnly) resetOtherFilters();
    });
}

// お気に入り関連のUI表示更新
function updateFavoritesUI() {
    const favoritesBtn = document.getElementById('view-favorites');
    const favoritesOnlyBtn = document.getElementById('filter-favorites-only');
    const showAllBtn = document.getElementById('filter-show-all');
    const archiveLoadBtn = document.getElementById('load-archive-btn');

    if (showFavoritesOnly) {
        if (favoritesBtn) favoritesBtn.classList.add('active');
        if (favoritesOnlyBtn) favoritesOnlyBtn.classList.add('active');
        if (showAllBtn) showAllBtn.classList.remove('active');
        if (archiveLoadBtn) archiveLoadBtn.classList.remove('active');
    } else {
        if (favoritesBtn) favoritesBtn.classList.remove('active');
        if (favoritesOnlyBtn) favoritesOnlyBtn.classList.remove('active');
        if (showAllBtn) showAllBtn.classList.add('active');
    }
}

// お気に入り表示時の他フィルターリセット
function resetOtherFilters() {
    currentCategory = 'all';
    currentSearchTerm = '';
    searchInput.value = '';
    filterBtns.forEach(b => b.classList.remove('active'));
    const allFilter = document.querySelector('.filter-btn[data-category="all"]');
    if (allFilter) allFilter.classList.add('active');
}

// お気に入りの切り替え
function toggleFavorite(id, event) {
    if (event) {
        event.stopPropagation();
    }

    const index = favoriteIds.indexOf(id);
    if (index === -1) {
        favoriteIds.push(id);
    } else {
        favoriteIds.splice(index, 1);
    }

    localStorage.setItem('food_trend_favorites', JSON.stringify(favoriteIds));

    // UI更新
    const btns = document.querySelectorAll(`.favorite-btn[data-id="${id}"]`);
    btns.forEach(btn => {
        btn.classList.toggle('active');
        const icon = btn.querySelector('i');
        if (icon.classList.contains('fa-solid')) {
            icon.classList.replace('fa-solid', 'fa-regular');
        } else {
            icon.classList.replace('fa-regular', 'fa-solid');
        }
    });

    // お気に入り一覧表示中の場合は再描画
    if (showFavoritesOnly) {
        applyFilters();
    }
}

// アーカイブの設定
function setupArchive() {
    const archiveBtn = document.getElementById('load-archive-btn');
    const navArchiveLink = document.getElementById('nav-archive');

    const expandArchive = () => {
        showArchive = true;
        if (archiveBtn) archiveBtn.classList.add('active');
        applyFilters();

        // 少し遅らせて描画を待ってからスクロール
        setTimeout(() => {
            const divider = document.querySelector('.archive-divider');
            if (divider) {
                divider.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, 100);
    };

    if (archiveBtn) {
        archiveBtn.addEventListener('click', expandArchive);
    }

    if (navArchiveLink) {
        navArchiveLink.addEventListener('click', (e) => {
            e.preventDefault();
            // お気に入り表示中の場合は解除
            if (showFavoritesOnly) {
                const favoritesBtn = document.getElementById('view-favorites');
                showFavoritesOnly = false;
                if (favoritesBtn) {
                    favoritesBtn.classList.remove('active');
                    favoritesBtn.innerHTML = '<i class="fa-solid fa-heart"></i> お気に入り';
                }
            }
            expandArchive();
        });
    }
}

// 日付が7日以上前かチェックするヘルパー
function isArchiveDate(dateStr) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // dateStr "YYYY.MM.DD" を Date オブジェクトに変換
    const parts = dateStr.split('.');
    const itemDate = new Date(parts[0], parts[1] - 1, parts[2]);

    const diffTime = today - itemDate;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays >= 7;
}


// 共通：記事へのスクロールとハイライト
function scrollToArticle(articleId) {
    // 検索とカテゴリをリセットして全表示
    searchInput.value = '';
    currentSearchTerm = '';
    currentCategory = 'all';

    // ボタンの表示もリセット
    filterBtns.forEach(b => b.classList.remove('active'));
    const allFilter = document.querySelector('.filter-btn[data-category="all"]');
    if (allFilter) allFilter.classList.add('active');

    applyFilters();

    // 該当記事を探して詳細までスクロール
    const targetCard = newsGrid.querySelector(`.news-card[data-id="${articleId}"]`);
    if (targetCard) {
        targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        targetCard.style.animation = "none"; // アニメーションリセット
        setTimeout(() => {
            targetCard.style.animation = "flash 1s";
        }, 10);
    }
}

// 朝7時の更新チェック
function checkDailyUpdate() {
    const now = new Date();
    const currentHour = now.getHours();
    const todayStr = getRelativeDate(0);

    // ローカルストレージで最後に更新通知を出した日を記録
    const lastUpdateDate = localStorage.getItem('last_daily_update_notified');

    // 7時以降かつ、今日まだ通知を出していない場合
    if (currentHour >= 7 && lastUpdateDate !== todayStr) {
        showUpdateNotification();
        localStorage.setItem('last_daily_update_notified', todayStr);
    }
}

// 更新通知の表示
function showUpdateNotification() {
    const notification = document.createElement('div');
    notification.id = 'daily-update-notification';
    notification.innerHTML = `
        <div class="notif-content">
            <i class="fa-solid fa-bell"></i>
            <span>本日のトレンド情報をピックアップしました（07:00更新）</span>
            <button onclick="this.parentElement.parentElement.remove()">OK</button>
        </div>
    `;
    document.body.appendChild(notification);

    // 10秒後に自動消去
    setTimeout(() => {
        if (notification.parentElement) notification.remove();
    }, 10000);
}

/* simulateNewArticle and showNotification removed */

// ========================================
// トレンドスコアの計算（毎日変動する急上昇ランキング用）
// 3要素を合成：
//   1. ベーススコア  : viewCount（基本人気度）
//   2. 新着ブースト  : 記事が新しいほど高い（最大2倍、7日で減衰）
//   3. 日次変動係数  : 「今日の日付 × 記事ID」を元にした擬似乱数（0.5〜1.5倍）
//                      ⇒ 日が変わるごとに各記事の係数が変わり順位が入れ替わる
// ========================================
function calculateTrendScore(item) {
    // --- 1. ベーススコア ---
    const base = item.viewCount || 0;

    // --- 2. 新着ブースト（最大2倍、日数に応じて線形減衰）---
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const parts = item.date.split('.');
    const articleDate = new Date(parts[0], parts[1] - 1, parts[2]);
    const ageDays = Math.max(0, Math.floor((today - articleDate) / (1000 * 60 * 60 * 24)));
    const recencyBoost = Math.max(1.0, 2.0 - ageDays * (1.0 / 7)); // 0〜7日で2.0→1.0

    // --- 3. 日次変動係数（シード付き擬似乱数）---
    // 今日の日付を整数に変換（YYYYMMDD形式）してシードとして使う
    const y = today.getFullYear();
    const m = String(today.getMonth() + 1).padStart(2, '0');
    const d = String(today.getDate()).padStart(2, '0');
    const dateSeed = Number(`${y}${m}${d}`);

    // LCG（線形合同法）による擬似乱数生成（記事IDとdateSeedを組み合わせ）
    const seed = (dateSeed * 31 + item.id * 1000003) % 2147483647;
    const lcg = ((seed * 1664525 + 1013904223) & 0xffffffff) >>> 0;
    // 0.5〜1.5の範囲に正規化
    const dailyFactor = 0.5 + (lcg / 0xffffffff);

    return base * recencyBoost * dailyFactor;
}

// ランキング表示（トップ3）
function renderRanking() {
    // トレンドスコアで毎日変動するランキングを生成（アーカイブ除外）
    const sorted = newsData
        .filter(item => item.viewCount && !isArchiveDate(item.date))
        .sort((a, b) => calculateTrendScore(b) - calculateTrendScore(a));

    // 同一タイトルの記事が複数順位に表示されないよう重複排除
    const seenTitles = new Set();
    const rankingData = [];
    for (const item of sorted) {
        if (seenTitles.has(item.title)) continue;
        seenTitles.add(item.title);
        rankingData.push(item);
        if (rankingData.length >= 3) break;
    }

    rankingGrid.innerHTML = '';

    rankingData.forEach((item, index) => {
        const card = createNewsCard(item, true, index + 1); // index + 1 = 実際の順位

        // クリックでその記事に飛ぶ
        card.style.cursor = 'pointer';
        card.addEventListener('click', () => {
            scrollToArticle(item.id);
        });

        rankingGrid.appendChild(card);
    });
}

// ニュース記事の描画
function renderNews(data) {
    newsGrid.innerHTML = '';

    // 新着とアーカイブを分ける（もしアーカイブ表示モードなら）
    const recentNews = data.filter(item => !isArchiveDate(item.date));
    const archiveNews = data.filter(item => isArchiveDate(item.date));

    // 新着の描画
    recentNews.forEach(item => {
        const card = createNewsCard(item);
        newsGrid.appendChild(card);
    });

    // アーカイブ表示中かつアーカイブ記事がある場合、区切り線を入れて描画
    if (showArchive && archiveNews.length > 0) {
        const divider = document.createElement('div');
        divider.className = 'archive-divider';
        divider.innerHTML = '<span>ここから過去の記事</span>';
        newsGrid.appendChild(divider);

        // 日付の降順（新しい順）でソート
        archiveNews.sort((a, b) => b.date.localeCompare(a.date));

        let lastMonth = "";
        archiveNews.forEach(item => {
            // "YYYY.MM.DD" から "YYYY.MM" を抽出
            const currentMonth = item.date.substring(0, 7);

            if (currentMonth !== lastMonth) {
                const monthHeader = document.createElement('div');
                monthHeader.className = 'month-divider';
                const parts = currentMonth.split('.');
                monthHeader.innerText = `${parts[0]}年 ${parseInt(parts[1])}月`;
                newsGrid.appendChild(monthHeader);
                lastMonth = currentMonth;
            }

            const card = createNewsCard(item);
            newsGrid.appendChild(card);
        });
    }

    // アーカイブボタンの表示制御
    const archiveBtnAction = document.getElementById('archive-action');
    if (archiveBtnAction) {
        // アーカイブ記事があり、かつまだ表示していない場合にボタンを出す
        if (archiveNews.length > 0 && !showArchive) {
            archiveBtnAction.style.display = 'block';
        } else {
            archiveBtnAction.style.display = 'none';
        }
    }
}

// ニュースカードの作成
function createNewsCard(item, isRanking = false, rank = 0) {
    const article = document.createElement('article');
    // IDを付与（枠外検索用）
    article.setAttribute('data-id', item.id);

    if (isRanking) {
        // ランキング用（テキストのみ）
        article.className = 'ranking-card';

        // バッジ（実際の順位を使用）
        const rankClass = rank <= 3 ? `rank-${rank}` : '';
        const icon = rank === 1 ? '<i class="fa-solid fa-crown"></i>' : rank;
        const badgeHtml = `<div class="rank-badge ${rankClass}">${icon}</div>`;

        // お気に入りボタンの生成
        const isFavorite = favoriteIds.includes(item.id);
        const favIconClass = isFavorite ? 'fa-solid' : 'fa-regular';
        const favActiveClass = isFavorite ? 'active' : '';
        const favBtnHtml = `
            <button class="favorite-btn ${favActiveClass}" data-id="${item.id}" onclick="toggleFavorite(${item.id}, event)">
                <i class="${favIconClass} fa-heart"></i>
            </button>
        `;

        // ランキングカードの情報源リンク生成
        const rankingSourceHtml = item.sourceUrl
            ? `<a href="${item.sourceUrl}" target="_blank" rel="noopener noreferrer" class="source-link"><i class="fa-solid fa-arrow-up-right-from-square"></i> ${item.source}</a>`
            : `<i class="fa-solid fa-link"></i> ${item.source}`;

        article.innerHTML = `
            ${badgeHtml}
            <h3>${item.title}</h3>
            <div class="ranking-meta">
                <span class="news-category" style="background-color: ${getCategoryColor(item.category)}; position: static; padding: 3px 8px;">${item.categoryLabel}</span>
                <span class="news-source">${rankingSourceHtml}</span>
            </div>
            ${favBtnHtml}
        `;
    } else {
        // 通常ニュースカード（画像あり）
        article.className = 'news-card';

        // 通常カードにはバッジを表示しない（重複を避けるため、またはデザイン上）
        // アイコンとグラデーションを使用
        const imageStyle = `background: ${item.gradient || item.imageColor};`;
        const iconClass = item.icon || 'fa-image';

        // お気に入りボタンの生成
        const isFavorite = favoriteIds.includes(item.id);
        const favIconClass = isFavorite ? 'fa-solid' : 'fa-regular';
        const favActiveClass = isFavorite ? 'active' : '';
        const favBtnHtml = `
            <button class="favorite-btn ${favActiveClass}" data-id="${item.id}" onclick="toggleFavorite(${item.id}, event)">
                <i class="${favIconClass} fa-heart"></i>
            </button>
        `;

        // 通常カードの情報源リンク生成
        const sourceHtml = item.sourceUrl
            ? `<a href="${item.sourceUrl}" target="_blank" rel="noopener noreferrer" class="source-link"><i class="fa-solid fa-arrow-up-right-from-square"></i> ${item.source}</a>`
            : `<i class="fa-solid fa-link"></i> ${item.source}`;

        article.innerHTML = `
            <div class="news-image" style="${imageStyle}">
                <div class="img-content">
                    <i class="fa-solid ${iconClass} fa-3x"></i>
                </div>
                <span class="news-category" style="background-color: ${getCategoryColor(item.category)}">${item.categoryLabel}</span>
            </div>
            <div class="news-content">
                <div class="news-meta">
                    <span class="news-date">${item.date}</span>
                    <span class="news-source">${sourceHtml}</span>
                </div>
                <h3>${item.title}</h3>
                <p>${item.summary}</p>
                ${favBtnHtml}
            </div>
        `;
    }

    return article;
}

// カテゴリに応じた色を返す
function getCategoryColor(category) {
    switch (category) {
        case 'sweets': return '#f1c40f'; // 黄色
        case 'retail': return '#9b59b6'; // 紫
        case 'gaishoku': return '#c0392b'; // 濃い赤
        case 'nakashoku': return '#16a085'; // ティールグリーン
        case 'health': return '#e84393'; // ピンク
        case 'saving': return '#f39c12'; // オレンジ
        case 'z_gen': return '#a29bfe'; // 紫（淡い）
        case 'asian': return '#ff0099'; // ビビッドピンク
        case 'sns': return '#e056fd'; // ネオンパープル
        case 'hiroshima': return '#c0392b'; // 深い赤（もみじ色）
        case 'fukuoka': return '#ff4d6d'; // 明太ピンク
        case 'hokkaido': return '#4a90d9'; // 北海道ブルー（雪原・空）
        default: return '#333';
    }
}

// フィルター機能の設定
function setupFilters() {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // アクティブクラスの切り替え
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // カテゴリ更新とフィルタ適用
            currentCategory = btn.getAttribute('data-category');
            applyFilters();
        });
    });
}

// 検索機能の設定
function setupSearch() {
    const handleSearch = () => {
        currentSearchTerm = searchInput.value.trim().toLowerCase();
        applyFilters();
    };

    searchInput.addEventListener('input', handleSearch);
}

// フィルタリングロジック（カテゴリ＋検索）
function applyFilters() {
    let filteredData = newsData;

    // お気に入りフィルタ
    if (showFavoritesOnly) {
        filteredData = filteredData.filter(item => favoriteIds.includes(item.id));
    }

    // カテゴリフィルタ
    if (currentCategory !== 'all') {
        filteredData = filteredData.filter(item => item.category === currentCategory);
    }

    // 検索フィルタ
    if (currentSearchTerm) {
        filteredData = filteredData.filter(item => {
            const titleMatch = item.title.toLowerCase().includes(currentSearchTerm);
            const summaryMatch = item.summary.toLowerCase().includes(currentSearchTerm);
            const sourceMatch = item.source && item.source.toLowerCase().includes(currentSearchTerm);
            return titleMatch || summaryMatch || sourceMatch;
        });
    }

    // 日付の降順（新しい順）でソート
    filteredData.sort((a, b) => b.date.localeCompare(a.date));

    renderNews(filteredData);

    // 検索結果がない場合の表示
    if (filteredData.length === 0) {
        newsGrid.innerHTML = '<p style="text-align:center; width:100%; color:#666;">該当する記事が見つかりませんでした。</p>';
    }
}

// ========================================
// コラムデータ（固定4件 ＋ ストックの中から日付で2件選択）
// ========================================
// ========================================
// コラム統一プール
// 鮮度の高い順に自動選出され、期限切れは自動的に非表示になる
// 新しいコラムを追加するだけで古いものと自動的に入れ替わる
// ========================================
const columnPool = [
    // --- 最新コラム（2026年3月〜） ---
    {
        id: 9,
        tag: "プロテイン市場",
        title: "「高タンパク」が日常食に溶け込む時代——プロテイン市場の第3波",
        body: `筋トレ愛好家の専用品だったプロテインが、いまやコンビニの棚を占拠している。ヨーグルト、パン、チョコレート、さらにはラーメンにまでタンパク質強化の波が押し寄せている。

この第3波の特徴は「美味しさとの両立」だ。初期の粉末プロテインは味が二の次だったが、現在の高タンパク食品は通常品と遜色のない味覚体験を実現している。消費者は「我慢して摂る」から「楽しんで摂る」へとシフトした。

特に注目すべきは、シニア層への広がりだ。フレイル（虚弱）予防の観点から、医療・介護の現場でもタンパク質摂取の重要性が叫ばれており、味も食感もハードルが低い「日常食型プロテイン」の需要は今後さらに拡大する見通しだ。

企業にとっての課題は差別化。単に「タンパク質◯g」と謳うだけでは競争に勝てない。原料の透明性、アミノ酸スコア、吸収効率といった「質」での訴求が次の競争軸になる。`,
        author: { name: "井上 拓也", title: "スポーツ栄養コンサルタント", initials: "井", color: "#e74c3c" },
        readTime: 7,
        headerColor: "linear-gradient(to right, #ff6b6b, #ffa07a)",
        publishedDate: "2026.03.25",
        expiresInDays: 90
    },
    {
        id: 10,
        tag: "AI×食品",
        title: "AIレシピ提案が変える「献立疲れ」の解消と食品購買行動",
        body: `「今日の夕飯、何にしよう」——この日常の問いに、AIが本格的に答え始めた。冷蔵庫の中身をカメラで撮影するだけで最適なレシピを提案するアプリが急速に普及している。

単なるレシピ検索との違いは「パーソナライズ」にある。家族構成、アレルギー情報、栄養バランス、さらには直近の食事履歴まで考慮した提案は、従来のレシピサイトでは実現できなかった価値だ。

小売業界もこの流れに注目している。AIレシピと連動した食材キットの自動配送サービスが登場し、「献立決定→買い物→調理」という一連の流れをシームレスにつなぐエコシステムが構築されつつある。

食品メーカーにとっての示唆は大きい。AIレシピに自社商品が採用されるかどうかが、売上を左右する新たなマーケティングチャネルとなりつつある。`,
        author: { name: "松本 理恵", title: "フードテックジャーナリスト", initials: "松", color: "#2980b9" },
        readTime: 6,
        headerColor: "linear-gradient(to right, #667eea, #764ba2)",
        publishedDate: "2026.03.20",
        expiresInDays: 90
    },
    {
        id: 11,
        tag: "地方創生",
        title: "「道の駅」が食のテーマパークへ進化——地方グルメ経済圏の形成",
        body: `かつてはドライブの休憩所に過ぎなかった「道の駅」が、いまや年間来場者数100万人を超える食のテーマパークへと変貌を遂げている。

成功の鍵は「ここでしか食べられない」体験の創出だ。地元農家と直結した朝採れ野菜の即売、地元シェフによるライブキッチン、地域の食文化を体験するワークショップなど、滞在型の魅力が来訪者のリピート率を押し上げている。

ECとの連携も進んでいる。現地で気に入った商品をスマホでスキャンするだけで定期購入が開始される仕組みは、一度きりの観光消費を継続的な関係へと転換させる。

地方自治体と民間の協業モデルとして、道の駅の成功事例は他の地域活性化施策にも応用可能だ。`,
        author: { name: "高橋 直樹", title: "地方創生プランナー", initials: "高", color: "#27ae60" },
        readTime: 6,
        headerColor: "linear-gradient(to right, #56ab2f, #a8e063)",
        publishedDate: "2026.03.15",
        expiresInDays: 90
    },
    {
        id: 5,
        tag: "外食産業",
        title: "「体験型外食」が生き残る理由——デリバリー全盛時代の逆説",
        body: `コロナ禍を経てデリバリーが生活に定着した今だからこそ、あえて『その場でしか味わえない体験』を提供する実店舗の価値が再評価されている。

プロの技を目の前で楽しむ演出や、店舗独自のコミュニティ形成、さらには香りや温度といった五感をフルに使った訴求。これらは画面越しでは決して得られない価値だ。デジタルが浸透すればするほど、人々は本物のアナログな体験を希求する傾向にある。

最近の成功店舗に共通しているのは、「目的性」の高さだ。単にお腹を満たすだけでなく、「あそこの、あのサービスを体験しに行こう」と思わせる強い引力が備わっている。内装のこだわりや、スタッフとの対話、顧客自身が料理の仕上げに参加する仕掛けなどが、その体験価値を最大化させている。

デジタルが浸透すればするほど、アナログな対面サービスの希少性が高まる。次世代の外食店が差別化すべきポイントと、生き残るための店舗設計の極意を説く。実店舗はもはや「食事を提供する場所」から「体験の劇場」へと進化しなければならない。`,
        author: { name: "中村 大輔", title: "外食産業コンサルタント", initials: "中", color: "#c0392b" },
        readTime: 9,
        headerColor: "linear-gradient(to right, #f093fb, #f5576c)",
        publishedDate: "2026.03.10",
        expiresInDays: 90
    },
    {
        id: 1,
        tag: "市場分析",
        title: "2026年の食品市場を動かす「5つのメガトレンド」とは",
        body: `物価高・健康志向・Z世代の台頭・サステナビリティ・デジタル化。この5つのキーワードが今年の食品業界を根底から変えようとしている。

特にZ世代の価値観は、単なる栄養摂取を超え「社会への貢献」や「自己表現」としての食を求めており、これにどう応えるかが企業の命運を握る。かつてのような大量生産・大量消費のモデルは、もはや通用しない。

具体的なトレンドの一つとして、「機能性の可視化」がある。消費者は自分の体調や目的に合わせ、どの栄養素をどれだけ摂取すべきかを明確にすることを求めている。また、デジタル化は配送の効率化だけでなく、個々の嗜好に基づいた「パーソナライズ・ド・メニュー」の提案をも可能にした。

サステナビリティにおいては、単に「環境にやさしい」だけでなく、それがどのように美味しいのか、どう食卓を豊かにするのかという情緒的価値との融合が必須となる。

各トレンドの相互作用を分析し、これからの時代に企業が取るべき生存戦略と、具体的なアクションプランを専門家の視点から徹底解説する。変化を恐れるのではなく、このパラダイムシフトをいかに自社のチャンスへと昇華させるかが問われている。`,
        author: { name: "田中 誠一", title: "食品マーケティングアナリスト", initials: "田", color: "#e67e22" },
        readTime: 8,
        headerColor: "linear-gradient(to right, #f6d365, #fda085)",
        publishedDate: "2026.03.01",
        expiresInDays: 90
    },
    // --- 2月公開 ---
    {
        id: 2,
        tag: "消費者行動",
        title: "「節約」と「プチ贅沢」が共存する矛盾した消費者心理",
        body: `物価上昇が続く中、消費者は日常品を徹底的に節約しながら、特別な体験には惜しみなく投資する「メリハリ消費」を加速させている。

かつての「安ければ良い」という一律のデフレマインドから、価値を感じるものには対価を払うという選択的消費へのシフト。この背景には、日々の生活の中でのストレス解消や、自己肯定感を高めるための「精神的報酬」としての食の役割が大きくなっている。

調査によれば、週に一度の「自分へのご褒美」として高級アイスや銘店監修のデリを購入する割合が、単身世帯を中心に急増している。一方で、主菜以外の副菜については、冷凍食品やプライベートブランドを活用した徹底的なコストカットが行われている。

この複雑で二極化した消費者心理の裏側にある根本的な動機を読み解く。企業は単なる価格競争から脱却し、どの部分で『贅沢感』を演出すべきか、その境界線を考える必要がある。ブランドが提供すべきは「安さ」か、それとも「至福の一時」か。そのポジショニングがかつてないほど重要になっている。`,
        author: { name: "佐藤 美咲", title: "消費者行動研究家", initials: "佐", color: "#27ae60" },
        readTime: 6,
        headerColor: "linear-gradient(to right, #43e97b, #38f9d7)",
        publishedDate: "2026.02.15",
        expiresInDays: 90
    },
    {
        id: 12,
        tag: "中食革命",
        title: "冷凍食品の「プレミアム化」が外食を脅かす——中食市場の地殻変動",
        body: `もはや冷凍食品は「手抜き」ではない。ミシュラン星付きシェフ監修のフローズンミール、産地直送の瞬間冷凍フルーツなど、品質で外食に迫る商品が続々と登場している。

背景にあるのは急速凍結技術の革新だ。CAS冷凍やプロトン凍結など、細胞を壊さずに凍結する技術が普及し、解凍後の味と食感が飛躍的に向上した。

共働き世帯の増加と時短ニーズの高まりが追い風となり、中食市場は前年比12%増で成長を続けている。外食産業にとって、もはや競合は隣の飲食店ではなく、冷凍庫の中にある。`,
        author: { name: "渡辺 恵", title: "中食産業リサーチャー", initials: "渡", color: "#8e44ad" },
        readTime: 5,
        headerColor: "linear-gradient(to right, #a855f7, #ec4899)",
        publishedDate: "2026.02.01",
        expiresInDays: 90
    },
    // --- 1月公開 ---
    {
        id: 6,
        tag: "Z世代",
        title: "Z世代が「昭和レトロ」に惹かれる深層心理",
        body: `デジタルネイティブであるZ世代が、なぜ昭和の喫茶店文化や不便なほどアナログなパッケージに熱狂するのか。

そこには効率重視の社会が生み出した『本物体験』への強烈な渇望がある。スマホの中の完璧な美しさよりも、あえてノイズのあるものや『エモい』ストーリー性に救いを求める心理状態。また、不便さや手間が、彼らにとっては「自分らしさ」を表現するための新鮮な要素として映っている。

レコードの音、フィルムカメラの質感、そして喫茶店の分厚いナポリタン。これらは単なる過去の遺物ではなく、Z世代にとっては「未知の新しい価値」なのである。このトレンドから読み解けるのは、テクノロジーが進歩すればするほど、人間は五感に訴える根源的な温もりを求めるという普遍的な法則だ。

単なるブームで片付けず、この世代が食に求める『意味』の本質を突くことが、次世代のヒット商品開発の鍵となる。最新のリサーチ結果から見えた、Z世代の心に刺さるアプローチ手法を紐解く。`,
        author: { name: "小林 さくら", title: "Z世代トレンドリサーチャー", initials: "小", color: "#a29bfe" },
        readTime: 6,
        headerColor: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
        publishedDate: "2026.01.15",
        expiresInDays: 90
    },
    // --- 2025年12月以前（古いコラム） ---
    {
        id: 3,
        tag: "SNS戦略",
        title: "TikTok・Instagramで「バズる」食品ブランドの共通点",
        body: `もはやフォロワー数だけが指標ではない。現代のSNSマーケティングで最も重要なのは「共感」と「ユーザー参加型」の設計だ。

ユーザーが思わずカメラを向けたくなる『シズル感』の演出から、UGC（ユーザー生成コンテンツ）を生み出すための仕掛けまで、成功事例には明確な共通項がある。その鍵となるのは「意外性」と「再現性」だ。

例えば、馴染みのある定番商品に少しの工夫を加えて新しい食べ方を提案する投稿は、ユーザーが自分でも試してみたいという欲求を刺激する。また、ブランドの「中の人」の人間味溢れる発信が、企業の透明性を高め、ファンとの直接的なつながりを生んでいる。

マイクロインフルエンサーを巧みに活用し、消費者を共創パートナーとして巻き込む手法。ブランドに対する信頼 and 愛着を育むための、最新SNS戦略のステップを分析・公開する。デジタル上の「バズ」を一過性で終わらせず、いかにしてCRM（顧客関係管理）へと繋げ、ブランドの資産にするかが勝負の分かれ目となる。`,
        author: { name: "鈴木 健太", title: "フードSNSコンサルタント", initials: "鈴", color: "#9b59b6" },
        readTime: 5,
        headerColor: "linear-gradient(to right, #a18cd1, #fbc2eb)",
        publishedDate: "2025.12.20",
        expiresInDays: 90
    },
    {
        id: 7,
        tag: "フードテック",
        title: "3Dフードプリンターが変える「介護食」の未来",
        body: `見た目と食感、そして正確な栄養管理。3Dフードプリンティング技術が、これまでの「ペースト状」だった介護食の概念を覆そうとしている。

食材を分子レベルで再構築することで、飲み込みやすさを維持したまま、本物のステーキや温野菜に見える料理を再現。視覚的な喜びが食欲を刺激し、高齢者のQOL（生活の質）向上に直結している事例が増えている。

単なる効率化ではなく、「食べる喜び」をテクノロジーでいかに支えるか。最新の導入事例から、その可能性を探る。`,
        author: { name: "田中 健一", title: "フードテック専門家", initials: "田", color: "#3498db" },
        readTime: 5,
        headerColor: "linear-gradient(to right, #acb6e5, #86fde8)",
        publishedDate: "2025.12.01",
        expiresInDays: 90
    },
    {
        id: 4,
        tag: "サステナビリティ",
        title: "「フードロス削減」は義務から競争優位へ",
        body: `環境への配慮が企業イメージ向上だけでなく、実際のコスト削減と新たな収益源の創出につながる時代が来た。

訳あり商品のEC販売や余剰食材を活用したアップサイクルメニュー開発など、先進企業はすでに利益を生むモデルへと昇華させている。以前は「廃棄」として処理されていたものが、新たな付加価値を持つ「商品」へと生まれ変わるプロセスは、サーキュラーエコノミーの実現に向けた大きな一歩だ。

特に注目すべきは、AIを活用した高度な需要予測システムである。これにより、製造段階での無駄を極限まで減らし、かつ販売チャンスを逃さないという相反する課題を解決している企業が増えている。

単なる社会貢献（CSR）に留まらず、いかにしてサステナビリティを事業の核（コアビジネス）に組み込むか。業界全体が取り組むべき食品リサイクルやロス削減の最新テクノロジー、そして成功している中小企業の優れた知恵を紹介する。これは「守り」の施策ではなく、次世代に選ばれるブランドになるための「攻め」の戦略である。`,
        author: { name: "山田 花子", title: "サステナブルフード研究者", initials: "山", color: "#16a085" },
        readTime: 7,
        headerColor: "linear-gradient(to right, #0ba360, #3cba92)",
        publishedDate: "2025.11.10",
        expiresInDays: 90
    },
    {
        id: 8,
        tag: "広島・食文化",
        title: "新サッカースタジアムと連動する「広島ナイトグルメ」の商機",
        body: `2024年開業の新スタジアムを核に、広島の夜の街が変わりつつある。試合観戦後の「ハシゴ酒」需要をターゲットにした新業態が続々誕生。

お好み焼きだけではない、地産地消のバルや、瀬戸内の魚介を洋風にアレンジしたビストロなど。スポーツと食を掛け合わせた新しい都市回遊モデル。地域の飲食店がいかにしてこの巨大な波を自覚し、活かしていくべきか。`,
        author: { name: "広島 太郎", title: "地域経済アナリスト", initials: "広", color: "#e74c3c" },
        readTime: 7,
        headerColor: "linear-gradient(to right, #ff5f6d, #ffc371)",
        publishedDate: "2025.10.15",
        expiresInDays: 90
    }
];

// ========================================
// コラム鮮度判定
// ========================================
function getColumnFreshness(column) {
    const now = new Date();
    const published = new Date(column.publishedDate.replace(/\./g, '-'));
    const expiresInDays = column.expiresInDays || 90;
    const daysSincePublished = Math.floor((now - published) / (1000 * 60 * 60 * 24));
    const daysUntilExpiry = expiresInDays - daysSincePublished;

    if (daysSincePublished < 0) return { status: 'fresh', label: 'NEW', daysInfo: '公開前' };
    if (daysSincePublished <= 30) return { status: 'fresh', label: 'NEW', daysInfo: `公開${daysSincePublished}日目` };
    if (daysUntilExpiry > 30) return { status: 'active', label: '', daysInfo: `残り${daysUntilExpiry}日` };
    if (daysUntilExpiry > 0) return { status: 'aging', label: '更新推奨', daysInfo: `残り${daysUntilExpiry}日` };
    return { status: 'expired', label: '要差替', daysInfo: `${Math.abs(daysUntilExpiry)}日超過` };
}

// ========================================
// コラムカードのレンダリング
// ========================================
function renderColumns() {
    const columnGrid = document.getElementById('column-grid');
    if (!columnGrid) return;

    columnGrid.innerHTML = '';

    // プールから期限切れを除外し、鮮度順（公開日の新しい順）にソートして6件選出
    const DISPLAY_COUNT = 6;
    const freshPool = columnPool
        .filter(col => getColumnFreshness(col).status !== 'expired')
        .sort((a, b) => {
            const dateA = new Date(a.publishedDate.replace(/\./g, '-'));
            const dateB = new Date(b.publishedDate.replace(/\./g, '-'));
            return dateB - dateA; // 新しい順
        });

    // 期限切れコラムはバックフィルしない（空きスロットで改廃を促進）
    const displayColumns = freshPool.slice(0, DISPLAY_COUNT);
    const emptySlots = DISPLAY_COUNT - displayColumns.length;

    // 鮮度サマリーを計算（プール全体が対象）
    const allColumns = columnPool;
    let agingCount = 0;
    let expiredCount = 0;
    allColumns.forEach(col => {
        const f = getColumnFreshness(col);
        if (f.status === 'aging') agingCount++;
        if (f.status === 'expired') expiredCount++;
    });

    // サマリー表示を更新
    const summaryEl = document.getElementById('column-freshness-summary');
    if (summaryEl) {
        if (agingCount === 0 && expiredCount === 0) {
            summaryEl.innerHTML = '<span class="freshness-summary-ok"><i class="fa-solid fa-circle-check"></i> すべてのコラムは最新です</span>';
        } else {
            let parts = [];
            if (agingCount > 0) parts.push(`<span class="freshness-summary-aging"><i class="fa-solid fa-triangle-exclamation"></i> 更新推奨: ${agingCount}件</span>`);
            if (expiredCount > 0) parts.push(`<span class="freshness-summary-expired"><i class="fa-solid fa-circle-xmark"></i> 要差替: ${expiredCount}件</span>`);
            summaryEl.innerHTML = parts.join('<span class="freshness-summary-divider"> / </span>');
        }
    }

    displayColumns.forEach(item => {
        const freshness = getColumnFreshness(item);
        const card = document.createElement('article');
        card.className = `column-card${freshness.status === 'expired' ? ' column-expired' : ''}`;

        // 改行を<br>に変換して表示
        const formattedBody = item.body.replace(/\n/g, '<br>');

        // 鮮度バッジHTML
        let badgeHtml = '';
        if (freshness.status === 'fresh') {
            badgeHtml = `<span class="column-freshness-badge badge-fresh"><i class="fa-solid fa-sparkles"></i> ${freshness.label}</span>`;
        } else if (freshness.status === 'aging') {
            badgeHtml = `<span class="column-freshness-badge badge-aging"><i class="fa-solid fa-triangle-exclamation"></i> ${freshness.label}</span>`;
        } else if (freshness.status === 'expired') {
            badgeHtml = `<span class="column-freshness-badge badge-expired"><i class="fa-solid fa-circle-xmark"></i> ${freshness.label}</span>`;
        }

        // 期限切れ警告メッセージ
        const expiredMsg = freshness.status === 'expired'
            ? `<div class="column-expired-notice"><i class="fa-solid fa-rotate"></i> このコラムは掲載期限を過ぎています（${freshness.daysInfo}）</div>`
            : '';

        card.innerHTML = `
            <div class="column-card-header" style="background: ${item.headerColor};">
                ${badgeHtml}
            </div>
            <div class="column-card-body">
                <div class="column-tag-row">
                    <span class="column-tag"># ${item.tag}</span>
                    <span class="column-pub-date"><i class="fa-regular fa-calendar"></i> ${item.publishedDate}</span>
                </div>
                <h3>${item.title}</h3>
                <p class="column-text-content">${formattedBody}</p>

                <div class="column-action">
                    <button class="btn-column-toggle">
                        <span class="btn-label">全文を詳しく読む</span> <i class="fa-solid fa-chevron-down"></i>
                    </button>
                </div>

                ${expiredMsg}

                <div class="column-card-footer">
                    <div class="column-author">
                        <div class="author-avatar" style="background-color: ${item.author.color};">${item.author.initials}</div>
                        <div class="author-info">
                            <span class="author-name">${item.author.name}</span>
                            <span class="author-title">${item.author.title}</span>
                        </div>
                    </div>
                    <span class="column-read-time">
                        <i class="fa-regular fa-clock"></i> 約${item.readTime}分
                    </span>
                </div>
            </div>
        `;

        // 展開・格納イベントの設定
        const toggleBtn = card.querySelector('.btn-column-toggle');

        toggleBtn.addEventListener('click', () => {
            const isExpanded = card.classList.toggle('expanded');
            const icon = toggleBtn.querySelector('i');
            const label = toggleBtn.querySelector('.btn-label');

            if (isExpanded) {
                label.textContent = '内容を閉じる';
                icon.className = 'fa-solid fa-chevron-up';
            } else {
                label.textContent = '全文を詳しく読む';
                icon.className = 'fa-solid fa-chevron-down';
                card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });

        columnGrid.appendChild(card);
    });

    // 空きスロットにプレースホルダーを表示（改廃を促進）
    for (let i = 0; i < emptySlots; i++) {
        const placeholder = document.createElement('article');
        placeholder.className = 'column-card column-placeholder';
        placeholder.innerHTML = `
            <div class="column-card-header" style="background: linear-gradient(135deg, #dfe6e9, #b2bec3);">
            </div>
            <div class="column-card-body" style="display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:200px;text-align:center;color:#636e72;">
                <i class="fa-solid fa-pen-to-square" style="font-size:2.5rem;margin-bottom:12px;color:#b2bec3;"></i>
                <h3 style="color:#636e72;font-size:1rem;">新しいコラムを募集中</h3>
                <p style="font-size:0.85rem;margin-top:8px;color:#95a5a6;">期限切れコラムが差し替えられました。<br>新しい専門家コラムの寄稿をお待ちしています。</p>
            </div>
        `;
        columnGrid.appendChild(placeholder);
    }
}

// ========================================
// デイリー記事プール（約1か月分のストック）
// 毎日1件ずつローテーションで選択される
// ========================================
const dailyArticlePool = [
    {
        id: 201,
        title: "「発酵バター」ブームが本格到来、国産ブランドが相次ぎ登場",
        category: "sweets",
        categoryLabel: "スイーツ",
        summary: "欧州輸入品が主流だった発酵バターに、国産の新ブランドが参入。乳酸菌の風味と濃厚なコクが、パンやスイーツ好きの間で話題を集めている。",
        source: "フード・ジャーナル",
        sourceUrl: "https://www.food-journal.jp/",
        icon: "fa-star",
        gradient: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
        imageColor: "#f1c40f",
        viewCount: 870
    },
    {
        id: 202,
        title: "コンビニ「おにぎり」に革命、具材が内側から広がる新形状が登場",
        category: "retail",
        categoryLabel: "小売・流通",
        summary: "海苔とご飯の境界を取り払った新発想の形状。食べ進めるごとに具材が口に広がるデザインで、大手コンビニが特許を取得し話題に。",
        source: "コンビニ・ウォッチャー",
        sourceUrl: "https://www.convenience-watcher.jp/",
        icon: "fa-circle-dot",
        gradient: "linear-gradient(to top, #0ba360 0%, #3cba92 100%)",
        imageColor: "#27ae60",
        viewCount: 1320
    },
    {
        id: 203,
        title: "「ノンアルスパークリング」市場が急拡大、健康志向の20代が牽引",
        category: "beverage",
        categoryLabel: "飲料",
        summary: "飲酒機会を選べる「ソバーキュリアス」トレンドが浸透。ワインのような複雑な風味を持つノンアルコールスパークリングが外食シーンでも定番化しつつある。",
        source: "ドリンク・トレンドラボ",
        sourceUrl: "https://www.drink-trendlab.jp/",
        icon: "fa-champagne-glasses",
        gradient: "linear-gradient(to right, #00dbde 0%, #fc00ff 100%)",
        imageColor: "#8e44ad",
        viewCount: 1050
    },
    {
        id: 204,
        title: "「スープカレー」が全国区へ、札幌発のチェーン店が首都圏に急展開",
        category: "gaishoku",
        categoryLabel: "外食",
        summary: "スパイスの奥深さとボリューム感が支持され、北海道以外での認知度が急上昇。オープン初日に行列が絶えない店舗が続出している。",
        source: "グルメログ・プレス",
        sourceUrl: "https://www.gourmet-log.net/",
        icon: "fa-bowl-food",
        gradient: "linear-gradient(to right, #43e97b 0%, #38f9d7 100%)",
        imageColor: "#16a085",
        viewCount: 960
    },
    {
        id: 205,
        title: "食べる「美容液」、コラーゲン配合の高機能スナックが台頭",
        category: "health",
        categoryLabel: "健康",
        summary: "スキンケアと食事を一体化させる「インナービューティー」トレンドが加速。コラーゲンやビタミンCを贅沢に配合したグミやチップスが美容感度の高い層に刺さる。",
        source: "ビューティー・フード通信",
        sourceUrl: "https://www.beauty-food.jp/",
        icon: "fa-heart-pulse",
        gradient: "linear-gradient(to top, #ff9a9e 0%, #fecfef 99%)",
        imageColor: "#e84393",
        viewCount: 1180
    },
    {
        id: 206,
        title: "「100円均一」の業務用食材店が人気、プロの味を家庭で再現",
        category: "saving",
        categoryLabel: "節約",
        summary: "飲食店向けの業務用スパイスや調味料を小売り販売する店舗が都市部を中心に増加。少量から買えるため、節約しながら本格的な味を楽しめると主婦層に支持。",
        source: "節約生活マガジン",
        sourceUrl: "https://www.setsuyaku-mag.jp/",
        icon: "fa-piggy-bank",
        gradient: "linear-gradient(to top, #fcc5e4 0%, #fda34b 100%)",
        imageColor: "#f39c12",
        viewCount: 790
    },
    {
        id: 207,
        title: "「#ぼっち飯」投稿が1,000万件突破、おひとり様グルメ文化が成熟",
        category: "sns",
        categoryLabel: "SNSトレンド",
        summary: "一人での外食・テイクアウトを積極的に楽しむ投稿がSNSで爆増。孤食を「楽しみ」として発信するポジティブなムーブメントが、外食業界の一人客対応を後押ししている。",
        source: "SNSフードレポート",
        sourceUrl: "https://www.sns-food-report.jp/",
        icon: "fa-hashtag",
        gradient: "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)",
        imageColor: "#3498db",
        viewCount: 2400
    },
    {
        id: 208,
        title: "宮島の「もみじ饅頭」進化系、黒トリュフ入り高級版が話題に",
        category: "hiroshima",
        categoryLabel: "広島県",
        summary: "老舗和菓子メーカーが異業種とコラボし、フランス産黒トリュフを餡に練り込んだご当地プレミアムスイーツを限定販売。土産品のイメージを刷新している。",
        source: "広島フードニュース",
        sourceUrl: "https://www.hiroshima-food-news.jp/",
        icon: "fa-leaf",
        gradient: "linear-gradient(135deg, #FF512F 0%, #DD2476 100%)",
        imageColor: "#e74c3c",
        viewCount: 1120
    },
    {
        id: 209,
        title: "博多の「一蘭」スタイルが輸出モデルに、海外で日本式ラーメン体験が急増",
        category: "fukuoka",
        categoryLabel: "福岡県",
        summary: "個室仕切り・禁会話のコンセプトが欧米で「瞑想ラーメン体験」として再解釈される。没入感を重視した食のスタイルが海外で高級志向の顧客に受け入れられつつある。",
        source: "グローバル・フードビジネス",
        sourceUrl: "https://www.global-food-biz.jp/",
        icon: "fa-fire",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        imageColor: "#ff4d6d",
        viewCount: 1450
    },
    {
        id: 210,
        title: "「腸活グミ」市場が急成長、プロバイオティクス入りのお菓子が棚を席巻",
        category: "health",
        categoryLabel: "健康",
        summary: "ヨーグルトやサプリではなく、お菓子感覚で腸内環境を整えられるグミが特に若い女性に支持。大手製菓メーカーも相次いで機能性表示食品の申請を進めている。",
        source: "機能性食品ニュース",
        sourceUrl: "https://www.functional-food-news.jp/",
        icon: "fa-capsules",
        gradient: "linear-gradient(to right, #43e97b 0%, #38f9d7 100%)",
        imageColor: "#27ae60",
        viewCount: 980
    },
    {
        id: 211,
        title: "「サブスク弁当」サービスが拡大、月額定額でオフィスに届く時代",
        category: "nakashoku",
        categoryLabel: "中食",
        summary: "管理栄養士監修の日替わり弁当を職場に届けるサービスが急増。毎日の昼食費と買いに行く手間を削減できる利便性が、特にテレワーク解除後の会社員に響いている。",
        source: "宅食ウィークリー",
        sourceUrl: "https://www.takushoku-weekly.jp/",
        icon: "fa-box-open",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        imageColor: "#9b59b6",
        viewCount: 860
    },
    {
        id: 212,
        title: "「韓国チキン」の多様化が加速、甘辛以外のフレーバー競争が激化",
        category: "asian",
        categoryLabel: "韓国・アジア",
        summary: "ガンジャンケジャン（醤油漬けカニ）やマラ風味チキンなど、より本格的な韓国フレーバーへの移行が進む。単なる「辛い＝韓国」から脱却した細分化が始まっている。",
        source: "アジアフードレポート",
        sourceUrl: "https://www.asia-food-report.jp/",
        icon: "fa-bowl-rice",
        gradient: "linear-gradient(to right, #fa709a 0%, #fee140 100%)",
        imageColor: "#ff0099",
        viewCount: 1250
    },
    {
        id: 213,
        title: "Z世代狙い「ブラインドボックス」型食品が登場、何が入っているかわからないお菓子",
        category: "z_gen",
        categoryLabel: "Z世代",
        summary: "フィギュアのガチャ文化を取り入れた、中身が見えない箱入りスナックセット。SNS開封動画との相性が抜群で、コレクション性と共有欲を同時に刺激する新型態。",
        source: "Z世代マーケティングメモ",
        sourceUrl: "https://www.zgen-marketing.jp/",
        icon: "fa-gift",
        gradient: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        imageColor: "#a29bfe",
        viewCount: 1780
    },
    {
        id: 214,
        title: "「タンパク質争奪戦」スーパーフードとしてテンペが再注目",
        category: "health",
        categoryLabel: "健康",
        summary: "インドネシア発の大豆発酵食品「テンペ」が、高タンパク・低脂肪・腸活の三拍子で健康意識の高い消費者に再評価。国内製造メーカーが生産能力を増強中。",
        source: "スーパーフード・ダイジェスト",
        sourceUrl: "https://www.superfood-digest.jp/",
        icon: "fa-seedling",
        gradient: "linear-gradient(120deg, #f6d365 0%, #fda085 100%)",
        imageColor: "#e67e22",
        viewCount: 670
    },
    {
        id: 215,
        title: "「AIメニュー開発」食品メーカーが導入拡大、ヒット商品の再現性が向上",
        category: "retail",
        categoryLabel: "小売・流通",
        summary: "SNS投稿データと店舗POSデータをAIが解析し、次のトレンド商品を予測する仕組みが普及。人間の勘と経験に依存していた開発プロセスに変革が起きつつある。",
        source: "フードテック・フォーカス",
        sourceUrl: "https://www.foodtech-focus.jp/",
        icon: "fa-microchip",
        gradient: "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)",
        imageColor: "#3498db",
        viewCount: 830
    },
    {
        id: 216,
        title: "「コーヒーナップ」習慣が広まる、カフェインと仮眠の科学的組み合わせ",
        category: "beverage",
        categoryLabel: "飲料",
        summary: "コーヒーを飲んですぐ20分の仮眠を取る「コーヒーナップ」がビジネスパーソンの間でトレンドに。仮眠前に飲むエスプレッソ専用ブレンドコーヒーが新市場を形成。",
        source: "コーヒー・カルチャー誌",
        sourceUrl: "https://www.coffee-culture.jp/",
        icon: "fa-mug-hot",
        gradient: "linear-gradient(to top, #d299c2 0%, #fef9d7 100%)",
        imageColor: "#d35400",
        viewCount: 910
    },
    {
        id: 217,
        title: "「スパイス自家調合」ブームが到来、量り売り専門店が全国に拡大",
        category: "retail",
        categoryLabel: "小売・流通",
        summary: "カレーやバーベキューのスパイスを自分でブレンドできる量り売り専門店がEC・実店舗両方で急増。食の「DIY化」が調味料カテゴリにも波及している。",
        source: "スパイス・マーケット通信",
        sourceUrl: "https://www.spice-market.jp/",
        icon: "fa-pepper-hot",
        gradient: "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)",
        imageColor: "#e67e22",
        viewCount: 680
    },
    {
        id: 218,
        title: "「宅飲みプレミアム化」が加速、ワインペアリング家飲みセットが好調",
        category: "nakashoku",
        categoryLabel: "中食",
        summary: "高級レストランのソムリエが選んだワインと料理のペアリングセットをオンラインで注文する新サービスが登場。外食を超えるクオリティの宅飲み体験が新市場を形成。",
        source: "ホームダイニング・タイムス",
        sourceUrl: "https://www.home-dining-times.jp/",
        icon: "fa-wine-glass",
        gradient: "linear-gradient(to top, #5f72bd 0%, #9b23ea 100%)",
        imageColor: "#9b59b6",
        viewCount: 1090
    },
    {
        id: 219,
        title: "「メープルサップ」が新しい机上の春の飲み物として注目",
        category: "beverage",
        categoryLabel: "飲料",
        summary: "砂糖を作る前の未精製のカエデの樹液「メープルサップ」が、天然電解質飲料として健康志向の消費者にアピール。カナダ産の輸入品がオーガニック系食料品店に登場。",
        source: "ネイチャー・フード・ニュース",
        sourceUrl: "https://www.nature-food-news.jp/",
        icon: "fa-droplet",
        gradient: "linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)",
        imageColor: "#d35400",
        viewCount: 540
    },
    {
        id: 220,
        title: "「ドライエイジング肉」が家庭に、専用冷蔵庫の低価格帯が登場",
        category: "gaishoku",
        categoryLabel: "外食",
        summary: "レストラン専用だった熟成肉技術を家庭で楽しめる小型専用冷蔵庫が3万円台から登場。肉愛好者がSNSで熟成記録を投稿するコンテンツ消費との相性も抜群。",
        source: "ミート・トレンド・ジャーナル",
        sourceUrl: "https://www.meat-trend.jp/",
        icon: "fa-fire",
        gradient: "linear-gradient(to right, #f83600 0%, #f9d423 100%)",
        imageColor: "#c0392b",
        viewCount: 770
    },
    {
        id: 221,
        title: "「食育×ゲーミフィケーション」子ども向けアプリ食品が新市場を創造",
        category: "retail",
        categoryLabel: "小retail・流通",
        summary: "スマホアプリと連動し、食べながらキャラクターを育てる仕組みを持つ子ども向けスナックが登場。食育と娯楽を結びつけた次世代食品の先駆けとして注目を集める。",
        source: "ファミリー・フードテック",
        sourceUrl: "https://www.family-foodtech.jp/",
        icon: "fa-gamepad",
        gradient: "linear-gradient(to right, #92fe9d 0%, #00c9ff 100%)",
        imageColor: "#2ecc71",
        viewCount: 620
    },
    {
        id: 222,
        title: "広島「因島みかん」ハチミツ漬けがギフト市場で急成長",
        category: "hiroshima",
        categoryLabel: "広島県",
        summary: "しまなみ海道の恵みを受けた因島産みかんと地元養蜂場のハチミツを組み合わせたプレミアムギフトセットが贈答品として人気急上昇。EC週間売上が前年比3倍に。",
        source: "瀬戸内ギフト通信",
        sourceUrl: "https://www.setouchi-gift.jp/",
        icon: "fa-sun",
        gradient: "linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)",
        imageColor: "#e67e22",
        viewCount: 880
    },
    {
        id: 223,
        title: "福岡「糸島野菜」のブランド化が加速、都心の高級スーパーへ進出",
        category: "fukuoka",
        categoryLabel: "福岡県",
        summary: "九州屈指のブランド産地・糸島エリアの農産物が、有名百貨店の食品売場に並び始めた。土壌にこだわったミネラル豊富な野菜として、食の目利きに支持される。",
        source: "九州農業新報",
        sourceUrl: "https://www.kyushu-agri-news.jp/",
        icon: "fa-seedling",
        gradient: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)",
        imageColor: "#27ae60",
        viewCount: 730
    },
    {
        id: 224,
        title: "「フードバンク2.0」アプリが普及、余剰食品のリアルタイムマッチングが可能に",
        category: "saving",
        categoryLabel: "節約",
        summary: "閉店間近の飲食店がアプリ上で値引き販売し、消費者が超特価で購入できる仕組みが広まっている。食品ロス削減と節約が同時に実現するため、社会的関心も高い。",
        source: "サステナブル・フード・ジャーナル",
        sourceUrl: "https://www.sustainable-food-journal.jp/",
        icon: "fa-mobile-screen",
        gradient: "linear-gradient(to right, #00dbde 0%, #fc00ff 100%)",
        imageColor: "#e056fd",
        viewCount: 1550
    },
    {
        id: 225,
        title: "「茶道×スペシャルティコーヒー」融合カフェが都心に増殖中",
        category: "gaishoku",
        categoryLabel: "外食",
        summary: "抹茶の点て方にインスパイアされた手法でコーヒーを淹れるカフェが人気化。「間」を楽しむ和の哲学を取り入れた空間設計が、外国人観光客と日本人双方を惹きつける。",
        source: "カフェ・ビジネス・ニュース",
        sourceUrl: "https://www.cafe-biz-news.jp/",
        icon: "fa-mug-hot",
        gradient: "linear-gradient(to top, #0ba360 0%, #3cba92 100%)",
        imageColor: "#16a085",
        viewCount: 1340
    },
    {
        id: 226,
        title: "「#今日の定食」ハッシュタグが急増、日常食がSNSコンテンツに変身",
        category: "sns",
        categoryLabel: "SNSトレンド",
        summary: "豪華グルメだけでなく、普段の手作り定食を投稿する文化が浸透。食べることへの感謝と日常の豊かさを発信するポジティブなコミュニティが形成されている。",
        source: "ソーシャル・フード・ウォッチ",
        sourceUrl: "https://www.social-food-watch.jp/",
        icon: "fa-camera-retro",
        gradient: "linear-gradient(to right, #43e97b 0%, #38f9d7 100%)",
        imageColor: "#27ae60",
        viewCount: 1680
    },
    {
        id: 227,
        title: "「高タンパクアイス」が次のブームへ、プロテイン含有量が話題に",
        category: "sweets",
        categoryLabel: "スイーツ",
        summary: "1カップ20g以上のタンパク質を含み、かつアイスクリームの食べ応えを実現した新商品がフィットネス層を超えて一般にも波及。夏の新定番になる可能性大。",
        source: "スイーツ・フューチャー",
        sourceUrl: "https://www.sweets-future.jp/",
        icon: "fa-ice-cream",
        gradient: "linear-gradient(to top, #ff9a9e 0%, #fecfef 99%)",
        imageColor: "#e84393",
        viewCount: 1160
    },
    {
        id: 228,
        title: "「クリーンラベル」食品への移行が本格化、添加物表示見直しの動き",
        category: "health",
        categoryLabel: "健康",
        summary: "原材料名がシンプルで添加物の少ない「クリーンラベル」食品への消費者ニーズが高まり、メーカー各社がレシピ見直しを加速。透明性の高い情報開示が購買決定の鍵に。",
        source: "ヘルシーフード・ウィークリー",
        sourceUrl: "https://www.healthy-food-weekly.jp/",
        icon: "fa-leaf",
        gradient: "linear-gradient(to right, #d4fc79 0%, #96e6a1 100%)",
        imageColor: "#27ae60",
        viewCount: 920
    },
    {
        id: 229,
        title: "「メキシコ料理」の本格派ブーム到来、タコスバーが都心を席巻",
        category: "asian",
        categoryLabel: "韓国・アジア",
        summary: "韓国料理に続くアジア・ラテン融合グルメとして、本格的なメキシカン料理が注目。コリアンタコスなどの融合料理も登場し、多様なカルチャーを取り込んだ新業態が急増中。",
        source: "グローバル・ダイニング・ウォッチ",
        sourceUrl: "https://www.global-dining-watch.jp/",
        icon: "fa-pepper-hot",
        gradient: "linear-gradient(to right, #fa709a 0%, #fee140 100%)",
        imageColor: "#e74c3c",
        viewCount: 1040
    },
    {
        id: 230,
        title: "Z世代が支持する「フードウェイスト」ファッション、食品廃材活用の小物が人気",
        category: "z_gen",
        categoryLabel: "Z世代",
        summary: "コーヒーかすや食品廃材を再利用したバッグや食器がZ世代の支持を集める。食べることと持続可能なライフスタイルを結びつけた新しい消費価値観が生まれている。",
        source: "Z世代ライフスタイル・ウォッチ",
        sourceUrl: "https://www.zgen-lifestyle.jp/",
        icon: "fa-recycle",
        gradient: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)",
        imageColor: "#a29bfe",
        viewCount: 870
    },
    {
        id: 231,
        title: "北海道「ジンギスカン」が全国チェーン化、羊肉ブームに乗り急拡大",
        category: "hokkaido",
        categoryLabel: "北海道",
        summary: "ラム肉の栄養価の高さと独特の風味が再評価され、北海道のソウルフード「ジンギスカン」の専門チェーンが全国展開を加速。一人鍋スタイルで若年層の取り込みにも成功している。",
        source: "北海道グルメ通信",
        sourceUrl: "https://www.hokkaido-gourmet.jp/",
        icon: "fa-fire",
        gradient: "linear-gradient(to right, #48c6ef 0%, #6f86d6 100%)",
        imageColor: "#4a90d9",
        viewCount: 1050
    },
    {
        id: 232,
        title: "十勝乳製品ブランドが躍進、「チーズの聖地」化で欧州品を逆輸入",
        category: "hokkaido",
        categoryLabel: "北海道",
        summary: "北海道十勝エリアの本格ナチュラルチーズが、ヨーロッパのコンクールで受賞相次ぐ。国内はもとより海外から「北海道チーズ」を目当てに訪れる食ツーリズムが活発化している。",
        source: "乳業産業新報",
        sourceUrl: "https://www.dairy-industry.jp/",
        icon: "fa-cow",
        gradient: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        imageColor: "#4a90d9",
        viewCount: 890
    },
    {
        id: 233,
        title: "「フードロス削減」の新兵器、賞味期限をスマホに通知するスマートコンテナ",
        category: "retail",
        categoryLabel: "小売・流通",
        summary: "内蔵センサーで中身の鮮度を感知し、期限が近づくと自動的にレシピを提案する保存容器がヒット。使い忘れによる廃棄を家庭レベルで防ぐ画期的なデバイス。",
        source: "テックライフ・マガジン",
        sourceUrl: "https://www.techlife-mag.jp/",
        icon: "fa-sensor",
        gradient: "linear-gradient(to right, #92fe9d 0%, #00c9ff 100%)",
        imageColor: "#2ecc71",
        viewCount: 710
    },
    {
        id: 234,
        title: "「昆虫プロテイン」がプロアスリートの間で定着、環境負荷の低さが支持の決め手",
        category: "health",
        categoryLabel: "健康",
        summary: "従来のホエイやソイに代わる第3の選択肢として、コオロギ由来のプロテインが五輪選手たちのトレーニングキャンプで採用。消化吸収の良さと栄養価の高さが証明された。",
        source: "スポーツ栄養学・ダイジェスト",
        sourceUrl: "https://www.sports-nutrition.jp/",
        icon: "fa-bug",
        gradient: "linear-gradient(to right, #f83600 0%, #f9d423 100%)",
        imageColor: "#e67e22",
        viewCount: 650
    },
    {
        id: 235,
        title: "「江戸前ハーブ」が高級レストランのトレンドに、在来種のハーブが再発見",
        category: "gaishoku",
        categoryLabel: "外食",
        summary: "これまで雑草として扱われてきた日本在来の野草を、フレンチやイタリアンの香り付けに活用するシェフが急増。日本独自のテロワールを表現する新たな要素として注目。",
        source: "ガストロノミー・リサーチ",
        sourceUrl: "https://www.gastronomy-research.jp/",
        icon: "fa-seedling",
        gradient: "linear-gradient(to top, #0ba360 0%, #3cba92 100%)",
        imageColor: "#16a085",
        viewCount: 520
    },
    // ── 日経MJ (236-270) ──
    { id: 236, title: "日経MJ調査：食品値上げ1万品目突破、消費者の「値頃感」が購買判断の最優先に", category: "nikkei_mj", categoryLabel: "日経MJ", summary: "2026年春の食品値上げが累計1万品目を超え、消費者の購買行動に大きな変化が生じている。「安いから買う」ではなく「高くても買う理由」を求める傾向が強まり、付加価値訴求が急務に。", source: "日経MJ", sourceUrl: "https://www.nikkei.com/mj/", icon: "fa-newspaper", gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", imageColor: "#2c3e50", viewCount: 2100 },
    { id: 237, title: "日経MJ特集：PB食品市場が初の3兆円超え、ナショナルブランドとの品質差が消滅", category: "nikkei_mj", categoryLabel: "日経MJ", summary: "大手スーパーのプライベートブランド食品の総市場規模が初めて3兆円を突破。品質・パッケージともにナショナルブランドに肉薄し、「PB＝安かろう悪かろう」のイメージが完全払拭。", source: "日経MJ", sourceUrl: "https://www.nikkei.com/mj/", icon: "fa-newspaper", gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", imageColor: "#2c3e50", viewCount: 1850 },
    { id: 238, title: "食品業界のDX加速、AIによる需要予測で廃棄ロスが平均30%減【日経MJ】", category: "nikkei_mj", categoryLabel: "日経MJ", summary: "大手スーパー各社が本格導入したAI発注システムが成果を上げ始めた。食品ロス削減と在庫コスト低減を同時に実現し、環境・コスト両面での貢献が注目されている。", source: "日経MJ", sourceUrl: "https://www.nikkei.com/mj/", icon: "fa-newspaper", gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", imageColor: "#2c3e50", viewCount: 1700 },
    { id: 239, title: "物流費高騰でスーパーの弁当・惣菜値上げ相次ぐ、消費者の反応と今後【日経MJ】", category: "nikkei_mj", categoryLabel: "日経MJ", summary: "燃料費・人件費の上昇を受け、中食部門の価格改定が加速。消費者の「外食よりは安い」許容ラインを意識した50〜100円刻みの値上げが主流となっている。", source: "日経MJ", sourceUrl: "https://www.nikkei.com/mj/", icon: "fa-newspaper", gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", imageColor: "#2c3e50", viewCount: 1620 },
    { id: 240, title: "代替タンパク質市場が5年で10倍に、大豆ミートから昆虫食まで選択肢が拡大【日経MJ】", category: "nikkei_mj", categoryLabel: "日経MJ", summary: "環境負荷の低さと健康訴求が重なり、代替タンパク質食品への関心が急上昇。スーパー各社が専用コーナーを新設し、主流食品としての定着が見えてきた。", source: "日経MJ", sourceUrl: "https://www.nikkei.com/mj/", icon: "fa-newspaper", gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", imageColor: "#2c3e50", viewCount: 1540 },
    { id: 241, title: "セルフレジ普及率が50%超え、有人レジとのハイブリッド運営が主流に【日経MJ】", category: "nikkei_mj", categoryLabel: "日経MJ", summary: "スーパー大手のセルフレジ導入が全国規模で加速し、人件費削減と顧客利便性向上を両立。高齢者向けのサポート体制整備が次の課題として浮上している。", source: "日経MJ", sourceUrl: "https://www.nikkei.com/mj/", icon: "fa-newspaper", gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", imageColor: "#2c3e50", viewCount: 1480 },
    { id: 242, title: "食品EC市場が年間5兆円突破、定期配送サービスが牽引【日経MJ】", category: "nikkei_mj", categoryLabel: "日経MJ", summary: "コロナ禍で定着したネットスーパー利用が引き続き拡大。週1回の定期配送サービスへの移行が進み、実店舗との価格差縮小で解約率が低下している。", source: "日経MJ", sourceUrl: "https://www.nikkei.com/mj/", icon: "fa-newspaper", gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", imageColor: "#2c3e50", viewCount: 1890 },
    { id: 243, title: "冷凍食品市場が過去最高を更新、高付加価値商品が成長を牽引【日経MJ】", category: "nikkei_mj", categoryLabel: "日経MJ", summary: "冷凍技術の進化で「冷凍＝劣化」のイメージが一掃。シェフ監修・産地直送など高付加価値ラインが市場を引っ張り、外食チェーンの冷凍商品EC販売も定着。", source: "日経MJ", sourceUrl: "https://www.nikkei.com/mj/", icon: "fa-newspaper", gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", imageColor: "#2c3e50", viewCount: 1750 },
    { id: 244, title: "スーパーの惣菜部門が急拡大、外食代替需要を取り込み売上2桁増【日経MJ】", category: "nikkei_mj", categoryLabel: "日経MJ", summary: "食材費・外食費の高騰を背景に、スーパーの惣菜が「第三の食卓」として定着。調理実演や素材の産地表示強化が差別化のポイントとなっている。", source: "日経MJ", sourceUrl: "https://www.nikkei.com/mj/", icon: "fa-newspaper", gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", imageColor: "#2c3e50", viewCount: 1930 },
    { id: 245, title: "有機食品の国内生産量が過去最高、健康意識の高まりが後押し【日経MJ】", category: "nikkei_mj", categoryLabel: "日経MJ", summary: "オーガニック認証農地の面積が10年で3倍超に拡大。大手スーパーが有機農家と長期契約を結び、安定供給体制を整えることで価格も下落傾向に転じている。", source: "日経MJ", sourceUrl: "https://www.nikkei.com/mj/", icon: "fa-newspaper", gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", imageColor: "#2c3e50", viewCount: 1380 },
    { id: 246, title: "食品業界で人手不足が深刻化、外国人人材活用と自動化が急務【日経MJ】", category: "nikkei_mj", categoryLabel: "日経MJ", summary: "少子高齢化による労働人口の減少が食品流通現場を直撃。時給引き上げだけでは解消できず、外国人技能実習生の活用拡大と作業ロボット導入が並行して進む。", source: "日経MJ", sourceUrl: "https://www.nikkei.com/mj/", icon: "fa-newspaper", gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", imageColor: "#2c3e50", viewCount: 1450 },
    { id: 247, title: "輸入食材の価格高騰でメニュー刷新、国産への切り替えが加速【日経MJ】", category: "nikkei_mj", categoryLabel: "日経MJ", summary: "円安・国際相場高騰のダブルパンチで輸入依存の食材コストが急騰。スーパー・外食各社が国産原料への切り替えを加速させ、産地との直接取引を強化している。", source: "日経MJ", sourceUrl: "https://www.nikkei.com/mj/", icon: "fa-newspaper", gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", imageColor: "#2c3e50", viewCount: 1560 },
    { id: 248, title: "機能性表示食品の届出数が累計1万件突破、競争激化で差別化が鍵【日経MJ】", category: "nikkei_mj", categoryLabel: "日経MJ", summary: "消費者庁への届出制度が普及し、機能性表示食品の数が急増。市場飽和が近づく中、エビデンスの質と訴求の明確さが選ばれる商品の条件となっている。", source: "日経MJ", sourceUrl: "https://www.nikkei.com/mj/", icon: "fa-newspaper", gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", imageColor: "#2c3e50", viewCount: 1320 },
    { id: 249, title: "スーパー大手のM&Aが活発化、地方チェーン吸収で業界再編が進む【日経MJ】", category: "nikkei_mj", categoryLabel: "日経MJ", summary: "物価高と人手不足で単独生き残りが困難になった地方中小スーパーへの買収・提携が加速。全国チェーンによる規模の経済追求が業界地図を塗り替えつつある。", source: "日経MJ", sourceUrl: "https://www.nikkei.com/mj/", icon: "fa-newspaper", gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", imageColor: "#2c3e50", viewCount: 2050 },
    { id: 250, title: "食品ロス削減の新施策でスーパー各社が対応急ぐ、アプリ連携も拡大【日経MJ】", category: "nikkei_mj", categoryLabel: "日経MJ", summary: "政府の食品ロス削減目標達成に向けた規制強化を受け、小売各社が閉店前値引きのデジタル告知や余剰食品マッチングアプリとの連携を本格化させている。", source: "日経MJ", sourceUrl: "https://www.nikkei.com/mj/", icon: "fa-newspaper", gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", imageColor: "#2c3e50", viewCount: 1670 },
    { id: 251, title: "グルテンフリー・アレルギー対応食品の市場が前年比40%増【日経MJ】", category: "nikkei_mj", categoryLabel: "日経MJ", summary: "食物アレルギー患者の増加と健康志向の高まりが重なり、特定原材料不使用食品への需要が急拡大。スーパー各社が専用コーナーを設置し差別化を図っている。", source: "日経MJ", sourceUrl: "https://www.nikkei.com/mj/", icon: "fa-newspaper", gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", imageColor: "#2c3e50", viewCount: 1290 },
    { id: 252, title: "「腸活ブーム」で発酵食品市場が活況、ヨーグルト・味噌・麹商品に注目【日経MJ】", category: "nikkei_mj", categoryLabel: "日経MJ", summary: "腸内環境と全身の健康の関係が広く認知され、発酵食品の購入が日課化。機能性ヨーグルト・塩麴・甘酒の新商品ラッシュが続き、棚面積も年々拡大している。", source: "日経MJ", sourceUrl: "https://www.nikkei.com/mj/", icon: "fa-newspaper", gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", imageColor: "#2c3e50", viewCount: 1810 },
    { id: 253, title: "コンビニvs.スーパー競争が激化、差別化策でコンビニが惣菜を強化【日経MJ】", category: "nikkei_mj", categoryLabel: "日経MJ", summary: "コンビニ大手3社が惣菜・弁当の品質・種類を大幅に刷新し、スーパーとの競合領域が拡大。立地の優位性に加え「即食の質」でも正面から勝負を仕掛けている。", source: "日経MJ", sourceUrl: "https://www.nikkei.com/mj/", icon: "fa-newspaper", gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", imageColor: "#2c3e50", viewCount: 1980 },
    { id: 254, title: "食品企業のカーボンニュートラル宣言が相次ぐ、包材削減も本格化【日経MJ】", category: "nikkei_mj", categoryLabel: "日経MJ", summary: "2030年・2050年を目標としたCO2排出削減計画を発表する食品メーカーが急増。プラスチック包材の紙・バイオ素材への切り替えが実装段階に入りコスト面の課題も浮上。", source: "日経MJ", sourceUrl: "https://www.nikkei.com/mj/", icon: "fa-newspaper", gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", imageColor: "#2c3e50", viewCount: 1420 },
    { id: 255, title: "インバウンド消費増加で「日本食体験」型観光が急拡大【日経MJ】", category: "nikkei_mj", categoryLabel: "日経MJ", summary: "外国人観光客が食品スーパーやコンビニを観光スポットとして訪問する傾向が強まり、多言語対応・免税対応を急ぐ小売店が増加。日本食の輸出機会にもなっている。", source: "日経MJ", sourceUrl: "https://www.nikkei.com/mj/", icon: "fa-newspaper", gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", imageColor: "#2c3e50", viewCount: 1760 },
    { id: 256, title: "植物性食品市場が急成長、ヴィーガン・ベジタリアン向け商品が充実【日経MJ】", category: "nikkei_mj", categoryLabel: "日経MJ", summary: "宗教・健康・環境など多様な理由から植物性食品を選ぶ層が拡大。大手食品メーカーが専用ブランドを立ち上げ、スーパーの棚面積も着実に増加している。", source: "日経MJ", sourceUrl: "https://www.nikkei.com/mj/", icon: "fa-newspaper", gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", imageColor: "#2c3e50", viewCount: 1350 },
    { id: 257, title: "食品製造業の自動化投資が過去最高水準、人件費上昇が背景【日経MJ】", category: "nikkei_mj", categoryLabel: "日経MJ", summary: "最低賃金引き上げが続く中、食品工場でのロボット・AI活用投資が急増。ピッキング・仕分け・包装の自動化が特に進み、生産性が平均20%向上している。", source: "日経MJ", sourceUrl: "https://www.nikkei.com/mj/", icon: "fa-newspaper", gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", imageColor: "#2c3e50", viewCount: 1580 },
    { id: 258, title: "地産地消ブランドの付加価値が上昇、農家と小売の直接取引が拡大【日経MJ】", category: "nikkei_mj", categoryLabel: "日経MJ", summary: "産地・生産者の顔が見える農産物への需要が高まり、農家と小売業者の直接契約が全国で広がる。中間流通を省くことで農家の所得向上と小売の差別化が同時に実現。", source: "日経MJ", sourceUrl: "https://www.nikkei.com/mj/", icon: "fa-newspaper", gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", imageColor: "#2c3e50", viewCount: 1430 },
    { id: 259, title: "ギフト食品市場が復調、価格帯上昇でプレミアム化が鮮明に【日経MJ】", category: "nikkei_mj", categoryLabel: "日経MJ", summary: "コロナ禍で落ち込んだ贈答食品市場が回復し、1件あたりの単価が上昇。「少量・高品質」志向が強まり、産地直送・職人製造を強調したギフトセットが人気を集めている。", source: "日経MJ", sourceUrl: "https://www.nikkei.com/mj/", icon: "fa-newspaper", gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", imageColor: "#2c3e50", viewCount: 1240 },
    { id: 260, title: "食品スタートアップへの投資が活況、フードテック分野に資金が集中【日経MJ】", category: "nikkei_mj", categoryLabel: "日経MJ", summary: "代替食材・精密発酵・フードデリバリー技術などフードテック領域への国内外のVC投資が拡大。スーパーや外食大手が出資・提携でイノベーションの取り込みを急いでいる。", source: "日経MJ", sourceUrl: "https://www.nikkei.com/mj/", icon: "fa-newspaper", gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", imageColor: "#2c3e50", viewCount: 1690 },
    { id: 261, title: "スーパーの高齢者向けサービス強化、宅配・移動販売が主要戦略に【日経MJ】", category: "nikkei_mj", categoryLabel: "日経MJ", summary: "買い物困難者の増加を背景に、宅配サービスや移動スーパーを展開する小売企業が急増。行政との連携による補助制度の活用で採算化を目指す取り組みが広がっている。", source: "日経MJ", sourceUrl: "https://www.nikkei.com/mj/", icon: "fa-newspaper", gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", imageColor: "#2c3e50", viewCount: 1340 },
    { id: 262, title: "国産農産物の海外輸出が過去最高、アジア向けが全体の6割を占める【日経MJ】", category: "nikkei_mj", categoryLabel: "日経MJ", summary: "農林水産物・食品の輸出額が5年連続で過去最高を更新。中国・香港・台湾向けの和牛・コメ・果物が好調で、政府目標の2030年5兆円達成も視野に入ってきた。", source: "日経MJ", sourceUrl: "https://www.nikkei.com/mj/", icon: "fa-newspaper", gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", imageColor: "#2c3e50", viewCount: 1510 },
    { id: 263, title: "食品業界の採用難で賃上げ競争、時給1,500円超えの現場も増加【日経MJ】", category: "nikkei_mj", categoryLabel: "日経MJ", summary: "少子化と他業種との競合で食品スーパー・工場の採用難が深刻化。時給引き上げに加え、福利厚生・職場環境改善でパート・アルバイトの定着率向上を図る企業が増えている。", source: "日経MJ", sourceUrl: "https://www.nikkei.com/mj/", icon: "fa-newspaper", gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", imageColor: "#2c3e50", viewCount: 1620 },
    { id: 264, title: "「子ども食堂」連携広がるスーパー、食品提供と地域貢献を両立【日経MJ】", category: "nikkei_mj", categoryLabel: "日経MJ", summary: "賞味期限前の食品を子ども食堂に提供するスーパーが全国で急増。フードロス削減と地域貢献が同時に実現し、地元客の好感度向上にも貢献する取り組みとして注目される。", source: "日経MJ", sourceUrl: "https://www.nikkei.com/mj/", icon: "fa-newspaper", gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", imageColor: "#2c3e50", viewCount: 1270 },
    { id: 265, title: "AIを活用した食品開発が本格化、消費者データから次のヒットを予測【日経MJ】", category: "nikkei_mj", categoryLabel: "日経MJ", summary: "SNS投稿・購買履歴・気象データをAIが統合解析し、次のトレンド商品を予測する開発手法が食品メーカーに普及。開発期間の短縮とヒット率の向上が同時に実現している。", source: "日経MJ", sourceUrl: "https://www.nikkei.com/mj/", icon: "fa-newspaper", gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", imageColor: "#2c3e50", viewCount: 1840 },
    { id: 266, title: "フードデリバリー各社が収益化へ転換、値上げと注文単価向上を模索【日経MJ】", category: "nikkei_mj", categoryLabel: "日経MJ", summary: "成長優先から収益重視へシフトしたフードデリバリー各社が配送料の見直しを実施。高単価の飲食店誘致と定期利用促進で持続可能なビジネスモデルを模索している。", source: "日経MJ", sourceUrl: "https://www.nikkei.com/mj/", icon: "fa-newspaper", gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", imageColor: "#2c3e50", viewCount: 1720 },
    { id: 267, title: "食品パッケージの環境配慮が義務化へ、プラスチック削減に業界一致【日経MJ】", category: "nikkei_mj", categoryLabel: "日経MJ", summary: "プラスチック資源循環促進法の段階的強化を見据え、食品包材の紙・植物由来素材への切り替えが加速。コスト上昇分をどう吸収するかが各社の喫緊の課題となっている。", source: "日経MJ", sourceUrl: "https://www.nikkei.com/mj/", icon: "fa-newspaper", gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", imageColor: "#2c3e50", viewCount: 1390 },
    { id: 268, title: "量り売り・バルク販売の復活、食品ロス削減と節約ニーズが重なる【日経MJ】", category: "nikkei_mj", categoryLabel: "日経MJ", summary: "ナッツ・穀物・スパイスなどの量り売りコーナーを新設するスーパーが増加。必要な分だけ買えるメリットが節約志向と廃棄削減意識の双方に響き、固定客を獲得している。", source: "日経MJ", sourceUrl: "https://www.nikkei.com/mj/", icon: "fa-newspaper", gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", imageColor: "#2c3e50", viewCount: 1150 },
    { id: 269, title: "食品業界で「健康経営」認定取得が急増、採用競争力向上に効果【日経MJ】", category: "nikkei_mj", categoryLabel: "日経MJ", summary: "経済産業省の健康経営優良法人認定を取得する食品企業が前年比40%増。採用活動における訴求力向上と従業員の定着率改善に明確な効果が確認されている。", source: "日経MJ", sourceUrl: "https://www.nikkei.com/mj/", icon: "fa-newspaper", gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", imageColor: "#2c3e50", viewCount: 1180 },
    { id: 270, title: "国内食品輸出の主力が和牛・日本酒から冷凍食品・即席麺にシフト【日経MJ】", category: "nikkei_mj", categoryLabel: "日経MJ", summary: "高額食材に偏っていた日本食輸出が、手頃な価格で「日常の日本食」を楽しめる冷凍食品・インスタント系に広がる。海外の中間所得層を取り込む新たな輸出戦略が注目を集める。", source: "日経MJ", sourceUrl: "https://www.nikkei.com/mj/", icon: "fa-newspaper", gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", imageColor: "#2c3e50", viewCount: 1460 },
    // ── ロピア (271-300) ──
    { id: 271, title: "ロピアの精肉部門が業界最安値水準を維持、独自仕入れルートの強みとは", category: "lopia", categoryLabel: "ロピア", summary: "産地・輸入業者との直接交渉と大量一括仕入れで業界最安値水準を維持。中間マージンを徹底排除した調達モデルが、他社の追随を許さない価格競争力の源泉となっている。", source: "ロピア公式情報", sourceUrl: "https://www.lopia.com/", icon: "fa-fire", gradient: "linear-gradient(135deg, #c0392b 0%, #e74c3c 100%)", imageColor: "#c0392b", viewCount: 2350 },
    { id: 272, title: "ロピア、首都圏から関西・九州・北海道へ全国展開をさらに加速", category: "lopia", categoryLabel: "ロピア", summary: "神奈川県発のディスカウントスーパーが全国主要都市圏への出店を加速。地域ごとの食文化に合わせた品揃えの最適化を図りながら、年間10店舗以上の新規出店を継続している。", source: "流通ニュース", sourceUrl: "#", icon: "fa-store", gradient: "linear-gradient(135deg, #c0392b 0%, #e74c3c 100%)", imageColor: "#c0392b", viewCount: 2100 },
    { id: 273, title: "SNSで話題の「ロピア肉」、週末は開店前から行列が絶えない人気ぶり", category: "lopia", categoryLabel: "ロピア", summary: "TikTok・InstagramでロピアのコスパPR動画が急拡散し、若年層の新規来店が急増。特に和牛の格安販売日には入店制限が必要なほどの混雑が各地の店舗で続いている。", source: "流通ニュース", sourceUrl: "#", icon: "fa-hashtag", gradient: "linear-gradient(135deg, #c0392b 0%, #e74c3c 100%)", imageColor: "#c0392b", viewCount: 2680 },
    { id: 274, title: "ロピアのワインコーナーが充実、輸入直仕入れで高コスパを実現", category: "lopia", categoryLabel: "ロピア", summary: "精肉の調達ノウハウをワインに応用し、欧州産ワインを産地から直輸入。1,000円台で楽しめる高品質ワインのラインナップが肉との組合せ需要を取り込み、客単価向上に貢献。", source: "ロピア公式情報", sourceUrl: "https://www.lopia.com/", icon: "fa-wine-glass", gradient: "linear-gradient(135deg, #c0392b 0%, #e74c3c 100%)", imageColor: "#c0392b", viewCount: 1870 },
    { id: 275, title: "ロピアが都心型小型店を出店、ターミナル駅周辺への攻勢を強化", category: "lopia", categoryLabel: "ロピア", summary: "郊外大型店が主体だったロピアが都心小型店の出店を本格化。コンパクトな売場でも精肉の安さを訴求することで、帰宅途中のビジネス層の取り込みに成功している。", source: "日経MJ", sourceUrl: "https://www.nikkei.com/mj/", icon: "fa-building", gradient: "linear-gradient(135deg, #c0392b 0%, #e74c3c 100%)", imageColor: "#c0392b", viewCount: 1920 },
    { id: 276, title: "ロピアの惣菜が急拡大、「精肉の延長」戦略で焼き肉・揚げ物が人気", category: "lopia", categoryLabel: "ロピア", summary: "自社精肉の品質を活かした惣菜展開が好調。店内で調理した焼き肉・唐揚げ・コロッケが、購入した生肉と同じコーナーで販売されるワンストップの利便性が支持される。", source: "ロピア公式情報", sourceUrl: "https://www.lopia.com/", icon: "fa-drumstick-bite", gradient: "linear-gradient(135deg, #c0392b 0%, #e74c3c 100%)", imageColor: "#c0392b", viewCount: 2020 },
    { id: 277, title: "ロピア独自の「本日の特価」SNS発信が集客を左右、リアルタイム告知が話題", category: "lopia", categoryLabel: "ロピア", summary: "各店舗が当日の特価商品をSNSでリアルタイム発信するスタイルが定着。フォロワーが「ロピアパトロール」として情報拡散し、自然発生的な宣伝効果を生んでいる。", source: "流通ニュース", sourceUrl: "#", icon: "fa-bolt", gradient: "linear-gradient(135deg, #c0392b 0%, #e74c3c 100%)", imageColor: "#c0392b", viewCount: 2240 },
    { id: 278, title: "ロピアがオンライン販売を試験導入、精肉の冷凍配送サービスを開始", category: "lopia", categoryLabel: "ロピア", summary: "実店舗の「安くて新鮮」を自宅まで届けるネット通販を試験展開。冷凍技術を活かした鮮度保持と、セット販売による送料負担の軽減で初月から好評を得ている。", source: "ロピア公式情報", sourceUrl: "https://www.lopia.com/", icon: "fa-truck", gradient: "linear-gradient(135deg, #c0392b 0%, #e74c3c 100%)", imageColor: "#c0392b", viewCount: 1760 },
    { id: 279, title: "ロピアの鶏肉部門が充実、国産銘柄鶏を含む多様なカットで訴求", category: "lopia", categoryLabel: "ロピア", summary: "コスト意識の高まりで鶏肉需要が拡大する中、ロピアは銘柄鶏から低価格部位まで幅広く展開。一羽丸ごと購入から小分けパックまで対応し、多様なニーズを取り込んでいる。", source: "ロピア公式情報", sourceUrl: "https://www.lopia.com/", icon: "fa-fire", gradient: "linear-gradient(135deg, #c0392b 0%, #e74c3c 100%)", imageColor: "#c0392b", viewCount: 1640 },
    { id: 280, title: "ロピアの業務用冷凍コーナーが人気、プロの味を家庭でというニーズを取込", category: "lopia", categoryLabel: "ロピア", summary: "飲食店向けの業務用冷凍食材を一般消費者に販売するコーナーが好評。大容量・低価格かつ飲食店クオリティの食材が、料理好きや大家族から高い支持を集めている。", source: "流通ニュース", sourceUrl: "#", icon: "fa-boxes-stacked", gradient: "linear-gradient(135deg, #c0392b 0%, #e74c3c 100%)", imageColor: "#c0392b", viewCount: 1580 },
    { id: 281, title: "ロピアが店内焼き肉コーナーを試験設置、体験型店舗への転換を模索", category: "lopia", categoryLabel: "ロピア", summary: "精肉の「買う」だけでなく「味わう」体験を提供する店内焼き肉スペースを一部店舗で試験展開。肉の品質を直接確認してもらうことで購買意欲と客単価の向上を図る。", source: "日経MJ", sourceUrl: "https://www.nikkei.com/mj/", icon: "fa-fire", gradient: "linear-gradient(135deg, #c0392b 0%, #e74c3c 100%)", imageColor: "#c0392b", viewCount: 2180 },
    { id: 282, title: "ロピアの豚肉コーナーが全国トップクラスの品揃え、部位別専門展示が好評", category: "lopia", categoryLabel: "ロピア", summary: "肩ロース・バラ・モモなど細かな部位に分けて専門的に展示するスタイルが料理愛好家に支持。「精肉の専門店に来た感覚」と評されるほどの充実した品揃えが来店動機に。", source: "ロピア公式情報", sourceUrl: "https://www.lopia.com/", icon: "fa-award", gradient: "linear-gradient(135deg, #c0392b 0%, #e74c3c 100%)", imageColor: "#c0392b", viewCount: 1720 },
    { id: 283, title: "ロピアが輸入牛肉を大量直仕入れ、為替リスクを独自ヘッジで吸収", category: "lopia", categoryLabel: "ロピア", summary: "豪州・米国産牛肉の直接仕入れ契約を長期化することで価格の安定供給を実現。為替変動リスクを先物取引等で軽減し、円安局面でも低価格を維持できる体制を構築。", source: "日経MJ", sourceUrl: "https://www.nikkei.com/mj/", icon: "fa-chart-line", gradient: "linear-gradient(135deg, #c0392b 0%, #e74c3c 100%)", imageColor: "#c0392b", viewCount: 1890 },
    { id: 284, title: "ロピアの精肉技術研修制度が拡充、職人育成に毎年数千万円を投資", category: "lopia", categoryLabel: "ロピア", summary: "肉の目利き・カット技術・鮮度管理の専門研修プログラムを整備し、全国の店舗に技術水準の均一化を図る。職人気質の精肉スタッフがブランド価値の源泉と位置づけている。", source: "ロピア公式情報", sourceUrl: "https://www.lopia.com/", icon: "fa-graduation-cap", gradient: "linear-gradient(135deg, #c0392b 0%, #e74c3c 100%)", imageColor: "#c0392b", viewCount: 1340 },
    { id: 285, title: "ロピア「深夜割引タイムセール」が主婦層に大人気、閉店2時間前が賑わう", category: "lopia", categoryLabel: "ロピア", summary: "閉店2時間前から始まる精肉・鮮魚の値引き販売が固定ファンを獲得。「夕方以降に来れば必ず掘り出し物がある」という口コミがSNSで拡散し、夜間の集客装置に成長。", source: "流通ニュース", sourceUrl: "#", icon: "fa-tag", gradient: "linear-gradient(135deg, #c0392b 0%, #e74c3c 100%)", imageColor: "#c0392b", viewCount: 2050 },
    { id: 286, title: "ロピアがブランド牛の特売を月1回開催、和牛ファンの来店動機に", category: "lopia", categoryLabel: "ロピア", summary: "松阪・米沢・但馬などのブランド牛を通常の半値近くで販売する月例イベントが定着。チラシ配布の前からSNSで告知が広まり、開店前から百人規模の行列が形成される。", source: "ロピア公式情報", sourceUrl: "https://www.lopia.com/", icon: "fa-trophy", gradient: "linear-gradient(135deg, #c0392b 0%, #e74c3c 100%)", imageColor: "#c0392b", viewCount: 2420 },
    { id: 287, title: "ロピア会員アプリのダウンロードが100万件突破、クーポン配信で購買促進", category: "lopia", categoryLabel: "ロピア", summary: "ポイント管理・クーポン配信・特売情報をまとめたアプリの利用者が急増。購買データを活用したパーソナライズクーポンが客単価向上に貢献し、来店頻度も向上している。", source: "ロピア公式情報", sourceUrl: "https://www.lopia.com/", icon: "fa-mobile-screen", gradient: "linear-gradient(135deg, #c0392b 0%, #e74c3c 100%)", imageColor: "#c0392b", viewCount: 1980 },
    { id: 288, title: "ロピアの試食販売が復活・拡充、対面コミュニケーションで購買意欲を喚起", category: "lopia", categoryLabel: "ロピア", summary: "コロナ禍で中断していた試食販売を全面再開し、精肉・惣菜コーナーで積極的に実施。「食べてみて納得してから買う」体験が衝動買いを促し、試食品の当日売上を大幅押し上げ。", source: "流通ニュース", sourceUrl: "#", icon: "fa-utensils", gradient: "linear-gradient(135deg, #c0392b 0%, #e74c3c 100%)", imageColor: "#c0392b", viewCount: 1670 },
    { id: 289, title: "ロピアがプロテイン特化コーナーを新設、フィットネスブームに乗る", category: "lopia", categoryLabel: "ロピア", summary: "筋トレ・ダイエット需要の拡大を捉え、高タンパク食材を集めた専用コーナーを設置。鶏胸肉・魚・卵・豆腐など低価格高タンパク食材の提案型展示でフィットネス層を獲得。", source: "ロピア公式情報", sourceUrl: "https://www.lopia.com/", icon: "fa-dumbbell", gradient: "linear-gradient(135deg, #c0392b 0%, #e74c3c 100%)", imageColor: "#c0392b", viewCount: 1550 },
    { id: 290, title: "ロピアの自社製造ハム・ソーセージが人気、添加物控えめで高鮮度を実現", category: "lopia", categoryLabel: "ロピア", summary: "精肉の端材を活用して製造するハム・ソーセージが店内製造の新たな柱に。無添加・少添加を売りにしたラインが健康意識の高い消費者に支持され、週末の販売量が急増している。", source: "ロピア公式情報", sourceUrl: "https://www.lopia.com/", icon: "fa-bacon", gradient: "linear-gradient(135deg, #c0392b 0%, #e74c3c 100%)", imageColor: "#c0392b", viewCount: 1780 },
    { id: 291, title: "ロピアが移動スーパーを実験展開、買い物難民地域への精肉提供に挑戦", category: "lopia", categoryLabel: "ロピア", summary: "郊外・山間部の食料品アクセス困難地域向けに冷蔵トラックによる移動販売を試験展開。ロピアブランドの低価格精肉を週2回届けるサービスが高齢者層から好評を得ている。", source: "日経MJ", sourceUrl: "https://www.nikkei.com/mj/", icon: "fa-truck", gradient: "linear-gradient(135deg, #c0392b 0%, #e74c3c 100%)", imageColor: "#c0392b", viewCount: 1460 },
    { id: 292, title: "ロピア出店エリアの商圏調査が緻密化、競合スーパーとの距離感を計算", category: "lopia", categoryLabel: "ロピア", summary: "競合他社のチラシ商圏・人口動態・道路網を詳細に分析した上で出店地を選定。既存スーパーが手薄なエリアへの浸透で、出店後の客数増加率が全国平均の2倍を記録。", source: "流通ニュース", sourceUrl: "#", icon: "fa-map-location-dot", gradient: "linear-gradient(135deg, #c0392b 0%, #e74c3c 100%)", imageColor: "#c0392b", viewCount: 1320 },
    { id: 293, title: "ロピアのフルーツコーナーが拡充、スイーツ需要取り込みで客単価を向上", category: "lopia", categoryLabel: "ロピア", summary: "季節フルーツの大量仕入れで低価格を実現しつつ、ギフト向けの高級フルーツも充実。「肉だけでなくフルーツも安い」というイメージ浸透で、購入カテゴリが拡大している。", source: "ロピア公式情報", sourceUrl: "https://www.lopia.com/", icon: "fa-apple-whole", gradient: "linear-gradient(135deg, #c0392b 0%, #e74c3c 100%)", imageColor: "#c0392b", viewCount: 1630 },
    { id: 294, title: "ロピアが地元農家と直接契約、野菜の「農家の顔見える化」コーナーを展開", category: "lopia", categoryLabel: "ロピア", summary: "精肉に続き農産物でも産地直接取引を開始。生産者の写真と顔写真付きのPOPが安心感を醸成し、同価格帯の一般産地品より販売量が30%多いという結果が出ている。", source: "ロピア公式情報", sourceUrl: "https://www.lopia.com/", icon: "fa-seedling", gradient: "linear-gradient(135deg, #c0392b 0%, #e74c3c 100%)", imageColor: "#c0392b", viewCount: 1490 },
    { id: 295, title: "ロピアのランチタイム惣菜が好評、弁当・おにぎりを精肉フロアで販売", category: "lopia", categoryLabel: "ロピア", summary: "精肉の端材を活用したオリジナル弁当・おにぎりを店内製造し、精肉コーナー隣で販売。低価格・高品質の「ロピア弁当」がサラリーマン・パート層の昼食需要を取り込んでいる。", source: "ロピア公式情報", sourceUrl: "https://www.lopia.com/", icon: "fa-box-open", gradient: "linear-gradient(135deg, #c0392b 0%, #e74c3c 100%)", imageColor: "#c0392b", viewCount: 1840 },
    { id: 296, title: "ロピアが冷凍スイーツを強化、プレミアムアイスやケーキが充実", category: "lopia", categoryLabel: "ロピア", summary: "精肉と同じ直仕入れモデルをスイーツに適用し、有名パティシエ監修の冷凍ケーキや輸入アイスを低価格で展開。「ロピアはお肉だけじゃない」というブランド刷新に貢献。", source: "ロピア公式情報", sourceUrl: "https://www.lopia.com/", icon: "fa-ice-cream", gradient: "linear-gradient(135deg, #c0392b 0%, #e74c3c 100%)", imageColor: "#c0392b", viewCount: 1720 },
    { id: 297, title: "ロピアの国産豚肉取扱量が急増、産地とのパートナーシップが差別化に", category: "lopia", categoryLabel: "ロピア", summary: "鹿児島・群馬・北海道の養豚農家と長期契約を締結し、国産豚の安定調達体制を構築。「国産なのに安い」を実現し、輸入豚離れが進む消費者トレンドをうまく取り込んでいる。", source: "ロピア公式情報", sourceUrl: "https://www.lopia.com/", icon: "fa-handshake", gradient: "linear-gradient(135deg, #c0392b 0%, #e74c3c 100%)", imageColor: "#c0392b", viewCount: 1560 },
    { id: 298, title: "ロピアがアウトドア・BBQ商材コーナーを春夏限定で展開、食材との相乗効果", category: "lopia", categoryLabel: "ロピア", summary: "キャンプ・バーベキュー用の炭・網・トングなどのアウトドア用品を精肉コーナー近くに設置。「肉と道具が一緒に揃う」利便性がアウトドア好きの固定客獲得につながっている。", source: "ロピア公式情報", sourceUrl: "https://www.lopia.com/", icon: "fa-campground", gradient: "linear-gradient(135deg, #c0392b 0%, #e74c3c 100%)", imageColor: "#c0392b", viewCount: 1430 },
    { id: 299, title: "ロピアの食肉廃棄ロスがほぼゼロ、独自の「全部位活用」戦略が奏功", category: "lopia", categoryLabel: "ロピア", summary: "精肉の端材・内臓・骨を惣菜・スープ素材・ペットフードに加工する全部位活用の取り組みが廃棄ゼロに近い水準を実現。コスト削減と環境貢献の双方で業界の注目を集めている。", source: "日経MJ", sourceUrl: "https://www.nikkei.com/mj/", icon: "fa-recycle", gradient: "linear-gradient(135deg, #c0392b 0%, #e74c3c 100%)", imageColor: "#c0392b", viewCount: 1270 },
    { id: 300, title: "ロピアが新カテゴリ「高級食材」コーナーを試験展開、特別感で客層を拡大", category: "lopia", categoryLabel: "ロピア", summary: "普段は低価格訴求一辺倒だったロピアが、トリュフ・フォアグラ・高級魚介を揃えた「贅沢コーナー」を試験設置。非日常の購買体験を提供し、高所得層の取り込みを狙う。", source: "流通ニュース", sourceUrl: "#", icon: "fa-crown", gradient: "linear-gradient(135deg, #c0392b 0%, #e74c3c 100%)", imageColor: "#c0392b", viewCount: 1950 },
    // ── バロー (301-330) ──
    { id: 301, title: "バローが東海地区でシェア25%超え、地元密着戦略で競合を圧倒", category: "valor", categoryLabel: "バロー", summary: "岐阜・愛知・三重を中心とした東海圏でシェアを着実に伸ばすバロー。地元農家との産直連携と顔の見える接客を軸にした「地域スーパー」としてのブランドが盤石となりつつある。", source: "バロー公式情報", sourceUrl: "https://www.valor-co.com/", icon: "fa-store", gradient: "linear-gradient(135deg, #1e8449 0%, #27ae60 100%)", imageColor: "#27ae60", viewCount: 1680 },
    { id: 302, title: "バロー薬局との複合店舗が好調、食料品×ヘルスケアのワンストップで来客数増", category: "valor", categoryLabel: "バロー", summary: "スーパーと薬局を一体化した複合店舗フォーマットが差別化の武器に。処方箋対応の薬局と食品売場の相乗効果で、通院帰りの高齢者や子育て世代の固定客獲得に成功している。", source: "バロー公式情報", sourceUrl: "https://www.valor-co.com/", icon: "fa-heart-pulse", gradient: "linear-gradient(135deg, #1e8449 0%, #27ae60 100%)", imageColor: "#27ae60", viewCount: 1820 },
    { id: 303, title: "バローPB「くらしに彩り」シリーズが前年比30%増の販売好調", category: "valor", categoryLabel: "バロー", summary: "原材料・製造方法を全面開示した透明性の高いプライベートブランドが消費者に支持。価格もナショナルブランド比15〜25%安く、節約意識の高まりを背景に売上が急伸している。", source: "バロー公式情報", sourceUrl: "https://www.valor-co.com/", icon: "fa-tag", gradient: "linear-gradient(135deg, #1e8449 0%, #27ae60 100%)", imageColor: "#27ae60", viewCount: 1540 },
    { id: 304, title: "バローの産直コーナーが充実、岐阜・愛知の農家と直接契約で鮮度を確保", category: "valor", categoryLabel: "バロー", summary: "地元農家との契約栽培で朝採れ野菜を当日販売する産直コーナーが拡大。生産者の顔写真付き展示が信頼を生み、一般農産物より20%高くても売れる付加価値を実現している。", source: "バロー公式情報", sourceUrl: "https://www.valor-co.com/", icon: "fa-seedling", gradient: "linear-gradient(135deg, #1e8449 0%, #27ae60 100%)", imageColor: "#27ae60", viewCount: 1420 },
    { id: 305, title: "バローが無人レジを全店展開、待ち時間短縮でシニア層の評価も向上", category: "valor", categoryLabel: "バロー", summary: "セルフレジ・セミセルフレジの全店展開が完了し、レジ待ち時間が平均40%短縮。最初は戸惑いを見せた高齢者向けにスタッフが個別サポートする体制を整え、満足度が向上している。", source: "バロー公式情報", sourceUrl: "https://www.valor-co.com/", icon: "fa-desktop", gradient: "linear-gradient(135deg, #1e8449 0%, #27ae60 100%)", imageColor: "#27ae60", viewCount: 1360 },
    { id: 306, title: "バローの電子マネー「バローカード」会員が200万人突破", category: "valor", categoryLabel: "バロー", summary: "東海圏の消費者に深く浸透した独自電子マネーの会員数が200万人を突破。購買データと連動したパーソナライズクーポンの配信で来店頻度が向上し、競合他社への流出を防いでいる。", source: "バロー公式情報", sourceUrl: "https://www.valor-co.com/", icon: "fa-credit-card", gradient: "linear-gradient(135deg, #1e8449 0%, #27ae60 100%)", imageColor: "#27ae60", viewCount: 1590 },
    { id: 307, title: "バローが食品廃棄ロス削減で業界最高水準の成果、AI発注が貢献", category: "valor", categoryLabel: "バロー", summary: "気象データ・地域イベント・過去販売履歴をAIが統合解析する発注システムの導入で、食品廃棄率を業界平均の半分以下に削減。環境貢献とコスト削減を同時に実現し注目される。", source: "日経MJ", sourceUrl: "https://www.nikkei.com/mj/", icon: "fa-recycle", gradient: "linear-gradient(135deg, #1e8449 0%, #27ae60 100%)", imageColor: "#27ae60", viewCount: 1470 },
    { id: 308, title: "バローの朝市コーナーが人気、開店直後の野菜・魚の鮮度と安さが評判", category: "valor", categoryLabel: "バロー", summary: "開店直後の早朝に届く産地直送野菜・鮮魚を特設コーナーで販売する「朝市」スタイルが固定ファンを獲得。「一番鮮度の良いものを手に入れたい」という高齢者層に特に人気。", source: "バロー公式情報", sourceUrl: "https://www.valor-co.com/", icon: "fa-sun", gradient: "linear-gradient(135deg, #1e8449 0%, #27ae60 100%)", imageColor: "#27ae60", viewCount: 1630 },
    { id: 309, title: "バローが観葉植物・花コーナーを全店拡充、生活総合店舗へ転換加速", category: "valor", categoryLabel: "バロー", summary: "食料品だけでなく生活全般をカバーする「総合生活提案店」を目指すバローが、花・観葉植物コーナーを全店拡大。グリーン需要の高まりを取り込み、週末の集客に貢献している。", source: "バロー公式情報", sourceUrl: "https://www.valor-co.com/", icon: "fa-leaf", gradient: "linear-gradient(135deg, #1e8449 0%, #27ae60 100%)", imageColor: "#27ae60", viewCount: 1280 },
    { id: 310, title: "バロー直営コーヒースタンドが集客装置に、買い物前後の立ち寄りが増加", category: "valor", categoryLabel: "バロー", summary: "店内に設置した自社運営のコーヒースタンドが買い物前後のくつろぎスペースとして機能。コーヒーの香りが店内全体の滞在時間を延ばし、買い物点数の増加にも貢献している。", source: "バロー公式情報", sourceUrl: "https://www.valor-co.com/", icon: "fa-mug-hot", gradient: "linear-gradient(135deg, #1e8449 0%, #27ae60 100%)", imageColor: "#27ae60", viewCount: 1510 },
    { id: 311, title: "バローの地元銘酒・クラフトビールコーナーが充実、酒愛好家を取り込む", category: "valor", categoryLabel: "バロー", summary: "東海・北陸の地元酒蔵との連携で希少な地酒を常時展開。近年急増する東海圏のクラフトビールブルワリーとも提携し、「地元の酒はバローで揃う」という定評が生まれている。", source: "バロー公式情報", sourceUrl: "https://www.valor-co.com/", icon: "fa-beer-mug-empty", gradient: "linear-gradient(135deg, #1e8449 0%, #27ae60 100%)", imageColor: "#27ae60", viewCount: 1390 },
    { id: 312, title: "バローの健康食品コーナーが売場面積2倍に、シニア・健康意識層が牽引", category: "valor", categoryLabel: "バロー", summary: "機能性表示食品・サプリメント・健康補助食品の売場を大幅拡張。薬局との複合店舗のノウハウを活かし、登録販売者が健康相談にも対応する「健康ステーション」を展開中。", source: "バロー公式情報", sourceUrl: "https://www.valor-co.com/", icon: "fa-heart", gradient: "linear-gradient(135deg, #1e8449 0%, #27ae60 100%)", imageColor: "#27ae60", viewCount: 1650 },
    { id: 313, title: "バローが子育て支援サービス強化、授乳室・キッズスペースで家族客取込", category: "valor", categoryLabel: "バロー", summary: "子連れでも快適に買い物できる環境整備を全店で進め、広い授乳室とキッズコーナーを設置。保育園・幼稚園帰りの親子が立ち寄りやすい店舗づくりで若い世帯の固定客を獲得。", source: "バロー公式情報", sourceUrl: "https://www.valor-co.com/", icon: "fa-baby", gradient: "linear-gradient(135deg, #1e8449 0%, #27ae60 100%)", imageColor: "#27ae60", viewCount: 1320 },
    { id: 314, title: "バローの高齢者向け宅配サービスが拡大、週3回配送で固定顧客を獲得", category: "valor", categoryLabel: "バロー", summary: "店舗から半径3km圏内の高齢者向けに週3回の食料品宅配を実施。注文はLINEや電話で受け付ける使いやすい仕組みが評判を呼び、利用者の9割以上が継続利用するリピーターに。", source: "バロー公式情報", sourceUrl: "https://www.valor-co.com/", icon: "fa-truck", gradient: "linear-gradient(135deg, #1e8449 0%, #27ae60 100%)", imageColor: "#27ae60", viewCount: 1480 },
    { id: 315, title: "バローがドラッグストアに対抗、OTC医薬品・化粧品の品揃えを強化", category: "valor", categoryLabel: "バロー", summary: "ドラッグストアとの競合激化を受け、市販薬・化粧品・日用品の品揃えを大幅に拡充。薬剤師常駐の複合店舗では専門的な相談対応で差別化し、健康分野でのワンストップ化を加速。", source: "日経MJ", sourceUrl: "https://www.nikkei.com/mj/", icon: "fa-capsules", gradient: "linear-gradient(135deg, #1e8449 0%, #27ae60 100%)", imageColor: "#27ae60", viewCount: 1750 },
    { id: 316, title: "バローの新規出店が岐阜・愛知で加速、郊外大型店と都市型小型店を併用", category: "valor", categoryLabel: "バロー", summary: "商圏特性に応じた2つの出店フォーマットを使い分けながら東海圏での面的展開を強化。名古屋市内の駅近小型店と郊外幹線道路沿いの大型店で相互の弱点を補い合う戦略が機能している。", source: "バロー公式情報", sourceUrl: "https://www.valor-co.com/", icon: "fa-building", gradient: "linear-gradient(135deg, #1e8449 0%, #27ae60 100%)", imageColor: "#27ae60", viewCount: 1560 },
    { id: 317, title: "バローの季節フルーツフェアが毎回完売、直接契約産地からの限定入荷が話題", category: "valor", categoryLabel: "バロー", summary: "山梨の桃・山形のさくらんぼ・愛媛のみかんなど産地と直接契約した季節フルーツを限定販売するフェアが恒例イベントに。「バローのフルーツフェアは必ず買い」という固定ファンが形成。", source: "バロー公式情報", sourceUrl: "https://www.valor-co.com/", icon: "fa-apple-whole", gradient: "linear-gradient(135deg, #1e8449 0%, #27ae60 100%)", imageColor: "#27ae60", viewCount: 1870 },
    { id: 318, title: "バローが海産物産直フェアを月1回開催、北海道・三陸からの直送が人気", category: "valor", categoryLabel: "バロー", summary: "北海道・岩手・宮城の漁港から直接仕入れた海産物を特設コーナーで販売するフェアが固定集客イベントに。開催告知のSNS投稿が毎回数万件のリーチを記録し、遠方からの来客も増加。", source: "バロー公式情報", sourceUrl: "https://www.valor-co.com/", icon: "fa-fish", gradient: "linear-gradient(135deg, #1e8449 0%, #27ae60 100%)", imageColor: "#27ae60", viewCount: 2020 },
    { id: 319, title: "バローの地元農業生産者フェアが地域コミュニティを形成、リピーター増加に貢献", category: "valor", categoryLabel: "バロー", summary: "地元農家が直接販売し、来店者と交流する農業生産者フェアが地域コミュニティの形成に貢献。「作った人の話を聞きながら買える」体験が顧客の農産物への関心と購買意欲を高めている。", source: "バロー公式情報", sourceUrl: "https://www.valor-co.com/", icon: "fa-users", gradient: "linear-gradient(135deg, #1e8449 0%, #27ae60 100%)", imageColor: "#27ae60", viewCount: 1340 },
    { id: 320, title: "バローが有機野菜の取扱を5年で3倍に、専用コーナーで差別化を図る", category: "valor", categoryLabel: "バロー", summary: "JAS有機認証農産物の取扱量を継続拡大し、専用コーナーで産地情報と栄養価を詳しく表示。健康意識・環境意識の高い消費者層を取り込み、グラム単価で一般品の2倍以上でも好調な販売。", source: "バロー公式情報", sourceUrl: "https://www.valor-co.com/", icon: "fa-leaf", gradient: "linear-gradient(135deg, #1e8449 0%, #27ae60 100%)", imageColor: "#27ae60", viewCount: 1410 },
    { id: 321, title: "バロー試食・実演販売が復活、売場スタッフの接客力強化で購買率向上", category: "valor", categoryLabel: "バロー", summary: "コロナ禍で中止していた試食・実演販売を全面再開し、接客研修を強化したスタッフが対応。試食を提供した商品の当日購買率が試食なし比で平均3倍以上になる効果が確認されている。", source: "バロー公式情報", sourceUrl: "https://www.valor-co.com/", icon: "fa-utensils", gradient: "linear-gradient(135deg, #1e8449 0%, #27ae60 100%)", imageColor: "#27ae60", viewCount: 1580 },
    { id: 322, title: "バローグループがM&Aで東北市場に参入、新業態で地方スーパーを支援", category: "valor", categoryLabel: "バロー", summary: "東北の中小スーパーを買収・提携することで東海圏外への事業拡大を本格化。バローの調達力・システムを活用しながら地域ブランドは維持するM&A手法が地元にも受け入れられている。", source: "日経MJ", sourceUrl: "https://www.nikkei.com/mj/", icon: "fa-handshake", gradient: "linear-gradient(135deg, #1e8449 0%, #27ae60 100%)", imageColor: "#27ae60", viewCount: 1730 },
    { id: 323, title: "バローの物流センターが機能強化、東海全域を翌日配送できる体制に", category: "valor", categoryLabel: "バロー", summary: "岐阜の基幹物流センターを増築し、東海三県と北陸の全店舗へ翌日配送できる体制を整備。物流コスト削減と商品の鮮度向上を同時に実現し、競合他社との差別化要因になっている。", source: "バロー公式情報", sourceUrl: "https://www.valor-co.com/", icon: "fa-warehouse", gradient: "linear-gradient(135deg, #1e8449 0%, #27ae60 100%)", imageColor: "#27ae60", viewCount: 1260 },
    { id: 324, title: "バローの冷凍食品コーナーが大幅拡充、高付加価値冷食が週売上1割超", category: "valor", categoryLabel: "バロー", summary: "売場面積を1.5倍に拡大した冷凍食品コーナーにシェフ監修・産地直送ラインを追加。従来の節約目的から「品質を楽しむ」高付加価値冷食への移行が進み、週次売上に占める割合が増加。", source: "バロー公式情報", sourceUrl: "https://www.valor-co.com/", icon: "fa-snowflake", gradient: "linear-gradient(135deg, #1e8449 0%, #27ae60 100%)", imageColor: "#27ae60", viewCount: 1490 },
    { id: 325, title: "バローが管理栄養士監修レシピを店内配布、食育と購買促進を同時に実現", category: "valor", categoryLabel: "バロー", summary: "各売場のおすすめ食材を使ったレシピカードを管理栄養士が監修して無料配布。「バローで揃う食材だけで作れる」レシピが購買を後押しし、複数カテゴリの同時購買率が向上している。", source: "バロー公式情報", sourceUrl: "https://www.valor-co.com/", icon: "fa-notes-medical", gradient: "linear-gradient(135deg, #1e8449 0%, #27ae60 100%)", imageColor: "#27ae60", viewCount: 1380 },
    { id: 326, title: "バローのスポーツ栄養食品コーナーが拡大、地元スポーツクラブとコラボ", category: "valor", categoryLabel: "バロー", summary: "地元プロスポーツチームや健康増進団体との連携で、アスリート向け栄養食品の専門コーナーを拡大。高タンパク・機能性飲料の品揃えが充実し、フィットネス層の来店動機になっている。", source: "バロー公式情報", sourceUrl: "https://www.valor-co.com/", icon: "fa-dumbbell", gradient: "linear-gradient(135deg, #1e8449 0%, #27ae60 100%)", imageColor: "#27ae60", viewCount: 1450 },
    { id: 327, title: "バローが地元高校・大学と食品開発コラボ、地域連携で新商品を共同開発", category: "valor", categoryLabel: "バロー", summary: "愛知・岐阜の高校・大学の食物・栄養学系学科と連携し、学生考案の商品をPB商品化する産学連携プロジェクトが進行中。地域の食文化を次世代に継承する取り組みとして注目される。", source: "バロー公式情報", sourceUrl: "https://www.valor-co.com/", icon: "fa-graduation-cap", gradient: "linear-gradient(135deg, #1e8449 0%, #27ae60 100%)", imageColor: "#27ae60", viewCount: 1190 },
    { id: 328, title: "バローの環境配慮型包材切替が全店完了、プラ削減率で業界トップの実績", category: "valor", categoryLabel: "バロー", summary: "惣菜・精肉・青果のプラスチックトレーを紙・バイオ素材に全面切り替えし、年間プラスチック使用量を40%削減。SDGs対応の実績を積極的に発信し、環境意識の高い消費者層から支持。", source: "バロー公式情報", sourceUrl: "https://www.valor-co.com/", icon: "fa-recycle", gradient: "linear-gradient(135deg, #1e8449 0%, #27ae60 100%)", imageColor: "#27ae60", viewCount: 1310 },
    { id: 329, title: "バローが地域イベント「バロー食市」を定期開催、地元食文化の発信拠点に", category: "valor", categoryLabel: "バロー", summary: "地元生産者・飲食店・食品メーカーが一堂に会する「バロー食市」を月1回開催。出店者と消費者が直接つながる場として機能し、地域の食文化発信・継承の拠点としての役割を担う。", source: "バロー公式情報", sourceUrl: "https://www.valor-co.com/", icon: "fa-store", gradient: "linear-gradient(135deg, #1e8449 0%, #27ae60 100%)", imageColor: "#27ae60", viewCount: 1640 },
    { id: 330, title: "バローのデジタルクーポン配信システムが刷新、利用率が前年比2倍に上昇", category: "valor", categoryLabel: "バロー", summary: "購買履歴に基づいたパーソナライズクーポンをアプリで自動配信するシステムをリニューアル。利用者一人ひとりに合ったクーポンが届くことで利用率が倍増し、来店頻度と客単価が向上。", source: "バロー公式情報", sourceUrl: "https://www.valor-co.com/", icon: "fa-percent", gradient: "linear-gradient(135deg, #1e8449 0%, #27ae60 100%)", imageColor: "#27ae60", viewCount: 1720 },
    // ── エブリイ (331-360) ──
    { id: 331, title: "エブリイが中国・四国でシェア拡大、EDLP戦略で競合に対抗", category: "every", categoryLabel: "エブリイ", summary: "広島・山口・岡山を中心とした中国地方でシェアを着実に伸ばすエブリイ。チラシ特売に頼らない「毎日低価格」のEDLP戦略で固定客を獲得し、他地方への展開も視野に入れている。", source: "エブリイ公式情報", sourceUrl: "https://www.every-one.co.jp/", icon: "fa-store", gradient: "linear-gradient(135deg, #1a5276 0%, #2980b9 100%)", imageColor: "#2980b9", viewCount: 1560 },
    { id: 332, title: "エブリイのEDLP「毎日低価格」戦略が固定客を獲得、特売日不要の信頼性が強み", category: "every", categoryLabel: "エブリイ", summary: "特売やタイムセールに頼らず毎日安定した低価格を提供するEDLPが「いつ来ても損しない」という信頼を醸成。チラシを見ながら複数店を回る手間を省けると主婦層に浸透している。", source: "エブリイ公式情報", sourceUrl: "https://www.every-one.co.jp/", icon: "fa-tag", gradient: "linear-gradient(135deg, #1a5276 0%, #2980b9 100%)", imageColor: "#2980b9", viewCount: 1680 },
    { id: 333, title: "エブリイが広島・山口エリアに根ざした地域密着型PBを展開", category: "every", categoryLabel: "エブリイ", summary: "地元の食文化や嗜好に合わせたオリジナル商品を開発するPB戦略が軌道に乗る。広島のお好みソースや山口の出汁ベースの調味料など、地域の味を忠実に再現した商品が地元客に支持される。", source: "エブリイ公式情報", sourceUrl: "https://www.every-one.co.jp/", icon: "fa-award", gradient: "linear-gradient(135deg, #1a5276 0%, #2980b9 100%)", imageColor: "#2980b9", viewCount: 1420 },
    { id: 334, title: "エブリイの鮮魚部門が充実、瀬戸内産直コーナーで鮮度と価格を両立", category: "every", categoryLabel: "エブリイ", summary: "瀬戸内海の漁港と直接取引することで水揚げ当日の魚介を低価格で提供。鮮度証明のPOPと産地・漁船情報の開示が消費者の信頼を高め、鮮魚コーナーが来店動機のトップに。", source: "エブリイ公式情報", sourceUrl: "https://www.every-one.co.jp/", icon: "fa-fish", gradient: "linear-gradient(135deg, #1a5276 0%, #2980b9 100%)", imageColor: "#2980b9", viewCount: 1890 },
    { id: 335, title: "エブリイの産直野菜コーナーが人気、地元農家との直接取引で鮮度を維持", category: "every", categoryLabel: "エブリイ", summary: "広島・山口県内の農家との直接契約で、朝収穫した野菜を当日販売するシステムを全店展開。農家の顔写真と栽培方法の紹介が「顔の見える農産物」への消費者需要を満たしている。", source: "エブリイ公式情報", sourceUrl: "https://www.every-one.co.jp/", icon: "fa-seedling", gradient: "linear-gradient(135deg, #1a5276 0%, #2980b9 100%)", imageColor: "#2980b9", viewCount: 1370 },
    { id: 336, title: "エブリイが広島名産品専用コーナーを設置、牡蠣・レモン・もみじ饅頭が好評", category: "every", categoryLabel: "エブリイ", summary: "広島を代表する食材・食品を一か所に集めた「広島うまいもんコーナー」が観光客にも人気。地元客の誇りと観光客の土産需要を同時に取り込む展示が、来店体験の充実につながっている。", source: "エブリイ公式情報", sourceUrl: "https://www.every-one.co.jp/", icon: "fa-heart", gradient: "linear-gradient(135deg, #1a5276 0%, #2980b9 100%)", imageColor: "#2980b9", viewCount: 1540 },
    { id: 337, title: "エブリイの山口産フグ・マグロ特設コーナーが季節の目玉商品に", category: "every", categoryLabel: "エブリイ", summary: "下関を中心とする山口県の高級魚介を期間限定で特設展開するフェアが毎回話題に。漁港直送の鮮度と適正価格が「スーパーでこのクオリティ？」という驚きを生み集客力が高い。", source: "エブリイ公式情報", sourceUrl: "https://www.every-one.co.jp/", icon: "fa-fish", gradient: "linear-gradient(135deg, #1a5276 0%, #2980b9 100%)", imageColor: "#2980b9", viewCount: 1730 },
    { id: 338, title: "エブリイが「瀬戸内レモン」活用商品を自社開発、ドレッシング・ジュースが人気", category: "every", categoryLabel: "エブリイ", summary: "広島・愛媛産の瀬戸内レモンを活用したPBシリーズを商品化。無農薬・完熟レモンを使った高品質ドレッシングとジュースが地元客・観光客双方に支持され、全国EC販売でも好評。", source: "エブリイ公式情報", sourceUrl: "https://www.every-one.co.jp/", icon: "fa-lemon", gradient: "linear-gradient(135deg, #1a5276 0%, #2980b9 100%)", imageColor: "#2980b9", viewCount: 1610 },
    { id: 339, title: "エブリイの地元しらす・小魚コーナーが充実、瀬戸内の恵みを前面に", category: "every", categoryLabel: "エブリイ", summary: "瀬戸内海産の釜揚げしらすや小魚の佃煮を豊富に展開するコーナーが地元定番品として定着。新鮮さと地域性を兼ね備えた商品群が「エブリイに行けば瀬戸内の魚が揃う」という評判を生む。", source: "エブリイ公式情報", sourceUrl: "https://www.every-one.co.jp/", icon: "fa-fish", gradient: "linear-gradient(135deg, #1a5276 0%, #2980b9 100%)", imageColor: "#2980b9", viewCount: 1290 },
    { id: 340, title: "エブリイが高齢化進む商圏に対応、小分け・使い切りパックの比率を引き上げ", category: "every", categoryLabel: "エブリイ", summary: "一人暮らし・高齢者世帯が多い中国地方の商圏特性に合わせ、野菜・肉・魚の少量パック比率を拡大。「多すぎて余らせてしまう」という高齢顧客の声に応えた品揃えが固定客を獲得。", source: "エブリイ公式情報", sourceUrl: "https://www.every-one.co.jp/", icon: "fa-box-open", gradient: "linear-gradient(135deg, #1a5276 0%, #2980b9 100%)", imageColor: "#2980b9", viewCount: 1450 },
    { id: 341, title: "エブリイ独自の農家連携プログラムが30農家に拡大、顔の見える農産物が好評", category: "every", categoryLabel: "エブリイ", summary: "生産者情報を詳しく開示した農産物展示が消費者の信頼を獲得。連携農家数が30軒を超え、生産者とエブリイが一体となって地元農業を支える仕組みとして地域から評価されている。", source: "エブリイ公式情報", sourceUrl: "https://www.every-one.co.jp/", icon: "fa-handshake", gradient: "linear-gradient(135deg, #1a5276 0%, #2980b9 100%)", imageColor: "#2980b9", viewCount: 1320 },
    { id: 342, title: "エブリイが食材廃棄削減で新たな取り組み、閉店前値引きをアプリで事前告知", category: "every", categoryLabel: "エブリイ", summary: "閉店前の値引き商品情報をアプリでリアルタイム発信する仕組みを導入し、食材廃棄量が20%減少。「今日のタイムセール情報」目的でアプリを毎日確認するヘビーユーザーが急増している。", source: "エブリイ公式情報", sourceUrl: "https://www.every-one.co.jp/", icon: "fa-mobile-screen", gradient: "linear-gradient(135deg, #1a5276 0%, #2980b9 100%)", imageColor: "#2980b9", viewCount: 1580 },
    { id: 343, title: "エブリイがセルフレジを全店導入完了、待ち時間半減で高齢者からも支持", category: "every", categoryLabel: "エブリイ", summary: "全店舗でのセルフレジ導入が完了し、レジ待ち時間が平均50%短縮。高齢者向けに操作を補助するサポートスタッフを配置したことで、シニア層のセルフレジ利用率が想定を上回っている。", source: "エブリイ公式情報", sourceUrl: "https://www.every-one.co.jp/", icon: "fa-desktop", gradient: "linear-gradient(135deg, #1a5276 0%, #2980b9 100%)", imageColor: "#2980b9", viewCount: 1240 },
    { id: 344, title: "エブリイが宅配サービスの試験展開を開始、過疎地域への食料品供給を支援", category: "every", categoryLabel: "エブリイ", summary: "中山間地域の高齢者を中心とした食料品アクセス困難層に向け、週2回の宅配サービスを試験展開。行政の買い物支援施策とも連携し、社会インフラとしての役割を担うことが期待されている。", source: "エブリイ公式情報", sourceUrl: "https://www.every-one.co.jp/", icon: "fa-truck", gradient: "linear-gradient(135deg, #1a5276 0%, #2980b9 100%)", imageColor: "#2980b9", viewCount: 1380 },
    { id: 345, title: "エブリイのデジタルポイントカードへの移行が完了、アプリ会員が50万人突破", category: "every", categoryLabel: "エブリイ", summary: "紙のポイントカードを廃止しアプリへの完全移行を完了。購買データを活用した個別クーポン配信と、貯めたポイントのリアルタイム確認機能が利便性向上に貢献し会員数が急増。", source: "エブリイ公式情報", sourceUrl: "https://www.every-one.co.jp/", icon: "fa-credit-card", gradient: "linear-gradient(135deg, #1a5276 0%, #2980b9 100%)", imageColor: "#2980b9", viewCount: 1490 },
    { id: 346, title: "エブリイが地元酒蔵と連携した日本酒コーナーを設置、蔵元直送の希少銘柄も", category: "every", categoryLabel: "エブリイ", summary: "広島・山口の地酒文化を支える取り組みとして、地元酒蔵と直接連携した日本酒コーナーを展開。蔵元から直送される数量限定酒が毎月入荷し、日本酒ファンの来店動機に成長している。", source: "エブリイ公式情報", sourceUrl: "https://www.every-one.co.jp/", icon: "fa-wine-bottle", gradient: "linear-gradient(135deg, #1a5276 0%, #2980b9 100%)", imageColor: "#2980b9", viewCount: 1620 },
    { id: 347, title: "エブリイが「広島カキ」の年間安定取扱体制を整備、旬以外の流通にも対応", category: "every", categoryLabel: "エブリイ", summary: "旬の秋冬に限らず広島カキを年間通じて安定供給できる冷凍・加工品の品揃えを強化。「カキはエブリイで」という地元定番を確立し、地域の食文化と流通を結ぶ役割を果たしている。", source: "エブリイ公式情報", sourceUrl: "https://www.every-one.co.jp/", icon: "fa-star", gradient: "linear-gradient(135deg, #1a5276 0%, #2980b9 100%)", imageColor: "#2980b9", viewCount: 1760 },
    { id: 348, title: "エブリイが地域最安値宣言に基づく価格保証制度を導入、競合との価格競争に自信", category: "every", categoryLabel: "エブリイ", summary: "主要品目で地域最安値を保証する価格コミットメント制度を導入。EDLP戦略の信頼性をさらに高める取り組みとして消費者から好評を受け、新規来店客の獲得にも効果を発揮している。", source: "日経MJ", sourceUrl: "https://www.nikkei.com/mj/", icon: "fa-bolt", gradient: "linear-gradient(135deg, #1a5276 0%, #2980b9 100%)", imageColor: "#2980b9", viewCount: 1840 },
    { id: 349, title: "エブリイが農園直送野菜サブスクを試験展開、週1回配送で家族向けが好評", category: "every", categoryLabel: "エブリイ", summary: "提携農家から週1回、旬の野菜セットを自宅に届けるサブスクリプションサービスを試験展開。「おまかせで旬の野菜が届く」手軽さが忙しい子育て世代に刺さり、満足度が高い。", source: "エブリイ公式情報", sourceUrl: "https://www.every-one.co.jp/", icon: "fa-box-open", gradient: "linear-gradient(135deg, #1a5276 0%, #2980b9 100%)", imageColor: "#2980b9", viewCount: 1430 },
    { id: 350, title: "エブリイが子どもの食育イベントを月1回開催、地域の親子連れに支持", category: "every", categoryLabel: "エブリイ", summary: "店内の調理スペースを活用した親子料理教室を定期開催。地元の旬の食材を使ったレシピを学びながら買い物体験もできる複合型イベントが地域の子育て支援コンテンツとして定着。", source: "エブリイ公式情報", sourceUrl: "https://www.every-one.co.jp/", icon: "fa-users", gradient: "linear-gradient(135deg, #1a5276 0%, #2980b9 100%)", imageColor: "#2980b9", viewCount: 1250 },
    { id: 351, title: "エブリイの移動スーパー「エブリイ号」が中山間地域で好評、週2回巡回", category: "every", categoryLabel: "エブリイ", summary: "公共交通機関が少ない中山間地域を週2回巡回する移動スーパーが定着。精肉・野菜・日用品を積んだ専用車が来るのを楽しみにしている高齢者も多く、地域の見守りサービスとしても機能。", source: "エブリイ公式情報", sourceUrl: "https://www.every-one.co.jp/", icon: "fa-truck", gradient: "linear-gradient(135deg, #1a5276 0%, #2980b9 100%)", imageColor: "#2980b9", viewCount: 1670 },
    { id: 352, title: "エブリイの冷凍惣菜コーナーが売場2倍に拡張、働く主婦層の需要に対応", category: "every", categoryLabel: "エブリイ", summary: "共働き家庭の増加を背景に冷凍惣菜の品揃えを大幅拡充。地元食材を使った広島風惣菜の冷凍版など地域性を活かした商品開発で、全国チェーンにはない独自性を打ち出している。", source: "エブリイ公式情報", sourceUrl: "https://www.every-one.co.jp/", icon: "fa-snowflake", gradient: "linear-gradient(135deg, #1a5276 0%, #2980b9 100%)", imageColor: "#2980b9", viewCount: 1530 },
    { id: 353, title: "エブリイが食品製造スタッフの技術研修を強化、惣菜品質の向上に注力", category: "every", categoryLabel: "エブリイ", summary: "惣菜部門の競争激化に対応するため、調理師資格取得支援と技術研修プログラムを拡充。「スーパーの惣菜とは思えない」品質を目指した取り組みが地域での口コミを生んでいる。", source: "エブリイ公式情報", sourceUrl: "https://www.every-one.co.jp/", icon: "fa-graduation-cap", gradient: "linear-gradient(135deg, #1a5276 0%, #2980b9 100%)", imageColor: "#2980b9", viewCount: 1190 },
    { id: 354, title: "エブリイが地元学校給食とメニュー共同開発、食文化の継承を地域一体で推進", category: "every", categoryLabel: "エブリイ", summary: "広島・山口の小中学校の給食センターと連携し、地元食材を使った給食メニューを共同開発。学校で食べた料理を自宅でも再現できるレシピをスーパーで配布する取り組みが食育に貢献。", source: "エブリイ公式情報", sourceUrl: "https://www.every-one.co.jp/", icon: "fa-school", gradient: "linear-gradient(135deg, #1a5276 0%, #2980b9 100%)", imageColor: "#2980b9", viewCount: 1160 },
    { id: 355, title: "エブリイの瀬戸内産海産物フェアが県外観光客にも好評、土産需要が増加", category: "every", categoryLabel: "エブリイ", summary: "瀬戸内の新鮮海産物を一堂に集めた期間限定フェアが、観光客のインバウンド需要も取り込む形に発展。「スーパーで本物の瀬戸内を買える」という評判が旅行サイトでも紹介されるほど浸透。", source: "エブリイ公式情報", sourceUrl: "https://www.every-one.co.jp/", icon: "fa-fish", gradient: "linear-gradient(135deg, #1a5276 0%, #2980b9 100%)", imageColor: "#2980b9", viewCount: 1780 },
    { id: 356, title: "エブリイが有機・特別栽培野菜の取扱量を3年で倍増、健康ニーズに対応", category: "every", categoryLabel: "エブリイ", summary: "JAS有機・特別栽培認証の野菜を専用コーナーで展開し、健康意識の高い消費者層への訴求を強化。産地との長期契約で安定供給を確保しながら、一般農産物との価格差縮小も実現している。", source: "エブリイ公式情報", sourceUrl: "https://www.every-one.co.jp/", icon: "fa-leaf", gradient: "linear-gradient(135deg, #1a5276 0%, #2980b9 100%)", imageColor: "#2980b9", viewCount: 1350 },
    { id: 357, title: "エブリイが地域防災食品の備蓄支援サービスを開始、非常食コーナーを強化", category: "every", categoryLabel: "エブリイ", summary: "南海トラフ地震対策として広島・山口両県が推進する家庭備蓄支援と連携し、ローリングストック法に基づく食品備蓄提案コーナーを全店に設置。地域の防災力向上に貢献している。", source: "エブリイ公式情報", sourceUrl: "https://www.every-one.co.jp/", icon: "fa-house-shield", gradient: "linear-gradient(135deg, #1a5276 0%, #2980b9 100%)", imageColor: "#2980b9", viewCount: 1410 },
    { id: 358, title: "エブリイのバックヤード見学ツアーが地域で人気、食品安全への理解を促進", category: "every", categoryLabel: "エブリイ", summary: "月1回開催の精肉・鮮魚バックヤード見学ツアーが地域の食育イベントとして定着。「どうやって食材が新鮮に届くか」を実際に見ることで食品安全への理解と店舗への信頼が深まっている。", source: "エブリイ公式情報", sourceUrl: "https://www.every-one.co.jp/", icon: "fa-eye", gradient: "linear-gradient(135deg, #1a5276 0%, #2980b9 100%)", imageColor: "#2980b9", viewCount: 1280 },
    { id: 359, title: "エブリイが地元漁港との直接取引を強化、水揚げ当日に店頭に並べる体制を確立", category: "every", categoryLabel: "エブリイ", summary: "瀬戸内の主要漁港6港と直接取引契約を結び、水揚げ当日に店頭に並べるシステムを全店で整備。「今日捕れた魚が今日買える」鮮度の圧倒的な高さが来店動機の第一位に挙がっている。", source: "エブリイ公式情報", sourceUrl: "https://www.every-one.co.jp/", icon: "fa-anchor", gradient: "linear-gradient(135deg, #1a5276 0%, #2980b9 100%)", imageColor: "#2980b9", viewCount: 1920 },
    { id: 360, title: "エブリイがインバウンド観光客向けに多言語対応を強化、英語・中国語で食材案内", category: "every", categoryLabel: "エブリイ", summary: "広島観光の増加に伴うインバウンド客の来店増を受け、英語・中国語・韓国語対応のPOPと案内板を設置。「外国人にも伝わる日本食の魅力」を発信する取り組みとして評価されている。", source: "エブリイ公式情報", sourceUrl: "https://www.every-one.co.jp/", icon: "fa-globe", gradient: "linear-gradient(135deg, #1a5276 0%, #2980b9 100%)", imageColor: "#2980b9", viewCount: 1470 },
    // ── マックスバリュ (361-390) ──
    { id: 361, title: "マックスバリュがトップバリュ「グリーンアイ」有機シリーズを全店展開", category: "maxvalu", categoryLabel: "マックスバリュ", summary: "イオングループのオーガニックPB「グリーンアイ」の全品目を全国のマックスバリュ店舗で取り扱い開始。有機農産物から加工食品まで揃う専用コーナーが健康志向層の来店動機に成長。", source: "マックスバリュ公式情報", sourceUrl: "https://www.maxvalu.co.jp/", icon: "fa-leaf", gradient: "linear-gradient(135deg, #922b21 0%, #c0392b 100%)", imageColor: "#922b21", viewCount: 1620 },
    { id: 362, title: "マックスバリュが地域別の食品調達を強化、地産地消コーナーを全店に設置", category: "maxvalu", categoryLabel: "マックスバリュ", summary: "全国に展開するマックスバリュ各社が地域の農産物・水産物を積極調達し、地産地消コーナーを設置。グループのスケールメリットを活かしつつ地域密着性を強化する戦略が功を奏している。", source: "マックスバリュ公式情報", sourceUrl: "https://www.maxvalu.co.jp/", icon: "fa-seedling", gradient: "linear-gradient(135deg, #922b21 0%, #c0392b 100%)", imageColor: "#922b21", viewCount: 1480 },
    { id: 363, title: "マックスバリュのセルフレジ・スマートカート導入率が業界トップ水準に", category: "maxvalu", categoryLabel: "マックスバリュ", summary: "イオングループのDX投資を背景にセルフレジとスマートカートの全店展開が完了。商品をカートに入れながら自動集計できるスマートカートが高齢者にも好評で、レジ待ち解消に貢献。", source: "マックスバリュ公式情報", sourceUrl: "https://www.maxvalu.co.jp/", icon: "fa-cart-shopping", gradient: "linear-gradient(135deg, #922b21 0%, #c0392b 100%)", imageColor: "#922b21", viewCount: 1740 },
    { id: 364, title: "マックスバリュが深夜営業を見直し省エネ転換、削減コストを価格に還元", category: "maxvalu", categoryLabel: "マックスバリュ", summary: "電力コスト削減と従業員の働き方改革を両立するため24時間・深夜営業を段階的に短縮。削減したコストを価格に還元し、競合との価格競争力維持と環境負荷低減を同時に達成。", source: "日経MJ", sourceUrl: "https://www.nikkei.com/mj/", icon: "fa-bolt", gradient: "linear-gradient(135deg, #922b21 0%, #c0392b 100%)", imageColor: "#922b21", viewCount: 1390 },
    { id: 365, title: "マックスバリュのオンライン注文・店頭受取が全国全店で利用可能に", category: "maxvalu", categoryLabel: "マックスバリュ", summary: "スマホで事前注文し、店頭で受け取るクリック&コレクトサービスが全店展開完了。来店時の「買い忘れ防止」と「重い商品の持ち運び軽減」が消費者に評価され利用率が急上昇。", source: "マックスバリュ公式情報", sourceUrl: "https://www.maxvalu.co.jp/", icon: "fa-mobile-screen", gradient: "linear-gradient(135deg, #922b21 0%, #c0392b 100%)", imageColor: "#922b21", viewCount: 1650 },
    { id: 366, title: "マックスバリュの「健康ケア」専門コーナーが全店展開、機能性食品を集約", category: "maxvalu", categoryLabel: "マックスバリュ", summary: "特定保健用食品・機能性表示食品・栄養機能食品を一か所に集めた健康ケアコーナーが全店に普及。薬剤師によるアドバイスも受けられる店舗では健康相談客が売場に定着している。", source: "マックスバリュ公式情報", sourceUrl: "https://www.maxvalu.co.jp/", icon: "fa-heart-pulse", gradient: "linear-gradient(135deg, #922b21 0%, #c0392b 100%)", imageColor: "#922b21", viewCount: 1530 },
    { id: 367, title: "マックスバリュがイオンウォレットとの連携強化、決済とポイントを一体化", category: "maxvalu", categoryLabel: "マックスバリュ", summary: "イオングループ共通デジタルウォレットとの完全統合により、支払い・ポイント管理・クーポン利用がアプリ一つで完結。グループ内の相互利用促進でマックスバリュの来店頻度が向上。", source: "マックスバリュ公式情報", sourceUrl: "https://www.maxvalu.co.jp/", icon: "fa-credit-card", gradient: "linear-gradient(135deg, #922b21 0%, #c0392b 100%)", imageColor: "#922b21", viewCount: 1810 },
    { id: 368, title: "マックスバリュのSDGsラベル食品の取扱数が前年比50%増、環境配慮商品が定着", category: "maxvalu", categoryLabel: "マックスバリュ", summary: "MSC・ASC・レインフォレスト・アライアンスなど国際認証ラベル食品の取り扱いを積極拡大。環境意識の高い購買者層に向けた棚割りの可視化が、認知向上と購買促進に効果を発揮。", source: "マックスバリュ公式情報", sourceUrl: "https://www.maxvalu.co.jp/", icon: "fa-recycle", gradient: "linear-gradient(135deg, #922b21 0%, #c0392b 100%)", imageColor: "#922b21", viewCount: 1290 },
    { id: 369, title: "マックスバリュが旬の食材を使った季節フェアを毎月実施、テーマ型販促が奏功", category: "maxvalu", categoryLabel: "マックスバリュ", summary: "「春の山菜」「夏の土用丑」「秋の新米」など月替わりの季節テーマフェアが集客装置として定着。旬の食材への関心喚起と関連商品の同時購買促進で、フェア開催月の売上が15%前後増加。", source: "マックスバリュ公式情報", sourceUrl: "https://www.maxvalu.co.jp/", icon: "fa-calendar", gradient: "linear-gradient(135deg, #922b21 0%, #c0392b 100%)", imageColor: "#922b21", viewCount: 1560 },
    { id: 370, title: "マックスバリュが外国人観光客向けに多言語対応POPを全店に導入", category: "maxvalu", categoryLabel: "マックスバリュ", summary: "急増するインバウンド観光客の利用拡大に対応し、主要商品の説明を英語・中国語・韓国語で表示するPOPを全店に導入。「日本のスーパーを体験したい外国人旅行者」の来店が増加している。", source: "マックスバリュ公式情報", sourceUrl: "https://www.maxvalu.co.jp/", icon: "fa-globe", gradient: "linear-gradient(135deg, #922b21 0%, #c0392b 100%)", imageColor: "#922b21", viewCount: 1370 },
    { id: 371, title: "マックスバリュの農産物産地直送キャンペーンが年中展開、50産地以上と契約", category: "maxvalu", categoryLabel: "マックスバリュ", summary: "全国50産地以上の農家・漁師と直接取引契約を結び、旬の食材を産地から直送するキャンペーンを年間通じて実施。産地PRと鮮度訴求を組み合わせた展示が購買率向上に貢献している。", source: "マックスバリュ公式情報", sourceUrl: "https://www.maxvalu.co.jp/", icon: "fa-truck", gradient: "linear-gradient(135deg, #922b21 0%, #c0392b 100%)", imageColor: "#922b21", viewCount: 1450 },
    { id: 372, title: "マックスバリュが国産食材の使用率向上目標を設定、2030年に80%を目指す", category: "maxvalu", categoryLabel: "マックスバリュ", summary: "自社PBトップバリュの国産原材料使用率を2030年に80%まで高める目標を公表。国産農産物の安定調達に向けた農家との長期契約拡大と生産支援プログラムを同時に進めている。", source: "日経MJ", sourceUrl: "https://www.nikkei.com/mj/", icon: "fa-chart-line", gradient: "linear-gradient(135deg, #922b21 0%, #c0392b 100%)", imageColor: "#922b21", viewCount: 1580 },
    { id: 373, title: "マックスバリュがバルク・量り売りコーナーを全店新設、ナッツ・穀物等が好評", category: "maxvalu", categoryLabel: "マックスバリュ", summary: "ナッツ・ドライフルーツ・雑穀・スパイスを必要な量だけ購入できる量り売りコーナーを全店展開。食品ロス削減と節約意識に応える売り方が若い世代に特に支持されている。", source: "マックスバリュ公式情報", sourceUrl: "https://www.maxvalu.co.jp/", icon: "fa-scale-balanced", gradient: "linear-gradient(135deg, #922b21 0%, #c0392b 100%)", imageColor: "#922b21", viewCount: 1320 },
    { id: 374, title: "マックスバリュが地元漁港と直接取引を開始、旬の鮮魚を低価格で提供", category: "maxvalu", categoryLabel: "マックスバリュ", summary: "全国各地のマックスバリュが近隣漁港と直接取引契約を結び、地域の旬の魚介を低価格で提供する体制を整備。「地元の海の幸をスーパーで手軽に」という需要に応える展開が好評。", source: "マックスバリュ公式情報", sourceUrl: "https://www.maxvalu.co.jp/", icon: "fa-fish", gradient: "linear-gradient(135deg, #922b21 0%, #c0392b 100%)", imageColor: "#922b21", viewCount: 1690 },
    { id: 375, title: "マックスバリュのAI発注システムが全店展開完了、食品廃棄率が平均20%減", category: "maxvalu", categoryLabel: "マックスバリュ", summary: "天気・地域イベント・購買履歴データを統合したAI自動発注システムの全店導入が完了。食品廃棄率が平均20%低下し、年間削減コストがシステム投資を大幅に上回る効果を実証。", source: "マックスバリュ公式情報", sourceUrl: "https://www.maxvalu.co.jp/", icon: "fa-microchip", gradient: "linear-gradient(135deg, #922b21 0%, #c0392b 100%)", imageColor: "#922b21", viewCount: 1840 },
    { id: 376, title: "マックスバリュがフードコートをリニューアル、地元食材活用の新業態を導入", category: "maxvalu", categoryLabel: "マックスバリュ", summary: "老朽化した店内フードコートを地元食材を使ったレストランスペースにリニューアル。地元農家・漁師から直接仕入れた食材を使う料理が「地産地消の体験型フード」として集客に貢献。", source: "マックスバリュ公式情報", sourceUrl: "https://www.maxvalu.co.jp/", icon: "fa-utensils", gradient: "linear-gradient(135deg, #922b21 0%, #c0392b 100%)", imageColor: "#922b21", viewCount: 1470 },
    { id: 377, title: "マックスバリュの弁当・惣菜が地域オリジナル展開に移行、地産素材を活用", category: "maxvalu", categoryLabel: "マックスバリュ", summary: "全国一律のメニューから脱却し、各地域の地元食材・食文化を反映したオリジナル惣菜・弁当の開発を強化。「地域のマックスバリュには地域の味がある」というブランドイメージの構築を目指す。", source: "マックスバリュ公式情報", sourceUrl: "https://www.maxvalu.co.jp/", icon: "fa-box-open", gradient: "linear-gradient(135deg, #922b21 0%, #c0392b 100%)", imageColor: "#922b21", viewCount: 1680 },
    { id: 378, title: "マックスバリュが高齢者向け「スロースクエア」を設置、ゆっくり買い物できる", category: "maxvalu", categoryLabel: "マックスバリュ", summary: "急かされずにゆっくり買い物できる高齢者専用ゾーン「スロースクエア」を全国の大型店に設置。大きな文字のPOP・ゆったりした通路・専任スタッフの配置が高齢者の買い物体験を向上。", source: "マックスバリュ公式情報", sourceUrl: "https://www.maxvalu.co.jp/", icon: "fa-person-cane", gradient: "linear-gradient(135deg, #922b21 0%, #c0392b 100%)", imageColor: "#922b21", viewCount: 1380 },
    { id: 379, title: "マックスバリュのグルテンフリー・アレルギー対応食品コーナーが充実", category: "maxvalu", categoryLabel: "マックスバリュ", summary: "食物アレルギーを持つ消費者や健康上の理由からグルテンを避ける層向けの専用コーナーを強化。トップバリュのアレルギー対応シリーズとあわせて約200品目が一か所に集まる充実の品揃えに。", source: "マックスバリュ公式情報", sourceUrl: "https://www.maxvalu.co.jp/", icon: "fa-shield-halved", gradient: "linear-gradient(135deg, #922b21 0%, #c0392b 100%)", imageColor: "#922b21", viewCount: 1240 },
    { id: 380, title: "マックスバリュが環境配慮型包材への移行を全商品で完了、CO2削減に貢献", category: "maxvalu", categoryLabel: "マックスバリュ", summary: "グループ全体の環境目標達成に向け、マックスバリュ全店のPB商品包材を植物由来・再生素材に切り替え完了。年間プラスチック削減量が東京タワー30本分の重量に相当すると発表。", source: "日経MJ", sourceUrl: "https://www.nikkei.com/mj/", icon: "fa-recycle", gradient: "linear-gradient(135deg, #922b21 0%, #c0392b 100%)", imageColor: "#922b21", viewCount: 1510 },
    { id: 381, title: "マックスバリュがデリカ部門をリニューアル、調理実演コーナーを新設", category: "maxvalu", categoryLabel: "マックスバリュ", summary: "惣菜部門の売場を全面刷新し、シェフが実際に調理する実演コーナーを新設。「できたて感」の演出と対面での食材説明がブランド価値を高め、惣菜部門の売上が前年比25%増加。", source: "マックスバリュ公式情報", sourceUrl: "https://www.maxvalu.co.jp/", icon: "fa-fire", gradient: "linear-gradient(135deg, #922b21 0%, #c0392b 100%)", imageColor: "#922b21", viewCount: 1750 },
    { id: 382, title: "マックスバリュのベビー・キッズ向け食品コーナーが拡充、育児支援を強化", category: "maxvalu", categoryLabel: "マックスバリュ", summary: "離乳食・幼児食・子ども向けスナックを集めた専用コーナーを拡大し、管理栄養士の推薦コメントも掲示。子育て世代への対応強化が若い家族層のロイヤルカスタマー獲得につながっている。", source: "マックスバリュ公式情報", sourceUrl: "https://www.maxvalu.co.jp/", icon: "fa-baby", gradient: "linear-gradient(135deg, #922b21 0%, #c0392b 100%)", imageColor: "#922b21", viewCount: 1430 },
    { id: 383, title: "マックスバリュが低糖質・低カロリー食品の専門ゾーンを設置、健康志向需要に対応", category: "maxvalu", categoryLabel: "マックスバリュ", summary: "糖質オフ・カロリーコントロール商品を一か所に集めた専門ゾーンを展開。ダイエット・健康管理目的で来店する顧客層が固定化し、専門コーナー設置後の関連商品全体の売上が増加している。", source: "マックスバリュ公式情報", sourceUrl: "https://www.maxvalu.co.jp/", icon: "fa-heart", gradient: "linear-gradient(135deg, #922b21 0%, #c0392b 100%)", imageColor: "#922b21", viewCount: 1590 },
    { id: 384, title: "マックスバリュが「まいばすけっと」との商品融通を開始、在庫効率が向上", category: "maxvalu", categoryLabel: "マックスバリュ", summary: "同じイオングループの小型スーパー「まいばすけっと」との間で、需要に応じた商品融通を開始。大型店と小型店の在庫を共有することでロスを削減し、グループ全体の収益改善に貢献。", source: "日経MJ", sourceUrl: "https://www.nikkei.com/mj/", icon: "fa-arrows-rotate", gradient: "linear-gradient(135deg, #922b21 0%, #c0392b 100%)", imageColor: "#922b21", viewCount: 1660 },
    { id: 385, title: "マックスバリュが子ども食堂との連携を拡大、余剰食品の寄付に全店参加", category: "maxvalu", categoryLabel: "マックスバリュ", summary: "全国の子ども食堂への食品寄付プログラムに全店が参加し、賞味期限前の食品を定期的に提供する仕組みを確立。CSR活動としての認知向上と食品ロス削減の両立で地域社会からの評価が高い。", source: "マックスバリュ公式情報", sourceUrl: "https://www.maxvalu.co.jp/", icon: "fa-hand-holding-heart", gradient: "linear-gradient(135deg, #922b21 0%, #c0392b 100%)", imageColor: "#922b21", viewCount: 1350 },
    { id: 386, title: "マックスバリュのPB「トップバリュベストプライス」が節約需要を取り込み好調", category: "maxvalu", categoryLabel: "マックスバリュ", summary: "食品値上がりが続く中、ナショナルブランド比30%以上安いトップバリュベストプライスシリーズへの乗り換えが加速。コスパ重視層の日常購買品として定着し、シリーズ全体の売上が伸長。", source: "マックスバリュ公式情報", sourceUrl: "https://www.maxvalu.co.jp/", icon: "fa-tag", gradient: "linear-gradient(135deg, #922b21 0%, #c0392b 100%)", imageColor: "#922b21", viewCount: 1920 },
    { id: 387, title: "マックスバリュが地元農家の後継者支援プログラムを開始、産地の持続可能性を確保", category: "maxvalu", categoryLabel: "マックスバリュ", summary: "農業従事者の高齢化・後継者不足に危機感を持ち、若手農家の育成・支援プログラムを開始。安定した買い取り価格と農業技術支援を組み合わせ、産地の長期的な供給能力維持を図る。", source: "マックスバリュ公式情報", sourceUrl: "https://www.maxvalu.co.jp/", icon: "fa-seedling", gradient: "linear-gradient(135deg, #922b21 0%, #c0392b 100%)", imageColor: "#922b21", viewCount: 1270 },
    { id: 388, title: "マックスバリュがドラッグストアとの連携強化、医薬品・コスメ売場を拡大", category: "maxvalu", categoryLabel: "マックスバリュ", summary: "ドラッグストアとの業務提携により、食品スーパーのフロア内で市販薬・化粧品・日用品の充実した品揃えを実現。「食品も薬も化粧品も一か所で揃う」利便性で来店頻度の向上を狙う。", source: "マックスバリュ公式情報", sourceUrl: "https://www.maxvalu.co.jp/", icon: "fa-capsules", gradient: "linear-gradient(135deg, #922b21 0%, #c0392b 100%)", imageColor: "#922b21", viewCount: 1480 },
    { id: 389, title: "マックスバリュの宅配サービスが高齢者支援として行政と連携、補助金活用も", category: "maxvalu", categoryLabel: "マックスバリュ", summary: "過疎化・高齢化が進む地域の行政とパートナーシップを締結し、補助金を活用した高齢者向け宅配サービスの採算性を確保。社会インフラとしての食品小売業の役割を実践している。", source: "マックスバリュ公式情報", sourceUrl: "https://www.maxvalu.co.jp/", icon: "fa-truck", gradient: "linear-gradient(135deg, #922b21 0%, #c0392b 100%)", imageColor: "#922b21", viewCount: 1400 },
    { id: 390, title: "マックスバリュが海外食材コーナーを拡充、アジア・欧米の多様な食を提供", category: "maxvalu", categoryLabel: "マックスバリュ", summary: "在日外国人の増加と消費者の食の多様化ニーズに応え、アジア・中東・欧米の食材を集めた「ワールドフードコーナー」を全店に展開。外国語対応スタッフの配置で来店外国人の満足度も向上。", source: "マックスバリュ公式情報", sourceUrl: "https://www.maxvalu.co.jp/", icon: "fa-globe", gradient: "linear-gradient(135deg, #922b21 0%, #c0392b 100%)", imageColor: "#922b21", viewCount: 1560 },
    // ── 汎用補充 (391-410) ──
    { id: 391, title: "台湾発スイーツ「豆花」が全国に専門店急増、タピオカの次のブームへ", category: "sweets", categoryLabel: "スイーツ", summary: "台湾の伝統的な豆腐デザート「豆花」が、多様なトッピングと映えるビジュアルでSNSを席巻。専門店が都市部を中心に急増し、次のアジア系スイーツブームの主役候補として注目を集めている。", source: "スイーツ・フューチャー", sourceUrl: "#", icon: "fa-bowl-food", gradient: "linear-gradient(to top, #ff9a9e 0%, #fecfef 99%)", imageColor: "#e84393", viewCount: 1780 },
    { id: 392, title: "「シニアフレンドリー食」市場が急拡大、噛みやすく栄養豊富な食品に需要", category: "health", categoryLabel: "健康", summary: "高齢者の嚥下・咀嚼機能に配慮しながら栄養バランスも確保した食品への需要が拡大。介護食の枠を超えた「おいしいシニア食」として一般スーパーでの取り扱いが増え市場が急成長中。", source: "ヘルスケア・フード", sourceUrl: "#", icon: "fa-heart-pulse", gradient: "linear-gradient(to right, #43e97b 0%, #38f9d7 100%)", imageColor: "#16a085", viewCount: 1340 },
    { id: 393, title: "「もち麦」ブームが第2段階へ、腸活から美容・ダイエット市場に拡大", category: "health", categoryLabel: "健康", summary: "腸活目的で普及したもち麦が、美肌・ダイエット効果の認知向上で新たな需要を創出。白米に混ぜるだけの手軽さから若い女性層にも浸透し、スーパーでは専用コーナーが常設化している。", source: "ヘルシーフード・ウィークリー", sourceUrl: "#", icon: "fa-seedling", gradient: "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)", imageColor: "#27ae60", viewCount: 1120 },
    { id: 394, title: "「発芽玄米」ブームが再来、白米と混ぜて炊ける手軽さで若い層にも浸透", category: "health", categoryLabel: "健康", summary: "栄養価の高さが再評価された発芽玄米が、パック米タイプの登場で手軽に利用できるようになり若年層にも普及。健康系インフルエンサーの紹介がきっかけとなった購買が続いている。", source: "機能性食品ニュース", sourceUrl: "#", icon: "fa-leaf", gradient: "linear-gradient(to right, #d4fc79 0%, #96e6a1 100%)", imageColor: "#27ae60", viewCount: 980 },
    { id: 395, title: "「地元食材」を前面に出した道の駅の売上が過去最高、観光×食が連動", category: "retail", categoryLabel: "小売・流通", summary: "インバウンド・国内観光の回復を背景に、地元農産物や加工品を取り揃えた道の駅の売上が記録を更新。食×観光の融合が地方経済の新たな柱となりつつある。", source: "フード・ジャーナル", sourceUrl: "#", icon: "fa-store", gradient: "linear-gradient(to right, #43e97b 0%, #38f9d7 100%)", imageColor: "#16a085", viewCount: 1450 },
    { id: 396, title: "「薬味革命」クラフト系調味料が急拡大、ニラ・ガーリック・山椒が主役に", category: "retail", categoryLabel: "小売・流通", summary: "大量生産の一般調味料から離れ、クラフト系の薬味調味料への需要が急増。産地直送のニラ醤油や燻製ガーリックオイルなど個性的な商品がSNSで話題を呼び、ギフト需要も創出している。", source: "スパイス・マーケット通信", sourceUrl: "#", icon: "fa-pepper-hot", gradient: "linear-gradient(120deg, #f6d365 0%, #fda085 100%)", imageColor: "#e67e22", viewCount: 1050 },
    { id: 397, title: "「低温調理」が家庭に普及、専用器具の低価格化で市場が2倍以上に拡大", category: "gaishoku", categoryLabel: "外食", summary: "レストランの技術だった低温調理が家庭で楽しめるようになり市場が急拡大。5,000円台の低温調理器の登場で導入ハードルが下がり、主婦・料理男子を問わず幅広い層が購入している。", source: "ミート・トレンド・ジャーナル", sourceUrl: "#", icon: "fa-fire", gradient: "linear-gradient(to right, #f83600 0%, #f9d423 100%)", imageColor: "#c0392b", viewCount: 890 },
    { id: 398, title: "「エスニック調味料」の国内製造が増加、外食から家庭へ本格スパイスが浸透", category: "asian", categoryLabel: "韓国・アジア", summary: "外食で親しまれてきたタイ・ベトナム・インドの本格スパイスを家庭で再現したいニーズが高まり、国内メーカーが参入拡大。スーパーのエスニックコーナーが売場面積2倍以上に拡張している。", source: "アジアフードレポート", sourceUrl: "#", icon: "fa-bowl-rice", gradient: "linear-gradient(to right, #fa709a 0%, #fee140 100%)", imageColor: "#ff0099", viewCount: 1180 },
    { id: 399, title: "「豆乳」の多様化が加速、フレーバー・機能性で女性・高齢者層へ訴求拡大", category: "beverage", categoryLabel: "飲料", summary: "プレーン一辺倒だった豆乳市場が抹茶・バナナ・コーンなどのフレーバーと機能性表示の複合商品で多様化。飲みやすさの向上で「飲み続けられる健康飲料」として定着している。", source: "ドリンク・トレンドラボ", sourceUrl: "#", icon: "fa-droplet", gradient: "linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)", imageColor: "#d35400", viewCount: 920 },
    { id: 400, title: "「クラフトビール」の地方ブルワリーが1,000社突破、地域の名物に成長", category: "beverage", categoryLabel: "飲料", summary: "全国のクラフトビールブルワリーが1,000社を超え、各地方の個性豊かなビールが地元の食文化に定着。地元食材を使ったフードペアリングと組み合わせた観光需要も創出している。", source: "コーヒー・カルチャー誌", sourceUrl: "#", icon: "fa-beer-mug-empty", gradient: "linear-gradient(to top, #d299c2 0%, #fef9d7 100%)", imageColor: "#d35400", viewCount: 1380 },
    { id: 401, title: "「天然酵母パン」専門店が郊外で急増、健康・こだわり志向が支持を拡大", category: "sweets", categoryLabel: "スイーツ", summary: "添加物不使用・天然酵母にこだわったパン専門店が郊外に急増。車での来店前提の店舗が多く、週末だけ開店する隠れ家型店舗がSNSで話題になり遠方からのファンも獲得している。", source: "スイーツ・フューチャー", sourceUrl: "#", icon: "fa-bread-slice", gradient: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)", imageColor: "#f1c40f", viewCount: 1020 },
    { id: 402, title: "「かき氷」の高級化が全国に波及、専門店が1年を通じて営業するスタイルに", category: "sweets", categoryLabel: "スイーツ", summary: "フレッシュフルーツや和素材を使ったプレミアムかき氷の専門店が通年営業スタイルで全国展開。夏の季節食というイメージを脱し、SNS映えする高級スイーツとして定着している。", source: "スイーツ・フューチャー", sourceUrl: "#", icon: "fa-snowflake", gradient: "linear-gradient(to top, #ff9a9e 0%, #fecfef 99%)", imageColor: "#e84393", viewCount: 1650 },
    { id: 403, title: "「シングルオリジン」コーヒーへの関心が高まり、産地・農園情報が購買要素に", category: "beverage", categoryLabel: "飲料", summary: "単一農園・単一産地の豆にこだわるスペシャルティコーヒー文化が一般層にも普及。産地ストーリーや生産者の顔が見える商品に付加価値を見出す消費者が増え市場規模が拡大している。", source: "コーヒー・カルチャー誌", sourceUrl: "#", icon: "fa-mug-hot", gradient: "linear-gradient(to top, #d299c2 0%, #fef9d7 100%)", imageColor: "#d35400", viewCount: 1240 },
    { id: 404, title: "「オーツミルク」がカフェのスタンダードに、植物性ミルク市場が急成長", category: "beverage", categoryLabel: "飲料", summary: "乳アレルギー対応・ヴィーガン・健康志向など多様なニーズを取り込み、オーツミルクが大手カフェチェーンのメニューに定番化。牛乳に次ぐ第2の選択肢としてスーパーでも棚を拡大中。", source: "ドリンク・トレンドラボ", sourceUrl: "#", icon: "fa-droplet", gradient: "linear-gradient(to right, #00dbde 0%, #fc00ff 100%)", imageColor: "#8e44ad", viewCount: 1560 },
    { id: 405, title: "「冷凍スープ」の専門店が都市部で増加、栄養価の高さと手軽さが支持される", category: "nakashoku", categoryLabel: "中食", summary: "野菜たっぷりの手作りスープを急速冷凍した専門店商品が健康意識の高い共働き世帯に支持。解凍するだけで本格的な栄養スープが完成する手軽さが、忙しい現代人の食卓を支えている。", source: "宅食ウィークリー", sourceUrl: "#", icon: "fa-bowl-food", gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", imageColor: "#9b59b6", viewCount: 1310 },
    { id: 406, title: "「水産エコラベル」食品への認知度が上昇、MSC・ASC認証商品の売上増加", category: "health", categoryLabel: "健康", summary: "海洋環境保全に取り組む漁業・養殖業を認証するMSC・ASCラベルの認知度が一般消費者の間でも上昇。エコラベル付き水産品の購買を意識的に選ぶ消費者層が若い世代を中心に増加。", source: "サステナブル・フード・ジャーナル", sourceUrl: "#", icon: "fa-fish", gradient: "linear-gradient(to right, #92fe9d 0%, #00c9ff 100%)", imageColor: "#2ecc71", viewCount: 870 },
    { id: 407, title: "「地元の魚」を食べる文化の復活、地産地消の海産物を支援する取り組みが拡大", category: "health", categoryLabel: "健康", summary: "漁獲量の減少と輸入魚介価格の上昇を背景に、地元産の未利用魚・規格外魚を食卓に届ける取り組みが全国で拡大。スーパーや飲食店が地元漁師と連携し地産地消の水産文化を再生している。", source: "九州農業新報", sourceUrl: "#", icon: "fa-anchor", gradient: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)", imageColor: "#27ae60", viewCount: 790 },
    { id: 408, title: "「甘酒」の健康効果が再評価、飲む点滴として朝食市場で定番化が進む", category: "beverage", categoryLabel: "飲料", summary: "アミノ酸・ビタミン・ブドウ糖を豊富に含む甘酒が「飲む点滴」として健康食品メディアで再評価。酒粕タイプ・米麹タイプそれぞれの機能性が明確化され、朝食ドリンク市場での存在感が増している。", source: "機能性食品ニュース", sourceUrl: "#", icon: "fa-mug-hot", gradient: "linear-gradient(120deg, #f6d365 0%, #fda085 100%)", imageColor: "#e67e22", viewCount: 1080 },
    { id: 409, title: "「アボカド」消費が横ばい化、次のスーパーフードとして紫キャベツが台頭", category: "health", categoryLabel: "健康", summary: "一大ブームを築いたアボカドの輸入量が頭打ちになる中、アントシアニンが豊富な紫キャベツが次世代スーパーフードとして注目。国産紫キャベツの生産が急増し価格も手頃になりつつある。", source: "スーパーフード・ダイジェスト", sourceUrl: "#", icon: "fa-leaf", gradient: "linear-gradient(to right, #d4fc79 0%, #96e6a1 100%)", imageColor: "#27ae60", viewCount: 960 },
    { id: 410, title: "「フードペアリング」文化が一般化、食べ物と飲み物の科学的組合せに注目が集まる", category: "gaishoku", categoryLabel: "外食", summary: "ソムリエのワインペアリングに限らず、コーヒー×チョコレート・日本茶×和菓子など食材同士の相性を科学的に解説するコンテンツが人気化。飲食店の新たな体験提案として差別化に活用される。", source: "ガストロノミー・リサーチ", sourceUrl: "#", icon: "fa-star", gradient: "linear-gradient(to top, #0ba360 0%, #3cba92 100%)", imageColor: "#16a085", viewCount: 1150 },
    // ── ヤオコー (411-440) ──
    { id: 411, title: "ヤオコーが「食生活提案型スーパー」を進化、惣菜×料理提案の一体化で差別化", category: "yaoko", categoryLabel: "ヤオコー", summary: "単なる食材販売にとどまらず、調理法・献立提案・栄養バランスまでをセットで提供するヤオコー独自の「食生活提案型」売場が進化。料理に迷う消費者の「答え」を店頭で出す戦略が来店動機を強化している。", source: "ヤオコー公式情報", sourceUrl: "https://www.yaoko-net.com/", icon: "fa-utensils", gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", imageColor: "#e84393", viewCount: 1820 },
    { id: 412, title: "ヤオコーの惣菜部門が絶好調、「シェフズキッチン」ブランドで外食品質を家庭へ", category: "yaoko", categoryLabel: "ヤオコー", summary: "プロのシェフが監修した惣菜ラインを「シェフズキッチン」として展開し、外食代替需要を獲得。素材へのこだわりと本格的な調理技術をスーパーの価格帯で提供し、惣菜部門が全売上の3割を超える。", source: "ヤオコー公式情報", sourceUrl: "https://www.yaoko-net.com/", icon: "fa-fire", gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", imageColor: "#e84393", viewCount: 2050 },
    { id: 413, title: "ヤオコーのミールキットが進化、20分以内に本格料理が完成するセットが人気", category: "yaoko", categoryLabel: "ヤオコー", summary: "カット済み食材と専用ソースをセットにしたミールキットが共働き世帯に定着。調理時間20分以内・栄養バランス考慮・食材廃棄ゼロを三原則に開発した新シリーズが週販1万セットを突破。", source: "ヤオコー公式情報", sourceUrl: "https://www.yaoko-net.com/", icon: "fa-clock", gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", imageColor: "#e84393", viewCount: 1960 },
    { id: 414, title: "ヤオコーが有機・特別栽培野菜の品揃えを業界最高水準に、産地直送で鮮度確保", category: "yaoko", categoryLabel: "ヤオコー", summary: "JAS有機認証農産物の取扱数を300品目超に拡大し、産地直送で朝採れ野菜を当日販売する体制を整備。「安全・安心・高品質」を求める30〜50代の主要顧客層に強く刺さっている。", source: "ヤオコー公式情報", sourceUrl: "https://www.yaoko-net.com/", icon: "fa-seedling", gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", imageColor: "#e84393", viewCount: 1540 },
    { id: 415, title: "ヤオコーの料理教室「クッキングスクール」が全店展開、食育と集客を両立", category: "yaoko", categoryLabel: "ヤオコー", summary: "店内のクッキングスペースで開催する料理教室が月3,000人以上の参加者を集め、参加者の来店頻度が非参加者の1.8倍に上昇。食育と顧客ロイヤルティ向上を同時に実現する独自施策として注目される。", source: "日経MJ", sourceUrl: "https://www.nikkei.com/mj/", icon: "fa-graduation-cap", gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", imageColor: "#e84393", viewCount: 1730 },
    { id: 416, title: "ヤオコーが高付加価値PB「ヤオコーセレクト」を拡充、品質で勝負するPB戦略", category: "yaoko", categoryLabel: "ヤオコー", summary: "低価格訴求ではなくナショナルブランド以上の品質を目指す独自PBが好調。厳選素材・伝統製法にこだわった商品がヤオコーファンの支持を集め、PBながら高単価でも売上が伸長している。", source: "ヤオコー公式情報", sourceUrl: "https://www.yaoko-net.com/", icon: "fa-award", gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", imageColor: "#e84393", viewCount: 1620 },
    { id: 417, title: "ヤオコーが関東圏で出店を加速、「食の目利き」ブランドで競合との差別化を鮮明に", category: "yaoko", categoryLabel: "ヤオコー", summary: "埼玉を本拠地に関東全域へ出店を拡大するヤオコーが、価格競争より品質・提案力での差別化を選択。単なる食材調達の場ではなく「食生活を豊かにする場所」としての位置づけが固定客獲得の源泉に。", source: "日経MJ", sourceUrl: "https://www.nikkei.com/mj/", icon: "fa-store", gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", imageColor: "#e84393", viewCount: 1880 },
    { id: 418, title: "ヤオコーの鮮魚コーナーが高評価、目利きバイヤーによる厳選仕入れが話題", category: "yaoko", categoryLabel: "ヤオコー", summary: "豊洲市場から直接仕入れるバイヤーの目利き力が口コミで評判を呼び、「鮮魚はヤオコーが一番」という定評が定着。朝一番の競りで落とした高鮮度魚を当日店頭に並べる体制が強みとなっている。", source: "ヤオコー公式情報", sourceUrl: "https://www.yaoko-net.com/", icon: "fa-fish", gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", imageColor: "#e84393", viewCount: 1790 },
    { id: 419, title: "ヤオコーが健康コンシェルジュサービスを導入、管理栄養士が買い物をサポート", category: "yaoko", categoryLabel: "ヤオコー", summary: "店内常駐の管理栄養士が生活習慣病対策・ダイエット・アレルギー対応などの食事相談に対応するサービスが差別化要素に。医療機関との連携も視野に入れた「食×健康」の融合が新たな集客力を生む。", source: "ヤオコー公式情報", sourceUrl: "https://www.yaoko-net.com/", icon: "fa-heart-pulse", gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", imageColor: "#e84393", viewCount: 1670 },
    { id: 420, title: "ヤオコーのワイン・チーズ専門コーナーが充実、グルメ層の固定客を獲得", category: "yaoko", categoryLabel: "ヤオコー", summary: "ソムリエ資格保持スタッフが選ぶワインとアルティザンチーズの専門コーナーが高所得者層・グルメ層に支持される。「スーパーとは思えないセレクション」という口コミが新規顧客を引き寄せている。", source: "ヤオコー公式情報", sourceUrl: "https://www.yaoko-net.com/", icon: "fa-wine-glass", gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", imageColor: "#e84393", viewCount: 1580 },
    { id: 421, title: "ヤオコーがデジタル会員証「ヤオコーアプリ」を刷新、パーソナル提案機能を強化", category: "yaoko", categoryLabel: "ヤオコー", summary: "購買履歴・家族構成・健康目標を組み合わせたパーソナル献立提案機能を新搭載。「今夜の夕食」をAIが提案し、必要な食材をワンタップでリストアップする機能が主婦層に高評価。", source: "ヤオコー公式情報", sourceUrl: "https://www.yaoko-net.com/", icon: "fa-mobile-screen", gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", imageColor: "#e84393", viewCount: 1940 },
    { id: 422, title: "ヤオコーの冷凍食品が「高品質」路線に特化、割安品より上質品の品揃えを優先", category: "yaoko", categoryLabel: "ヤオコー", summary: "大量販売の低価格冷凍食品より、素材・製法にこだわった高付加価値冷食を優先的に取り扱う戦略が功を奏す。「ヤオコーの冷食は一味違う」という評判が定着し、客層との相性も良好。", source: "ヤオコー公式情報", sourceUrl: "https://www.yaoko-net.com/", icon: "fa-snowflake", gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", imageColor: "#e84393", viewCount: 1450 },
    { id: 423, title: "ヤオコーが食品ロス削減で独自施策、閉店前の値引き情報をアプリで先行配信", category: "yaoko", categoryLabel: "ヤオコー", summary: "廃棄削減と環境意識の高い顧客ニーズを組み合わせ、閉店前の値引き対象商品をアプリ会員に先行通知するシステムを導入。ロス率が前年比25%改善し、環境配慮企業としてのブランドイメージも向上。", source: "ヤオコー公式情報", sourceUrl: "https://www.yaoko-net.com/", icon: "fa-recycle", gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", imageColor: "#e84393", viewCount: 1380 },
    { id: 424, title: "ヤオコーが産直農家との共同開発商品を拡大、「農家のこだわり」シリーズが話題", category: "yaoko", categoryLabel: "ヤオコー", summary: "産地農家とヤオコーのバイヤーが共同で一から開発したオリジナル農産物シリーズが好評。通常の流通では流通しない希少品種や特別栽培品を独占展開し、「ここにしかない食材」として差別化。", source: "ヤオコー公式情報", sourceUrl: "https://www.yaoko-net.com/", icon: "fa-handshake", gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", imageColor: "#e84393", viewCount: 1520 },
    { id: 425, title: "ヤオコーが子育て世帯向け「ベビー&キッズフード」専門コーナーを強化", category: "yaoko", categoryLabel: "ヤオコー", summary: "管理栄養士監修の離乳食・幼児食から小学生向けスナックまでを一か所に集めた専門コーナーが好評。添加物の少なさ・アレルゲン情報の詳細開示が安全意識の高い親世代に支持されている。", source: "ヤオコー公式情報", sourceUrl: "https://www.yaoko-net.com/", icon: "fa-baby", gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", imageColor: "#e84393", viewCount: 1430 },
    { id: 426, title: "ヤオコーの精肉部門が高品質路線を強化、国産ブランド牛を常時展開", category: "yaoko", categoryLabel: "ヤオコー", summary: "松阪・近江・米沢など銘柄和牛を常時ラインナップするプレミアム精肉コーナーが富裕層・グルメ層の支持を集める。格安訴求ではなく素材の良さで勝負するヤオコーらしい精肉戦略が客単価向上に貢献。", source: "ヤオコー公式情報", sourceUrl: "https://www.yaoko-net.com/", icon: "fa-crown", gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", imageColor: "#e84393", viewCount: 1710 },
    { id: 427, title: "ヤオコーがグルテンフリー・オーガニック食品の品揃えで業界トップ水準に", category: "yaoko", categoryLabel: "ヤオコー", summary: "食物アレルギー・健康志向・環境配慮を横断した「特別なニーズに応える」品揃えを約500品目に拡大。スーパーとしては異例の充実度がこだわり消費者の「ヤオコーなら安心」という信頼を形成している。", source: "ヤオコー公式情報", sourceUrl: "https://www.yaoko-net.com/", icon: "fa-shield-halved", gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", imageColor: "#e84393", viewCount: 1340 },
    { id: 428, title: "ヤオコーが「食卓革命」をテーマにした新型店舗を開業、買い物体験を刷新", category: "yaoko", categoryLabel: "ヤオコー", summary: "食材購入から料理提案・栄養相談・調理実演まで一体化した新コンセプト店舗が開業。「スーパーで食の悩みがすべて解決できる」という体験型売場が業界の次の標準を先取りしていると評価される。", source: "日経MJ", sourceUrl: "https://www.nikkei.com/mj/", icon: "fa-building", gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", imageColor: "#e84393", viewCount: 2130 },
    { id: 429, title: "ヤオコーがSDGs取り組みを強化、農業支援から包材削減まで一体的に推進", category: "yaoko", categoryLabel: "ヤオコー", summary: "環境・社会・ガバナンスの各分野でのSDGs施策を体系化し、産地農家の持続可能性支援・プラ包材削減・フードロス削減を統合的に推進。環境配慮を訴求軸とした差別化がブランド価値向上に寄与。", source: "ヤオコー公式情報", sourceUrl: "https://www.yaoko-net.com/", icon: "fa-leaf", gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", imageColor: "#e84393", viewCount: 1260 },
    { id: 430, title: "ヤオコーの輸入食材コーナーが充実、欧米・アジアの本格食材が並ぶ", category: "yaoko", categoryLabel: "ヤオコー", summary: "世界各地の本格食材を取り揃えたインポートフードコーナーが料理好き・グルメ層に高評価。イタリアのパスタ・フランスのチーズ・東南アジアのスパイスなど専門店レベルの品揃えがヤオコーらしさを体現。", source: "ヤオコー公式情報", sourceUrl: "https://www.yaoko-net.com/", icon: "fa-globe", gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", imageColor: "#e84393", viewCount: 1490 },
    { id: 431, title: "ヤオコーが地域の生産者と「ファーマーズパートナー制度」を創設", category: "yaoko", categoryLabel: "ヤオコー", summary: "関東近郊の農家との長期パートナーシップ制度を創設し、栽培指導・販路保証・収入安定化を支援。農業の持続可能性確保と高品質農産物の安定調達を両立する仕組みが産地・小売双方に利益をもたらす。", source: "ヤオコー公式情報", sourceUrl: "https://www.yaoko-net.com/", icon: "fa-seedling", gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", imageColor: "#e84393", viewCount: 1350 },
    { id: 432, title: "ヤオコーのスイーツコーナーが拡充、有名パティシエ監修商品も展開", category: "yaoko", categoryLabel: "ヤオコー", summary: "著名パティシエとのコラボ商品や職人製造の本格スイーツを惣菜感覚で提供するコーナーが好調。「デパ地下に行かなくてもヤオコーで買える」という口コミが高所得者層の来店を促進している。", source: "ヤオコー公式情報", sourceUrl: "https://www.yaoko-net.com/", icon: "fa-cake-candles", gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", imageColor: "#e84393", viewCount: 1680 },
    { id: 433, title: "ヤオコーが「週末だけの特別フェア」を恒例化、希少食材目当ての来店が増加", category: "yaoko", categoryLabel: "ヤオコー", summary: "通常は取り扱わない希少食材や産地限定品を週末のみ特別販売するフェアが固定集客イベントに成長。「今週末のヤオコーフェアは何？」と週初めに確認するリピーターが増加している。", source: "ヤオコー公式情報", sourceUrl: "https://www.yaoko-net.com/", icon: "fa-calendar", gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", imageColor: "#e84393", viewCount: 1820 },
    { id: 434, title: "ヤオコーが高齢者向け「やさしい食」コーナーを全店展開、介護食との境界を解消", category: "yaoko", categoryLabel: "ヤオコー", summary: "噛みにくい・飲み込みにくいという課題を持つ高齢者向けに、おいしさと食べやすさを両立した商品を「やさしい食」として展開。介護食のイメージを脱した高品質な商品群が家族の購買を促進。", source: "ヤオコー公式情報", sourceUrl: "https://www.yaoko-net.com/", icon: "fa-person-cane", gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", imageColor: "#e84393", viewCount: 1420 },
    { id: 435, title: "ヤオコーのドライグロサリー部門が刷新、世界の調味料・スパイスが充実", category: "yaoko", categoryLabel: "ヤオコー", summary: "世界各地の本格調味料・スパイスを中心にドライグロサリー部門を全面刷新。料理好きが「ヤオコーに行けば珍しい調味料が見つかる」と期待して来店するようになり、調味料部門の売上が倍増。", source: "ヤオコー公式情報", sourceUrl: "https://www.yaoko-net.com/", icon: "fa-pepper-hot", gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", imageColor: "#e84393", viewCount: 1560 },
    { id: 436, title: "ヤオコーが「栄養レシート」サービスを導入、購入食材の栄養バランスを即時可視化", category: "yaoko", categoryLabel: "ヤオコー", summary: "購入した食材の栄養素合計をレシートと同時にアプリで表示するサービスを導入。「今日の買い物でどんな栄養が摂れるか」がわかることで食生活の改善を後押しし、健康管理意識の高い層に好評。", source: "日経MJ", sourceUrl: "https://www.nikkei.com/mj/", icon: "fa-chart-pie", gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", imageColor: "#e84393", viewCount: 1970 },
    { id: 437, title: "ヤオコーが食のサブスクサービスを試験展開、旬の厳選食材が毎週自宅に届く", category: "yaoko", categoryLabel: "ヤオコー", summary: "ヤオコーのバイヤーが厳選した旬の食材と専用レシピをセットで届けるサブスクを試験展開。「何を買うか迷わなくていい」「新しい食材との出会いがある」という利用者の評価が高く、継続率90%超。", source: "ヤオコー公式情報", sourceUrl: "https://www.yaoko-net.com/", icon: "fa-box-open", gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", imageColor: "#e84393", viewCount: 1860 },
    { id: 438, title: "ヤオコーが環境配慮の量り売りコーナーを全店展開、ナッツ・穀物が好評", category: "yaoko", categoryLabel: "ヤオコー", summary: "必要な分だけ量り売りで購入できるバルクコーナーをヤオコー全店で展開。食品ロス削減・包材削減・節約の三拍子が揃った売り方がヤオコーの顧客層に刺さり、常連客の新たな購買習慣として定着。", source: "ヤオコー公式情報", sourceUrl: "https://www.yaoko-net.com/", icon: "fa-scale-balanced", gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", imageColor: "#e84393", viewCount: 1290 },
    { id: 439, title: "ヤオコーのパン工房が人気、天然酵母・国産小麦にこだわった店内焼きたてが評判", category: "yaoko", categoryLabel: "ヤオコー", summary: "各店舗の自社製パン工房で毎朝焼き上げる天然酵母パンが固定ファンを獲得。国産小麦・無添加・焼きたてを三本柱にした品質訴求が専門店レベルの評価を集め、パン目的の来店が増加。", source: "ヤオコー公式情報", sourceUrl: "https://www.yaoko-net.com/", icon: "fa-bread-slice", gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", imageColor: "#e84393", viewCount: 1640 },
    { id: 440, title: "ヤオコーがフードロス削減×食育の連動施策、子ども向け食品廃棄体験イベント開催", category: "yaoko", categoryLabel: "ヤオコー", summary: "小学生を対象に食品ロスの現状を学びながら廃棄予定食材を使った料理を体験するイベントを月1回開催。食育・CSR・新規顧客接点の三役を担うプログラムとして地域からの評価も高い。", source: "ヤオコー公式情報", sourceUrl: "https://www.yaoko-net.com/", icon: "fa-users", gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", imageColor: "#e84393", viewCount: 1180 },
    // ── ベルク (441-470) ──
    { id: 441, title: "ベルクが関東北部でシェア拡大、EDLP戦略と長時間営業で地域に浸透", category: "belc", categoryLabel: "ベルク", summary: "埼玉・群馬・栃木・茨城を中心にEDLP戦略と早朝〜深夜の長時間営業を組み合わせ固定客を獲得。「いつ行っても安くて開いている」という安心感が地域住民の日常生活に欠かせない存在として定着している。", source: "ベルク公式情報", sourceUrl: "https://www.belc.jp/", icon: "fa-store", gradient: "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)", imageColor: "#2980b9", viewCount: 1650 },
    { id: 442, title: "ベルクのEDLP戦略が消費者の節約ニーズと合致、食品値上がり局面で来客数増加", category: "belc", categoryLabel: "ベルク", summary: "食品全般の値上がりが続く中、特売日を設けずに毎日安定した低価格を維持するベルクのEDLPへの評価が高まっている。「チラシを見比べる必要がない」という手間なしの節約が忙しい家庭に支持される。", source: "ベルク公式情報", sourceUrl: "https://www.belc.jp/", icon: "fa-tag", gradient: "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)", imageColor: "#2980b9", viewCount: 1870 },
    { id: 443, title: "ベルクのPB「ベルクオリジナル」が前年比25%増、コスパ重視層に支持拡大", category: "belc", categoryLabel: "ベルク", summary: "ナショナルブランド比20〜30%安いベルクのPB商品が食品値上がりを背景に販売を急伸。品質改善を継続しながら低価格を維持する商品開発力が節約志向の強い関東北部消費者に刺さっている。", source: "ベルク公式情報", sourceUrl: "https://www.belc.jp/", icon: "fa-percent", gradient: "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)", imageColor: "#2980b9", viewCount: 1720 },
    { id: 444, title: "ベルクの生鮮食品部門が強化、農家・漁師との直接取引で価格競争力を維持", category: "belc", categoryLabel: "ベルク", summary: "関東近郊の農家・漁港との直接取引比率を引き上げ、中間流通コストを削減することで低価格を維持。「安くても産地がはっきりしている」という安心感がEDLPの信頼性をさらに高めている。", source: "ベルク公式情報", sourceUrl: "https://www.belc.jp/", icon: "fa-seedling", gradient: "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)", imageColor: "#2980b9", viewCount: 1490 },
    { id: 445, title: "ベルクが深夜・早朝需要を取り込む長時間営業を維持、生活密着型として定着", category: "belc", categoryLabel: "ベルク", summary: "多くのスーパーが短縮営業に転換する中、ベルクは早朝7時〜深夜0時の長時間営業を維持。夜勤明けや深夜の帰宅者など他店では取り込めない時間帯の需要を確実に獲得し固定客化に成功している。", source: "ベルク公式情報", sourceUrl: "https://www.belc.jp/", icon: "fa-moon", gradient: "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)", imageColor: "#2980b9", viewCount: 1380 },
    { id: 446, title: "ベルクが食品ロス削減でAI発注を全店導入、廃棄率が業界平均の半分以下に", category: "belc", categoryLabel: "ベルク", summary: "売上データ・気象・地域イベントを組み合わせたAI発注システムを全店展開し、食品廃棄率が大幅低下。コスト削減効果を価格に還元してさらなる低価格化を図るサイクルが競争優位を強化している。", source: "ベルク公式情報", sourceUrl: "https://www.belc.jp/", icon: "fa-microchip", gradient: "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)", imageColor: "#2980b9", viewCount: 1560 },
    { id: 447, title: "ベルクの惣菜部門が拡充、「家庭の味」に近いシンプル惣菜がリピーターを獲得", category: "belc", categoryLabel: "ベルク", summary: "過剰な調理加工を避け家庭料理に近い味付けにこだわった惣菜シリーズが固定ファンを獲得。「ベルクの惣菜は素材の味がする」という口コミが広がり、低価格でも品質への信頼が形成されている。", source: "ベルク公式情報", sourceUrl: "https://www.belc.jp/", icon: "fa-utensils", gradient: "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)", imageColor: "#2980b9", viewCount: 1640 },
    { id: 448, title: "ベルクがセルフレジ導入を全店で完了、人件費削減分を価格維持に活用", category: "belc", categoryLabel: "ベルク", summary: "全店舗でのセルフレジ展開完了により、削減した人件費をEDLP価格の維持・引き下げに活用するサイクルを確立。低価格維持のためのコスト構造改革として機能し、競合との価格差を拡大している。", source: "ベルク公式情報", sourceUrl: "https://www.belc.jp/", icon: "fa-desktop", gradient: "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)", imageColor: "#2980b9", viewCount: 1430 },
    { id: 449, title: "ベルクのポイントアプリ会員が150万人突破、デジタルクーポン活用率が急上昇", category: "belc", categoryLabel: "ベルク", summary: "アプリ限定クーポンと購買履歴連動のパーソナル特典が会員増加を牽引し、150万人を突破。デジタルクーポン利用者の客単価が非利用者より平均18%高いというデータが追加施策の根拠となっている。", source: "ベルク公式情報", sourceUrl: "https://www.belc.jp/", icon: "fa-mobile-screen", gradient: "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)", imageColor: "#2980b9", viewCount: 1580 },
    { id: 450, title: "ベルクが関東北部の新規出店を加速、商圏内シェア30%超えを目指す", category: "belc", categoryLabel: "ベルク", summary: "埼玉北部・群馬南部を中心に年間5〜8店舗の出店を継続し地域密着の面を拡大。各商圏での認知度向上とEDLPブランドの浸透で、来店頻度の高い「週複数回訪問客」の比率が上昇している。", source: "日経MJ", sourceUrl: "https://www.nikkei.com/mj/", icon: "fa-building", gradient: "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)", imageColor: "#2980b9", viewCount: 1760 },
    { id: 451, title: "ベルクが冷凍食品コーナーを2倍に拡張、働く世帯の「時短需要」を取り込む", category: "belc", categoryLabel: "ベルク", summary: "共働き世帯増加を受けて冷凍食品の売場面積を全店で拡大。低価格EDLPを冷凍食品にも適用し、「安くて手軽においしい」という三拍子を揃えた品揃えが時短調理需要をがっちり取り込んでいる。", source: "ベルク公式情報", sourceUrl: "https://www.belc.jp/", icon: "fa-snowflake", gradient: "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)", imageColor: "#2980b9", viewCount: 1830 },
    { id: 452, title: "ベルクが地元農産物の展示・直売スペースを拡充、地産地消の浸透を推進", category: "belc", categoryLabel: "ベルク", summary: "埼玉・群馬・栃木の地元農家との連携を強化し、朝採れ野菜を当日販売する地産地消コーナーを拡大。「地元の野菜が低価格で買える」という訴求が地域コミュニティとの結びつきを深めている。", source: "ベルク公式情報", sourceUrl: "https://www.belc.jp/", icon: "fa-leaf", gradient: "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)", imageColor: "#2980b9", viewCount: 1340 },
    { id: 453, title: "ベルクが食品廃棄ゼロへの取り組みを強化、閉店前売り切りを徹底", category: "belc", categoryLabel: "ベルク", summary: "閉店前の値引き段階を細かく設定し、食品の売り切りを徹底するオペレーションを全店で標準化。廃棄コストの削減分をEDLP価格の維持に充てる好循環が、競合他社との価格差拡大につながっている。", source: "ベルク公式情報", sourceUrl: "https://www.belc.jp/", icon: "fa-recycle", gradient: "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)", imageColor: "#2980b9", viewCount: 1270 },
    { id: 454, title: "ベルクの精肉コーナーが充実、国産豚肉の直仕入れで低価格高品質を実現", category: "belc", categoryLabel: "ベルク", summary: "群馬・栃木の養豚農家から直接仕入れる国産豚肉の取扱量を拡大。産地直接取引によるコスト削減と新鮮さの両立が「ベルクの豚肉は安くておいしい」という地域での定評を築いている。", source: "ベルク公式情報", sourceUrl: "https://www.belc.jp/", icon: "fa-fire", gradient: "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)", imageColor: "#2980b9", viewCount: 1680 },
    { id: 455, title: "ベルクがドラッグストア機能を一部店舗に統合、ワンストップ化で利便性向上", category: "belc", categoryLabel: "ベルク", summary: "食品スーパーとドラッグストアを組み合わせた複合業態の試験展開を開始。処方箋対応薬局・OTC医薬品・化粧品コーナーを設置し、「食品も薬も一か所で」という利便性で来客数増加を狙う。", source: "日経MJ", sourceUrl: "https://www.nikkei.com/mj/", icon: "fa-capsules", gradient: "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)", imageColor: "#2980b9", viewCount: 1520 },
    { id: 456, title: "ベルクがオンライン注文サービスを本格化、低価格EDLPを宅配にも適用", category: "belc", categoryLabel: "ベルク", summary: "実店舗のEDLP価格をそのまま適用したオンラインショッピングサービスを本格展開。「ネットでも安い」というシンプルな価値訴求が、高い配送手数料を嫌う節約志向層に受け入れられている。", source: "ベルク公式情報", sourceUrl: "https://www.belc.jp/", icon: "fa-truck", gradient: "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)", imageColor: "#2980b9", viewCount: 1750 },
    { id: 457, title: "ベルクが地域の子ども食堂へ食品提供を全店で開始、社会貢献と廃棄削減を両立", category: "belc", categoryLabel: "ベルク", summary: "全店舗が地域の子ども食堂と連携し、賞味期限前の食品を定期的に提供する仕組みを確立。食品廃棄削減とCSR活動を兼ねた取り組みが地域から高評価を受け、企業ブランドの向上にも貢献。", source: "ベルク公式情報", sourceUrl: "https://www.belc.jp/", icon: "fa-hand-holding-heart", gradient: "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)", imageColor: "#2980b9", viewCount: 1230 },
    { id: 458, title: "ベルクがシニア向けサービスを充実、高齢者に優しい売場設計と宅配を強化", category: "belc", categoryLabel: "ベルク", summary: "高齢化が進む関東北部の商圏特性に対応し、大きな文字のPOP・広い通路・専任サポートスタッフなど高齢者に優しい売場設計に全店で切り替え。宅配サービスとの組み合わせで買い物弱者支援も強化。", source: "ベルク公式情報", sourceUrl: "https://www.belc.jp/", icon: "fa-person-cane", gradient: "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)", imageColor: "#2980b9", viewCount: 1410 },
    { id: 459, title: "ベルクが地元産クラフトビール・地酒コーナーを設置、地域食文化の発信拠点に", category: "belc", categoryLabel: "ベルク", summary: "群馬・栃木・埼玉のクラフトビールブルワリーや地元酒蔵との連携で地産酒類コーナーを展開。低価格EDLPの価格訴求と地域性の訴求を組み合わせ、「地元の味もベルクで」という認知を広げている。", source: "ベルク公式情報", sourceUrl: "https://www.belc.jp/", icon: "fa-beer-mug-empty", gradient: "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)", imageColor: "#2980b9", viewCount: 1460 },
    { id: 460, title: "ベルクが環境配慮型包材への移行を推進、プラスチック削減で業界水準を上回る", category: "belc", categoryLabel: "ベルク", summary: "惣菜・精肉・青果のプラスチックトレーを順次紙・植物由来素材に切り替え、年間プラ使用量30%削減を達成。コスト増を価格に転嫁せずEDLP維持との両立を実現したオペレーション力が注目される。", source: "ベルク公式情報", sourceUrl: "https://www.belc.jp/", icon: "fa-recycle", gradient: "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)", imageColor: "#2980b9", viewCount: 1290 },
    { id: 461, title: "ベルクが機能性食品・健康食品コーナーを拡大、シニア層の健康需要を取り込む", category: "belc", categoryLabel: "ベルク", summary: "関東北部の高齢化商圏に合わせ、機能性表示食品・サプリメント・特定保健用食品の専門コーナーを全店拡大。EDLP価格の健康食品という訴求が「体にいいものを安く続けたい」層に刺さっている。", source: "ベルク公式情報", sourceUrl: "https://www.belc.jp/", icon: "fa-heart", gradient: "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)", imageColor: "#2980b9", viewCount: 1580 },
    { id: 462, title: "ベルクの鮮魚コーナーが強化、内陸部でも漁港直送で新鮮な魚介が購入可能に", category: "belc", categoryLabel: "ベルク", summary: "海から遠い関東北部内陸エリアの店舗でも漁港から直送した鮮魚を翌日販売できる物流体制を整備。「内陸でも新鮮な魚が安く買える」という訴求が、鮮魚購買頻度の向上につながっている。", source: "ベルク公式情報", sourceUrl: "https://www.belc.jp/", icon: "fa-fish", gradient: "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)", imageColor: "#2980b9", viewCount: 1690 },
    { id: 463, title: "ベルクが移動スーパーを農村地域に展開、過疎地の食料品アクセスを確保", category: "belc", categoryLabel: "ベルク", summary: "公共交通機関が少ない群馬・栃木の農村部で移動スーパーの運行を開始。ベルクのEDLP価格を移動販売にも適用することで、買い物困難者に低価格の食料品を届ける社会的役割を担っている。", source: "ベルク公式情報", sourceUrl: "https://www.belc.jp/", icon: "fa-truck", gradient: "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)", imageColor: "#2980b9", viewCount: 1360 },
    { id: 464, title: "ベルクが農業高校と連携した「地元野菜」販売コーナーを設置、食育に貢献", category: "belc", categoryLabel: "ベルク", summary: "地元農業高校の生徒が育てた野菜を特設コーナーで販売する取り組みが評判を呼ぶ。生徒の学習成果を地域に還元しながら食育を推進する仕組みが自治体・学校・消費者の三者から高評価を受けている。", source: "ベルク公式情報", sourceUrl: "https://www.belc.jp/", icon: "fa-graduation-cap", gradient: "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)", imageColor: "#2980b9", viewCount: 1220 },
    { id: 465, title: "ベルクの物流センターが増強、関東北部への翌日配送体制を強化", category: "belc", categoryLabel: "ベルク", summary: "埼玉の基幹物流センターを増築し、関東北部4県の全店舗への翌日納品体制を強化。物流効率化による在庫コスト削減分をEDLP価格の維持・引き下げに活用する低コスト構造を徹底している。", source: "ベルク公式情報", sourceUrl: "https://www.belc.jp/", icon: "fa-warehouse", gradient: "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)", imageColor: "#2980b9", viewCount: 1310 },
    { id: 466, title: "ベルクがグルテンフリー・アレルギー対応食品の取り扱いを拡大", category: "belc", categoryLabel: "ベルク", summary: "食物アレルギーを持つ消費者向けの特定原材料不使用食品の品揃えをEDLP価格で充実させ、「アレルギー対応食品が安く買える」という希少価値を打ち出す。節約重視のアレルギー持ち消費者層を確実に取り込む。", source: "ベルク公式情報", sourceUrl: "https://www.belc.jp/", icon: "fa-shield-halved", gradient: "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)", imageColor: "#2980b9", viewCount: 1140 },
    { id: 467, title: "ベルクの弁当・惣菜が「量・価格・味」の三拍子で圧倒的な支持を獲得", category: "belc", categoryLabel: "ベルク", summary: "ボリューム重視のコスパ弁当がEDLP価格で提供され、工場・建設現場・学生などのヘビーユーザーに浸透。「満腹になれる価格帯」を軸にした惣菜戦略が他社との明確な差別化につながっている。", source: "ベルク公式情報", sourceUrl: "https://www.belc.jp/", icon: "fa-box-open", gradient: "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)", imageColor: "#2980b9", viewCount: 1900 },
    { id: 468, title: "ベルクが「価格保証制度」を導入、商圏内他店より高ければ差額分を返金", category: "belc", categoryLabel: "ベルク", summary: "商圏内の競合スーパーより高い価格の商品が見つかれば差額を返金するEDLP保証制度を一部店舗で試験導入。「ベルクより安い店はない」という信頼を制度として担保し、価格への絶対的信頼を構築。", source: "日経MJ", sourceUrl: "https://www.nikkei.com/mj/", icon: "fa-bolt", gradient: "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)", imageColor: "#2980b9", viewCount: 2040 },
    { id: 469, title: "ベルクが「ベルクフェスタ」を年4回開催、地域最大の食の祭典として定着", category: "belc", categoryLabel: "ベルク", summary: "年4回の大型販促イベント「ベルクフェスタ」が地域の食の祭典として認知され、開催週の来客数が通常の1.5倍を記録。地元農家・メーカーの出展も増え、地域食文化の発信拠点としての役割も担う。", source: "ベルク公式情報", sourceUrl: "https://www.belc.jp/", icon: "fa-star", gradient: "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)", imageColor: "#2980b9", viewCount: 1770 },
    { id: 470, title: "ベルクが次世代店舗フォーマットを開発、省エネ×EDLP×デジタルを統合", category: "belc", categoryLabel: "ベルク", summary: "太陽光発電・LED全面採用・AIエネルギー管理を組み合わせた次世代省エネ店舗の開発を進め、光熱費削減分を価格に還元するモデルを確立。SDGs対応と低価格維持の両立を体現する新業態として業界から注目。", source: "日経MJ", sourceUrl: "https://www.nikkei.com/mj/", icon: "fa-solar-panel", gradient: "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)", imageColor: "#2980b9", viewCount: 1850 }
];

// ========================================
// 指定した日付に対応するデイリー記事のプールインデックスを取得
// subIndex を指定することで1日に複数の異なる記事を取得可能
// ========================================
function getDailyArticleForDate(dateStr, subIndex = 0) {
    const baseDate = new Date(2026, 0, 1);
    const parts = dateStr.split('.');
    const targetDate = new Date(parts[0], parts[1] - 1, parts[2]);
    targetDate.setHours(0, 0, 0, 0);

    const elapsedDays = Math.floor((targetDate - baseDate) / (1000 * 60 * 60 * 24));
    // 日次ステップ=31、subIndexステップ=37（いずれも270と互いに素な素数）
    // → 同日7記事がプール全体に散らばり、特定カテゴリへの連続偏りを防止
    return Math.abs(elapsedDays * 31 + subIndex * 37) % dailyArticlePool.length;
}

// ========================================
// ユニークIDを日付から生成（衝突を避けるため95000番台を使用）
// ========================================
function getDailyUniqueId(dateStr, subIndex = 0) {
    const baseDate = new Date(2026, 0, 1);
    const parts = dateStr.split('.');
    const targetDate = new Date(parts[0], parts[1] - 1, parts[2]);
    targetDate.setHours(0, 0, 0, 0);
    const elapsedDays = Math.floor((targetDate - baseDate) / (1000 * 60 * 60 * 24));
    // 1日あたり最大7件（0-6）を想定してIDを割り振る（余裕を見て係数は10）
    return 95000 + Math.abs(elapsedDays) * 10 + subIndex;
}

// ========================================
// ===== 月間フードトレンドレポート機能 =====
// ========================================

// カテゴリ名ラベルマップ
const CATEGORY_LABELS = {
    sweets: 'スイーツ', retail: '小売・流通', gaishoku: '外食',
    nakashoku: '中食', health: '健康', saving: '節約',
    z_gen: 'Z世代', asian: '韓国・アジア', sns: 'SNSトレンド',
    hiroshima: '広島県', fukuoka: '福岡県', hokkaido: '北海道',
    beverage: '飲料',
    nikkei_mj: '日経MJ', lopia: 'ロピア', valor: 'バロー',
    every: 'エブリイ', maxvalu: 'マックスバリュ',
    yaoko: 'ヤオコー', belc: 'ベルク'
};

/**
 * 指定した「YYYY.MM」形式の月に属する newsData 記事を返す
 */
function getArticlesForMonth(yearMonth) {
    return newsData.filter(item => item.date && item.date.startsWith(yearMonth));
}

/**
 * 前月の "YYYY.MM" 文字列を返す
 */
function getPreviousMonthStr() {
    const now = new Date();
    const y = now.getMonth() === 0 ? now.getFullYear() - 1 : now.getFullYear();
    const m = now.getMonth() === 0 ? 12 : now.getMonth();
    return `${y}.${String(m).padStart(2, '0')}`;
}

/**
 * カテゴリ別件数を集計して降順配列で返す
 */
function aggregateCategories(articles) {
    const map = {};
    articles.forEach(a => {
        if (a.category) map[a.category] = (map[a.category] || 0) + 1;
    });
    return Object.entries(map)
        .sort((a, b) => b[1] - a[1])
        .map(([cat, count]) => ({ cat, label: CATEGORY_LABELS[cat] || cat, count }));
}

/**
 * モックAI要約を生成する（実データから定型文を組み合わせ）
 */
function generateMockSummary(articles, yearMonth) {
    if (articles.length === 0) {
        return '<p>この月のデータが見つかりませんでした。</p>';
    }

    const cats = aggregateCategories(articles);
    const top1 = cats[0] || { label: '不明', count: 0 };
    const top2 = cats[1] || { label: '不明', count: 0 };
    const topArticle = [...articles].sort((a, b) => (b.viewCount || 0) - (a.viewCount || 0))[0];

    // 平均閲覧数
    const avgView = Math.round(
        articles.reduce((s, a) => s + (a.viewCount || 0), 0) / articles.length
    );

    // 翌月のカテゴリ予測（2位のカテゴリを提案）
    const nextForecast = top2.label;

    const parts = yearMonth.split('.');
    const label = `${parts[0]}年${parseInt(parts[1])}月`;

    const points = [
        `📌 <strong>${label}は「${top1.label}」カテゴリが最多で、全体 ${articles.length}件中 <strong>${top1.count}件</strong> を占め、消費者の関心が集まりました。`,
        `🔍 「${top2.label}」も注目度が高く ${top2.count}件 の記事が掲載されました。価格意識と体験価値が融合した消費動向が見られます。`,
        `🏆 最も反響が大きかったのは「<strong>${topArticle ? topArticle.title : '（データなし）'}</strong>」で、閲覧数 ${topArticle ? topArticle.viewCount.toLocaleString() : '-'} を記録しました。`,
        `📈 平均閲覧数は <strong>${avgView.toLocaleString()}</strong> PV。来月は「${nextForecast}」関連の動向に引き続き注目が集まると予測されます。`
    ];

    return points.map(p => `<p class="report-point">${p}</p>`).join('');
}

/**
 * localStorage にレポートを保存する
 */
function saveMonthlyReport(yearMonth, summary, topArticles, cats, articleCount) {
    const KEY = 'ftm_monthly_reports';
    let reports = {};
    try { reports = JSON.parse(localStorage.getItem(KEY) || '{}'); } catch (e) { reports = {}; }
    reports[yearMonth] = {
        summary, topArticles, cats, articleCount,
        savedAt: new Date().toISOString()
    };
    localStorage.setItem(KEY, JSON.stringify(reports));
}

/**
 * localStorage から全レポートを取得する
 */
function loadMonthlyReports() {
    try {
        return JSON.parse(localStorage.getItem('ftm_monthly_reports') || '{}');
    } catch (e) { return {}; }
}

/**
 * モーダルを開き、指定月のレポートを描画する
 */
function showMonthlyReportModal(yearMonth) {
    const modal = document.getElementById('monthly-report-modal');
    if (!modal) return;

    const parts = yearMonth.split('.');
    const label = `${parts[0]}年${parseInt(parts[1])}月`;

    const subtitle = document.getElementById('modal-subtitle');
    if (subtitle) subtitle.textContent = `${label}のフードトレンド総集編`;

    // 対象月の記事取得
    const articles = getArticlesForMonth(yearMonth);

    // トップ3記事（閲覧数順）
    const topArticles = [...articles]
        .sort((a, b) => (b.viewCount || 0) - (a.viewCount || 0))
        .slice(0, 3);

    // カテゴリ集計
    const cats = aggregateCategories(articles);

    // モックAI要約
    const summary = generateMockSummary(articles, yearMonth);

    // KPIカード描画
    const kpiRow = document.getElementById('report-kpi-row');
    if (kpiRow) {
        const totalViews = articles.reduce((s, a) => s + (a.viewCount || 0), 0);
        const avgView = articles.length > 0 ? Math.round(totalViews / articles.length) : 0;
        kpiRow.innerHTML = `
            <div class="kpi-card">
                <i class="fa-solid fa-newspaper kpi-icon"></i>
                <div class="kpi-value">${articles.length}<span class="kpi-unit">件</span></div>
                <div class="kpi-label">掲載記事数</div>
            </div>
            <div class="kpi-card">
                <i class="fa-solid fa-eye kpi-icon"></i>
                <div class="kpi-value">${totalViews.toLocaleString()}<span class="kpi-unit">PV</span></div>
                <div class="kpi-label">合計閲覧数</div>
            </div>
            <div class="kpi-card">
                <i class="fa-solid fa-layer-group kpi-icon"></i>
                <div class="kpi-value">${cats.length}<span class="kpi-unit">種</span></div>
                <div class="kpi-label">カテゴリ数</div>
            </div>
            <div class="kpi-card">
                <i class="fa-solid fa-arrow-trend-up kpi-icon"></i>
                <div class="kpi-value">${avgView.toLocaleString()}<span class="kpi-unit">PV</span></div>
                <div class="kpi-label">平均閲覧数</div>
            </div>
        `;
    }

    // AI要約テキスト描画
    const summaryEl = document.getElementById('report-summary-text');
    if (summaryEl) {
        summaryEl.innerHTML = '';
        setTimeout(() => {
            summaryEl.innerHTML = summary;
            summaryEl.classList.add('fade-in');
        }, 150);
    }

    // TOP3記事描画
    const topList = document.getElementById('report-top-articles-list');
    if (topList) {
        if (topArticles.length === 0) {
            topList.innerHTML = '<p style="color:#aaa;">データがありません</p>';
        } else {
            topList.innerHTML = topArticles.map((a, i) => `
                <div class="report-top-item">
                    <div class="report-rank">${i === 0 ? '🥇' : i === 1 ? '🥈' : '🥉'}</div>
                    <div class="report-top-info">
                        <div class="report-top-category" style="background:${getCategoryColor(a.category)}">${a.categoryLabel || ''}</div>
                        <div class="report-top-title">${a.title}</div>
                        <div class="report-top-views"><i class="fa-solid fa-eye"></i> ${(a.viewCount || 0).toLocaleString()} PV</div>
                    </div>
                </div>
            `).join('');
        }
    }

    // カテゴリバー描画
    const catBars = document.getElementById('report-category-bars');
    if (catBars) {
        const max = cats[0] ? cats[0].count : 1;
        catBars.innerHTML = cats.slice(0, 8).map(c => `
            <div class="cat-bar-row">
                <span class="cat-bar-label">${c.label}</span>
                <div class="cat-bar-track">
                    <div class="cat-bar-fill" style="width:${Math.round(c.count / max * 100)}%; background:${getCategoryColor(c.cat)};"></div>
                </div>
                <span class="cat-bar-count">${c.count}件</span>
            </div>
        `).join('');
    }

    // 履歴ボタン描画
    renderHistoryButtons(yearMonth);

    // LocalStorage に保存
    saveMonthlyReport(yearMonth, summary, topArticles.map(a => a.id), cats, articles.length);

    // モーダルを表示
    modal.classList.add('visible');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

/**
 * 過去レポート履歴ボタンを描画する
 */
function renderHistoryButtons(activeMonth) {
    const reports = loadMonthlyReports();
    const historySection = document.getElementById('modal-history-section');
    const historyBtns = document.getElementById('modal-history-btns');
    if (!historyBtns) return;

    const months = Object.keys(reports).sort().reverse();
    if (months.length <= 1) {
        if (historySection) historySection.style.display = 'none';
        return;
    }
    if (historySection) historySection.style.display = 'flex';

    historyBtns.innerHTML = months.map(m => {
        const p = m.split('.');
        const lbl = `${parseInt(p[1])}月`;
        const isActive = m === activeMonth;
        return `<button class="history-btn ${isActive ? 'active' : ''}" data-month="${m}">${lbl}</button>`;
    }).join('');

    historyBtns.querySelectorAll('.history-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            showMonthlyReportModal(btn.dataset.month);
        });
    });
}

/**
 * モーダルを閉じる
 */
function closeMonthlyReportModal() {
    const modal = document.getElementById('monthly-report-modal');
    if (!modal) return;
    modal.classList.remove('visible');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

/**
 * 月初に前月レポートを自動で表示するチェック（月が変わった最初の起動時のみ）
 */
function checkMonthlyReport() {
    const now = new Date();
    const dayOfMonth = now.getDate();
    // 月初3日以内のみ自動表示
    if (dayOfMonth > 3) return;

    const prevMonth = getPreviousMonthStr();
    const KEY_SHOWN = 'ftm_monthly_report_shown';
    const lastShown = localStorage.getItem(KEY_SHOWN);
    if (lastShown === prevMonth) return; // 今月分はもう表示済み

    // 前月にデータがあれば表示
    const prevArticles = getArticlesForMonth(prevMonth);
    if (prevArticles.length === 0) return;

    setTimeout(() => {
        showMonthlyReportModal(prevMonth);
        localStorage.setItem(KEY_SHOWN, prevMonth);
    }, 2000);
}

/**
 * 月間レポートのナビとモーダルイベントを初期化する
 */
function setupMonthlyReport() {
    // 「月間レポート」ナビリンク
    const navBtn = document.getElementById('nav-monthly-report');
    if (navBtn) {
        navBtn.addEventListener('click', e => {
            e.preventDefault();
            const prevMonth = getPreviousMonthStr();
            const prevArticles = getArticlesForMonth(prevMonth);
            const now = new Date();
            const curYM = `${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, '0')}`;
            showMonthlyReportModal(prevArticles.length > 0 ? prevMonth : curYM);

            // モバイルメニューを閉じる
            const nav = document.querySelector('.main-nav');
            const toggle = document.getElementById('mobile-menu-toggle');
            if (nav && nav.classList.contains('active')) {
                nav.classList.remove('active');
                if (toggle) toggle.querySelector('i').classList.replace('fa-xmark', 'fa-bars');
            }
        });
    }

    // モーダルを閉じるボタン
    ['modal-close', 'modal-close-footer'].forEach(id => {
        const btn = document.getElementById(id);
        if (btn) btn.addEventListener('click', closeMonthlyReportModal);
    });

    // オーバーレイクリックで閉じる
    const modal = document.getElementById('monthly-report-modal');
    if (modal) {
        modal.addEventListener('click', e => {
            if (e.target === modal) closeMonthlyReportModal();
        });
    }

    // ESCキーで閉じる
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeMonthlyReportModal();
    });
}

// ========================================
// デイリー記事をnewsDataへ追加（蓄積型）
// localStorage に履歴配列を保存し最大30日分を維持する
// 1日7件追加されるようにアップデート
// ========================================
function injectDailyArticle() {
    const STORAGE_KEY = 'food_trend_daily_history_v2';
    const MAX_DAYS = 30;
    const ITEMS_PER_DAY = 7; // 1日あたりの追加件数
    const todayStr = getRelativeDate(0);

    // ── 旧形式キーからのマイグレーション ──
    const legacyDate = localStorage.getItem('daily_article_injected_date');
    const legacyId = localStorage.getItem('daily_article_injected_id');
    if (legacyDate && legacyId && !localStorage.getItem(STORAGE_KEY)) {
        const legacyPoolIndex = getDailyArticleForDate(legacyDate, 0);
        const migratedHistory = [{
            date: legacyDate,
            uniqueId: Number(legacyId),
            poolIndex: legacyPoolIndex
        }];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(migratedHistory));
    }
    localStorage.removeItem('daily_article_injected_date');
    localStorage.removeItem('daily_article_injected_id');

    // ── 履歴の読み込み ──
    let history = [];
    try {
        history = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    } catch (e) {
        history = [];
    }

    // ── 過去14日分をチェックして、未追加なら追加 ──
    let isUpdated = false;
    for (let i = 14; i >= 0; i--) {
        const dateStr = getRelativeDate(-i);
        const dailyEntries = history.filter(entry => entry.date === dateStr);

        if (dailyEntries.length < ITEMS_PER_DAY) {
            for (let sub = dailyEntries.length; sub < ITEMS_PER_DAY; sub++) {
                const poolIndex = getDailyArticleForDate(dateStr, sub);
                const uniqueId = getDailyUniqueId(dateStr, sub);

                if (!history.find(entry => entry.uniqueId === uniqueId)) {
                    history.push({ date: dateStr, uniqueId, poolIndex });
                    isUpdated = true;
                }
            }
        }
    }

    if (isUpdated) {
        history.sort((a, b) => {
            if (a.date !== b.date) return a.date.localeCompare(b.date);
            return a.uniqueId - b.uniqueId;
        });

        const maxEntries = MAX_DAYS * ITEMS_PER_DAY;
        if (history.length > maxEntries) {
            history = history.slice(-maxEntries);
        }
        localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
    }

    // ── 履歴の全エントリを newsData へ注入（同タイトルは最新日付のもののみ）──
    const sorted = [...history].sort((a, b) => b.date.localeCompare(a.date));
    const existingTitles = new Set(newsData.map(d => d.title.trim()));
    const injectedIds = new Set(newsData.map(d => d.id));

    sorted.forEach(entry => {
        if (injectedIds.has(entry.uniqueId)) return;

        const template = dailyArticlePool[entry.poolIndex];
        if (!template) return;
        if (existingTitles.has(template.title.trim())) return;

        const article = { ...template, id: entry.uniqueId, date: entry.date };
        newsData.push(article);
        injectedIds.add(entry.uniqueId);
        existingTitles.add(template.title.trim());
    });
}

