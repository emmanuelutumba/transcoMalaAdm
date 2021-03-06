import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './components/input-text/input-text.component';
import { ButtonComponent } from './components/button/button.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ItemOComponent } from './components/item-o/item-o.component';
import { BtnDropdownComponent } from './components/btn-dropdown/btn-dropdown.component';
import { TableModelComponent } from './components/table-model/table-model.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SelectOptionComponent } from './components/select-option/select-option.component';
import { WaitingDialogComponent } from './components/waiting-dialog/waiting-dialog.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { SuccessDialogComponent } from './components/success-dialog/success-dialog.component';
import { CheckBoxComponent } from './components/check-box/check-box.component';
import { NgDialogModelComponent } from './components/ng-dialog-model/ng-dialog-model.component';



@NgModule({
    declarations: [InputTextComponent, ButtonComponent, ItemOComponent,  BtnDropdownComponent, TableModelComponent, SearchBarComponent, SelectOptionComponent, WaitingDialogComponent, ConfirmDialogComponent, SuccessDialogComponent, CheckBoxComponent, NgDialogModelComponent],
    exports: [
        InputTextComponent,
        ButtonComponent,
        ItemOComponent,
        BtnDropdownComponent,
        TableModelComponent,
        SearchBarComponent,
        SelectOptionComponent,
        ConfirmDialogComponent,
        SuccessDialogComponent,
        WaitingDialogComponent,
        CheckBoxComponent,
        NgDialogModelComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class SharedModule { }
