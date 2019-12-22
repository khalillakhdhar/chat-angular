import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(
    private firestore: AngularFirestore
  ) { }


  create_NewTopic(record) {
    return this.firestore.collection('Topics').add(record);
  }

  read_Topics() {
    return this.firestore.collection('Topics').snapshotChanges();
  }

  update_Topic(recordID, record) {
    this.firestore.doc('Topics/' + recordID).update(record);
    console.log('updated');
  }

  delete_Topic(record_id) {
    this.firestore.doc('Topics/' + record_id).delete();
  }
}
