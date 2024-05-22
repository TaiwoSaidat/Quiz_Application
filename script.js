//dummy questions
const questions = [
    {
        question: "What is the capital city of Nigeria",
        answers: ["Lagos", "Abia", "Portharcourt", "Abuja"],
        correct: 3
    },
    {
        question: "What is the full meaning of lmao",
        answers: ["Lmao na", "Laughing my ass off", "wo, e no get meaning", "omo!!!"],
        correct: 1
    },
    {
        question: "Who is your guy? According to the song",
        answers: ["Aishat", "Ayo", "Spylo", "omo!!!"],
        correct: 2
    },
    {
        question: "Who is Burna boy? ",
        answers: ["Singer", "Actor", "Wrestler", "Agbero"],
        correct: 0
    },
    {
        question: "What is Nigeria's official language? ",
        answers: ["Yoruba", "English", "Hausa", "Igbo"],
        correct: 1
    },
    {
        question: "What is the capital of France? ",
        answers: ["Paris", "Vienna", "Nice", "no Idea"],
        correct: 0
    },
    {
        question: "Which African country is home to the Great Pyramid of Giza? ",
        answers: ["Niger", "Nigeria", "Chad", "Egypt"],
        correct: 3,
    },
    {
        question: "Who was the first black president of the US? ",
        answers: ["MLK", "The Black Panther", "Obama", "Mayweather"],
        correct: 2,
    },
    {
        question: "Which country is known for its delicious cuisines like pizza, pasta and gelato?",
        answers: ["France", "USA", "Italy", "Egypt"],
        correct: 2,
    },
    {
        question: "Who has the best Jollof?",
        answers: ["Ghana", "Ivory Coast", "You Kay", "Nigeria of course"],
        correct: 3,
    }
]

// to take the name of the candidate 
let uName = prompt("Please enter your name:"); 

//default value
let currQuestion = 0
let score = 0

function displayQuestion(){
    //get the element of questions and assigned to questions in the array
    document.getElementById('question').innerText = questions[currQuestion].question
    
    //we get the answers in the array and assign it to a variable (i.e. the new variable is called answers). yes yet again.
    const answers = questions[currQuestion].answers
    
    //iterate the answers array and get their value and index to display on the option
    const answerOptions = answers.map((answer, index) => 
        `<button class="option" onclick=selectAnswer(${index})>${answer}</button>`
    ).join(''); 

    //assign the mapped item into the div of options
    document.getElementById('options').innerHTML = answerOptions
}

//check if selected option is correct and enable the button
// to go to the next question and score the user if correct
function selectAnswer(index){
    if(index === questions[currQuestion].correct){
        score++
    }
    document.getElementById('next').disabled = false
}

//go to the next question and if no more question, display the answer
document.getElementById('next').addEventListener('click', () => {
    currQuestion++
    if(currQuestion < questions.length){
        displayQuestion();
        document.getElementById('next').disabled = true
    } else {
        document.getElementById('result').innerHTML = `<p> Your total score is: ${score}/${questions.length}, ${uName}</p>`
    }
})

//invoke the display question function
displayQuestion();

// if (score < 7){
//     document.getElementById('score').innerHTML = `<p> ${name} You are superb</p>`
// } else if (score > 7) {
//     document.getElementById('score').innerHTML = `<p> ${name} Try again</p>`
// } 

