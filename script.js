document.getElementById('generar').addEventListener('click', function() {
    var codigo = Math.floor(100000 + Math.random() * 900000);
    document.getElementById('codigo').value = codigo;
});

document.getElementById('copiar').addEventListener('click', function() {
    var codigo = document.getElementById('codigo');
    codigo.select();
    codigo.setSelectionRange(0, 99999); // Para dispositivos móviles
    document.execCommand('copy');
    alert('Código copiado: ' + codigo.value);
});
