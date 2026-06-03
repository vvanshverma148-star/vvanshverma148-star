```aura width=860 height=200
 <div style={{
 width: '100%', height: '100%', background: '#08080c',
 display: 'flex', alignItems: 'center', fontFamily: 'Inter',
 position: 'relative', overflow: 'hidden', borderRadius: 16,
 border: '1px solid rgba(110,80,220,0.18)'
}}>

 <style>
   {`
     @keyframes float-slow {
       0%, 100% { transform: translateX(0px); opacity: 0.8; }
       50% { transform: translateX(350px); opacity: 1.2; }
     }
     @keyframes float-medium {
       0%, 100% { transform: translateX(0px); opacity: 0.7; }
       50% { transform: translateX(-250px); opacity: 1.1; }
     }
     @keyframes float-fast {
       0%, 100% { transform: translateX(0px); opacity: 0.9; }
       50% { transform: translateX(200px); opacity: 0.6; }
     }
     @keyframes float-diagonal {
       0%, 100% { transform: translateX(0px); opacity: 0.75; }
       50% { transform: translateX(300px); opacity: 1.0; }
     }
     @keyframes float-wave {
       0%, 100% { transform: translateX(0px); opacity: 0.65; }
       33% { transform: translateX(-160px); opacity: 0.9; }
       66% { transform: translateX(80px); opacity: 1.0; }
     }
     @keyframes float-pulse {
       0%, 100% { transform: scale(1); opacity: 0.8; }
       50% { transform: scale(1.3); opacity: 0.4; }
     }
     #glow-1 { animation: float-slow 8s ease-in-out infinite; }
     #glow-2 { animation: float-medium 12s ease-in-out infinite; }
     #glow-3 { animation: float-fast 9s ease-in-out infinite; }
     #glow-4 { animation: float-slow 11s ease-in-out infinite reverse; }
     #glow-5 { animation: float-medium 14s ease-in-out infinite reverse; }
     #glow-6 { animation: float-diagonal 10s ease-in-out infinite; }
     #glow-7 { animation: float-wave 13s ease-in-out infinite; }
     #glow-8 { animation: float-pulse 7s ease-in-out infinite; }
   `}
 </style>

 <svg width="860" height="200" style={{ position: 'absolute', top: 0, left: 0 }}>
   <defs>
     <radialGradient id="g1" cx="50%" cy="50%" r="50%">
       <stop offset="0%" stopColor="rgba(15,82,186,0.72)" />
       <stop offset="40%" stopColor="rgba(30,144,255,0.35)" />
       <stop offset="70%" stopColor="rgba(30,144,255,0)" />
     </radialGradient>
     <radialGradient id="g2" cx="50%" cy="50%" r="50%">
       <stop offset="0%" stopColor="rgba(0,191,255,0.6)" />
       <stop offset="45%" stopColor="rgba(135,206,235,0.25)" />
       <stop offset="70%" stopColor="rgba(135,206,235,0)" />
     </radialGradient>
     <radialGradient id="g3" cx="50%" cy="50%" r="50%">
       <stop offset="0%" stopColor="rgba(70,130,180,0.45)" />
       <stop offset="50%" stopColor="rgba(100,149,237,0.18)" />
       <stop offset="70%" stopColor="rgba(100,149,237,0)" />
     </radialGradient>
     <radialGradient id="g4" cx="50%" cy="50%" r="50%">
       <stop offset="0%" stopColor="rgba(0,255,255,0.32)" />
       <stop offset="70%" stopColor="rgba(0,255,255,0)" />
     </radialGradient>
     <radialGradient id="g5" cx="50%" cy="50%" r="50%">
       <stop offset="0%" stopColor="rgba(15,82,186,0.38)" />
       <stop offset="70%" stopColor="rgba(15,82,186,0)" />
     </radialGradient>
     <radialGradient id="g6" cx="50%" cy="50%" r="50%">
       <stop offset="0%" stopColor="rgba(30,144,255,0.55)" />
       <stop offset="45%" stopColor="rgba(0,191,255,0.22)" />
       <stop offset="70%" stopColor="rgba(0,191,255,0)" />
     </radialGradient>
     <radialGradient id="g7" cx="50%" cy="50%" r="50%">
       <stop offset="0%" stopColor="rgba(70,130,180,0.42)" />
       <stop offset="50%" stopColor="rgba(100,149,237,0.16)" />
       <stop offset="70%" stopColor="rgba(100,149,237,0)" />
     </radialGradient>
     <radialGradient id="g8" cx="50%" cy="50%" r="50%">
       <stop offset="0%" stopColor="rgba(0,191,255,0.40)" />
       <stop offset="50%" stopColor="rgba(135,206,235,0.15)" />
       <stop offset="70%" stopColor="rgba(135,206,235,0)" />
     </radialGradient>
   </defs>

   <ellipse id="glow-1" cx="180" cy="230" rx="260" ry="190" fill="url(#g1)" />
   <ellipse id="glow-2" cx="300" cy="240" rx="220" ry="160" fill="url(#g2)" />
   <ellipse id="glow-3" cx="420" cy="240" rx="180" ry="140" fill="url(#g3)" />
   <ellipse id="glow-4" cx="550" cy="250" rx="150" ry="120" fill="url(#g4)" />
   <ellipse id="glow-5" cx="750" cy="250" rx="130" ry="110" fill="url(#g5)" />
   <ellipse id="glow-6" cx="300" cy="240" rx="180" ry="140" fill="url(#g6)" />
   <ellipse id="glow-7" cx="490" cy="230" rx="220" ry="170" fill="url(#g7)" />
   <ellipse id="glow-8" cx="590" cy="250" rx="150" ry="130" fill="url(#g8)" />
 </svg>

 <div style={{
   position: 'absolute', left: 48, top: 52, width: 96, height: 96,
   borderRadius: 48, background: 'linear-gradient(135deg, #6622ee, #0088ff)',
   display: 'flex', alignItems: 'center', justifyContent: 'center',
 }}>
   <img src={(github && github.user && github.user.avatarUrl) || 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'} width={88} height={88} style={{ borderRadius: 44 }} />
 </div>

 <div style={{ display:'flex', flexDirection:'column', marginLeft:168, gap:8, zIndex: 10 }}>
   <div style={{ display:'flex', fontSize:38, fontWeight:800, color:'#ffffff', letterSpacing:'-1px', lineHeight:1 }}>
     Vansh Verma
   </div>
   <div style={{ display:'flex', fontSize:15, color:'rgba(200,230,255,0.8)', fontWeight:400, letterSpacing:'0.3px' }}>
     CSE Student · C++ & Python Programmer · Data Analytics · Creative Technologist
   </div>
   <div style={{ display:'flex', gap:8, marginTop:6, flexWrap:'wrap', width: 620 }}>
     {['C++', 'Python', 'Data Analytics', 'MySQL', 'SWE Concepts', 'Graphic Designing', 'C', 'Java', 'Music'].map(function(tag) {
       return (
         <div key={tag} style={{
           display:'flex', padding:'4px 12px', borderRadius:20,
           background:'rgba(30,144,255,0.18)', border:'1px solid rgba(100,149,237,0.32)',
           color:'rgba(215,235,255,0.85)', fontSize:12, fontWeight:600,
         }}>{tag}</div>
       );
     })}
   </div>
 </div>
</div>
```

```aura width=860 height=140
(function() {
 var stats = [
   { label: 'Repos', value: String((github && github.stats && github.stats.totalRepos) || 0), color: '#a78bfa' },
   { label: 'Stars', value: String((github && github.stats && github.stats.totalStars) || 0), color: '#60a5fa' },
   { label: 'Commits', value: String((github && github.stats && github.stats.totalCommits) || 0), color: '#f59e0b' },
 ];

 return (
   <div style={{
     width: '100%', height: '100%',
     background: '#08080c',
     display: 'flex', alignItems: 'center', justifyContent: 'center',
     fontFamily: 'Inter', borderRadius: 16,
     border: '1px solid rgba(110,80,220,0.18)',
     position: 'relative', overflow: 'hidden',
   }}>

     <style>
       {`
         @keyframes float-slow {
           0%, 100% { transform: translateX(0px); opacity: 0.8; }
           50% { transform: translateX(350px); opacity: 1.2; }
         }
         @keyframes float-medium {
           0%, 100% { transform: translateX(0px); opacity: 0.7; }
           50% { transform: translateX(-250px); opacity: 1.1; }
         }
         @keyframes float-fast {
           0%, 100% { transform: translateX(0px); opacity: 0.9; }
           50% { transform: translateX(200px); opacity: 0.6; }
         }
         @keyframes float-diagonal {
           0%, 100% { transform: translate(0px, 0px); opacity: 0.75; }
           50% { transform: translate(120px, 30px); opacity: 1.0; }
         }
         @keyframes float-wave {
           0%, 100% { transform: translateX(0px); opacity: 0.65; }
           33% { transform: translateX(-160px); opacity: 0.9; }
           66% { transform: translateX(80px); opacity: 1.0; }
         }
         @keyframes float-pulse {
           0%, 100% { transform: scale(1); opacity: 0.8; }
           50% { transform: scale(1.3); opacity: 0.4; }
         }
         #glow-1 { animation: float-slow 8s ease-in-out infinite; }
         #glow-2 { animation: float-medium 12s ease-in-out infinite; }
         #glow-3 { animation: float-fast 9s ease-in-out infinite; }
         #glow-4 { animation: float-diagonal 10s ease-in-out infinite; }
         #glow-5 { animation: float-wave 14s ease-in-out infinite; }
       `}
     </style>

     <svg width="860" height="140" style={{ position: 'absolute', top: 0, left: 0 }}>
       <defs>
         <radialGradient id="g1" cx="50%" cy="50%" r="50%">
           <stop offset="0%" stopColor="rgba(15,82,186,0.65)" />
           <stop offset="45%" stopColor="rgba(30,144,255,0.28)" />
           <stop offset="70%" stopColor="rgba(30,144,255,0)" />
         </radialGradient>
         <radialGradient id="g2" cx="50%" cy="50%" r="50%">
           <stop offset="0%" stopColor="rgba(0,191,255,0.55)" />
           <stop offset="45%" stopColor="rgba(135,206,235,0.22)" />
           <stop offset="70%" stopColor="rgba(135,206,235,0)" />
         </radialGradient>
         <radialGradient id="g3" cx="50%" cy="50%" r="50%">
           <stop offset="0%" stopColor="rgba(70,130,180,0.42)" />
           <stop offset="70%" stopColor="rgba(70,130,180,0)" />
         </radialGradient>
         <radialGradient id="g4" cx="50%" cy="50%" r="50%">
           <stop offset="0%" stopColor="rgba(0,255,255,0.30)" />
           <stop offset="70%" stopColor="rgba(0,255,255,0)" />
         </radialGradient>
         <radialGradient id="g5" cx="50%" cy="50%" r="50%">
           <stop offset="0%" stopColor="rgba(15,82,186,0.40)" />
           <stop offset="70%" stopColor="rgba(15,82,186,0)" />
         </radialGradient>
       </defs>
       <ellipse id="glow-1" cx="710" cy="150" rx="210" ry="150" fill="url(#g1)" />
       <ellipse id="glow-2" cx="550" cy="140" rx="190" ry="140" fill="url(#g2)" />
       <ellipse id="glow-3" cx="400" cy="130" rx="170" ry="130" fill="url(#g3)" />
       <ellipse id="glow-4" cx="250" cy="140" rx="150" ry="120" fill="url(#g4)" />
       <ellipse id="glow-5" cx="100" cy="150" rx="130" ry="110" fill="url(#g5)" />
     </svg>

     {stats.map(function(s, i) {
       return (
         <div key={s.label} style={{
           flexGrow: 1, display: 'flex', flexDirection: 'column',
           alignItems: 'center', justifyContent: 'center',
           padding: '16px 8px',
           borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
           gap: 5,
         }}>
           <div style={{ display:'flex', fontSize:30, fontWeight:800, color:s.color, lineHeight:1 }}>
             {s.value}
           </div>
           <div style={{ display:'flex', fontSize:11, color:'rgba(200,195,225,0.45)', fontWeight:600, letterSpacing:'1.5px' }}>
             {s.label.toUpperCase()}
           </div>
         </div>
       );
     })}
   </div>
 );
})()
```

```aura width=860 height=340
 (function() {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: '#08080c',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      fontFamily: 'Inter', padding: '32px 40px',
      borderRadius: 16, border: '1px solid rgba(110,80,220,0.18)',
      position: 'relative', overflow: 'hidden',
    }}>

      <style>
        {`
          @keyframes float-slow {
            0%, 100% { transform: translateX(0px); opacity: 0.8; }
            50% { transform: translateX(350px); opacity: 1.2; }
          }
          @keyframes float-medium {
            0%, 100% { transform: translateX(0px); opacity: 0.7; }
            50% { transform: translateX(-250px); opacity: 1.1; }
          }
          @keyframes float-fast {
            0%, 100% { transform: translateX(0px); opacity: 0.9; }
            50% { transform: translateX(200px); opacity: 0.6; }
          }
          @keyframes float-diagonal {
            0%, 100% { transform: translate(0px, 0px); opacity: 0.75; }
            50% { transform: translate(120px, 30px); opacity: 1.0; }
          }
          @keyframes float-wave {
            0%, 100% { transform: translateX(0px); opacity: 0.65; }
            33% { transform: translateX(-160px); opacity: 0.9; }
            66% { transform: translateX(80px); opacity: 1.0; }
          }
          @keyframes float-pulse {
            0%, 100% { transform: scale(1); opacity: 0.8; }
            50% { transform: scale(1.3); opacity: 0.4; }
          }
          #glow-1 { animation: float-slow 9s ease-in-out infinite; }
          #glow-2 { animation: float-medium 12s ease-in-out infinite; }
          #glow-3 { animation: float-fast 8s ease-in-out infinite; }
          #glow-4 { animation: float-diagonal 11s ease-in-out infinite reverse; }
          #glow-5 { animation: float-wave 14s ease-in-out infinite reverse; }
          #glow-6 { animation: float-pulse 6s ease-in-out infinite; }
        `}
      </style>

      <svg width="860" height="340" style={{ position: 'absolute', top: 0, left: 0 }}>
        <defs>
          <radialGradient id="g1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(15,82,186,0.68)" />
            <stop offset="42%" stopColor="rgba(30,144,255,0.30)" />
            <stop offset="70%" stopColor="rgba(30,144,255,0)" />
          </radialGradient>
          <radialGradient id="g2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(0,191,255,0.55)" />
            <stop offset="45%" stopColor="rgba(135,206,235,0.22)" />
            <stop offset="70%" stopColor="rgba(135,206,235,0)" />
          </radialGradient>
          <radialGradient id="g3" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(70,130,180,0.42)" />
            <stop offset="50%" stopColor="rgba(100,149,237,0.16)" />
            <stop offset="70%" stopColor="rgba(100,149,237,0)" />
          </radialGradient>
          <radialGradient id="g4" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(0,255,255,0.32)" />
            <stop offset="70%" stopColor="rgba(0,255,255,0)" />
          </radialGradient>
          <radialGradient id="g5" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(15,82,186,0.42)" />
            <stop offset="70%" stopColor="rgba(15,82,186,0)" />
          </radialGradient>
          <radialGradient id="g6" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(30,144,255,0.35)" />
            <stop offset="70%" stopColor="rgba(30,144,255,0)" />
          </radialGradient>
        </defs>
        <ellipse id="glow-1" cx="170" cy="240" rx="260" ry="200" fill="url(#g1)" />
        <ellipse id="glow-2" cx="320" cy="250" rx="220" ry="170" fill="url(#g2)" />
        <ellipse id="glow-3" cx="460" cy="250" rx="190" ry="160" fill="url(#g3)" />
        <ellipse id="glow-4" cx="590" cy="260" rx="160" ry="140" fill="url(#g4)" />
        <ellipse id="glow-5" cx="750" cy="260" rx="140" ry="130" fill="url(#g5)" />
        <ellipse id="glow-6" cx="420" cy="200" rx="100" ry="110" fill="url(#g6)" />
      </svg>

      <div style={{ display: 'flex', width: '100%', zIndex: 10 }}>
        {/* Left Half: About Me */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, paddingRight: 32, gap: 16 }}>
          <div style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', letterSpacing: '0.5px' }}>About Me</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, fontSize: 13, color: 'rgba(215,235,255,0.85)', lineHeight: 1.5, fontWeight: 400 }}>
            <div style={{ display: 'flex', gap: 10 }}>
              <span style={{ fontSize: 16 }}>🎓</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', flex: 1 }}>
                <span>Sophomore CSE student at JIIT, passionate about technology, problem-solving, and continuous learning.</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <span style={{ fontSize: 16 }}>💻</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', flex: 1 }}>
                <span>Well-versed in C++ and Python, with a strong interest in programming and software development.</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <span style={{ fontSize: 16 }}>📊</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', flex: 1 }}>
                <span>Skilled in Data Analytics using Python, including working with data, visualization, and analytical tools.</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <span style={{ fontSize: 16 }}>🧠</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', flex: 1 }}>
                <span>Familiar with Software Engineering concepts, along with basics of C, Java, SQL, and MySQL.</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <span style={{ fontSize: 16 }}>🎨</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', flex: 1 }}>
                <span>A creative individual interested in Graphic Design and Music, combining technical skills with creativity.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ display: 'flex', width: 1, background: 'rgba(255,255,255,0.1)', height: 260, marginRight: 32 }}></div>

        {/* Right Half: Languages & Dev Tools */}
        <div style={{ display: 'flex', flexDirection: 'column', width: 340, gap: 16 }}>
          <div style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', letterSpacing: '0.5px' }}>Languages & Dev Tools</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', background: 'rgba(0, 89, 156, 0.15)', padding: '6px 14px', borderRadius: 16, border: '1px solid rgba(0, 89, 156, 0.3)' }}>
              <span style={{ color: '#ffffff', fontSize: 12, fontWeight: 600, letterSpacing: '0.2px' }}>C++</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', background: 'rgba(55, 118, 171, 0.15)', padding: '6px 14px', borderRadius: 16, border: '1px solid rgba(55, 118, 171, 0.3)' }}>
              <span style={{ color: '#ffffff', fontSize: 12, fontWeight: 600, letterSpacing: '0.2px' }}>Python</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', background: 'rgba(168, 185, 204, 0.15)', padding: '6px 14px', borderRadius: 16, border: '1px solid rgba(168, 185, 204, 0.3)' }}>
              <span style={{ color: '#ffffff', fontSize: 12, fontWeight: 600, letterSpacing: '0.2px' }}>C</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', background: 'rgba(237, 139, 0, 0.15)', padding: '6px 14px', borderRadius: 16, border: '1px solid rgba(237, 139, 0, 0.3)' }}>
              <span style={{ color: '#ffffff', fontSize: 12, fontWeight: 600, letterSpacing: '0.2px' }}>Java</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', background: 'rgba(68, 121, 161, 0.15)', padding: '6px 14px', borderRadius: 16, border: '1px solid rgba(68, 121, 161, 0.3)' }}>
              <span style={{ color: '#ffffff', fontSize: 12, fontWeight: 600, letterSpacing: '0.2px' }}>MySQL</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', background: 'rgba(0, 122, 204, 0.15)', padding: '6px 14px', borderRadius: 16, border: '1px solid rgba(0, 122, 204, 0.3)' }}>
              <span style={{ color: '#ffffff', fontSize: 12, fontWeight: 600, letterSpacing: '0.2px' }}>VS Code</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', background: 'rgba(255, 255, 255, 0.15)', padding: '6px 14px', borderRadius: 16, border: '1px solid rgba(255, 255, 255, 0.3)' }}>
              <span style={{ color: '#ffffff', fontSize: 12, fontWeight: 600, letterSpacing: '0.2px' }}>GitHub</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', background: 'rgba(70, 227, 183, 0.15)', padding: '6px 14px', borderRadius: 16, border: '1px solid rgba(70, 227, 183, 0.3)' }}>
              <span style={{ color: '#ffffff', fontSize: 12, fontWeight: 600, letterSpacing: '0.2px' }}>Render</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', background: 'rgba(255, 255, 255, 0.15)', padding: '6px 14px', borderRadius: 16, border: '1px solid rgba(255, 255, 255, 0.3)' }}>
              <span style={{ color: '#ffffff', fontSize: 12, fontWeight: 600, letterSpacing: '0.2px' }}>Vercel</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', background: 'rgba(255, 51, 102, 0.15)', padding: '6px 14px', borderRadius: 16, border: '1px solid rgba(255, 51, 102, 0.3)' }}>
              <span style={{ color: '#ffffff', fontSize: 12, fontWeight: 600, letterSpacing: '0.2px' }}>Aiven</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
})()
```

<div align="center">
  <img src="https://github-readme-activity-graph.vercel.app/graph?username=vvanshverma148-star&bg_color=08080c&color=ffffff&line=3090ff&point=ffffff&area=true&hide_border=false&border_color=222222&title_color=ffffff&radius=16" width="860" />
  <br/><br/>
  <img src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=vvanshverma148-star&theme=dark" width="860" />
</div>
<br/>

```aura width=860 height=140
(function() {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', padding: 24, justifyContent: 'center', alignItems: 'center',
      background: '#08080c', width: '100%', height: '100%', borderRadius: 16,
      border: '1px solid #222222', fontFamily: 'Inter'
    }}>
      <div style={{ display: 'flex', color: '#ffffff', fontSize: 18, fontWeight: 700, marginBottom: 24, letterSpacing: '0.5px' }}>
        Contact Me
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', gap: 24, flexWrap: 'wrap', justifyContent: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#0077b5">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          <span style={{ color: '#a0a0a0', fontSize: 14 }}>LinkedIn:</span>
          <span style={{ color: '#ffffff', fontSize: 14, fontWeight: 500 }}>www.linkedin.com/in/vansh-verma-48a528376</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#EA4335">
            <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
          </svg>
          <span style={{ color: '#a0a0a0', fontSize: 14 }}>Email:</span>
          <span style={{ color: '#ffffff', fontSize: 14, fontWeight: 500 }}>v.vanshverma148@gmail.com</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#E4405F">
            <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.863.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.757 6.162 6.162 6.162 3.405 0 6.162-2.757 6.162-6.162 0-3.402-2.757-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
          </svg>
          <span style={{ color: '#a0a0a0', fontSize: 14 }}>Instagram:</span>
          <span style={{ color: '#ffffff', fontSize: 14, fontWeight: 500 }}>www.instagram.com/vansh__9206</span>
        </div>
      </div>
    </div>
  );
})()
```