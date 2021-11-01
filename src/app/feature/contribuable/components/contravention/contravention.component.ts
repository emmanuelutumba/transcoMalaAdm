import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../../../shared/services/shared.service';

@Component({
  selector: 'app-contravention',
  templateUrl: './contravention.component.html',
  styleUrls: ['./contravention.component.css']
})
export class ContraventionComponent implements OnInit {

  headers = [
    'Véhicule', 'Contravention', 'Montant payé', 'Montant restant', 'Status'
  ];
  options = [{
    id: '1', value: 'Payé'
  }
  ];
  contraventions = [];

  constructor(private sharedServie: SharedService) {
  }

  ngOnInit(): void {
  }

  onOptionSelected(el) {

  }
}
