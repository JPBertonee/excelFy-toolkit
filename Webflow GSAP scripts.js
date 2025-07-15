
function copyCode() {
  const code = document.getElementById('code').textContent;
  navigator.clipboard.writeText(code).then(() => {
    document.getElementById('copiedMessage').classList.remove('hidden');
    setTimeout(() => {
      document.getElementById('copiedMessage').classList.add('hidden');
    }, 2000);
  });
}

gsap.utils.toArray('.animate-fade-in').forEach(el => {
  gsap.fromTo(el, { opacity: 0, y: 40 }, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: el,
      start: 'top 80%',
    }
  });
});
