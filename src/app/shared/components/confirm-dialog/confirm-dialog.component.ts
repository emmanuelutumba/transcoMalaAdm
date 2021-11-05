import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  @Input() display = 'none';
  @Input() message = '';
  @Output() eventCancel: EventEmitter<any> = new EventEmitter<any>();
  @Output() eventConfirm: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onCancel() {
    this.eventCancel.emit();
  }

  onConfirm() {
    this.eventConfirm.emit();
  }
}
