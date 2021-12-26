import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';
import $ from 'jquery';
import { Router } from '@angular/router';
import { ReclamationService } from 'src/app/core/services/reclamation.service';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css'],
})
export class MainContainerComponent implements OnInit {
  userData: any;

  disabled = true;
  dropDatas = [
    { id: 1, value: 'Détails', disable: this.disabled },
    { id: 2, value: 'Supprimer', disable: this.disabled },
  ];
  headers = ['Objet', 'Contenu', 'Bus', 'Line', 'Date'];
  reclamations = [];
  reclamationData = [];

  displayDetail = 'none';

  constructor(
    private authService: AuthService,
    private router: Router,
    private reclamationService: ReclamationService
  ) {
    this.userData = JSON.parse(localStorage.getItem('userData'));
    if (this.userData == null) {
      this.userData = { username: '' };
    }
    this.reclamation();

    let url = 'main';
    this.router.navigate([url]);
  }

  reclamation() {
    this.reclamationService.getAll().subscribe((data) => {
      if (data.code === '200') {
        this.reclamationData = data.data;
        this.reclamations = data.data.map((r) => {
          return {
            id: r.id,
            objet: r.object,
            content: r.content,
            bus: r.numBus,
            ligne: r.ligne,
            date: r.createdAt,
          };
        });
      }
    });
  }

  ngOnInit(): void {}

  reclamationSelected: any;
  selectedItem(item): void {
    this.disabled = false;
    this.dropDatas = [
      { id: 1, value: 'Détails', disable: this.disabled },
      { id: 2, value: 'Supprimer', disable: this.disabled },
    ];
    this.reclamationSelected = this.reclamationData.filter((r) => {
      return r.id === item.id;
    })[0];

    console.log(this.reclamationSelected);
  }

  onSelectedOption(id) {
    console.log(id);

    switch (id) {
      case '1':
        this.displayDetail = 'block';
        break;
      case '2': {
        this.reclamationService
          .delete(this.reclamationSelected.id)
          .subscribe((data) => {
            console.log(data);

            if (data.code === '200') {
              this.reclamation();
            }

            alert(data.message);
          });
        break;
      }
    }
  }

  closeDetailDialog() {
    this.displayDetail = 'none';
  }
}
