import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.css'],
})
export class UserProfilComponent implements OnInit {
  isTableLoading = false;
  headers = ['Code', "Nom d'utilisateur", ''];
  datas = [];

  disabledItems = true;
  options = [
    {
      id: 1,
      value: 'Nouveau',
    },
    {
      id: 2,
      value: 'Changer le mot de passe',
      disable: this.disabledItems,
    },
    {
      id: 3,
      value: 'Activer / Désactiver',
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

  users: [];
  usersData: any;
  userSelected: any;

  constructor(private userService: UserService,private sharedService: SharedService) {}

  ngOnInit(): void {
    this.userService.loadAllUsers().subscribe((users) => {
      this.usersData = users;
      this.users = users.map((u) => {
        return {
          id: u.id,
          code: u.activationCode,
          username: u.username,
          status: u.enable,
        };
      });
    });
    this.userService.getAllUsers();
  }

  onValidate() {}

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

  onSearch(el) {}

  onSelectedOption(id) {
    switch (id) {
      case '1':
        this.displayAddForm = 'block';
        break;
      case '2':
        this.sharedService.setUserProfil(this.userSelected);
        this.displayEditForm = 'block';
        break;
      case '3':
        this.displayWarningDialog = 'block';
        const en = this.userSelected.enable;
        this.userSelected.enable = en === 1 ? 0 : 1;
        console.log(this.userSelected);

        this.userService.update(this.userSelected).subscribe((data) => {
          console.log(data);

          this.displayWarningDialog = 'none';
          if (data.code === '200') {
            this.userService.getAllUsers();
          }
        });
        break;
    }
  }

  onSelectItem(id) {
    console.log(id);

    this.onDisableOptions(false);
    this.userSelected = this.usersData.filter((user) => {
      return user.id == parseInt(id);
    })[0];
  }

  onValidateEdit() {}

  onDataSelectedItem(id) {}

  onDisableOptions(bool: boolean) {
    this.disabledItems = bool;
    this.options = [
      {
        id: 1,
        value: 'Nouveau',
      },
      {
        id: 2,
        value: 'Changer le mot de passe',
        disable: this.disabledItems,
      },
      {
        id: 3,
        value: 'Activer / Désactiver',
        disable: this.disabledItems,
      },
    ];
  }

  onDeleteItem() {
    this.displayConfirmDelete = 'none';
    this.waitingMessage = 'Suppression...';
    console.log(this.userSelected);
    this.displayWarningDialog = 'block';
    this.userService.delete(this.userSelected.id).subscribe((data) => {
      this.displayWarningDialog = 'none';
      if (data.code === '200') {
        this.displaySuccessDialog = 'block';
        this.userService.getAllUsers();
      }
    });
  }
}
