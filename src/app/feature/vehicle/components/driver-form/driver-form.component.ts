import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-driver-form',
  templateUrl: './driver-form.component.html',
  styleUrls: ['./driver-form.component.css']
})
export class DriverFormComponent implements OnInit {


  @Input() display = 'none';
  formGroup: FormGroup;

  @Output() eventClose: EventEmitter<any> = new EventEmitter<any>();
  @Output() eventSave: EventEmitter<any> = new EventEmitter<any>();

  errorMsg = '';

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required],
      identityId: ['', Validators.required],
      typeCarte: ['', Validators.required]
    });
  }

  onSave() {
    this.errorMsg = '';

    const status = this.formGroup.status;
    if (status === 'VALID') {
      this.eventSave.emit(this.formGroup.value);
      this.formGroup.reset();
    } else {
      this.errorMsg = 'Veuillez renseigner tout les champs';
    }
  }

  onClose() {
    this.eventClose.emit();
  }

}
