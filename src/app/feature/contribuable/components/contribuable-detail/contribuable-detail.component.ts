import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Route, Router, Routes} from '@angular/router';
import {ContribuableService} from '../../../../core/services/contribuable.service';
import {SharedService} from '../../../../shared/services/shared.service';
import $ from 'jquery';
import {ContraventionService} from '../../../../core/services/contravention.service';
import {TaxeService} from '../../../../core/services/taxe.service';

@Component({
  selector: 'app-contribuable-detail',
  templateUrl: './contribuable-detail.component.html',
  styleUrls: ['./contribuable-detail.component.css']
})
export class ContribuableDetailComponent implements OnInit {

  targetId: any;
  contribuableData: any;
  isLoading = true;

  nbreTaxe: any;
  nbreContravention: any;

  constructor(private sharedService: SharedService,
              private contribuableService: ContribuableService,
              private route: ActivatedRoute,
              private contraventionService: ContraventionService,
              private taxeService: TaxeService) {
  }

  ngOnInit(): void {
    // tslint:disable-next-line:radix
    this.targetId = parseInt(this.route.snapshot.paramMap.get('id'));
    console.log(this.targetId);
    this.contribuableService.getById(this.targetId).subscribe(data => {
        this.isLoading = false;
        if (data.code === '200') {
          this.contribuableData = data.data[0];
          this.sharedService.setContribuable(this.contribuableData);
        } else {

        }
      }
    );

    this.contraventionService.getAll(this.targetId).subscribe(data => {
      if (data.code === '200') {
        const contraventionToPay = data.data.filter(c => {
          return (c.status === 0 || c.status === 2);
        });
        this.nbreContravention = contraventionToPay.length;
      }
    });
    this.taxeService.getAll(this.targetId).subscribe(data => {
      if (data.code === '200') {
        const taxeToPay = data.data.filter(c => {
          return (c.status === 0 || c.status === 2);
        });
        this.nbreTaxe = taxeToPay.length;
      }
    });
  }

  onSelectedTab(btn) {
    console.log(btn);
    $('.detail-container').find('.btn-tab').attr('class', 'btn-tab btn btn-info');
    $(btn).attr('class', 'btn-tab btn btn-info active-tab');
  }
}
