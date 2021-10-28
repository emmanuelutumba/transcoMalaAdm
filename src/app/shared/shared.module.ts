import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './components/input-text/input-text.component';
import { ButtonComponent } from './components/button/button.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ItemOComponent } from './components/item-o/item-o.component';
import { BtnDropdownComponent } from './components/btn-dropdown/btn-dropdown.component';
import { TableModelComponent } from './components/table-model/table-model.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';



@NgModule({
    declarations: [InputTextComponent, ButtonComponent, ItemOComponent,  BtnDropdownComponent, TableModelComponent, SearchBarComponent],
    exports: [
        InputTextComponent,
        ButtonComponent,
        ItemOComponent,
        BtnDropdownComponent,
        TableModelComponent,
        SearchBarComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class SharedModule { }
