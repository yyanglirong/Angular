import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CityComponent } from './components/city/city.component';
import {CommonService} from './services/common.service';
import {HttpClientModule} from '@angular/common/http';
import { CommingComponent } from './components/comming/comming.component';
import { NowComponent } from './components/now/now.component';
import { IconsProviderModule } from './icons-provider.module';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData,LocationStrategy,HashLocationStrategy } from '@angular/common';

import zh from '@angular/common/locales/zh'

registerLocaleData(zh);
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CityComponent,
    CommingComponent,
    NowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IconsProviderModule,
    NgZorroAntdModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [CommonService, 
    { provide: NZ_I18N, useValue: zh_CN },
    {provide:LocationStrategy,useClass:HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
