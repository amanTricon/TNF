import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-license-form',
  templateUrl: './license-form.component.html',
  styleUrl: './license-form.component.css'
})
export class LicenseFormComponent {
  licenseType: string = 'premium'; // Default to 'premium' license
  form: any = {
    application: '',
    viewOnline: false,
    download: false,
    productBundle: '',
  };
//dummy data
  bundles: string[] = [
    'DRMSUBNDL1',
    'DRMSUBNDL2',
    'NORMBUNDLE1',
    'NORMBUNDLE2',
    'PREMIUMBUNDLE1',
    'PREMIUMBUNDLE2'
  ];

  filteredBundles: string[] = [];
  searchQuery: string = '';
  showDropdown: boolean = false;
  // Method to toggle between license types
  selectLicenseType(type: string) {
    this.licenseType = type;
  }

  // Method to save form data
  onSave() {
    // Logic for saving form data
    console.log("Form Saved", this.form);
  }

  // Method to handle form cancel
  onCancel() {
    // Logic for canceling form entry
    console.log("Form Canceled");
    this.resetForm();
  }

 onSearchChange(query: string) {
   this.searchQuery = query;
  if(this.searchQuery) {
    this.filteredBundles = this.bundles.filter((bundle) =>
       bundle.toLowerCase().includes(this.searchQuery.toLowerCase()));
    this.showDropdown=this.filteredBundles.length > 0;
  } else {
    this.showDropdown=false;
    }
 }
  
 selectBundle(bundle: string) {
  this.form.productBundle = bundle;
  this.searchQuery = bundle;
  this.showDropdown = false;
}
  resetForm() {
    this.form = {
      application: '',
      viewOnline: false,
      download: false,
      startDate: '',
      endDate: '',
      orderNumber: '',
      purchaseDate: '',
      productBundle: '',
    };
  }
}
