import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {VehicleService} from '../../../../../../core/services/vehicle.service';
import {SharedService} from '../../../../../../shared/services/shared.service';

@Component({
  selector: 'app-vehicle-container',
  templateUrl: './vehicle-container.component.html',
  styleUrls: ['./vehicle-container.component.css']
})
export class VehicleContainerComponent implements OnInit {

  headers = [
    'Marque', 'Modèle', 'Numéro de plaque', 'ID. carte rose', 'ID. assurance', 'ID. volet jaune', 'Date issue'
  ];
  vehicules = [];

  options = [
    {
      id: '1', value: 'Nouveau véhicule'
    },
    {
      id: '2', value: 'Détail'
    },
    {
      id: '3', value: 'Supprimer'
    },
    {
      id: '4', value: 'Editer'
    }
  ];

  displayForm = 'none';
  contribuableData: any;

  constructor(private router: Router,
              private vehicleService: VehicleService,
              private route: ActivatedRoute,
              private sharedService: SharedService) {
  }

  ngOnInit(): void {
    this.contribuableData = this.sharedService.loadData();
    console.log(this.contribuableData);
    if (this.contribuableData !== null && this.contribuableData !== undefined) {
      this.vehicules = this.contribuableData.vehicules;
    }

    this.sharedService.getContribuableData().subscribe((data => {
      console.log('load data...', data);
      this.contribuableData = data;
      this.vehicules = data.vehicules;
    }));
  }

  onOptionSelected(id) {
    console.log(id === '1');
    if (id === '1') {
      this.router.navigate(['main/vehicle/add']);
    }
  }

  closeForm() {
    this.displayForm = 'none';
  }
}
