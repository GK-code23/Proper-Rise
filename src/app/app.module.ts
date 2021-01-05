import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AddressComponent } from './address/address.component';
import { AboutComponent } from './about/about.component';
import {FormsModule} from '@angular/forms'
import { AddressService } from './address.service';
import {LoginComponent} from './login/login.component';

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

import{AngularFireModule} from '@angular/fire'
import{AngularFireDatabaseModule} from '@angular/fire/database'
import{environment} from '../environments/environment';
import { QuestionsComponent } from './questions/questions.component'
import { AngularFireStorageModule } from '@angular/fire/storage';
import { DropzoneDirective } from './dropzone.directive';
import { UploaderComponent } from './uploader/uploader.component';
import { UploadTaskComponent } from './upload-task/upload-task.component';
import { EditQuestionComponent } from './edit-question/edit-question.component';
import { QuestionListComponent } from './question-list/question-list.component';





@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    MainComponent,
    FooterComponent,
    HomeComponent,
    AddressComponent,
    AboutComponent,
    LoginComponent,
    QuestionsComponent,
    DropzoneDirective,
    UploaderComponent,
    UploadTaskComponent,
    EditQuestionComponent,
    QuestionListComponent,
 

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyATSz6z0oz0ND00Ugc557v5LjpYSBWQ-kg",
      authDomain: "rise-5eaa3.firebaseapp.com",
      storageBucket: "rise-5eaa3.appspot.com",
      projectId: "rise-5eaa3",
    }),
    AngularFireStorageModule
  ],
  providers: [AddressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
