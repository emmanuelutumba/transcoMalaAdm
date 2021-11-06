import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-select-option',
  templateUrl: './select-option.component.html',
  styleUrls: ['./select-option.component.css']
})
export class SelectOptionComponent implements OnInit {

  @Input() id = '';
  @Input() formGroup: FormGroup;
  @Input() options = [];
  @Input() defaultTitle = 'default';
  @Input() defaultSelected = '';
  @Output() changeEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onChangeEvent(el) {
    this.changeEvent.emit(el);
  }
}
