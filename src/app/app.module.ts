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
