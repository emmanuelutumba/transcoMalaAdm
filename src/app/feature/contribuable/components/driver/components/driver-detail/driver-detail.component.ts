import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-driver-detail',
  templateUrl: './driver-detail.component.html',
  styleUrls: ['./driver-detail.component.css']
})
export class DriverDetailComponent implements OnInit {

  @Input() display = 'none';
  formGroup: FormGroup;
  driver: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  onClose() {
    this.display = 'none';
  }
}
