const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const reloadBtn = document.querySelector('#reloadBtn');


const jump = () => {
   mario.classList.add('jump');
   
setTimeout(() => {

    mario.classList.remove('jump');

 }, 500);

}


 function gameOver() {
      
      reloadBtn.style.display = 'block';
          
    }

    let score = 0;
    const scoreDisplay = document.getElementById('score');
    const highScoreDisplay = document.getElementById('highScore');

    let highScore = localStorage.getItem('highScore') || 0; 
    highScoreDisplay.textContent =  `Recorde: ${highScore}`;

    const scoreInterval = setInterval (() => {
      if (reloadBtn.style.display === 'none') {
         score ++;
         scoreDisplay.textContent =  `Score: ${score}`;

         if (score > highScore) {
            highScore = score;
            localStorage.setItem('highScore', highScore);
            highScoreDisplay.textContent = `Recorde: ${highScore}`;
         }
      }
    }, 200);
    
     const loop = setInterval(() => {

     console.log('loop')

     const pipePosition = pipe.offsetLeft;
     const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

        console.log(marioPosition);
     

        if  (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) { 

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './imagens/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';
        
         gameOver();

         clearInterval(loop); 
   }
}, 10);


document.addEventListener('keydown', jump);
