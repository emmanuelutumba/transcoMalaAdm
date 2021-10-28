import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit {

  @Input() formGroup: FormGroup;
  @Input() id = '';
  @Input() type = 'text';
  @Input() placeholder = '';
  @Input() value = '';
  @Input() inForm = true;

  constructor() {
  }

  ngOnInit(): void {
  }

}
