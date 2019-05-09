// CODE here for your Lambda Classes
class Person {
    constructor({name, age, location}) {
        this.name = name;
        this.age = age;
        this.location = location;
    }
    speak() {
        return `Hello! my name is ${this.name}, and I am from ${this.location}.`;
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
//     listsSubjects() {
//         this.
//     }
}


const john = new Instructor({name: "John", speciality: "Tacos"});

console.log(john);