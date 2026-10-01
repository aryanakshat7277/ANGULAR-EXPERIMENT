export {};

let name: string = 'Manoj Kumar Padhi';
let age: number = 22;
let isStudent: boolean = true;
let subjects: string[] = ['Angular', 'TypeScript', 'RxJS'];

function greet(name: string): string {
  return 'Hello ' + name + ', welcome to Angular!';
}

console.log(greet(name));
console.log('Age:', age, 'Student:', isStudent);
console.log('Subjects:', subjects.join(', '));
