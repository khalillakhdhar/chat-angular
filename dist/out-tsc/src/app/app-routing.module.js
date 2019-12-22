import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ReadComponent } from './read/read.component';
import { ReadmsgComponent } from './readmsg/readmsg.component';
import { ReadtopicComponent } from './readtopic/readtopic.component';
const routes = [
    { path: '', component: WelcomeComponent },
    { path: 'topic', component: ReadComponent },
    { path: 'chatroom', component: ReadmsgComponent },
    { path: 'chattopic', component: ReadtopicComponent },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map