import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private firestore: AngularFirestore
  ) { }


  create_NewUser(record) {
    return this.firestore.collection('Users').add(record);
  }

  read_Users() {
    return this.firestore.collection('Users').snapshotChanges();
  }

  update_User(recordID, record) {
    this.firestore.doc('Users/' + recordID).update(record);
    console.log('updated');
  }

  delete_User(record_id) {
    this.firestore.doc('Users/' + record_id).delete();
  }
}
