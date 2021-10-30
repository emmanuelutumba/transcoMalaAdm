import {Component, Input, OnInit} from '@angular/core';
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
  defaultSelected = 'default';

  constructor() {
  }

  ngOnInit(): void {
  }

}
