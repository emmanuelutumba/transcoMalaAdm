import {Component, Input, OnInit} from '@angular/core';
import $ from 'jquery';

@Component({
    selector: 'app-item-o',
    templateUrl: './item-o.component.html',
    styleUrls: ['./item-o.component.css']
})
export class ItemOComponent implements OnInit {

    @Input() id = 'fd';
    @Input() title = 'title';
    @Input() icon = 'gfgf';
    @Input() paidValue = 'gfgf';
    @Input() averagePaidValue = 'fgg';
    @Input() neverPaidValue = 'gfgf';

    constructor() {
    }

    ngOnInit(): void {
    }

    onClick(item) {
        $('html').find('.item-check i').attr('class', 'fa fa-circle-o');
        $(item).find('.item-check i').attr('class', 'fa fa-check-circle-o');
    }

}
