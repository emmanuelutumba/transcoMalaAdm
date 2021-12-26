import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.css'],
})
export class CheckBoxComponent implements OnInit {
  @Input() id;
  @Input() isChecked = false;
  @Input() label = 'label';
  @Input() disabled = false;
  @Output() eventStateChanged: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.isChecked = this.isChecked === false ? true : false;
    this.eventStateChanged.emit({ isChecked: this.isChecked });
  }

  isDisabled(el, disabled) {
    console.log(el);

    if (disabled) {
      $(el).attr('disabled', disabled);
      return { 'pointer-events': 'none' };
    } else {
      $(el).attr('disabled', !disabled);
      return { 'pointer-events': 'inherit' };
    }
  }
}
