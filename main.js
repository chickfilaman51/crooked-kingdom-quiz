//Set of questions and answers -DONE
//Give each answer an identifier -DONE
//Each identifier will increment through each question
//St the end the identifier with the highest number is the winner 
//Display the answer and rest the quiz

//pass results frm previous question to the next page usig localcache

//Randomise the background of the quiz for each questiion

//Possible - Personality Traits
// 15 -21- You Need Help
// 10 - 15 - Good Soul
// 5- 10 - Meh 
// 5 - Are You Even Real


let currentQuestion = 0;
let score = [];
let selectedAnswersData = [];
const totalQuestions =questions.length;

const container = document.querySelector('.quiz-container');
const questionEl = document.querySelector('.question');
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const option4 = document.querySelector('.option4');
const option5 = document.querySelector('.option5');
const option6 = document.querySelector('.option6');
const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');
const restartButton = document.querySelector('.restart');
const result = document.querySelector('.result');

//Function to generate question 
function generateQuestions(index) {
    // Select each question by passing it a particular index
    const question = questions[index];

    // Assign values to options
    const option1Total = question.answer1Total;
    const option2Total = question.answer2Total;
    const option3Total = question.answer3Total;
    const option4Total = question.answer4Total;
    const option5Total = question.answer5Total;
    const option6Total = question.answer6Total;

    // Populate HTML elements
    questionEl.innerHTML = `${index + 1}. ${question.question}`;
    
    option1.setAttribute('data-total', `${option1Total}`);
    option2.setAttribute('data-total', `${option2Total}`);
    option3.setAttribute('data-total', `${option3Total}`);
    option4.setAttribute('data-total', `${option4Total}`);
    option5.setAttribute('data-total', `${option5Total}`);
    option6.setAttribute('data-total', `${option6Total}`);
    
    option1.innerHTML = `${question.answer1}`;
    option2.innerHTML = `${question.answer2}`;
    option3.innerHTML = `${question.answer3}`;
    option4.innerHTML = `${question.answer4}`;
    option5.innerHTML = `${question.answer5}`;
    option6.innerHTML = `${question.answer6}`;
}


function loadNextQuestion () {
    const selectedOption = document.querySelector('input[type="radio"]:checked');
    //Check if there is a radio input checked
    if(!selectedOption) {
        alert('Please select your answer!');
        return;
    }
    //Get value of selected radio
    const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));

    ////Add the answer score to the score array
    score.push(answerScore);

    selectedAnswersData.push()
    

    const totalScore = score.reduce((total, currentNum) => total + currentNum);

    //Finally we incement the current question number ( to be used as the index for each array)
    currentQuestion++;

        //once finished clear checked
        selectedOption.checked = false;
    //If quiz is on the final question
    if(currentQuestion == totalQuestions - 1) {
        nextButton.textContent = 'Finish';
    }
    //If the quiz is finished then we hide the questions container and show the results 
    if(currentQuestion == totalQuestions) {
        container.style.display = 'none';
        if (totalScore >= 6 && totalScore <= 10) {
            result.innerHTML =
         `<h1 class="final-score">Your score: ${totalScore}</h1>
         <div class="summary">
            <h1>Summary</h1>
            <div class="final-data">
                <a href="https://ibb.co/CMWcW4t"><img src="https://i.ibb.co/JyC1C8d/Matthias-by-Kevin-Wada.png" alt="Matthias-by-Kevin-Wada" border="0"></a>
                <p>You are Matthias! You follow the rules and are loyal to people you admire and love and are a soldier. You dont lie nor cheat and always do the right thing if possible. You are strong and noble.</p>
            </div>
        </div>
        <button class="restart">Restart Quiz</button>
         `;
        }
        if (totalScore >= 11 && totalScore <= 15) {
            result.innerHTML =
         `<h1 class="final-score">Your score: ${totalScore}</h1>
         <div class="summary">
            <h1>Summary</h1>
            <div class="final-data">
                <a href="https://ibb.co/FkvxkJG"><img src="https://i.ibb.co/1YVvYKH/Nina-by-Kevin-Wada.png" alt="Nina-by-Kevin-Wada" border="0"></a>
                <p>You are Nina! A passionate and empathetic individual, you harness formidable abilities and powers. Your love for life and dedication to your friends make you a loyal and caring companion. You embrace your abilities, using them to bridge gaps and foster understanding.</p>
            </div>
        </div>
        <button class="restart">Restart Quiz</button>
         `;
        }
        if (totalScore >= 16 && totalScore <= 20) {
            result.innerHTML =
         `<h1 class="final-score">Your score: ${totalScore}</h1>
         <div class="summary">
            <h1>Summary</h1>
            <div class="final-data">
                <a href="https://ibb.co/k1gsJ08"><img src="https://i.ibb.co/nCsNBfc/Wylan-and-Kuwei-by-Kevin-Wada.png" alt="Wylan-and-Kuwei-by-Kevin-Wada" border="0"></a>
                <p>You are Wylan Van Eck! A talented musician with a keen intellect, you bring a unique perspective to your group. Despite facing challenges, you use your creativity and determination to overcome obstacles. Your kindness and loyalty make you an invaluable ally to those around you.</p>
            </div>
        </div>
        <button class="restart">Restart Quiz</button>
         `;
        }
        if (totalScore >= 21 && totalScore <= 25) {
            result.innerHTML =
         `<h1 class="final-score">Your score: ${totalScore}</h1>
         <div class="summary">
            <h1>Summary</h1>
            <div class="final-data">
                <a href="https://ibb.co/T4sGvxh"><img src="https://i.ibb.co/jySY6P4/Jesper-by-Kevin-Wada.png" alt="Jesper-by-Kevin-Wada" border="0"></a>
                <p>You are Jesper Fahey! Quick-witted and with a penchant for risk-taking, you bring a sense of humor to even the direst situations. Your sharpshooting skills and love for excitement make you a dynamic and unpredictable presence.</p>
            </div>
        </div>
        <button class="restart">Restart Quiz</button>
         `;
        }
        if (totalScore >= 26 && totalScore <= 30) {
            result.innerHTML =
         `<h1 class="final-score">Your score: ${totalScore}</h1>
         <div class="summary">
            <h1>Summary</h1>
            <div class="final-data">
                <a href="https://ibb.co/SdCnYcX"><img src="https://i.ibb.co/rcr683G/Inej-by-Kevin-Wada.webp" alt="Inej-by-Kevin-Wada" border="0"></a>
                <p>You are Inej Ghafa! Known for your agility and sharp instincts, you are a skilled acrobat and a valuable asset to your team. Compassionate yet formidable, you prioritize justice and stand against those who exploit the vulnerable.</p>
            </div>
        </div>
        <button class="restart">Restart Quiz</button>
         `;
        }
        if (totalScore >= 31 && totalScore <= 36) {
            result.innerHTML =
         `<h1 class="final-score">Your score: ${totalScore}</h1>
         <div class="summary">
            <h1>Summary</h1>
            <div class="final-data">
                <a href="https://ibb.co/8zsNmXm"><img src="https://i.ibb.co/tZKQH3H/Kaz-by-Kevin-Wada.png" alt="Kaz-by-Kevin-Wada" border="0"></a>
                <p>You are Kaz Brekker! A mastermind with a strategic mind, you thrive in the shadows. Resourceful and cunning, you navigate the world with a calculated precision. Despite a tough exterior, there's more to you than meets the eye.</p>
            </div>
        </div>
        <button class="restart">Restart Quiz</button>
         `;
        }
        return;
    }
    generateQuestions(currentQuestion);
}

//Function to load previous question
function loadPreviousQuestion() {
    //Decrement quentions index
    currentQuestion--;
    //remove last array value;
    score.pop();
    //Generate the question
    generateQuestions(currentQuestion);
}

//Fuction to reset and restart the quiz;
function restartQuiz(e) {
    if(e.target.matches('button')) {
    //reset array index and score
    currentQuestion = 0;
    score = [];
    //Reload quiz to the start
    location.reload();
    }

}


generateQuestions(currentQuestion);
nextButton.addEventListener('click', loadNextQuestion);
previousButton.addEventListener('click',loadPreviousQuestion);
result.addEventListener('click',restartQuiz);


