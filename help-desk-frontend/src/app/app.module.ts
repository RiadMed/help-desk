import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RequestOptions } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgProgressInterceptor, NgProgressModule } from 'ngx-progressbar';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ConfirmationService, MessageService } from 'primeng/primeng';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDialogComponent } from './components/add-dialog/add-dialog.component';
import { AddAffectationComponent } from './components/affectation/add-affectation.component';
import { AffectationComponent } from './components/affectation/affectation.component';
import { InfoFormGenericComponent } from './components/generic/info-form-generic/info-form-generic.component';
import { ListGenericComponent } from './components/generic/list-generic/list-generic.component';
import { AddHardwareComponent } from './components/hardware/add-hardware.component';
import { HardwareComponent } from './components/hardware/hardware.component';
import { HomeComponent } from './components/home/home.component';
import { AddMarqueFamilyComponent } from './components/marque-family/add-marque-family.component';
import { MarqueFamilyComponent } from './components/marque-family/marque-family.component';
import { AddMarqueComponent } from './components/marque/add-marque.component';
import { MarqueComponent } from './components/marque/marque.component';
import { AddMenuComponent } from './components/menu/add-menu.component';
import { MenuComponent } from './components/menu/menu.component';
import { AddPartenerComponent } from './components/partener/add-partener.component';
import { PartenerComponent } from './components/partener/partener.component';
import { AddProfessionComponent } from './components/profession/add-profession.component';
import { ProfessionComponent } from './components/profession/profession.component';
import { RolesComponent } from './components/roles/roles.component';
import { AddSoftwareComponent } from './components/software/add-software.component';
import { SoftwareComponent } from './components/software/software.component';
import { AddStockComponent } from './components/stock/add-stock.component';
import { StockComponent } from './components/stock/stock.component';
import { UserComponent } from './components/user/user.component';
import { AuthRequestOptions } from './helpers/auth-request-options';
import { ErrorInterceptor } from './helpers/error-interceptor';
import { PrimeNGModule } from './prime-ng/prime-ng.module';
import { LoginComponent } from './security/login/login.component';
import { AuthGuard } from './security/service/auth-guard';
import { AuthenticationService } from './security/service/authentication.service';
import { NotAccessComponent } from './templates/exception/not-access/not-access.component';
import { NotFoundComponent } from './templates/exception/not-found/not-found.component';
import { OccuredErrorComponent } from './templates/exception/occured-error/occured-error.component';
import { HeaderComponent } from './templates/header/header.component';
import { ApplicationComponent } from './components/application/application.component';
import { ApplicationService } from './buisness/services/application.service';
import { FooterComponent } from './templates/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    AffectationComponent,
    SoftwareComponent,
    HardwareComponent,
    PartenerComponent,
    MarqueComponent,
    ProfessionComponent,
    RolesComponent,
    MenuComponent,
    HeaderComponent,
    LoginComponent,
    UserComponent,
    NotFoundComponent,
    NotAccessComponent,
    AddMarqueComponent,
    AddMenuComponent,
    AddProfessionComponent,
    AddPartenerComponent,
    OccuredErrorComponent,
    AddSoftwareComponent,
    AddHardwareComponent,
    StockComponent,
    AddStockComponent,
    AddAffectationComponent,
    HomeComponent,
    AddDialogComponent,
    MarqueFamilyComponent,
    AddMarqueFamilyComponent,
    InfoFormGenericComponent,
    ListGenericComponent,
    ApplicationComponent,
    FooterComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule, TranslateModule,
    AppRoutingModule, PrimeNGModule, NgSelectModule,
    FormsModule, BrowserAnimationsModule, NgProgressModule, NgxSpinnerModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [AuthenticationService, AuthGuard, MessageService, ConfirmationService, ApplicationService,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: RequestOptions, useClass: AuthRequestOptions },
    { provide: HTTP_INTERCEPTORS, useClass: NgProgressInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}