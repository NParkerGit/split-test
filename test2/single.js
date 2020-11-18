
Survey
    .StylesManager
    .applyTheme("default");

var json = {
    title: "Employee Screening",
    pages: [{
        questions: [
            {
                type: "rating",
                    name: "recommendScore",
                    title: "How Likely Are You To Recommend The Candidate?",
                    rateMin: 0,
                    rateMax: 10,
                    minRateDescription: "Least Likely",
                    maxRateDescription: "Most Likely"
            },
            {
                type: "radiogroup",
                name: "whyLeave",
                title: "Why did they leave their last job?",
                choices: [
                    "Laid Off", "Fired", "Went To School", "Wanted New Opportunity"
                ]
            },
            {
                type: "matrix",
                    name: "Skills",
                    title: "Please indicate if you agree or disagree with the following statements",
                    columns: [
                        {
                            value: 1,
                            text: "Strongly Disagree"
                        }, {
                            value: 2,
                            text: "Disagree"
                        }, {
                            value: 3,
                            text: "Neutral"
                        }, {
                            value: 4,
                            text: "Agree"
                        }, {
                            value: 5,
                            text: "Strongly Agree"
                        }
                    ],
                    rows: [
                        {
                            value: "dependable",
                            text: "Candidate is Dependable"
                        }, {
                            value: "trustworthy",
                            text: "Candidate is Trustworthy"
                        }, {
                            value: "reliable",
                            text: "Candidate is Reliable"
                        }, {
                            value: "leader",
                            text: "Candidate is a Leader"
                        }
                    ]
            },
            {
                type: "checkbox",
            name: "candidateSkills",
            title: "What qualities match this candidate?",
            hasNone: true,
            colCount: 4,
            choices: [
                "Communication",
                "Teamwork",
                "Friendly",
                "Hardworker"
            ]
            },
            {
                type: "dropdown",
                name: "candidateEffort",
                title: "What Effort did this candidate display?",
                colCount: 0,
                choices: [
                    "Above and Beyond",
                    "Average",
                    "Bare Minimum",
                    "Minimal"
                ]
            },
            {
                type: "radiogroup",
                name: "location",
                title: "Did this candidate work: ",
                choices: [
                    "Remotely", "Hybrid", "In Office"
                ]
            },
            {
                type: "radiogroup",
                name: "boss",
                title: "What is the most important quality the candidate looks for in a Boss?",
                choicesOrder: "random",
                choices: [
                    "Time Management", "Understanding", "Reliable", "Trust-worthy"
                ]
            },
            {
                name: "position",
                type: "text",
                title: "What was the candidates prior position?"
            },
            {
                type: "radiogroup",
                    name: "promotion",
                    title: "Did the candidate get promoted, or worked towards promotion?",
                    choices: [
                        "Yes", "No", "Not Applicable"
                    ]
            },
            {
                name: "reason",
                type: "text",
                title: "Are there any reasons why we should not follow through with this candidate:",
                placeHolder: "ex. Record, Misconduct"
            }
        ]
    }]
    // ,
    // completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document.location = "singlethanks.html";
    });

$("#surveyElement").Survey({ model: survey });