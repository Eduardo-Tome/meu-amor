document.getElementById('showButton').addEventListener('click', function() {
    var content = document.getElementById('content');
    var audio = document.getElementById('audio');
    var image = document.getElementById('image');

    // Lista das imagens para alternar
    var images = [
        'IMG-20240728-WA0055.jpg', // Substitua pelo caminho da primeira imagem
        'b99fc7f0-8689-4031-b1fd-9d5b9d56f6ac.jfif', // Substitua pelo caminho da segunda imagem
        'cd5b4805-c2d1-4136-a28f-284258aa667f.jfif', // Substitua pelo caminho da terceira imagem
        '7026d3f8-33c7-4fd0-81e9-23c09b25f45b.jfif'  // Substitua pelo caminho da quarta imagem
    ];

    // Exibe o conteúdo (imagem e música)
    content.classList.remove('hidden');
    
    // Toca a música
    audio.play();
    
    // Função para alternar as imagens
    function changeImage(index) {
        image.src = images[index];
        index = (index + 1) % images.length; // Incrementa o índice e volta ao início se necessário
        setTimeout(function() {
            changeImage(index);
        }, 3000); // Tempo em milissegundos (5000ms = 5 segundos)
    }

    // Começa a alternar as imagens
    changeImage(0);
});