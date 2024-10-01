import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { SideNavComponent } from './Components/side-nav/side-nav.component';
import { LicenseListComponent } from './Components/license-list/license-list.component';
import { LicenseDetailComponent } from './Components/license-detail/license-detail.component';
import { LicenseFormComponent } from './Components/license-form/license-form.component';
import { ConcurrencyComponent } from './Components/concurrency/concurrency.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/licenses', pathMatch: 'full' }, 
  { path: 'licenses', component: LicenseListComponent },
  { path: 'licenses/:id', component: LicenseDetailComponent },
  { path: 'new-license', component: LicenseFormComponent },
  { path: 'concurrency', component: ConcurrencyComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    LicenseListComponent,
    LicenseDetailComponent,
    LicenseFormComponent,
    ConcurrencyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
