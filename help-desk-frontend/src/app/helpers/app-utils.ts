import { NgxSpinnerService } from "ngx-spinner";
import { Optional } from "@angular/core";
import { MessageService } from "primeng/components/common/api";
import { Router } from "@angular/router";

export class AppUtils {
    constructor(private spinner: NgxSpinnerService
        , private messageService: MessageService
        , private router: Router) {

    }

    public loadSpinner(time: number) {
        this.spinner.show();
        setTimeout(() => {
            this.spinner.hide();
        }, time);
    }

    public showSuccessMessages(message: string) {
        this.messageService.add({ severity: 'success', summary: 'Success Message', detail: message + '.' });
    }

    public showInfoMessages(message: string) {
        this.messageService.add({ severity: 'info', summary: 'Info Message', detail: message + '.' });
    }

    public showWarnMessages(message: string) {
        this.messageService.add({ severity: 'warn', summary: 'Warn Message', detail: message + '.' });
    }

    public showErrorMessages(message: string) {
        this.messageService.add({ severity: 'error', summary: 'Error Message', detail: message + '.' });
    }

    public navigate(url: string) {
        this.router.navigate([url]);
    }
    
    public navigateByUrl(url: string) {
        this.router.navigateByUrl(url);
    }
}
