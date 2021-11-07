import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContraventionService } from 'src/app/core/services/contravention.service';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-config-contravention',
  templateUrl: './config-contravention.component.html',
  styleUrls: ['./config-contravention.component.css'],
})
export class ConfigContraventionComponent implements OnInit {
  isTableLoading = false;
  headers = ['Description', 'Modalite'];
  datas = [];

  disabledItems = true;
  options = [
    {
      id: 1,
      value: 'Nouveau',
    },
    {
      id: 2,
      value: 'Editer',
      disable: this.disabledItems,
    },
    {
      id: 3,
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

  taxesData: any;
  contraventionSelected: any;

  constructor(
    private contraventionService: ContraventionService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.isTableLoading = true;
    this.contraventionService.loadData().subscribe((data) => {
      this.isTableLoading = false;
      console.log(data);
      this.taxesData = data;

      this.datas = data.map((t) => {
        return {
          id: t.id,
          denomination: t.denomination,
          modalite: t.modalite + ' ' + t.devise,
        };
      });
    });

    this.contraventionService.getAllContr();
  }

  onSearch(el) {}

  onSelectItem(id) {
    this.onDisabledItem(false);
    this.contraventionSelected = this.taxesData.filter((t) => {
      return t.id === parseInt(id, 10);
    })[0];
    console.log(this.contraventionSelected);
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
        this.sharedService.setContravention(this.contraventionSelected);
        this.displayEditForm = 'block';
        break;
      case '3':
        this.confirmMessage =
          'Voulez-vous vraimet supprimer: ' +
          this.contraventionSelected.denomination +
          '?';
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
        value: 'Editer',
        disable: this.disabledItems,
      },
      {
        id: 3,
        value: 'Supprimer',
        disable: this.disabledItems,
      },
    ];
  }

  onValidate() {
    this.contraventionService.getAllContr();
    this.displayAddForm = 'none';
  }

  onValidateEdit() {
    this.contraventionService.getAllContr();
    this.displayEditForm = 'none';
  }

  onDeleteRegie(id) {
    this.displayConfirmDelete = 'none';
    const taxeId = parseInt(this.contraventionSelected.id, 10);
    this.waitingMessage = 'Suppression...';
    this.displayWarningDialog = 'block';
    this.contraventionService.delete(taxeId).subscribe((data) => {
      this.displayWarningDialog = 'none';
      console.log(data);
      if (data.code === '200') {
        this.displaySuccessDialog = 'block';
        this.contraventionService.getAllContr();
      } else {
      }
    });
  }

  onCloseAddForm() {
    this.contraventionService.getAllContr();
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
