// CODE here for your Lambda Classes

const everyone = []
let display = []
function displayUpdate(arr) {
    display = [];
    arr.forEach(obj => {
        if (obj.grade >= 0) {
            display.push({"Name": obj.name, "Grade": obj.grade, "Graduated?": obj.graduated});
        }
    })
    console.table(display);
}

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
    gradeGo(student, subject) {
        `${this.name} says, "${student.name} got a prefect score on ${subject}! Great job."`
    }
    grading(student, boolean) {
        let g = student.grade;
        let mult = Math.floor(Math.random() * 20 * Math.sqrt(this.name.length));
        boolean ? g = g + mult * 1.5 : g = g - mult;
        g = g < 0 ? 0 : g;
        student.grade = g;
        student.graduated = student.grade >= 70 ? true : false
        return `${this.name} graded ${student.name}'s project, and they now have ${student.grade} points.`;
    }
}


class Student extends Person {
    constructor ({previousBackground, className, favSubjects, grade, graduated}) {
        super(...arguments)
        this.previousBackground = previousBackground;
        this.className = className;
        this.favSubjects = favSubjects;
        this.grade = grade;
        this.graduated = graduated ? graduated : false;
    }
    listsSubjects() {
        let mesg = this.favSubjects;
        mesg[mesg.length - 1] = `and ${mesg[mesg.length - 1]}`;
        return mesg.join(', ');
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${student.name} has begun sprint challenge on ${subject}`;
    }
    graduate () {
        if (this.graduated) {
            return `${this.name} has graduated! Please remove them from the roster.\nWait... we can't? Code that in!!\n`
        } else return `${this.name} cannot graduate yet.\n`
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
everyone.push(joe);
const kairen = new Person ({
    name: "Kairen",
    age: 36,
    location: "Another World"
});
everyone.push(kairen);

const dan = new Instructor ({
    name: "Dan",
    age: 32,
    location: "Devner",
    speciality: "Changing the green screen background",
    favLanguage: "Javascript",
    catchPhrase: "Uhhhmm..."
});
everyone.push(dan);
const dustin = new Instructor ({
    name: "Dustin",
    age: 27,
    location: "The real world",
    speciality: "React coding",
    favLanguage: "Java",
    catchPhrase: "Done, and done."
});
everyone.push(dustin);


const devin = new Student ({
    name: "Devin Warrick",
    age: 21,
    location: "Texas",
    previousBackground: "Slight HTML",
    className: "WEB20",
    favSubjects: ["Music, Javascript, Chemisty"],
    grade: 0
});
everyone.push(devin);
const winnieSong = new Student({
    name: 'Winnie Song',
    location: 'FLushing',
    age: 22,
    previousBackground: `MUA`,
    className: `web20`,
    favSubjects: ['CSS', 'HTML', 'LESS'],
    grade: 0
}); 
everyone.push(winnieSong);
const alexis = new Student ({
    name: "Alexis Carr",
    age: 25,
    location: "College Station, Texas",
    previousBackground: "Biomedical Engineering/Informatics",
    className: "WEB20",
    favSubjects: ['Javascript', 'Python', 'Band'],
    grade: 0
});
everyone.push(alexis);
const sam = new Student ({
    name: "Sam Egge",
    age: 27,
    location: "Oregon",
    previousBackground: "Some CSS/HTML",
    className: "web20",
    favSubjects: ["Physics",  "Math", "JavaScript" ],
    grade: 0
});
everyone.push(sam);
const mike = new Student({
    name: 'Mike VanSleen',
    location: 'Denver',
    age: 29,
    previousBackground: 'A lot of things',
    className: 'web20',
    favSubjects: ['UI/UX', 'Javascript', 'Graphic Design'],
    grade: 0
});
everyone.push(mike);

const guillermo = new ProjectManager ({
    name: "Guillermo",
    age: "[REDACTED]",
    location: "Florida",
    speciality: "Keepin' the chill vibes",
    favLanguage: "Javascript",
    catchPhrase: "No, that's really cool.",
    gradClassName: "WEB17",
    favInstructor: "Josh Knell"
});
everyone.push(guillermo);
const jamie = new ProjectManager ({
    name: "Jamie",
    age: "[REDACTED]",
    location: "In the US",
    speciality: "Making those videos",
    favLanguage: "Javascript",
    catchPhrase: "My PM group probably wants me to stop making videos.",
    gradClassName: "WEB17",
    favInstructor: "Josh Knell"
});
everyone.push(jamie);


function space() {
    console.log('\n\n');
}



console.log(`//<====================LOGGING THINGS===========================>//`);

console.log(everyone);


space();
console.log(`//<====================INTRODUCTIONS===========================>//`);
console.log(sam.speak());
console.log(`\n${jamie.name} says "${jamie.catchPhrase}`);
console.log(`\n${dan.name}'s speciality is ${dan.speciality.toLowerCase()}.`);
console.log(`\n${mike.name}'s favorite subjects are ${mike.listsSubjects()}.`);




space();
console.log(`//<====================GRADING===========================>//`);
console.log('\n');

console.log(`Here we have our students before anything has been graded:`);
displayUpdate(everyone);




space();
console.log(`//<====================GRADING I===========================>//`);
console.log('\n');

console.log(guillermo.grading(devin, true));
console.log(jamie.grading(winnieSong, true));
console.log(jamie.grading(alexis, true));
console.log(jamie.grading(sam, true));
console.log(jamie.grading(mike, true));

displayUpdate(everyone);

console.log(devin.graduate());
console.log(winnieSong.graduate());
console.log(alexis.graduate());
console.log(sam.graduate());
console.log(mike.graduate());



space();
console.log(`//<====================GRADING II===========================>//`);
console.log('\n');

console.log(guillermo.grading(devin, false));
console.log(jamie.grading(winnieSong, false));
console.log(jamie.grading(alexis, false));
console.log(jamie.grading(sam, false));
console.log(jamie.grading(mike, false));

displayUpdate(everyone);

console.log(devin.graduate());
console.log(winnieSong.graduate());
console.log(alexis.graduate());
console.log(sam.graduate());
console.log(mike.graduate());



space();
console.log(`//<====================GRADING FINAL===========================>//`);
console.log('\n');

// Hidden extra grading so they can pass
guillermo.grading(devin, true);
jamie.grading(winnieSong, true);
jamie.grading(alexis, true);
jamie.grading(sam, true);
jamie.grading(mike, true);


console.log(guillermo.grading(devin, true));
console.log(jamie.grading(winnieSong, true));
console.log(jamie.grading(alexis, true));
console.log(jamie.grading(sam, true));
console.log(jamie.grading(mike, true));

displayUpdate(everyone);

console.log(devin.graduate());
console.log(winnieSong.graduate());
console.log(alexis.graduate());
console.log(sam.graduate());
console.log(mike.graduate());