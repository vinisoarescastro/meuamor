
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
setInterval(showNextSlide, 3000);
        
// CONTADOR DE TEMPO EM TEMPO REAL
const startDate = new Date('2022-12-17T22:00:00'); // Data de início do namoro
        
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