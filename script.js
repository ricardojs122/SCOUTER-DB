const display = document.getElementById('display');
const scanBtn = document.getElementById('scanBtn');

scanBtn.addEventListener('click', () => {
  // Gerar um valor aleatório entre 1 e 25000 para simular a leitura do poder
  const powerLevel = Math.floor(Math.random() * 25000) + 1;
  
  display.innerText = powerLevel;
});
