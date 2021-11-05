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



@NgModule({
    declarations: [InputTextComponent, ButtonComponent, ItemOComponent,  BtnDropdownComponent, TableModelComponent, SearchBarComponent, SelectOptionComponent, WaitingDialogComponent, ConfirmDialogComponent],
    exports: [
        InputTextComponent,
        ButtonComponent,
        ItemOComponent,
        BtnDropdownComponent,
        TableModelComponent,
        SearchBarComponent,
        SelectOptionComponent,
        ConfirmDialogComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class SharedModule { }
