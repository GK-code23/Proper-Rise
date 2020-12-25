import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../services/firebase.service'
import { Router } from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore'
@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  constructor(public firebaseService : FirebaseService,private router: Router,private fireStore : AngularFirestore) { }
  isSignedIn = false
  ngOnInit() {
    if(localStorage.getItem('user')!=null)
    this.isSignedIn = true
    else
    this.isSignedIn = false
  }

  async navigate(){
    this.router.navigateByUrl('/address');
  }

  async onSignup(email:string,password:string){
    await this.firebaseService.signup(email,password)
    if(this.firebaseService.isLoggedIn){
    this.isSignedIn=true
    this.fireStore.collection("adres").add("tasks");
   }
  }

  async onSignin(email:string,password:string){
    await this.firebaseService.signup(email,password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn=true
  }

  handleLogout(){
    
  }
 }
