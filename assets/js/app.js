var verificarconexion = function() {
    var estado = document.getElementById('estado');

    if ( navigator.onLine && estado.classList.contains('alert-danger') ) {
        estado.innerHTML = 'Estas Conectado a Internet !';
        estado.classList.remove('alert-danger');
        estado.classList.add('alert-success');
    }
    if ( ! navigator.onLine && estado.classList.contains('alert-success') ) {
        estado.innerHTML = 'Estas Desconectado de Internet !';
        estado.classList.remove('alert-success');
        estado.classList.add('alert-danger'); 
    }
};

window.addEventListener('online', verificarconexion);
window.addEventListener('offline', verificarconexion);