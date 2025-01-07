import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

// IMPORT --------------------------------------------------------------------------------
import { NzButtonModule } from 'ng-zorro-antd/button';
import { HeaderComponent } from './components/header/header.component';
import { TaggingScreenComponent } from './screens/tagging-screen/tagging-screen.component';
import { DashboardScreenComponent } from './screens/dashboard-screen/dashboard-screen.component';
import { BaseScreenComponent } from './screens/base-screen/base-screen.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { LogoComponent } from './components/illustrations/logo/logo.component';
import { ChevronDownComponent } from './components/illustrations/chevron-down/chevron-down.component';
import { MenuComponent } from './components/illustrations/menu/menu.component';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { AnnotationCardComponent } from './components/annotation-card/annotation-card.component';
import { NzBadgeModule } from 'ng-zorro-antd/badge';


registerLocaleData(en);


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaggingScreenComponent,
    DashboardScreenComponent,
    BaseScreenComponent,
    LogoComponent,
    ChevronDownComponent,
    MenuComponent,
    AnnotationCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NzButtonModule,
    NzLayoutModule,
    NzMenuModule,
    NzDropDownModule,
    NzIconModule,
    NzDrawerModule,
    NzInputModule,
    NzSelectModule,
    NzCheckboxModule,
    NzDatePickerModule,
    NzEmptyModule,
    NzBadgeModule
  ],
  providers: [
    provideClientHydration(),
    { provide: NZ_I18N, useValue: en_US },
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
