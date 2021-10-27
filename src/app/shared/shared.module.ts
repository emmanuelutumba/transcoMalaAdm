import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './components/input-text/input-text.component';
import { ButtonComponent } from './components/button/button.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ItemOComponent } from './components/item-o/item-o.component';



@NgModule({
    declarations: [InputTextComponent, ButtonComponent, ItemOComponent],
    exports: [
        InputTextComponent,
        ButtonComponent,
        ItemOComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class SharedModule { }
