import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-waiting-dialog',
  templateUrl: './waiting-dialog.component.html',
  styleUrls: ['./waiting-dialog.component.css']
})
export class WaitingDialogComponent implements OnInit {

  @Input() display = 'none';
  @Input() message = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
