document.addEventListener('DOMContentLoaded', () => {



    setInterval(() => {
        const times = new Date().toLocaleTimeString();
        const val = document.querySelector('#timeSpan');
        val.style.color = 'rgb(2, 0, 36)'
        val.textContent = times;

    }, 1000);


    const btnGuess = document.querySelector('#submitguess');
    let prevGuessValue = [];
    let playGame = false;
    let remainingGuess = 10;
    let isStartedGame = false;

    btnGuess.addEventListener('click', () => {
        let inptGuess = parseInt(document.querySelector('#guess').value);
        const randNum = Math.floor(Math.random() * 100 + 1);
        const prevGuess = document.querySelector('#guesses');
        const remGuess = document.querySelector('#lastResult');
        const message = document.querySelector('#lowOrHi');
        const guessContainer = document.querySelector('#guessRemaingContainer');
        const randNumber = document.querySelector('#randNum');

        if (playGame) {
            document.querySelector('#guess').style.backgroundColor = 'white';
            document.querySelector('#guess').disabled = false;
            btnGuess.textContent = 'Submit Guess'
            message.textContent = '';
            prevGuess.innerText = ''
            remGuess.textContent = '10'
            remainingGuess = 10;
            isStartedGame = true
            playGame = false;

        }

        if (inptGuess && !isNaN(inptGuess) && inptGuess > 0 && inptGuess < 101) {
            remGuess.textContent = --remainingGuess;

            if (inptGuess < randNum) {
                message.textContent = 'Your guess number is too low'
                message.style.color = 'red'


            } else if (inptGuess > randNum) {
                message.textContent = 'Your guess number is too high';
                message.style.color = 'red'
            } else {
                message.textContent = '🎉 Congratulation Your guess is correct 🎉'
                guessContainer.style.display = 'hidden';
                document.querySelector('#guess').style.backgroundColor = 'red';
                document.querySelector('#guess').disabled = true;
                startButton();

            }

            prevGuessValue.push(inptGuess);
            prevGuess.innerText = `${prevGuessValue}, `
            randNumber.textContent = `Better luck next time -😁 ${randNum} 😁`;
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
        
        document.querySelector('#guess').autofocus;
        
        document.querySelector('#guess').value = '';

        if (remainingGuess == 0) {
            document.querySelector('#guess').style.backgroundColor = 'red';
            document.querySelector('#guess').disabled = true;
            message.textContent = 'Your chances is over';
            startButton();

        }
    })
    function startButton() {
        btnGuess.textContent = 'Start New Game'
        prevGuessValue = [];
        remainingGuess = 0;
        playGame = true;


    }



})