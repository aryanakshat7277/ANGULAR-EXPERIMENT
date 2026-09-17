import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = () => {
  const loggedIn = true; // Replace with authentication check
  const router = inject(Router);

  if (!loggedIn) {
    router.navigate(['/login']);
    return false;
  }
  return true;
};
