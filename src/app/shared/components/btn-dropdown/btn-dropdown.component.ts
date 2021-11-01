import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-btn-dropdown',
  templateUrl: './btn-dropdown.component.html',
  styleUrls: ['./btn-dropdown.component.css']
})
export class BtnDropdownComponent implements OnInit {
  @Input() title = '';
  @Input() datas = [];
  @Input() id = '';
  @Input() height = '35px';
  @Output() eventSelectedOption: EventEmitter<any> = new EventEmitter<any>();
  @Input() disabled = '';

  isDisabled = (el, bool) => {
    bool = (bool === undefined ? false : bool);
    if (bool) {
      $(el).css('pointer-events', 'none');
      $(el).css('color', '#A2A2A2FF');
      $(el).attr('disabled', true);
    } else {
      $(el).css('pointer-events', 'inherit');
      $(el).css('color', '#414040');
      $(el).attr('disabled', false);
    }
    return '';
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  onSelectItem(ref) {
    console.log(ref);
    const idOption = $(ref).attr('id');
    console.log('OptionId: ', idOption);
    this.eventSelectedOption.emit(idOption);
  }

}
