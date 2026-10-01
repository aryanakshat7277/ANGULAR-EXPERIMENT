import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';

describe('UserService Error Handling', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService, provideHttpClient(), provideHttpClientTesting()]
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should handle a 404 error', () => {
    service.getUsers().subscribe({
      next: () => fail('Should have failed with 404 error'),
      error: err => expect(err.status).toBe(404)
    });

    const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/users');
    req.flush('Not found', { status: 404, statusText: 'Not Found' });
  });
});
