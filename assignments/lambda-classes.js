// CODE here for your Lambda Classes


class Person {
    constructor({name, age, location}) {
        this.name = name;
        this.age = age;
        this.location = location;
    }
    speak() {
        return `Hello! my name is ${this.name}, I am ${this.age} years old, and I am from ${this.location}.`;
    }
}


class Instructor extends Person {
    constructor({speciality, favLanguage, catchPhrase}) {
        super(...arguments)
        this.speciality = speciality;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
    }
    demo(subject) {
        `${this.name} says, "Today we are learning about ${subject}."`
    }
    grade(student, subject) {
        `${this.name} says, "${student.name} got a prefect score on ${subject}! Great job."`
    }
}


class Student extends Person {
    constructor ({previousBackground, className, favSubjects, grade}) {
        super(...arguments)
        this.previousBackground = previousBackground;
        this.className = className;
        this.favSubjects = favSubjects;
        this.grade = grade;
    }
    listsSubjects() {
        return this.favSubjects.join(', ');
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${student.name} has begun sprint challenge on ${subject}`;
    }
}


class ProjectManager extends Instructor {
    constructor({gradClassName, favInstructor}) {
        super(...arguments)
        this.gradClassName = gradClassName;
        this.favInstructor = favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to {channel}, @channel standy times!​​​​​`;
    }
    debugCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
    }
}


const joe = new Person ({
    name: "Joe",
    age: 42,
    location: "Texarcana"
});
const kairen = new Person ({
    name: "Kairen",
    age: 36,
    location: "Another World"
});

const dan = new Instructor ({
    name: "Dan",
    age: 32,
    location: "Devner",
    speciality: "Green screen background",
    favLanguage: "Javascript",
    catchPhrase: "Uhhhmm..."
});
const dustin = new Instructor ({
    name: "Dustin",
    age: 27,
    location: "The real world",
    speciality: "React coding",
    favLanguage: "Java",
    catchPhrase: "Done, and done."
});


const devin = new Student ({
    name: "Devin",
    age: 21,
    location: "Texas"
    previousBackground: "Slight HTML",
    className: "WEB20",
    favSubjects: ["Music, Javascript, Chemisty"],
    grade: 80
});
const winnieSong = new Student({
    name: 'Winnie Song',
    location: 'FLushing',
    age: 22,
    previousBackground: `MUA`,
    className: `web20`,
    favSubjects: ['CSS', 'HTML', 'LESS'],
    grade: 80
}); 
const alexis = new Student ({
    name: "Alexis",
    age: 25,
    location: "College Station, Texas"
    previousBackground: "Biomedical Engineering/Informatics",
    className: "WEB20",
    favSubjects: ['Javascript', 'Python', 'Band'],
    grade: 80
});
const sam = new Sutdent ({
    name: "Sam",
    age: 27,
    location: "Oregon",
    previousBackground: "Some CSS/HTML",
    className: "web20"
    favSubjects: ["Physics",  "Math", "JavaScript" ],
    grade: 80
});
const mike = new Student({
    name: 'Mike VanSleen',
    location: 'Denver',
    age: 29,
    previousBackground: 'A lot of things',
    className: 'web20',
    favSubjects: ['UI/UX', 'Javascript', 'Graphic Design'],
    grade: 80
});

const guillermo = new ProjectManager ({
    name: "Guillermo",
    age: "[REDACTED]",
    location: "Florida",
    speciality: "Keepin' the chill vibes",
    favLanguage: "Javascript",
    catchPhrase: "No, that's really cool."
    gradClassName: "WEB17",
    favInstructor: "Josh Knell"
});
const jamie = new ProjectManager ({
    name: "Jamie",
    age: "[REDACTED]",
    location: "In the US",
    speciality: "Making those videos",
    favLanguage: "Javascript",
    catchPhrase: "My PM group probably wants me to stop making videos."
    gradClassName: "WEB17",
    favInstructor: "Josh Knell"
});
