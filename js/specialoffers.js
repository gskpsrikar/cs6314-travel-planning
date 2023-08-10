var toggleButton = document.getElementById('specialOfferButton');
var myDivision = document.getElementById('questionContainer');

console.log("Outside function log");
toggleButton.addEventListener('click', function() {
    console.log("Changing Visibility");
    myDivision.style.visibility = 'visible';
});

document.addEventListener('DOMContentLoaded', function() {
    var questionContainer = document.getElementById('questionContainer');
    var offerContainer = document.getElementById('offerContainer');
    var questionElement = document.getElementById('question');
    var yesBtn = document.getElementById('yesBtn');
    var noBtn = document.getElementById('noBtn');
    var skipBtn = document.getElementById('skipBtn');
    var nextBtn = document.getElementById('nextBtn');
    var qualificationReasonElement = document.getElementById('qualificationReason');
    var offerElement = document.getElementById('offer');
    var timeTakenElement = document.getElementById('timeTaken');

    var questions = [
        {
            question: 'Have you flown on at least 10 flights in the past year?',
            qualificationReason: 'You have flown on at least 10 flights in the past year. Because of your frequent travel, you qualify for 5% off your next flight!',
        },
        {
            question: 'Are you a senior flyer?',
            qualificationReason: 'You are a senior flyer. As a senior flyer, you qualify for 10% off any flight booking!',
        },
        {
            question: 'Did you serve in the military?',
            qualificationReason: 'You are ex/active-military personnel. As a military personnel, you qualify for 10% off any flight booking!',
        }
    ];

    var currentQuestionIndex = 0;
    var answers = [];
    var startTime;

    function showQuestion() {
        var question = questions[currentQuestionIndex];
        questionElement.textContent = question.question;
    }

    function showOffer() {
        var totalTimeTaken = Math.floor((Date.now() - startTime) / 1000);

        questionContainer.style.display = 'none';
        offerContainer.style.display = 'block';
        qualificationReasonElement.textContent = answers.join(', ');
        timeTakenElement.textContent = 'Total time taken: ' + totalTimeTaken + ' seconds';
    }

    function nextQuestion() {
        if (currentQuestionIndex === questions.length - 1) {
            showOffer();
        } else {
            currentQuestionIndex++;
            showQuestion();
        }
    }

    yesBtn.addEventListener('click', function() {
        answers.push(questions[currentQuestionIndex].qualificationReason);
        nextQuestion();
    });

    noBtn.addEventListener('click', function() {
        nextQuestion();
    });

    skipBtn.addEventListener('click', function() {
        answers.push('Skipped');
        nextQuestion();
    });

    nextBtn.addEventListener('click', function() {
        nextQuestion();
    });

    showQuestion();
    startTime = Date.now();
});



document.addEventListener('DOMContentLoaded', function() {
    setFontSize();
});


  function setFontSize() {
    fontSize = localStorage.getItem('specialOffersFontSize')
    
    var elements = document.querySelectorAll('*');

    for (var i = 0; i < elements.length; i++) {
        elements[i].style.fontSize = fontSize + 'px';
    }
}


function changeFontSize(fontSize) {
    localStorage.setItem('specialOffersFontSize', fontSize)

    var elements = document.querySelectorAll('*');

    for (var i = 0; i < elements.length; i++) {
        elements[i].style.fontSize = fontSize + 'px';
    }
}