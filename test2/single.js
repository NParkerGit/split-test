
Survey
    .StylesManager
    .applyTheme("default");

var json = {
    title: "Employee Screening",
    pages: [{
        questions: [
            {
                type: "radiogroup",
                    name: "whereHear",
                    title: "Where did you hear about this opening?",
                    choices: [
                        "Employee", "Relative", "Job Fair", "Job Search Website", "Other"
                    ]
            },
            {
                type: "radiogroup",
                name: "whyLeave",
                title: "Why did you leave your last job?",
                choices: [
                    "Laid Off", "Fired", "Done School","Not Applicable", "Tired of Job", "New Opportunity"
                ]
            },
            {
                type: "radiogroup",
                    name: "salary",
                    title: "What do you expect to earn for yearly Salary?",
                    choicesOrder: "random",
                    choices: [
                        "Less than $35,000", "$35,000 - $50,000", "$50,000 - $65,000", "$65,000+"
                    ]
            },
            {
                type: "radiogroup",
                    name: "useProduct",
                    title: "Do you use our products/services?",
                    choices: [
                        "Yes", "No", "Not Sure"
                    ]
            },
            {
                type: "radiogroup",
                name: "future",
                title: "Where do you see yourself in 5 years?'",
                choicesOrder: "random",
                choices: [
                    "In A Management Role Here", "Same Position as now", "Anywhere but Here", "I can't even think of what's for supper tonight"
                ]
            },
            {
                type: "radiogroup",
                    name: "expectations",
                    title: "What should we expect of you?",
                    choices: [
                        "Above and Beyond", "The Bare Minimum", "Being There is enough"
                    ]
            },
            {
                type: "radiogroup",
                    name: "boss",
                    title: "What is the most important quality for a Boss?'",
                    choicesOrder: "random",
                    choices: [
                        "Time Management", "Understanding", "Reliable", "Trust-worthy"
                    ]
            },
            {
                type: "radiogroup",
                name: "location",
                title: "Where would you prefer working?",
                choices: [
                    "In Office", "Hybrid", "Remote"
                ]
            },
            {
                type: "radiogroup",
                    name: "idealTime",
                    title: "What is your ideal work time?",
                    choicesOrder: "random",
                    choices: [
                        "9-5", "10-6", "2-10"
                    ]
            },
            {
                type: "radiogroup",
            name: "startDate",
            title: "When can you start?",
            choices: [
                "Immediately", "Next Year", "I'll let you know"
            ]
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