// ── Shared Data for Middle-earth Map & Timeline ──────────────────────

// ── Map Dimensions ──────────────────────────────
const IMG_W = 7680;
const IMG_H = 4386;

// ── Category Colors ─────────────────────────────
const COLORS = {
    silmarillion: '#9b59b6',
    hobbit:       '#5b8fb9',
    fellowship:   '#c9a435',
    towers:       '#b85c38',
    king:         '#6a9f5b',
    appendix:     '#7f8c8d'
};

const CATEGORY_LABELS = {
    silmarillion: 'The Silmarillion',
    hobbit:       'The Hobbit',
    fellowship:   'The Fellowship of the Ring',
    towers:       'The Two Towers',
    king:         'The Return of the King',
    appendix:     'Appendices'
};

const CATEGORY_ICONS = {
    silmarillion: '\u2756',
    hobbit:       '\u2302',
    fellowship:   '\u2727',
    towers:       '\u2694',
    king:         '\u2655',
    appendix:     '\u2637'
};

// ── SortKey system ──────────────────────────────
// FA year 1-590 → sortKey = year
// SA year 1-3441 → sortKey = 590 + year
// TA year 1-3021 → sortKey = 4031 + year
// Sub-year precision: add month/100 + day/10000

// ── Event Data ──────────────────────────────────
const events = [
    // ── The Silmarillion ──
    {
        id: "cuivienen",
        name: "Cuivi\u00e9nen\u2014 精靈的覺醒",
        category: 'silmarillion',
        era: "FA", year: 1, sortKey: 0.5,
        px: 7091, py: 1327,
        description: "Cuivi\u00e9nen，即覺醒之水，是中土世界遠東赫卡內海沿岸的一個海灣。早在太陽和月亮升起之前，第一批精靈就在這裡在星光下甦醒。維拉發現了他們，並召喚他們踏上前往維林諾的偉大旅程，儘管有些人拒絕了召喚並留下來，成為阿瓦里，不甘者。",
        characters: "The first Elves, Orom\u00eb"
    },
    {
        id: "khazad-dum-awakening",
        name: "Khazad-d\u00fbm \u2014 杜林的覺醒",
        category: 'silmarillion',
        era: "FA", year: 1, sortKey: 1,
        px: 4000, py: 1490,
        description: "不死者都林，矮人七位父親中最年長的，在岡達巴德山醒來，向南漫步到鏡湖。他在那裡建立了矮人最偉大的宅邸卡扎德杜夫姆 (Khazad-dú00fbm)，這座宅邸經久不衰，直到炎魔在其深處被喚醒。",
        characters: "Durin the Deathless"
    },
    {
        id: "ered-luin",
        name: "埃雷德魯因 &u2014 諾格羅德與貝烈戈斯特",
        category: 'silmarillion',
        era: "FA", year: 50, sortKey: 50,
        px: 2192, py: 824,
        description: "第一紀元，藍山是偉大的矮人城市諾格羅德和貝烈戈斯特的所在地。諾格羅德的矮人製造了瑙格拉姆號，後來又洗劫了多瑞亞斯以奪回它。貝烈瑞安德毀滅後，許多矮人向東遷移到卡扎德-杜夫姆。",
        characters: "Durin's Folk, the Firebeards, the Broadbeams"
    },
    {
        id: "forlindon",
        name: "福林登 &u2014 北林登",
        category: 'silmarillion',
        era: "SA", year: 1, sortKey: 590.5,
        px: 1872, py: 1008,
        description: "福林登（Forlindon）或北林登（North Lindon）是月灣以北、藍山以西的土地。憤怒之戰後，古代貝爾蘭的倖存遺跡淹沒了這片大陸的大部分地區，它是第二紀元吉爾加拉德王國的一部分。到了第三紀元，該地區人煙稀少，精靈居民慢慢地前往不朽之地。",
        characters: "Gil-galad, C\u00edrdan"
    },
    {
        id: "grey-havens",
        name: "灰色天堂 &u2014 米斯隆德",
        category: 'silmarillion',
        era: "SA", year: 1, sortKey: 591,
        px: 2266, py: 1150,
        description: "憤怒之戰摧毀了貝烈瑞安德後，造船者庫丹建立了灰港，成為精靈離開中土前往不死之地的主要港口。第三紀元末期，甘道夫、佛羅多、比爾博、凱蘭崔爾和埃爾隆德就是從這裡起航的。",
        characters: "C\u00edrdan, Gil-galad, Galadriel"
    },
    {
        id: "barad-dur-built",
        name: "黑暗之塔",
        category: 'silmarillion',
        era: "SA", year: 1000, sortKey: 1590,
        px: 5613, py: 2466,
        description: "SA 1000 左右，索倫開始利用至尊戒的力量在魔多建造他的堡壘。黑暗塔被最後聯盟圍攻並推倒，但由於它是用至尊戒的力量建造的，因此在至尊戒還存在的情況下，它無法被完全摧毀。索倫在第三紀元返回魔多時重建了它。",
        characters: "Sauron, the Nazg\u00fbl"
    },
    {
        id: "eregion-rings",
        name: "Eregion \u2014 權力指環",
        category: 'silmarillion',
        era: "SA", year: 1500, sortKey: 2090,
        px: 3885, py: 1520,
        description: "在莫瑞亞西門附近的冬青之地，凱勒布林博和格懷斯-伊-姆埃丹人被索倫以「禮物之王」安納塔的美麗偽裝所欺騙。他們一起鑄造了力量之戒。當索倫鑄造至尊魔戒時，精靈們察覺到了他的背叛。索倫摧毀了埃瑞吉安並殺死了凱勒布理鵬。",
        characters: "Celebrimbor, Sauron (as Annatar), Elrond"
    },
    {
        id: "one-ring-forged",
        name: "末日火山 &u2014 一枚戒指的鍛造",
        category: 'silmarillion',
        era: "SA", year: 1600, sortKey: 2190,
        px: 5440, py: 2510,
        description: "在奧洛杜因的火焰中，索倫鍛造了一枚戒指來控制所有其他力量戒指：「一枚戒指可以統治他們所有人，一枚戒指可以找到他們，一枚戒指可以帶來他們所有人，並在黑暗中束縛他們。」當他戴上它的那一刻，精靈戒指持有者就意識到了他的目的。",
        characters: "Sauron"
    },
    {
        id: "umbar-haven",
        name: "烏姆巴爾·海盜天堂",
        category: 'silmarillion',
        era: "SA", year: 2280, sortKey: 2870,
        px: 4204, py: 3995,
        description: "烏姆巴爾是遙遠南方的一個偉大的天然港口，最初由第二紀元的努法門人建立為堡壘。滅亡後，黑努法門人將其視為敵對剛鐸的權力基地。它成為海盜的據點，幾個世紀以來，海盜一直在襲擊剛鐸的海岸。他們的艦隊在魔戒之戰期間向北航行，卻在佩拉吉爾被阿拉貢俘虜。",
        characters: "The Corsairs, Castamir, Aragorn"
    },
    {
        id: "numenor-downfall",
        name: "梅內爾塔瑪《諾法門諾的衰落》",
        category: 'silmarillion',
        era: "SA", year: 3319, sortKey: 3909,
        px: 237, py: 3780,
        description: "梅內爾塔瑪（Meneltarma），天之柱，是恩法門諾中心的聖山。當黃金國王阿爾-法拉茲率領一支偉大的無敵艦隊進攻維林諾時，埃魯·伊爾法瓦塔打破並改變了世界。恩法門諾被大海吞沒，不朽之地也永遠從世界的圈子中消失了。只有埃蘭迪爾和他的兒子們帶領的忠實者逃亡並建立了阿諾和剛鐸王國。",
        characters: "Ar-Pharaz\u00f4n, Sauron, Elendil, Isildur, An\u00e1rion"
    },
    {
        id: "last-alliance",
        name: "達戈拉德\u2014最後的聯盟",
        category: 'silmarillion',
        era: "SA", year: 3434, sortKey: 4024,
        px: 5100, py: 2220,
        description: "由吉爾加拉德和埃蘭迪爾領導的精靈與人類最後聯盟在黑門前的平原上進行了第二紀元最偉大的戰鬥。在圍攻巴拉德七年後，他們推翻了索倫，但吉爾加拉德和埃蘭迪爾都倒下了。埃熙爾杜從索倫手中割下了至尊戒。",
        characters: "Gil-galad, Elendil, Isildur, An\u00e1rion, Elrond, Sauron"
    },
    {
        id: "gladden-fields",
        name: "格拉登領域 &u2014 格拉登領域的災難",
        category: 'silmarillion',
        era: "TA", year: 2, sortKey: 4033,
        px: 4400, py: 1360,
        description: "擊敗索倫兩年後，伊熙爾杜和他的連隊在沿著安都因河向北進軍時遭到半獸人伏擊。埃熙爾杜戴上至尊魔戒逃跑，但它在河中從他的手指上滑落，他被獸人的箭殺死。至尊戒已失去近 2,500 年。",
        characters: "Isildur, Ohtar"
    },
    {
        id: "dol-guldur-shadow",
        name: "多古爾杜 &u2014 黑森林上空的陰影",
        category: 'silmarillion',
        era: "TA", year: 1000, sortKey: 5031,
        px: 4672, py: 1578,
        description: "TA 1000 年左右，索倫在黑森林南部秘密避難，建造了多古爾都堡壘，並將自己偽裝成「死靈法師」。他的影子腐蝕了綠林，使它變得黑暗。他從這裡繁衍邪惡生物並尋找至尊戒，直到 TA 2941 年白色議會將他驅逐。",
        characters: "Sauron, Gandalf, Galadriel, Saruman"
    },

    // ── Appendices ──
    {
        id: "himling",
        name: "希姆林\u2014貝烈瑞安德的遺跡",
        category: 'appendix',
        era: "FA", year: 1, sortKey: 1.01,
        px: 1202, py: 752,
        description: "希姆林是西北海域的一個小島，是希姆林大山僅存的山峰。在第一紀元，弗巴諾之子梅斯羅斯加固了希姆林，作為對抗魔苟斯的防線支柱。當貝烈瑞安德在憤怒之戰中被摧毀並被淹沒時，山頂依然屹立在海浪之上。到了第三紀元，它已成為一座荒蕪、無人居住的島嶼——一座沉默的紀念碑，記錄著早已消失在海底的戰爭和王國。",
        characters: "Maedhros, F\u00ebanor"
    },
    {
        id: "mountains-east",
        name: "Mountains of the East \u2014 The Orocarni",
        category: 'appendix',
        era: "FA", year: 1, sortKey: 1.02,
        px: 7252, py: 2538,
        description: "奧羅卡尼（Orocarni），或稱紅山，在最早的時代形成了中土世界的東部邊界。在托爾金的宇宙觀中，七個矮人氏族中的四個——鐵拳氏族、硬須氏族、黑鎖氏族和石足氏族——在這些山脈中或附近的地點醒來。藍巫師阿拉塔和帕蘭多被派往東方，可能在這些遙遠土地上的人民中工作以對抗索倫的影響力。",
        characters: "Alatar, Pallando (Blue Wizards)"
    },
    {
        id: "northern-waste",
        name: "北方廢棄物 &u2014 福羅德韋斯",
        category: 'appendix',
        era: "FA", year: 1, sortKey: 1.03,
        px: 4212, py: 205,
        description: "福羅德懷斯廣闊的冰凍荒地橫跨整個中土世界的極北地區。在第一紀元，它位於魔苟斯安格班要塞的陰影下，在魔苟斯戰敗後很長一段時間裡，一種不自然的寒冷依然揮之不去。很少有人敢進入這些土地——只有洛索斯（福羅切爾的雪人）在其西部邊緣倖存下來。巨龍在其南部邊境的枯萎荒地中繁衍生息，而魔苟斯鐵山的殘餘物可能在最北邊依然存在。",
        characters: "The Lossoth, Morgoth"
    },
    {
        id: "fanuidhol",
        name: "Fanuidhol \u2014 雲頭",
        category: 'appendix',
        era: "FA", year: 1, sortKey: 1.04,
        px: 4023, py: 1430,
        description: "Fanuidhol，Cloudyhead（庫茲杜爾語中的Bundushath）是莫里亞三座山峰中最東端的一座，從南面俯瞰迪姆瑞爾河谷（Dimrill Dale）和鏡子米爾（Mirrormere）。這三座山脈與北邊的卡拉德拉斯山脈和西邊的凱勒迪爾山脈一起，構成了古代矮人王國 Khazad-d\u00fbm 之上的王冠。",
        characters: ""
    },
    {
        id: "eryn-vorn",
        name: "艾琳沃恩《黑暗森林》",
        category: 'appendix',
        era: "FA", year: 1, sortKey: 1.05,
        px: 2742, py: 1929,
        description: "一片茂密、黑暗的古老森林岬角，伸入布蘭迪河口以南的大海。埃林·沃恩 (Eryn Vorn) 是曾經覆蓋整個埃利阿多的廣闊原始林地的最後遺跡之一。當努法門人在第二紀元為了造船而砍伐大片森林時，對新來者懷有敵意的前法門人原住民就撤退到了這片黑暗的樹林中，獨自一人。在接下來的所有時代裡，它一直處於荒野狀態，無人居住。",
        characters: ""
    },
    {
        id: "lond-daer",
        name: "隆德達爾“努法門人的避風港”",
        category: 'appendix',
        era: "SA", year: 800, sortKey: 1390,
        px: 3043, py: 2039,
        description: "隆達爾埃內德（Lond Daer Enedh），即偉大的中洲港口，是中土世界第一個主要的努法門港口。它由塔爾-阿勒達里安在南緯 800 公尺左右在 Gwathl（灰洪水）河口建立，當時名為 Vinyalond，是一個造船港口，大規模地消耗了 Enedwaith 和 Minhiriath 的廣闊森林。這種森林砍伐引起了原住民的持久仇恨，他們撤退到像埃林·沃恩這樣的避難所。這個避難所在第二紀元仍然很重要，但在諾法門諾衰落後衰落，並在第三紀元成為廢墟。",
        characters: "Tar-Aldarion"
    },
    {
        id: "andrast",
        name: "安德拉斯特 &u2014 長角",
        category: 'appendix',
        era: "FA", year: 1, sortKey: 1.06,
        px: 2770, py: 2828,
        description: "安德拉斯特，也稱為拉斯莫蒂爾（暗海角），是一個無人居住的漫長海角，向西伸入洛汗峽以南的大海，形成貝爾法拉斯灣的北臂。Dr\u00faedain（Woses）曾經居住在其森林中，但他們遭到 N\u00famen\u00f3reans 的追捕和迫害，最終被趕出或躲藏起來。這座海角荒無人煙，避開了剛鐸的海岸防禦工事，燈塔也從未延伸到這裡，水手們也避開了它的海岸。",
        characters: ""
    },
    {
        id: "edhellond",
        name: "艾德林德 &u2014 精靈天堂",
        category: 'appendix',
        era: "FA", year: 1, sortKey: 1.07,
        px: 3787, py: 2803,
        description: "艾德希隆德（Edhelnd），精靈的避風港，是一個隱藏在貝爾法拉斯多爾阿姆羅斯附近環河河口的精靈小港口。它是由逃離貝烈瑞安德廢墟的辛達林精靈建立的，是中土世界南部最後幾個精靈徘徊的地方之一，幾個世紀以來精靈們靜靜地建造船隻並向西航行。當呂瑞恩國王阿姆羅斯和他心愛的尼姆洛德爾試圖一起到達艾希隆德並航行到西方時，寧洛德爾在白色山脈中迷路了。阿姆羅斯抵達後發現最後一艘船在暴風雨中拋錨。他跳入海中游上岸，但被沖走淹死，附近的多爾阿姆羅斯因此得名。",
        characters: "Amroth, Nimrodel"
    },
    {
        id: "tol-fuin",
        name: "Toll Fine \Uto14 達斯尼翁的殘餘",
        category: 'appendix',
        era: "FA", year: 460, sortKey: 460,
        px: 747, py: 874,
        description: "托爾富因 (Tol Fuin) 是遙遠西北海域的一座島嶼，是多松尼安 (Taur-nu-Fuin) 倖存的高地。第一紀元，這片森林高原被安格羅德和艾格諾佔領，對抗魔苟斯，直到達戈爾·布拉戈拉赫為止。後來，這裡變成了鬧鬼的荒野，巴拉希爾和他的不法之徒藏身於此，他的兒子貝倫也曾在這裡獨自徘徊，然後向南逃往多瑞亞斯，並與盧法西安發生了命運般的邂逅。當貝烈瑞安德被淹沒時，只有這座山峰屹立在海浪之上。",
        characters: "Barahir, Beren, Angrod, Aegnor"
    },
    {
        id: "tol-morwen",
        name: "托爾·莫文\u2014 墓碑島",
        category: 'appendix',
        era: "FA", year: 500, sortKey: 500,
        px: 334, py: 1094,
        description: "貝烈瑞安德島上最小的遺跡。在第一紀元，圖法林·圖倫拔和他的母親莫玟被一起埋葬在納國斯隆德廢墟大廳附近死者墳堆上的一塊大石頭下。當貝烈瑞安德在憤怒之戰中被淹沒時，墓碑孤零零地矗立在海浪之上——這座島嶼上刻有圖法林和尼諾爾的名字，這是對胡法林不幸的孩子們的最後見證。",
        characters: "T\u00farin Turambar, Morwen, Nienor, H\u00farin"
    },
    {
        id: "sea-rhun",
        name: "東方之海",
        category: 'appendix',
        era: "SA", year: 1, sortKey: 591.01,
        px: 6164, py: 1684,
        description: "魯布海是中土遠東的一片廣闊內海，是歷代以來多次入侵剛鐸的東方民族的中心地帶。人们对它之外的土地知之甚少。藍巫師阿拉塔和帕蘭多被送往東方，據信已經跨越了大海，但他們的命運仍然未知。",
        characters: "The Easterlings, Alatar, Pallando"
    },
    {
        id: "sea-nurnen",
        name: "努法嫩海和奴隸之地",
        category: 'appendix',
        era: "SA", year: 1000, sortKey: 1590.01,
        px: 5836, py: 2972,
        description: "魔多南部的內陸海，由從埃斐爾杜法斯山脈和阿什山脈流下的河流供給水源。努恩周圍肥沃的土地由大批奴隸照料，他們種植糧食來餵養索倫的戰爭機器。巴拉德滅亡後，埃萊薩國王釋放了奴隸，並將努恩的土地給他們。",
        characters: "Aragorn (Elessar), the slaves of Nurn"
    },
    {
        id: "annuminas",
        name: "安\u00faminas\u2014阿諾首府",
        category: 'appendix',
        era: "SA", year: 3320, sortKey: 3910,
        px: 2765, py: 919,
        description: "恩法門諾滅亡後，埃蘭迪爾在埃文丁湖畔建造了安法米納斯，成為北方阿諾王國的第一個首都。隨著杜凡丹人的衰落，這座城市被遺棄並陷入廢墟。魔戒之戰後，阿拉貢將其恢復為他北方的權力所在地。",
        characters: "Elendil, Aragorn"
    },
    {
        id: "tower-hills",
        name: "塔山和埃洛斯提瑞恩石",
        category: 'appendix',
        era: "SA", year: 3320, sortKey: 3910.01,
        px: 2386, py: 1159,
        description: "塔山 (Emyn Beraid) 坐落在夏爾和灰港之間，頂部是埃洛斯提瑞安高大的白色塔樓。它安置著送給北方王國的三塊帕蘭特石之一，但與其他石頭不同的是，這塊石頭只面向西方，面向大海對面的不朽之地。它由林頓精靈保管並登上了來自灰港的最後一艘船。",
        characters: "Elendil, Gil-galad"
    },
    {
        id: "white-mountains",
        name: "白山和埃雷德尼姆萊斯",
        category: 'appendix',
        era: "SA", year: 3320, sortKey: 3910.02,
        px: 4253, py: 2607,
        description: "洛汗和剛鐸之間東西走向的大山脈。其山峰下方是亡者之路，沿著其北麓矗立著伊多拉斯 (Edoras)、鄧哈羅 (Dunharrow) 和聖盔谷 (Helm's Deep)。它的東端俯瞰米那斯提力斯和佩蘭諾平原。剛鐸的山頂點燃了信標，號召洛汗參戰。",
        characters: "Th\u00e9oden, Aragorn"
    },
    {
        id: "brown-lands",
        name: "布朗土地和恩特維夫花園",
        category: 'appendix',
        era: "SA", year: 3429, sortKey: 4019,
        px: 4975, py: 1915,
        description: "布朗土地曾經是安都因河以東的一片肥沃地區，由恩特夫人照料，但在最後聯盟戰爭期間被索倫燒焦和摧毀。恩特夫人失蹤了，再也沒有被發現──她們的離去是樹須巨大悲傷的根源。到了第三紀元，這片土地已是一片貧瘠、沒有樹木的荒地。遠徵隊沿著大河順流而下，經過了它的西邊。",
        characters: "Treebeard, the Entwives"
    },
    {
        id: "emyn-nu-fuin",
        name: "Hymn-nu-Fuin \u2014 黑森林山脈",
        category: 'appendix',
        era: "TA", year: 1000, sortKey: 5031.01,
        px: 4996, py: 1235,
        description: "Emyn-nu-Fuin（意為「夜色山脈」）是黑森林南部的一系列森林覆蓋的山丘。當索倫在多古爾都建立據點時，陰影蔓延到森林中，將大綠林變成了黑森林。這些山脈籠罩在死靈法師影響的黑暗之中，成為旅行者們迴避的危險南部地區的一部分。舊林路曾經經過這裡附近，但隨著森林變得越來越危險而廢棄了。",
        characters: "Sauron (as the Necromancer), Thranduil"
    },
    {
        id: "carn-dum",
        name: "Carn D\u00fbm \u2014 Fortress of Angmar",
        category: 'appendix',
        era: "TA", year: 1300, sortKey: 5331,
        px: 3374, py: 357,
        description: "卡恩杜凡的鋼鐵要塞是安格瑪的首都，安格瑪是巫王在 TA 1300 左右建立的王國，其唯一目的是消滅北方的杜凡丹人。安格瑪與阿諾的繼承者王國發動了近 700 年的戰爭，最終摧毀了這三個王國。",
        characters: "The Witch-king"
    },
    {
        id: "argonath",
        name: "阿戈納斯\u2014王之柱",
        category: 'appendix',
        era: "TA", year: 1340, sortKey: 5371,
        px: 4511, py: 2105,
        description: "安都因河兩側矗立著兩座巨大的埃熙爾杜和安里翁石像，他們舉起左手，向剛鐸的敵人發出警告。阿戈納斯由魯門達西爾二世建造，標誌著剛鐸的北部邊界。遠徵隊從洛瑟爾瑞恩向南航行，從他們中間經過。",
        characters: "Isildur, An\u00e1rion, R\u00f3mendacil II"
    },
    {
        id: "shire-homeland",
        name: "The Shire \u2014 Homeland of the Hobbits",
        category: 'appendix',
        era: "TA", year: 1601, sortKey: 5632,
        px: 2772, py: 1258,
        description: "TA 1601 年，當馬爾科和布蘭科兄弟收到阿塞丹國王阿格勒布二世的土地贈予時，霍比特人在埃利阿多的一個肥沃、秩序井然的地區定居。夏爾東邊以布蘭迪萬河為界，西邊以遠地唐斯為界，南邊大致以東路為界，分為北、南、東、西四個法辛郡。它的主要城鎮是白唐斯 (White Downs) 上的米歇爾·德爾文 (Michel Delving)，也是市長所在地。北方遊騎兵杜凡丹悄悄地維護夏爾的田園和平，他們在哈比人不知情的情況下守護著夏爾的邊界。魔戒之戰後，埃萊薩國王將夏爾變成了北方權杖保護下的自由之地，並禁止人類進入。",
        characters: "Bilbo, Frodo, Sam, Merry, Pippin, the Thain, the Mayor"
    },
    {
        id: "michel-delving",
        name: "米歇爾‧德爾文 (Michel Delving) 郡首府",
        category: 'appendix',
        era: "TA", year: 1601, sortKey: 5632.1,
        px: 2648, py: 1144,
        description: "懷特唐斯的米歇爾德爾文是夏爾的主要城鎮，也是市長的所在地，市長是這片土地上唯一真正的官員。這是哈比人最接近首都的地方。夏爾的珍奇博物館馬托姆之家就位於此地。比爾博將他從索林那裡收到的秘銀外套捐獻給該博物館收藏，之後又將其回收。佔領期間，夏基的暴徒將鎖孔改建為監獄，它們也位於米歇爾·德爾文。",
        characters: "Will Whitfoot (the Mayor), Lobelia Sackville-Baggins"
    },
    {
        id: "fornost-fall",
        name: "福諾斯特\u2014北方王國的陷落",
        category: 'appendix',
        era: "TA", year: 1974, sortKey: 6005,
        px: 3111, py: 866,
        description: "福諾斯特·埃蘭（Fornost Erain），國王的諾伯里，在安法米納斯被遺棄後成為阿塞丹的首都。TA 1974 年，安格瑪巫王佔領了這座城市並摧毀了阿賽丹。一年後，來自剛鐸、林頓和瑞文戴爾的聯軍在福諾斯特戰役中擊敗了巫王，但為時已晚，無法拯救王國。",
        characters: "Arvedui, E\u00e4rnur, Gl\u00f3rfindel, the Witch-king"
    },
    {
        id: "forochel",
        name: "福羅切爾\u2014阿塞丹的最後一位國王",
        category: 'appendix',
        era: "TA", year: 1975, sortKey: 6006,
        px: 2572, py: 266,
        description: "福諾斯特陷落後，阿維杜伊國王向北逃往福羅切爾的冰灣，在那裡洛索斯（雪人）庇護了他。艾德丹派了一艘船去營救，但船被冰壓碎，阿維杜伊淹死了。與他一起失去的是七艘帕蘭特·埃德里中的兩艘，永遠沉入冰凍的水域之下。",
        characters: "Arvedui, the Lossoth, C\u00edrdan"
    },
    {
        id: "mount-gram",
        name: "Mount Gram \u2014 Goblins of the North",
        category: 'appendix',
        era: "TA", year: 2747, sortKey: 6778,
        px: 3463, py: 726,
        description: "迷霧山脈北部的獸人據點。TA 2747 年，一支哥布林酋長戈爾芬布爾 (Golfimbul) 率領的軍隊從格拉姆山 (Mount Gram) 出發入侵夏爾 (Shire)。班多布拉斯“鬥牛咆哮者”征服了“有史以來最高的霍比特人，大到可以騎馬”，在格林菲爾德戰役中領導防守，並用棍棒將戈爾芬布爾的頭打掉。它在空中航行，落入兔子洞，從而（根據哈比人的傳說）發明了高爾夫運動。這是夏爾大掃蕩之前夏爾境內發生的唯一一場戰鬥。",
        characters: "Golfimbul, Bandobras \u2018Bullroarer\u2019 Took"
    },
    {
        id: "gollum-origin",
        name: "河民\u2014咕嚕的起源",
        category: 'appendix',
        era: "TA", year: 2463, sortKey: 6494,
        px: 4434, py: 1380,
        description: "在安都因河上游山谷，靠近格拉登河的地方，住著一個斯圖爾人的小社區，他們是像哈比人一樣的河民。正是在這裡，杜戈戈爾在釣魚時發現了至尊戒指，而他的表弟斯姆戈戈爾為了佔有它而謀殺了他。在五個世紀的時間裡，斯姆亞戈被魔戒腐蝕，變成了可憐的生物咕嚕，最終撤退到了迷霧山脈的根部。從伊熙爾杜在格拉登平原丟失到比爾博在咕嚕的山洞中找到魔戒的漫長旅程，就是在這片安靜的樹林中開始的。",
        characters: "Sm\u00e9agol (Gollum), D\u00e9agol"
    },
    {
        id: "field-celebrant",
        name: "羅漢誕生慶典現場",
        category: 'appendix',
        era: "TA", year: 2510, sortKey: 6541,
        px: 4310, py: 1723,
        description: "TA 2510 年，大批東來者入侵剛鐸，並將其軍隊趕回慶祝之地。在剛鐸最黑暗的時刻，年輕的埃奧爾率領他的全體人民，從遙遠的北方策馬南下，擊敗了入侵者。為了表達謝意，管家奇瑞安授予埃奧爾卡勒納松省，即後來的洛汗省。",
        characters: "Eorl the Young, Cirion"
    },
    {
        id: "framsburg",
        name: "Framsburg \u2014 Home of the \u00c9oth\u00e9od",
        category: 'appendix',
        era: "TA", year: 2000, sortKey: 6031,
        px: 4177, py: 685,
        description: "弗拉姆斯堡是洛希爾人祖先馬領主的主要定居點。它位於灰色山脈和安都因河上游山谷之間的遙遠北方，以弗魯姆加之子弗拉姆的名字命名，弗拉姆殺死了偉大的冷龍斯卡薩並奪取了它的寶藏——引發了與矮人的激烈爭吵，矮人認為這些寶藏是他們的。TA 2510 年，年輕的艾奧爾帶領整個軍隊從這裡向南前往慶典場響應剛鐸的召喚。他們再也沒有回到北方。當他們定居在卡勒納松（Calenardhon）時，弗拉姆斯堡（Framsburg）被遺棄，這片土地後來成為洛汗（Rohan）。",
        characters: "Fram, Eorl the Young"
    },
    {
        id: "withered-heath",
        name: "枯萎石南\u2014龍之地",
        category: 'appendix',
        era: "TA", year: 2770, sortKey: 6801,
        px: 5020, py: 488,
        description: "枯萎石南位於遙遠北方的灰色山脈的懷抱之間，是龍的繁殖地。TA 2770 年，史矛革正是從這裡降臨到埃瑞伯，將矮人驅逐出境。來自荒原的其他龍此前曾襲擊過灰色山脈，並殺死了 I 中的杜國王。",
        characters: "Smaug, D\u00e1in I"
    },
    {
        id: "crossings-poros",
        name: "波羅斯渡口和雙胞胎土丘",
        category: 'appendix',
        era: "TA", year: 2885, sortKey: 6916,
        px: 4769, py: 3122,
        description: "波羅斯河對面的淺灘標誌著剛鐸的南部邊界。TA 2885 年，哈拉德林人大舉入侵過境點。管家圖法林二世向洛汗尋求援助，福克溫國王派遣他的雙胞胎兒子法斯特雷德和福爾克萊德南下，以履行埃奧爾的誓言。剛鐸贏得了這場戰鬥，但雙胞胎都被殺了。圖法林在戰場上的雙胞胎土丘 Gwan 建造了 Haudh，敵人在近一個世紀的時間裡沒有再越過波羅斯河。",
        characters: "Fastred, Folcred, T\u00farin II, King Folcwine"
    },
    {
        id: "harondor",
        name: "哈隆多 &u2014 南剛鐸",
        category: 'appendix',
        era: "TA", year: 1944, sortKey: 5975,
        px: 4598, py: 3388,
        description: "哈隆多（Harondor），或稱南剛鐸（South Gondor），是波羅斯河和哈嫩河之間有爭議的邊界地區。在剛鐸鼎盛時期，這裡是一個定居的省份，但隨著剛鐸的衰落和哈拉德的興盛，該地區成為了幾個世紀以來爭奪的荒涼無人區。雙方都沒有長時間牢固地握住它。到了魔戒之戰時，哈隆多實際上已被遺棄——成為兩個敵對勢力之間的緩衝區。",
        characters: ""
    },
    {
        id: "east-bight",
        name: "東灣&u2014 空地",
        category: 'appendix',
        era: "TA", year: 1000, sortKey: 5031.02,
        px: 4922, py: 1556,
        description: "東灣是黑森林東緣的一個巨大凹痕，是由北方人經過數代砍伐樹木而形成的。這片空地深入森林，為定居和農業創造了開闊的土地。居住在這裡的人類是洛希爾人和湖人的親屬，他們都是羅瓦尼安廣大民族的一部分。由於陰影在幽暗密林南部蔓延，他們與多古爾人的距離使得這些土地變得危險。",
        characters: "The Northmen of Rhovanion"
    },
    {
        id: "iron-hills",
        name: "鐵山 (Iron Hills) 和鐵腳 (Ironfoot) 的王國",
        category: 'appendix',
        era: "TA", year: 2941, sortKey: 6972,
        px: 6154, py: 794,
        description: "鐵丘陵是埃雷博以東的矮人據點，由都林家族的鐵腳杜林統治。當他收到索林收復埃雷博爾的消息時，杜因率領 500 名矮人進軍，及時趕到，參加了五軍之戰。索林死後，杜因成為山下之王。",
        characters: "D\u00e1in Ironfoot, N\u00e1in"
    },
    {
        id: "dorwinion",
        name: "多文尼翁 &u2014 葡萄酒之鄉",
        category: 'appendix',
        era: "TA", year: 2941, sortKey: 6972.01,
        px: 5964, py: 1428,
        description: "多文尼恩 (Dorwinion) 是位於羅海西北岸的葡萄酒產區，以其令人陶醉的葡萄酒而聞名。一桶桶的多文尼安葡萄酒被運往黑森林的瑟蘭迪爾大廳，正是這些烈性葡萄酒讓精靈王的守衛睡著了，比爾博得以策劃矮人在桶中逃跑。",
        characters: "Bilbo, Thranduil's butler"
    },
    {
        id: "confluence-celduin",
        name: "塞爾杜因和卡門的匯合處",
        category: 'appendix',
        era: "TA", year: 2941, sortKey: 6972.02,
        px: 5706, py: 1422,
        description: "在這裡，發源於鐵山的卡南河（紅水河）與來自埃雷博爾和長湖的奔流河（塞爾杜因河）匯合在一起。合併後的水流向南流入羅氏海。卡南的名字意為“紅水”，很可能指的是從鐵山矮人礦井中運出的富含鐵的沉積物。這個交會處位於羅瓦尼安廣闊的土地上，遠離西方的權力中心。",
        characters: "D\u00e1in Ironfoot's folk"
    },
    {
        id: "sarn-ford",
        name: "薩恩福特&u2014夏爾的突破",
        category: 'appendix',
        era: "TA", year: 3018, sortKey: 7049.08,
        px: 3025, py: 1444,
        description: "薩恩福特是橫跨布蘭迪萬河的南部主要淺灘，由阿拉貢的遊騎兵秘密守衛，以保護夏爾——這是哈比人從未知曉的服務。TA 3018 年 9 月，納茲格人強行穿越，驅散了杜凡丹人並進入夏爾追捕「巴金斯」。夏爾隱形防禦的突破引發了整個追擊行動。",
        characters: "The Nazg\u00fbl, the Rangers of the North, Aragorn"
    },
    {
        id: "last-bridge",
        name: "最後的橋&u2014精靈石",
        category: 'appendix',
        era: "TA", year: 3018, sortKey: 7049.1015,
        px: 3681, py: 1154,
        description: "最後一座橋橫跨大東路的霍爾韋爾河（Mitheithel）－瑞文戴爾之前的最後一座橋。風雲頂襲擊後，阿拉貢率領受傷的弗羅多和哈比人來到這裡，擔心納茲格伏擊。相反，他在橋上發現了一顆淡綠色的綠柱石——這是格洛芬德爾發出的信號，表明過境點是安全的，黑騎士已經被趕走了。",
        characters: "Aragorn, Frodo, Sam, Merry, Pippin, Glorfindel"
    },
    {
        id: "tharbad",
        name: "薩巴德\u2014穿越灰洪河",
        category: 'appendix',
        era: "TA", year: 3018, sortKey: 7049.07,
        px: 3372, py: 1578,
        description: "薩巴德曾經是南北大道灰洪河交匯處的一個繁榮的貿易城鎮，但隨著阿諾和剛鐸的衰落，塔巴德陷入了廢墟。到了魔戒大戰時，只剩下搖搖欲墜的城牆。博羅米爾在從米那斯提力斯前往瑞文戴爾的漫長旅途中，在渡河時失去了馬匹，不得不繼續步行。",
        characters: "Boromir"
    },
    {
        id: "brandywine-bridge",
        name: "布蘭迪萬橋 &u2014 夏爾的沖刷",
        category: 'appendix',
        era: "TA", year: 3019, sortKey: 7050.11,
        px: 2974, py: 1126,
        description: "石弓橋由阿諾國王在大東路上建造，是唯一一座橫跨布蘭迪萬河的橋樑，也是通往夏爾的東部門戶。當弗羅多和他的同伴從魔戒之戰歸來時，他們發現這裡佈滿了尖刺的大門，並由薩魯曼控制下的郡長把守——這是他們佔領夏爾的第一個跡象。哈比人衝破了大門，引發了夏爾的解放。",
        characters: "Frodo, Sam, Merry, Pippin, Saruman"
    },
    {
        id: "cair-andros",
        name: "凱爾安德羅斯島堡壘",
        category: 'appendix',
        era: "TA", year: 3019, sortKey: 7050.0385,
        px: 4750, py: 2515,
        description: "奧斯吉利亞斯北部安都因河上的一座防禦島嶼，形狀像一艘船頭指向上游的大船。剛鐸在此駐軍，守衛通往米那斯提力斯的北部通道。在魔戒之戰期間，索倫的軍隊佔領了該島，並威脅要切斷洛汗的援軍。",
        characters: "Faramir, the garrison of Gondor"
    },
    {
        id: "dol-amroth",
        name: "多爾阿姆羅斯 &u2014 天鵝騎士之城",
        category: 'appendix',
        era: "TA", year: 3019, sortKey: 7050.041,
        px: 3702, py: 2892,
        description: "多阿姆羅斯的海岸堡壘是貝爾法拉斯王子的所在地，他們自稱是精靈後裔。伊姆拉希爾王子率領著名的天鵝騎士團保衛米那斯提力斯，他的連隊是佩倫諾平原之戰中最英勇的連隊之一。德內梭爾死後，短暫統治了剛鐸。",
        characters: "Imrahil, Galador"
    },
    {
        id: "gap-rohan",
        name: "羅漢峽",
        category: 'appendix',
        era: "TA", year: 3019, sortKey: 7050.0295,
        px: 3742, py: 2135,
        description: "洛汗峽是霧山脈南端和白山北端之間的寬闊通道，是埃利阿多和剛鐸之間唯一避免翻山越嶺的主要陸路路線。薩魯曼對艾辛格北端的控制使峽灣成為整個魔戒戰爭期間備受爭議的走廊。",
        characters: "Saruman"
    },
    {
        id: "near-harad",
        name: "南蠻子王國哈拉德附近",
        category: 'appendix',
        era: "TA", year: 3019, sortKey: 7050.037,
        px: 5229, py: 3697,
        description: "哈拉德人（Haradrim）或南蠻人（Southrons）的北方土地，他們是剛鐸的長期敵人。他們在魔戒之戰中與索倫並肩作戰，騎著偉大的奧利芬特斯 (Mumakil) 在佩蘭諾平原 (Pelennor Fields) 參加戰鬥。在伊西利恩，山姆目睹了法拉米爾的遊騎兵和哈拉德林縱隊之間的小衝突，並反思了一名倒下的南蠻戰士的人性。",
        characters: "The Haradrim, Faramir, Sam"
    },
    {
        id: "khand",
        name: "Khand \u2014 瓦里亞格斯之地",
        category: 'appendix',
        era: "TA", year: 3019, sortKey: 7050.038,
        px: 6771, py: 3513,
        description: "坎德是魔多東南部一片鮮為人知的土地，是索倫統治下的兇猛戰士瓦里亞格斯人的故鄉。瓦里亞格斯人在佩蘭諾平原之戰中與哈拉德人和東來者並肩作戰。托爾金幾乎沒有透露任何其他關於他們的文化或歷史的內容，使坎德成為中土地圖上最神秘的地區之一。",
        characters: "The Variags"
    },
    {
        id: "fords-isen",
        name: "Fords of Isen \u2014 Death of Th\u00e9odred",
        category: 'appendix',
        era: "TA", year: 3019, sortKey: 7050.025,
        px: 3700, py: 2104,
        description: "艾森渡口是艾森河的主要渡口，也是洛汗和艾森加德之間的戰略要地。薩魯曼的軍隊兩次攻擊福特號。在第一次戰鬥中，圖奧登國王的兒子、洛汗的繼承人圖奧德雷德被殺，這一事件使王國陷入危機，隨著戰爭的臨近，王國群龍無首。",
        characters: "Th\u00e9odred, Grimbold, \u00c9omer"
    },
    {
        id: "osgiliath-ruin",
        name: "奧斯吉利亞斯\u2014 首都廢墟",
        category: 'towers',
        era: "TA", year: 3019, sortKey: 7050.039,
        px: 4856, py: 2658,
        description: "剛鐸古都，曾經橫跨安都因河兩岸，如今已成為剛鐸和魔多爭奪的破碎廢墟。博羅米爾領導了西岸的防禦，正是奧斯吉利亞斯陷落的夢想促使他前往瑞文戴爾。魔戒之戰期間，索倫的軍隊渡河湧向米那斯提力斯，法拉米爾的軍隊在後方奮力拼殺。",
        characters: "Boromir, Faramir"
    },

    // ── The Hobbit ──
    {
        id: "unexpected-party",
        name: "Bag End &u2014 一場意外的派對",
        category: 'hobbit',
        era: "TA", year: 2941, sortKey: 6972.04,
        px: 2746, py: 1115,
        description: "甘道夫和由索林·橡木盾帶領的十三名矮人不請自來地來到比爾博·巴金斯的哈比人洞，招募這位困惑的哈比人作為他們的竊賊，以尋求從惡龍史矛革手中奪回孤山。",
        characters: "Bilbo, Gandalf, Thorin, Balin, Dwalin, F\u00edli, K\u00edli, and company"
    },
    {
        id: "trollshaws",
        name: "巨魔車和三個巨魔",
        category: 'hobbit',
        era: "TA", year: 2941, sortKey: 6972.06,
        px: 3811, py: 937,
        description: "一行人遇到了三個石頭巨魔——湯姆、伯特和威廉——他們捕獲了矮人併計劃將他們煮熟。甘道夫模仿巨魔的聲音來欺騙他們，直到黎明將他們變成石頭。",
        characters: "Bilbo, Gandalf, Thorin, the Trolls"
    },
    {
        id: "rivendell-moon-letters",
        name: "瑞文戴爾\u2014月亮信件",
        category: 'hobbit',
        era: "TA", year: 2941, sortKey: 6972.062,
        px: 3922, py: 1096,
        description: "埃爾隆德主持了這群人，並閱讀了瑟爾地圖上的月亮字母，揭示了埃雷伯的秘密入口：“當畫眉敲門時，站在灰色的石頭旁，都林之日的最後一道光芒將照耀在鑰匙孔上。”",
        characters: "Bilbo, Gandalf, Thorin, Elrond"
    },
    {
        id: "goblin-town",
        name: "妖精鎮/海帕斯",
        category: 'hobbit',
        era: "TA", year: 2941, sortKey: 6972.07,
        px: 4080, py: 1030,
        description: "迷霧山脈上的高原通道隱藏著地精城鎮，這是一個由大地精統治的廣闊的地下巢穴。索林的連隊在躲避雷戰時被俘，甘道夫殺死了大妖精，帶領他們穿過隧道逃跑。",
        characters: "Gandalf, Thorin, the Great Goblin"
    },
    {
        id: "riddles-in-dark",
        name: "迷霧山脈\u2014黑暗中的謎語",
        category: 'hobbit',
        era: "TA", year: 2941, sortKey: 6972.071,
        px: 4094, py: 1049,
        description: "在高山口被妖精抓獲後，連隊得以逃脫，但比爾博卻失散並迷失在深深的隧道中。在那裡，他發現了一枚金戒指，並遇到了咕嚕，並在一場謎語遊戲中擊敗了他，找到了出路。",
        characters: "Bilbo, Gollum, the Great Goblin"
    },
    {
        id: "carrock",
        name: "卡羅克“老鷹救援”",
        category: 'hobbit',
        era: "TA", year: 2941, sortKey: 6972.072,
        px: 4319, py: 976,
        description: "在座狼和地精的追擊下，一行人被困在樹林裡，被巨鷹救起，並把他們帶到卡羅克（安都因河中的一塊大岩石）的安全地帶。",
        characters: "Bilbo, Gandalf, Thorin, the Great Eagles"
    },
    {
        id: "beorns-hall",
        name: "貝奧恩大廳",
        category: 'hobbit',
        era: "TA", year: 2941, sortKey: 6972.073,
        px: 4444, py: 944,
        description: "該公司尋求比奧恩（Beorn）的庇護，他是一位偉大的換皮者，可以變成熊的形態。他確認了地精的追擊，並借給他們小馬和穿越黑森林的食物。",
        characters: "Bilbo, Gandalf, Thorin, Beorn"
    },
    {
        id: "mirkwood-spiders",
        name: "黑森林\u2014蜘蛛與陰影",
        category: 'hobbit',
        era: "TA", year: 2941, sortKey: 6972.08,
        px: 4637, py: 945,
        description: "沒有甘道夫，隊伍進入了黑森林的黑暗森林。他們被巨型蜘蛛困住了。比爾博使用至尊戒和他的精靈之劍（他將其命名為史汀）解放了矮人，這是他第一次真正的英雄主義行為。",
        characters: "Bilbo, Thorin, the Dwarves"
    },
    {
        id: "dol-guldur-council",
        name: "多古爾杜爾\u2014白色委員會罷工",
        category: 'hobbit',
        era: "TA", year: 2941, sortKey: 6972.081,
        px: 4690, py: 1578,
        description: "當矮人穿越幽暗密林時，甘道夫出發加入白色議會，攻擊多古爾都。他們將死靈法師（後來證實是索倫本人）從要塞中趕了出來。這就是為什麼甘道夫在公司被蜘蛛和木精靈佔領期間缺席的原因。",
        characters: "Gandalf, Saruman, the White Council, Sauron"
    },
    {
        id: "thranduils-halls",
        name: "瑟蘭迪爾大廳和林地王國",
        category: 'hobbit',
        era: "TA", year: 2941, sortKey: 6972.09,
        px: 4815, py: 962,
        description: "瑟蘭迪爾國王的木精靈俘獲了矮人並將他們囚禁起來。比爾博帶著魔戒隱形，他在大廳裡潛行了幾週，然後利用沿著森林河漂流的空桶制定了逃跑計劃。",
        characters: "Bilbo, Thorin, Thranduil"
    },
    {
        id: "lake-town",
        name: "Lake-town \u2014 Welcome to Esgaroth",
        category: 'hobbit',
        era: "TA", year: 2941, sortKey: 6972.10,
        px: 5105, py: 1125,
        description: "一行人抵達長湖畔的貿易小鎮埃斯加羅斯。索林宣布自己為山下之王，湖中人類歡迎矮人，希望恢復傳說中預言的昔日繁榮。",
        characters: "Bilbo, Thorin, Bard, the Master of Lake-town"
    },
    {
        id: "erebor-inside",
        name: "埃雷伯·孤山內",
        category: 'hobbit',
        era: "TA", year: 2941, sortKey: 6972.101,
        px: 5161, py: 941,
        description: "比爾博爬下秘密通道，在巨大的寶庫中與黃金史矛革對峙。哈比人巧妙的謎語對話揭示了這條龍的一個弱點——他左胸上的一塊裸露的地方。",
        characters: "Bilbo, Smaug, Thorin"
    },
    {
        id: "death-of-smaug",
        name: "長湖\u2014史矛革之死",
        category: 'hobbit',
        era: "TA", year: 2941, sortKey: 6972.11,
        px: 5140, py: 1125,
        description: "比爾博的偷竊行為激怒了史矛革，他在一場火焰風暴中降臨到長湖鎮，點燃了這座小鎮。當龍再次駛過時，弓箭手巴德在畫眉鳥關於史矛革寶石盔甲上裸露補丁的消息的引導下釋放了黑箭並擊中了目標。史矛革猛烈地衝向城鎮，他最後的陣痛將城鎮炸成了火花。湖水在廢墟上咆哮，永遠吞沒了龍。",
        characters: "Smaug, Bard the Bowman, Bilbo"
    },
    {
        id: "mount-gundabad",
        name: "岡達巴德山 &u2014 哥布林部落",
        category: 'hobbit',
        era: "TA", year: 2941, sortKey: 6972.111,
        px: 3842, py: 447,
        description: "岡達巴德山是杜林第一次甦醒的古老矮人聖地，很久以前就被獸人佔領了。在五軍之戰中，博格率領一支龐大的妖精軍隊從岡達巴德到埃雷博爾，將矮人、精靈和人類之間的對峙變成了一場絕望的生存之戰。",
        characters: "Bolg, Thorin, D\u00e1in Ironfoot"
    },
    {
        id: "five-armies",
        name: "戴爾《五軍之戰》",
        category: 'hobbit',
        era: "TA", year: 2941, sortKey: 6972.112,
        px: 5123, py: 983,
        description: "巴德殺死史矛革後，五支軍隊聚集在孤山：人類、精靈、矮人、哥布林和座狼。自由人民聯合起來對抗妖精部落。索林受了致命傷，但在死前與比爾博和解。",
        characters: "Thorin, Bilbo, Bard, Thranduil, D\u00e1in, Beorn, the Great Eagles"
    },

    // ── The Fellowship of the Ring ──
    {
        id: "bilbo-farewell",
        name: "袋底洞&比爾博的告別",
        category: 'fellowship',
        era: "TA", year: 3001, sortKey: 7032.09,
        px: 2764, py: 1115,
        description: "比爾博巴金斯舉辦了一場盛大的派對來慶祝他的 111 歲生日，然後帶著戒指消失了。他將至尊魔戒留給了他的侄子佛羅多，並開始了他的探索之旅。",
        characters: "Bilbo, Frodo, Gandalf"
    },
    {
        id: "bucklebury-ferry",
        name: "巴克伯里渡輪 &u2014 逃離黑騎士",
        category: 'fellowship',
        era: "TA", year: 3018, sortKey: 7049.0923,
        px: 2988, py: 1178,
        description: "渡輪橫跨大橋以南的布蘭迪萬河，連接夏爾和巴克蘭。佛羅多、山姆和皮平跑向渡輪，黑騎士緊跟在後。他們及時出發，看著那個黑色的身影停在水邊，然後轉向大橋。",
        characters: "Frodo, Sam, Merry, Pippin, the Nazg\u00fbl"
    },
    {
        id: "crickhollow",
        name: "克里克霍洛的陰謀被揭露",
        category: 'fellowship',
        era: "TA", year: 3018, sortKey: 7049.0924,
        px: 3034, py: 1204,
        description: "弗羅多在巴克蘭的房子，被購買作為離開夏爾的掩護。在這裡，梅里、皮平、山姆和胖子博爾格透露，他們一直都知道魔戒的存在，並堅持加入佛羅多的旅程。在隊伍出發進入舊森林後，戒靈在夜間襲擊了這棟房子。胖子博爾格逃脫並吹響了巴克蘭的號角，這是幾代以來第一次吹響號角。",
        characters: "Frodo, Sam, Merry, Pippin, Fatty Bolger, the Nazg\u00fbl"
    },
    {
        id: "old-forest",
        name: "老森林\u2014 湯姆龐巴迪爾",
        category: 'fellowship',
        era: "TA", year: 3018, sortKey: 7049.0926,
        px: 3098, py: 1178,
        description: "哈比人穿過高乾草叢離開夏爾，進入古老的森林，柳老人在那裡困住了梅里和皮聘。他們被神秘的森林主人湯姆·邦巴迪爾救了出來，而湯姆·邦巴迪爾並沒有受到中土世界最偉大的謎團之一——至尊魔戒的力量的影響。",
        characters: "Frodo, Sam, Merry, Pippin, Tom Bombadil, Goldberry"
    },
    {
        id: "barrow-downs",
        name: "Barrow-downs &u2014 西方之刃",
        category: 'fellowship',
        era: "TA", year: 3018, sortKey: 7049.0928,
        px: 3185, py: 1144,
        description: "穿越古老的墓葬群時，哈比人被巴羅屍鬼所困。湯姆·龐巴迪爾再次救了他們。在屍鬼的寶藏中，他們發現了為對抗安格瑪而鍛造的杜凡丹劍——正是梅里的劍後來幫助在佩蘭諾平原殺死了巫王。",
        characters: "Frodo, Sam, Merry, Pippin, Tom Bombadil, the Barrow-wight"
    },
    {
        id: "bree",
        name: "布莉和躍躍欲試的小馬",
        category: 'fellowship',
        era: "TA", year: 3018, sortKey: 7049.0929,
        px: 3254, py: 1139,
        description: "佛羅多和哈比人在躍馬旅店遇到了神秘的遊俠神行者（阿拉貢飾）。佛羅多不小心戴上了至尊戒，引起了納茲格的注意。",
        characters: "Frodo, Sam, Merry, Pippin, Aragorn"
    },
    {
        id: "midgewater",
        name: "米奇沃特沼澤",
        category: 'fellowship',
        era: "TA", year: 3018, sortKey: 7049.10,
        px: 3367, py: 1084,
        description: "離開布理後，阿拉貢帶領哈比人離開大路，躲避納茲格，他們在米奇沃特沼澤中度過了數日悲慘的日子——米奇沃特沼澤位於布理以東，是一片無路可走的沼澤，佈滿了成群的蠓蟲。這雖然乏味但必要，哈比人開始理解野外生活的艱辛。",
        characters: "Frodo, Sam, Merry, Pippin, Aragorn"
    },
    {
        id: "weathertop",
        name: "風雲頂\u2014 納茲格的攻擊\u00fbl",
        category: 'fellowship',
        era: "TA", year: 3018, sortKey: 7049.1006,
        px: 3484, py: 1097,
        description: "安格瑪巫王在阿蒙蘇夫布爾古老的瞭望塔頂上用魔古爾之刃刺傷了佛羅多。傷口差點奪去了佛羅多的生命，留下了永久的印記。",
        characters: "Frodo, Aragorn, the Nazg\u00fbl"
    },
    {
        id: "ford-bruinen",
        name: "布魯伊南福特 &u2014 飛往福特的航班",
        category: 'fellowship',
        era: "TA", year: 3018, sortKey: 7049.1020,
        px: 3850, py: 1134,
        description: "魔古爾的傷口慢慢奪走了他的生命，弗羅多騎著格洛芬德爾的戰馬阿斯法洛斯奔向布魯伊南渡口，這是瑞文戴爾之前的最後一個渡口。九戒將他追至河邊。當他們入水時，埃爾隆德在河流中釋放了一場白馬形狀的大洪水，將黑騎士席捲而去，最終打破了他們的追擊。",
        characters: "Frodo, Glorfindel, Aragorn, the Nazg\u00fbl, Elrond, Gandalf"
    },
    {
        id: "council-elrond",
        name: "瑞文戴爾\u2014埃爾隆德議會",
        category: 'fellowship',
        era: "TA", year: 3018, sortKey: 7049.1025,
        px: 3940, py: 1096,
        description: "自由人民的代表聚集在最後的溫馨之家。魔戒遠徵隊成立：九名同伴對抗九名納茲格，其任務是摧毀至尊魔戒。",
        characters: "Frodo, Gandalf, Aragorn, Legolas, Gimli, Boromir, Sam, Merry, Pippin"
    },
    {
        id: "caradhras",
        name: "卡拉德拉斯 &u2014 紅角山口",
        category: 'fellowship',
        era: "TA", year: 3019, sortKey: 7050.0112,
        px: 3973, py: 1447,
        description: "卡拉德拉斯（Caradhras），即紅角山（庫茲杜爾的巴拉津巴爾山），是莫里亞上方三座山峰中最北端、最高的一座。遠徵隊試圖越過紅角山口，但被暴風雪和惡意——無論是來自殘酷的山脈本身還是來自索倫——擊退。他們在山口的失敗迫使他們做出了致命的決定：穿過莫里亞進入山下。",
        characters: "Gandalf, Aragorn, the Fellowship"
    },
    {
        id: "doors-durin",
        name: "都林之門 \u2014 與朋友交談並進入",
        category: 'fellowship',
        era: "TA", year: 3019, sortKey: 7050.0113,
        px: 3940, py: 1490,
        description: "在莫瑞亞的西門，遠徵隊發現古老的杜林之門已關閉。銘文上寫著「說吧，朋友，然後進入」。甘道夫嘗試了一個又一個咒語，然後意識到這是一個簡單的謎語——精靈語中朋友的意思是“梅隆”，打開了大門。當他們進入時，水中守望者從黑暗的湖中發動攻擊，抓住了佛羅多。其他人救了他，但這個生物把門關上，並壓垮了入口，將遠徵隊困在裡面。",
        characters: "Gandalf, Frodo, the Watcher in the Water, the Fellowship"
    },
    {
        id: "bridge-khazad-dum",
        name: "莫里亞\u2014 Khazad-d\u00fbm之橋",
        category: 'fellowship',
        era: "TA", year: 3019, sortKey: 7050.0115,
        px: 3981, py: 1515,
        description: "遠徵隊經過廢棄的矮人王國。在發現巴林殖民地的命運後，他們遭到半獸人和洞穴巨魔的攻擊。甘道夫在橋上與炎魔對峙並陷入陰影。",
        characters: "Gandalf, the Balrog, the Fellowship"
    },
    {
        id: "dimrill-dale",
        name: "迪姆瑞爾·戴爾 &u2014 鏡湖",
        category: 'fellowship',
        era: "TA", year: 3019, sortKey: 7050.0115,
        px: 4058, py: 1555,
        description: "甘道夫倒下後，遠徵隊悲痛欲絕地從莫瑞亞出來，在迪姆瑞爾山谷停留。吉姆利眺望鏡湖（Kheled-z\u00e2ram），這是不死者杜林第一次看到倒映在他頭頂的星辰王冠的聖湖，這一景象增強了他的決心。",
        characters: "Aragorn, Legolas, Gimli, Frodo, Sam, Merry, Pippin, Boromir"
    },
    {
        id: "lothlorien",
        name: "洛瑟\u00f3rien\u2014 金木",
        category: 'fellowship',
        era: "TA", year: 3019, sortKey: 7050.0117,
        px: 4214, py: 1609,
        description: "悲痛的遠徵隊在加拉德瑞爾女士的精靈王國避難。她向佛羅多展示了加拉德瑞爾的魔鏡，並抵抗了魔戒的誘惑。公司收到精靈的禮物和船隻。",
        characters: "Galadriel, Celeborn, the Fellowship"
    },
    {
        id: "caras-galadhon",
        name: "卡拉斯·加拉東《洛絲之心》",
        category: 'fellowship',
        era: "TA", year: 3019, sortKey: 7050.02,
        px: 4190, py: 1640,
        description: "加拉茲人的城市，建在瑪隆樹叢中的一座大山上。這裡矗立著凱勒博恩和加拉德瑞爾的高台，以及位於花園空洞中的加拉德瑞爾之鏡。遠徵隊從這座城市收到了精靈斗篷、蘭巴斯和其他禮物——包括加拉德瑞爾的小瓶子和她送給金利的三根金毛。",
        characters: "Galadriel, Celeborn, Frodo, Gimli, the Fellowship"
    },
    {
        id: "amon-hen",
        name: "阿蒙·漢 &u2014 團契的破裂",
        category: 'fellowship',
        era: "TA", year: 3019, sortKey: 7050.0226,
        px: 4480, py: 2174,
        description: "波羅米爾屈服於至尊戒的誘惑，試圖從佛羅多手中奪走它。獸人攻擊；博羅米爾為保護梅里和皮聘而贖罪，但被殺。弗羅多和山姆獨自前往魔多。",
        characters: "Boromir, Frodo, Aragorn, Merry, Pippin"
    },
    {
        id: "rauros-falls",
        name: "勞羅斯瀑布和博羅米爾的葬禮",
        category: 'fellowship',
        era: "TA", year: 3019, sortKey: 7050.0226,
        px: 4502, py: 2196,
        description: "安都因河上的勞羅斯大瀑布，靠近埃敏穆伊山。在博羅米爾為保衛梅里和皮平而跌倒後，阿拉貢、萊戈拉斯和吉姆利將他的屍體放在一艘精靈船上，並將其送過瀑布作為葬禮——向剛鐸之子莊嚴告別。",
        characters: "Aragorn, Legolas, Gimli, Boromir"
    },

    // ── The Two Towers ──
    {
        id: "celebdil",
        name: "塞萊迪爾杜林塔",
        category: 'towers',
        era: "TA", year: 3019, sortKey: 7050.0125,
        px: 3917, py: 1457,
        description: "塞勒迪爾山（Silvertine）（庫茲杜爾語中的 Zirakzigil）是莫里亞上方三座山峰中最西端的一座。塔頂矗立著都林塔，這座塔雕刻在活岩中，透過從 Khazad-dfbm 最深處螺旋上升的無盡階梯到達。從橋上掉下來後，甘道夫追著炎魔爬上無盡階梯到達山頂。他們在山腰上戰鬥了兩天，直到甘道夫扔下了炎魔，粉碎了塔樓和他倒下的山腰。甘道夫本人在山峰上去世，然後作為白衣被送回。",
        characters: "Gandalf, Durin\u2019s Bane (the Balrog)"
    },
    {
        id: "eaves-fangorn",
        name: "法貢屋簷\u2014逃離烏魯克海",
        category: 'towers',
        era: "TA", year: 3019, sortKey: 7050.0229,
        px: 4017, py: 2086,
        description: "在法貢森林的邊緣，洛汗騎士團包圍並摧毀了攜帶梅里和皮平的烏魯克海樂隊。在混亂的夜戰中，兩個哈比人鬆開了束縛，爬進了森林的屋簷下，在那裡他們遇到了樹鬚。阿拉貢、萊戈拉斯和金利第二天早上到達，找到了悶燒的半獸人柴堆，並追蹤哈比人的蹤跡進入樹林。",
        characters: "\u00c9omer, Merry, Pippin, Ugl\u00fak, Grish\u00e1kh, Aragorn, Legolas, Gimli"
    },
    {
        id: "fangorn-treebeard",
        name: "法貢森林\u2014 與樹須的會面",
        category: 'towers',
        era: "TA", year: 3019, sortKey: 7050.0299,
        px: 4043, py: 1918,
        description: "在森林邊緣的戰鬥中逃離烏魯克海後，梅里和皮聘逃進了法貢的深處。在那裡，他們遇到了樹須，樹人中最古老的人，也是樹木的牧羊人。他把他們帶到了他在威靈霍爾的家，他們關於薩魯曼背叛森林的故事激勵恩特們向艾辛格進軍。",
        characters: "Treebeard, Merry, Pippin"
    },
    {
        id: "fangorn-white-wizard",
        name: "法貢森林&u2014白巫師",
        category: 'towers',
        era: "TA", year: 3019, sortKey: 7050.0301,
        px: 4004, py: 2000,
        description: "追蹤梅里和皮聘進入法貢，阿拉貢、萊戈拉斯和吉姆利遇到了一個白衣人影，他們誤認為是薩魯曼。這是甘道夫，在莫瑞亞深處與炎魔戰鬥後死而復生。他重生為白色甘道夫，告訴他們哈比人很安全，並帶領他們前往伊多拉斯，將國王圖奧登從薩魯曼的影響中解放出來。",
        characters: "Gandalf, Aragorn, Legolas, Gimli"
    },
    {
        id: "emyn-muil",
        name: "Emyn Muil \u2014 The Taming of Gollum",
        category: 'towers',
        era: "TA", year: 3019, sortKey: 7050.0301,
        px: 4623, py: 2147,
        description: "弗羅多和山姆在埃明繆爾的岩石迷宮中迷路了。他們抓住了一直跟蹤他們的咕嚕，佛羅多讓他向寶物發誓，充當他們前往魔多的嚮導。",
        characters: "Frodo, Sam, Gollum"
    },
    {
        id: "edoras",
        name: "伊多拉斯\u2014梅杜塞爾金色大廳",
        category: 'towers',
        era: "TA", year: 3019, sortKey: 7050.0302,
        px: 3969, py: 2344,
        description: "甘道夫透過格魯德瑪蟲語將圖奧登國王從薩茹曼的影響中解放出來。洛汗人民準備與艾辛格的軍隊作戰。",
        characters: "Gandalf, Th\u00e9oden, \u00c9owyn, \u00c9omer, Gr\u00edma"
    },
    {
        id: "helms-deep",
        name: "Helm's Deep \u2014 The Battle of the Hornburg",
        category: 'towers',
        era: "TA", year: 3019, sortKey: 7050.0303,
        px: 3760, py: 2277,
        description: "洛希爾人在聖盔谷要塞與薩魯曼的一萬名烏魯克人軍隊拼死抵抗。黎明時分，甘道夫和洛希爾人的衝鋒以及胡恩人的到來，勝利來臨了。",
        characters: "Th\u00e9oden, Aragorn, Legolas, Gimli, Gandalf, Erkenbrand"
    },
    {
        id: "dead-marshes",
        name: "死亡沼澤",
        category: 'towers',
        era: "TA", year: 3019, sortKey: 7050.0304,
        px: 4894, py: 2150,
        description: "咕嚕帶領哈比人穿越危險的死亡沼澤，那裡的水下躺著幽靈般的燈光和遠古死者的臉。納茲格騎著一頭墮落的野獸從頭頂飛過。",
        characters: "Frodo, Sam, Gollum"
    },
    {
        id: "isen-dam",
        name: "伊森河上的水壩",
        category: 'towers',
        era: "TA", year: 3019, sortKey: 7050.0303,
        px: 3793, py: 1978,
        description: "樹人在進攻艾辛格時衝破了艾森河上的大壩，將水釋放到艾辛格之環中，淹沒了薩魯曼的地下軍械庫、熔爐和戰爭機器。洪水淹沒了他的軍隊，使堡壘變得毫無用處，將法師困在歐爾桑克塔中。",
        characters: "Treebeard, the Ents"
    },
    {
        id: "isengard-ents",
        name: "艾辛格\u2014樹人的突襲",
        category: 'towers',
        era: "TA", year: 3019, sortKey: 7050.0304,
        px: 3775, py: 2039,
        description: "薩魯曼對森林的破壞激怒了樹人，他們向艾辛格進軍並衝破了大壩，淹沒了要塞，並將薩魯曼困在歐爾桑克之塔中。",
        characters: "Treebeard, Merry, Pippin, Saruman"
    },
    {
        id: "orthanc-saruman",
        name: "Orthonke \Uto14 薩魯曼的聲音",
        category: 'towers',
        era: "TA", year: 3019, sortKey: 7050.0305,
        px: 3744, py: 2017,
        description: "艾辛格被洪水淹沒後，甘道夫和他的夥伴們在歐爾桑克塔頂與薩魯曼對峙。薩魯曼試圖用他有說服力的聲音來影響他們，但被甘道夫阻止，甘道夫將他逐出了騎士團。格魯德瑪·沃姆舌將歐爾桑克的帕蘭特從塔上投下。那天晚上，皮平偷看視鏡，被索倫發現，迫使甘道夫立即與皮平一起騎馬前往米那斯提力斯。",
        characters: "Gandalf, Saruman, Gr\u00edma, Pippin, Aragorn, Th\u00e9oden"
    },
    {
        id: "henneth-annun",
        name: "Henneth Ann\u00fbn \u2014 日落之窗",
        category: 'towers',
        era: "TA", year: 3019, sortKey: 7050.0307,
        px: 5029, py: 2491,
        description: "伊西利安遊騎兵的隱藏避難所位於簾式瀑布後面。法拉米爾在伊西力恩的荒野中捕獲佛羅多和山姆後，將他們帶到了這裡。在瀑布背後，法拉米爾向弗羅多詢問有關至尊戒的事情，並得知博羅米爾的死訊，但與他的兄弟不同的是，法拉米爾選擇不奪取至尊戒。",
        characters: "Faramir, Frodo, Sam, Gollum"
    },
    {
        id: "cross-roads",
        name: "The Cross-roads \u2014 The Fallen King",
        category: 'towers',
        era: "TA", year: 3019, sortKey: 7050.0309,
        px: 4927, py: 2678,
        description: "在從奧斯吉利亞斯出發的道路與通往米那斯魔窟的南路交匯處，弗羅多發現了一座古老的國王坐像。它的頭已被砍掉，取而代之的是一塊刻有斜視臉的粗糙石頭，但被砍下的頭就躺在附近的草地上，頭上長滿了開著白色和金色花朵的蔓生植物。一束轉瞬即逝的陽光照亮了他的王冠——這是索倫無法征服一切的無聲信號。",
        characters: "Frodo, Sam, Gollum"
    },

    // ── The Return of the King ──
    {
        id: "dunharrow",
        name: "鄧哈羅 &u2014 洛汗大集結",
        category: 'king',
        era: "TA", year: 3019, sortKey: 7050.0309,
        px: 4005, py: 2440,
        description: "哈羅代爾 (Harrowdale) 上方陡峭懸崖上的山區避難所，可透過一條之字形小路到達，小路兩旁矗立著古老的假人雕像。洛希爾人在馳援剛鐸之前在此集結。菲林菲爾德後面是黑暗之門－死亡之路的入口，只有阿拉貢敢於進入。",
        characters: "Th\u00e9oden, \u00c9owyn, Merry, Aragorn"
    },
    {
        id: "minas-morgul",
        name: "米那斯魔窟\u2014死亡之城",
        category: 'king',
        era: "TA", year: 3019, sortKey: 7050.0310,
        px: 5033, py: 2660,
        description: "哈比人經過了死亡之城米那斯魔古爾，這裡曾經是米那斯伊希爾，現在是巫王和他的戒靈的家。當他們爬上旁邊的樓梯時，魔古爾的軍隊在巫王的率領下出發，向剛鐸發動戰爭。",
        characters: "Frodo, Sam, Gollum, the Witch-king"
    },
    {
        id: "paths-dead",
        name: "死亡之路 &u2014 鬧鬼之路",
        category: 'king',
        era: "TA", year: 3019, sortKey: 7050.0308,
        px: 3945, py: 2458,
        description: "白山下方有一條可怕的通道，連接著鄧哈羅和遠處的山谷。違背對埃熙爾杜誓言的死者們在這片黑暗中出沒。幾個世紀以來，沒有人敢進入，直到阿拉貢，作為伊熙爾杜的繼承人，與萊戈拉斯、金利和灰衣軍團一起騎馬穿越，命令死者遵循並履行他們古老的誓言。",
        characters: "Aragorn, Legolas, Gimli, the Grey Company, the Dead Men"
    },
    {
        id: "erech",
        name: "埃瑞克 &u2014 死亡之路",
        category: 'king',
        era: "TA", year: 3019, sortKey: 7050.0308,
        px: 3886, py: 2470,
        description: "阿拉貢、萊戈拉斯和金利沿著白山下的死亡之路騎行，出現在埃雷奇之石處。在那裡，阿拉貢作為埃熙爾杜的繼承人，召喚了背棄誓言的丹哈羅亡靈來履行他們古老的誓言。幽靈軍隊跟隨他向南到達佩拉吉爾，在那裡他們驚恐地壓倒了烏姆巴爾的海盜。他們的誓言得到履行，死者被釋放並永遠離開。",
        characters: "Aragorn, Legolas, Gimli, the Dead Men of Dunharrow"
    },
    {
        id: "cirith-ungol-shelob",
        name: "犀利士嚎叫 &u2014 屍羅的巢穴",
        category: 'king',
        era: "TA", year: 3019, sortKey: 7050.0312,
        px: 5082, py: 2526,
        description: "當咕嚕帶領哈比人進入巨型蜘蛛屍羅的巢穴時，他的背叛暴露了。佛羅多被蜇傷並癱瘓。山姆用加拉德瑞爾和史汀的瓶子趕走了屍羅，然後從西里斯烏戈爾的塔樓中救出了佛羅多。",
        characters: "Frodo, Sam, Gollum, Shelob"
    },
    {
        id: "tower-cirith-ungol",
        name: "奇力斯烏戈爾之塔 - 拯救山姆",
        category: 'king',
        era: "TA", year: 3019, sortKey: 7050.0314,
        px: 5120, py: 2530,
        description: "屍羅蜇傷佛羅多後，塔內的半獸人將他的屍體抬了進去。山姆相信弗羅多已經死了，於是拿走了至尊魔戒，但無意中聽到了獸人的聲音，意識到弗羅多還活著。他獨自衝進塔樓，發現駐軍因佛羅多秘銀外套的爭吵而自相殘殺。山姆歸還魔戒，兩個哈比人偽裝成半獸人逃入魔多。",
        characters: "Sam, Frodo, Shagrat, Gorbag"
    },
    {
        id: "pelargir",
        name: "佩拉吉爾 &u2014 捕獲海盜船隊",
        category: 'king',
        era: "TA", year: 3019, sortKey: 7050.0313,
        px: 4508, py: 3010,
        description: "阿拉貢帶領死者從埃雷赫向南到達古老的佩拉吉爾港口，烏姆巴爾海盜將他們的艦隊停泊在那裡。死者在恐惧中席卷了海盗，阿拉贡夺取了船只。他解除了死者的誓言，他們最終消失了。隨後，阿拉貢與來自萊本寧和拉梅東的遊騎兵一起駕駛船隻，沿著安都因河航行至佩蘭諾平原。",
        characters: "Aragorn, Legolas, Gimli, the Dead Men of Dunharrow, the Corsairs of Umbar"
    },
    {
        id: "lamedon",
        name: "拉梅登 &u2014 Angbor 集會",
        category: 'king',
        era: "TA", year: 3019, sortKey: 7050.0313,
        px: 4125, py: 2795,
        description: "剛鐸的一個山谷封地，位於白山南坡，西里爾河沿岸。阿拉貢從死亡之路中出現並在佩拉吉爾擊敗海盜後，拉梅頓領主安格博爾集結了他的部下，與阿拉貢的軍隊一起沿安都因河航行，在佩蘭諾平原之戰中解救米那斯提力斯。",
        characters: "Angbor, Aragorn"
    },
    {
        id: "linhir",
        name: "林希爾&u2014吉爾林渡口之戰",
        category: 'king',
        era: "TA", year: 3019, sortKey: 7050.03135,
        px: 4130, py: 2892,
        description: "萊本寧的一個小鎮，位於吉爾蘭河的交會處。在魔戒戰爭期間，烏姆巴爾海盜和他們的哈拉德人盟友向內陸推進，並在這裡進行了一場戰鬥，壓倒了當地的守軍。阿拉貢率領灰連和死亡軍團抵達，他們的可怕存在擊潰了敵人。阿拉貢從林希爾出發向南推進，在佩拉吉爾奪取了海盜船隊。",
        characters: "Aragorn, Legolas, Gimli, the Dead Men of Dunharrow"
    },
    {
        id: "druadan-forest",
        name: "Dr\u00faadan 森林\u2014 野人",
        category: 'king',
        era: "TA", year: 3019, sortKey: 7050.0314,
        px: 4618, py: 2531,
        description: "當通往米那斯提力斯的道路被索倫的軍隊封鎖時，Dr\u00faedain（野人）的 Gh\u00e2n-buri-Gh\u00e2n 引導洛希爾人穿過古老森林中的秘密路徑，讓他們及時到達佩蘭諾平原。為了表達謝意，阿拉貢後來將德魯法丹森林永遠授予野人。",
        characters: "Gh\u00e2n-buri-Gh\u00e2n, Th\u00e9oden, \u00c9omer, Merry"
    },
    {
        id: "minas-tirith-siege",
        name: "米那斯提力斯 &u2014 圍攻剛鐸",
        category: 'king',
        era: "TA", year: 3019, sortKey: 7050.0314,
        px: 4720, py: 2641,
        description: "索倫的軍隊圍攻白城。巫王攻破了大門。德內索爾被帕蘭特逼瘋了，試圖活活燒死法拉米爾。洛希爾人在黎明時分抵達並力挽狂瀾。",
        characters: "Gandalf, Denethor, Faramir, Pippin"
    },
    {
        id: "pelennor-fields",
        name: "佩倫諾戰場 &u2014 偉大戰役",
        category: 'king',
        era: "TA", year: 3019, sortKey: 7050.0315,
        px: 4784, py: 2638,
        description: "魔戒戰爭中最偉大的一場戰鬥。瑟奧登率領洛希爾人衝鋒，最後倒在馬下。歐溫和梅里殺死了巫王。阿拉貢在剛鐸南部增援的情況下，乘坐被俘獲的海盜船抵達扭轉局勢。",
        characters: "Th\u00e9oden, \u00c9owyn, Merry, Aragorn, the Witch-king"
    },
    {
        id: "black-gate",
        name: "黑門\u2014最後的辯論",
        category: 'king',
        era: "TA", year: 3019, sortKey: 7050.0325,
        px: 5141, py: 2272,
        description: "阿拉貢率領西方軍隊來到魔多黑門，孤注一擲，試圖將索倫之眼從弗羅多身上引開。由於寡不敵眾，他們奮力為指環持有者爭取時間。",
        characters: "Aragorn, Gandalf, Legolas, Gimli, Merry, Pippin"
    },
    {
        id: "mount-doom-end",
        name: "末日火山 &u2014 萬物的終結",
        category: 'king',
        era: "TA", year: 3019, sortKey: 7050.0325,
        px: 5419, py: 2532,
        description: "弗羅多和山姆在經歷了魔多的痛苦旅程後到達了末日裂縫。在最後一刻，弗羅多奪走了至尊魔戒，但咕嚕從手指上咬下魔戒並掉入火中，永遠摧毀了至尊魔戒和索倫。",
        characters: "Frodo, Sam, Gollum"
    },
    {
        id: "field-cormallen",
        name: "科馬倫球場 &u2014 老鷹來了",
        category: 'king',
        era: "TA", year: 3019, sortKey: 7050.04,
        px: 4799, py: 2565,
        description: "至尊魔戒被毀後，甘道夫騎著巨鷹瓜希爾從末日山的山坡上救出佛羅多和山姆。他們在伊西利安醒來，發現甘道夫在床邊。西方之主在田野之門前向哈比人致敬，阿拉貢向他們鞠躬，說道：“用極大的讚美來讚美他們！”",
        characters: "Frodo, Sam, Gandalf, Aragorn, Gwaihir"
    },
    {
        id: "coronation",
        name: "Minas Tirith \u2014 The Coronation of Elessar",
        category: 'king',
        era: "TA", year: 3019, sortKey: 7050.05,
        px: 4730, py: 2650,
        description: "阿拉貢在米那斯提力斯之前的平原上加冕為埃萊薩國王。甘道夫將白色王冠戴在頭上，阿拉貢說出了埃蘭迪爾的話：「Et E\u00e4rello Endorenna ut\u00falien。」阿爾文在城門口等著他，他們終於結婚了——長期分裂的埃爾洛斯和埃爾隆德的血統結合。",
        characters: "Aragorn, Arwen, Gandalf, Frodo, Faramir"
    },
    {
        id: "mindolluin",
        name: "明多魯因 &u2014 白樹",
        category: 'king',
        era: "TA", year: 3019, sortKey: 7050.06,
        px: 4740, py: 2665,
        description: "甘道夫帶領阿拉貢登上米那斯提力斯上方的明多魯因山坡。在高高的雪地中，他們發現了一棵白樹的幼苗，它是恩法門諾的寧洛斯的後裔，最終是最古老的樹泰爾佩瑞安的後裔。阿拉貢將它種植在噴泉庭院中，並在那裡綻放，象徵著他的王國將永垂不朽。",
        characters: "Aragorn, Gandalf"
    },
    {
        id: "bywater-scouring",
        name: "Bywater &u2014 夏爾的沖刷",
        category: 'king',
        era: "TA", year: 3019, sortKey: 7050.11,
        px: 2848, py: 1147,
        description: "回到家後，四名哈比人發現夏爾處於「夏基」和薩魯曼的暴政之下，勢力衰弱但復仇心重。梅里和皮聘喚醒了夏爾人民，在濱水之戰中，暴徒被推翻。佛羅多在袋底洞與薩魯曼對峙並表示仁慈，但格魯德瑪·沃姆舌背叛了他的主人並殺死了他。這是指環戰爭中的最後一場殺戮。",
        characters: "Frodo, Sam, Merry, Pippin, Saruman, Gr\u00edma"
    },
    {
        id: "westmarch",
        name: "威斯特瑪和紅皮書",
        category: 'king',
        era: "TA", year: 3021, sortKey: 7052.09,
        px: 2524, py: 1019,
        description: "魔戒之戰後，埃萊薩國王將遠地丘陵和塔山之間的土地授予哈比人，將夏爾向西延伸。這個地區後來成為了威斯特瑪。山姆的大女兒埃蘭諾和她的丈夫格林霍姆的法斯特雷德定居於此，擔任威斯特瑪的典獄長。維斯特瑪紅皮書——據說是《魔戒》抄襲的宇宙手稿——由他們在這片土地上的後代保存著。",
        characters: "Elanor, Fastred, Samwise Gamgee"
    }
];

// ── Event Links ──────────────────────────────────
const EVENT_LINKS = [
    // ── The Ring's Journey ──
    { from: "one-ring-forged", to: "eregion-rings", type: "cause", label: "Elves perceive Sauron's treachery" },
    { from: "one-ring-forged", to: "last-alliance", type: "cause", label: "Leads to the Last Alliance" },
    { from: "last-alliance", to: "gladden-fields", type: "sequel", label: "Isildur loses the Ring" },
    { from: "gladden-fields", to: "gollum-origin", type: "sequel", label: "Ring found by D\u00e9agol centuries later" },
    { from: "gollum-origin", to: "riddles-in-dark", type: "sequel", label: "Bilbo finds the Ring" },
    { from: "riddles-in-dark", to: "bilbo-farewell", type: "sequel", label: "Ring passes to Frodo" },
    { from: "bilbo-farewell", to: "council-elrond", type: "sequel", label: "The Quest is formed" },
    { from: "council-elrond", to: "mount-doom-end", type: "sequel", label: "The Ring is destroyed" },

    // ── Gandalf's arc ──
    { from: "dol-guldur-shadow", to: "dol-guldur-council", type: "sequel", label: "White Council drives out Sauron" },

    // ── N\u00famenor → Exile Kingdoms ──
    { from: "numenor-downfall", to: "annuminas", type: "sequel", label: "Faithful found Arnor" },
    { from: "numenor-downfall", to: "last-alliance", type: "cause", label: "Exiles confront Sauron" },

    // ── Northern Kingdom ──
    { from: "annuminas", to: "fornost-fall", type: "sequel", label: "Capital moves to Fornost, then falls" },
    { from: "carn-dum", to: "fornost-fall", type: "cause", label: "Angmar destroys Arthedain" },
    { from: "fornost-fall", to: "forochel", type: "sequel", label: "Last king flees north" },

    // ── Rohan ──
    { from: "field-celebrant", to: "edoras", type: "legacy", label: "Rohan endures for 500 years" },
    { from: "fords-isen", to: "helms-deep", type: "cause", label: "Rohan leaderless as war comes" },

    // ── Parallel events (War of the Ring) ──
    { from: "helms-deep", to: "dead-marshes", type: "parallel", label: "Simultaneous events" },
    { from: "helms-deep", to: "isengard-ents", type: "parallel", label: "Simultaneous events" },
    { from: "pelennor-fields", to: "tower-cirith-ungol", type: "parallel", label: "Simultaneous events" },
    { from: "black-gate", to: "mount-doom-end", type: "parallel", label: "Distraction enables the Ring's destruction" },

    // ── Hobbit → LOTR connections ──
    { from: "unexpected-party", to: "bilbo-farewell", type: "sequel", label: "Bilbo's later years" },
    { from: "five-armies", to: "council-elrond", type: "legacy", label: "Erebor sends envoy to Rivendell" },
    { from: "dol-guldur-council", to: "dol-guldur-shadow", type: "sequel", label: "Sauron driven out but returns to Mordor" },

    // ── Location echoes across ages ──
    { from: "khazad-dum-awakening", to: "bridge-khazad-dum", type: "location", label: "Same halls, millennia apart" },
    { from: "barad-dur-built", to: "mount-doom-end", type: "location", label: "The Dark Tower falls at last" },
    { from: "one-ring-forged", to: "mount-doom-end", type: "location", label: "Forged and destroyed in the same fire" },
    { from: "eregion-rings", to: "doors-durin", type: "location", label: "Near the West-gate of Moria" },

    // ── Breaking of the Fellowship ──
    { from: "amon-hen", to: "eaves-fangorn", type: "sequel", label: "Merry and Pippin taken to Fangorn" },
    { from: "eaves-fangorn", to: "fangorn-treebeard", type: "sequel", label: "Hobbits flee into the forest" },
    { from: "bridge-khazad-dum", to: "fangorn-white-wizard", type: "sequel", label: "Gandalf returns as the White" },
    { from: "amon-hen", to: "emyn-muil", type: "sequel", label: "Frodo and Sam go alone to Mordor" },

    // ── Scouring ──
    { from: "orthanc-saruman", to: "bywater-scouring", type: "sequel", label: "Saruman takes revenge on the Shire" },
    { from: "sarn-ford", to: "bucklebury-ferry", type: "cause", label: "Nazg\u00fbl enter the Shire" },

    // ── The Shire ──
    { from: "shire-homeland", to: "unexpected-party", type: "legacy", label: "Where the story begins" },
    { from: "bywater-scouring", to: "westmarch", type: "sequel", label: "The Shire is restored and extended" },

    // ── Dwarven heritage ──
    { from: "ered-luin", to: "khazad-dum-awakening", type: "legacy", label: "Dwarven kingdoms east and west" },
    { from: "withered-heath", to: "erebor-inside", type: "cause", label: "Smaug descends from the north" },

    // ── New marker connections ──
    { from: "framsburg", to: "field-celebrant", type: "cause", label: "Eorl rides south from Framsburg" },
    { from: "lond-daer", to: "eryn-vorn", type: "cause", label: "Deforestation drives natives into the dark wood" },
    { from: "mount-gram", to: "shire-homeland", type: "legacy", label: "Battle of Greenfields" },
    { from: "edhellond", to: "dol-amroth", type: "legacy", label: "Amroth\u2019s drowning names the city" },
    { from: "mount-gundabad", to: "five-armies", type: "cause", label: "Goblin army marches on Erebor" },
    { from: "crossings-poros", to: "pelennor-fields", type: "legacy", label: "Rohan honours the alliance again" }
];

// ── Journey Paths ──────────────────────────────
// Shared Fellowship path: Rivendell to Rauros Falls
const FELLOWSHIP_PATH = [
    [3940, 1096],  // Rivendell
    [3930, 1190],  // South from Rivendell
    [3915, 1280],  // Western foothills
    [3900, 1370],  // Hollin (Eregion)
    [3930, 1440],  // Approaching Caradhras
    [3940, 1490],  // Doors of Durin
    [3981, 1515],  // Moria
    [4026, 1516],  // Dimrill Dale
    [4214, 1609],  // Lothl\u00f3rien
    [4224, 1658, 1],  // Nimrodel
    [4261, 1661, 1],  // Nimrodel
    [4289, 1684, 1],  // Nimrodel
    [4320, 1686, 1],  // Nimrodel merges into the Anduin
    [4355, 1707, 1],  // Anduin
    [4365, 1724, 1],  // Anduin
    [4356, 1744, 1],  // Anduin
    [4396, 1747, 1],  // Anduin
    [4417, 1729, 1],  // Anduin
    [4464, 1744, 1],  // Anduin
    [4471, 1771, 1],  // Anduin
    [4465, 1788, 1],  // Anduin
    [4452, 1813, 1],  // Anduin
    [4479, 1838, 1],  // Anduin
    [4499, 1840, 1],  // Anduin
    [4531, 1829, 1],  // Anduin
    [4558, 1837, 1],  // Anduin
    [4574, 1867, 1],  // Anduin
    [4559, 1892, 1],  // Anduin
    [4533, 1929, 1],  // Anduin
    [4563, 1966, 1],  // Anduin
    [4561, 2016, 1],  // Anduin
    [4561, 2016, 1],  // Anduin
    [4512, 2088, 1],  // Anduin
    [4511, 2105],  // Argonath
    [4480, 2174],  // Amon Hen
    [4502, 2196]   // Rauros Falls
];

const JOURNEYS = {
    fellowship: {
        label: "The Fellowship",
        color: '#7b2d8e',
        points: FELLOWSHIP_PATH
    },
    bilbo: {
        label: "Bilbo's Journey",
        color: '#5b8fb9',
        points: [
            [2746, 1115],  // Bag End
            [2974, 1126],  // Brandywine Bridge
            [3254, 1139],  // Bree
            [3370, 1175],  // East Road
            [3491, 1195],  // East Road
            [3590, 1185],  // East Road
            [3681, 1154],  // Last Bridge
            [3811, 937],   // Trollshaws
            [3850, 1134],  // Ford of Bruinen
            [3922, 1096],  // Rivendell
            [4094, 1049],  // Misty Mountains
            [4319, 976],   // Carrock
            [4444, 944],   // Beorn's Hall
            [4637, 945],   // Mirkwood
            [4815, 962],   // Thranduil's Halls
            [5105, 1125],  // Lake-town
            [5161, 941],   // Erebor
            [5105, 1125],  // Lake-town (return)
            [4444, 944],   // Beorn's Hall
            [3922, 1096],  // Rivendell
            [3681, 1154],  // Last Bridge (return)
            [3590, 1200],  // East Road
            [3491, 1210],  // East Road
            [3370, 1190],  // East Road
            [3254, 1139],  // Bree (return)
            [2974, 1126],  // Brandywine Bridge
            [2746, 1115],  // Bag End (home)
            [2974, 1126],  // Brandywine Bridge (retirement)
            [3681, 1154],  // Last Bridge
            [3922, 1096],  // Rivendell (retires here)
            [3681, 1154],  // Last Bridge (Grey Havens)
            [2974, 1126],  // Brandywine Bridge
            [2266, 1150]   // Grey Havens
        ]
    },
    frodo: {
        label: "Frodo's Journey",
        color: '#c0392b',
        points: [
            [2764, 1115],  // Bag End
            [2988, 1178],  // Bucklebury Ferry
            [3034, 1204],  // Crickhollow
            [3098, 1178],  // Old Forest
            [3185, 1144],  // Barrow-downs
            [3254, 1139],  // Bree
            [3367, 1084],  // Midgewater Marshes
            [3484, 1097],  // Weathertop
            [3681, 1154],  // Last Bridge
            [3850, 1134],  // Ford of Bruinen
            ...FELLOWSHIP_PATH,
            [4623, 2147],  // Emyn Muil
            [4894, 2150],  // Dead Marshes
            [5050, 2280],  // North Ithilien
            [5029, 2491],  // Henneth Ann\u00fbn
            [4927, 2678],  // Cross-roads
            [5033, 2660],  // Minas Morgul
            [5082, 2526],  // Cirith Ungol
            [5120, 2530],  // Tower of Cirith Ungol
            [5419, 2532],  // Mount Doom
            [4799, 2565],  // Field of Cormallen
            [4720, 2641],  // Minas Tirith
            [3969, 2344],  // Edoras
            [3849, 2295],  // en route to Helm's Deep
            [3760, 2277],  // Helm's Deep
            [3775, 2039],  // Isengard
            [3742, 2135],  // Gap of Rohan
            [3550, 1850],  // Dunland
            [3500, 1500],  // Eriador
            [3940, 1096],  // Rivendell
            [3850, 1134],  // Ford of Bruinen
            [3681, 1154],  // Last Bridge
            [3254, 1139],  // Bree
            [2974, 1126],  // Brandywine Bridge
            [2848, 1147],  // Bywater
            [2764, 1115],  // Bag End
            [2974, 1126],  // Brandywine Bridge
            [2266, 1150]   // Grey Havens
        ]
    },
    aragorn: {
        label: "Aragorn's Journey",
        color: '#6a9f5b',
        points: [
            [3254, 1139],  // Bree
            [3367, 1084],  // Midgewater Marshes
            [3484, 1097],  // Weathertop
            [3681, 1154],  // Last Bridge
            [3850, 1134],  // Ford of Bruinen
            ...FELLOWSHIP_PATH,
            [4017, 2086],  // Eaves of Fangorn
            [4004, 2000],  // Fangorn (White Wizard)
            [3969, 2344],  // Edoras
            [3849, 2295],  // en route to Helm's Deep
            [3760, 2277],  // Helm's Deep
            [3775, 2039],  // Isengard
            [3969, 2344],  // Edoras (return)
            [4005, 2440],  // Dunharrow
            [3886, 2470],  // Erech
            [3779, 2638],  // Morthond Vale
            [3890, 2767],  // Calembel
            [4125, 2795],  // Lamedon
            [4130, 2892],  // Linhir
            [4508, 3010],  // Pelargir
            [4784, 2638],  // Pelennor Fields
            [4720, 2641],  // Minas Tirith
            [4939, 2329],  // Ithilien
            [5051, 2250],  // Dagorlad
            [5141, 2272],  // Black Gate
            [5051, 2250],  // Dagorlad (return)
            [4939, 2329],  // Ithilien (return)
            [4799, 2565],  // Field of Cormallen
            [4720, 2641]   // Minas Tirith (coronation)
        ]
    },
    boromir: {
        label: "Boromir's Journey",
        color: '#8e6b3e',
        points: [
            [4720, 2641],  // Minas Tirith
            [4400, 2550],  // Anorien
            [4100, 2400],  // Rohan
            [3742, 2135],  // Gap of Rohan
            [3574, 2022],  // Dunland
            [3550, 1850],  // Enedwaith
            [3372, 1578],  // Tharbad
            [3500, 1350],  // Lone-lands
            [3681, 1154],  // Last Bridge
            [3850, 1134],  // Ford of Bruinen
            ...FELLOWSHIP_PATH
        ]
    },
    merry_pippin: {
        label: "Merry & Pippin's Journey",
        color: '#d4813a',
        points: [
            [2764, 1115],  // Bag End
            [2988, 1178],  // Bucklebury Ferry
            [3034, 1204],  // Crickhollow
            [3098, 1178],  // Old Forest
            [3185, 1144],  // Barrow-downs
            [3254, 1139],  // Bree
            [3367, 1084],  // Midgewater Marshes
            [3484, 1097],  // Weathertop
            [3681, 1154],  // Last Bridge
            [3850, 1134],  // Ford of Bruinen
            ...FELLOWSHIP_PATH.slice(0, -1),  // Up to Amon Hen (excludes Rauros Falls)
            [4017, 2086],  // Eaves of Fangorn
            [4043, 1918],  // Fangorn
            [3775, 2039]   // Isengard
        ],
        branches: {
            pippin: [
                [3775, 2039],  // Isengard
                [3742, 2135],  // Gap of Rohan
                [3969, 2380],  // Edoras
                [4400, 2550],  // Anorien
                [4720, 2641],  // Minas Tirith
                [4784, 2638],  // Pelennor Fields
                [4939, 2329],  // Ithilien
                [5051, 2250],  // Dagorlad
                [5141, 2272],  // Black Gate
                [5051, 2250],  // Dagorlad (return)
                [4939, 2329],  // Ithilien (return)
                [4799, 2565],  // Field of Cormallen
                [4720, 2641],  // Minas Tirith (coronation)
                [3969, 2344],  // Edoras
                [3760, 2277],  // Helm's Deep
                [3775, 2039],  // Isengard
                [3742, 2135],  // Gap of Rohan
                [3550, 1850],  // Dunland
                [3500, 1500],  // Eriador
                [3940, 1096],  // Rivendell
                [3850, 1134],  // Ford of Bruinen
                [3681, 1154],  // Last Bridge
                [3254, 1139],  // Bree
                [2974, 1126],  // Brandywine Bridge
                [2848, 1147],  // Bywater
                [2764, 1115]   // Bag End
            ],
            merry: {
                color: '#c4a24a',
                points: [
                    [3775, 2039],  // Isengard
                    [3969, 2344],  // Edoras
                    [4005, 2440],  // Dunharrow
                    [4618, 2531],  // Dr\u00faadan Forest
                    [4784, 2638],  // Pelennor Fields
                    [4939, 2329],  // Ithilien
                    [5051, 2250],  // Dagorlad
                    [5141, 2272],  // Black Gate
                    [5051, 2250],  // Dagorlad (return)
                    [4939, 2329],  // Ithilien (return)
                    [4799, 2565],  // Field of Cormallen
                    [4720, 2641],  // Minas Tirith (coronation)
                    [3969, 2344],  // Edoras
                    [3760, 2277],  // Helm's Deep
                    [3775, 2039],  // Isengard
                    [3742, 2135],  // Gap of Rohan
                    [3550, 1850],  // Dunland
                    [3500, 1500],  // Eriador
                    [3940, 1096],  // Rivendell
                    [3850, 1134],  // Ford of Bruinen
                    [3681, 1154],  // Last Bridge
                    [3254, 1139],  // Bree
                    [2974, 1126],  // Brandywine Bridge
                    [2848, 1147],  // Bywater
                    [2764, 1115]   // Bag End
                ]
            }
        }
    },
    gollum: {
        label: "Gollum's Journey",
        color: '#708090',
        points: [
            [4434, 1380],  // River-folk
            [4434, 1380],  // Gladden Fields
            [4094, 1049],  // Misty Mountains
            [4400, 1360],  // Gladden Fields
            [4463, 1801],  // Anduin valley
            [4623, 2147],  // Emyn Muil
            [4894, 2150],  // Dead Marshes
            [5141, 2272],  // Black Gate
            [4894, 2150],  // Dead Marshes
            [4463, 1801],  // Anduin valley
            [3981, 1515],  // Moria
            [4026, 1516],  // Dimrill Dale
            [4300, 1609],  // East of Lothl\u00f3rien
            [4463, 1801],  // Anduin
            [4569, 1985],  // Anduin
            [4511, 2105],  // Argonath area
            [4623, 2147],  // Emyn Muil
            [4894, 2150],  // Dead Marshes
            [5141, 2272],  // Black Gate
            [5029, 2491],  // Henneth Ann\u00fbn
            [5033, 2660],  // Minas Morgul
            [5082, 2526],  // Cirith Ungol
            [5120, 2530],  // Tower of Cirith Ungol
            [5419, 2532]   // Mount Doom
        ]
    },
    gandalf_hobbit: {
        label: "Gandalf's Journey (Hobbit)",
        color: '#00bcd4',
        points: [
            [2746, 1115],  // Bag End
            [2974, 1126],  // Brandywine Bridge
            [3254, 1139],  // Bree
            [3370, 1175],  // East Road
            [3491, 1195],  // East Road
            [3590, 1185],  // East Road
            [3681, 1154],  // Last Bridge
            [3811, 937],   // Trollshaws
            [3850, 1134],  // Ford of Bruinen
            [3922, 1096],  // Rivendell
            [4094, 1049],  // Misty Mountains
            [4319, 976],   // Carrock
            [4444, 944],   // Beorn's Hall
            [4444, 944]    // Leaves company
        ],
        branches: {
            dol_guldur: [
                [4444, 944],   // Leaves company
                [4672, 1578],  // Dol Guldur
                [4521, 1430],  // Northwest out of Mirkwood
                [4358, 917],   // Anduin vales
                [4324, 777],   // Upper Anduin
                [4467, 676],   // North of Mirkwood
                [4973, 688],   // Grey Mountains foothills
                [5114, 890],   // Approach to Erebor
                [5161, 941]    // Erebor
            ]
        }
    },
    gandalf_lotr: {
        label: "Gandalf's Journey (LOTR)",
        color: '#00bcd4',
        points: [
            [2764, 1115],  // Bag End
            [4720, 2641],  // Minas Tirith
            [2764, 1115],  // Bag End
            [3775, 2039],  // Isengard
            [3969, 2344],  // Edoras
            [3484, 1097],  // Weathertop
            [3681, 1154],  // Last Bridge
            [3940, 1096],  // Rivendell
            [3930, 1190],  // South from Rivendell
            [3915, 1280],  // Western foothills
            [3900, 1370],  // Hollin
            [3930, 1440],  // Approaching Caradhras
            [3981, 1515],  // Moria (falls)
            [4004, 2000],  // Fangorn (returns as the White)
            [3969, 2344],  // Edoras
            [3849, 2295],  // en route to Helm's Deep
            [3760, 2277],  // Helm's Deep
            [3700, 2104],  // Fords of Isen (rallies Erkenbrand)
            [3760, 2277],  // Helm's Deep (returns at dawn)
            [3775, 2039],  // Isengard
            [3742, 2135],  // Gap of Rohan
            [3969, 2380],  // Edoras
            [4400, 2550],  // Anorien
            [4720, 2641],  // Minas Tirith
            [4784, 2638],  // Pelennor Fields
            [4939, 2329],  // Ithilien
            [5051, 2250],  // Dagorlad
            [5141, 2272],  // Black Gate
            [5051, 2250],  // Dagorlad (return)
            [4939, 2329],  // Ithilien (return)
            [4799, 2565],  // Field of Cormallen
            [4720, 2641]   // Minas Tirith (coronation)
        ]
    }
};
