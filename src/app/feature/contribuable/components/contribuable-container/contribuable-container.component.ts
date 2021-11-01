import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ContribuableService} from '../../../../core/services/contribuable.service';

@Component({
  selector: 'app-contribuable-container',
  templateUrl: './contribuable-container.component.html',
  styleUrls: ['./contribuable-container.component.css']
})
export class ContribuableContainerComponent implements OnInit {

  isDisableOptions = true;

  options = [{id: 1, value: 'Nouveau'}, {id: 2, value: 'Détail', disable: this.isDisableOptions}, {
    id: 3,
    value: 'Editer',
    disable: this.isDisableOptions
  }, {
    id: 4,
    value: 'Supprimer', disable: this.isDisableOptions
  }];
  headersContribuable = ['Code', 'Nom', 'Prénom', 'Nombre de véhicule'];
  contribuables = [];
  selectedItem: any;

  constructor(private router: Router, private contribuableService: ContribuableService) {
  }

  ngOnInit(): void {
    this.contribuableService.getAll().subscribe((data) => {
      console.log(data);

      if (data.code === '200') {
        const contribuablesData = data.data.map((contr) => {

          const contrData = {
            id: contr.id,
            codeActivation: (contr.profil === null ? '' : contr.profil.activationCode),
            name: contr.name,
            lastname: contr.lastname,
            vehicles: contr.vehicules.length
          };
          return contrData;
        });

        this.contribuables = contribuablesData;
      }
    });
  }

  onOptionSelected(data) {
    console.log(data);
    switch (data) {
      case '1':
        this.router.navigate(['main/contribuable/add']);
        break;
      case '2':
        console.log(this.selectedItem === undefined);
        console.log(this.selectedItem === 'undefined');
        if (this.selectedItem !== undefined) {
          this.router.navigate(['main/contribuable/detail/' + this.selectedItem]);
        }
        break;
    }
  }

  onSelectItem(id) {
    this.selectedItem = id;
    this.isDisableOptions = false;
    this.options = [{id: 1, value: 'Nouveau'}, {id: 2, value: 'Détail', disable: this.isDisableOptions}, {
      id: 3,
      value: 'Editer',
      disable: this.isDisableOptions
    }, {
      id: 4,
      value: 'Supprimer', disable: this.isDisableOptions
    }];
  }
}
