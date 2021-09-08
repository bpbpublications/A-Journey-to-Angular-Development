import { ManufacturingAddress } from './manufacturing-address';
import { Specification } from './specification';

export class AddProduct {
  productName: string;
  productCode: string;
  brand: string;
  categories: string[];
  manufacturingDate: Date;
  productType: string;
  readyForSale: boolean;
  specifications: Specification[];
  image: any;
  manufacturingAddress: ManufacturingAddress;
}
