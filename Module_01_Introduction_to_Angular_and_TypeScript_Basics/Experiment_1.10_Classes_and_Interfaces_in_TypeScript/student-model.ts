interface IStudent {
  name: string;
  course: string;
  showInfo(): string;
}

class Student implements IStudent {
  constructor(public name: string, public course: string) {}

  showInfo(): string {
    return `${this.name} is enrolled in ${this.course}`;
  }
}

const s1 = new Student('Manoj Kumar Padhi', 'Angular');
console.log(s1.showInfo());
