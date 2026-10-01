"use strict";
class Student {
    name;
    course;
    constructor(name, course) {
        this.name = name;
        this.course = course;
    }
    showInfo() {
        return `${this.name} is enrolled in ${this.course}`;
    }
}
const s1 = new Student('Manoj Kumar Padhi', 'Angular');
console.log(s1.showInfo());
