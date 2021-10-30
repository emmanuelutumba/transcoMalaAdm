import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {VehicleService} from '../../../../core/services/vehicle.service';

@Component({
  selector: 'app-vehicle-container',
  templateUrl: './vehicle-container.component.html',
  styleUrls: ['./vehicle-container.component.css']
})
export class VehicleContainerComponent implements OnInit {

  headers = [
    'Marque', 'Modèle', 'Numéro de plaque', 'ID. carte rose', 'ID. volet jaune'
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

  constructor(private router: Router, private vehicleService: VehicleService) {
  }

  ngOnInit(): void {
    this.vehicleService.getList().subscribe(httpResponse => {
      console.log(httpResponse.data);
      if (httpResponse.code === '200') {
        this.vehicules = httpResponse.data;
        console.log('data vehicles', this.vehicules[0][0]);
      }
    });
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
