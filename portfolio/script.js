// script.js
document.addEventListener('DOMContentLoaded',()=>{
  const explore = document.getElementById('exploreBtn');
  explore.addEventListener('click',(e)=>{
    e.preventDefault();
    document.querySelector('.services').scrollIntoView({behavior:'smooth'});
  });

  document.getElementById('contactForm').addEventListener('submit', (ev)=>{
    ev.preventDefault();
    alert('Grazie! Il modulo è un prototipo — sostituisci con la logica che preferisci.');
    ev.target.reset();
  });
});
document.addEventListener('DOMContentLoaded', () => {
  // Toggle per i pulsanti Show more / Show less
  document.querySelectorAll('.toggleBtn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.target;
      const grid = document.getElementById(targetId);

      if (grid.classList.contains('expanded')) {
        grid.classList.remove('expanded');
        grid.classList.add('limited');
        btn.textContent = 'Show more';
      } else {
        grid.classList.remove('limited');
        grid.classList.add('expanded');
        btn.textContent = 'Show less';
      }
    });
  });
});


// funzione globale accessibile dal pulsante HTML
function copiaTesto() {
  const testo = document.getElementById("email1").innerText;
  navigator.clipboard.writeText(testo)
    .then(() => alert("Copied: " + testo))
    .catch(err => console.error("Error", err));
}
function copiaNumber() {
  const testo = document.getElementById("number1").innerText;
  navigator.clipboard.writeText(testo)
    .then(() => alert("Copied: " + testo))
    .catch(err => console.error("Error", err));
}
