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
    constructor (previousBackground, className, favSubjects) {
        super(...arguments)
        this.previousBackground = previousBackground;
        this.className = className;
        this.favSubjects = favSubjects;
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
})
const kairen = new Person ({
    name: "Kairen",
    age: 36,
    location: "Another World"
})

const dan = new Instructor ({
    name: "Dan",
    age: 32,
    location: "Devner",
    speciality: "Green screen background",
    favLanguage: "Javascript",
    catchPhrase: "Uhhhmm"
})

const dustin = new Instructor ({
    name: "Dustin",
    age: 27,
    location: "The real world",
    speciality: "React coding",
    favLanguage: "Java",
    catchPhrase: "Done, and done"
})