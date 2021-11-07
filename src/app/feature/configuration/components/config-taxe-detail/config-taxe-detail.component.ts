import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-config-taxe-detail',
  templateUrl: './config-taxe-detail.component.html',
  styleUrls: ['./config-taxe-detail.component.css'],
})
export class ConfigTaxeDetailComponent implements OnInit {
  @Input() display = 'none';
  @Output() eventClose: EventEmitter<any> = new EventEmitter<any>();

  headers = ['Type', 'Numéro', ''];

  taxeData: any;
  payementAccounts = [];
  modePayementSelected: any;

  denomination = '';
  modalite = '';
  echeance = '';

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.sharedService.getTaxe().subscribe((t) => {
      this.denomination=t.denomination,
      this.modalite=t.modalite+" "+t.devise;
      this.echeance=t.typePaiementTaxe.denomination;
    });
  }

  onClose() {
    this.eventClose.emit();
  }
}
