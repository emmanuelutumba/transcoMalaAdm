import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import { VehicleService } from 'src/app/core/services/vehicle.service';

@Component({
  selector: 'app-report-insurance',
  templateUrl: './report-insurance.component.html',
  styleUrls: ['./report-insurance.component.css'],
})
export class ReportInsuranceComponent implements OnInit {
  options = [];

  headers = [
    'Marque',
    'Modèle',
    'Numéro de plaque',
    'N° Réf. Assurance',
    'Statut',
  ];

  datas = [];
  vehiculesData: any;
  isTableLoading = false;

  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {
    this.isTableLoading = true;
    this.vehicleService.getAllList().subscribe((data) => {
      this.isTableLoading = false;
      if (data.code === '200') {
        console.log(data.data);
        this.vehiculesData = data.data;

        this.datas = data.data.map((v) => {
          return {
            id: v.id,
            brand: v.brand,
            modele: v.modele,
            idNumber: v.idNumber,
            insuranceId: v.insuranceId,
            status: v.insuranceId === '' ? 0 : 1,
          };
        });
      }
    });
  }

  onSearch(el) {
    const val = $(el.target).val();
    console.log(val);

    const dataFiltered = this.vehiculesData.filter((data) => {
      return data.idNumber.toString().includes(val);
    });
    if (dataFiltered.length > 0) {
      this.datas = dataFiltered.map((v) => {
        return {
          id: v.id,
          brand: v.brand,
          modele: v.modele,
          idNumber: v.idNumber,
          insuranceId: v.insuranceId,
          status: v.insuranceId === '' ? 0 : 1,
        };
      });
    }
  }
}
