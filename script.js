(function(){
  // Navbar background on scroll
  const nav = document.querySelector('.navbar');
  window.addEventListener('scroll', ()=>{
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Copy code
  window.copyCode = () => {
    const text = document.getElementById('code').innerText;
    navigator.clipboard.writeText(text);
    const msg = document.getElementById('copiedMessage');
    msg.style.display = 'block';
    setTimeout(() => msg.style.display = 'none', 2000);
  };

  // AOS init
  document.addEventListener('DOMContentLoaded', ()=> {
    if (window.AOS) {
      AOS.init({ duration: 800, once: true });
    }
  });
})();
