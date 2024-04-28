import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { PersonalFormComponent } from './personal-form/personal-form.component';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-signup-container',
  standalone: true,
  imports: [RouterOutlet, GeneralInfoComponent, PersonalFormComponent],
  templateUrl: './signup-container.component.html',
  styleUrl: './signup-container.component.scss',
})
export class SignupContainerComponent implements OnInit {
  // form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // this.form = this.fb.group({
    //   compagnie: this.fb.group({}),
    //   business: this.fb.group({}),
    //   legal: this.fb.group({}),
    // });
  }

  // private initForm():FormGroup{

  // }
}
