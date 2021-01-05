import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore'
@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.css']
})
export class EditQuestionComponent implements OnInit {

  constructor(public fireStore : AngularFirestore) { }

  ngOnInit(): void {
    
  }
  
  
  savedata(){
    var value = this.fireStore.collection('Questions').snapshotChanges()._subscribe
   console.log(value['Answer'])
  }

}
