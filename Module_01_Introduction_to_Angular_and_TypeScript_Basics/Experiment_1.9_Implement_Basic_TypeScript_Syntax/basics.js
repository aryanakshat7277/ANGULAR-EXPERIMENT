let name = 'Manoj Kumar Padhi';
let age = 22;
let isStudent = true;
let subjects = ['Angular', 'TypeScript', 'RxJS'];
function greet(name) {
    return 'Hello ' + name + ', welcome to Angular!';
}
console.log(greet(name));
console.log('Age:', age, 'Student:', isStudent);
console.log('Subjects:', subjects.join(', '));
export {};
