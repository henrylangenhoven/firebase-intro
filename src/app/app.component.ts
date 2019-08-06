import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user: string;
  message: string;

  messages: Array<any> = [];

  constructor(private angularFirestore: AngularFirestore) {
  }

  ngOnInit(): void {
    this.read().subscribe(
      (result) => {
        this.messages = result;
        console.log(result);
      }
    )
  }

  create() {
    this.angularFirestore.collection('messages').add({
      user: this.user,
      message: this.message
    });
  }

  read() {
    return this.angularFirestore.collection('messages').snapshotChanges();
  }

  update(id, value) {
    this.angularFirestore.collection('users').doc(id).set(value)
  }

  delete(id) {
    this.angularFirestore.collection('messages').doc(id).delete();
  }


}
