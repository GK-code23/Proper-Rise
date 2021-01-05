import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {AddressComponent} from './address/address.component'
import {AboutComponent} from './about/about.component'
import {LoginComponent} from './login/login.component'
import { QuestionsComponent } from './questions/questions.component';
import {UploaderComponent} from './uploader/uploader.component';
import {EditQuestionComponent} from './edit-question/edit-question.component'
import {QuestionListComponent} from './question-list/question-list.component'
const routes: Routes = [
  {
    path: 'question_list',
    component:QuestionListComponent,
    data:{
      title:'Upload'
    }
  },
  {
    path: 'uploader',
    component:UploaderComponent,
    data:{
      title:'Upload'
    }
  },
  {
    path: 'edit_questions',
    component:EditQuestionComponent,
    data:{
      title:'Upload'
    }
  },
  
  {
    path: 'questions',
    component:QuestionsComponent,
    data:{
      title:'Question'
    }
  },
  
  {
    path: '',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'address',
    component: AddressComponent,
    data: {
      title: 'address'
    }
  },
  {path : "about", component: AboutComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
