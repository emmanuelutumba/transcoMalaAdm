import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {VehicleService} from '../../../../../../core/services/vehicle.service';
import {SharedService} from '../../../../../../shared/services/shared.service';
import {ContribuableService} from '../../../../../../core/services/contribuable.service';
import $ from 'jquery';

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
  vehiculesData = [];

  isDisableOptions = true;

  options = [{id: 1, value: 'Nouveau'}, {
    id: 2,
    value: 'Editer',
    disable: this.isDisableOptions
  }, {
    id: 3,
    value: 'Supprimer', disable: this.isDisableOptions
  }];

  contribuableData: any;

  selectedItem: any;
  dataSelectedItem: any;
  displayVehicleForm = 'none';
  displayVehicleFormEdit = 'none';

  vehiculeSelected: any = {};

  constructor(private router: Router,
              private vehicleService: VehicleService,
              private route: ActivatedRoute,
              private sharedService: SharedService,
              private contribuableService: ContribuableService) {
  }

  ngOnInit(): void {

    this.contribuableData = this.sharedService.loadDataContribuable();
    console.log('Fetched contribuable data from shared service: ', this.contribuableData);

    if (this.contribuableData !== undefined) {
      this.vehicules = this.contribuableData.vehicules;
    }

    this.sharedService.getContribuableData().subscribe((data => {
      console.log('subscribed to contribuable data from shared service: ', data);
      this.contribuableData = data;

      this.vehiculesData = data.vehicules;
      const newData = data.vehicules.map(v => {
        const d = new Date(v.createdAt);
        const dateFormatted = d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear() + ', ' +
          d.getHours() + ':' + d.getMinutes();
        return {
          id: v.id,
          brand: v.brand,
          modele: v.modele,
          idNumber: v.idNumber,
          carteRoseId: v.carteRoseId,
          insuranceId: v.insuranceId,
          voletJauneId: v.voletJauneId,
          createdAt: dateFormatted,
        };
      });
      this.vehicules = newData;
      console.log(this.vehiculesData);
      console.log(this.vehicules);
    }));

    this.contribuableService.loadById().subscribe(data => {
      console.log('load data by id: ', data);
      if (data.code === '200') {
        this.contribuableData = data.data[0];
        this.sharedService.setContribuable(this.contribuableData);

        this.vehiculesData = data.vehicules;
        const newData = this.contribuableData.vehicules.map(v => {
          const d = new Date(v.createdAt);
          const dateFormatted = d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear() + ', ' +
            d.getHours() + ':' + d.getMinutes();
          return {
            id: v.id,
            brand: v.brand,
            modele: v.modele,
            idNumber: v.idNumber,
            carteRoseId: v.carteRoseId,
            insuranceId: v.insuranceId,
            voletJauneId: v.voletJauneId,
            createdAt: dateFormatted,
          };
        });
        this.vehicules = newData;
      }
    });
  }

  onSelectItem(id) {
    console.log(id);
    this.selectedItem = id;
    this.isDisableOptions = false;
    this.onDisabledItem(false);
  }

  onOptionSelected(id) {
    console.log('itemId1: ', id);
    switch (id) {
      case '1':
        this.displayVehicleForm = 'block';
        break;
      case '2':
        this.displayVehicleFormEdit = 'block';
        break;
      case '3':
        this.vehicleService.delete(this.selectedItem).subscribe(data => {
          this.onDisabledItem(true);
          console.log(data);
          if (data.code === '200') {
            this.contribuableService.getContribuableById(this.contribuableData.id);
          }
        });
        break;
    }
  }

  onDisabledItem(bool: boolean) {
    this.isDisableOptions = bool;
    this.options = [{id: 1, value: 'Nouveau'}, {
      id: 2,
      value: 'Editer',
      disable: this.isDisableOptions
    }, {
      id: 3,
      value: 'Supprimer', disable: this.isDisableOptions
    }];
  }

  onAddVehicle(data) {
    this.contribuableService.getContribuableById(this.contribuableData.id);
    data.proprietaire = this.contribuableData;
    console.log(data);
    data.createdAt = null;
    data.proprietaire.vehicules = null;

    this.loadingSaveBtn(true);
    this.vehicleService.add(data).subscribe(httpResponse => {
      this.loadingSaveBtn(true);
      this.onDisabledItem(true);

      if (httpResponse.code === '200') {
        this.contribuableService.getContribuableById(this.contribuableData.id);
        this.displayVehicleForm = 'none';
      }
    });
  }

  loadingSaveBtn(load: boolean) {
    const btn = $('.vehicule-form').find('#btn-create-vehcle');
    if (load) {
      btn.attr('disabled', 'disabled');
      btn.find('i').attr('class', 'fa fa-spin fa-spinner');
    } else {
      btn.attr('disabled', false);
      btn.find('i').attr('class', '');
    }
  }

  onCloseVehicleForm() {
    this.displayVehicleForm = 'none';
  }

  onCloseVehicleFormEdit() {
    this.displayVehicleFormEdit = 'none';
  }

  onDataSelectedItem(data) {
    console.log('data selected item: ', data);
    const vehicleData = this.vehiculesData.filter(v => {
      return v.id === data.id;
    });

    this.vehiculeSelected = vehicleData[0];
    this.vehiculeSelected.proprietaire = {};
    this.vehiculeSelected.proprietaire.id = this.contribuableData.id;
    console.log(this.vehiculeSelected);
    this.sharedService.setVehicle(this.vehiculeSelected);
  }

  onEdit() {
    this.displayVehicleFormEdit = 'none';
    this.contribuableService.getContribuableById(this.contribuableData.id);
  }
}
