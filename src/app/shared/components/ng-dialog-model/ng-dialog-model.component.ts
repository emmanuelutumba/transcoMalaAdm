import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ng-dialog-model',
  templateUrl: './ng-dialog-model.component.html',
  styleUrls: ['./ng-dialog-model.component.css'],
})
export class NgDialogModelComponent implements OnInit {
  @Input() id = '';
  @Input() display = 'none';
  @Input() style = {};
  @Input() title: string = '';
  @Input() withHeader: boolean = true;
  @Input() withCloseButton: boolean = false;
  @Input() withFooter: boolean = true;
  @Input() withCancelButton: boolean = true;
  @Input() withValidButton: boolean = true;

  @Output() eventClose: EventEmitter<any> = new EventEmitter<any>();
  @Output() eventCancel: EventEmitter<any> = new EventEmitter<any>();
  @Output() eventValidate: EventEmitter<any> = new EventEmitter<any>();

  @Input() errorMsg: string = '';

  constructor() {}

  ngOnInit(): void {}

  onValidate(el) {
    this.eventValidate.emit(el);
  }

  onClose() {
    this.eventClose.emit();
  }

  onCancel() {
    this.eventCancel.emit();
  }
}
