
const img_fabrica = "assets/images/img_fabrica.png";
const img_mac4d = "assets/images/img_mac4d.png";
const img_vila_flores = "assets/images/img_vila_flores.png";
const img_cerveja = "assets/images/img_cerveja.png";
const img_boulevard = "assets/images/img_boulevard.png";
const img_mural = "assets/images/img_mural.png";
const img_fly51 = "assets/images/img_fly51.png";
const img_fly51_garden = "assets/images/img_fly51_garden.png";
const img_cronograma = "assets/images/img_cronograma.png";
const img_parque_porto_before = "assets/images/img_parque_porto_before.png";
const img_parque_porto_after = "assets/images/img_parque_porto_after.png";
const img_portuaria_before = "assets/images/img_portuaria_before.png";
const img_portuaria_after = "assets/images/img_portuaria_after.png";
const img_voluntarios_before = "assets/images/img_voluntarios_before.png";
const img_voluntarios_after = "assets/images/img_voluntarios_after.png";
const img_sertorio_before = "assets/images/img_sertorio_before.png";
const img_sertorio_after = "assets/images/img_sertorio_after.png";

// ─── IMAGE MAPS ───
const marcosData = [
  {img: img_fabrica, tag: 'Inovação · Ativo', name: 'Fábrica do Futuro', desc: 'Hub de tecnologia e criatividade instalado em edifício industrial requalificado com arte urbana de grande escala.'},
  {img: img_mac4d, tag: 'Cultura · Inaugurado', name: 'MAC 4D', desc: 'Museu de Arte Contemporânea do Rio Grande do Sul. Novo equipamento cultural de referência no distrito.'},
  {img: img_vila_flores, tag: 'Cultura · Ativo', name: 'Vila Flores', desc: 'Complexo cultural com ateliês, gastronomia e eventos. Um dos principais polos criativos de Porto Alegre.'},
  {img: img_cerveja, tag: 'Gastronomia · Ativo', name: 'Rota Cervejeira', desc: 'Circuito de cervejarias artesanais que transformou o 4º Distrito em destino gastronômico e cultural.'},
  {img: img_boulevard, tag: 'Infraestrutura · Concluído', name: 'Boulevard 4D', desc: 'Nova via qualificada com calçadas, ciclovia, arborização e pavimentação especial — modelo para o distrito.'},
  {img: img_fly51, tag: 'Projeto · Em desenvolvimento', name: 'Fly 51', desc: 'Complexo multiuso de grande escala com arquitetura arrojada, previsto para se tornar novo ícone urbano.'},
];

const projData = [
  {title: 'Parque do Porto', before: img_parque_porto_before, after: img_parque_porto_after, desc: 'Transformação da orla do Guaíba em grande parque público às margens do rio, com 370m de frente de água.'},
  {title: 'Av. Portuária', before: img_portuaria_before, after: img_portuaria_after, desc: 'Requalificação completa da avenida com ciclovia, arborização e novo desenho urbano de mobilidade ativa.'},
  {title: 'R. Voluntários da Pátria', before: img_voluntarios_before, after: img_voluntarios_after, desc: 'Transformação da principal via do distrito com faixas verdes, canteiros floridos e infraestrutura cicloviária.'},
  {title: 'Acesso Av. Sertório', before: img_sertorio_before, after: img_sertorio_after, desc: 'Requalificação do acesso com paisagismo, ciclovias e integração com o sistema de mobilidade do distrito.'},
];

const premissasData = [
  {color:'var(--cyan)',icon:'🌿',num:'01',title:'Infraestrutura Verde e Azul',desc:'Parques, praças, corredores verdes e sistemas de drenagem que integram natureza à estrutura urbana do distrito.'},
  {color:'#4DFFC3',icon:'⚡',num:'02',title:'Infraestrutura Energética e Baixo Carbono',desc:'Rede de energia eficiente, fontes renováveis e redução das emissões de carbono em todas as intervenções.'},
  {color:'var(--amber)',icon:'🚲',num:'03',title:'Mobilidade Inteligente e Ativa',desc:'Ciclovias, transporte público qualificado e calçadas que priorizam pedestres e ciclistas no cotidiano.'},
  {color:'#A78BFA',icon:'🏛️',num:'04',title:'Qualificação do Espaço Público',desc:'Requalificação de ruas, praças e áreas de convivência para criar um ambiente urbano acolhedor e seguro.'},
  {color:'#F472B6',icon:'🏙️',num:'05',title:'Urbanismo para Inovação',desc:'Zoneamento e diretrizes urbanísticas que atraem empresas, startups e centros de pesquisa para o território.'},
  {color:'var(--cyan)',icon:'🔮',num:'06',title:'Distrito Inteligente',desc:'Conectividade, sensores urbanos e infraestrutura de dados para uma cidade mais eficiente e responsiva.'},
];

const cronData = [
  {phase:'Fase 1', label:'Fase Urbanística', color:'var(--cyan)', period:'2025–2026', bars:[
    {label:'Estudo Inicial & Revisão', fill:.9, color:'fill'},
    {label:'Levantamento de Dados', fill:.85, color:'fill'},
    {label:'Estudo Preliminar', fill:.7, color:'fill'},
    {label:'Validação do Escopo', fill:.6, color:'fill'},
    {label:'Anteprojeto Urbanístico', fill:.45, color:'fill'},
    {label:'Aprovação Municipal', fill:.3, color:'dim'},
  ]},
  {phase:'Fase 2', label:'Fase Complementar', color:'var(--amber)', period:'2026', bars:[
    {label:'Anteprojeto Compl. (Escopo)', fill:.4, color:'amber'},
    {label:'Anteprojeto Compl. (Elaboração)', fill:.25, color:'amber'},
  ]},
  {phase:'Fase 3', label:'Fase Obra', color:'#A78BFA', period:'2026–2027', bars:[
    {label:'Contratação Integrada', fill:.2, color:'dim'},
    {label:'Execução da Obra', fill:.1, color:'dim'},
  ]},
];

// ─── BUILD MARQUEE ───
const mItems = ['QUARTO DISTRITO','PORTO ALEGRE','DADOS ABERTOS','INTELIGÊNCIA URBANA','TRANSFORMAÇÃO','847 HECTARES','R$ 2,3 BILHÕES','130+ OBRAS','DISTRITO DA INOVAÇÃO'];
let mHtml = '';
for(let i=0;i<2;i++) mItems.forEach(t=>{ mHtml += `<span class="mitem">${t} <span class="msep">·</span></span>`; });
document.getElementById('mtrack').innerHTML = mHtml;

// ─── BUILD MARCOS ───
const ms = document.getElementById('marcos-scroll');
marcosData.forEach(m => {
  ms.innerHTML += `<div class="marco-card">
    <img class="marco-img" src="${m.img}" alt="${m.name}">
    <div class="marco-overlay"></div>
    <div class="marco-content">
      <div class="marco-tag">${m.tag}</div>
      <div class="marco-name">${m.name}</div>
      <div class="marco-desc">${m.desc}</div>
    </div>
  </div>`;
});

// ─── BUILD PROJECTIONS ───
const pg = document.getElementById('proj-grid');
projData.forEach((p, i) => {
  const rev = i % 2 === 1 ? 'reverse' : '';
  pg.innerHTML += `<div class="proj-item ${rev} sr">
    <div class="proj-side">
      <img class="proj-img" src="${p.before}" alt="Antes - ${p.title}">
      <div class="proj-badge before">HOJE</div>
      <div class="proj-info"><div class="proj-info-title">${p.title}</div><div class="proj-info-sub">${p.desc}</div></div>
    </div>
    <div class="proj-divider"><div class="proj-divider-line"></div><div class="proj-divider-icon">→</div></div>
    <div class="proj-side">
      <img class="proj-img" src="${p.after}" alt="Depois - ${p.title}">
      <div class="proj-badge after">FUTURO</div>
      <div class="proj-info"><div class="proj-info-title">${p.title} · Projeção</div><div class="proj-info-sub">Renderização oficial · Prefeitura de Porto Alegre</div></div>
    </div>
  </div>`;
});

// ─── BUILD PREMISSAS ───
const premG = document.getElementById('prem-grid');
premissasData.forEach(p => {
  premG.innerHTML += `<div class="prem-cell sr" style="--prem-color:${p.color}">
    <span class="prem-icon">${p.icon}</span>
    <div class="prem-num">${p.num}</div>
    <div class="prem-title">${p.title}</div>
    <div class="prem-desc">${p.desc}</div>
  </div>`;
});

// ─── BUILD CRONOGRAMA ───
const cp = document.getElementById('cron-phases');
cronData.forEach(ph => {
  const bars = ph.bars.map(b => `
    <div class="phase-bar-row">
      <span class="phase-bar-label">${b.label}</span>
      <div class="phase-bar-track"><div class="phase-bar-fill ${b.color}" style="width:${Math.round(b.fill*100)}%"></div></div>
      <span class="phase-period">${ph.period}</span>
    </div>`).join('');
  cp.innerHTML += `<div class="phase-block">
    <div class="phase-dot" style="background:${ph.color};box-shadow:0 0 14px ${ph.color}"></div>
    <div class="phase-label">${ph.phase}</div>
    <div class="phase-name" style="color:${ph.color}">${ph.label}</div>
    <div class="phase-bars">${bars}</div>
  </div>`;
});




// ─── VIDEO LOADER ───
(function(){
  const vid = document.getElementById('hero-video');
  vid.src = 'assets/hero-video.mp4';
  vid.load();
})();

// ─── VIDEO FADE-IN ───
(function(){
  const vid = document.getElementById('hero-video');
  const cvs = document.getElementById('hero-canvas');
  if(!vid) return;
  function activate(){
    vid.style.opacity  = '0.45';   // vídeo aparece (semi-transparente para manter o efeito GIS)
    cvs.style.opacity  = '0';      // canvas some
  }
  vid.addEventListener('canplaythrough', activate);
  vid.addEventListener('playing', activate);
  // fallback
  setTimeout(()=>{ if(vid.readyState >= 3) activate(); }, 2000);
})();

// ─── AERIAL CITY CANVAS — 4º DISTRITO POA ───
(function(){
const CVS = document.getElementById('hero-canvas');
const cx = CVS.getContext('2d');
let W=0, H=0, T=0, raf=0;
const DPR = Math.min(window.devicePixelRatio||1, 2);

// ── PALETTE ──
const CYAN  = [0,255,209];
const AMBER = [255,176,32];
const BLUE  = [40,140,255];
const WHITE = [240,248,255];
function c4(col,a){ return `rgba(${col[0]},${col[1]},${col[2]},${a.toFixed(3)})`; }

// ── STATE ──
let blocks=[], roads=[], nodes=[], pulses=[], trails=[], particles=[];
let scanY=0, districtPulse=0;

// ── RESIZE ──
function resize(){
  CVS.width  = CVS.offsetWidth  * DPR;
  CVS.height = CVS.offsetHeight * DPR;
  cx.setTransform(DPR,0,0,DPR,0,0);
  W = CVS.offsetWidth;
  H = CVS.offsetHeight;
}

// ── CITY BLOCKS (aerial Porto Alegre feel) ──
function buildCity(){
  blocks=[]; roads=[];
  // irregular urban fabric — denser center, sparser edges
  const SEED_BLOCKS = Math.floor(W*H/3200);
  for(let i=0;i<SEED_BLOCKS;i++){
    const cx2 = Math.random()*W, cy2 = Math.random()*H;
    // cluster tendency — more blocks near center
    const distCenter = Math.hypot(cx2-W*.55, cy2-H*.5)/(Math.hypot(W,H)*.5);
    if(Math.random() < distCenter*0.55) continue;

    const bw = 18+Math.random()*72;
    const bh = 12+Math.random()*52;
    const isIndustrial = cx2 < W*.45 && cy2 > H*.25; // 4D is industrial/port zone
    const isTall = Math.random()<0.08;

    blocks.push({
      x:cx2, y:cy2, w:bw, h:bh,
      baseA: isIndustrial ? 0.04+Math.random()*0.07 : 0.025+Math.random()*0.045,
      phase: Math.random()*Math.PI*2,
      spd: 0.003+Math.random()*0.009,
      tall: isTall,
      industrial: isIndustrial,
      col: isTall ? CYAN : (isIndustrial ? (Math.random()>.6?AMBER:CYAN) : CYAN),
      lit: Math.random()>.45,
      litPhase: Math.random()*Math.PI*2,
      wins: Math.floor(1+Math.random()*6),
    });
  }

  // Road network — main arteries (diagonal + grid mix like POA)
  const ARTERIES = [
    // horizontal major roads
    {x1:0,y1:H*.28,x2:W,y2:H*.28},{x1:0,y1:H*.52,x2:W,y2:H*.52},{x1:0,y1:H*.72,x2:W,y2:H*.72},
    // vertical
    {x1:W*.22,y1:0,x2:W*.22,y2:H},{x1:W*.48,y1:0,x2:W*.48,y2:H},{x1:W*.74,y1:0,x2:W*.74,y2:H},
    // diagonal (Av. Sertório feel)
    {x1:0,y1:H*.15,x2:W*.4,y2:H*.65},{x1:W*.6,y1:0,x2:W,y2:H*.55},
  ];
  roads = ARTERIES;

  // secondary grid
  const COLS=16, ROWS=11;
  for(let i=0;i<=COLS;i++) roads.push({x1:i*W/COLS,y1:0,x2:i*W/COLS,y2:H,secondary:true});
  for(let i=0;i<=ROWS;i++) roads.push({x1:0,y1:i*H/ROWS,x2:W,y2:i*H/ROWS,secondary:true});
}

// ── GIS NODES ──
function buildNodes(){
  nodes=[];
  // Landmark nodes (fixed positions — key spots in 4D)
  const landmarks = [
    {x:.18,y:.38,r:4,col:CYAN,label:'Instituto Caldeira'},
    {x:.31,y:.44,r:3.5,col:CYAN,label:'Vila Flores'},
    {x:.24,y:.55,r:3,col:AMBER,label:'Boulevard 4D'},
    {x:.14,y:.62,r:3.5,col:CYAN,label:'MAC 4D'},
    {x:.38,y:.32,r:3,col:AMBER,label:'Rota Cervejeira'},
    {x:.26,y:.70,r:4,col:CYAN,label:'Parque do Porto'},
    {x:.42,y:.58,r:2.5,col:BLUE,label:'Fly 51'},
    {x:.10,y:.48,r:3,col:AMBER,label:'Fábrica do Futuro'},
  ];
  landmarks.forEach(lm=>{
    nodes.push({
      x:lm.x*W, y:lm.y*H, r:lm.r,
      col:lm.col, label:lm.label, isLandmark:true,
      phase:Math.random()*Math.PI*2, spd:0.022+Math.random()*.02,
      alpha:.8, lastPulse:-Math.random()*200, pulseInt:180+Math.random()*280,
      connections:[],
    });
  });

  // Data nodes (random)
  const N = Math.max(20, Math.floor(W*H/28000));
  for(let i=0;i<N;i++){
    nodes.push({
      x:Math.random()*W, y:Math.random()*H,
      r:1.2+Math.random()*2, col:Math.random()>.3?CYAN:(Math.random()>.5?AMBER:WHITE),
      isLandmark:false, phase:Math.random()*Math.PI*2, spd:.015+Math.random()*.035,
      alpha:.3+Math.random()*.55, lastPulse:-Math.random()*400, pulseInt:200+Math.random()*500,
      connections:[],
    });
  }

  // Connect nodes by proximity
  const maxD = Math.min(W,H)*.25;
  nodes.forEach((a,i)=>{ nodes.forEach((b,j)=>{
    if(i>=j)return;
    const d=Math.hypot(a.x-b.x,a.y-b.y);
    if(d<maxD && Math.random()>.45) a.connections.push(j);
  });});
}

// ── LIGHT TRAILS ──
function spawnTrail(){
  const COLS=16, ROWS=11;
  const horiz=Math.random()>.38;
  // snap to road grid
  const lane = horiz
    ? (Math.floor(Math.random()*ROWS)+.5)*H/ROWS
    : (Math.floor(Math.random()*COLS)+.5)*W/COLS;
  // occasionally use diagonal roads
  const diag = Math.random()>.82;
  trails.push({
    x: horiz?-160:(diag?Math.random()*W*.3:lane<=W?lane:Math.random()*W),
    y: horiz?(diag?Math.random()*H*.3:lane):-.16*H,
    len:90+Math.random()*180,
    spd:1.4+Math.random()*3.2,
    horiz, diag,
    alpha:.16+Math.random()*.4,
    col:Math.random()>.32?CYAN:AMBER,
    w:.7+Math.random()*1.6,
    twin:Math.random()>.45,
    angle: diag ? (Math.random()*.4+.3)*(Math.random()>.5?1:-1) : 0,
  });
}

function buildTrails(){
  trails=[];
  for(let i=0;i<Math.floor(W/70);i++) spawnTrail();
}

// ── AMBIENT PARTICLES (dust / data noise) ──
function buildParticles(){
  particles=[];
  const N=Math.floor(W*H/9000);
  for(let i=0;i<N;i++){
    particles.push({
      x:Math.random()*W, y:Math.random()*H,
      vx:(Math.random()-.5)*.18, vy:(Math.random()-.5)*.12,
      r:.5+Math.random()*.9,
      alpha:.04+Math.random()*.14,
      col:Math.random()>.5?CYAN:WHITE,
      phase:Math.random()*Math.PI*2, spd:.008+Math.random()*.02,
    });
  }
}

// ── MAIN DRAW ──
function draw(){
  T++;
  cx.clearRect(0,0,W,H);

  // 1. ATMOSPHERIC DEPTH GRADIENT
  const atm=cx.createRadialGradient(W*.62,H*.32,0,W*.62,H*.32,W*.8);
  atm.addColorStop(0,  'rgba(0,60,50,0.06)');
  atm.addColorStop(.4, 'rgba(0,255,209,0.02)');
  atm.addColorStop(1,  'rgba(2,6,8,0)');
  cx.fillStyle=atm; cx.fillRect(0,0,W,H);

  // 2. SECONDARY ROAD GRID (very faint)
  roads.filter(r=>r.secondary).forEach(r=>{
    cx.beginPath(); cx.moveTo(r.x1,r.y1); cx.lineTo(r.x2,r.y2);
    cx.strokeStyle=c4(CYAN,.018); cx.lineWidth=.4; cx.stroke();
  });

  // 3. CITY BLOCKS with depth
  blocks.forEach(b=>{
    b.phase+=b.spd; b.litPhase+=.018;
    const a=b.baseA+Math.sin(b.phase)*.016;

    // tall building — extra depth shadow
    if(b.tall){
      cx.fillStyle=c4(CYAN,.035);
      cx.fillRect(b.x+5,b.y+5,b.w,b.h);
      cx.strokeStyle=c4(CYAN,.14+Math.sin(b.phase*.7)*.06);
      cx.lineWidth=.7; cx.strokeRect(b.x,b.y,b.w,b.h);
    }

    // main block
    cx.fillStyle=c4(b.col,a);
    cx.fillRect(b.x,b.y,b.w,b.h);

    // windows (amber warm glow)
    if(b.lit && b.w>16 && b.h>12){
      const ww=Math.max(3,b.w*.13), wh=Math.max(3,b.h*.15);
      for(let wi=0;wi<b.wins;wi++){
        const on=Math.sin(b.litPhase+wi*1.3)>.1;
        if(on){
          cx.fillStyle=c4(AMBER,.1+Math.sin(b.litPhase*1.2+wi)*.04);
          cx.fillRect(b.x+4+wi*(b.w/(b.wins+1)),b.y+4,ww,wh);
        }
      }
    }
  });

  // 4. MAJOR ARTERIES (slightly more visible)
  roads.filter(r=>!r.secondary).forEach(r=>{
    cx.beginPath(); cx.moveTo(r.x1,r.y1); cx.lineTo(r.x2,r.y2);
    cx.strokeStyle=c4(CYAN,.05+.02*Math.sin(T*.008)); cx.lineWidth=.8; cx.stroke();
  });

  // 5. DATA NETWORK LINES with traveling packets
  nodes.forEach((n,i)=>{
    n.connections.forEach(j=>{
      const m=nodes[j];
      const lp=Math.sin(T*.01+i*.37)*.5+.5;

      // line
      cx.beginPath(); cx.moveTo(n.x,n.y); cx.lineTo(m.x,m.y);
      cx.strokeStyle=c4(CYAN,.025+lp*.04);
      cx.lineWidth=.35; cx.stroke();

      // traveling packet
      const prog=((T*.007+i*.41+j*.17)%1);
      const px=n.x+(m.x-n.x)*prog, py=n.y+(m.y-n.y)*prog;
      const pAlpha=Math.sin(prog*Math.PI)*.6;
      if(pAlpha>.05){
        cx.beginPath(); cx.arc(px,py,1.4,0,Math.PI*2);
        cx.fillStyle=c4(CYAN,pAlpha); cx.fill();
        // packet tail
        const tail=.06;
        const px2=n.x+(m.x-n.x)*Math.max(0,prog-tail);
        const py2=n.y+(m.y-n.y)*Math.max(0,prog-tail);
        cx.beginPath(); cx.moveTo(px2,py2); cx.lineTo(px,py);
        cx.strokeStyle=c4(CYAN,pAlpha*.4); cx.lineWidth=.8; cx.stroke();
      }
    });
  });

  // 6. PULSE RINGS
  nodes.forEach((n,i)=>{
    if(T-n.lastPulse>n.pulseInt){
      n.lastPulse=T;
      const maxR = n.isLandmark ? 55+Math.random()*40 : 28+Math.random()*35;
      pulses.push({x:n.x,y:n.y,r:n.r,maxR,alpha:.55+(n.isLandmark?.2:0),col:n.col,thick:n.isLandmark?1.2:.7});
    }
  });
  for(let i=pulses.length-1;i>=0;i--){
    const p=pulses[i];
    p.r+=.85; p.alpha*=.955;
    cx.beginPath(); cx.arc(p.x,p.y,p.r,0,Math.PI*2);
    cx.strokeStyle=c4(p.col,p.alpha*.5);
    cx.lineWidth=p.thick; cx.stroke();
    if(p.alpha<.012||p.r>p.maxR) pulses.splice(i,1);
  }

  // 7. NODES
  nodes.forEach(n=>{
    n.phase+=n.spd;
    const a=n.alpha*(.4+.6*Math.sin(n.phase));

    // outer glow
    const g=cx.createRadialGradient(n.x,n.y,0,n.x,n.y,n.r*(n.isLandmark?7:5));
    g.addColorStop(0,c4(n.col,a*.35));
    g.addColorStop(1,c4(n.col,0));
    cx.fillStyle=g;
    cx.beginPath(); cx.arc(n.x,n.y,n.r*(n.isLandmark?7:5),0,Math.PI*2); cx.fill();

    // core
    cx.beginPath(); cx.arc(n.x,n.y,n.r,0,Math.PI*2);
    cx.fillStyle=c4(n.col,Math.min(a*1.5,1)); cx.fill();

    // landmark label
    if(n.isLandmark && a>.3){
      const fs=Math.max(8,W*.0065);
      cx.font=`500 ${fs}px 'Space Mono',monospace`;
      cx.fillStyle=c4(n.col,a*.7);
      cx.fillText(n.label, n.x+n.r*2+3, n.y+n.r*.5);
    }
  });

  // 8. LIGHT TRAILS (vehicles)
  for(let i=trails.length-1;i>=0;i--){
    const tr=trails[i];
    let x2,y2;
    if(tr.diag){
      x2=tr.x+Math.cos(tr.angle)*tr.len;
      y2=tr.y+Math.sin(tr.angle)*tr.len;
    } else {
      x2=tr.horiz?tr.x+tr.len:tr.x;
      y2=tr.horiz?tr.y:tr.y+tr.len;
    }

    const g=cx.createLinearGradient(tr.x,tr.y,x2,y2);
    g.addColorStop(0,c4(tr.col,0));
    g.addColorStop(.25,c4(tr.col,tr.alpha*.35));
    g.addColorStop(.78,c4(tr.col,tr.alpha));
    g.addColorStop(1,c4(tr.col,0));
    cx.beginPath(); cx.moveTo(tr.x,tr.y); cx.lineTo(x2,y2);
    cx.strokeStyle=g; cx.lineWidth=tr.w; cx.stroke();

    // opposing lane
    if(tr.twin){
      const off=tr.diag?3:(tr.horiz?3:3);
      const ox=tr.diag?tr.x+off:tr.x+(tr.horiz?0:off);
      const oy=tr.diag?tr.y+off:tr.y+(tr.horiz?off:0);
      const ox2=tr.diag?x2+off:x2+(tr.horiz?0:off);
      const oy2=tr.diag?y2+off:y2+(tr.horiz?off:0);
      const g2=cx.createLinearGradient(x2+(tr.horiz?0:off),y2+(tr.horiz?off:0),tr.x+(tr.horiz?0:off),tr.y+(tr.horiz?off:0));
      g2.addColorStop(0,c4(tr.col,0));
      g2.addColorStop(.6,c4(tr.col,tr.alpha*.45));
      g2.addColorStop(1,c4(tr.col,0));
      cx.beginPath(); cx.moveTo(ox2,oy2); cx.lineTo(ox,oy);
      cx.strokeStyle=g2; cx.lineWidth=tr.w*.65; cx.stroke();
    }

    // move
    if(tr.diag){ tr.x+=Math.cos(tr.angle)*tr.spd; tr.y+=Math.sin(tr.angle)*tr.spd; }
    else if(tr.horiz) tr.x+=tr.spd; else tr.y+=tr.spd;

    const gone=tr.diag?(tr.x>W+50||tr.y>H+50):(tr.horiz?tr.x>W+20:tr.y>H+20);
    if(gone){ trails.splice(i,1); spawnTrail(); }
  }

  // 9. AMBIENT PARTICLES
  particles.forEach(p=>{
    p.phase+=p.spd;
    p.x+=p.vx; p.y+=p.vy;
    if(p.x<0)p.x=W; if(p.x>W)p.x=0;
    if(p.y<0)p.y=H; if(p.y>H)p.y=0;
    const a=p.alpha*(.5+.5*Math.sin(p.phase));
    cx.beginPath(); cx.arc(p.x,p.y,p.r,0,Math.PI*2);
    cx.fillStyle=c4(p.col,a); cx.fill();
  });

  // 10. SATELLITE SCAN LINE
  scanY=(scanY+.55)%(H+80);
  const sg=cx.createLinearGradient(0,scanY-40,0,scanY+6);
  sg.addColorStop(0,'rgba(0,255,209,0)');
  sg.addColorStop(.6,'rgba(0,255,209,0.018)');
  sg.addColorStop(1,'rgba(0,255,209,0.06)');
  cx.fillStyle=sg; cx.fillRect(0,scanY-40,W,46);

  // 11. DISTRICT BOUNDARY — 4º DISTRITO zone
  districtPulse+=.018;
  const damp=.08+.04*Math.sin(districtPulse);
  const dx=W*.06, dy=H*.12, dw=W*.46, dh=H*.78;

  // filled area (very faint)
  cx.fillStyle=c4(CYAN,.012+.005*Math.sin(districtPulse));
  cx.fillRect(dx,dy,dw,dh);

  // dashed perimeter
  cx.strokeStyle=c4(CYAN,damp);
  cx.lineWidth=1; cx.setLineDash([10,7]);
  cx.lineDashOffset=-T*.25;
  cx.strokeRect(dx,dy,dw,dh);
  cx.setLineDash([]);

  // corner L-brackets
  const cL=22;
  cx.strokeStyle=c4(CYAN,.6+.2*Math.sin(districtPulse));
  cx.lineWidth=1.8;
  [[dx,dy,1,1],[dx+dw,dy,-1,1],[dx,dy+dh,1,-1],[dx+dw,dy+dh,-1,-1]].forEach(([bx,by,sx,sy])=>{
    cx.beginPath();
    cx.moveTo(bx,by+sy*cL); cx.lineTo(bx,by); cx.lineTo(bx+sx*cL,by);
    cx.stroke();
  });

  // district label
  const fs=Math.max(9,W*.0075);
  cx.font=`700 ${fs}px 'Space Mono',monospace`;
  cx.fillStyle=c4(CYAN,.55+.15*Math.sin(districtPulse));
  cx.fillText('4° DISTRITO · PORTO ALEGRE', dx+6, dy-10);

  // measurement lines (like a GIS tool)
  cx.strokeStyle=c4(CYAN,.08);
  cx.lineWidth=.5; cx.setLineDash([3,4]);
  cx.beginPath(); cx.moveTo(dx,dy+dh+12); cx.lineTo(dx+dw,dy+dh+12); cx.stroke();
  cx.beginPath(); cx.moveTo(dx+dw+12,dy); cx.lineTo(dx+dw+12,dy+dh); cx.stroke();
  cx.setLineDash([]);
  cx.font=`400 ${Math.max(7,W*.006)}px 'Space Mono',monospace`;
  cx.fillStyle=c4(CYAN,.3);
  cx.fillText('847 ha', dx+dw*.38, dy+dh+24);

  // 12. FINE SCANLINES TEXTURE
  cx.fillStyle='rgba(2,6,8,0.012)';
  for(let y=T%3;y<H;y+=3) cx.fillRect(0,y,W,1);

  raf=requestAnimationFrame(draw);
}

function init(){
  resize();
  buildCity(); buildNodes(); buildTrails(); buildParticles();
  cancelAnimationFrame(raf); draw();
}

let rt;
window.addEventListener('resize',()=>{ clearTimeout(rt); rt=setTimeout(init,150); });
init();
})();

// ─── CURSOR ───
const dot=document.getElementById('cdot'),ring=document.getElementById('cring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;dot.style.left=mx+'px';dot.style.top=my+'px'});
(function loop(){rx+=(mx-rx)*.1;ry+=(my-ry)*.1;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(loop)})();
document.querySelectorAll('a,button,.marco-card,.proj-side,.prem-cell,.pc,.mfr,.li').forEach(el=>{
  el.addEventListener('mouseenter',()=>{ring.style.transform='translate(-50%,-50%) scale(2)';ring.style.opacity='.25'});
  el.addEventListener('mouseleave',()=>{ring.style.transform='translate(-50%,-50%) scale(1)';ring.style.opacity='.5'});
});

// ─── NAV SCROLL ───
window.addEventListener('scroll',()=>document.getElementById('nav').classList.toggle('sc',scrollY>60));

// ─── SCROLL REVEAL ───
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('vis'); });
},{threshold:.08});
document.querySelectorAll('.sr').forEach(el=>obs.observe(el));

// ─── BAR ANIMATION ───
const barObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.querySelectorAll('.phase-bar-fill').forEach((b,i)=>{
        b.style.transitionDelay=(i*0.08)+'s';
        b.style.transition='transform 0.8s cubic-bezier(.25,.46,.45,.94)';
        b.style.transform='scaleX(1)';
      });
    }
  });
},{threshold:.2});
document.querySelectorAll('.cron-phases').forEach(el=>barObs.observe(el));
