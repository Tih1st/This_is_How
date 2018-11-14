import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersistenceModule } from 'angular-persistence';
import { FormUploadComponent } from './form-upload/form-upload.component';
import { UploadFileService } from './upload-file.service';
import { AceEditorModule } from 'ng2-ace-editor';


// *******************************************************************************
// NgBootstrap

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { NgJsonEditorModule } from 'ang-jsoneditor'

// *******************************************************************************
// App

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { LayoutModule } from './layout/layout.module';
import { AuthService } from './auth/auth.service';
import { CallbackComponent } from './callback/callback.component'


// *******************************************************************************
// Pages

import { HomeComponent } from './home/home.component';
import { Page2Component } from './page-2/page-2.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ListUploadComponent } from './list-upload/list-upload.component';
import { DetailsUploadComponent } from './details-upload/details-upload.component';
import { Page3Component } from './page-3/page-3.component';


// *******************************************************************************
//

@NgModule({
  declarations: [
    AppComponent,

    // Pages
    HomeComponent,
    Page2Component,
    CallbackComponent,
    FormUploadComponent,
    ListUploadComponent,
    DetailsUploadComponent,
    Page3Component
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    NgxJsonViewerModule,
    NgJsonEditorModule,
    NgbModule.forRoot(),
    PersistenceModule,
    AceEditorModule,

    // App
    AppRoutingModule,
    LayoutModule
  ],

  providers: [
    Title,
    AppService,
    AuthService,
    UploadFileService
  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
