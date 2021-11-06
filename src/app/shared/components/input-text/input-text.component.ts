import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css'],
})
export class InputTextComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() id = '';
  @Input() type = 'text';
  @Input() placeholder = '';
  @Input() value = '';
  @Input() inForm = true;
  @Input() multiligne = false;
  @Input() disabled = false;
  @Output() keyUpEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onKeyUpEvent(el) {
    console.log('new change', el);
    this.keyUpEvent.emit(el);
  }
}
