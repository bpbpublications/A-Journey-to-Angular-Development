import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddProduct } from '../model/add-product';
import { IDropDownItem } from '../model/drop-item-down.interface';
import { ManufacturingAddress } from '../model/manufacturing-address';
import { validateAllFormFields } from '../utilities/core.utilities';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  @ViewChild('AddProductForm') AddProductForm: NgForm;

  addProduct: AddProduct;

  Countries: IDropDownItem[];
  States: IDropDownItem[];
  Cities: IDropDownItem[];

  Brands: IDropDownItem[];
  Categories: IDropDownItem[];

  constructor() {
    this.addProduct = new AddProduct();
    this.addProduct.specifications = [];
    this.addProduct.manufacturingAddress = new ManufacturingAddress();
    this.addProduct.brand = '';
    this.addProduct.manufacturingAddress.country = '';
    this.addProduct.manufacturingAddress.state = '';
    this.addProduct.manufacturingAddress.city = '';
    this.addProduct.productType = '1';
  }

  public ngOnInit(): void {
    this.setDropDownValues();
  }

  private setDropDownValues(): void {
    this.Brands = this.getBrands();
    this.Categories = this.getCategories();
    this.Countries = this.getCountries();
  }
  /////// Cascading dropdowns
  private getCountries(): IDropDownItem[] {
    return [
      { Id: '1', Value: 'India' },
      { Id: '2', Value: 'USA' },
      { Id: '3', Value: 'Europe' },
    ];
  }

  onCountryDropDownChange(): void {
    this.States = this.getStates(
      this.addProduct.manufacturingAddress.country
    );

    this.AddProductForm.control.patchValue({
      manufacturingAddress: { state: '', city: '' },
    });
    this.Cities = [];
  }

  private getStates(countryId: string): IDropDownItem[] {
    if (countryId === '1') {
      return [
        { Id: '1', Value: 'Maharashtra' },
        { Id: '2', Value: 'Assam' },
      ];
    } else if (countryId === '2') {
      return [
        { Id: '3', Value: 'California' },
        { Id: '4', Value: 'Texas' },
      ];
    } else if (countryId === '3') {
      return [{ Id: '5', Value: 'Belgium' }];
    }
  }

  onStateDropDownChange(): void {
    this.Cities = this.getCities(
      this.addProduct.manufacturingAddress.state
    );
    this.AddProductForm.control.patchValue({
      manufacturingAddress: { city: '' },
    });
  }

  private getCities(stateId: string): IDropDownItem[] {
    if (stateId === '1') {
      return [
        { Id: '1', Value: 'Pune' },
        { Id: '2', Value: 'Nagpur' },
      ];
    } else if (stateId === '2') {
      return [
        { Id: '3', Value: 'Silchar' },
        { Id: '4', Value: 'Dibrugarh' },
      ];
    } else if (stateId === '3') {
      return [
        { Id: '5', Value: 'Los Angeles' },
        { Id: '6', Value: 'San Diego' },
      ];
    } else if (stateId === '4') {
      return [{ Id: '7', Value: 'Houston' }];
    } else if (stateId === '5') {
      return [
        { Id: '8', Value: 'Antwerp' },
        { Id: '8', Value: 'Liège' },
      ];
    }
    return null;
  }
  /////// Cascading dropdowns

  private getBrands(): IDropDownItem[] {
    return [
      { Id: '1', Value: 'Hyundai Honda' },
      { Id: '2', Value: 'Mercedes Benz Skoda' },
      { Id: '3', Value: 'Datsun Mitsubishi' },
      { Id: '4', Value: 'Maruti Suzuki MG Motor' },
    ];
  }

  private getCategories(): IDropDownItem[] {
    return [
      { Id: '1', Value: 'SEDAN' },
      { Id: '2', Value: 'COUPE' },
      { Id: '3', Value: 'SPORTS CAR' },
      { Id: '4', Value: 'STATION WAGON' },
      { Id: '5', Value: 'HATCHBACK' },
      { Id: '6', Value: 'CONVERTIBLE' },
    ];
  }

  public save(): void {
    if (this.AddProductForm.valid) {
      console.log(JSON.stringify(this.addProduct));
      alert('Form is validated, check the console');
      this.reset();
    } else {
      this.validateMethods();
      alert('kindly solve all validation errors first');
    }
  }

  public reset(): void {
    this.AddProductForm.reset({
      type: '1',
      brand: '',
      productType: '1',
      manufacturingAddress: { country: '', state: '', city: '' },
    });
    this.States = [];
    this.Cities = [];
    this.addProduct.specifications = [];
  }

  public addSpecification() {
    this.addProduct.specifications.push({ description: '', value: '' });
  }

  private validateMethods(): void {
    validateAllFormFields(this.AddProductForm.form);
  }

  public deleteSpecification(index: number): void {
    if (confirm('Are you sure?')) {
      this.addProduct.specifications.splice(index, 1);
    }
  }

}
