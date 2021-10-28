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
