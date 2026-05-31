// ═══════════════════════════════════════════════════════
// SCENE ART — SVG 場景插圖（托爾金鋼筆墨水畫風）
// 每個函數回傳 SVG 字串，尺寸 440x160
// ═══════════════════════════════════════════════════════

const SCENE_SVG = {
  // ── 袋底洞 ──
  'bag-end': () => `<svg viewBox="0 0 440 160" xmlns="http://www.w3.org/2000/svg">
    <defs><filter id="paper"><feTurbulence baseFrequency="0.04" numOctaves="4" result="n"/><feColorMatrix type="saturate" values="0" in="n" result="g"/><feBlend in="SourceGraphic" in2="g" mode="multiply"/></filter></defs>
    <rect width="440" height="160" fill="#f4e8c1" filter="url(#paper)"/>
    <g stroke="#3d2b1a" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <!-- 地面 -->
      <path d="M0,130 Q110,125 220,128 Q330,131 440,126" stroke-width="1.5"/>
      <path d="M0,135 Q110,132 220,134 Q330,136 440,133" stroke-width="0.8" opacity="0.5"/>
      <!-- 山丘 -->
      <path d="M80,130 Q120,60 220,50 Q320,60 360,130" stroke-width="2" fill="#e8d5a3"/>
      <path d="M80,130 Q120,60 220,50 Q320,60 360,130" stroke-width="0.5" stroke-dasharray="2,3" opacity="0.3"/>
      <!-- 圓門 -->
      <ellipse cx="220" cy="95" rx="28" ry="35" stroke-width="2.5" fill="#5a4a2a"/>
      <ellipse cx="220" cy="95" rx="24" ry="31" stroke-width="1" fill="#3d2b1a"/>
      <!-- 門把手 -->
      <circle cx="240" cy="98" r="3" fill="#c9a435" stroke="#3d2b1a" stroke-width="1"/>
      <!-- 窗戶 -->
      <rect x="170" y="80" width="20" height="16" rx="2" stroke-width="1.5" fill="#c9a435" opacity="0.6"/>
      <rect x="270" y="80" width="20" height="16" rx="2" stroke-width="1.5" fill="#c9a435" opacity="0.6"/>
      <line x1="180" y1="80" x2="180" y2="96" stroke-width="0.8"/>
      <line x1="280" y1="80" x2="280" y2="96" stroke-width="0.8"/>
      <!-- 煙囪 -->
      <rect x="280" y="42" width="14" height="20" stroke-width="1.5" fill="#8b7355"/>
      <path d="M284,42 Q282,30 286,22 Q290,14 288,8" stroke-width="1" opacity="0.4" fill="none"/>
      <path d="M290,42 Q292,28 288,18" stroke-width="0.8" opacity="0.3" fill="none"/>
      <!-- 花園小路 -->
      <path d="M220,130 Q215,140 210,150 Q205,158 200,160" stroke-width="1" opacity="0.5"/>
      <path d="M220,130 Q225,140 230,150 Q235,158 240,160" stroke-width="1" opacity="0.5"/>
      <!-- 花朵 -->
      <g fill="#6a9f5b" stroke="#3d2b1a" stroke-width="0.5">
        <circle cx="150" cy="125" r="3"/><circle cx="160" cy="122" r="2.5"/>
        <circle cx="290" cy="124" r="3"/><circle cx="300" cy="121" r="2.5"/>
      </g>
      <!-- 門牌 -->
      <rect x="195" y="62" width="50" height="12" rx="2" fill="#e8d5a3" stroke-width="1"/>
      <text x="220" y="72" text-anchor="middle" font-size="6" fill="#3d2b1a" font-family="serif">BAGGINS</text>
    </g>
  </svg>`,

  // ── 甘道夫來訪 ──
  'gandalf': () => `<svg viewBox="0 0 440 160" xmlns="http://www.w3.org/2000/svg">
    <defs><filter id="paper2"><feTurbulence baseFrequency="0.04" numOctaves="4" result="n"/><feColorMatrix type="saturate" values="0" in="n" result="g"/><feBlend in="SourceGraphic" in2="g" mode="multiply"/></filter></defs>
    <rect width="440" height="160" fill="#f4e8c1" filter="url(#paper2)"/>
    <g stroke="#3d2b1a" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path d="M0,135 Q220,130 440,133" stroke-width="1.5"/>
      <!-- 甘道夫身影 -->
      <path d="M200,130 L200,70" stroke-width="2"/><!-- 身體 -->
      <path d="M190,130 L200,130 L210,130" stroke-width="2"/><!-- 袍子下擺 -->
      <path d="M190,130 Q190,100 195,80 Q198,70 200,70 Q202,70 205,80 Q210,100 210,130" stroke-width="1.5" fill="#555"/>
      <!-- 頭 -->
      <circle cx="200" cy="62" r="10" stroke-width="1.5" fill="#e8d5a3"/>
      <!-- 鬍子 -->
      <path d="M194,68 Q192,80 190,90 Q188,95 186,98" stroke-width="1.2" fill="none"/>
      <path d="M206,68 Q208,80 210,90 Q212,95 214,98" stroke-width="1.2" fill="none"/>
      <path d="M196,70 Q198,82 200,92" stroke-width="0.8" fill="none"/>
      <!-- 帽子 -->
      <path d="M185,58 Q190,55 200,52 Q210,55 215,58" stroke-width="1.5" fill="#555"/>
      <path d="M190,55 Q200,35 210,55" stroke-width="1.5" fill="#555"/>
      <!-- 手杖 -->
      <path d="M215,80 L235,130" stroke-width="2.5" fill="none"/>
      <circle cx="215" cy="78" r="3" fill="#c9a435" stroke-width="1"/>
      <!-- 星光 -->
      <g fill="#c9a435" opacity="0.6">
        <circle cx="100" cy="25" r="1.5"/><circle cx="340" cy="20" r="1"/>
        <circle cx="180" cy="15" r="1.2"/><circle cx="300" cy="30" r="1"/>
      </g>
      <!-- 月亮 -->
      <path d="M360,25 Q355,15 365,10 Q370,20 360,25" fill="#c9a435" opacity="0.4" stroke="none"/>
    </g>
  </svg>`,

  // ── 巨魔 ──
  'trolls': () => `<svg viewBox="0 0 440 160" xmlns="http://www.w3.org/2000/svg">
    <defs><filter id="paper3"><feTurbulence baseFrequency="0.04" numOctaves="4" result="n"/><feColorMatrix type="saturate" values="0" in="n" result="g"/><feBlend in="SourceGraphic" in2="g" mode="multiply"/></filter></defs>
    <rect width="440" height="160" fill="#f4e8c1" filter="url(#paper3)"/>
    <g stroke="#3d2b1a" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path d="M0,140 Q220,135 440,138" stroke-width="1.5"/>
      <!-- 營火 -->
      <g transform="translate(220,125)">
        <path d="M-8,0 L-3,-15 L0,-20 L3,-15 L8,0" fill="#b85c38" stroke-width="1" opacity="0.8"/>
        <path d="M-4,0 L-1,-10 L0,-14 L1,-10 L4,0" fill="#c9a435" stroke-width="0.5"/>
        <path d="M-12,0 L-8,-5 M12,0 L8,-5" stroke-width="1.5" fill="#3d2b1a"/><!-- 木柴 -->
      </g>
      <!-- 巨魔 1 (左) -->
      <g transform="translate(120,0)">
        <path d="M0,140 L0,80 Q-5,60 0,50 Q5,40 0,35" stroke-width="3" fill="#8b7355"/>
        <ellipse cx="0" cy="30" rx="12" ry="10" stroke-width="2" fill="#8b7355"/>
        <circle cx="-4" cy="28" r="2" fill="#3d2b1a"/><circle cx="4" cy="28" r="2" fill="#3d2b1a"/>
        <path d="M-6,34 L6,34" stroke-width="1.5"/>
        <path d="M-15,80 L-25,100" stroke-width="3"/><!-- 手臂 -->
        <path d="M15,80 L25,100" stroke-width="3"/>
      </g>
      <!-- 巨魔 2 (中) -->
      <g transform="translate(220,0)">
        <path d="M0,135 L0,75 Q-5,55 0,45 Q5,35 0,30" stroke-width="3.5" fill="#7a6545"/>
        <ellipse cx="0" cy="25" rx="14" ry="11" stroke-width="2" fill="#7a6545"/>
        <circle cx="-5" cy="23" r="2.5" fill="#3d2b1a"/><circle cx="5" cy="23" r="2.5" fill="#3d2b1a"/>
        <path d="M-8,30 Q0,34 8,30" stroke-width="1.5"/>
      </g>
      <!-- 巨魔 3 (右) -->
      <g transform="translate(320,0)">
        <path d="M0,140 L0,80 Q-5,60 0,50 Q5,40 0,35" stroke-width="3" fill="#9a8565"/>
        <ellipse cx="0" cy="30" rx="12" ry="10" stroke-width="2" fill="#9a8565"/>
        <circle cx="-4" cy="28" r="2" fill="#3d2b1a"/><circle cx="4" cy="28" r="2" fill="#3d2b1a"/>
        <path d="M-6,34 Q0,38 6,34" stroke-width="1.5"/>
        <path d="M15,80 L30,95 L28,110" stroke-width="3"/><!-- 手臂拿東西 -->
      </g>
      <!-- 樹木剪影 -->
      <g opacity="0.3">
        <path d="M30,140 L30,60 M30,80 L15,70 M30,70 L45,60" stroke-width="2"/>
        <path d="M410,140 L410,55 M410,75 L395,65 M410,65 L425,55" stroke-width="2"/>
      </g>
    </g>
  </svg>`,

  // ── 瑞文戴爾 ──
  'rivendell': () => `<svg viewBox="0 0 440 160" xmlns="http://www.w3.org/2000/svg">
    <defs><filter id="paper4"><feTurbulence baseFrequency="0.04" numOctaves="4" result="n"/><feColorMatrix type="saturate" values="0" in="n" result="g"/><feBlend in="SourceGraphic" in2="g" mode="multiply"/></filter></defs>
    <rect width="440" height="160" fill="#f4e8c1" filter="url(#paper4)"/>
    <g stroke="#3d2b1a" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <!-- 山谷 -->
      <path d="M0,140 Q50,130 100,135 Q150,125 220,120 Q290,125 340,130 Q390,135 440,140" stroke-width="1.5"/>
      <!-- 瀑布 -->
      <path d="M180,40 L180,120" stroke-width="2" opacity="0.3"/>
      <path d="M185,45 L185,118" stroke-width="1" opacity="0.2"/>
      <path d="M175,50 L175,115" stroke-width="1" opacity="0.2"/>
      <!-- 精靈建築 -->
      <g fill="#e8d5a3" stroke-width="1.5">
        <path d="M250,120 L250,80 L280,70 L310,80 L310,120"/><!-- 主殿 -->
        <path d="M240,120 L240,90 L250,80"/><!-- 左翼 -->
        <path d="M320,120 L320,90 L310,80"/><!-- 右翼 -->
        <!-- 尖塔 -->
        <path d="M280,70 L280,45 L275,50 M280,45 L285,50" stroke-width="1"/>
        <path d="M260,75 L260,55 L256,58 M260,55 L264,58" stroke-width="0.8"/>
        <path d="M300,75 L300,55 L296,58 M300,55 L304,58" stroke-width="0.8"/>
      </g>
      <!-- 拱橋 -->
      <path d="M200,120 Q220,105 240,120" stroke-width="1.5" fill="none"/>
      <!-- 樹木 -->
      <g fill="#6a9f5b" stroke="#3d2b1a" stroke-width="0.8" opacity="0.5">
        <path d="M100,135 L100,90 M100,100 L85,90 M100,95 L115,85"/>
        <circle cx="100" cy="85" r="12"/>
        <path d="M370,130 L370,85 M370,95 L355,85 M370,90 L385,80"/>
        <circle cx="370" cy="80" r="12"/>
      </g>
      <!-- 月亮 -->
      <circle cx="380" cy="25" r="12" fill="none" stroke-width="1" opacity="0.4"/>
      <circle cx="385" cy="22" r="10" fill="#f4e8c1" stroke="none"/>
    </g>
  </svg>`,

  // ── 咕嚕的地底湖 ──
  'gollum': () => `<svg viewBox="0 0 440 160" xmlns="http://www.w3.org/2000/svg">
    <rect width="440" height="160" fill="#1a1510"/>
    <g stroke="#5a4a2a" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <!-- 洞穴頂部 -->
      <path d="M0,0 Q100,40 220,35 Q340,30 440,0" stroke-width="2" fill="#2a1f10"/>
      <!-- 地下湖 -->
      <path d="M0,120 Q110,110 220,115 Q330,120 440,115 L440,160 L0,160 Z" fill="#1a2535" stroke="none"/>
      <path d="M0,120 Q110,110 220,115 Q330,120 440,115" stroke-width="1" opacity="0.5"/>
      <!-- 水面反光 -->
      <g opacity="0.2" stroke="#5b8fb9" stroke-width="0.5">
        <path d="M100,125 Q150,122 200,126"/><path d="M250,128 Q300,125 350,129"/>
      </g>
      <!-- 咕嚕 -->
      <g transform="translate(320,75)">
        <ellipse cx="0" cy="0" rx="5" ry="8" stroke-width="1.5" fill="#3d3520"/><!-- 身體 -->
        <circle cx="0" cy="-12" r="7" stroke-width="1.5" fill="#3d3520"/><!-- 頭 -->
        <circle cx="-3" cy="-14" r="2.5" fill="#c9a435" stroke="none"/><!-- 眼睛 -->
        <circle cx="3" cy="-14" r="2.5" fill="#c9a435" stroke="none"/>
        <circle cx="-3" cy="-14" r="1" fill="#1a1510" stroke="none"/>
        <circle cx="3" cy="-14" r="1" fill="#1a1510" stroke="none"/>
        <path d="M-3,-8 Q0,-6 3,-8" stroke-width="0.8"/><!-- 嘴 -->
        <path d="M-5,5 L-10,15" stroke-width="1.2"/><!-- 手臂 -->
        <path d="M5,5 L10,15" stroke-width="1.2"/>
      </g>
      <!-- 鐘乳石 -->
      <g stroke="#5a4a2a" fill="#3d2b1a" opacity="0.6">
        <path d="M80,0 L82,25 L78,25 Z" stroke-width="0.8"/>
        <path d="M150,5 L152,30 L148,30 Z" stroke-width="0.8"/>
        <path d="M300,0 L302,20 L298,20 Z" stroke-width="0.8"/>
      </g>
      <!-- 魔戒微光 -->
      <circle cx="220" cy="100" r="4" fill="none" stroke="#c9a435" stroke-width="1" opacity="0.6"/>
      <circle cx="220" cy="100" r="8" fill="none" stroke="#c9a435" stroke-width="0.5" opacity="0.2"/>
    </g>
  </svg>`,

  // ── 黑森林蜘蛛 ──
  'spider': () => `<svg viewBox="0 0 440 160" xmlns="http://www.w3.org/2000/svg">
    <defs><filter id="paper6"><feTurbulence baseFrequency="0.04" numOctaves="4" result="n"/><feColorMatrix type="saturate" values="0" in="n" result="g"/><feBlend in="SourceGraphic" in2="g" mode="multiply"/></filter></defs>
    <rect width="440" height="160" fill="#1a2510" filter="url(#paper6)"/>
    <g stroke="#3d5a2a" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <!-- 樹幹 -->
      <path d="M60,0 Q65,80 55,160" stroke-width="4" stroke="#2a1f10"/>
      <path d="M380,0 Q375,80 385,160" stroke-width="4" stroke="#2a1f10"/>
      <!-- 蜘蛛網 -->
      <g stroke="#8a7a5a" stroke-width="0.5" opacity="0.4">
        <path d="M60,30 Q220,20 380,35"/>
        <path d="M60,50 Q200,40 380,55"/>
        <path d="M140,20 Q145,60 140,80"/>
        <path d="M280,25 Q275,65 280,85"/>
        <path d="M200,15 Q210,50 200,75"/>
      </g>
      <!-- 大蜘蛛 -->
      <g transform="translate(220,55)">
        <ellipse cx="0" cy="0" rx="15" ry="12" stroke-width="2" fill="#2a2a1a"/><!-- 身體 -->
        <circle cx="0" cy="-14" r="8" stroke-width="1.5" fill="#2a2a1a"/><!-- 頭 -->
        <!-- 眼睛 -->
        <circle cx="-4" cy="-16" r="2" fill="#b85c38"/><circle cx="4" cy="-16" r="2" fill="#b85c38"/>
        <circle cx="-6" cy="-13" r="1.5" fill="#b85c38" opacity="0.7"/>
        <circle cx="6" cy="-13" r="1.5" fill="#b85c38" opacity="0.7"/>
        <!-- 腿 -->
        <path d="M-15,-5 Q-30,-20 -35,-30" stroke-width="1.5"/>
        <path d="M-15,0 Q-32,-5 -38,-10" stroke-width="1.5"/>
        <path d="M-15,5 Q-30,10 -35,8" stroke-width="1.5"/>
        <path d="M-15,8 Q-28,20 -32,25" stroke-width="1.5"/>
        <path d="M15,-5 Q30,-20 35,-30" stroke-width="1.5"/>
        <path d="M15,0 Q32,-5 38,-10" stroke-width="1.5"/>
        <path d="M15,5 Q30,10 35,8" stroke-width="1.5"/>
        <path d="M15,8 Q28,20 32,25" stroke-width="1.5"/>
      </g>
      <!-- 藍光（刺針劍） -->
      <circle cx="330" cy="100" r="3" fill="#5b8fb9" opacity="0.8"/>
      <circle cx="330" cy="100" r="8" fill="#5b8fb9" opacity="0.15"/>
      <circle cx="330" cy="100" r="15" fill="#5b8fb9" opacity="0.05"/>
    </g>
  </svg>`,

  // ── 史矛革 ──
  'smaug': () => `<svg viewBox="0 0 440 160" xmlns="http://www.w3.org/2000/svg">
    <rect width="440" height="160" fill="#1a0f05"/>
    <g stroke="#5a3a1a" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <!-- 金山 -->
      <path d="M0,160 Q50,120 100,130 Q150,100 200,110 Q250,90 300,105 Q350,95 400,110 Q420,120 440,115 L440,160 Z" fill="#8b7355" opacity="0.4"/>
      <g stroke="#c9a435" stroke-width="0.5" opacity="0.3">
        <circle cx="120" cy="125" r="2"/><circle cx="200" cy="105" r="2.5"/>
        <circle cx="280" cy="100" r="2"/><circle cx="350" cy="108" r="2"/>
      </g>
      <!-- 史矛革龍身 -->
      <path d="M100,100 Q150,60 220,50 Q290,40 350,55 Q380,65 400,80" stroke-width="3" fill="#3d1a0a" stroke="#8b3a1a"/>
      <!-- 龍頭 -->
      <path d="M400,80 Q420,70 430,60 Q425,65 435,55" stroke-width="2" fill="#3d1a0a" stroke="#8b3a1a"/>
      <!-- 眼睛 -->
      <circle cx="425" cy="62" r="3" fill="#c9a435"/>
      <circle cx="425" cy="62" r="1.5" fill="#b85c38"/>
      <!-- 翅膀 -->
      <path d="M200,50 Q150,10 100,15 Q130,25 150,30 Q170,20 180,25 Q190,15 200,30" stroke-width="1.5" fill="#3d1a0a" stroke="#8b3a1a" opacity="0.7"/>
      <!-- 火焰 -->
      <path d="M430,60 Q440,50 445,40 Q442,45 448,35" stroke-width="2" fill="#b85c38" stroke="#c9a435" opacity="0.6"/>
      <path d="M428,65 Q438,58 443,48" stroke-width="1" fill="#c9a435" stroke="none" opacity="0.4"/>
      <!-- 鱗片紋理 -->
      <g stroke="#5a3a1a" stroke-width="0.5" opacity="0.4">
        <path d="M180,55 Q185,50 190,55"/><path d="M220,48 Q225,43 230,48"/>
        <path d="M260,45 Q265,40 270,45"/><path d="M300,50 Q305,45 310,50"/>
        <path d="M340,58 Q345,53 350,58"/>
      </g>
    </g>
  </svg>`,

  // ── 五軍之戰 ──
  'battle': () => `<svg viewBox="0 0 440 160" xmlns="http://www.w3.org/2000/svg">
    <defs><filter id="paper8"><feTurbulence baseFrequency="0.04" numOctaves="4" result="n"/><feColorMatrix type="saturate" values="0" in="n" result="g"/><feBlend in="SourceGraphic" in2="g" mode="multiply"/></filter></defs>
    <rect width="440" height="160" fill="#f4e8c1" filter="url(#paper8)"/>
    <g stroke="#3d2b1a" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <!-- 山坡 -->
      <path d="M0,140 Q110,120 220,110 Q330,100 440,95" stroke-width="1.5"/>
      <!-- 孤山輪廓 -->
      <path d="M280,95 Q320,30 380,10 Q400,40 440,95" stroke-width="1.5" fill="#8b7355" opacity="0.3"/>
      <!-- 戰士們 (矮人) -->
      <g fill="#5a4a2a">
        <path d="M80,138 L80,120 M75,138 L85,138" stroke-width="2"/>
        <circle cx="80" cy="116" r="4" stroke-width="1"/>
        <path d="M85,122 L92,128" stroke-width="1.5"/><!-- 劍 -->
        <path d="M120,136 L120,118 M115,136 L125,136" stroke-width="2"/>
        <circle cx="120" cy="114" r="4" stroke-width="1"/>
        <path d="M160,134 L160,116 M155,134 L165,134" stroke-width="2"/>
        <circle cx="160" cy="112" r="4" stroke-width="1"/>
      </g>
      <!-- 戰士們 (精靈) -->
      <g fill="#6a9f5b" stroke="#3d2b1a">
        <path d="M300,108 L300,90 M295,108 L305,108" stroke-width="1.5"/>
        <circle cx="300" cy="86" r="3.5" stroke-width="1"/>
        <path d="M305,92 L315,85" stroke-width="1"/><!-- 弓 -->
        <path d="M340,105 L340,88 M335,105 L345,105" stroke-width="1.5"/>
        <circle cx="340" cy="84" r="3.5" stroke-width="1"/>
      </g>
      <!-- 半獸人 (右邊) -->
      <g fill="#2a2a2a" stroke="#3d2b1a">
        <path d="M380,98 L380,80 M375,98 L385,98" stroke-width="2"/>
        <circle cx="380" cy="76" r="4" stroke-width="1"/>
        <path d="M400,96 L400,78 M395,96 L405,96" stroke-width="2"/>
        <circle cx="400" cy="74" r="4" stroke-width="1"/>
        <path d="M420,94 L420,76 M415,94 L425,94" stroke-width="2"/>
        <circle cx="420" cy="72" r="4" stroke-width="1"/>
      </g>
      <!-- 巨鷹 -->
      <g transform="translate(200,25)" stroke-width="1.5" fill="#8b7355" opacity="0.6">
        <path d="M0,0 Q-25,-15 -45,-5 Q-25,-5 0,5 Q25,-5 45,-5 Q25,-15 0,0"/>
      </g>
      <!-- 箭矢 -->
      <g stroke-width="1" opacity="0.4">
        <path d="M250,80 L270,70"/><path d="M230,90 L250,80"/><path d="M280,85 L300,75"/>
      </g>
    </g>
  </svg>`,

  // ── 歸鄉 ──
  'homecoming': () => `<svg viewBox="0 0 440 160" xmlns="http://www.w3.org/2000/svg">
    <defs><filter id="paper9"><feTurbulence baseFrequency="0.04" numOctaves="4" result="n"/><feColorMatrix type="saturate" values="0" in="n" result="g"/><feBlend in="SourceGraphic" in2="g" mode="multiply"/></filter></defs>
    <rect width="440" height="160" fill="#f4e8c1" filter="url(#paper9)"/>
    <g stroke="#3d2b1a" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <!-- 地面 -->
      <path d="M0,130 Q220,125 440,128" stroke-width="1.5"/>
      <!-- 夕陽 -->
      <circle cx="350" cy="40" r="25" fill="#c9a435" opacity="0.2" stroke="none"/>
      <circle cx="350" cy="40" r="18" fill="#c9a435" opacity="0.3" stroke="none"/>
      <circle cx="350" cy="40" r="12" fill="#c9a435" opacity="0.4" stroke="none"/>
      <!-- 袋底洞遠景 -->
      <path d="M100,130 Q140,80 220,75 Q300,80 340,130" stroke-width="1.5" fill="#e8d5a3"/>
      <ellipse cx="220" cy="105" rx="15" ry="20" stroke-width="1.5" fill="#5a4a2a"/>
      <ellipse cx="220" cy="105" rx="12" ry="17" stroke-width="0.8" fill="#3d2b1a"/>
      <!-- 比爾博坐著 -->
      <g transform="translate(180,110)">
        <path d="M0,15 L0,0 Q-3,-5 0,-10 Q3,-5 0,0" stroke-width="1.5" fill="#e8d5a3"/><!-- 身體 -->
        <circle cx="0" cy="-15" r="6" stroke-width="1.5" fill="#e8d5a3"/><!-- 頭 -->
        <path d="M-8,15 L8,15" stroke-width="1.5"/><!-- 腳 -->
        <path d="M5,2 L12,8" stroke-width="1.5"/><!-- 手臂/菸斗 -->
        <path d="M12,8 L18,6 L20,4" stroke-width="1"/><!-- 菸斗 -->
        <path d="M20,4 Q22,2 21,0" stroke-width="0.5" opacity="0.4"/><!-- 煙 -->
      </g>
      <!-- 花園 -->
      <g fill="#6a9f5b" stroke="#3d2b1a" stroke-width="0.5" opacity="0.6">
        <circle cx="140" cy="125" r="3"/><circle cx="150" cy="123" r="2.5"/>
        <circle cx="300" cy="124" r="3"/><circle cx="310" cy="122" r="2.5"/>
      </g>
      <!-- 樹 -->
      <g opacity="0.4">
        <path d="M60,130 L60,80 M60,95 L48,85 M60,88 L72,78" stroke-width="2"/>
        <circle cx="60" cy="78" r="10" fill="#6a9f5b" stroke-width="0.8"/>
      </g>
    </g>
  </svg>`
};

// ── 場景到插圖的映射（每個場景獨立插圖）──
const SCENE_ART_MAP = {
  'intro': 'intro',
  'bag-end-door': 'bag-end-door',
  'bag-end-maps': 'bag-end-maps',
  'garden-morning': 'garden-morning',
  'gandalf-peek': 'gandalf-peek',
  'gandalf-arrives': 'gandalf-arrives',
  'gandalf-tea': 'gandalf-tea',
  'gandalf-quest': 'gandalf-quest',
  'dwarves-arrive': 'dwarves-arrive',
  'thorin-enters': 'thorin-enters',
  'quest-reveal': 'quest-reveal',
  'quest-reluctant': 'quest-reluctant',
  'quest-declined': 'quest-declined',
  'ending-quit': 'ending-quit',
  'quest-accepted': 'quest-accepted',
  'road-east': 'road-east',
  'campfire-song': 'campfire-song',
  'trollshaws-approach': 'trollshaws-approach',
  'troll-avoid': 'troll-avoid',
  'troll-camp': 'troll-camp',
  'troll-sneak': 'troll-sneak',
  'troll-voice': 'troll-voice',
  'troll-wait': 'troll-wait',
  'troll-caught': 'troll-caught',
  'troll-dawn': 'troll-dawn',
  'troll-cave': 'troll-cave',
  'troll-flee': 'troll-flee',
  'troll-captured': 'troll-captured',
  'rivendell-approach': 'rivendell-approach',
  'elrond-council': 'elrond-council',
  'moon-letters': 'moon-letters',
  'misty-mountains-approach': 'misty-mountains-approach',
  'goblin-capture': 'goblin-capture',
  'great-goblin-hall': 'great-goblin-hall',
  'goblin-escape': 'goblin-escape',
  'goblin-captured': 'goblin-captured',
  'goblin-tunnels': 'goblin-tunnels',
  'riddles-in-dark': 'riddles-in-dark',
  'riddle-game': 'riddle-game',
  'gollum-chase': 'gollum-chase',
  'warg-pursuit': 'warg-pursuit',
  'eagle-rescue': 'eagle-rescue',
  'warg-flee': 'warg-flee',
  'warg-captured': 'warg-captured',
  'beorn-approach': 'beorn-approach',
  'beorn-gifts': 'beorn-gifts',
  'mirkwood-enter': 'mirkwood-enter',
  'mirkwood-path': 'mirkwood-path',
  'mirkwood-river': 'mirkwood-river',
  'spider-attack': 'spider-attack',
  'spider-victory': 'spider-victory',
  'mirkwood-lost': 'mirkwood-lost',
  'mirkwood-webbed': 'mirkwood-webbed',
  'mirkwood-escape': 'mirkwood-escape',
  'mirkwood-captured': 'mirkwood-captured',
  'wood-elf-capture': 'wood-elf-capture',
  'elven-dungeon': 'elven-dungeon',
  'barrel-escape': 'barrel-escape',
  'lake-town-approach': 'lake-town-approach',
  'lake-town-feast': 'lake-town-feast',
  'erebor-approach': 'erebor-approach',
  'erebor-deep': 'erebor-deep',
  'smaug-awakens': 'smaug-awakens',
  'smaug-riddles': 'smaug-riddles',
  'smaug-invisible': 'smaug-invisible',
  'smaug-enraged': 'smaug-enraged',
  'erebor-escape': 'erebor-escape',
  'erebor-burned': 'erebor-burned',
  'smaug-attacks': 'smaug-attacks',
  'smaug-death': 'smaug-death',
  'erebor-reclaimed': 'erebor-reclaimed',
  'arkenstone-choice': 'arkenstone-choice',
  'armies-gather': 'armies-gather',
  'battle-five-armies': 'battle-five-armies',
  'battle-retreat': 'battle-retreat',
  'battle-after': 'battle-after',
  'battle-fall': 'battle-fall',
  'thorin-death': 'thorin-death',
  'farewell': 'farewell',
  'homeward-bound': 'homeward-bound',
  'homecoming': 'homecoming',
  'epilogue': 'epilogue'
};

// ── 取得場景藝術（圖片優先，SVG 備用）──
// 圖片來源：art/ 目錄（由 art-server.js 生成）
const _artImageCache = {};

function getSceneArtKey(sceneId, atmosphere) {
  const artKey = SCENE_ART_MAP[sceneId];
  if (artKey) return artKey;
  const fallbackMap = { cozy:'bag-end', dark:'gollum', forest:'spider', fire:'smaug', frost:'rivendell', majestic:'rivendell' };
  return fallbackMap[atmosphere] || 'bag-end';
}

function getSceneHTML(sceneId, atmosphere) {
  const key = getSceneArtKey(sceneId, atmosphere);
  // 1. 檢查 art/ 目錄圖片是否已快取
  if (_artImageCache[key] === true) {
    return '<img src="art/' + key + '.png" alt="' + key + '" style="width:100%;height:100%;object-fit:contain;" onerror="this.parentElement.innerHTML=getSceneSVG(\''+sceneId+'\',\''+atmosphere+'\')"/>';
  }
  // 2. 嘗試載入圖片（非同步預載入）
  if (_artImageCache[key] === undefined) {
    _artImageCache[key] = 'loading';
    const img = new Image();
    img.onload = function(){
      _artImageCache[key] = true;
      // 触发重新渲染
      const el = document.querySelector('#scene-art .art-emoji');
      if(el) el.innerHTML = getSceneHTML(sceneId, atmosphere);
    };
    img.onerror = function(){ _artImageCache[key] = false; };
    img.src = 'art/' + key + '.png';
  }
  // 3. 如果圖片已確認存在
  if (_artImageCache[key] === true) {
    return '<img src="art/' + key + '.png" alt="' + key + '" style="width:100%;height:100%;object-fit:contain;"/>';
  }
  // 4. SVG 備用
  if (SCENE_SVG[key]) return SCENE_SVG[key]();
  return SCENE_SVG['bag-end']();
}

// 向下相容
function getSceneSVG(sceneId, atmosphere) {
  const key = getSceneArtKey(sceneId, atmosphere);
  if (SCENE_SVG[key]) return SCENE_SVG[key]();
  return SCENE_SVG['bag-end']();
}
