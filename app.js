
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
        
function showNextSlide() {
    // Remove a classe 'active' do slide atual
    slides[currentSlide].classList.remove('active');
    
    // Vai para o próximo slide (volta ao primeiro quando chega no final)
    currentSlide = (currentSlide + 1) % slides.length;
    
    // Adiciona a classe 'active' ao novo slide
    slides[currentSlide].classList.add('active');
}
        
// Troca de slide a cada 3 segundos
setInterval(showNextSlide, 2500);
        
// CONTADOR DE TEMPO EM TEMPO REAL
const startDate = new Date('2022-12-17T00:00:00'); // Data de início do namoro
        
function updateCounter() {
    const now = new Date(); // Data e hora atual
    const timeDifference = now - startDate; // Diferença em milissegundos
    
    // Convertendo milissegundos para dias, horas, minutos e segundos
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    
    // Atualizando o HTML com os valores calculados
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}
        
// Atualiza o contador a cada segundo (1000 milissegundos)
setInterval(updateCounter, 1000);
        
// Chama a função uma vez quando a página carrega
updateCounter();

// ANIMAÇÃO DE CORAÇÕES VOANDO
function createHeart() {
    const heartsContainer = document.getElementById('heartsContainer');
    const heart = document.createElement('div');
    
    // Adiciona a classe heart
    heart.classList.add('heart');
    
    // Escolhe tamanho aleatório
    const sizes = ['small', 'medium', 'large'];
    const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
    heart.classList.add(randomSize);
    
    // Símbolos de coração diferentes
    const heartSymbols = ['❤️', '💖', '💗', '💝'];
    heart.innerHTML = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
    
    // Posição horizontal aleatória
    heart.style.left = Math.random() * 100 + '%';
    
    // Delay aleatório para movimento mais natural
    heart.style.animationDelay = Math.random() * 2 + 's';
    
    // Adiciona o coração à tela
    heartsContainer.appendChild(heart);
    
    // Remove o coração depois da animação para não sobrecarregar
    setTimeout(() => {
        if (heart.parentNode) {
            heart.parentNode.removeChild(heart);
        }
    }, 15000); // Remove após 15 segundos
}
        
// Cria corações em intervalos aleatórios
function startHeartAnimation() {
    createHeart();
    
    // Próximo coração entre 1 a 3 segundos
    const nextHeartDelay = Math.random() * 1000 + 1000;
    setTimeout(startHeartAnimation, nextHeartDelay);
}
        
// Inicia a animação de corações quando a página carrega
window.addEventListener('load', () => {
    // Pequeno delay para a página carregar completamente
    setTimeout(startHeartAnimation, 200);
})