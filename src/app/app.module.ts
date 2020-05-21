<<<<<<< HEAD
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    SideNavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [SideNavBarComponent]
})
export class SideNavViewModule {
  constructor(injector: Injector) {
    const header = createCustomElement(SideNavBarComponent, { injector });
    customElements.define('app-side-nav', header);
  }
}
=======
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { EmployeeIndexComponent } from './employee-index/employee-index.component';

@NgModule({
  declarations: [
    SideNavBarComponent,
    EmployeeIndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [SideNavBarComponent,EmployeeIndexComponent]
})
export class SideNavViewModule {
  constructor(injector: Injector) {
    const header = createCustomElement(SideNavBarComponent, { injector });
    customElements.define('app-side-nav', header);
    const employeeIndexComp = createCustomElement(EmployeeIndexComponent, { injector });
    customElements.define('app-employee-index', employeeIndexComp);
  }
}
>>>>>>> 4aecdf404bd7af1c7e209af4ffee92996bd92b7d
