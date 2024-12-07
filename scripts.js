document.addEventListener('DOMContentLoaded', () => {

    setInterval(() => {
        const times = new Date().toLocaleTimeString();
        const val = document.querySelector('#timeSpan');
        val.textContent = times;

    }, 1000);


    const btnGuess = document.querySelector('#submitguess');
    let prevGuessValue = [];
    let playGame = false;
    let remainingGuess = 10;
    let isStartedGame = false;
    const prevGuess = document.querySelector('#guesses');
    const confettiContainer = document.querySelector('.confetti-container');
    const remGuess = document.querySelector('#lastResult');
    let randNum = Math.floor(Math.random() * 100 + 1);  
    console.log(randNum);
    

    btnGuess.addEventListener('click', () => {
        let inptGuess = parseInt(document.querySelector('#guess').value);    
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
            prevGuess.innerText = '';
            remGuess.textContent = '10'
            inptGuess='';
            remainingGuess = 10;
            isStartedGame = true;
            playGame=false
            prevGuessValue = [];
            confettiContainer.style.display = 'none';

        }

        if (inptGuess && !isNaN(inptGuess) && inptGuess > 0 && inptGuess < 101) {
            remGuess.textContent = --remainingGuess;

             if (inptGuess < randNum) {
                 message.textContent = 'Your guess number is too low'
                 message.style.color = 'red'
                 calculatePreviousValue(inptGuess);


             } else if (inptGuess > randNum) {
                 message.textContent = 'Your guess number is too high';
                 message.style.color = 'red'
                 calculatePreviousValue(inptGuess);
             } 
            
            


            if (inptGuess == randNum) {
                guessContainer.style.display = 'hidden';
                document.querySelector('#guess').style.visibility = 'hidden';
                document.querySelector('.resultParas').style.visibility = 'hidden' 
                randNumber.textContent = '🎉Congratulation! Your guess is correct  and  You have won myntra coupon code- MYNTRA300🎉';  
                btnGuess.textContent = 'Start New Game',
                confettiContainer.style.display = 'block';
                isStartedGame = false;
                message.textContent = '';    
                btnGuess.textContent = 'Start New Game'
               
                IsfromBeg=true
                inptGuess = '';
                startButton();
                

            }

            
        } else {
            if (isStartedGame) {
                message.textContent = '';
                isStartedGame = false;
                playGame=false;
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
        playGame = true;
        randNum = Math.floor(Math.random() * 100 + 1);

    }
    function calculatePreviousValue(inptGuess) {
        prevGuessValue.push(inptGuess);
       // remGuess.textContent = --remainingGuess;
        prevGuess.innerText = ` ${prevGuessValue},`
        document.querySelector('#guess').autofocus;
        document.querySelector('#guess').value = '';
        document.querySelector('#guess').style.visibility = 'visible';
        document.querySelector('.resultParas').style.visibility = 'visible' 
        
    }



    

})