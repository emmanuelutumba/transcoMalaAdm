import {Component, Input, OnInit} from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-table-model',
  templateUrl: './table-model.component.html',
  styleUrls: ['./table-model.component.css']
})
export class TableModelComponent implements OnInit {

  @Input() headers = [];
  @Input() datas = [];
  @Input() showCheck = true;
  @Input() showId = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  isShowCol(id, item) {
    if (item.key === 'id') {
      $('#' + id).hide();
      return false;
    }
    return true;
  }

  onSelectedItem(tr) {
    const parent = $(tr).parent();
    parent.find('.check-item').attr('class', 'check-item');
    $(tr).find('.check-item').attr('class', 'check-item table-model-active');
  }

}
