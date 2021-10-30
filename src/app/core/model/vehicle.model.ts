import {OwnerModel} from './owner.model';
import {DriverModel} from './driver.model';

export interface VehicleModel {
  id: number;
  brand: string;
  modele: string;
  idNumber: string;
  carteRoseId: string;
  voletJauneId: string;
  createdAt: string;
  proprietaire: OwnerModel;
  chauffeur: DriverModel[];
}
