document.getElementById('application-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la forma tradicional
    
    const form = event.target;
    const successMessage = document.getElementById('success-message');

    // Aquí podrías agregar la lógica para enviar los datos a un servidor,
    // pero por ahora solo mostraremos el mensaje de éxito.

    // Mostramos el mensaje de éxito
    successMessage.classList.remove('hidden');
    
    // Ocultamos el formulario
    form.classList.add('hidden');
});