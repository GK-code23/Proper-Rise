import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  constructor(private router: Router,private storage: AngularFireStorage, private db: AngularFirestore) { }
  questions = [];
  ngOnInit(): void {
    this.db.firestore.collection('Questions').get().then((querySnap) =>{
      querySnap.forEach((doc) =>{
        
        this.questions.push(doc.data())
        console.log(doc.data())
      })
    })
  }

}
