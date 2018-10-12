// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge!",
        "main":    "<p>How Feminist Are You?</p>",
        "results": "<p>While a lot of good has happened in the past year because of #MeToo, we still have a long way to go until we reach full equality between men and women. Keep up the good fight.</p>",
        "level1":  "Feminist SLAYER",
        "level2":  "You\'ve got the equality sticker on your car, right?",
        "level3":  "You must read theSkimm",
        "level4":  "Progress is one step forward...",
        "level5":  "You might need to go back and re-read this entire web app" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "When did the term 'Me Too' first get used?",
            "a": [
                {"option": "2013",      "correct": false},
                {"option": "2017",     "correct": false},
                {"option": "2006",      "correct": true},
                {"option": "2003",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Tarana Burke first coined the term over 12 years ago!</p>",
            "incorrect": "<p><span>Nice Try</span> Me Too is actually <em>a lot</em> older than many people think! It was first coined in 2006.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Single True Answer
            "q": "How many times was #MeToo tweeted from January 2017 to January 2018?",
            "a": [
                {"option": "5.5 million", "correct": false},
                {"option": "7.7 million", "correct": true},
                {"option": "6.6 million", "correct": false},
                {"option": "8.8 million", "correct": false} // no comma here
            ],
            "correct": "<p><span>CORRECT!!!</span> In the span of 48 hours after Alyssa Milano posted her tweet, almost a million tweets included #MeToo.</p>",
            "incorrect": "<p><span>Think again</span> #MeToo has spanned the globe, reaching over 85 countries and sparking much-needed conversations." // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "What OTHER hashtags have spun off of #MeToo?",
            "a": [
                {"option": "#HimToo",           "correct": true},
                {"option": "#WeBelieve",   "correct": false},
                {"option": "#BelieveWomen",  "correct": true},
                {"option": "#BelieveSurvivors",          "correct": true} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> You're seriously a genius, (wo)man.</p>",
            "incorrect": "<p><span>Not Quite.</span> The #MeToo Movement has spawned #HimToo for male survivors to speak out, #BelieveWomen after Dr. Blasey Ford accused Brett Kavanaugh of sexual assault, and #BelieveSurvivors to generally address society's lack of listening to women's assault stories.</p>" // no comma here
        },
        { // Question 4
            "q": "What was the name of the woman who accused Justice Clarence Thomas of sexual misconduct and what year did that hearing take place?",
            "a": [
                {"option": "Anne Jones, 1989",    "correct": false},
                {"option": "Andrea Johnson, 1990",     "correct": false},
                {"option": "Alice Hyatt, 1992", "correct": false},
                {"option": "Anita Hill, 1991",   "correct": true} // no comma here
            ],
            "correct": "<p><span>Wowza</span> You really know your political history, huh? Hill accused Thomas of sexual misconduct in the workplace when he was a nominee back in the 90s.</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. The correct answer was Anita Hill in 1991. Now, almost thirty years later, has American politics and society really progressed that much forward?</p>" // no comma here
        },
        { // Question 5
            "q": "Who was named Time Person of the Year 2017?",
            "a": [
                {"option": "The Silence Breakers",    "correct": true},
                {"option": "Donald J. Trump", "correct": false},
                {"option": "The Dreamers", "correct": false},
                {"option": "Colin Kaepernick", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> The Silence Breakers, a group of men and women who spoke up about their experiences with sexual harrassment, were chosen as Time's Person of the Year.</p>",
            "incorrect": "<p><span>ERRRR!</span> The others were just nominees for Time Person of the Year.</p>" // no comma here
        } // no comma here
    ]
};
