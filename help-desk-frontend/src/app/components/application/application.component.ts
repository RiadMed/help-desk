import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AppSettings} from 'src/app/buisness/models/app-settings';
import {ApplicationService} from 'src/app/buisness/services/application.service';
import {MessageService, SelectItem} from 'primeng/primeng';
import {Router} from '@angular/router';
import {AppUtils} from 'src/app/helpers/app-utils';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html'
})
export class ApplicationComponent implements OnInit {

  model: AppSettings;
  settingsForm: FormGroup;
  logoUrl: string;
  loginImgUrl: string;
  langs: SelectItem[];

  blockSpecial: RegExp = /^[^<>*!]+$/;
  protected appUtils: AppUtils;

  constructor(private applicationService: ApplicationService
    , private formBuilder: FormBuilder
    , private router: Router
    , private messageService: MessageService
    , private ngxSpinnerService: NgxSpinnerService) { }

  ngOnInit() {
    this.settingsForm = this.initFormGroup();
    this.applicationService.findOne(1).subscribe(data => {
      this.model = data;
      this.settingsForm = this.loadFormGroup(data);
      if (this.model.logo)
        this.logoUrl = "data:image/png;base64," + this.model.logo;
      if (this.model.loginImg)
        this.loginImgUrl = "data:image/png;base64," + this.model.loginImg;
    });
    this.appUtils = new AppUtils(this.ngxSpinnerService, this.messageService, null);
    this.langs = [
      { label: 'Français', value: 'fr' },
      { label: 'English', value: 'en' },
      { label: 'عربي', value: 'ar' }
    ];
  }

  private loadFormGroup(model: AppSettings): FormGroup {
    return new FormGroup({
      id: new FormControl(model.id, Validators.required),
      label: new FormControl(model.label, Validators.compose([Validators.required, Validators.minLength(2)])),
      title: new FormControl(model.title, Validators.compose([Validators.required, Validators.minLength(6)])),
      footer: new FormControl(model.footer, Validators.compose([Validators.required, Validators.minLength(6)])),
      version: new FormControl(model.version, Validators.compose([Validators.required, Validators.minLength(6)])),
      copyright: new FormControl(model.copyright, Validators.compose([Validators.required, Validators.minLength(6)])),
      defaultLang: new FormControl(model.defaultLang, Validators.required),
      description: new FormControl(model.description, Validators.compose([Validators.required, Validators.minLength(10)])),
      logo: new FormControl(model.logo, Validators.required),
      loginImg: new FormControl(model.loginImg, Validators.required),
    });
  }

  private initFormGroup(): FormGroup {
    return this.formBuilder.group({
      'id': new FormControl('', Validators.required),
      'label': new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)])),
      'title': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
      'footer': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
      'version': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
      'copyright': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
      'defaultLang': new FormControl('', Validators.required),
      'description': new FormControl('', Validators.compose([Validators.required, Validators.minLength(10)])),
      'logo': new FormControl(null, Validators.required),
      'loginImg': new FormControl(null, Validators.required),
    });
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      let reader = new FileReader();
      this.settingsForm.controls['logo'].setValue(file);
      reader.readAsDataURL(file);
      reader.onloadend = (e) => {
        this.settingsForm.get('logo').setValue(reader.result.toString().split(',')[1]);
        this.logoUrl = reader.result.toString();
      };
      this.appUtils.showInfoMessages('Operation effectuée avec succès');
    }
  }

  onLoginImgChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      let reader = new FileReader();
      this.settingsForm.controls['loginImg'].setValue(file);
      reader.readAsDataURL(file);
      reader.onloadend = (e) => {
        this.settingsForm.get('loginImg').setValue(reader.result.toString().split(',')[1]);
        this.loginImgUrl = reader.result.toString();
      };
      this.appUtils.showInfoMessages('Operation effectuée avec succès');
    }
  }

  public saveData() {
    this.applicationService.saveForm(this.settingsForm.value, this.model.id).subscribe(
      (data) => {
        this.model = data;
        this.appUtils.showInfoMessages('Operation effectuée avec succès');
        this.appUtils.loadSpinner(200);
      });
  }

  public cancel() {
    this.appUtils.loadSpinner(200);
    this.router.navigate(['home']);
  }

}
