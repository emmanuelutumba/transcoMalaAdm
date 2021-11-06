import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import $ from 'jquery';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-table-model',
  templateUrl: './table-model.component.html',
  styleUrls: ['./table-model.component.css'],
})
export class TableModelComponent implements OnInit {
  @Input() headers = [];
  @Input() datas = [];
  @Input() showCheck = true;
  @Input() showId = false;
  @Input() withRm = false;
  @Output() eventRemoveItem: EventEmitter<any> = new EventEmitter<any>();
  @Output() eventSelectItem: EventEmitter<any> = new EventEmitter<any>();
  @Output() eventDataSelectedItem: EventEmitter<any> = new EventEmitter<any>();
  @Input() withStatus = false;
  @Input() loading = false;

  constructor() {}

  ngOnInit(): void {}

  isShowCol(id, item) {
    if (item.key === 'id' || item.key === 'status') {
      $('#' + id).hide();
      return false;
    }
    return true;
  }

  onSelectedItem(tr) {
    const parent = $(tr).parent();
    parent.find('.check-item').attr('class', 'check-item');
    $(tr).find('.check-item').attr('class', 'check-item table-model-active');
    const id = $(tr).attr('id');
    console.log('itemId: ', id);
    this.eventSelectItem.emit(id);
  }

  onRemoveItem(id) {
    console.log('id', id);
    this.eventRemoveItem.emit(id);
  }

  asIsOrder(a, b) {
    return 1;
  }

  getData(data: any) {
    this.eventDataSelectedItem.emit(data);
  }
  trackById(index, item) {
    return item.id;
  }
}
