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
  <img src="profile-3d-contrib/profile-night-view.svg" width="860" alt="3D GitHub Contribution Graph" />
  <br/><br/>
  <img src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=vvanshverma148-star&theme=dark" width="860" />
</div>
<br/>

```aura width=150 height=44 inline align=center
(function() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: 10, width: '100%', height: '100%' }}>
      <span style={{ color: '#ffffff', fontSize: 16, fontWeight: 700, fontFamily: 'Inter', letterSpacing: '0.5px' }}>Contact me on</span>
    </div>
  );
})()
```
```aura width=90 height=36 link="https://www.linkedin.com/in/vansh-verma-48a528376" inline align=center
(function() {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'rgba(0, 119, 181, 0.15)', width: '100%', height: '100%', borderRadius: 18,
      border: '1px solid rgba(0, 119, 181, 0.3)'
    }}>
      <span style={{ color: '#ffffff', fontSize: 14, fontWeight: 600, fontFamily: 'Inter' }}>LinkedIn</span>
    </div>
  );
})()
```
```aura width=80 height=36 link="mailto:v.vanshverma148@gmail.com" inline align=center
(function() {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'rgba(234, 67, 53, 0.15)', width: '100%', height: '100%', borderRadius: 18,
      border: '1px solid rgba(234, 67, 53, 0.3)'
    }}>
      <span style={{ color: '#ffffff', fontSize: 14, fontWeight: 600, fontFamily: 'Inter' }}>Email</span>
    </div>
  );
})()
```
```aura width=100 height=36 link="https://www.instagram.com/vansh__9206" inline align=center
(function() {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'rgba(228, 64, 95, 0.15)', width: '100%', height: '100%', borderRadius: 18,
      border: '1px solid rgba(228, 64, 95, 0.3)'
    }}>
      <span style={{ color: '#ffffff', fontSize: 14, fontWeight: 600, fontFamily: 'Inter' }}>Instagram</span>
    </div>
  );
})()
```