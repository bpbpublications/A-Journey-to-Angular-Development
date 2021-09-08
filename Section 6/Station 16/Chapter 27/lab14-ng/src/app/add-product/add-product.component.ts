import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { IDropDownItem } from '../model/drop-item-down.interface';
import { validateAllFormFields } from '../utilities/core.utilties';
import { ProductValidationService } from '../validators/product.validator';
import { allowedNodeEnvironmentFlags } from 'process';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit, OnDestroy {
  AddProductForm: FormGroup;
  ShowSpecificationErrorMessage: boolean;
  Brands: IDropDownItem[];
  Categories: IDropDownItem[];
  Countries: IDropDownItem[];
  States: IDropDownItem[];
  Cities: IDropDownItem[];
  Subscription: Subscription;
  Subscription1: Subscription;
  Subscription2: Subscription;

  get getSpecificationFormArray(): FormArray {
    return this.AddProductForm.controls.specifications as FormArray;
  }

  constructor(
    private formBuilder: FormBuilder,
    private ProductValidators: ProductValidationService
  ) {}
  ngOnDestroy(): void {
    this.Subscription.unsubscribe();
    this.Subscription1.unsubscribe();
    this.Subscription2.unsubscribe();
  }

  public ngOnInit(): void {
    this.initializeForm();
    this.getDropDownValues();
    this.formControlValueChanges();
  }

  private initializeForm(): void {
    this.AddProductForm = this.formBuilder.group({
      code: [
        null,
        {
          validators: [Validators.required],
          asyncValidators: this.ProductValidators.productCodeValidator.bind(
            this.ProductValidators
          ),
          updateOn: 'blur',
        },
      ],
      name: [null, Validators.required],
      brand: ['', Validators.required],
      category: ['', Validators.required],
      manufacturingDate: [null, Validators.required],
      type: ['1'],
      readyForSale: [],
      image: [
        '',
        [
          Validators.required,
          this.ProductValidators.requiredFileType(['png', 'jpg', 'jpeg']),
        ],
      ],
      specifications: new FormArray([this.getSpecificationFormGroup()]),
      manufacturingAddress: this.formBuilder.group({
        country: ['', Validators.required],
        state: ['', Validators.required],
        city: ['', Validators.required],
        fullAddress: [null, Validators.required],
        emailAddress: [
          null,
          [
            Validators.required,
            Validators.pattern(
              '^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'
            ),
          ],
        ],
      }),
    });
  }

  private getDropDownValues(): void {
    this.Brands = this.GetBrands();
    this.Categories = this.GetCategories();
    this.Countries = this.GetCountries();
  }

  private formControlValueChanges(): void {
    this.Subscription = this.AddProductForm.get(
      'manufacturingAddress.country'
    ).valueChanges.subscribe((value) => {
      this.onCountryDropDownChange(value);
    });
    this.Subscription1 = this.AddProductForm.get(
      'manufacturingAddress.state'
    ).valueChanges.subscribe((value) => {
      this.onStateDropDownChange(value);
    });
    this.Subscription2 = this.getSpecificationFormArray.valueChanges.subscribe(
      () => {
        this.ShowSpecificationErrorMessage = this.getSpecificationFormArray.invalid;
      }
    );
  }

  private onCountryDropDownChange(value: string): void {
    this.AddProductForm.patchValue({
      manufacturingAddress: {
        state: '',
        city: '',
      },
    });
    this.States = this.GetStates(value);
  }

  private onStateDropDownChange(value: string): void {
    this.AddProductForm.patchValue({
      manufacturingAddress: {
        city: '',
      },
    });
    this.Cities = this.GetCities(value);
  }

  public save(): void {
    if (this.AddProductForm.valid) {
      alert('Product Saved SuccessFully.');
      this.resetAddProductForm();
    } else {
      this.validateMethods();
    }
  }

  public reset(): void {
    this.resetAddProductForm();
  }

  private validateMethods(): void {
    validateAllFormFields(this.AddProductForm);
    this.ValidateSpecificationArray();
  }

  public cancel(): void {
    this.resetAddProductForm();
  }

  private resetAddProductForm(): void {
    this.AddProductForm.reset({
      type: '1',
      brand: '',
      manufacturingAddress: {
        country: '',
        state: '',
        city: '',
      },
    });
    this.getSpecificationFormArray.clear();
  }

  public addSpecification() {
    this.getSpecificationFormArray.push(this.getSpecificationFormGroup());
  }

  private getSpecificationFormGroup(): AbstractControl {
    return this.formBuilder.group({
      description: ['', Validators.required],
      value: ['', Validators.required],
    });
  }

  public deleteSpecification(index: number): void {
    if (confirm('Are you sure you want to remove the specification.')) {
      this.getSpecificationFormArray.removeAt(index);
      this.ValidateSpecificationArray();
    }
  }
  ValidateSpecificationArray() {
    if (this.getSpecificationFormArray.length === 0) {
      this.ShowSpecificationErrorMessage = true;
    } else {
      this.ShowSpecificationErrorMessage = this.getSpecificationFormArray.invalid;
    }
  }

  public isFormControlValid(key: string): boolean {
    return (
      this.AddProductForm.get(key).touched &&
      this.AddProductForm.get(key).dirty &&
      this.AddProductForm.get(key).valid
    );
  }

  public isFormControlInValid(key: string): boolean {
    return (
      this.AddProductForm.get(key).touched &&
      this.AddProductForm.get(key).dirty &&
      this.AddProductForm.get(key).invalid
    );
  }

  public GetBrands(): IDropDownItem[] {
    return [
      { Id: '1', Value: 'Hyundai Honda' },
      { Id: '2', Value: 'Mercedes Benz Skoda' },
      { Id: '3', Value: 'Datsun Mitsubishi' },
      { Id: '4', Value: 'Maruti Suzuki MG Motor' },
    ];
  }

  public GetCategories(): IDropDownItem[] {
    return [
      { Id: '1', Value: 'SEDAN' },
      { Id: '2', Value: 'COUPE' },
      { Id: '3', Value: 'SPORTS CAR' },
      { Id: '4', Value: 'STATION WAGON' },
      { Id: '5', Value: 'HATCHBACK' },
      { Id: '6', Value: 'CONVERTIBLE' },
    ];
  }

  public GetCountries(): IDropDownItem[] {
    return [
      { Id: '1', Value: 'India' },
      { Id: '2', Value: 'USA' },
      { Id: '3', Value: 'Europe' },
    ];
  }

  public GetStates(countryId: string): IDropDownItem[] {
    let states = [
      { Id: '1', Value: 'Maharashta', CountryId: '1' },
      { Id: '2', Value: 'Assam', CountryId: '1' },
      { Id: '3', Value: 'Calforina', CountryId: '2' },
      { Id: '4', Value: 'Texas', CountryId: '2' },
      { Id: '5', Value: 'Belgium', CountryId: '3' },
    ];

    return states
      .filter((state) => state.CountryId === countryId)
      .map(({ Id, Value }) => ({ Id, Value }));
  }

  public GetCities(stateId: string): IDropDownItem[] {
    let cities = [
      { Id: '1', Value: 'Pune', StateId: '1' },
      { Id: '2', Value: 'Nagpur', StateId: '1' },
      { Id: '3', Value: 'Silchar', StateId: '2' },
      { Id: '4', Value: 'Dibrugarh', StateId: '2' },
      { Id: '5', Value: 'Los Angeles', StateId: '3' },
      { Id: '6', Value: 'San Diego', StateId: '3' },
      { Id: '7', Value: 'Houston', StateId: '4' },
      { Id: '8', Value: 'Antwerp', StateId: '5' },
      { Id: '8', Value: 'Liège', StateId: '5' },
    ];

    return cities
      .filter((city) => city.StateId === stateId)
      .map(({ Id, Value }) => ({ Id, Value }));
  }
}
