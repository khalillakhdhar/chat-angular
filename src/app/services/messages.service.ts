import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private firestore: AngularFirestore
  ) { }


  create_NewMessage(record,room) {
    return this.firestore.collection('Topics/'+room+'/Messages').add(record);
  }

  read_Messages(room) {
    
    return this.firestore.collection('Topics/'+room+'/Messages', ref => ref.orderBy('date')).snapshotChanges();

  }

  update_Message(recordID, record) {
    this.firestore.doc('Messages/' + recordID).update(record);
    console.log('updated');
  }

  delete_Message(record_id) {
    this.firestore.doc('Messages/' + record_id).delete();
  }
}
