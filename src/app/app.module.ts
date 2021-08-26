import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CommonModule} from "@angular/common";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FcgTemplateComponent} from './_fcg-form/fcg-template/fcg-template.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormlyModule} from '@ngx-formly/core';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';
import {PanelWrapperComponent} from './_component/panel-wrapper/panel-wrapper.component';
import {HttpClientModule} from '@angular/common/http';
import {ContributingUnitComponent} from './_fcg-form/contributing-unit/contributing-unit.component';
import {ConditionalUnitComponent} from './_fcg-form/conditional-unit/conditional-unit.component';
import { RepeatTypeComponent } from './_component/repeat-type/repeat-type.component';
import { SectionSeparatorComponent } from './_component/section-separator/section-separator.component';
import { HomeComponent } from './_page/home/home.component';
import {ClipboardModule} from "ngx-clipboard";

@NgModule({
  declarations: [
    AppComponent,
    FcgTemplateComponent,
    PanelWrapperComponent,
    ContributingUnitComponent,
    ConditionalUnitComponent,
    RepeatTypeComponent,
    SectionSeparatorComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    FormlyModule.forRoot({
      wrappers: [
        { name: 'panel', component: PanelWrapperComponent },
        { name: 'section', component: SectionSeparatorComponent },
      ],
      extras: { lazyRender: true },
      types: [
        { name: 'repeat', component: RepeatTypeComponent },
      ],
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ]
    }),
    FormlyBootstrapModule,
    FormsModule,
    HttpClientModule,
    ClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
