import { of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

throwError(() => new Error('Stream failed'))
  .pipe(
    catchError(err => of('Recovered: ' + err.message))
  )
  .subscribe(v => console.log(v));
