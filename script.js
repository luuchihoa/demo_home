function switchTab(e){
  const btn = e.currentTarget;
  const target = btn.dataset.target;
  if(!target) return;
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  const el = document.getElementById(target);
  if(el) el.classList.add('active');

  document.querySelectorAll('.tab-item').forEach(t=>t.classList.remove('active'));
  btn.classList.add('active');
}

function toggleModal(show){
  const m = document.getElementById('modal');
  if(show){
    m.classList.add('show');
    m.setAttribute('aria-hidden','false');
    setTimeout(()=>document.getElementById('u').focus(), 80);
  } else {
    m.classList.remove('show');
    m.setAttribute('aria-hidden','true');
  }
}

function fakeLogin(){
  alert('Fake login (demo).');
  toggleModal(false);
}

function setTheme(cls){
  document.body.className = cls || '';
  localStorage.setItem('demo-theme', cls || '');
}

function setFont(level){
  let size = 16;
  if(level === 'small') size = 14;
  if(level === 'medium') size = 16;
  if(level === 'large') size = 20;

  localStorage.setItem('font-size', size);
  applyFont();
}

function applyFont(){
  const size = parseInt(localStorage.getItem('font-size') || 16);
  document.body.style.fontSize = size + "px";
  document.querySelectorAll("h1,h2,h3").forEach(el=>{ el.style.fontSize = (size + 6) + "px"; });
  document.querySelectorAll("input, button, .tab-item").forEach(el=>{ el.style.fontSize = size + "px"; });
}

function autoFont(){
  const width = window.innerWidth;
  let base = (width < 480) ? 15 : (width < 900 ? 16 : 18);
  localStorage.setItem('font-size', base);
  applyFont();
}

applyFont();

function adaptSizes(){
  const w = window.innerWidth;
  const tb = document.querySelector('.tabbar');
  if(w < 360) tb.style.padding = '6px';
  else tb.style.padding = '';
}
window.addEventListener('resize', adaptSizes);
adaptSizes();

document.getElementById('modal').addEventListener('click', (e)=>{
  if(e.target.id === 'modal') toggleModal(false);
});

document.addEventListener('keydown', (e)=>{
  if(e.key === 'Escape') toggleModal(false);
});

(function(){
  const saved = localStorage.getItem('demo-theme') || '';
  if(saved) setTheme(saved);
})();
