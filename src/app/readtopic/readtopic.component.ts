import { Component, OnInit, ViewChild, ContentChildren, ElementRef } from '@angular/core';
import { MessageService } from '../services/messages.service';

@Component({
  selector: 'app-readtopic',
  templateUrl: './readtopic.component.html',
  styleUrls: ['./readtopic.component.css']
})
export class ReadtopicComponent implements OnInit {
messages:any;
room:string;
pseudo:string;
  constructor(private messageService:MessageService) {


   }



  ngOnInit() {
  
    this.room=localStorage.getItem("room");
    this.pseudo=localStorage.getItem("pseudo");
    this.messageService.read_Messages(this.room).subscribe(data => {
      this.messages = data.map(e => {
       
        return {
         id: e.payload.doc.id,

         message: e.payload.doc.data()["message"],
         pseudo: e.payload.doc.data()["pseudo"],
         type: e.payload.doc.data()["type"],
         date: e.payload.doc.data()["date"],
         




        };
      }
      );
      console.log(this.messages);
  

    });
  }

}
