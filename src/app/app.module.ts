import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/navBar/navBar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AsideComponent } from './components/aside/aside.component';
import { HomeComponent } from './components/home/home.component';

// @FunctionName()    => decorators
@NgModule({
  declarations: [
    // register for components, directives,  and pipes declared by this module only
    AppComponent,
    NavBarComponent,
    FooterComponent,
    AsideComponent,
    HomeComponent,
  ],
  imports: [
    // register for related modules
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    // registration  of services used that can be injected anywhere in
  ],
  bootstrap: [AppComponent], // first component to run
})
export class AppModule {}
