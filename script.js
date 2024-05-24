// Definir una lista de códigos predefinidos
var codigos = ['123456', '234567', '345678', '456789', '567890', '678901'];

document.getElementById('generar').addEventListener('click', function() {
    // Seleccionar un código aleatorio de la lista
    var codigoSeleccionado = codigos[Math.floor(Math.random() * codigos.length)];
    document.getElementById('codigo').value = codigoSeleccionado;
});

document.getElementById('copiar').addEventListener('click', function() {
    var codigo = document.getElementById('codigo');
    codigo.select();
    codigo.setSelectionRange(0, 99999); // Para dispositivos móviles
    document.execCommand('copy');
    alert('Código copiado: ' + codigo.value);
});


