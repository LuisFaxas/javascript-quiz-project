class Quiz {
    // YOUR CODE HERE:
    //
    // 1. constructor (questions, timeLimit, timeRemaining)
    constructor(questions, timeLimit,timeRemaining){
    this.questions = questions;
    this.timeLimit = timeLimit;
    this.timeRemaining = timeRemaining;
    this.correctAnswers = 0;
    this.currentQuestionIndex = 0;
    }
    
    getQuestion(){
        return this.questions[this.currentQuestionIndex];
    }
    
    moveToNextQuestion(){
        this.currentQuestionIndex ++
    }
    
    shuffleQuestions(){
        for(let i = this.questions.length; i > 0; i--){
            const j = Math.floor(Math.random() * (i+1));
            [this.questions[i], this.questions[j]] = [this.questions[j], [this.questions[i]]]
        }
    }

    checkAnswer(answer){
        const currentQuestion = this.questions[this.currentQuestionIndex];
        if(currentQuestion.answer === answer){
            this.correctAnswers++;
        }

    }

    hasEnded() {

        return this.currentQuestionIndex === this.questions.length;

        }
}
