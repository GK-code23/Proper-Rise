import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../services/firebase.service'
import {AngularFirestore} from '@angular/fire/firestore'

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent{

  constructor(private firebaseService : FirebaseService,private fireStore : AngularFirestore) {}

  
  ngOnInit(): void { 
  } 

  public addresses: any[] = [{
    option : ''
  }];

  async onAddData(domain:string,Level:string,question:string){
    let data = {
      'Domain':domain,
      'Level':Level,
      'Question':question,
      'Options':this.addresses
    }
    console.log(data);
    this.fireStore.collection('Questions').add(data);
  }
  

    logValue(){
        console.log(this.addresses)
    }


    addAddress() {
      this.addresses.push({
        option:''
      });
    }


    removeAddress(i: number) {
      this.addresses.splice(i, 1);
    }
}
