const revealText = document.querySelector('.reveal');

window.addEventListener('load', () => {
  revealText.style.animation = 'slideUp 1s ease forwards';
});

const style = document.createElement('style');
style.innerHTML = `
@keyframes slideUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}`;
document.head.appendChild(style);
