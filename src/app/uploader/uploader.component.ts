import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent implements OnInit{
  constructor(private router: Router,private storage: AngularFireStorage, private db: AngularFirestore){
    
  }
  isHovering: boolean;

  files: File[] = [];
  storages = [];
  array1 = []
  ngOnInit(){
      this.db.firestore.collection('files').get().then((querySnap) =>{
        querySnap.forEach((doc) =>{
          
          this.storages.push(doc.data())
          console.log(doc.data())
        })
      })
  }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
    this.ngOnInit()
  }


  async navigate(){
    this.router.navigateByUrl('/questions');
  }

  async navigate1(){
    this.router.navigateByUrl('/uploader');
    console.log(this.storages)
  }

  deleteData(address : [],i:number){
    this.storage.storage.refFromURL(address['downloadURL']).delete()
    this.db.firestore.collection('files').doc(address['id']).delete()
    this.storages.splice(i,1)
  }
}
