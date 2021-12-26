import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() text = '';
  @Input() id = '';
  @Input() style= {};
  @Input() width = '';
  @Input() withIcon = false;
  @Input() icon = '';
  @Output() clickEvent: EventEmitter<any> = new EventEmitter<any>();

  @Input() disabled = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick(btn) {
    this.clickEvent.emit(btn);
  }
}
