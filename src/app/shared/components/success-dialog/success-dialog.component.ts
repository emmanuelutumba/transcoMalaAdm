import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-success-dialog',
  templateUrl: './success-dialog.component.html',
  styleUrls: ['./success-dialog.component.css'],
})
export class SuccessDialogComponent implements OnInit {
  @Input() display = 'none';
  @Input() message = 'Message';
  @Output() eventClose: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}
  onClose() {
    this.eventClose.emit();
  }
}
