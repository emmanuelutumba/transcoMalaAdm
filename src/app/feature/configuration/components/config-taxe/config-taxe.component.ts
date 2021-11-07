import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TaxeService } from 'src/app/core/services/taxe.service';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-config-taxe',
  templateUrl: './config-taxe.component.html',
  styleUrls: ['./config-taxe.component.css'],
})
export class ConfigTaxeComponent implements OnInit {
  isTableLoading = false;
  headers = ['Description', 'Modalite', 'Echeance de paiement','Regie'];
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

  taxesData: any;
  taxeSelected: any;

  constructor(
    private taxeService: TaxeService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.isTableLoading = true;
    this.taxeService.loadData().subscribe((data) => {
      this.isTableLoading = false;
      console.log(data);
      this.taxesData = data;

      this.datas = data.map((t) => {
        return {
          id: t.id,
          denomination: t.denomination,
          modalite: t.modalite + ' ' + t.devise,
          echeance: t.typePaiementTaxe.denomination,
          regie: t.regie !== undefined ? t.regie.name : '',
        };
      });
    });

    this.taxeService.getList();
  }

  onSearch(el) {}

  onSelectItem(id) {
    this.onDisabledItem(false);
    this.taxeSelected = this.taxesData.filter((t) => {
      return t.id === parseInt(id, 10);
    })[0];
    console.log(this.taxeSelected);
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
        this.sharedService.setTaxe(this.taxeSelected);
        this.displayDetailForm = 'block';
        break;
      case '3':
        this.sharedService.setTaxe(this.taxeSelected);
        this.displayEditForm = 'block';
        break;
      case '4':
        this.confirmMessage =
          'Voulez-vous vraimet supprimer: ' +
          this.taxeSelected.denomination +
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
    this.taxeService.getList();
    this.displayAddForm = 'none';
  }

  onValidateEdit() {
    this.taxeService.getList();
    this.displayEditForm = 'none';
  }

  onDeleteRegie(id) {
    this.displayConfirmDelete = 'none';
    const taxeId = parseInt(this.taxeSelected.id, 10);
    this.waitingMessage = 'Suppression...';
    this.displayWarningDialog = 'block';
    this.taxeService.delete(taxeId).subscribe((data) => {
      this.displayWarningDialog = 'none';
      console.log(data);
      if (data.code === '200') {
        this.displaySuccessDialog = 'block';
        this.taxeService.getList();
      } else {
      }
    });
  }

  onCloseAddForm() {
    this.taxeService.getList();
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
