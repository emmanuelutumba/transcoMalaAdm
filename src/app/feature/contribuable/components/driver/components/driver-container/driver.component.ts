import {Component, OnInit} from '@angular/core';
import {ChauffeurService} from '../../../../../../core/services/chauffeur.service';
import {SharedService} from '../../../../../../shared/services/shared.service';
import $ from 'jquery';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  headers = [
    'Nom', 'Prénom', 'Téléphone', 'Résidence'
  ];
  drivers = [];

  disabledOption = true;
  options = [
    {
      id: '1', value: 'Nouveau chauffeur'
    },
    {
      id: '3', value: 'Editer', disable: this.disabledOption
    },
    {
      id: '4', value: 'Supprimer', disable: this.disabledOption
    }
  ];

  displayDriverForm = 'none';
  displayDriverDetail = 'none';
  displayDriverFormEdit = 'none';
  displayDriverComfirmDelete = 'none';
  contribuable: any;
  driverSelectedId: any;
  driverSelectedData: any;
  driversData: any;


  constructor(private driverService: ChauffeurService, private sharedService: SharedService) {
  }

  ngOnInit(): void {
    this.driverService.load().subscribe(data => {
      this.driversData = data;
      this.drivers = data.map(driver => {
        return {
          id: driver.id,
          name: driver.name,
          lastname: driver.lastname,
          phoneNumber: driver.phoneNumber,
          address: driver.address
        };
      });
    });
    this.contribuable = this.sharedService.loadDataContribuable();
    console.log(this.contribuable);
    this.driverService.getAll(this.contribuable.id);
  }

  addDriver() {
    this.driverService.getAll(this.contribuable.id);
  }

  onOptionSelected(id) {
    console.log(id);
    switch (id) {
      case '1':
        // new driver
        this.displayDriverForm = 'block';
        break;
      case '2':
        // detail
        this.displayDriverDetail = 'block';
        break;
      case '3':
        // Editer
        this.sharedService.setDriver(this.driverSelectedData);
        this.displayDriverFormEdit = 'block';
        break;
      case '4':
        // delete
        this.displayDriverComfirmDelete = 'block';
        break;
    }
  }

  onDriverData(d) {
    this.driverSelectedData = d;
    console.log('data item: ', d);
    this.driverSelectedData = this.driversData.filter(dv => {
      return dv.id = d.id;
    })[0];
  }

  onItemSelected(id) {
    console.log('item: ', id);
    this.driverSelectedId = id;
    this.onDisableOption(false);
  }

  onDisableOption(bool: boolean) {
    this.disabledOption = bool;
    this.options = [
      {
        id: '1', value: 'Nouveau chauffeur'
      },
      {
        id: '3', value: 'Editer', disable: this.disabledOption
      },
      {
        id: '4', value: 'Supprimer', disable: this.disabledOption
      }
    ];
  }

  onCloseDriverForm() {
    this.displayDriverForm = 'none';
  }

  onConfirmCancel() {
    this.displayDriverComfirmDelete = 'none';
  }

  onConfirm() {
    this.displayDriverComfirmDelete = 'none';
    this.driverService.delete(this.driverSelectedId).subscribe(data => {
      this.onDisableOption(true);
      console.log(data);
      if (data.code === '200') {
        this.driverService.getAll(this.contribuable.id);
      }
    });
  }

  onCloseDriverFormEdit() {
    this.displayDriverFormEdit = 'none';
  }

  onDriverUpdated() {
    this.driverService.getAll(this.contribuable.id);
    this.displayDriverFormEdit = 'none';
  }
}
