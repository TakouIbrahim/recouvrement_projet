import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-signin-container',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './signin-container.component.html',
  styleUrl: './signin-container.component.scss',
})
export class SigninContainerComponent implements OnInit {
  form!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
    });
  }

  save(): void {
    console.log(this.form);
  }
}
