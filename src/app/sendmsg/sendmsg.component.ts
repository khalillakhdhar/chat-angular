import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/messages.service';
@Component({
  selector: 'app-sendmsg',
  templateUrl: './sendmsg.component.html',
  styleUrls: ['./sendmsg.component.css']
})
export class SendmsgComponent implements OnInit {
  data = { type: '', pseudo: '', message: '', date: '' };
  room: string;
  pseudo: string;
  etat = false;
  message = '';
  constructor(private messageService: MessageService) {
this.room = localStorage.getItem('room');
this.data.pseudo = localStorage.getItem('pseudo');

   }

  ngOnInit() {
  }
  CreateRecord() {


    this.data.date = Date();

    this.messageService.create_NewMessage(this.data, this.room).then(resp => {
      console.log(resp);
     // alert('ajouté avec succés!');
      // window.location.replace('topic');
      this.data.message = '';
    })
           .catch(error => {
             console.log(error);
           });
          }


}
