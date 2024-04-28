import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SignUpService } from '../../../share/service/sign-up.service';
import { Router } from '@angular/router';
import { PersonalForm } from '../../../share/interfaces/personal-form.intervace';

@Component({
  selector: 'app-personal-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './personal-form.component.html',
  styleUrl: './personal-form.component.scss',
})
export class PersonalFormComponent implements OnInit {
  personalForm!: FormGroup;

  get name() {
    return this.personalForm.get('name');
  }
  get email() {
    return this.personalForm.get('email');
  }
  get phone() {
    return this.personalForm.get('phone');
  }

  constructor(
    private fb: FormBuilder,
    private signUpService: SignUpService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let savedPersonal: PersonalForm = this.signUpService.getPersonalForm();
    if (savedPersonal == null) {
      this.personalForm = this.initForm();
    } else {
      this.personalForm = this.initForm(savedPersonal);
    }
  }

  private initForm(
    personalForm: PersonalForm = {
      name: '',
      email: '',
      phone: NaN,
    }
  ) {
    return this.fb.group({
      name: [personalForm.name, Validators.required],
      email: [personalForm.email, [Validators.required, Validators.email]],
      phone: [personalForm.phone, [Validators.required]],
    });
  }

  save() {
    this.signUpService.updatePersonalForm(this.personalForm.value);
    this.router.navigateByUrl('sign-up/compagnie');
    console.log(this.personalForm.controls);
  }
}
