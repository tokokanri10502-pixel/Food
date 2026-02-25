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
        id: 1,
        title: "「飲むわらび餅」が進化？ 次世代テクスチャードリンクの台頭",
        category: "beverage",
        categoryLabel: "飲料",
        date: getRelativeDate(0), // 今日
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
        date: getRelativeDate(-1), // 昨日
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
        date: getRelativeDate(-2),
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
        date: getRelativeDate(-2),
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
        date: getRelativeDate(-3),
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
        date: getRelativeDate(-3),
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
        date: getRelativeDate(-3),
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
        date: getRelativeDate(-4),
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
        date: getRelativeDate(-4),
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
        date: getRelativeDate(-5),
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
        date: getRelativeDate(-5),
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
        date: getRelativeDate(-6),
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
        date: getRelativeDate(-6),
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
        date: getRelativeDate(-1),
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
        date: getRelativeDate(-2),
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
        date: getRelativeDate(-1),
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
        date: getRelativeDate(0),
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
        date: getRelativeDate(-2),
        summary: "ブランド苺「あまおう」を贅沢に使用した期間限定パフェがSNSで拡散。一皿3000円を超える『ご褒美スイーツ』市場の底堅さを見せている。",
        source: "スイーツ・タイムズ",
        sourceUrl: "https://www.sweets-times.jp/",
        icon: "fa-strawberry",
        gradient: "linear-gradient(to top, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)",
        imageColor: "#ff0000",
        viewCount: 1400
    },
    // --- アーカイブ用ダミーデータ ---
    {
        id: 101,
        title: "冬の定番「おでん」に異変？ トッピングにアボカドが流行した兆し",
        category: "gaishoku",
        categoryLabel: "外食",
        date: getRelativeDate(-10), // 10日前（アーカイブ）
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
        date: getRelativeDate(-20), // 20日前（アーカイブ）
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
        date: getRelativeDate(-50), // 約1月1日
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
        date: getRelativeDate(-45),
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
        date: getRelativeDate(-40),
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
        date: getRelativeDate(-35),
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
        date: getRelativeDate(-30),
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
        date: getRelativeDate(-25),
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
        date: getRelativeDate(-15),
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
        date: getRelativeDate(-12),
        summary: "海の環境変化を受け、安定供給を目指す新プロジェクト。寄生虫リスクを抑えた『当たる心配のない牡蠣』として輸出市場も視野に。",
        source: "瀬戸内経済Web",
        sourceUrl: "#",
        icon: "fa-water",
        gradient: "linear-gradient(to right, #48c6ef 0%, #6f86d6 100%)",
        viewCount: 660
    }
];

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

    return diffDays > 7;
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

// ランキング表示（トップ3）
function renderRanking() {
    // viewCountがあるものを抽出し、かつアーカイブ（7日より前）でないものを対象に、多い順にソート。上位3件を取得
    const rankingData = newsData
        .filter(item => item.viewCount && !isArchiveDate(item.date))
        .sort((a, b) => b.viewCount - a.viewCount)
        .slice(0, 3);

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

    renderNews(filteredData);

    // 検索結果がない場合の表示
    if (filteredData.length === 0) {
        newsGrid.innerHTML = '<p style="text-align:center; width:100%; color:#666;">該当する記事が見つかりませんでした。</p>';
    }
}

// ========================================
// コラムデータ（固定4件 ＋ ストックの中から日付で2件選択）
// ========================================
const staticColumns = [
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
        headerColor: "linear-gradient(to right, #f6d365, #fda085)"
    },
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
        headerColor: "linear-gradient(to right, #43e97b, #38f9d7)"
    },
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
        headerColor: "linear-gradient(to right, #a18cd1, #fbc2eb)"
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
        headerColor: "linear-gradient(to right, #0ba360, #3cba92)"
    }
];

const rollingColumnsStock = [
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
        headerColor: "linear-gradient(to right, #f093fb, #f5576c)"
    },
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
        headerColor: "linear-gradient(135deg, #f5f7fa, #c3cfe2)"
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
        headerColor: "linear-gradient(to right, #acb6e5, #86fde8)"
    },
    {
        id: 8,
        tag: "広島・食文化",
        title: "新サッカースタジアムと連動する「広島ナイトグルメ」の商機",
        body: `2024年開業の新スタジアムを核に、広島の夜の街が変わりつつある。試合観戦後の「ハシゴ酒」需要をターゲットにした新業態が続々誕生。

お好み焼きだけではない、地産地消のバルや、瀬戸内の魚介を洋風にアレンジしたビストロなど。スポーツと食を掛け合わせた新しい都市回遊モデル。地域の飲食店がいかにしてこの巨大な波を自覚し、活かしていくべきか。`,
        author: { name: "広島 太郎", title: "地域経済アナリスト", initials: "広", color: "#e74c3c" },
        readTime: 7,
        headerColor: "linear-gradient(to right, #ff5f6d, #ffc371)"
    }
];

// ========================================
// コラムカードのレンダリング
// ========================================
function renderColumns() {
    const columnGrid = document.getElementById('column-grid');
    if (!columnGrid) return;

    columnGrid.innerHTML = '';

    // 日付に基づいてローテーション枠を選択（3日周期 = 259,200,000ミリ秒）
    const rotationPeriod = 3 * 24 * 60 * 60 * 1000;
    const now = Date.now();
    const sequenceIndex = Math.floor(now / rotationPeriod);

    // ストックから2つ選ぶための計算 (簡単な剰余計算でインデックスを決定)
    const stockSize = rollingColumnsStock.length;
    const startIndex = (sequenceIndex * 2) % stockSize;

    const pickedRollingColumns = [];
    pickedRollingColumns.push(rollingColumnsStock[startIndex]);
    pickedRollingColumns.push(rollingColumnsStock[(startIndex + 1) % stockSize]);

    // 固定4件 + 動的2件を結合
    const displayColumns = [...staticColumns, ...pickedRollingColumns];

    displayColumns.forEach(item => {
        const card = document.createElement('article');
        card.className = 'column-card';

        // 改行を<br>に変換して表示
        const formattedBody = item.body.replace(/\n/g, '<br>');

        card.innerHTML = `
            <div class="column-card-header" style="background: ${item.headerColor};"></div>
            <div class="column-card-body">
                <span class="column-tag"># ${item.tag}</span>
                <h3>${item.title}</h3>
                <p class="column-text-content">${formattedBody}</p>
                
                <div class="column-action">
                    <button class="btn-column-toggle">
                        <span class="btn-label">全文を詳しく読む</span> <i class="fa-solid fa-chevron-down"></i>
                    </button>
                </div>

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
                // 閉じたときにカードの頭までスクロール（UX向上）
                card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });

        columnGrid.appendChild(card);
    });
}


