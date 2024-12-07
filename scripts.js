document.addEventListener('DOMContentLoaded', () => {

    setInterval(() => {
        const times = new Date().toLocaleTimeString();
        const val = document.querySelector('#timeSpan');
        val.textContent = times;

    }, 1000);


    const btnGuess = document.querySelector('#submitguess');
    let prevGuessValue = [];
    let playGame = true;
    let remainingGuess = 10;
    let isStartedGame = false;
    const prevGuess = document.querySelector('#guesses');
    const confettiContainer = document.querySelector('.confetti-container');

    const randNum = Math.floor(Math.random() * 20 + 1);  

    btnGuess.addEventListener('click', () => {
        let inptGuess = parseInt(document.querySelector('#guess').value);    
        const remGuess = document.querySelector('#lastResult');
        const message = document.querySelector('#lowOrHi');
        const guessContainer = document.querySelector('#guessRemaingContainer');
        const randNumber = document.querySelector('#randNum');

        if (playGame) {
            document.querySelector('#guess').style.visibility = 'visible';
            document.querySelector('#guess').style.backgroundColor = 'white';
            document.querySelector('#guess').disabled = false;
            document.querySelector('#guess').textContent='';
            document.querySelector('#guess').value = '';
            btnGuess.textContent = 'Submit Guess'
            randNumber.textContent=''
            message.textContent = '';
            prevGuess.innerText = ''
            remGuess.textContent = '10'
            remainingGuess = 10;
            isStartedGame = true
            playGame = false;
            confettiContainer.style.display = 'none';

        }

        if (inptGuess && !isNaN(inptGuess) && inptGuess > 0 && inptGuess < 101) {
            remGuess.textContent = --remainingGuess;

             if (inptGuess < randNum) {
                 message.textContent = 'Your guess number is too low'
                 message.style.color = 'red'
                 //randNumber.textContent = `Better luck next time -😁 ${randNum} 😁`;
                 calculatePreviousValue(inptGuess);


             } else if (inptGuess > randNum) {
                 message.textContent = 'Your guess number is too high';
                 message.style.color = 'red'
                // randNumber.textContent = `Better luck next time -😁 ${randNum} 😁`;
                 calculatePreviousValue(inptGuess);
             } 
            
            


            if (inptGuess == randNum) {
                guessContainer.style.display = 'hidden';
                document.querySelector('#guess').style.visibility = 'hidden';
                randNumber.textContent = '🎉Congratulation! Your guess is correct  and  You have won myntra coupon code- MYNTRA300🎉';  
                btnGuess.textContent = 'Start New Game',
                confettiContainer.style.display = 'block';
                document.querySelector('.resultParas').style.display='none'     
                btnGuess.textContent = 'Start New Game'
                prevGuessValue = [];
                
                playGame = true;
                

            }

            
        } else {
            if (isStartedGame) {
                message.textContent = '';
                isStartedGame = false;
            } else {
                randNumber.textContent='';
                message.textContent = 'Please give Valid input ';
                message.style.color = 'red'
            }

        }
        
        

        if (remainingGuess == 0) {
            document.querySelector('#guess').style.backgroundColor = 'red';
            document.querySelector('#guess').disabled = true;
            message.textContent = 'Game Over! You ran out of guesses.';
            randNumber.textContent = `Better luck next time -😁 ${randNum} 😁`;
           
            startButton();

        }
    })
    function startButton() {
        btnGuess.textContent = 'Start New Game'
        prevGuessValue = [];
        remainingGuess = 0;
        playGame = true;

    }
    function calculatePreviousValue(inptGuess) {
        prevGuessValue.push(inptGuess);
        prevGuess.innerText = ` ${prevGuessValue},`
        document.querySelector('#guess').autofocus;
        document.querySelector('#guess').value = '';
    }



    

})