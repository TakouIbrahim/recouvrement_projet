import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { BusinessForm } from '../../../share/interfaces/business-form.interface';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PersonalForm } from '../../../share/interfaces/personal-form.intervace';
import { CommonModule } from '@angular/common';
import { SignUpService } from '../../../share/service/sign-up.service';

@Component({
  selector: 'app-business-form',
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './business-form.component.html',
  styleUrl: './business-form.component.scss',
})
export class BusinessFormComponent implements OnInit {
  businessForm!: FormGroup;

  get idFile() {
    return this.businessForm.get('idFile');
  }

  get registrationFile() {
    return this.businessForm.get('registrationFile');
  }

  get taxNumberFile() {
    return this.businessForm.get('taxNumberFile');
  }

  constructor(
    private fb: FormBuilder,
    private signUpService: SignUpService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.businessForm = this.initForm();
  }

  private initForm(
    businessForm: BusinessForm = {
      idFile: '',
      registrationFile: '',
      taxNumberFile: '',
    }
  ) {
    return this.fb.group({
      idFile: [businessForm.idFile, Validators.required],
      registrationFile: [businessForm.registrationFile, Validators.required],
      taxNumberFile: [businessForm.taxNumberFile, Validators.required],
    });
  }
  save() {
    const state = this.signUpService.updateBusinessForm(
      this.businessForm.value
    );
    if (state == true) {
      this.router.navigateByUrl('sign-up/final-signup');
    } else {
      this.router.navigateByUrl('sign-up/legal');
    }
  }
}
