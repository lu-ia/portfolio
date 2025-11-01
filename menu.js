
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
