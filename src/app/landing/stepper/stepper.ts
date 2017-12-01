import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'stepper',
  templateUrl: 'stepper.html'
//   styleUrls: ['stepper.css']
})
export class Stepper implements OnInit {
  public isLinear: boolean = false;
  public firstFormGroup: FormGroup;
  public secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  public ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}
