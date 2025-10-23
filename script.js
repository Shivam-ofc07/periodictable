/* Periodic Studio - interactive periodic table
   - mobile menu toggle
   - inject table elements (first 36 included as demo)
   - search + filter
   - modal with 3D atom (Three.js)
   - animations and accessibility-ready
*/

/* ---------- ELEMENT DATA (first 36 sample) ---------- */
/* You can expand this array with elements 37..118 later */
const ELEMENTS = [
  {num:1,sym:"H",name:"Hydrogen",mass:"1.008",category:"nonmetal",group:1,period:1,ox:"±1",electrons:"1s1",summary:"Colorless, odorless gas. Lightest element."},
  {num:2,sym:"He",name:"Helium",mass:"4.0026",category:"noble gas",group:18,period:1,ox:"0",electrons:"1s2",summary:"Inert noble gas used in cryogenics."},
  {num:3,sym:"Li",name:"Lithium",mass:"6.94",category:"alkali metal",group:1,period:2,ox:"+1",electrons:"[He] 2s1",summary:"Soft, silvery metal used in batteries."},
  {num:4,sym:"Be",name:"Beryllium",mass:"9.0122",category:"alkaline earth metal",group:2,period:2,ox:"+2",electrons:"[He] 2s2",summary:"Light metal with high stiffness."},
  {num:5,sym:"B",name:"Boron",mass:"10.81",category:"metalloid",group:13,period:2,ox:"±3",electrons:"[He] 2s2 2p1",summary:"Boron is a metalloid used in borosilicate glass."},
  {num:6,sym:"C",name:"Carbon",mass:"12.011",category:"nonmetal",group:14,period:2,ox:"±4",electrons:"[He] 2s2 2p2",summary:"Basis of organic chemistry; many allotropes."},
  {num:7,sym:"N",name:"Nitrogen",mass:"14.007",category:"nonmetal",group:15,period:2,ox:"-3",electrons:"[He] 2s2 2p3",summary:"Major component of air; essential for life."},
  {num:8,sym:"O",name:"Oxygen",mass:"15.999",category:"nonmetal",group:16,period:2,ox:"-2",electrons:"[He] 2s2 2p4",summary:"Supports combustion and respiration."},
  {num:9,sym:"F",name:"Fluorine",mass:"18.998",category:"halogen",group:17,period:2,ox:"-1",electrons:"[He] 2s2 2p5",summary:"Most reactive halogen gas."},
  {num:10,sym:"Ne",name:"Neon",mass:"20.180",category:"noble gas",group:18,period:2,ox:"0",electrons:"[He] 2s2 2p6",summary:"Inert gas used in neon signs."},
  {num:11,sym:"Na",name:"Sodium",mass:"22.990",category:"alkali metal",group:1,period:3,ox:"+1",electrons:"[Ne] 3s1",summary:"Soft metal; reacts with water."},
  {num:12,sym:"Mg",name:"Magnesium",mass:"24.305",category:"alkaline earth metal",group:2,period:3,ox:"+2",electrons:"[Ne] 3s2",summary:"Light metal used in alloys."},
  {num:13,sym:"Al",name:"Aluminium",mass:"26.982",category:"post-transition metal",group:13,period:3,ox:"+3",electrons:"[Ne] 3s2 3p1",summary:"Light, corrosion-resistant metal."},
  {num:14,sym:"Si",name:"Silicon",mass:"28.085",category:"metalloid",group:14,period:3,ox:"±4",electrons:"[Ne] 3s2 3p2",summary:"Semiconductor foundation of electronics."},
  {num:15,sym:"P",name:"Phosphorus",mass:"30.974",category:"nonmetal",group:15,period:3,ox:"-3",electrons:"[Ne] 3s2 3p3",summary:"Important for life; found in DNA."},
  {num:16,sym:"S",name:"Sulfur",mass:"32.06",category:"nonmetal",group:16,period:3,ox:"-2",electrons:"[Ne] 3s2 3p4",summary:"Yellow nonmetal; used in fertilizers."},
  {num:17,sym:"Cl",name:"Chlorine",mass:"35.45",category:"halogen",group:17,period:3,ox:"-1",electrons:"[Ne] 3s2 3p5",summary:"Greenish gas; disinfectant in salts."},
  {num:18,sym:"Ar",name:"Argon",mass:"39.948",category:"noble gas",group:18,period:3,ox:"0",electrons:"[Ne] 3s2 3p6",summary:"Inert gas used in lighting and welding."},
  {num:19,sym:"K",name:"Potassium",mass:"39.098",category:"alkali metal",group:1,period:4,ox:"+1",electrons:"[Ar] 4s1",summary:"Soft, reactive metal; essential for biology."},
  {num:20,sym:"Ca",name:"Calcium",mass:"40.078",category:"alkaline earth metal",group:2,period:4,ox:"+2",electrons:"[Ar] 4s2",summary:"Important for bones and materials."},
  {num:21,sym:"Sc",name:"Scandium",mass:"44.956",category:"transition metal",group:3,period:4,ox:"+3",electrons:"[Ar] 3d1 4s2",summary:"Light transition metal used in alloys."},
  {num:22,sym:"Ti",name:"Titanium",mass:"47.867",category:"transition metal",group:4,period:4,ox:"+4",electrons:"[Ar] 3d2 4s2",summary:"Strong, corrosion-resistant metal."},
  {num:23,sym:"V",name:"Vanadium",mass:"50.942",category:"transition metal",group:5,period:4,ox:"var.",electrons:"[Ar] 3d3 4s2",summary:"Used in steel alloys."},
  {num:24,sym:"Cr",name:"Chromium",mass:"51.996",category:"transition metal",group:6,period:4,ox:"var.",electrons:"[Ar] 3d5 4s1",summary:"Used for plating and hardness."},
  {num:25,sym:"Mn",name:"Manganese",mass:"54.938",category:"transition metal",group:7,period:4,ox:"var.",electrons:"[Ar] 3d5 4s2",summary:"Alloying element in steel."},
  {num:26,sym:"Fe",name:"Iron",mass:"55.845",category:"transition metal",group:8,period:4,ox:"var.",electrons:"[Ar] 3d6 4s2",summary:"Fundamental metal for construction."},
  {num:27,sym:"Co",name:"Cobalt",mass:"58.933",category:"transition metal",group:9,period:4,ox:"var.",electrons:"[Ar] 3d7 4s2",summary:"Used in magnets and batteries."},
  {num:28,sym:"Ni",name:"Nickel",mass:"58.693",category:"transition metal",group:10,period:4,ox:"var.",electrons:"[Ar] 3d8 4s2",summary:"Used in alloys and coins."},
  {num:29,sym:"Cu",name:"Copper",mass:"63.546",category:"transition metal",group:11,period:4,ox:"+2",electrons:"[Ar] 3d10 4s1",summary:"Excellent conductor of electricity."},
  {num:30,sym:"Zn",name:"Zinc",mass:"65.38",category:"transition metal",group:12,period:4,ox:"+2",electrons:"[Ar] 3d10 4s2",summary:"Used for galvanising steel."},
  {num:31,sym:"Ga",name:"Gallium",mass:"69.723",category:"post-transition metal",group:13,period:4,ox:"+3",electrons:"[Ar] 3d10 4s2 4p1",summary:"Melts near 30°C; semiconductor use."},
  {num:32,sym:"Ge",name:"Germanium",mass:"72.630",category:"metalloid",group:14,period:4,ox:"var.",electrons:"[Ar] 3d10 4s2 4p2",summary:"Semiconductor element."},
  {num:33,sym:"As",name:"Arsenic",mass:"74.922",category:"metalloid",group:15,period:4,ox:"var.",electrons:"[Ar] 3d10 4s2 4p3",summary:"Toxic metalloid with industrial roles."},
  {num:34,sym:"Se",name:"Selenium",mass:"78.971",category:"nonmetal",group:16,period:4,ox:"var.",electrons:"[Ar] 3d10 4s2 4p4",summary:"Used in electronics and glass."},
  {num:35,sym:"Br",name:"Bromine",mass:"79.904",category:"halogen",group:17,period:4,ox:"-1",electrons:"[Ar] 3d10 4s2 4p5",summary:"Reddish-brown liquid at room temp."},
  {num:36,sym:"Kr",name:"Krypton",mass:"83.798",category:"noble gas",group:18,period:4,ox:"0",electrons:"[Ar] 3d10 4s2 4p6",summary:"Noble gas used in lighting."}
];

/* ---------- UI ELEMENTS ---------- */
const tableGrid = document.getElementById('tableGrid');
const searchInput = document.getElementById('search');
const filterSelect = document.getElementById('filterCategory');
const resetBtn = document.getElementById('resetBtn');
const modal = document.getElementById('elementModal');
const modalClose = document.getElementById('modalClose');
const element3d = document.getElementById('element3d');

/* ---------- MOBILE MENU ---------- */
const menuBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');
menuBtn.addEventListener('click', () => {
  const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
  menuBtn.setAttribute('aria-expanded', String(!expanded));
  mobileNav.toggleAttribute('data-open');
  if (mobileNav.hasAttribute('data-open')) {
    mobileNav.style.transform = 'translateY(0)'; mobileNav.style.opacity='1'; mobileNav.setAttribute('aria-hidden','false');
  } else { mobileNav.style.transform = 'translateY(-8px)'; mobileNav.style.opacity='0'; mobileNav.setAttribute('aria-hidden','true'); }
});
mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>{ mobileNav.removeAttribute('data-open'); menuBtn.setAttribute('aria-expanded','false');}));

/* ---------- RENDER TABLE (with grid positions approximated) ---------- */
/* We'll render elements sequentially into an 18-column grid.
   For simplicity the layout will rely on grid auto-placement — works for demo.
*/
function renderElements(list){
  tableGrid.innerHTML = '';
  list.forEach(el=>{
    const div = document.createElement('div');
    div.className = `element cat-${normalizeCat(el.category)}`;
    div.setAttribute('data-num', el.num);
    div.setAttribute('tabindex','0');
    div.innerHTML = `
      <div class="el-top">
        <div class="el-number">${el.num}</div>
        <div class="el-mass">${el.mass}</div>
      </div>
      <div class="el-symbol">${escapeHtml(el.sym)}</div>
      <div class="el-name">${escapeHtml(el.name)}</div>
    `;
    div.addEventListener('click', ()=> openElement(el.num));
    div.addEventListener('keydown', (e)=>{ if(e.key==='Enter') openElement(el.num); });
    tableGrid.appendChild(div);
  });
}

/* helpers */
function normalizeCat(cat){ return String(cat||'').toLowerCase().replace(/\s+/g,'-'); }
function escapeHtml(s){ return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

/* initial render */
renderElements(ELEMENTS);

/* ---------- SEARCH & FILTER ---------- */
function applyFilters(){
  const q = searchInput.value.trim().toLowerCase();
  const cat = filterSelect.value;
  let result = ELEMENTS.filter(el=>{
    const matchQ = q === '' || String(el.name).toLowerCase().includes(q) || String(el.sym).toLowerCase().includes(q) || String(el.num)===q;
    const matchCat = cat==='all' || normalizeCat(el.category)===normalizeCat(cat);
    return matchQ && matchCat;
  });
  renderElements(result);
}
searchInput.addEventListener('input', applyFilters);
filterSelect.addEventListener('change', applyFilters);
resetBtn.addEventListener('click', ()=>{
  searchInput.value=''; filterSelect.value='all'; renderElements(ELEMENTS);
});

/* ---------- ELEMENT MODAL + 3D ATOM ---------- */
const elNumber = document.getElementById('elNumber');
const elSymbol = document.getElementById('elSymbol');
const elName = document.getElementById('elName');
const elMass = document.getElementById('elMass');
const elCategory = document.getElementById('elCategory');
const elConfig = document.getElementById('elConfig');
const elSummary = document.getElementById('elSummary');
const elGroup = document.getElementById('elGroup');
const elPeriod = document.getElementById('elPeriod');
const elOx = document.getElementById('elOx');

let threeScene = null; // store three.js scene for modal
function openElement(num){
  const el = ELEMENTS.find(x=>x.num===num);
  if(!el) return;
  elNumber.textContent = `#${el.num}`;
  elSymbol.textContent = el.sym;
  elSymbol.className='el-symbol-large';
  elName.textContent = el.name;
  elMass.textContent = `${el.mass} u`;
  elCategory.textContent = `Category: ${el.category}`;
  elConfig.textContent = el.electrons || '';
  elSummary.textContent = el.summary || '';
  elGroup.textContent = el.group || '-';
  elPeriod.textContent = el.period || '-';
  elOx.textContent = el.ox || '-';

  // show modal
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';

  // init 3D atom in element3d
  initElement3D(el);
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e)=>{ if(e.target===modal) closeModal(); });

function closeModal(){
  // dispose three scene if exists
  if(threeScene && typeof threeScene.dispose === 'function') threeScene.dispose();
  element3d.innerHTML=''; // remove canvas
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden','true');
  document.body.style.overflow='';
}

/* ---------- small 3D element viewer (electrons as orbiting particles) ---------- */
function initElement3D(el){
  // cleanup old
  if(threeScene && typeof threeScene.dispose === 'function') threeScene.dispose();
  element3d.innerHTML='';

  // container dims
  const W = element3d.clientWidth || 360;
  const H = element3d.clientHeight || 260;

  // basic three setup
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, W/H, 0.1, 1000);
  camera.position.set(0, 0, 40);

  const renderer = new THREE.WebGLRenderer({antialias:true, alpha:true});
  renderer.setSize(W, H);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  element3d.appendChild(renderer.domElement);

  // lights
  const amb = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(amb);
  const dir = new THREE.DirectionalLight(0xffd79b, 0.6);
  dir.position.set(10,10,10); scene.add(dir);

  // nucleus (sphere)
  const nucGeo = new THREE.SphereGeometry(4.0, 32, 24);
  const nucMat = new THREE.MeshStandardMaterial({color:0xffc76a, metalness:0.3, roughness:0.4, emissive:0x111100});
  const nucleus = new THREE.Mesh(nucGeo, nucMat);
  scene.add(nucleus);

  // electron shells derived from electron count roughly: parse electron string or use num
  // fallback: use naive shell counts [2,8,18,...] until electron count
  const totalElectrons = approximateElectrons(el);
  const shells = distributeElectrons(totalElectrons);
  const electronObjects = [];

  shells.forEach((count,i)=>{
    const radius = 7 + i*5;
    for(let j=0;j<count;j++){
      const theta = Math.random()*Math.PI*2;
      const phi = Math.acos(THREE.MathUtils.randFloatSpread(2));
      const x = Math.cos(theta)*radius*Math.sin(phi);
      const y = Math.sin(phi)*radius*Math.sin(theta);
      const z = Math.cos(phi)*radius;
      const geo = new THREE.SphereGeometry(0.45, 10, 8);
      const mat = new THREE.MeshStandardMaterial({color:0xffffff, emissive:0xffffdd, roughness:0.4});
      const elMesh = new THREE.Mesh(geo, mat);
      elMesh.position.set(x,y,z);
      scene.add(elMesh);
      electronObjects.push({mesh:elMesh, radius, speed: 0.005 + Math.random()*0.01, phase: Math.random()*Math.PI*2});
    }
  });

  // subtle particle ring
  const ringGeo = new THREE.RingGeometry(14, 14.3, 64);
  const ringMat = new THREE.MeshBasicMaterial({color:0xffd88a, side:THREE.DoubleSide, opacity:0.06, transparent:true});
  const ring = new THREE.Mesh(ringGeo, ringMat);
  ring.rotation.x = Math.PI/2;
  scene.add(ring);

  // resize
  function onResize(){
    const w = element3d.clientWidth || W;
    const h = element3d.clientHeight || H;
    renderer.setSize(w,h);
    camera.aspect = w/h;
    camera.updateProjectionMatrix();
  }
  window.addEventListener('resize', onResize);

  // animate
  let t=0;
  function animate(){
    t += 0.01;
    nucleus.rotation.y += 0.004;
    nucleus.rotation.x += 0.002;
    electronObjects.forEach((obj,idx)=>{
      const m = obj.mesh;
      const s = obj.speed;
      obj.phase += s;
      const a = obj.phase;
      m.position.x = Math.cos(a + idx) * obj.radius * Math.cos(a*0.3);
      m.position.z = Math.sin(a + idx) * obj.radius * Math.cos(a*0.3);
      m.position.y = Math.sin(a*0.7) * (obj.radius*0.12);
    });
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
  animate();

  // add dispose helper
  threeScene = {
    renderer, scene, camera,
    dispose(){
      try{
        renderer.dispose();
        scene.clear();
        element3d.innerHTML='';
        window.removeEventListener('resize', onResize);
      }catch(e){}
    }
  };
}

/* small helpers to approximate electron count and shells */
function approximateElectrons(el){
  // try to parse electrons string like "[Ne] 3s2 3p1" -> approximate by atomic number
  return Number(el.num) || 1;
}
function distributeElectrons(total){
  // naive distribution: K(2), L(8), M(18), N(32)...
  const limits = [2,8,18,32,32,18,8];
  const shells = [];
  let remaining = total;
  for(let i=0;i<limits.length && remaining>0;i++){
    const take = Math.min(limits[i], remaining);
    shells.push(take);
    remaining -= take;
  }
  return shells;
}

/* ---------- VIDEO / CONTACT ---------- */
const form = document.getElementById('contactForm');
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  alert('Thank you! Message received (demo).');
  form.reset();
});

/* ---------- INITIAL UI TOUCHUPS ---------- */
document.getElementById('year').textContent = new Date().getFullYear();

/* ---------- accessibility: keyboard close modal ---------- */
document.addEventListener('keydown',(e)=>{
  if(e.key==='Escape' && !modal.classList.contains('hidden')) closeModal();
});
