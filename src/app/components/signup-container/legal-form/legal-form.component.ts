import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SignUpService } from '../../../share/service/sign-up.service';
import { LegalForm } from '../../../share/interfaces/legal-form.interface';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-legal-form',
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './legal-form.component.html',
  styleUrl: './legal-form.component.scss',
})
export class LegalFormComponent implements OnInit {
  legalForm!: FormGroup;
  get legalName() {
    return this.legalForm.get('legalName');
  }

  get legalIdFile() {
    return this.legalForm.get('legalIdFile');
  }

  get powerSignature() {
    return this.legalForm.get('powerSignature');
  }

  constructor(private signUpService: SignUpService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.legalForm = this.initForm();
  }

  private initForm(
    legalForm: LegalForm = {
      legalIdFile: '',
      legalName: '',
      powerSignature: '',
    }
  ) {
    return this.fb.group({
      legalName: [legalForm.legalName, Validators.required],
      legalIdFile: [legalForm.legalIdFile, Validators.required],
      powerSignature: [legalForm.powerSignature, Validators.required],
    });
  }
  save() {
    const response = this.signUpService.updateLegal(this.legalForm.value);
    console.log(response);
  }
}
