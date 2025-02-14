function moverBoton() {
            const botonNo = document.getElementById('botonNo');
            const x = Math.random() * (window.innerWidth - botonNo.offsetWidth);
            const y = Math.random() * (window.innerHeight - botonNo.offsetHeight);
            botonNo.style.position = 'absolute';
            botonNo.style.left = `${x}px`;
            botonNo.style.top = `${y}px`;
 }
