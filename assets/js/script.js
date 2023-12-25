
var questions = [
    {
        question: 'Which is the most used Social Media?',
        a: "Youtube",
        b: 'Facebook',
        c: 'TikTok',
        d: 'CupCat',
        answer: 'b'
    },
    {
        question: 'What is the name of the longest beach in the world?',
        a: "Cox's Bazar",
        b: 'Shoal Bay, Antigua',
        c: 'Cala Saona, Formentera',
        d: 'Glass Beach, California',
        answer: 'a'
    },

    {
        question: 'Who is the president of USA right now?',
        a: 'George Washington',
        b: 'Joe Biden',
        c: 'Barack Obama',
        d: 'George W. Bush',
        answer: 'b'
    },
    {
        question: 'Which is the best programming language?',
        a: 'Python',
        b: 'C++',
        c: 'JavaScript',
        d: 'Java',
        answer: 'c'
    },
    {
        question: 'Most popular country?',
        a: 'India',
        b: 'Chaina',
        c: 'USA',
        d: 'Gana',
        answer: 'b'
    },
    

]

var questionEl = document.querySelector('#question'); 
var aText = document.querySelector('#aText');
var bText = document.querySelector('#bText'); 
var cText = document.querySelector('#cText');
var dText = document.querySelector('#dText');
var submit = document.querySelector('#submit');
var questionNum = 0;
var score = 0;
var showResult = document.querySelector('#showResultBtn');
var answerSheet = document.querySelector('#answerSheet');

loadQuestion()


function loadQuestion() {
    var singleQuestion = questions[questionNum];
    questionEl.innerText = singleQuestion.question;
    aText.innerText = singleQuestion.a;
    bText.innerText = singleQuestion.b;
    cText.innerText = singleQuestion.c;
    dText.innerText = singleQuestion.d;

}

function getChecked() {
    var answer = undefined;
    var answers = document.querySelectorAll('.answer');
   
    answers.forEach(function(value) {

        if(value.checked) {
            answer = value.id;
        } 

        
    })
    return answer;
    
}

function unChecked() {
    var answers = document.querySelectorAll('.answer');
   
    answers.forEach(function(value) {

        if(value.checked = true) {
            return value.checked = false;
        } 

    })
}







submit.addEventListener('click', function() {


    var checked = getChecked();


    if(checked) {
        if(checked == questions[questionNum].answer) {
            score++;
        }
        questionNum++;
        unChecked()
     

        if(questionNum < questions.length) {
            loadQuestion();
        } else {
            document.querySelector('#resultContainer').style.display = 'block';
            document.querySelector('#formContainer').style.display = 'none';
            document.querySelector('#result').innerText = score + '/' + questions.length;
        }
    }

}) 


showResult.addEventListener('click', function() {


    document.querySelector('#resultContainer').style.display = 'none';
    document.querySelector('#answerSheetContainer').style.display = 'block';
    
    for(var i = 0; i < questions.length; i++) {
        var singleQ = questions[i];
        var questionKey = Object.keys(singleQ);
        
        
        for(var j = 0; j < questionKey.length; j++) {
            var answerKey = questionKey[j];
            if(singleQ.answer == answerKey) {
                // console.log(singleQ[answerKey])

                var resultSheetQ = document.createElement('h5');
                resultSheetQ.classList.add('question');
                var answerInResultSheet = document.createElement('span');
               
                resultSheetQ.innerText = (i + 1) + ': ' + singleQ.question;
                answerInResultSheet.innerText = 'Ans: ' + singleQ[answerKey];
                answerSheet.appendChild(resultSheetQ);
                answerSheet.appendChild(answerInResultSheet);
                

            }
        }

    }


    var reloadBtn = document.createElement('button');
    var breakLine = document.createElement('br');
    reloadBtn.innerText = 'Play Again';
    reloadBtn.setAttribute('onclick', 'reload()');
    reloadBtn.setAttribute('class', 'reloadBtn');

    answerSheet.appendChild(breakLine);
    answerSheet.appendChild(reloadBtn);

})

function reload() {
    location.reload();
}