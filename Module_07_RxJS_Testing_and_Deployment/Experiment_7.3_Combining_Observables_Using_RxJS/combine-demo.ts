import { forkJoin, of } from 'rxjs';

forkJoin({
  name: of('Manoj Kumar Padhi'),
  course: of('Angular')
}).subscribe(result => console.log(result));
