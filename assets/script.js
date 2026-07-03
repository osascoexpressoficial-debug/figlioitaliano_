const progressBar = document.getElementById('progressBar');
const contextCta = document.getElementById('contextCta');
const navLinks = Array.from(document.querySelectorAll('.nav a'));
const sections = Array.from(document.querySelectorAll('.section-watch'));
const reveals = Array.from(document.querySelectorAll('.reveal'));

function updateProgress(){
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = `${progress}%`;
}

const sectionObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      const sectionKey = entry.target.dataset.section;
      const cta = entry.target.dataset.cta;
      const href = entry.target.dataset.ctaHref;
      navLinks.forEach(link=> link.classList.toggle('active', link.dataset.nav === sectionKey));
      if(cta && href){
        contextCta.textContent = cta;
        contextCta.href = href;
        if(href.startsWith('http')){
          contextCta.target = '_blank';
          contextCta.rel = 'noopener';
        }else{
          contextCta.removeAttribute('target');
          contextCta.removeAttribute('rel');
        }
      }
    }
  });
},{rootMargin:'-35% 0px -55% 0px',threshold:0});
sections.forEach(section=>sectionObserver.observe(section));

const revealObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('in');
      revealObserver.unobserve(entry.target);
    }
  });
},{threshold:.12,rootMargin:'0px 0px -6% 0px'});
reveals.forEach(el=>revealObserver.observe(el));

window.addEventListener('scroll', updateProgress, {passive:true});
updateProgress();

// keep only one commercial details block open at a time on mobile and desktop
const details = Array.from(document.querySelectorAll('.accordions details'));
details.forEach(item => {
  item.addEventListener('toggle', () => {
    if(item.open){ details.forEach(other => { if(other !== item) other.open = false; }); }
  });
});
