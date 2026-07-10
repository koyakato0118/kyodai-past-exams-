
const lessons = [...document.querySelectorAll('.lesson')];
const navLinks = [...document.querySelectorAll('.nav-link[data-target]')];
let currentIndex = 0;

function showLesson(id, push=true){
  const idx = lessons.findIndex(x => x.id === id);
  if(idx < 0) return;
  currentIndex = idx;
  lessons.forEach((x,i)=>x.classList.toggle('active',i===idx));
  navLinks.forEach(a=>a.classList.toggle('active',a.dataset.target===id));
  const lesson = lessons[idx];
  document.getElementById('crumb-question').textContent = lesson.dataset.crumb || lesson.dataset.title;
  document.getElementById('page-title').textContent = lesson.dataset.title;
  document.getElementById('prevBtn').disabled = idx===0;
  document.getElementById('nextBtn').disabled = idx===lessons.length-1;
  updateSideRail(lesson);
  if(push) history.replaceState(null,'','#'+id);
  window.scrollTo({top:0,behavior:'smooth'});
  closeSidebar();
}
function moveLesson(delta){
  const next = currentIndex + delta;
  if(next>=0 && next<lessons.length) showLesson(lessons[next].id);
}
function toggleWhy(btn){
  const panel = btn.closest('.formula-row')?.querySelector('.why-panel') || btn.nextElementSibling;
  if(panel) panel.classList.toggle('open');
}
function toggleSidebar(){document.getElementById('sidebar').classList.toggle('open')}
function closeSidebar(){if(window.innerWidth<=820)document.getElementById('sidebar').classList.remove('open')}
function updateSideRail(lesson){
  const tpl = lesson.querySelector('template.side-template');
  const rail = document.getElementById('rightRail');
  if(tpl && rail) rail.innerHTML = tpl.innerHTML;
}
function searchNav(){
  const q = document.getElementById('searchInput').value.trim().toLowerCase();
  if(!q) return;
  const hit = navLinks.find(a => a.textContent.toLowerCase().includes(q));
  if(hit) showLesson(hit.dataset.target);
}
document.addEventListener('DOMContentLoaded',()=>{
  navLinks.forEach(a=>a.addEventListener('click',e=>{e.preventDefault();showLesson(a.dataset.target)}));
  const hash = location.hash.replace('#','');
  showLesson(lessons.some(x=>x.id===hash)?hash:lessons[0].id,false);
  document.getElementById('searchInput')?.addEventListener('keydown',e=>{if(e.key==='Enter')searchNav()});
});
