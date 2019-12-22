import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let WelcomeComponent = class WelcomeComponent {
    constructor() { }
    ngOnInit() {
    }
    CreateRecord() {
        const record = {};
        record.pseudo = this.pseudo;
        this.livreurService.create_NewLivreur(record).then(resp => {
            window.location.replace('');
            console.log(resp);
        })
            .catch(error => {
            console.log(error);
        });
    }
};
WelcomeComponent = tslib_1.__decorate([
    Component({
        selector: 'app-welcome',
        templateUrl: './welcome.component.html',
        styleUrls: ['./welcome.component.css']
    })
], WelcomeComponent);
export { WelcomeComponent };
//# sourceMappingURL=welcome.component.js.map