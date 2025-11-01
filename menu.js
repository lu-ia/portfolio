
(function(){
    const btn = document.querySelector('.hamburger');
    const menu = document.getElementById('menu-list');
    if(!btn || !menu) return;

    function setState(open){
    if(open){
        menu.classList.add('open');
        btn.setAttribute('aria-expanded','true');
        btn.setAttribute('aria-label','Cerrar menú');
    } else {
        menu.classList.remove('open');
        btn.setAttribute('aria-expanded','false');
        btn.setAttribute('aria-label','Abrir menú');
    }
    }

    btn.addEventListener('click',()=>{
    const isOpen = btn.getAttribute('aria-expanded') === 'true';
    setState(!isOpen);
    });

    menu.addEventListener('click', e => {
    if(e.target.tagName.toLowerCase() === 'a' && window.innerWidth <= 720){
        setState(false);
    }
    });

    document.addEventListener('keydown', e => {
    if(e.key === 'Escape') setState(false);
    });
})();

document.addEventListener("DOMContentLoaded", function() {

  function actualizarReloj() {
    const ahora = new Date();

    // Día, mes y año con dos dígitos
    const dia = String(ahora.getDate()).padStart(2, '0');
    const mes = String(ahora.getMonth() + 1).padStart(2, '0'); // Los meses van de 0 a 11
    const año = ahora.getFullYear();

    // Hora, minutos y segundos con dos dígitos
    const hora = String(ahora.getHours()).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    const segundos = String(ahora.getSeconds()).padStart(2, '0');

    const fechaHora = `${dia}/${mes}/${año}, ${hora}:${minutos}:${segundos}`;
    
    const reloj = document.getElementById('reloj');
    if (reloj) {
      reloj.textContent = fechaHora;
    }
  }

  // Actualiza cada segundo
  setInterval(actualizarReloj, 1000);
  actualizarReloj(); // Llamada inicial
});



