// Year in footer
document.getElementById('yr').textContent = new Date().getFullYear();

// Scroll reveal animation
const obs = new IntersectionObserver((entries)=>{
  entries.forEach((e,i)=>{
    if(e.isIntersecting){
      setTimeout(()=>e.target.classList.add('on'), i*70);
      obs.unobserve(e.target);
    }
  });
},{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

// Portfolio modal
function openPortfolio(){
  document.getElementById('portfolioModal').classList.add('open');
  document.body.style.overflow='hidden';
}
function closePortfolio(){
  document.getElementById('portfolioModal').classList.remove('open');
  document.body.style.overflow='';
}
document.getElementById('portfolioModal').addEventListener('click',(e)=>{
  if(e.target.id==='portfolioModal') closePortfolio();
});
document.addEventListener('keydown',(e)=>{ if(e.key==='Escape') closePortfolio(); });

// Blur active nav link on mobile tap
document.querySelectorAll('.nav-links a[href^="#"]').forEach(a=>{
  a.addEventListener('click',()=>{
    if(window.innerWidth < 900) document.activeElement.blur();
  });
});
