import { Component, OnInit } from '@angular/core';
import { ContraventionService } from 'src/app/core/services/contravention.service';
import { TaxeService } from 'src/app/core/services/taxe.service';
import { VehicleService } from 'src/app/core/services/vehicle.service';

@Component({
  selector: 'app-report-container',
  templateUrl: './report-container.component.html',
  styleUrls: ['./report-container.component.css'],
})
export class ReportContainerComponent implements OnInit {
  insurancePaid = '0';
  insuranceNoPaid = '0';

  taxePaid = '0';
  taxeAveragePaid = '0';
  taxeNoPaid = '0';

  contraventionPaid = '0';
  contraventionAveragePaid = '0';
  contraventionNoPaid = '0';

  constructor(
    private vehiculeService: VehicleService,
    private taxeService: TaxeService,
    private contraventionService: ContraventionService
  ) {}

  ngOnInit(): void {
    this.vehiculeService.getReport().subscribe((data) => {
      if (data.code === '200') {
        this.insuranceNoPaid = data.data.paid;
        this.insuranceNoPaid = data.data.noPaid;
      }
    });
    this.contraventionService.getReport().subscribe((data) => {
      if (data.code === '200') {
        this.contraventionPaid = data.data.paid;
        this.contraventionAveragePaid = data.data.averagePaid;
        this.contraventionNoPaid = data.data.noPaid;
      }
    });
    this.taxeService.getReport().subscribe((data) => {
      if (data.code === '200') {
        this.taxePaid = data.data.paid;
        this.taxeAveragePaid = data.data.averagePaid;
        this.taxeNoPaid = data.data.noPaid;
      }
    });
  }
}
