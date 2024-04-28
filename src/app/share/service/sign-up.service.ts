import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SignUpForm } from '../interfaces/sign-up-form.interface';
import { PersonalForm } from '../interfaces/personal-form.intervace';
import { CompagnieForm } from '../interfaces/compagnie-form.interface';
import { BusinessForm } from '../interfaces/business-form.interface';
import { LegalForm } from '../interfaces/legal-form.interface';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  private signUpForm: SignUpForm = {
    personalForm: null,
    compagnieForm: null,
    businessForm: null,
    legalForm: null,
  };

  constructor() {}

  updatePersonalForm(data: PersonalForm) {
    this.signUpForm.personalForm = data;
  }

  updateCompagnieForm(data: CompagnieForm) {
    this.signUpForm.compagnieForm = data;
  }
  updateBusinessForm(data: BusinessForm): boolean | string | undefined {
    this.signUpForm.businessForm = data;
    return this.signUpForm.compagnieForm?.isLegalRepresentative
      ? true
      : 'a reconstruire';
  }

  updateLegal(data: LegalForm): string {
    this.signUpForm.legalForm = data;
    console.log(this.signUpForm);

    return 'yesssssh';
  }

  getPersonalForm(): PersonalForm {
    return this.signUpForm.personalForm!;
  }

  getCompagnieForm(): CompagnieForm {
    return this.signUpForm.compagnieForm!;
  }
  isCompagnieFormValid(): boolean {
    return this.signUpForm.compagnieForm?.country &&
      this.signUpForm.compagnieForm?.compagnieName &&
      this.signUpForm.compagnieForm?.activityDomaine &&
      this.signUpForm.compagnieForm?.town
      ? true
      : false;
    // return false;
  }

  isPersonalFormValid(): boolean {
    return this.signUpForm.personalForm?.email &&
      this.signUpForm.personalForm?.name &&
      this.signUpForm.personalForm?.phone
      ? true
      : false;
  }
}
