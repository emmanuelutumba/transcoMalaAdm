import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-config-regie-detail',
  templateUrl: './config-regie-detail.component.html',
  styleUrls: ['./config-regie-detail.component.css'],
})
export class ConfigRegieDetailComponent implements OnInit {
  @Input() display = 'none';
  @Output() eventClose: EventEmitter<any> = new EventEmitter<any>();

  headers = ['Type', 'Numéro', ''];

  regieData: any;
  payementAccounts = [];
  modePayementSelected: any;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.sharedService.getRegie().subscribe((regie) => {
      this.regieData = regie;
      this.payementAccounts = regie.comptes.map((c) => {
        return {
          id: c.id,
          denomination: c.denomination,
          number: c.number,
        };
      });
    });
  }

  onClose() {
    this.eventClose.emit();
  }
}
