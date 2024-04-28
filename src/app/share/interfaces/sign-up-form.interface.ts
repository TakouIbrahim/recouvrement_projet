import { BusinessForm } from './business-form.interface';
import { CompagnieForm } from './compagnie-form.interface';
import { LegalForm } from './legal-form.interface';
import { PersonalForm } from './personal-form.intervace';

export interface SignUpForm {
  personalForm: PersonalForm | null;
  compagnieForm: CompagnieForm | null;
  businessForm: BusinessForm | null;
  legalForm: LegalForm | null;
}
