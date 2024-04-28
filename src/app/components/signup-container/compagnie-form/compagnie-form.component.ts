import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CompagnieForm } from '../../../share/interfaces/compagnie-form.interface';
import { SignUpService } from '../../../share/service/sign-up.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-compagnie-form',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './compagnie-form.component.html',
  styleUrl: './compagnie-form.component.scss',
})
export class CompagnieFormComponent implements OnInit {
  compagnieFrom!: FormGroup;

  get compagnie() {
    return this.compagnieFrom.get('compagnieName');
  }

  get country() {
    return this.compagnieFrom.get('country');
  }

  get town() {
    return this.compagnieFrom.get('town');
  }

  get activityDomaine() {
    return this.compagnieFrom.get('activityDomaine');
  }

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private signupService: SignUpService
  ) {}

  ngOnInit(): void {
    let savedCompagnie = this.signupService.getCompagnieForm();
    if (savedCompagnie == null) {
      this.compagnieFrom = this.initForm();
    } else {
      this.compagnieFrom = this.initForm(savedCompagnie);
    }
  }

  initForm(
    compagnie: CompagnieForm = {
      compagnieName: '',
      isLegalRepresentative: false,
      country: '',
      town: '',
      activityDomaine: '',
    }
  ): FormGroup {
    return this.fb.group({
      compagnieName: [compagnie.compagnieName, Validators.required],
      isLegalRepresentative: [compagnie.isLegalRepresentative],
      country: [compagnie.country, Validators.required],
      town: [compagnie.town, Validators.required],
      activityDomaine: [compagnie.activityDomaine, Validators.required],
    });
  }

  save() {
    this.signupService.updateCompagnieForm(this.compagnieFrom.value);
    this.router.navigateByUrl('sign-up/business');
  }
}
