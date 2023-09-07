import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import { HomeComponent } from './public/pages/home/home.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent, HomeComponent], imports: [BrowserModule, HttpClientModule, TranslateModule.forRoot({
    defaultLanguage: 'en', loader: {
      provide: TranslateLoader, useFactory: (createTranslateLoader), deps: [HttpClient]
    }
  }), MatButtonModule, MatToolbarModule, MatButtonToggleModule], providers: [], bootstrap: [AppComponent]
})
export class AppModule {
}
