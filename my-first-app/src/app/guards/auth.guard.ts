import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const loggedIn = true; // Simulating authenticated session
  const router = inject(Router);
  if (!loggedIn) {
    router.navigate(['/login']);
    return false;
  }
  return true;
};
