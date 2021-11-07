import { Component, OnInit } from '@angular/core';
import { RegieService } from 'src/app/core/services/regie.service';
import $ from 'jquery';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-config-regie',
  templateUrl: './config-regie.component.html',
  styleUrls: ['./config-regie.component.css'],
})
export class ConfigRegieComponent implements OnInit {
  isTableLoading = false;
  headers = ['Description'];
  datas = [];

  disabledItems = true;
  options = [
    {
      id: 1,
      value: 'Nouveau',
    },
    {
      id: 2,
      value: 'Détail',
      disable: this.disabledItems,
    },
    {
      id: 3,
      value: 'Editer',
      disable: this.disabledItems,
    },
    {
      id: 4,
      value: 'Supprimer',
      disable: this.disabledItems,
    },
  ];

  displayAddForm = 'none';
  displayDetailForm = 'none';
  displayEditForm = 'none';
  displayConfirmDelete = 'none';
  displaySuccessDialog = 'none';
  displayWarningDialog = 'none';
  successMessage = '';
  waitingMessage = '';
  confirmMessage = '';

  regiesData: any;
  regieSelected: any;

  constructor(
    private regieService: RegieService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.isTableLoading = true;
    this.regieService.loadData().subscribe((data) => {
      this.isTableLoading = false;
      console.log(data);
      this.regiesData = data;

      this.datas = data.map((r) => {
        return {
          id: r.id,
          name: r.name,
        };
      });
    });

    this.regieService.getAll();
  }

  onSearch(el) {}

  onSelectItem(id) {
    this.onDisabledItem(false);
    this.regieSelected = this.regiesData.filter((r) => {
      return r.id === parseInt(id, 10);
    })[0];
    console.log(this.regieSelected);
  }
  onDataSelectedItem(data) {
    console.log(data);
  }

  onSelectedOption(id) {
    console.log(id);
    switch (id) {
      case '1':
        this.displayAddForm = 'block';
        break;
      case '2':
        this.sharedService.setRegie(this.regieSelected);
        this.displayDetailForm = 'block';
        break;
      case '3':
        this.sharedService.setRegie(this.regieSelected);
        this.displayEditForm = 'block';
        break;
      case '4':
        this.confirmMessage =
          'Voulez-vous vraimet supprimer: ' + this.regieSelected.name + '?';
        this.displayConfirmDelete = 'block';
        break;
    }
  }

  onDisabledItem(bool: boolean) {
    this.disabledItems = bool;
    this.options = [
      {
        id: 1,
        value: 'Nouveau',
      },
      {
        id: 2,
        value: 'Détail',
        disable: this.disabledItems,
      },
      {
        id: 3,
        value: 'Editer',
        disable: this.disabledItems,
      },
      {
        id: 4,
        value: 'Supprimer',
        disable: this.disabledItems,
      },
    ];
  }

  onValidate() {
    this.regieService.getAll();
    this.displayAddForm = 'none';
  }

  onValidateEdit() {
    this.regieService.getAll();
    this.displayEditForm = 'none';
  }

  onDeleteRegie(id) {
    this.displayConfirmDelete = 'none';
    const regieId = parseInt(this.regieSelected.id, 10);
    this.waitingMessage = 'Suppression...';
    this.displayWarningDialog = 'block';
    this.regieService.delete(regieId).subscribe((data) => {
      this.displayWarningDialog = 'none';
      console.log(data);
      if (data.code === '200') {
        this.displaySuccessDialog = 'block';
        this.regieService.getAll();
      } else {
      }
    });
  }

  onCloseAddForm() {
    this.displayAddForm = 'none';
  }
  onCloseEditForm() {
    this.displayEditForm = 'none';
  }

  closeSuccessDialog() {
    this.displaySuccessDialog = 'none';
  }

  closeConfirmDialog() {
    this.displayConfirmDelete = 'none';
  }
  onCloseDetail() {
    this.displayDetailForm = 'none';
  }
}
