import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SignUpService } from '../service/sign-up.service';

export const signupCompagnieFormGuard: CanActivateFn = (route, state) => {
  const signUpService = inject(SignUpService);
  const router = inject(Router);
  if (!signUpService.isCompagnieFormValid()) {
    router.navigateByUrl('sign-up/compagnie');
    console.log('truezeeeeeeeeee');
    return false;
  } else {
    console.log('falseeeeeeeeeeeeee');
    return true;
  }
};

export const signupPersonnalFormGuard: CanActivateFn = (route, state) => {
  const signUpservice = inject(SignUpService);
  const router = inject(Router);
  if (!signUpservice.isPersonalFormValid()) {
    router.navigateByUrl('sign-up');
    console.log('truezeeeeeeeeee');
    return false;
  } else {
    console.log('falseeeeeeeeeeeeee');
    return true;
  }
  return true;
};
