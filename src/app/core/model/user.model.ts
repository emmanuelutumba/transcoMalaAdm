import {TypeUtilisateurModel} from './type-utilisateur.model';

export interface UserModel {
  id: number;
  username: string;
  password: string;
  activationCode: string;
  enable: number;
  typeUtilisateur: TypeUtilisateurModel;
}
