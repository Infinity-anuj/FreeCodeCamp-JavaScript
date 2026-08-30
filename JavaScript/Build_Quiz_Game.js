const questions = [
    {category : "Math", question : "What is 2+2?", choices : ["3", "4", "5"], answer : "4" },
    {category : "Science", question : "Which planet is known as the Red Planet?", choices : ["Earth", "Mars", "Venus"], answer : "Mars"},
    {category : "History", question : "Who was the first US President?", choices : ["George Washington", "Abraham Lincoln", "Thomas Jefferson"], answer : "George Washington"},
    {category : "Geography", question : "Which is the largest ocean?", choices : ["Atlantic", "Indian", "Pacific"], answer : "Pacific"},
    {category : "Sports", question : "How many players in a soccer team?", choices : ["9", "10", "11"], answer : "11"}
];

const getRandomQuestion = (ques) => {
    let randomIndex = Math.floor(Math.random() * ques.length);
    return ques[randomIndex];
};

const getRandomComputerChoice = (choices) => {
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
};

const getResults = (questionObj, computerChoice) => {
    if (computerChoice === questionObj.answer) {
        return "The computer's choice is correct!";
    } else {
        return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
    }
};

// --- Example Run ---
const randomQ = getRandomQuestion(questions);
console.log("Question:", randomQ.question);

const compChoice = getRandomComputerChoice(randomQ.choices);
console.log("Computer chose:", compChoice);

console.log(getResults(randomQ, compChoice));
