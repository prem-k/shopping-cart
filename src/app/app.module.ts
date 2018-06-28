import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UpperHeaderComponent } from './upper-header/upper-header.component';
import { LowerFooterComponent } from './lower-footer/lower-footer.component';
import { LeftNavComponent } from './left-nav/left-nav.component';

import { AppRoutesModule,routingComponents } from './routes.module';

import { ConfigService } from './config.service';
import { ApiService } from './api.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UpperHeaderComponent,
    LowerFooterComponent,
    LeftNavComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutesModule
  ],
  providers: [ConfigService,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
